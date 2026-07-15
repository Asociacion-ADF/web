# Estado del proyecto — Acción por los Derechos Fundamentales, A.C.

Última actualización: 26 de junio de 2026

---

## 1. Rutas principales

| Ruta | Descripción | Estado |
|------|-------------|--------|
| `/` | Home | ✓ Aprobada |
| `/nosotros` | Historia, misión y equipo | ✓ Aprobada |
| `/trayectoria-rufo-ibarra-batista` | Perfil del fundador | ✓ Aprobada |
| `/programas` | Índice de los 4 programas | ✓ Aprobada |
| `/programas/fortaleciendo-valores` | Programa de valores | ✓ Aprobada |
| `/programas/dialogos-con-la-sociedad` | Programa de diálogos | ✓ Aprobada |
| `/programas/vigilancia-ciudadana` | Programa de vigilancia | ✓ Aprobada |
| `/programas/derecho-de-propiedad` | Programa de propiedad | ✓ Aprobada |
| `/participa` | Membresía y formas de participar | ✓ Funcional |
| `/proximos-encuentros` | Eventos próximos y anteriores | ✓ Aprobada (contenido dinámico) |
| `/noticias` | Noticias y cobertura en medios | ✓ Aprobada |
| `/comunicados` | Comunicados institucionales | ✓ Aprobada |
| `/contacto` | Formulario de contacto | ✓ Funcional |
| `/aviso-de-privacidad` | Aviso legal LFPDPPP | ✓ Aprobada |
| `/confirmacion` | Confirmación de formulario | ✓ Aprobada |
| `404` | Página no encontrada personalizada | ✓ Aprobada |

---

## 2. Estado de /proximos-encuentros

### Próximo encuentro en lista

- Programa: Diálogos con la Sociedad
- Ponente: Dr. Luis Enrique Palafox Maestre
- Cargo: Rector de UABC
- Fecha: 13 de julio de 2026
- Hora: 2:00 PM
- Lugar: Oryx Restaurante
- **Imagen circular:** `public/eventos/foto-perfil-dialogos-sociedad-luis-enrique-palafox-13-julio-2026.jpeg` (foto/retrato del expositor).
- **Botón "Registrarme":** visible, enlaza a `#registro`.
- Dr. Ismael Burgueño Ruiz (Alcalde de Tijuana, 6 de julio de 2026, 2:00 PM, Oryx Restaurante) permanece en el histórico de encuentros anteriores.
- Dra. Lorena Becerra permanece en el histórico de encuentros anteriores (ver más abajo).
- **Correo para eventos/comprobantes:** eventos@asociacionaccion.com

> La sección "Próximo encuentro destacado" (featured hero superior, con flyer grande) fue eliminada y luego reintentada por error en julio 2026; quedó revertida. La card correcta de próximo encuentro es la card horizontal — ver detalle completo en "Actualización de próximos encuentros — julio 2026".
>
> El estado "sin ponente confirmado" (placeholder con logo institucional, sin botón de registro) fue aprobado en julio 2026 tras pasar a Ismael Burgueño al histórico, para no dejar la card vacía mientras no hay nuevo expositor.

### Calendario de Diálogos con la Sociedad 2026

- **Archivo activo:** `public/eventos/calendario-dialogos-sociedad-2026-reprogramado.png`
- Usado en: `/proximos-encuentros`, `/programas/dialogos-con-la-sociedad`, y `NewsSection` en Home.
- César Damián Retes aparece en el calendario con etiqueta "Fecha reprogramada" en la imagen del PNG.

### Encuentros anteriores

Carrusel horizontal con flechas de navegación (componente cliente: `PastEventsCarousel.tsx`):

| Evento | Archivo |
|--------|---------|
| Jesús Alejandro Ruiz Uribe — 17 de marzo de 2026 | `dialogos-sociedad-jesus-alejandro-ruiz-uribe-17-marzo-2026.jpeg` |
| Evangelina Moreno Guerra — 6 de abril de 2026 | `dialogos-sociedad-evangelina-moreno-guerra-06-abril-2026.jpeg` |
| Christopher Teal — 29 de mayo de 2026 | `dialogos-sociedad-christopher-teal-29-mayo-2026.jpeg` |
| Héctor Osuna Jaime — 15 de junio de 2026 | `dialogos-sociedad-hector-osuna-jaime-flyer-cuadrado-15-junio-2026.jpeg` |
| Dra. Lorena Becerra — 22 de junio de 2026 | `dialogos-sociedad-lorena-becerra-22-junio-2026.jpeg` |
| Dr. Ismael Burgueño Ruiz — 6 de julio de 2026 | `dialogos-sociedad-ismael-burgueno-6-julio-2026.jpg` |

---

## Actualización de próximos encuentros — julio 2026

### Estado actual del próximo evento

El próximo encuentro visible en /proximos-encuentros es:

- Programa: Diálogos con la Sociedad
- Ponente: Dr. Ismael Burgueño Ruiz
- Cargo: Alcalde de Tijuana
- Fecha: 6 de julio de 2026
- Hora: 2:00 PM
- Lugar: Oryx Restaurante
- Botón: Registrarme
- Correo para eventos/comprobantes: eventos@asociacionaccion.com

### Archivos del evento Luis Enrique Palafox Maestre

Los archivos seguros usados para este evento son:

