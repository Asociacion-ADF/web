import { Resend } from "resend";
import { activeEventLabel } from "./active-event";
import type { EventRegistrationInput } from "./validation";
import { MOTIVO_LABELS } from "./validation";

export type EmailResult = { sent: true } | { sent: false; reason: string };

export async function sendEventRegistrationEmail(
  data: EventRegistrationInput
): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO_EVENTOS;

  if (!apiKey || !from || !to) {
    return {
      sent: false,
      reason:
        "Faltan variables de entorno de Resend (RESEND_API_KEY, EMAIL_FROM o EMAIL_TO_EVENTOS).",
    };
  }

  const resend = new Resend(apiKey);

  const motivoLabel = MOTIVO_LABELS[data.motivo];

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `Nuevo registro de evento — ${data.nombre}`,
      text: [
        `Nuevo registro desde /proximos-encuentros.`,
        ``,
        `Evento activo: ${activeEventLabel()}`,
        `Nombre completo: ${data.nombre}`,
        `Teléfono: ${data.telefono}`,
        `Correo electrónico: ${data.email}`,
        `Tipo de solicitud: ${motivoLabel}`,
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
