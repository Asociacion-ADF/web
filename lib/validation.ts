import { z } from "zod";

const HTML_TAG_PATTERN = /<[^>]*>/;

const noHtml = (label: string) =>
  z.string().refine((value) => !HTML_TAG_PATTERN.test(value), {
    message: `${label} no debe contener etiquetas HTML.`,
  });

export const eventRegistrationSchema = z.object({
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
  motivo: z.enum(["registro", "duda", "otro"], {
    message: "Selecciona un tipo de solicitud válido.",
  }),
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

export type EventRegistrationInput = z.infer<typeof eventRegistrationSchema>;

export const MOTIVO_LABELS: Record<
  EventRegistrationInput["motivo"],
  string
> = {
  registro: "Registrarme al próximo encuentro",
  duda: "Tengo una duda sobre el evento",
  otro: "Otro",
};