- Foto circular / retrato del expositor:
  `public/eventos/foto-perfil-dialogos-sociedad-luis-enrique-palafox-13-julio-2026.jpeg`
- Flyer del evento (respaldo, no usado en la card circular):
  `public/eventos/dialogos-sociedad-luis-enrique-palafox-13-julio-2026.jpeg`

Importante: los archivos de eventos deben nombrarse sin espacios, sin acentos y sin ñ para evitar errores de rutas en producción.

### Regla visual para la card de próximo encuentro

La sección correcta del próximo evento en /proximos-encuentros es una card horizontal, no un flyer recortado.

Debe mantener:

- tarjeta blanca horizontal
- imagen circular a la izquierda
- texto a la derecha
- botón "Registrarme"
- estilo institucional sobrio
- borde suave / sombra ligera

Regla crítica: en el marco circular debe ir siempre la foto/retrato del expositor, no el flyer del evento.

No hacer:

- no meter el flyer vertical dentro del círculo
- no usar el flyer como imagen principal recortada de la card
- no crear un banner nuevo
- no rediseñar la sección
- no cambiar el layout aprobado

### Uso del flyer

El flyer vertical puede existir como asset del evento o utilizarse en otras piezas si se solicita, pero no debe usarse como imagen circular ni como imagen recortada en la card horizontal del próximo evento.

### Evento anterior

La Dra. Lorena Becerra debe permanecer únicamente en el histórico / eventos pasados de "Diálogos que construyen comunidad". No debe aparecer como próximo evento.

### Regla de mantenimiento para futuros eventos

Cuando se actualice el próximo evento:

1. Cambiar únicamente:
   - nombre del ponente
   - cargo
   - fecha si aplica
   - foto circular del expositor
   - flyer si aplica
2. Mantener si no se indica lo contrario:
   - hora
   - lugar
   - formato de la card
   - botón
   - estilo visual aprobado
3. Usar siempre:
   - imagen de perfil/retrato en la card horizontal
   - flyer solo como material complementario
4. Verificar siempre:
   - desktop
   - móvil
   - que no haya overflow
   - que la foto circular no esté recortada incorrectamente
   - que no existan duplicados
5. Después de cada actualización:
   - npm run lint
   - npm run build
   - commit descriptivo
   - push a main

Nota: este ajuste quedó aprobado después de corregir el error donde se intentó usar el flyer vertical como imagen principal/circular. La versión aprobada usa la card horizontal con retrato del expositor.

---

## 3. Imágenes en public/eventos/

### Flyers de Diálogos con la Sociedad 2026

| Archivo | Uso |
|---------|-----|
| `dialogos-sociedad-jesus-alejandro-ruiz-uribe-17-marzo-2026.jpeg` | Carrusel de encuentros anteriores |
| `dialogos-sociedad-evangelina-moreno-guerra-06-abril-2026.jpeg` | Carrusel de encuentros anteriores |
| `dialogos-sociedad-christopher-teal-29-mayo-2026.jpeg` | Carrusel de encuentros anteriores |
| `dialogos-sociedad-hector-osuna-jaime-15-junio-2026.jpeg` | Flyer horizontal (disponible) |
| `dialogos-sociedad-hector-osuna-jaime-flyer-cuadrado-15-junio-2026.jpeg` | Carrusel de encuentros anteriores |
| `dialogos-sociedad-cesar-damian-retes-22-junio-2026.jpeg` | Reserva (no en uso activo) |
| `dialogos-sociedad-cesar-damian-retes-flyer-22-junio-2026.jpeg` | Reserva (no en uso activo) |
| `dialogos-sociedad-lorena-becerra-22-junio-2026.jpeg` | Carrusel de encuentros anteriores |
| `dialogos-sociedad-ismael-burgueno-6-julio-2026.jpg` | Carrusel de encuentros anteriores |
| `dialogos-sociedad-luis-enrique-palafox-13-julio-2026.jpeg` | Asset del evento (no usado en la card de próximo encuentro) |

### Fotos de perfil / retratos

| Archivo | Uso |
|---------|-----|
| `dialogos-sociedad-dra-lorena-becerra-perfil.jpeg` | Reserva (no en uso activo, evento ya en histórico) |
| `dialogos-sociedad-cesar-damian-retes-perfil.jpeg` | Reserva (no en uso activo) |
| `hector-osuna-jaime-perfil.jpeg` | Disponible |
| `foto-perfil-ismael-burgueno-ruiz-dialogos-sociedad.jpeg` | Reserva (no en uso activo, evento ya en histórico) |
| `foto-perfil-dialogos-sociedad-luis-enrique-palafox-13-julio-2026.jpeg` | **Activo** — foto circular en lista de próximos encuentros |

### Calendario

| Archivo | Uso |
|---------|-----|
| `calendario-dialogos-sociedad-2026-reprogramado.png` | **Activo** — Home (NewsSection), /proximos-encuentros, /programas/dialogos-con-la-sociedad |
| `calendario-encuentros-dialogos-2026.jpeg` | Versión anterior (no en uso) |

### Imágenes de eventos generales / secciones

| Archivo | Uso |
|---------|-----|
| `hero-dialogos-sociedad.jpeg` | HeroSection home |
| `dialogos-sociedad-asistentes-01.jpeg` | Hero de /noticias y /comunicados |
| `dialogos-sociedad-conferencia-01.jpeg` | Hero de /proximos-encuentros |
| `comunicados/hero-comunicados-dialogos-hector-osuna.jpeg` | Hero de /comunicados |

