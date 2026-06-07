import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de privacidad | Acción por los Derechos Fundamentales, A.C.",
  description:
    "Consulta el aviso de privacidad de Acción por los Derechos Fundamentales, A.C. sobre el tratamiento de datos personales recopilados en formularios de contacto, eventos y solicitudes de información.",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-xl font-bold text-[#154c66] mb-4 mt-10 first:mt-0">
      {children}
    </h2>
  );
}

function Divider() {
  return <div className="h-px bg-[#d1e9f8] my-6" aria-hidden="true" />;
}

export default function AvisoDePrivacidadPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="py-16 px-5 bg-[#154c66] text-white">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#a3d3f2] uppercase block mb-4">
            Documento legal
          </span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Aviso de privacidad
          </h1>
          <p className="text-lg text-[#c5e7ff] font-display font-semibold mb-4">
            Acción por los Derechos Fundamentales, A.C.
          </p>
          <p className="text-base text-[#c5e7ff]/75 leading-relaxed max-w-2xl">
            En cumplimiento con lo dispuesto en la Ley Federal de Protección de
            Datos Personales en Posesión de los Particulares (LFPDPPP) y su
            Reglamento, Acción por los Derechos Fundamentales, A.C. pone a su
            disposición el presente Aviso de Privacidad.
          </p>
        </div>
      </section>

      {/* ─── CONTENIDO LEGAL ─── */}
      <section className="py-16 px-5 bg-[#f8fbfe]">
        <div className="max-w-3xl mx-auto">

          {/* Nota de revisión */}
          <div className="border border-amber-300 bg-amber-50 rounded-xl px-6 py-5 mb-10 text-sm text-amber-800 leading-relaxed">
            <strong className="font-bold">Nota:</strong> Este texto es una base editorial para la web y debe ser revisado y aprobado por un abogado o responsable legal de la asociación antes de su publicación definitiva.
          </div>

          <div className="bg-white rounded-2xl border border-[#d1e9f8] shadow-sm px-8 py-10">

            {/* Responsable */}
            <SectionTitle>Responsable del tratamiento de datos personales</SectionTitle>
            <p className="text-base text-[#41484d] leading-relaxed">
              <strong className="text-[#154c66]">Acción por los Derechos Fundamentales, A.C.</strong> es la asociación civil responsable del tratamiento de sus datos personales, con domicilio en Blvd. Agua Caliente 4558, Interior 1403-B, Col. Aviación, C.P. 22014, Tijuana, Baja California, México. Correo electrónico:{" "}
              <a href="mailto:contacto@asociacionaccion.com" className="text-[#3d815c] hover:underline">
                contacto@asociacionaccion.com
              </a>
              .
            </p>

            <Divider />

            {/* Sección 2 */}
            <SectionTitle>Datos personales que podemos recabar</SectionTitle>
            <p className="text-base text-[#41484d] leading-relaxed mb-4">
              Para las finalidades descritas en este aviso, Acción por los Derechos Fundamentales, A.C. podrá recabar los siguientes datos personales:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-[#41484d] leading-relaxed pl-2">
              <li>Nombre completo.</li>
              <li>Correo electrónico.</li>
              <li>Número de teléfono.</li>
              <li>Organización o empresa a la que pertenece (cuando aplique).</li>
              <li>Motivo de contacto o área de interés.</li>
              <li>Cualquier información adicional que usted decida proporcionar voluntariamente en formularios de contacto o durante eventos y encuentros de la asociación.</li>
            </ul>
            <p className="text-base text-[#41484d] leading-relaxed mt-4">
              Acción por los Derechos Fundamentales, A.C. no recaba datos personales sensibles en sus formularios ordinarios de contacto. En caso de que ello fuera necesario para una actividad específica, se informará previamente al titular.
            </p>

            <Divider />

            {/* Sección 3 */}
            <SectionTitle>Finalidades del tratamiento de datos personales</SectionTitle>
            <p className="text-base text-[#41484d] leading-relaxed mb-4">
              Los datos personales que recabamos serán utilizados para las siguientes <strong className="text-[#154c66]">finalidades primarias</strong>, las cuales son necesarias para la relación con usted:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-[#41484d] leading-relaxed pl-2">
              <li>Atender solicitudes de contacto, información o consulta que usted dirija a la asociación.</li>
              <li>Dar seguimiento a su interés en los programas, actividades o proyectos de la asociación.</li>
              <li>Registrar su participación en eventos, foros, conferencias o encuentros organizados por Acción por los Derechos Fundamentales, A.C.</li>
              <li>Enviarle información relacionada con los programas, actividades e iniciativas de la asociación en respuesta a su solicitud.</li>
            </ul>

            <Divider />

            {/* Sección 4 */}
            <SectionTitle>Finalidades secundarias</SectionTitle>
            <p className="text-base text-[#41484d] leading-relaxed mb-4">
              De manera adicional, si usted no manifiesta su oposición, sus datos podrán utilizarse para las siguientes <strong className="text-[#154c66]">finalidades secundarias</strong>:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-[#41484d] leading-relaxed pl-2">
              <li>Envío de comunicados institucionales, boletines informativos e invitaciones a próximos encuentros de la asociación.</li>
              <li>Elaboración de estadísticas internas sobre el perfil de las personas que contactan o participan en actividades de la asociación, con fines de mejora de programas.</li>
            </ul>
            <p className="text-base text-[#41484d] leading-relaxed mt-4">
              Si usted no desea que sus datos sean tratados para estas finalidades secundarias, puede indicarlo enviando un correo a{" "}
              <a href="mailto:contacto@asociacionaccion.com" className="text-[#3d815c] hover:underline">
                contacto@asociacionaccion.com
              </a>{" "}
              con el asunto <em>&ldquo;Oposición a finalidades secundarias&rdquo;</em>.
            </p>

            <Divider />

            {/* Sección 5 */}
            <SectionTitle>Transferencia de datos personales</SectionTitle>
            <p className="text-base text-[#41484d] leading-relaxed mb-4">
              Acción por los Derechos Fundamentales, A.C. no transferirá sus datos personales a terceros sin su consentimiento, salvo en los casos previstos en el artículo 37 de la LFPDPPP, que incluyen:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-[#41484d] leading-relaxed pl-2">
              <li>Cuando la transferencia sea necesaria para el cumplimiento de una obligación legal.</li>
              <li>Cuando sea requerida por autoridad competente en el ejercicio de sus funciones.</li>
              <li>Cuando sea necesaria para la prevención o diagnóstico médico, la prestación de asistencia sanitaria o la gestión de servicios de salud.</li>
            </ul>
            <p className="text-base text-[#41484d] leading-relaxed mt-4">
              En ningún caso sus datos personales serán vendidos, cedidos ni utilizados con fines comerciales por parte de la asociación.
            </p>

            <Divider />

            {/* Sección 6 */}
            <SectionTitle>Medios para ejercer derechos ARCO</SectionTitle>
            <p className="text-base text-[#41484d] leading-relaxed mb-4">
              Usted tiene el derecho de <strong className="text-[#154c66]">Acceder</strong> a sus datos personales, <strong className="text-[#154c66]">Rectificarlos</strong> en caso de ser inexactos, <strong className="text-[#154c66]">Cancelarlos</strong> cuando considere que no son necesarios para la finalidad que motivó su recopilación, u <strong className="text-[#154c66]">Oponerse</strong> a su tratamiento para fines específicos.
            </p>
            <p className="text-base text-[#41484d] leading-relaxed mb-4">
              Para ejercer cualquiera de estos derechos, deberá presentar una solicitud escrita dirigida a Acción por los Derechos Fundamentales, A.C. a través de los siguientes medios:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-[#41484d] leading-relaxed pl-2">
              <li>
                Correo electrónico:{" "}
                <a href="mailto:contacto@asociacionaccion.com" className="text-[#3d815c] hover:underline">
                  contacto@asociacionaccion.com
                </a>
              </li>
              <li>
                Escrito dirigido al domicilio de la asociación: Blvd. Agua Caliente 4558, Interior 1403-B, Col. Aviación, C.P. 22014, Tijuana, Baja California.
              </li>
            </ul>
            <p className="text-base text-[#41484d] leading-relaxed mt-4">
              La solicitud deberá incluir: nombre completo y correo electrónico del titular, descripción clara del derecho que desea ejercer y cualquier documento que acredite la identidad del solicitante. La asociación responderá en el plazo establecido por la LFPDPPP.
            </p>

            <Divider />

            {/* Sección 7 */}
            <SectionTitle>Uso de cookies y tecnologías similares</SectionTitle>
            <p className="text-base text-[#41484d] leading-relaxed">
              Este sitio web puede utilizar cookies y tecnologías similares con la finalidad de mejorar la experiencia de navegación, analizar el uso del sitio de forma agregada y anónima, y garantizar el correcto funcionamiento de sus funciones. Las cookies utilizadas no almacenan datos de identificación personal. Si usted no desea que se almacenen cookies en su dispositivo, puede configurar su navegador para rechazarlas; sin embargo, esto podría afectar la correcta visualización del sitio.
            </p>

            <Divider />

            {/* Sección 8 */}
            <SectionTitle>Cambios al aviso de privacidad</SectionTitle>
            <p className="text-base text-[#41484d] leading-relaxed">
              Acción por los Derechos Fundamentales, A.C. se reserva el derecho de actualizar o modificar el presente Aviso de Privacidad en cualquier momento. Las modificaciones serán publicadas en este sitio web. Se recomienda consultarlo periódicamente. El uso continuado del sitio o de los servicios de la asociación, con posterioridad a la publicación de cualquier modificación, implica la aceptación de dichos cambios.
            </p>

            <Divider />

            {/* Sección 9: Contacto */}
            <SectionTitle>Contacto</SectionTitle>
            <p className="text-base text-[#41484d] leading-relaxed mb-4">
              Para cualquier duda, aclaración o ejercicio de derechos relacionados con este Aviso de Privacidad, puede comunicarse con nosotros:
            </p>
            <div className="flex flex-col gap-2 text-base text-[#41484d]">
              <p>
                <span className="font-semibold text-[#154c66]">Correo:</span>{" "}
                <a href="mailto:contacto@asociacionaccion.com" className="text-[#3d815c] hover:underline">
                  contacto@asociacionaccion.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#154c66]">Teléfono de oficina:</span>{" "}
                <a href="tel:+526646817278" className="text-[#3d815c] hover:underline">
                  +52 664 681 7278
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#154c66]">Domicilio:</span>{" "}
                Blvd. Agua Caliente 4558, Interior 1403-B, Col. Aviación, C.P. 22014, Tijuana, Baja California, México.
              </p>
            </div>

          </div>

          {/* Pie de página legal */}
          <p className="mt-8 text-xs text-[#71787d] leading-relaxed text-center">
            Acción por los Derechos Fundamentales, A.C. &mdash; Tijuana, Baja California, México.<br />
            Este aviso de privacidad se rige por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento.
          </p>

        </div>
      </section>
    </>
  );
}
