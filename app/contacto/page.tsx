import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacto | Acción por los Derechos Fundamentales, A.C. en Tijuana",
  description:
    "Contacta a Acción por los Derechos Fundamentales, A.C. en Tijuana. Solicita información sobre membresía, próximos encuentros, programas y participación ciudadana.",
};

function FineLine({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`mb-6 h-px ${light ? "bg-[#a3d3f2]" : "bg-[#3d815c]"}`}
      style={{ width: 60 }}
    />
  );
}

export default function ContactoPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[560px] flex items-center overflow-hidden bg-[#154c66]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#a3d3f2 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 opacity-[0.03] pointer-events-none font-display font-black text-white leading-none select-none"
          style={{ fontSize: "20vw" }}
        >
          ACCIÓN
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          <div className="lg:col-span-8">
            <div className="w-14 h-px bg-[#3d815c] mb-8" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#a3d3f2] uppercase block mb-5">
              Estamos en Tijuana, Baja California
            </span>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-8"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
            >
              Contacta a Acción por los Derechos Fundamentales
            </h1>
            <div className="flex flex-col gap-3 text-base text-white/75 leading-relaxed max-w-2xl mb-10">
              <p>
                ¿Quieres recibir información, participar en un próximo encuentro,
                sumarte como miembro o conocer más sobre nuestros programas?
              </p>
              <p>
                Déjanos tus datos y una persona del equipo se pondrá en contacto
                contigo en un lapso de 24 horas.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/participa"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg"
              >
                Quiero ser miembro
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="/proximos-encuentros"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 hover:border-white/60 px-8 py-4 rounded-lg transition-colors"
              >
                Ver próximos encuentros
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-20"
        />
      </section>

      {/* ─── DATOS DE CONTACTO ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#3d815c] uppercase block mb-4">
              Información
            </span>
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66]">
              Datos de contacto
            </h2>
          </div>

          {/* TODO: Pendiente fase responsive/global — revisar max-width, paddings, tamaños de títulos
               y escala visual general, porque varias páginas se sienten sobredimensionadas en desktop. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Dirección — azul profundo */}
            <div className="bg-[#154c66] rounded-2xl p-5 md:p-8 flex flex-col items-center text-center gap-6">
              <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#a3d3f2] uppercase mb-3">
                  Dirección
                </p>
                <address className="not-italic text-white font-semibold text-sm leading-relaxed">
                  Blvd. Agua Caliente 4558,
                  <br />
                  Interior 1403-B, Col. Aviación,
                  <br />
                  C.P. 22014, Tijuana,
                  <br />
                  Baja California.
                </address>
              </div>
            </div>

            {/* Teléfono — verde institucional */}
            <div className="bg-[#3d815c] rounded-2xl p-5 md:p-8 flex flex-col items-center text-center gap-6">
              <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#a8efc3] uppercase mb-3">
                  Teléfono de oficina
                </p>
                <a
                  href="tel:+526646817278"
                  className="font-semibold text-base text-white hover:text-[#a8efc3] transition-colors"
                >
                  +52 664 681 7278
                </a>
              </div>
            </div>

            {/* Correo — azul claro */}
            <div className="bg-[#a3d3f2] rounded-2xl p-5 md:p-8 flex flex-col items-center text-center gap-6">
              <div className="w-10 h-10 bg-[#154c66]/10 rounded-xl flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-[#154c66]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#154c66]/60 uppercase mb-3">
                  Correo electrónico
                </p>
                <a
                  href="mailto:contacto@asociacionaccion.com"
                  className="font-semibold text-[#154c66] hover:text-[#154c66]/70 transition-colors text-sm md:text-base leading-snug break-words"
                >
                  contacto@asociacionaccion.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FORMULARIO DE CONTACTO ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#f8fbfe]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-6">
              Déjanos tus datos
            </h2>
            <p className="text-text-soft text-base leading-relaxed">
              Completa el formulario y te contactaremos en un lapso de 24 horas.
            </p>
          </div>
          <div className="lg:col-span-8 bg-white border border-border-subtle rounded-3xl p-6 lg:p-14 shadow-md">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ─── UBICACIÓN ─── */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center overflow-hidden">
        <Image
          src="/eventos/oficinas-asociacion-tijuana-01.png"
          alt="Oficinas de Acción por los Derechos Fundamentales en Tijuana"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-[#154c66]/55"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-5 relative z-10 w-full flex justify-end">
          <div className="w-full md:max-w-lg md:ml-auto bg-white/90 backdrop-blur-sm border border-white/40 rounded-3xl p-6 lg:p-12 shadow-2xl">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#3d815c] uppercase block mb-4">
              Sede
            </span>
            <FineLine />
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#154c66] mb-8">
              Visítanos en Tijuana
            </h2>
            <address className="not-italic flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#a3d3f2]/30 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-[#154c66]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#154c66] text-sm leading-relaxed">
                    Blvd. Agua Caliente 4558, Interior 1403-B,
                  </p>
                  <p className="text-text-soft text-sm">
                    Col. Aviación, C.P. 22014,
                  </p>
                  <p className="text-text-soft text-sm">
                    Tijuana, Baja California.
                  </p>
                </div>
              </div>
            </address>
          </div>
        </div>
      </section>

      {/* ─── MAPA ─── */}
      <section className="bg-[#f8fbfe]">
        <div className="max-w-7xl mx-auto px-5 pt-16 lg:pt-20 pb-10">
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#3d815c] uppercase block mb-4">
            Cómo llegar
          </span>
          <FineLine />
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#154c66]">
            Encuéntranos en el mapa
          </h2>
        </div>
        <div className="overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.5286547725927!2d-117.00496512417511!3d32.512024897480956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94810b6f83f99%3A0xbbcc86426457b82f!2sBlvd.%20Agua%20Caliente%204558-1403b%2C%2022020%20Tijuana%2C%20B.C.%2C%20M%C3%A9xico!5e0!3m2!1ses!2ses!4v1780765419446!5m2!1ses!2ses"
            width="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Acción por los Derechos Fundamentales en Tijuana"
            className="w-full block h-[350px] lg:h-[480px]"
          />
        </div>
      </section>

      {/* ─── TAMBIÉN PUEDES CONOCER NUESTROS PROGRAMAS ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#154c66] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 opacity-5 pointer-events-none text-[300px] font-display font-bold text-white leading-none select-none"
        >
          ◈
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <FineLine light />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
              También puedes conocer nuestros programas
            </h2>
            <p className="text-[#a3d3f2] text-base lg:text-lg leading-relaxed mb-10 opacity-90">
              Acción por los Derechos Fundamentales impulsa programas de
              participación ciudadana, formación cívica, diálogo social,
              vigilancia ciudadana y derecho de propiedad.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/programas"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all"
              >
                Conocer programas
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="/proximos-encuentros"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 hover:border-white/60 px-8 py-4 rounded-lg transition-colors"
              >
                Ver próximos encuentros
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