### Imágenes de programas

| Archivo | Uso |
|---------|-----|
| `fortaleciendo-valores-nino-estudiando-01.jpeg` | Hero de /programas/fortaleciendo-valores (disponible) |
| `fortaleciendo-valores-programa-piloto-educacion-basica-01.jpeg` | Hero /programas/fortaleciendo-valores (activo) y NewsSection tab Programas |
| `niñas-jugando-basquet-fortaleciendo-valores-01.jpeg` | Disponible |
| `vigilancia-ciudadana-mesa-trabajo-01.jpeg` | Hero /programas/vigilancia-ciudadana |
| `derecho-propiedad-pancartas-uso-suelo-lomas-agua-caliente-01.jpeg` | Hero /programas/derecho-de-propiedad |
| `derecho-propiedad-uso-suelo-01.jpeg` | Disponible |
| `derecho-propiedad-uso-suelo-lomas-agua-caliente-cartel-01.jpeg` | Disponible |

### Imágenes institucionales / fundador

| Archivo | Uso |
|---------|-----|
| `rufo-ibarra-batista-fundador-aadf-01.jpg` | /nosotros — sección fundador |
| `rufo-ibarra-batista-retrato-biblioteca-01.jpg` | /trayectoria |
| `rufo-ibarra-batista-retrato-institucional-01.jpg` | /trayectoria |
| `consejo-directivo-aadf-reunion-pandemia-01.jpeg` | /nosotros — historia |
| `fundador-entrega-comida-comunidad-01.jpeg` | /nosotros |
| `oficinas-asociacion-tijuana-01.png` | /contacto |

---

## 4. Estado de /noticias

La página tiene contenido real publicado con diseño aprobado.

- Noticias de cobertura en medios externos sobre la asociación y sus programas.
- Imágenes en `public/noticias/`.
- Orden: más reciente a más antiguo.
- No mezclar con comunicados oficiales.

---

## 5. Estado de /comunicados

La página tiene contenido real publicado con diseño aprobado.

- Comunicados oficiales emitidos por la asociación.
- PDFs en `public/comunicados/`.
- Portadas institucionales uniformes: sin fechas dentro de la portada azul.
- Diseño de card aprobado y homogéneo en móvil y desktop.

---

## 6. Pendientes generales

| Pendiente | Descripción |
|-----------|-------------|
| Conectar formularios reales | ✓ Completado — `/proximos-encuentros` y `/contacto` validados en producción (Route Handler + Resend + Google Sheets) — ver "Formularios validados en producción" más abajo |
| Configuración Vercel | Crear cuenta, conectar repo `Asociacion-ADF/web`, hacer deploy preview |
| Conectar dominio | Apuntar `asociacionaccion.com` a Vercel una vez aprobado el preview |
| Google Workspace / correo | Activar `contacto@asociacionaccion.com`, configurar SPF, DKIM y DMARC |
| Google Search Console | Configurar después del deploy con dominio activo |

Ver también: [`docs/launch-checklist.md`](./launch-checklist.md)

---

## 7. Datos de contacto y referencias técnicas

- **Repositorio:** https://github.com/Asociacion-ADF/web
- **Rama:** `main`
- **Dominio:** `asociacionaccion.com`
- **Correo institucional:** `contacto@asociacionaccion.com`
- **Teléfono:** `+52 664 681 7278`
- **Stack:** Next.js 16 App Router · Tailwind CSS v4 · Static Export · TypeScript

---

## Estado visual y funcional aprobado

### Sitio y dominio

- Sitio oficial: asociacionaccion.com
- Repositorio GitHub: https://github.com/Asociacion-ADF/web
- Branch principal: main
- Stack: Next.js
- Assets públicos en:
  - `public/eventos`
  - `public/noticias`
  - `public/comunicados`

### Marca

- Azul claro oficial: `#a3d3f2`
- Verde oficial: `#3d815c`
- Blanco: `#ffffff`
- Azul profundo usado para títulos/acento: `#154c66`
- Mantener estilo institucional, sobrio, limpio y premium.
- No usar azul claro como fondo excesivamente infantil.
- No cambiar paleta sin autorización.

### Contacto institucional

- Email: contacto@asociacionaccion.com
- Teléfono: +52 664 681 7278
- Dirección: Blvd. Agua Caliente 4558, Interior 1403-B, Col. Aviación, C.P. 22014, Tijuana, Baja California.

### Redes sociales

- Facebook: https://www.facebook.com/accionporlosderechosfundamentales
- Instagram: https://www.instagram.com/accionderechosfundamentales/
- LinkedIn: https://www.linkedin.com/company/asociacion-derechos-fundamentales

### Rutas revisadas y aprobadas

Revisadas visualmente y responsive:

- `/`
- `/programas`
- `/programas/fortaleciendo-valores`
- `/programas/dialogos-con-la-sociedad`
- `/programas/vigilancia-ciudadana`
- `/programas/derecho-de-propiedad`
- `/participa`
- `/contacto`
- `/noticias`
- `/comunicados`
- `/proximos-encuentros`
- `/trayectoria-rufo-ibarra-batista`
- `/aviso-de-privacidad`
- `/confirmacion`
- 404 personalizada

### Estado responsive

