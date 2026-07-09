// Fuente única del evento activo mostrado en /proximos-encuentros.
// app/proximos-encuentros/page.tsx importa estos datos para la tarjeta
// visible, y app/api/registro-eventos/route.ts los importa (vía
// activeEventLabel) para el correo y la fila de Google Sheets. Actualizar
// el próximo encuentro solo requiere editar este archivo.
export const ACTIVE_EVENT = {
  programa: "Diálogos con la Sociedad",
  ponente: "Dr. Luis Enrique Palafox Maestre",
  cargo: "Rector de UABC",
  fecha: "13 de julio de 2026",
  hora: "2:00 PM",
  lugar: "Oryx Restaurante",
  fotoSrc:
    "/eventos/foto-perfil-dialogos-sociedad-luis-enrique-palafox-13-julio-2026.jpeg",
  fotoAlt: "Dr. Luis Enrique Palafox Maestre",
} as const;

export function eventTitle(): string {
  return `${ACTIVE_EVENT.programa} con el ${ACTIVE_EVENT.ponente}`;
}

export function eventSpeakerLine(): string {
  return `${ACTIVE_EVENT.ponente} — ${ACTIVE_EVENT.cargo}`;
}

export function eventDateLine(): string {
  return `${ACTIVE_EVENT.fecha} · ${ACTIVE_EVENT.hora} · ${ACTIVE_EVENT.lugar}`;
}

export function activeEventLabel(): string {
  const { programa, ponente, cargo, fecha, hora, lugar } = ACTIVE_EVENT;
  return `${programa} — ${ponente} (${cargo}) — ${fecha}, ${hora}, ${lugar}`;
}
