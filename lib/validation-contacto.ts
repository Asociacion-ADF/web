import { z } from "zod";
import { noHtml } from "./validation";

export const contactSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, "El nombre es obligatorio.")
    .max(100, "El nombre no debe superar 100 caracteres.")
    .pipe(noHtml("El nombre")),
  telefono: z
    .string()
    .trim()
    .min(1, "El teléfono es obligatorio.")
    .max(20, "El teléfono no debe superar 20 caracteres.")
    .pipe(noHtml("El teléfono")),
  email: z
    .string()
    .trim()
    .min(1, "El correo es obligatorio.")
    .max(254, "El correo no debe superar 254 caracteres.")
    .email("Correo electrónico inválido."),
  motivo: z.enum(
    [
      "institucional",
      "programas",
      "encuentros",
      "miembro",
      "aliado",
      "general",
      "otro",
    ],
    { message: "Selecciona un motivo de contacto válido." }
  ),
  mensaje: z
    .string()
    .trim()
    .max(1000, "El mensaje no debe superar 1000 caracteres.")
    .pipe(noHtml("El mensaje"))
    .optional()
    .or(z.literal("")),
  // Honeypot: debe llegar vacío. Si un bot lo rellena, se descarta en silencio.
  empresa: z.string().max(200).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const MOTIVO_CONTACTO_LABELS: Record<ContactInput["motivo"], string> = {
  institucional: "Solicitar información institucional",
  programas: "Quiero conocer los programas",
  encuentros: "Quiero recibir información de próximos encuentros",
  miembro: "Quiero ser miembro",
  aliado: "Quiero ser aliado estratégico",
  general: "Contacto general",
  otro: "Otro",
};
