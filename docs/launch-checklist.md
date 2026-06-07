# Pendientes pre-lanzamiento — Acción por los Derechos Fundamentales, A.C.

---

## 1. Estado actual del proyecto

- **Repo GitHub:** https://github.com/Asociacion-ADF/web
- **Rama:** `main`
- **Dominio web real:** `asociacionaccion.com`
- **Correo esperado:** `contacto@asociacionaccion.com`
- **Build y lint:** pasan sin errores
- **Rutas compiladas:**
  - `/`
  - `/nosotros`
  - `/trayectoria-rufo-ibarra-batista`
  - `/programas`
  - `/programas/fortaleciendo-valores`
  - `/programas/dialogos-con-la-sociedad`
  - `/programas/vigilancia-ciudadana`
  - `/programas/derecho-de-propiedad`
  - `/participa`
  - `/proximos-encuentros`
  - `/noticias`
  - `/contacto`
  - `/confirmacion`
  - `/aviso-de-privacidad`
  - `/_not-found` (404)

---

## 2. Pendiente — Google Workspace / correo

- [ ] Resolver alta de Google Workspace
- [ ] Confirmar correo temporal o definitivo para administrar Vercel
- [ ] Crear `contacto@asociacionaccion.com`
- [ ] Confirmar recepción real del correo
- [ ] Configurar SPF, DKIM y DMARC cuando el correo esté activo
- [ ] No modificar registros MX hasta confirmar plan final

---

## 3. Pendiente — Vercel / deploy

- [ ] Crear cuenta Vercel con correo del fundador o correo institucional
- [ ] Conectar organización GitHub `Asociacion-ADF`
- [ ] Importar repositorio `web`
- [ ] Hacer deploy preview
- [ ] Revisar todas las rutas en preview
- [ ] Conectar dominio `asociacionaccion.com` cuando se apruebe preview

---

## 4. Pendiente — Formularios / backend

- [ ] Actualmente los formularios redirigen a `/confirmacion` sin backend real
- [ ] Cuando exista correo activo, conectar formularios a envío real
- [ ] Usar método POST
- [ ] Validar y sanitizar datos server-side
- [ ] Implementar rate limiting
- [ ] Evaluar protección anti-spam (Cloudflare Turnstile o reCAPTCHA) si hace falta
- [ ] Probar recepción real de mensajes

---

## 5. Pendiente — Legal

- [ ] El aviso de privacidad debe ser revisado por responsable legal antes de la publicación final
- [ ] Confirmar datos oficiales: domicilio, teléfono, correo
- [ ] Confirmar que los datos de trayectoria del fundador están validados y aprobados

---

## 6. Pendiente — SEO técnico

- [ ] Confirmar `metadataBase`: `https://asociacionaccion.com` *(ya configurado en `app/layout.tsx`)*
- [ ] Revisar y generar `sitemap.xml`
- [ ] Revisar y generar `robots.txt`
- [ ] Revisar etiquetas Open Graph en todas las rutas
- [ ] Revisar favicon (presencia y formatos)
- [ ] Configurar Google Search Console después del deploy

---

## 7. Pendiente — Sanity / CMS

Contenido a migrar al CMS cuando esté configurado:

- [ ] Programas
- [ ] Noticias
- [ ] Próximos encuentros
- [ ] Encuentros realizados
- [ ] Galerías
- [ ] FAQs
- [ ] CTAs
- [ ] Enlaces externos de prensa y redes sociales

Mantener en código (no migrar al CMS):

- Header
- Footer
- Layout global
- Paleta visual
- Componentes base

---

## 8. Pendiente — Revisión final

- [ ] Revisión responsive en preview real (dispositivos físicos o BrowserStack)
- [ ] Revisión manual de todas las rutas
- [ ] Revisión de todos los enlaces internos y externos
- [ ] Revisión de todas las imágenes (carga, alt text, proporciones)
- [ ] Revisión de todos los formularios (flujo completo)
- [ ] Aprobación final de la asociación antes de publicar
