import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MediaGrid from "./MediaGrid";

export const metadata: Metadata = {
  title: "Noticias | Acción por los Derechos Fundamentales, A.C.",
  description:
    "Consulta noticias, comunicados, encuentros y avances de programas de Acción por los Derechos Fundamentales, A.C. en Tijuana, Baja California.",
};

function FineLine({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`mb-6 h-px ${light ? "bg-[#a3d3f2]" : "bg-[#3d815c]"}`}
      style={{ width: 60 }}
    />
  );
}

export default function NoticiasPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[640px] flex items-center justify-center overflow-hidden">
        <Image
          src="/noticias/hero-noticias-dialogos-hector-osuna.jpeg"
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
              Noticias
            </h1>
            <p className="text-lg lg:text-xl text-[#a3d3f2] font-semibold leading-snug max-w-2xl mb-5 opacity-90">
              Actividades, encuentros y comunicados de Acción por los Derechos
              Fundamentales
            </p>
            <div className="flex flex-col gap-3 text-base text-white/75 leading-relaxed max-w-2xl mb-10">
              <p>
                En esta sección encontrarás noticias, notas de eventos,
                comunicados y avances de los programas de Acción por los
                Derechos Fundamentales, A.C.
              </p>
              <p>
                Aquí documentamos las actividades de la asociación, compartimos
                información relevante y mantenemos informada a la comunidad
                sobre encuentros, conferencias, programas e iniciativas
                ciudadanas.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/proximos-encuentros"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg"
              >
                Ver próximos encuentros
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 hover:border-white/60 px-8 py-4 rounded-lg transition-colors"
              >
                Contactar a la asociación
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

      {/* ─── EN MEDIOS ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#3d815c] uppercase block mb-4">
              Publicaciones recientes
            </span>
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-4">
              En medios
            </h2>
            <p className="text-text-soft text-base lg:text-lg leading-relaxed max-w-2xl">
              Referencias y apariciones de Acción por los Derechos Fundamentales, A.C. en medios de comunicación.
            </p>
          </div>

          <MediaGrid />
        </div>
      </section>

      {/* ─── CATEGORÍAS DE PUBLICACIONES ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#f8fbfe]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#3d815c] uppercase block mb-4">
              Organización de contenidos
            </span>
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66]">
              Categorías de publicaciones
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Encuentros */}
            <div className="bg-[#154c66] p-10 rounded-2xl flex flex-col justify-between min-h-[380px]">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-[#a3d3f2]"
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
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  Encuentros
                </h3>
                <p className="text-[#a3d3f2]/80 text-sm leading-relaxed">
                  Notas sobre conferencias, diálogos ciudadanos, invitados,
                  temas tratados y actividades realizadas por la asociación.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href="/proximos-encuentros"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#a3d3f2] hover:text-white transition-colors"
                >
                  Ver próximos encuentros
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Programas */}
            <div className="bg-[#3d815c] p-10 rounded-2xl flex flex-col justify-between min-h-[380px]">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-[#a8efc3]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  Programas
                </h3>
                <p className="text-[#a8efc3]/80 text-sm leading-relaxed">
                  Avances relacionados con Fortaleciendo Valores, Diálogos con
                  la Sociedad, Vigilancia Ciudadana y Derecho de Propiedad.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href="/programas"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#a8efc3] hover:text-white transition-colors"
                >
                  Conocer programas
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Comunicados */}
            <div className="bg-[#a3d3f2] p-10 rounded-2xl flex flex-col justify-between min-h-[380px]">
              <div>
                <div className="w-12 h-12 bg-[#154c66]/10 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-[#154c66]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-[#154c66] mb-4">
                  Comunicados
                </h3>
                <p className="text-[#154c66]/70 text-sm leading-relaxed">
                  Mensajes institucionales, avisos importantes, convocatorias o
                  información oficial de Acción por los Derechos Fundamentales.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#154c66]/20">
                <Link
                  href="/comunicados"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#154c66] hover:text-[#154c66]/60 transition-colors"
                >
                  Ver comunicados
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MANTENTE INFORMADO ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#154c66] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 opacity-5 pointer-events-none text-[300px] font-display font-bold text-white leading-none select-none"
        >
          ◈
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#a3d3f2] uppercase">
              Acción por los Derechos Fundamentales
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight">
              Mantente informado
            </h2>
            <div className="flex flex-col gap-3 text-[#a3d3f2]/90 text-base leading-relaxed max-w-xl">
              <p>
                Si quieres recibir información sobre próximos encuentros,
                actividades, programas o formas de participación, puedes
                contactar a la asociación.
              </p>
              <p>
                Una persona del equipo podrá orientarte y compartirte
                información actualizada.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg shadow-md"
              >
                Quiero recibir información
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="/proximos-encuentros"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white border border-white/30 hover:border-white/60 px-8 py-4 rounded-lg transition-colors"
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
