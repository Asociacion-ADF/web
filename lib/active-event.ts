// Fuente única del evento activo mostrado en /proximos-encuentros.
// Al actualizar el próximo encuentro en app/proximos-encuentros/page.tsx,
// actualizar también este objeto para que el registro en Sheets y el
// correo de notificación reflejen el evento correcto.
export const ACTIVE_EVENT = {
  programa: "Diálogos con la Sociedad",
  ponente: "Dr. Luis Enrique Palafox Maestre",
  cargo: "Rector de UABC",
  fecha: "13 de julio de 2026",
  hora: "2:00 PM",
  lugar: "Oryx Restaurante",
} as const;

export function activeEventLabel(): string {
  const { programa, ponente, cargo, fecha, hora, lugar } = ACTIVE_EVENT;
  return `${programa} — ${ponente} (${cargo}) — ${fecha}, ${hora}, ${lugar}`;
}