- Revisión móvil completada.
- Home: aprobada.
- Programas: aprobado.
- Participa: funcional.
- Contacto: funcional.
- Noticias: aprobada.
- Comunicados: aprobada.
- Próximos encuentros: aprobada.
- Trayectoria Rufo Ibarra Batista: aprobada.
- Heroes internos de programas: aprobados con overlay azul oscuro sobre imágenes.
- Calendario Diálogos con la Sociedad actualizado: aprobado.

### Decisiones visuales importantes

- En páginas internas de programas se usa hero con imagen de fondo y overlay `bg-[#154c66]/82` (o `/88` en derecho-de-propiedad).
- La imagen funciona como textura/contexto, no compite con el H1.
- El overlay asegura legibilidad en desktop y móvil.
- No usar imágenes muy cargadas sin overlay.
- En móvil evitar H1 desbordados, títulos cortados u overflow horizontal.
- Mantener coherencia visual entre páginas internas de programas.
- Heroes unificados: `h-[88vh] min-h-[580px]`, imagen `fill` + `object-cover`, texto centrado con `relative z-10`.

### Próximos encuentros

Estado actual aprobado:

- Próximo encuentro en lista: Dr. Luis Enrique Palafox Maestre (Rector de UABC, 13 de julio de 2026 · 2:00 PM · Oryx Restaurante), con foto circular de retrato y botón "Registrarme".
- Dr. Ismael Burgueño Ruiz (Alcalde de Tijuana, 6 de julio de 2026 · 2:00 PM · Oryx Restaurante) permanece en el histórico de encuentros anteriores.
- Dra. Lorena Becerra permanece en el histórico de encuentros anteriores; ya no aparece como próximo evento.
- Calendario general: `public/eventos/calendario-dialogos-sociedad-2026-reprogramado.png`
- La sección destacada superior (featured hero) permanece eliminada; solo existe la card horizontal de la lista. Ver detalle completo en "Actualización de próximos encuentros — julio 2026".

### Reglas para futuras actualizaciones de eventos

Cuando se actualice `/proximos-encuentros`:

1. No rediseñar la página.
2. Cambiar solo los datos necesarios.
3. Mantener estructura visual aprobada.
4. Si cambia expositor, actualizar:
   - foto circular
   - nombre
   - cargo
   - flyer principal si aplica
5. No alterar fecha, hora, lugar, precio o teléfonos si no se solicita expresamente.
6. Si se reprograma un expositor del calendario general, usar una imagen ya editada y validada.
7. Las imágenes de eventos deben ir en `public/eventos`.
8. Verificar siempre desktop y móvil.

### Noticias

Estado actual:

- `/noticias` se usa para apariciones en medios y cobertura externa.
- Orden recomendado: más reciente a más antiguo.
- Mantener cards verticales, limpias y consistentes.
- Las imágenes de noticias deben ir en `public/noticias`.
- No mezclar comunicados oficiales con noticias de medios.

Reglas futuras:

1. Para agregar noticia nueva, crear card en `/noticias`.
2. Usar título claro.
3. Añadir medio, fecha y resumen breve.
4. Usar imagen optimizada en `public/noticias`.
5. Mantener orden cronológico descendente.
6. No romper el diseño responsive.

### Comunicados

Estado actual:

- `/comunicados` se usa para documentos oficiales emitidos por la asociación.
- Funciona como sala de prensa / repositorio institucional.
- Las cards tienen diseño uniforme con portada institucional azul claro.
- Las portadas muestran: ícono + "COMUNICADO OFICIAL" + etiqueta. Sin fechas en la portada.
- PDFs en `public/comunicados`.

Reglas futuras:

1. Para agregar comunicado nuevo, subir PDF a `public/comunicados`.
2. Crear card con: título, fecha, descripción breve, y botón para ver/descargar PDF.
3. Mantener diseño institucional aprobado.
4. No mezclar comunicados con noticias externas.
5. No mostrar fechas dentro de la portada azul (van solo en el cuerpo de la card).
6. Verificar móvil para evitar textos cortados.

### Breadcrumbs (julio 2026)

Se incorporaron breadcrumbs institucionales como decisión permanente de navegación:

- Componente reutilizable: `components/ui/Breadcrumbs.tsx`. Recibe un arreglo `items` (`{ label, href? }`) y renderiza `nav aria-label="Breadcrumb"` con separadores (ícono `ChevronRight`), fondo blanco y borde inferior sutil (`border-border-subtle`). El último elemento se muestra como texto no enlazado con `aria-current="page"`, en azul profundo (`#154c66`); los enlaces previos usan `text-text-muted` con hover `#3d815c`.
- Se coloca como primer elemento dentro del fragmento de cada página, antes de la sección `HERO`, para no tocar ni rediseñar los heroes aprobados (funciona como franja discreta entre el header y el hero).
- **No se agregó en la home (`/`)**, según regla explícita.
- Rutas con breadcrumbs: `/nosotros`, `/trayectoria-rufo-ibarra-batista`, `/programas`, `/programas/fortaleciendo-valores`, `/programas/dialogos-con-la-sociedad`, `/programas/vigilancia-ciudadana`, `/programas/derecho-de-propiedad`, `/participa`, `/proximos-encuentros`, `/noticias`, `/comunicados`, `/contacto`, `/aviso-de-privacidad`.
- Estructura: `Inicio / Nombre de página`, y para las páginas hijas de programas: `Inicio / Programas / Nombre del programa`.
- No se modificó header, footer, ni el diseño/layout de ninguna sección aprobada.

