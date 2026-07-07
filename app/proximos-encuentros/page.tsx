import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RegistrationForm from "./RegistrationForm";
import PastEventsCarousel from "./PastEventsCarousel";

export const metadata: Metadata = {
  title:
    "Próximos encuentros | Conferencias y eventos ciudadanos en Tijuana",
  description:
    "Consulta próximos encuentros, conferencias y eventos ciudadanos de Acción por los Derechos Fundamentales, A.C. en Tijuana, Baja California.",
};

function FineLine({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`mb-6 h-px ${light ? "bg-[#a3d3f2]" : "bg-[#3d815c]"}`}
      style={{ width: 60 }}
    />
  );
}

export default function ProximosEncuentrosPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[680px] flex items-center justify-center overflow-hidden">
        <Image
          src="/eventos/dialogos-sociedad-conferencia-01.jpeg"
          alt="Encuentro ciudadano de Acción por los Derechos Fundamentales"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-[#154c66]/82 z-10"
          aria-hidden="true"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06] z-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#a3d3f2 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-20 max-w-7xl mx-auto px-5 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          <div className="lg:col-span-8">
            <div className="w-14 h-px bg-[#3d815c] mb-8" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-white/70 uppercase block mb-5">
              Acción por los Derechos Fundamentales, A.C.
            </span>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
            >
              Próximos encuentros
            </h1>
            <p className="text-lg lg:text-xl text-[#a3d3f2] font-semibold leading-snug max-w-2xl mb-5 opacity-90">
              Conferencias, diálogo ciudadano y participación en Tijuana
            </p>
            <div className="flex flex-col gap-3 text-base text-white/75 leading-relaxed max-w-2xl mb-10">
              <p>
                Los encuentros de Acción por los Derechos Fundamentales, A.C.
                son espacios para escuchar, conversar y conectar con personas
                interesadas en los temas que impactan a Tijuana, Baja California
                y México.
              </p>
              <p>
                A través de conferencias, diálogos y actividades ciudadanas,
                reunimos a ciudadanos, empresarios, profesionistas, educadores,
                estudiantes, instituciones y líderes sociales para comprender
                mejor nuestro entorno y participar de forma informada.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#registro"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg w-full sm:w-auto"
              >
                Registrarme a un encuentro
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white border border-white/30 hover:border-white/60 px-8 py-4 rounded-lg transition-colors w-full sm:w-auto"
              >
                Quiero recibir información
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

      {/* ─── LISTA DE PRÓXIMOS ENCUENTROS ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#a3d3f2]/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#3d815c] uppercase block mb-4">
              Agenda
            </span>
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-6">
              Lista de próximos encuentros
            </h2>
            <p className="text-text-soft text-base lg:text-lg leading-relaxed max-w-2xl">
              En esta sección se mostrarán los próximos encuentros, conferencias
              y actividades publicadas por Acción por los Derechos
              Fundamentales, A.C.
            </p>
          </div>

          <div className="flex flex-row items-center bg-white rounded-2xl border border-[#a3d3f2]/40 shadow-sm p-6 lg:p-8 gap-6">
            {/* No confirmed speaker yet — neutral institutional placeholder */}
            <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shrink-0 border-2 border-[#a3d3f2]/40 bg-[#a3d3f2]/10">
              <Image
                src="/images/logo-aadf-transparent.png"
                alt="Acción por los Derechos Fundamentales, A.C."
                fill
                className="object-contain p-4"
                sizes="96px"
              />
            </div>
            <div className="flex flex-col gap-3 min-w-0">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#3d815c] uppercase">
                Diálogos con la Sociedad
              </span>
              <h3 className="font-display text-lg lg:text-xl font-bold text-[#154c66] leading-snug">
                En breve anunciaremos el próximo encuentro
              </h3>
              <p className="text-sm text-text-soft leading-relaxed">
                Estamos preparando el siguiente espacio de Diálogos con la
                Sociedad. Próximamente compartiremos fecha, invitado y
                detalles de registro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CALENDARIO DIÁLOGOS 2026 ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#3d815c] uppercase block mb-4">
              Programa 2026
            </span>
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66]">
              Calendario de Diálogos con la Sociedad 2026
            </h2>
          </div>
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden border border-[#a3d3f2]/40 shadow-sm">
            <Image
              src="/eventos/calendario-dialogos-sociedad-2026-reprogramado.png"
              alt="Calendario de Diálogos con la Sociedad 2026"
              width={853}
              height={1280}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        </div>
      </section>

      {/* ─── FORMULARIO DE REGISTRO ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white" id="registro">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-6">
              Déjanos tus datos
            </h2>
            <p className="text-text-soft text-base lg:text-lg leading-relaxed mb-10">
              Completa el formulario y te compartiremos información sobre
              próximos encuentros, conferencias y actividades de Acción por los
              Derechos Fundamentales.
            </p>
            <div className="flex flex-col gap-5">
              <a
                href="mailto:contacto@asociacionaccion.com"
                className="group flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 bg-[#a3d3f2]/20 rounded-xl flex items-center justify-center group-hover:bg-[#154c66] transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#154c66] group-hover:text-white transition-colors"
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
                <span className="font-semibold text-[#154c66] text-sm">
                  contacto@asociacionaccion.com
                </span>
              </a>
              <a
                href="tel:+526646817278"
                className="group flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 bg-[#a3d3f2]/20 rounded-xl flex items-center justify-center group-hover:bg-[#154c66] transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#154c66] group-hover:text-white transition-colors"
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
                <span className="font-semibold text-[#154c66] text-sm">
                  +52 664 681 7278
                </span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white border border-border-subtle rounded-3xl p-10 lg:p-14 shadow-md">
            <RegistrationForm />
          </div>
        </div>
      </section>

      {/* ─── ENCUENTROS REALIZADOS ─── */}
      <section className="py-20 lg:py-28 px-5 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-6">
              Diálogos que construyen comunidad
            </h2>
            <div className="flex flex-col gap-3 text-text-soft text-base lg:text-lg leading-relaxed max-w-2xl">
              <p>
                En esta sección se mostrarán encuentros anteriores realizados
                por Acción por los Derechos Fundamentales.
              </p>
              <p>
                Compartir eventos pasados ayuda a documentar la actividad de la
                asociación, mostrar evidencia social y permitir que más personas
                conozcan el tipo de conversaciones que se impulsan.
              </p>
            </div>
          </div>

          <PastEventsCarousel />
        </div>
      </section>

      {/* ─── TAMBIÉN PUEDES CONOCER NUESTROS PROGRAMAS ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#a3d3f2]/15 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-6">
              También puedes conocer nuestros programas
            </h2>
            <div className="flex flex-col gap-3 text-text-soft text-base lg:text-lg leading-relaxed max-w-2xl">
              <p>
                Los encuentros son una puerta de entrada para conocer mejor el
                trabajo de Acción por los Derechos Fundamentales.
              </p>
              <p>
                La asociación impulsa programas de formación cívica, diálogo
                social, vigilancia ciudadana y derecho de propiedad.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              {
                href: "/programas/fortaleciendo-valores",
                title: "Fortaleciendo Valores",
                desc: "Formación cívica y valores para niñas, niños y jóvenes de Tijuana.",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-[#3d815c]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                ),
              },
              {
                href: "/programas/dialogos-con-la-sociedad",
                title: "Diálogos con la Sociedad",
                desc: "Encuentros ciudadanos, conferencias y diálogo social en Tijuana.",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-[#3d815c]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                ),
              },
              {
                href: "/programas/vigilancia-ciudadana",
                title: "Vigilancia Ciudadana",
                desc: "Participación responsable, legalidad y defensa de la vida democrática.",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-[#3d815c]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
              },
              {
                href: "/programas/derecho-de-propiedad",
                title: "Derecho de Propiedad",
                desc: "Certeza jurídica, patrimonio y desarrollo urbano.",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-[#3d815c]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                ),
              },
            ].map(({ href, title, desc, icon }) => (
              <Link
                key={title}
                href={href}
                className="bg-white p-8 rounded-2xl border border-border-subtle hover:border-[#3d815c] hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-[#3d815c]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#3d815c]/20 transition-colors">
                  {icon}
                </div>
                <h3 className="font-display font-bold text-[#154c66] text-base mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-text-soft text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/programas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#154c66] hover:bg-[#0d3347] px-8 py-4 rounded-lg transition-all"
            >
              Conocer programas
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#154c66] border border-[#154c66]/30 hover:border-[#154c66] px-8 py-4 rounded-lg transition-all"
            >
              Contactar a la asociación
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PARTICIPACIÓN CIUDADANA INDEPENDIENTE ─── */}
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
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-8">
              Participación ciudadana independiente
            </h2>
            <div className="flex flex-col gap-4 text-[#a3d3f2] text-base lg:text-lg leading-relaxed opacity-90">
              <p>
                Acción por los Derechos Fundamentales, A.C. es una asociación
                civil independiente y apartidista.
              </p>
              <p>No somos un partido político.</p>
              <p>No somos una campaña electoral.</p>
              <p>No representamos intereses de ningún partido político.</p>
              <p>
                Nuestros encuentros buscan promover participación ciudadana,
                formación cívica, diálogo social, defensa de derechos
                fundamentales e incidencia institucional desde la sociedad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#a3d3f2]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6 relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#154c66 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-6">
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#154c66] uppercase">
                Acción por los Derechos Fundamentales
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] leading-tight">
                Mantente informado sobre próximos encuentros
              </h2>
              <div className="flex flex-col gap-3 text-[#154c66]/80 text-base leading-relaxed max-w-xl">
                <p>
                  Si quieres recibir información sobre nuevas conferencias,
                  invitados, fechas y actividades, déjanos tus datos.
                </p>
                <p>
                  Te compartiremos información sobre próximos encuentros y
                  formas de acercarte a Acción por los Derechos Fundamentales.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#registro"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg shadow-md"
                >
                  Registrarme a un encuentro
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#154c66] border-2 border-[#154c66]/40 hover:border-[#154c66] bg-white/50 hover:bg-white px-8 py-4 rounded-lg transition-all"
                >
                  Quiero recibir información
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
