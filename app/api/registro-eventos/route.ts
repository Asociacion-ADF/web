import { NextRequest, NextResponse } from "next/server";
import { eventRegistrationSchema } from "@/lib/validation";
import { isRateLimited } from "@/lib/rate-limit";
import { sendEventRegistrationEmail } from "@/lib/email";
import { appendEventRegistrationRow } from "@/lib/sheets";

export const runtime = "nodejs";

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

function getPageOrigin(request: NextRequest): string {
  const referer = request.headers.get("referer");
  if (!referer) return "/proximos-encuentros";
  try {
    return new URL(referer).pathname;
  } catch {
    return "/proximos-encuentros";
  }
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Demasiadas solicitudes. Intenta de nuevo en un minuto." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Solicitud inválida." },
      { status: 400 }
    );
  }

  const parsed = eventRegistrationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Revisa los datos del formulario." },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Honeypot: si un bot llenó este campo oculto, respondemos éxito falso
  // sin procesar nada, para no delatar la defensa.
  if (data.empresa) {
    return NextResponse.json({ ok: true });
  }

  const pageOrigin = getPageOrigin(request);

  const [emailResult, sheetsResult] = await Promise.all([
    sendEventRegistrationEmail(data),
    appendEventRegistrationRow(data, { pageOrigin }),
  ]);

  if (!emailResult.sent) {
    console.error("[registro-eventos] Email no enviado:", emailResult.reason);
  }
  if (!sheetsResult.saved) {
    console.error("[registro-eventos] Sheets no guardado:", sheetsResult.reason);
  }

  if (!emailResult.sent && !sheetsResult.saved) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "No pudimos procesar tu registro en este momento. Intenta más tarde o contáctanos directamente.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