### Footer y header

- Header responsive aprobado.
- Footer responsive aprobado.
- En móvil, parte final de copyright y aviso de privacidad debe mantenerse centrada.
- No modificar footer ni header salvo instrucción expresa.

### Importante para Claude

Antes de hacer cambios futuros:

- Leer este documento.
- No rediseñar secciones ya aprobadas.
- No modificar paleta ni estructura global.
- No tocar páginas no solicitadas.
- Hacer cambios puntuales.
- Ejecutar siempre:
  ```
  npm run lint
  npm run build
  ```
- Hacer commit descriptivo y push a main solo si todo está limpio.

---

## Seguridad — estado actual y reglas para fase 2 de formularios

### Estado de seguridad auditado (22 de junio de 2026)

| Área | Estado |
|------|--------|
| Secretos hardcodeados | ✓ Limpio — no hay API keys, tokens ni credenciales en el código |
| Variables de entorno | ✓ Limpio — no se usa ninguna `NEXT_PUBLIC_` ni `process.env` |
| Formularios | ✓ Stubs UI — los 3 formularios no envían datos a ningún endpoint todavía |
| `dangerouslySetInnerHTML` | ✓ Limpio — ninguna ocurrencia en el proyecto |
| API routes / Server Actions | ✓ Limpio — no existe ningún endpoint activo |
| Base de datos | ✓ Sin conectar — no hay Supabase, Prisma, Firebase ni equivalente |
| Archivos en `public/` | ✓ Limpio — solo PDFs institucionales e imágenes aprobadas |
| Headers de seguridad | ✓ Excelente — CSP completa, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy |

El sitio es un static export sin backend activo. No hay superficie de ataque real en producción.

### Headers de seguridad configurados

Definidos en `next.config.ts`, aplicados a todas las rutas:

- `Content-Security-Policy` — `default-src 'self'`, `script-src 'self' 'unsafe-inline'`, `frame-ancestors 'none'`, `form-action 'self'`
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()`
- `Strict-Transport-Security: max-age=63072000; includeSubDomains`

> **Nota fase 2:** La CSP tiene `connect-src 'self'`. Si en fase 2 el fetch va a través de una API route propia (`/api/...`), este header es suficiente. Si se llama directamente a un proveedor externo desde el cliente (Resend, Supabase), habrá que agregar su dominio a `connect-src` en `next.config.ts`.

### Reglas de seguridad para fase 2 de formularios

Antes de conectar cualquier endpoint real de formularios:

**Validación y sanitización**
1. Validar siempre en servidor — la validación de cliente es UX, no seguridad.
2. Sanitizar y normalizar todas las entradas antes de procesarlas.
3. Limitar longitud de campos: nombre ≤ 100 chars, email ≤ 254, teléfono ≤ 20, mensaje ≤ 1000.
4. Rechazar entradas que contengan etiquetas HTML o scripts — strip o reject.
5. No guardar HTML crudo en base de datos.
6. No usar `dangerouslySetInnerHTML` con ningún dato proveniente del usuario.

**Infraestructura del endpoint**
7. Implementar rate limiting por IP en cualquier endpoint público (máximo recomendado: 5 envíos por minuto por IP).
8. Agregar honeypot field (campo oculto) como primera defensa anti-spam, antes de considerar reCAPTCHA.
9. Si el volumen de spam es alto, implementar Google reCAPTCHA v3 — recordar agregar `https://www.google.com` a `connect-src` y `script-src` en la CSP.
10. Manejar errores del servidor sin exponer stack traces ni detalles internos al cliente.
11. Logs sin datos sensibles — no registrar contraseñas, tokens ni contenido completo de mensajes.

**Secretos y variables de entorno**
12. Nunca hardcodear API keys, tokens SMTP ni service role keys en el código.
13. Usar variables de entorno en Vercel (Panel → Settings → Environment Variables) para todos los secretos.
14. Si se usa Supabase: usar solo la `anon/public key` en el cliente. La `service_role key` solo en servidor, nunca en un Client Component.
15. Nunca exponer la `service_role key` de Supabase en frontend — tiene permisos de bypass total de RLS.

**Base de datos (si aplica)**
16. Activar Row Level Security (RLS) en Supabase antes de conectar cualquier formulario a producción.
17. Definir políticas RLS explícitas — no asumir que el bloqueo por defecto es suficiente sin validar.
18. No dar acceso de escritura libre a tablas sin políticas de inserción controladas.

**Operaciones**
19. Probar el flujo completo de formularios en preview de Vercel antes de anunciarlo públicamente.
20. Verificar que los emails de notificación llegan correctamente antes de activar en producción.
21. Confirmar que el dominio remitente (`contacto@asociacionaccion.com`) tiene SPF y DKIM configurados para evitar que los emails lleguen a spam.

---

## Forma de trabajo aprobada

- Cambios puntuales, no rediseños completos.
- Primero entender la página afectada.
- No tocar rutas no solicitadas.
- No modificar responsive aprobado.
- No cambiar imágenes, colores ni textos si no se pide.
- Confirmar archivos modificados antes del commit cuando el cambio sea sensible.
- Siempre probar lint y build antes de hacer commit.

---

## Cierre Fase 1 — Publicación e indexación inicial

### Estado general

