import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation-contacto";
import { isRateLimited } from "@/lib/rate-limit";
import { sendContactEmail } from "@/lib/email-contacto";
import { appendContactRow } from "@/lib/sheets-contacto";

export const runtime = "nodejs";

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

function getPageOrigin(request: NextRequest): string {
  const referer = request.headers.get("referer");
  if (!referer) return "/contacto";
  try {
    return new URL(referer).pathname;
  } catch {
    return "/contacto";
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

  const parsed = contactSchema.safeParse(body);
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
    sendContactEmail(data),
    appendContactRow(data, { pageOrigin }),
  ]);

  if (!emailResult.sent) {
    console.error("[contacto] Email no enviado:", emailResult.reason);
  }
  if (!sheetsResult.saved) {
    console.error("[contacto] Sheets no guardado:", sheetsResult.reason);
  }

  // La condición mínima de éxito es la fila guardada en Google Sheets — es
  // la base de datos de registros de AADF. El email es una notificación
  // complementaria: si falla, se registra en logs pero no bloquea el éxito.
  if (!sheetsResult.saved) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "No pudimos procesar tu mensaje en este momento. Intenta más tarde o contáctanos directamente.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
