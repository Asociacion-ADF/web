import { Resend } from "resend";
import type { ContactInput } from "./validation-contacto";
import { MOTIVO_CONTACTO_LABELS } from "./validation-contacto";

export type EmailResult = { sent: true } | { sent: false; reason: string };

export async function sendContactEmail(
  data: ContactInput
): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO_CONTACTO;

  if (!apiKey || !from || !to) {
    return {
      sent: false,
      reason:
        "Faltan variables de entorno de Resend (RESEND_API_KEY, EMAIL_FROM o EMAIL_TO_CONTACTO).",
    };
  }

  const resend = new Resend(apiKey);

  const motivoLabel = MOTIVO_CONTACTO_LABELS[data.motivo];

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `Nuevo mensaje de contacto — ${data.nombre}`,
      text: [
        `Nuevo mensaje desde /contacto.`,
        ``,
        `Nombre completo: ${data.nombre}`,
        `Teléfono: ${data.telefono}`,
        `Correo electrónico: ${data.email}`,
        `Motivo de contacto: ${motivoLabel}`,
        `Mensaje: ${data.mensaje || "(sin mensaje)"}`,
      ].join("\n"),
    });

    if (error) {
      return { sent: false, reason: error.message };
    }
    return { sent: true };
  } catch (err) {
    return {
      sent: false,
      reason: err instanceof Error ? err.message : "Error desconocido de Resend.",
    };
  }
}