* Sitio publicado en producción.
* Dominio oficial funcionando: https://www.asociacionaccion.com
* Vercel conectado y desplegando desde GitHub.
* GitHub repo: https://github.com/Asociacion-ADF/web
* Branch principal: main

### Diseño y responsive

* Revisión visual responsive completada.
* Home aprobada.
* Programas aprobada.
* Noticias aprobada.
* Comunicados aprobada.
* Próximos encuentros aprobada.
* Trayectoria Rufo Ibarra Batista aprobada.
* Participa y Contacto quedan funcionales para Fase 1, con posible mejora editorial futura.
* Heroes internos de programas aprobados con overlay azul oscuro.
* Calendario de Diálogos con la Sociedad actualizado con César Damián Retes marcado como "Fecha reprogramada".
* Evento destacado actualizado a Dra. Lorena Becerra.

### SEO técnico

* robots.txt configurado.
* sitemap.xml configurado.
* Canonical usando https://www.asociacionaccion.com
* Metadata global revisada.
* Google Search Console verificado.
* Sitemap enviado correctamente: https://www.asociacionaccion.com/sitemap.xml
* URLs principales solicitadas para indexación.
* Nota: Search Console puede tardar horas o días en reflejar indexación.

### Google Business Profile

* Perfil de Empresa de Google verificado.
* Web conectada: https://www.asociacionaccion.com
* Redes sociales conectadas.
* Pendiente completar/confirmar:
  * categoría
  * fotos
  * logo
  * reseñas iniciales

### Seguridad

* Auditoría básica realizada.
* No se encontraron secretos expuestos.
* No hay backend activo.
* No hay base de datos conectada.
* No hay Supabase ni reglas RLS pendientes porque aún no existe base de datos.
* No hay endpoints públicos activos para formularios.
* Headers de seguridad revisados.
* Reglas para Fase 2 de formularios documentadas.

### Pendientes Fase 1

* Revisar Search Console en 48 horas y 7 días.
* Confirmar páginas indexadas.
* Completar fotos y categoría en Google Business Profile.
* Realizar prueba pública final desde móvil y desktop.
* Compartir web para revisión institucional.

### Inicio Fase 2

Fase 2 será la conexión real de formularios.

### Diferenciación de formularios por intención (julio 2026)

Antes de conectar backend, los dos formularios existentes quedaron diferenciados según la intención real de cada página (ambos siguen sin backend, redirigiendo a `/confirmacion`):

- **`/proximos-encuentros` — `RegistrationForm.tsx`:** el selector cambió de "Motivo de interés" a **"Tipo de solicitud"**, con opciones enfocadas solo en el evento: `Registrarme al próximo encuentro`, `Tengo una duda sobre el evento`, `Otro`. Ya no incluye opciones de membresía, aliados, programas ni información general. Botón "Enviar registro" sin cambios.
- **`/contacto` — `ContactForm.tsx`:** el selector "Motivo de contacto" ahora cubre las intenciones generales de la asociación: `Solicitar información institucional`, `Quiero conocer los programas`, `Quiero recibir información de próximos encuentros`, `Quiero ser miembro`, `Quiero ser aliado estratégico`, `Contacto general`, `Otro`. No incluye "Registrarme al próximo encuentro" (esa acción vive solo en `/proximos-encuentros`). Botón "Enviar mensaje" sin cambios.
- No se modificó diseño, layout, ni los campos Nombre completo / Teléfono / Correo electrónico / Mensaje opcional en ninguno de los dos formularios.

Decisión recomendada:

* No usar Supabase todavía.
* No usar base de datos pública.
* Implementar primero: formulario → backend seguro → email institucional + Google Sheets

Reglas Fase 2:

* validar siempre en servidor
* sanitizar entradas
* limitar longitud
* usar honeypot o protección anti-spam
* no guardar HTML crudo
* no exponer secretos en frontend
* usar variables de entorno en Vercel
* probar en producción antes de anunciar formularios

### Conexión funcional de /proximos-encuentros (julio 2026)

Se implementó el backend real del formulario de `/proximos-encuentros` (email interno + Google Sheets). El de `/contacto` queda para una fase posterior, reutilizando la misma infraestructura.

**Corrección importante:** el stack no es "Static Export" — `next.config.ts` no tiene `output: "export"`. Es un Next.js 16 App Router estándar desplegado en Vercel (SSR/Node), por lo que sí soporta Route Handlers de forma nativa.

**Arquitectura elegida:** Route Handler propio (`app/api/registro-eventos/route.ts`), llamado por `fetch` desde `RegistrationForm.tsx` (Client Component). No se usa Make.com ni Google Apps Script — toda la automatización vive dentro del mismo deploy de Vercel, por decisión explícita del cliente.

