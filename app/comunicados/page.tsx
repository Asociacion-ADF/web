import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Comunicados | Acción por los Derechos Fundamentales, A.C.",
  description:
    "Mensajes institucionales, avisos importantes, convocatorias e información oficial de Acción por los Derechos Fundamentales, A.C. en Tijuana, Baja California.",
};

function FineLine({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`mb-6 h-px ${light ? "bg-[#a3d3f2]" : "bg-[#3d815c]"}`}
      style={{ width: 60 }}
    />
  );
}

export default function ComunicadosPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[640px] flex items-center justify-center overflow-hidden">
        <Image
          src="/comunicados/hero-comunicados-dialogos-hector-osuna.jpeg"
          alt="Comunicados de Acción por los Derechos Fundamentales"
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
              className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
            >
              Comunicados
            </h1>
            <p className="text-lg lg:text-xl text-[#a3d3f2] font-semibold leading-snug max-w-2xl mb-5 opacity-90">
              Mensajes institucionales e información oficial de la asociación
            </p>
            <div className="flex flex-col gap-3 text-base text-white/75 leading-relaxed max-w-2xl mb-10">
              <p>
                En esta sección encontrarás los comunicados oficiales, avisos
                importantes y convocatorias de Acción por los Derechos
                Fundamentales, A.C.
              </p>
              <p>
                Aquí publicamos posicionamientos institucionales, información
                relevante para la comunidad y novedades sobre los programas e
                iniciativas de la asociación.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/noticias"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg"
              >
                Ver noticias
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

      {/* ─── COMUNICADOS ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#3d815c] uppercase block mb-4">
              Estado actual
            </span>
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-4">
              Comunicados oficiales
            </h2>
            <p className="text-text-soft text-base lg:text-lg leading-relaxed max-w-2xl">
              En esta sección se mostrarán los comunicados más recientes de
              Acción por los Derechos Fundamentales, A.C.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="rounded-2xl border border-[#a3d3f2] overflow-hidden"
              >
                <div className="bg-[#a3d3f2]/30 px-6 py-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#154c66]">
                    Comunicados
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-white/15 text-[#154c66]">
                    Próximamente
                  </span>
                </div>
                <div className="bg-white px-6 py-8 flex flex-col gap-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 pb-4 border-b border-[#e8f4fd] last:border-0 last:pb-0"
                    >
                      <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-[#154c66] opacity-30" />
                      <div className="flex-1">
                        <div className="h-3 bg-gray-100 rounded w-3/4 mb-2" />
                        <div className="h-2.5 bg-gray-100 rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-text-soft text-sm leading-relaxed max-w-xl">
            Próximamente compartiremos comunicados e información oficial de
            Acción por los Derechos Fundamentales, A.C.
          </p>
        </div>
      </section>

      {/* ─── CTA ─── */}
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
            <p className="text-[#a3d3f2]/90 text-base leading-relaxed max-w-xl">
              Si quieres recibir información sobre comunicados, actividades y
              programas de la asociación, puedes contactarnos directamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg shadow-md"
              >
                Contactar a la asociación
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
