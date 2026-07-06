@AGENTS.md

# Instrucciones para Claude Code — Web AADF

Este proyecto corresponde al sitio web oficial de Acción por los Derechos Fundamentales, A.C.

Dominio oficial:
https://www.asociacionaccion.com

Repositorio:
https://github.com/Asociacion-ADF/web

Branch principal:
main

## Regla principal

Antes de modificar cualquier archivo, leer:

docs/estado-del-proyecto.md

Ese archivo contiene el estado aprobado del proyecto, decisiones visuales, rutas, reglas de mantenimiento, seguridad y fase actual.

## Forma de trabajo

- Hacer cambios puntuales.
- No rediseñar secciones aprobadas.
- No tocar rutas no solicitadas.
- No cambiar header ni footer salvo instrucción expresa.
- No modificar colores de marca.
- No cambiar estructura visual aprobada.
- No eliminar secciones sin confirmar.
- No inventar diseños nuevos.
- No cambiar textos que no fueron solicitados.
- No usar imágenes distintas a las indicadas.
- No renombrar archivos salvo instrucción expresa.
- Si se encuentra un problema relacionado, reportarlo antes de corregirlo.

## Marca

Colores principales:
- Azul claro: #a3d3f2
- Verde: #3d815c
- Blanco: #ffffff
- Azul profundo: #154C66

Mantener estilo institucional, sobrio, limpio y premium.

## Rutas principales

- /
- /nosotros
- /programas
- /programas/fortaleciendo-valores
- /programas/dialogos-con-la-sociedad
- /programas/vigilancia-ciudadana
- /programas/derecho-de-propiedad
- /participa
- /contacto
- /noticias
- /comunicados
- /proximos-encuentros
- /trayectoria-rufo-ibarra-batista
- /aviso-de-privacidad
- /confirmacion

## Eventos y próximos encuentros

Para actualizar eventos, leer primero la sección correspondiente en:

docs/estado-del-proyecto.md

Regla crítica:
En la card horizontal de próximo encuentro debe usarse la foto/retrato del expositor en el marco circular, no el flyer del evento.

Los archivos de eventos deben nombrarse sin espacios, sin acentos y sin ñ.

## Formularios y fase 2

No conectar formularios reales sin seguir las reglas de seguridad documentadas en:

docs/estado-del-proyecto.md

Reglas mínimas:
- validar en servidor
- sanitizar entradas
- no exponer secretos
- usar variables de entorno en Vercel
- no usar Supabase sin RLS
- probar en producción antes de anunciar

## Antes de terminar cualquier tarea

Ejecutar:

npm run lint
npm run build

Si todo está limpio:

git add .
git commit -m "mensaje descriptivo"
git push origin main

## Reporte final

Al terminar, reportar:
- archivos modificados
- qué se cambió
- qué se verificó
- commit generado
- si hubo algo pendiente