**Archivos nuevos:**
- `lib/active-event.ts` — **fuente única** del evento activo (`ACTIVE_EVENT`: programa, ponente, cargo, fecha, hora, lugar, foto) y de sus variantes de texto ya formateadas (`eventTitle()`, `eventSpeakerLine()`, `eventDateLine()`, `activeEventLabel()`). `app/proximos-encuentros/page.tsx` importa estos datos para la tarjeta visible del próximo encuentro, y `app/api/registro-eventos/route.ts` (vía `lib/email.ts` y `lib/sheets.ts`) los importa para el correo y la columna "Evento activo" en Sheets. **Actualizar el próximo evento requiere editar solo este archivo** — ya no hay que tocar el mismo dato en dos lugares.
- `lib/validation.ts` — schema de `zod` (nombre ≤100, teléfono ≤20, email ≤254 con formato válido, motivo limitado a `registro`/`duda`/`otro`, mensaje ≤1000, rechazo de cualquier entrada con etiquetas HTML, campo honeypot `empresa`).
- `lib/rate-limit.ts` — limitador en memoria por IP, máximo 5 solicitudes por minuto (según regla de seguridad ya documentada). No persiste entre cold starts; si el spam aumenta, migrar a un almacén compartido (ej. Upstash Redis) sin cambiar la firma de la función.
- `lib/email.ts` — envía la notificación vía Resend. Lee `RESEND_API_KEY`, `EMAIL_FROM` y `EMAIL_TO_EVENTOS` exclusivamente de variables de entorno (nunca hardcodeadas). `Reply-To` se arma dinámicamente con el correo capturado en el formulario.
- `lib/sheets.ts` — agrega una fila a Google Sheets vía API v4 (`spreadsheets.values.append`), autenticado con una cuenta de servicio de Google Cloud (`google-auth-library`, JWT). Lee `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`, `GOOGLE_SHEETS_SPREADSHEET_ID` y opcionalmente `GOOGLE_SHEETS_EVENTOS_TAB` (default: `"Registros Eventos"`).
- `app/api/registro-eventos/route.ts` — Route Handler POST: rate limit por IP → parseo → honeypot (responde éxito falso en silencio si el campo oculto llega lleno) → validación con zod → envía email y guarda en Sheets en paralelo.

**Archivos modificados:**
- `app/proximos-encuentros/RegistrationForm.tsx` — se agregó un input oculto honeypot (`name="empresa"`, fuera de pantalla, `tabIndex={-1}`), el selector "Tipo de solicitud" ahora es `required`, y el `handleSubmit` llama a `fetch("/api/registro-eventos")` real en vez del `setTimeout` simulado. Si la API responde error, se muestra un mensaje inline (rojo, `role="alert"`) y **no** se redirige a `/confirmacion` — solo se redirige tras una respuesta exitosa, para no perder integridad del registro.
- `app/proximos-encuentros/page.tsx` — la tarjeta horizontal de próximo encuentro (foto circular, programa, título, ponente/cargo, fecha/hora/lugar) ahora lee esos valores desde `lib/active-event.ts` en vez de tenerlos como texto suelto. El diseño y el HTML resultante no cambiaron.

**Contrato de éxito/error (corregido):** la condición mínima de éxito es la **fila guardada en Google Sheets** — es la base de datos de registros que AADF prioriza. El email de Resend es una notificación complementaria:
- Sheets guarda y Resend envía → éxito.
- Sheets guarda y Resend falla → **éxito igual**; la falla de email solo se registra en logs del servidor, sin exponerla al usuario.
- Sheets falla (aunque Resend haya enviado el email) → **no** se redirige a `/confirmacion`; se responde error 502 y el formulario muestra el mensaje inline.
- Ambos fallan → error 502, mensaje inline.

Los detalles de cada falla se registran en logs del servidor (sin datos sensibles) y nunca se exponen al cliente.

**Variables de entorno requeridas en Vercel** (ninguna con prefijo `NEXT_PUBLIC_`, todas server-only):

| Variable | Valor / uso |
|---|---|
| `RESEND_API_KEY` | API key de Resend |
| `EMAIL_FROM` | Remitente. Valor temporal: `Acción por los Derechos Fundamentales <eventos@asociacionaccion.com>`. Cuando exista `notificaciones@asociacionaccion.com` en Workspace, cambiar solo esta variable en Vercel — sin tocar código |
| `EMAIL_TO_EVENTOS` | `eventos@asociacionaccion.com` — destinatario de las notificaciones de este formulario |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Email de la cuenta de servicio de Google Cloud, compartida como Editor en el Sheet (el Sheet vive en una cuenta personal de Google creada para AADF, no en Workspace) |
| `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` | Clave privada de la cuenta de servicio. En Vercel debe pegarse con `\n` literal (el código ya convierte `\n` a saltos de línea reales) |
| `GOOGLE_SHEETS_SPREADSHEET_ID` | ID de la hoja de cálculo de registros de eventos |
| `GOOGLE_SHEETS_EVENTOS_TAB` | Opcional. Nombre de la pestaña, default `"Registros Eventos"` |

**Columnas de la pestaña "Registros Eventos" (en orden, A–I):** Fecha y hora de envío · Nombre completo · Teléfono · Correo electrónico · Tipo de solicitud · Mensaje · Evento activo · Página de origen · Tipo de formulario (fijo: `"Registro evento"`).

**Estado: validado en producción (julio 2026).** El envío real de email vía Resend y la escritura real en Google Sheets ya se probaron y confirmaron funcionando en producción. Las variables de entorno están cargadas en Vercel.

**Reglas de seguridad aplicadas:** rate limit 5/min por IP, honeypot, validación de servidor con `zod`, límites de longitud iguales a los ya definidos en el HTML, rechazo de cualquier entrada con etiquetas HTML, sin exposición de stack traces ni mensajes internos al cliente, sin secretos hardcodeados. `next.config.ts` no requirió cambios de CSP: el navegador solo llama a `/api/registro-eventos` (mismo origen); las llamadas a Resend y Google Sheets ocurren del lado del servidor.

