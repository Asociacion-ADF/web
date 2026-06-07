import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RegistrationForm from "./RegistrationForm";

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

        <div className="relative z-20 max-w-7xl mx-auto px-5 py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          <div className="lg:col-span-8">
            <div className="w-14 h-px bg-[#3d815c] mb-8" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-white/70 uppercase block mb-5">
              Acción por los Derechos Fundamentales, A.C.
            </span>
            <h1
              className="font-display text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
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
            <div className="flex flex-wrap gap-4">
              <Link
                href="#registro"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg"
              >
                Registrarme a un encuentro
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 hover:border-white/60 px-8 py-4 rounded-lg transition-colors"
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

      {/* ─── PRÓXIMO ENCUENTRO DESTACADO ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#3d815c] uppercase block mb-4">
              Próximo encuentro destacado
            </span>
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66]">
              Información del próximo evento
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-[#a3d3f2]/40 rounded-2xl p-10 shadow-md relative">
              <div className="absolute top-5 right-5">
                <span className="bg-[#a3d3f2]/20 text-[#154c66] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                  Destacado
                </span>
              </div>

              <span className="text-[10px] font-bold tracking-[0.3em] text-[#3d815c] uppercase block mb-3">
                Encuentro próximo
              </span>
              <h3 className="font-display text-2xl font-bold text-[#154c66] mb-8">
                Nombre del encuentro: Por confirmar.
              </h3>

              <div className="flex flex-col gap-6 mb-8">
                {[
                  {
                    label: "Invitado o ponente",
                    value: "Por confirmar.",
                    icon: (
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
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ),
                  },
                  {
                    label: "Fecha",
                    value: "Por confirmar.",
                    icon: (
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
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                    ),
                  },
                  {
                    label: "Hora",
                    value: "Por confirmar.",
                    icon: (
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
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                  },
                  {
                    label: "Lugar",
                    value: "Por confirmar.",
                    icon: (
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
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    ),
                  },
                ].map(({ label, value, icon }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#154c66]/5 rounded-xl flex items-center justify-center shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.18em] text-text-muted uppercase mb-1">
                        {label}
                      </p>
                      <p className="text-[#154c66] font-semibold text-sm">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#154c66]/5 border border-[#a3d3f2]/30 rounded-xl px-6 py-5 mb-8">
                <p className="text-text-soft text-sm leading-relaxed">
                  Próximamente compartiremos los detalles del siguiente encuentro
                  de Acción por los Derechos Fundamentales, A.C.
                </p>
              </div>

              <Link
                href="#registro"
                className="w-full inline-flex justify-center items-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] py-4 rounded-lg transition-all shadow-lg shadow-[#3d815c]/20"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
                Quiero recibir aviso del próximo encuentro
              </Link>
            </div>
          </div>
        </div>
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

          {/* Empty state */}
          <div className="bg-[#f8fbfe] border border-dashed border-[#a3d3f2] rounded-2xl py-20 px-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#154c66]/5 rounded-2xl flex items-center justify-center mb-6">
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 text-[#154c66]/40"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-[#154c66] mb-3">
              Por ahora no hay encuentros publicados.
            </h3>
            <p className="text-text-soft text-sm leading-relaxed max-w-md mb-8">
              Déjanos tus datos y te avisaremos cuando se confirme el próximo
              evento de Acción por los Derechos Fundamentales, A.C.
            </p>
            <Link
              href="#registro"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#154c66] hover:bg-[#0d3347] px-8 py-4 rounded-lg transition-all"
            >
              Registrarme para recibir aviso
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
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

          {/* Empty state — no invented past events */}
          <div className="bg-[#f8fbfe] border border-dashed border-[#a3d3f2] rounded-2xl py-20 px-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#154c66]/5 rounded-2xl flex items-center justify-center mb-6">
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 text-[#154c66]/40"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
            <p className="text-text-soft text-sm leading-relaxed max-w-md">
              Próximamente compartiremos notas, fotografías y resúmenes de
              encuentros realizados por Acción por los Derechos Fundamentales,
              A.C.
            </p>
          </div>
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