### Conexión funcional de /contacto (julio 2026)

Se implementó el backend real del formulario de `/contacto`, reutilizando el mismo patrón técnico que `/proximos-encuentros` (Route Handler propio + Resend + Google Sheets, sin Make.com ni Apps Script).

**Archivos nuevos:**
- `lib/validation-contacto.ts` — schema de `zod` para los campos de `/contacto` (nombre, teléfono, email, `motivo` limitado a las 7 opciones del selector "Motivo de contacto", mensaje opcional, honeypot `empresa`). Reutiliza el helper `noHtml` exportado desde `lib/validation.ts` (único cambio hecho a un archivo del flujo de eventos: se le agregó `export` a esa función, sin alterar su comportamiento).
- `lib/email-contacto.ts` — envía la notificación vía Resend. Lee `RESEND_API_KEY`, `EMAIL_FROM` y `EMAIL_TO_CONTACTO` desde variables de entorno. `Reply-To` dinámico con el correo capturado en el formulario.
- `lib/sheets-contacto.ts` — agrega una fila a la pestaña `"Contacto General"` del mismo spreadsheet (`GOOGLE_SHEETS_SPREADSHEET_ID`), autenticado con la misma cuenta de servicio de Google ya usada para eventos. Nombre de pestaña configurable opcionalmente con `GOOGLE_SHEETS_CONTACTO_TAB` (default: `"Contacto General"`).
- `app/api/contacto/route.ts` — Route Handler POST: reutiliza `isRateLimited` de `lib/rate-limit.ts` (el límite de 5/min por IP se comparte entre `/api/contacto` y `/api/registro-eventos`) → parseo → honeypot → validación con zod → envía email y guarda en Sheets en paralelo.

**Archivo modificado:**
- `app/contacto/ContactForm.tsx` — mismo patrón que `RegistrationForm.tsx`: input honeypot oculto (`name="empresa"`), el selector "Motivo de contacto" ahora es `required`, y `handleSubmit` llama a `fetch("/api/contacto")` real. Si la API responde error, muestra un mensaje inline y no redirige a `/confirmacion`.

**No se tocó `/proximos-encuentros`** salvo la exportación de `noHtml` mencionada arriba — `lib/email.ts`, `lib/sheets.ts` y `app/api/registro-eventos/route.ts` quedaron intactos (verificado con pruebas de regresión tras el cambio).

**Contrato de éxito/error:** idéntico al de `/proximos-encuentros` — la condición mínima de éxito es la fila guardada en Google Sheets. Si Sheets guarda y Resend falla, se considera éxito (la falla de email solo se loguea). Si Sheets falla, no se redirige a `/confirmacion` y se muestra error inline, así el email haya salido.

**Variables de entorno:** reutiliza `RESEND_API_KEY`, `EMAIL_FROM`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` y `GOOGLE_SHEETS_SPREADSHEET_ID` ya configuradas para eventos. Variable nueva:

| Variable | Valor / uso |
|---|---|
| `EMAIL_TO_CONTACTO` | `contacto@asociacionaccion.com` — destinatario de las notificaciones de este formulario |

**Columnas de la pestaña "Contacto General" (en orden, A–H):** Fecha y hora de envío · Nombre completo · Teléfono · Correo electrónico · Motivo de contacto · Mensaje · Página de origen · Tipo de formulario (fijo: `"Contacto general"`). Sin IP ni user-agent, por regla explícita.

**Estado: validado en producción (julio 2026).** `EMAIL_TO_CONTACTO` está cargada en Vercel y la pestaña `"Contacto General"` existe en el spreadsheet. El envío real de email vía Resend y la escritura real en Sheets ya se probaron y confirmaron funcionando en producción.

**Reglas de seguridad aplicadas:** las mismas que en `/proximos-encuentros` — rate limit compartido, honeypot, validación de servidor con `zod`, límites de longitud, rechazo de HTML, sin exposición de errores internos, sin secretos hardcodeados, sin cambios de CSP.

### Formularios validados en producción (julio 2026)

Ambos formularios reales quedaron probados y confirmados funcionando en producción:

- **`/proximos-encuentros`** guarda cada registro en Google Sheets, pestaña **"Registros Eventos"**, y envía la notificación por email a **`eventos@asociacionaccion.com`**.
- **`/contacto`** guarda cada mensaje en Google Sheets, pestaña **"Contacto General"**, y envía la notificación por email a **`contacto@asociacionaccion.com`**.
- **Resend** quedó verificado por DNS (SPF/DKIM) sobre el dominio `asociacionaccion.com`, por lo que el envío de email ya no depende de configuración pendiente.
- **Google Sheets** se autentica con una cuenta de servicio de Google Cloud, compartida como **Editor** sobre el spreadsheet (el spreadsheet vive en la cuenta personal de Google creada para AADF, no en Workspace).
- **Vercel** tiene todas las variables de entorno cargadas en **Production**: `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_TO_EVENTOS`, `EMAIL_TO_CONTACTO`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`, `GOOGLE_SHEETS_SPREADSHEET_ID`.
- **Condición mínima de éxito (ambos formularios):** que Google Sheets guarde la fila.
  - Si Resend falla pero Sheets guarda, el registro se considera **exitoso** igual — la falla de email solo se registra en logs del servidor.
  - Si Sheets falla, se muestra un error inline y **no** se redirige a `/confirmacion`, aunque Resend haya enviado el email.
