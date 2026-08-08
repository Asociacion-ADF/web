import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Comunicados Públicos | Acción por los Derechos Fundamentales, A.C.",
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
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Comunicados Públicos" }]} />

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
              Comunicados Públicos
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
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/noticias"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg w-full sm:w-auto"
              >
                Ver noticias
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white border border-white/30 hover:border-white/60 px-8 py-4 rounded-lg transition-colors w-full sm:w-auto"
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
              Archivo oficial
            </span>
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-4">
              Comunicados oficiales
            </h2>
            <p className="text-text-soft text-base lg:text-lg leading-relaxed max-w-2xl">
              Documentos, posturas institucionales y comunicados públicos de Acción por los Derechos Fundamentales, A.C.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ─── PRUEBA DE DISEÑO: card con preview real del PDF (solo este comunicado) ─── */}
            <div className="rounded-2xl border border-[#a3d3f2] overflow-hidden flex flex-col bg-white">
              <div className="w-full bg-white border-b border-[#a3d3f2]/30 shrink-0 flex flex-col items-center text-center gap-1.5 px-6 py-3">
                <div className="relative w-60 h-16">
                  <Image
                    src="/comunicados/pronunciamiento-unidad-nacional-preview-marca.png"
                    alt="Acción por los Derechos Fundamentales, A.C."
                    fill
                    className="object-contain"
                    sizes="240px"
                  />
                </div>
                <p className="font-display text-base sm:text-lg font-bold text-[#154c66] leading-snug max-w-[15rem] sm:max-w-xs">
                  Pronunciamiento por la Unidad Nacional
                </p>
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase px-2.5 py-1 rounded-full bg-[#154c66]/10 text-[#154c66]">
                    Comunicado público
                  </span>
                </div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-text-soft/70 uppercase">
                  20 de julio de 2026
                </p>
                <p className="text-text-soft text-sm leading-relaxed line-clamp-3">
                  Acción por los Derechos Fundamentales, A.C. hace un llamado a fortalecer la unidad nacional mediante el diálogo, el respeto y la colaboración, privilegiando aquello que une a las y los mexicanos por encima de las diferencias.
                </p>
                <div className="mt-auto pt-2">
                  <Link
                    href="/comunicados/pronunciamiento-unidad-nacional.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#154c66] hover:text-[#0d3347] transition-colors"
                  >
                    Leer comunicado completo
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            {/* ─── PRUEBA DE DISEÑO: patrón aprobado extendido a estos 3 comunicados ─── */}
            <div className="rounded-2xl border border-[#a3d3f2] overflow-hidden flex flex-col bg-white">
              <div className="w-full bg-white border-b border-[#a3d3f2]/30 shrink-0 flex flex-col items-center text-center gap-1.5 px-6 py-3">
                <div className="relative w-60 h-16">
                  <Image
                    src="/comunicados/pronunciamiento-unidad-nacional-preview-marca.png"
                    alt="Acción por los Derechos Fundamentales, A.C."
                    fill
                    className="object-contain"
                    sizes="240px"
                  />
                </div>
                <p className="font-display text-base sm:text-lg font-bold text-[#154c66] leading-snug max-w-[15rem] sm:max-w-xs">
                  Manifiesto público dirigido a la Fiscalía General de la República
                </p>
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase px-2.5 py-1 rounded-full bg-[#154c66]/10 text-[#154c66]">
                    Comunicado público
                  </span>
                </div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-text-soft/70 uppercase">
                  17 de julio de 2026
                </p>
                <p className="text-text-soft text-sm leading-relaxed line-clamp-3">
                  Acción por los Derechos Fundamentales, A.C. hace un llamado a que las actuaciones de la autoridad se conduzcan con objetividad, legalidad, imparcialidad, respeto al debido proceso y pleno respeto a los derechos fundamentales de todas las personas.
                </p>
                <div className="mt-auto pt-2">
                  <Link
                    href="/comunicados/manifiesto-publico-fgr-17-julio-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#154c66] hover:text-[#0d3347] transition-colors"
                  >
                    Leer comunicado completo
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#a3d3f2] overflow-hidden flex flex-col bg-white">
              <div className="w-full bg-white border-b border-[#a3d3f2]/30 shrink-0 flex flex-col items-center text-center gap-1.5 px-6 py-3">
                <div className="relative w-60 h-16">
                  <Image
                    src="/comunicados/pronunciamiento-unidad-nacional-preview-marca.png"
                    alt="Acción por los Derechos Fundamentales, A.C."
                    fill
                    className="object-contain"
                    sizes="240px"
                  />
                </div>
                <p className="font-display text-base sm:text-lg font-bold text-[#154c66] leading-snug max-w-[15rem] sm:max-w-xs">
                  Pronunciamiento a la opinión pública
                </p>
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase px-2.5 py-1 rounded-full bg-[#154c66]/10 text-[#154c66]">
                    Comunicado público
                  </span>
                </div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-text-soft/70 uppercase">
                  6 de julio de 2026
                </p>
                <p className="text-text-soft text-sm leading-relaxed line-clamp-3">
                  Acción por los Derechos Fundamentales A.C. hace un llamado a fortalecer la confianza, la certeza jurídica, el Estado de Derecho y el diálogo en la relación México-Estados Unidos ante los desafíos del T-MEC.
                </p>
                <div className="mt-auto pt-2">
                  <Link
                    href="/comunicados/PRONUNCIAMIENTO- A- LA -OPINION -PUBLICA.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#154c66] hover:text-[#0d3347] transition-colors"
                  >
                    Leer comunicado completo
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#a3d3f2] overflow-hidden flex flex-col bg-white">
              <div className="w-full bg-white border-b border-[#a3d3f2]/30 shrink-0 flex flex-col items-center text-center gap-1.5 px-6 py-3">
                <div className="relative w-60 h-16">
                  <Image
                    src="/comunicados/pronunciamiento-unidad-nacional-preview-marca.png"
                    alt="Acción por los Derechos Fundamentales, A.C."
                    fill
                    className="object-contain"
                    sizes="240px"
                  />
                </div>
                <p className="font-display text-base sm:text-lg font-bold text-[#154c66] leading-snug max-w-[15rem] sm:max-w-xs">
                  Decálogo ciudadano para el uso ético de la Inteligencia Artificial
                </p>
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase px-2.5 py-1 rounded-full bg-[#154c66]/10 text-[#154c66]">
                    Comunicado público
                  </span>
                </div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-text-soft/70 uppercase">
                  17 de junio de 2026
                </p>
                <p className="text-text-soft text-sm leading-relaxed line-clamp-3">
                  Guía ciudadana con principios para promover un uso responsable, ético y consciente de la Inteligencia Artificial.
                </p>
                <div className="mt-auto pt-2">
                  <Link
                    href="/recursos/decalogo-ciudadano-uso-etico-inteligencia-artificial.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#154c66] hover:text-[#0d3347] transition-colors"
                  >
                    Leer comunicado completo
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            {/* ─── PRUEBA DE DISEÑO: patrón aprobado extendido a estos 3 comunicados ─── */}
            <div className="rounded-2xl border border-[#a3d3f2] overflow-hidden flex flex-col bg-white">
              <div className="w-full bg-white border-b border-[#a3d3f2]/30 shrink-0 flex flex-col items-center text-center gap-1.5 px-6 py-3">
                <div className="relative w-60 h-16">
                  <Image
                    src="/comunicados/pronunciamiento-unidad-nacional-preview-marca.png"
                    alt="Acción por los Derechos Fundamentales, A.C."
                    fill
                    className="object-contain"
                    sizes="240px"
                  />
                </div>
                <p className="font-display text-base sm:text-lg font-bold text-[#154c66] leading-snug max-w-[15rem] sm:max-w-xs">
                  A la opinión pública: postura sobre Diálogos con la Sociedad
                </p>
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase px-2.5 py-1 rounded-full bg-[#154c66]/10 text-[#154c66]">
                    Comunicado público
                  </span>
                </div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-text-soft/70 uppercase">
                  Junio de 2026
                </p>
                <p className="text-text-soft text-sm leading-relaxed line-clamp-3">
                  Acción por los Derechos Fundamentales, A.C. aclara que el programa Diálogos con la Sociedad es un espacio plural, abierto y respetuoso, cuyo propósito es fomentar la participación ciudadana y el intercambio de ideas sin representar respaldo político, electoral o partidista para persona alguna.
                </p>
                <div className="mt-auto pt-2">
                  <Link
                    href="/comunicados/comunicado-publicado-prensa.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#154c66] hover:text-[#0d3347] transition-colors"
                  >
                    Leer comunicado completo
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#a3d3f2] overflow-hidden flex flex-col bg-white">
              <div className="w-full bg-white border-b border-[#a3d3f2]/30 shrink-0 flex flex-col items-center text-center gap-1.5 px-6 py-3">
                <div className="relative w-60 h-16">
                  <Image
                    src="/comunicados/pronunciamiento-unidad-nacional-preview-marca.png"
                    alt="Acción por los Derechos Fundamentales, A.C."
                    fill
                    className="object-contain"
                    sizes="240px"
                  />
                </div>
                <p className="font-display text-base sm:text-lg font-bold text-[#154c66] leading-snug max-w-[15rem] sm:max-w-xs">
                  Fortaleciendo Valores: invitación a la Comunidad Católica de Tijuana
                </p>
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase px-2.5 py-1 rounded-full bg-[#154c66]/10 text-[#154c66]">
                    Comunicado público
                  </span>
                </div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-text-soft/70 uppercase">
                  15 de junio de 2026
                </p>
                <p className="text-text-soft text-sm leading-relaxed line-clamp-3">
                  Acción por los Derechos Fundamentales, A.C. comparte una invitación a familias de la Comunidad Católica de Tijuana para fortalecer, desde el hogar y la comunidad, la formación en valores de niñas, niños y adolescentes.
                </p>
                <div className="mt-auto pt-2">
                  <Link
                    href="/comunicados/Carta-programa-valores-comunidad-catolica-tijuana.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#154c66] hover:text-[#0d3347] transition-colors"
                  >
                    Leer comunicado completo
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#a3d3f2] overflow-hidden flex flex-col bg-white">
              <div className="w-full bg-white border-b border-[#a3d3f2]/30 shrink-0 flex flex-col items-center text-center gap-1.5 px-6 py-3">
                <div className="relative w-60 h-16">
                  <Image
                    src="/comunicados/pronunciamiento-unidad-nacional-preview-marca.png"
                    alt="Acción por los Derechos Fundamentales, A.C."
                    fill
                    className="object-contain"
                    sizes="240px"
                  />
                </div>
                <p className="font-display text-base sm:text-lg font-bold text-[#154c66] leading-snug max-w-[15rem] sm:max-w-xs">
                  Carta dirigida a Claudia Sheinbaum Pardo
                </p>
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase px-2.5 py-1 rounded-full bg-[#154c66]/10 text-[#154c66]">
                    Comunicado público
                  </span>
                </div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-text-soft/70 uppercase">
                  27 de abril de 2026
                </p>
                <p className="text-text-soft text-sm leading-relaxed line-clamp-3">
                  Carta institucional dirigida a la Presidenta de México para expresar preocupación por reformas legales con posibles efectos retroactivos y su impacto en la certeza jurídica, la confianza institucional y la estabilidad económica.
                </p>
                <div className="mt-auto pt-2">
                  <Link
                    href="/comunicados/claudia-sheinbaum-pardo-abril-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#154c66] hover:text-[#0d3347] transition-colors"
                  >
                    Leer comunicado completo
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            {/* ─── PRUEBA DE DISEÑO: patrón aprobado extendido a estos 3 comunicados ─── */}
            <div className="rounded-2xl border border-[#a3d3f2] overflow-hidden flex flex-col bg-white">
              <div className="w-full bg-white border-b border-[#a3d3f2]/30 shrink-0 flex flex-col items-center text-center gap-1.5 px-6 py-3">
                <div className="relative w-60 h-16">
                  <Image
                    src="/comunicados/pronunciamiento-unidad-nacional-preview-marca.png"
                    alt="Acción por los Derechos Fundamentales, A.C."
                    fill
                    className="object-contain"
                    sizes="240px"
                  />
                </div>
                <p className="font-display text-base sm:text-lg font-bold text-[#154c66] leading-snug max-w-[15rem] sm:max-w-xs">
                  Mensaje a la ciudadanía en general
                </p>
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase px-2.5 py-1 rounded-full bg-[#154c66]/10 text-[#154c66]">
                    Comunicado público
                  </span>
                </div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-text-soft/70 uppercase">
                  22 de abril de 2026
                </p>
                <p className="text-text-soft text-sm leading-relaxed line-clamp-3">
                  Comunicado dirigido a la ciudadanía sobre la importancia de mantenerse informada y tomar medidas preventivas ante posibles riesgos relacionados con bloqueos o inmovilización de cuentas bancarias.
                </p>
                <div className="mt-auto pt-2">
                  <Link
                    href="/comunicados/mensaje-ciudadania-general-tijuana-abril-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#154c66] hover:text-[#0d3347] transition-colors"
                  >
                    Leer comunicado completo
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#a3d3f2] overflow-hidden flex flex-col bg-white">
              <div className="w-full bg-white border-b border-[#a3d3f2]/30 shrink-0 flex flex-col items-center text-center gap-1.5 px-6 py-3">
                <div className="relative w-60 h-16">
                  <Image
                    src="/comunicados/pronunciamiento-unidad-nacional-preview-marca.png"
                    alt="Acción por los Derechos Fundamentales, A.C."
                    fill
                    className="object-contain"
                    sizes="240px"
                  />
                </div>
                <p className="font-display text-base sm:text-lg font-bold text-[#154c66] leading-snug max-w-[15rem] sm:max-w-xs">
                  Mensaje al sector empresarial de México
                </p>
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase px-2.5 py-1 rounded-full bg-[#154c66]/10 text-[#154c66]">
                    Comunicado público
                  </span>
                </div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-text-soft/70 uppercase">
                  19 de marzo de 2026
                </p>
                <p className="text-text-soft text-sm leading-relaxed line-clamp-3">
                  Comunicado dirigido al sector empresarial sobre la importancia de fortalecer la certeza jurídica, la confianza institucional y condiciones más equilibradas para la inversión y la actividad productiva.
                </p>
                <div className="mt-auto pt-2">
                  <Link
                    href="/comunicados/mensaje-sector-empresarial-marzo-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#154c66] hover:text-[#0d3347] transition-colors"
                  >
                    Leer comunicado completo
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#a3d3f2] overflow-hidden flex flex-col bg-white">
              <div className="w-full bg-white border-b border-[#a3d3f2]/30 shrink-0 flex flex-col items-center text-center gap-1.5 px-6 py-3">
                <div className="relative w-60 h-16">
                  <Image
                    src="/comunicados/pronunciamiento-unidad-nacional-preview-marca.png"
                    alt="Acción por los Derechos Fundamentales, A.C."
                    fill
                    className="object-contain"
                    sizes="240px"
                  />
                </div>
                <p className="font-display text-base sm:text-lg font-bold text-[#154c66] leading-snug max-w-[15rem] sm:max-w-xs">
                  Manifiesto / Comunicado a la Ciudadanía
                </p>
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase px-2.5 py-1 rounded-full bg-[#154c66]/10 text-[#154c66]">
                    Comunicado público
                  </span>
                </div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-text-soft/70 uppercase">
                  11 de febrero de 2026
                </p>
                <p className="text-text-soft text-sm leading-relaxed line-clamp-3">
                  Acción por los Derechos Fundamentales, A.C. invita a las familias a mantener al día sus esquemas de vacunación y consultar los puntos oficiales de atención disponibles según su domicilio.
                </p>
                <div className="mt-auto pt-2">
                  <Link
                    href="/comunicados/manifiesto-vacunacion-11-febrero-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#154c66] hover:text-[#0d3347] transition-colors"
                  >
                    Leer comunicado completo
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            {/* ─── PRUEBA DE DISEÑO: patrón aprobado extendido a estos 2 comunicados ─── */}
            <div className="rounded-2xl border border-[#a3d3f2] overflow-hidden flex flex-col bg-white">
              <div className="w-full bg-white border-b border-[#a3d3f2]/30 shrink-0 flex flex-col items-center text-center gap-1.5 px-6 py-3">
                <div className="relative w-60 h-16">
                  <Image
                    src="/comunicados/pronunciamiento-unidad-nacional-preview-marca.png"
                    alt="Acción por los Derechos Fundamentales, A.C."
                    fill
                    className="object-contain"
                    sizes="240px"
                  />
                </div>
                <p className="font-display text-base sm:text-lg font-bold text-[#154c66] leading-snug max-w-[15rem] sm:max-w-xs">
                  Solicitud de permanencia del estímulo fiscal del 8% del IVA en regiones fronterizas
                </p>
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase px-2.5 py-1 rounded-full bg-[#154c66]/10 text-[#154c66]">
                    Comunicado público
                  </span>
                </div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-text-soft/70 uppercase">
                  Diciembre de 2025
                </p>
                <p className="text-text-soft text-sm leading-relaxed line-clamp-3">
                  Acción por los Derechos Fundamentales, A.C. solicita la permanencia o prórroga del estímulo fiscal del 8% de IVA en regiones fronterizas y perímetros libres, al considerarlo un mecanismo de equilibrio económico y social para proteger empleo, consumo, inversión y estabilidad de las familias fronterizas.
                </p>
                <div className="mt-auto pt-2">
                  <Link
                    href="/comunicados/Accion_Tasa del 8% de IVA en la Zona Fronteriza 1 (1).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#154c66] hover:text-[#0d3347] transition-colors"
                  >
                    Leer comunicado completo
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#a3d3f2] overflow-hidden flex flex-col bg-white">
              <div className="w-full bg-white border-b border-[#a3d3f2]/30 shrink-0 flex flex-col items-center text-center gap-1.5 px-6 py-3">
                <div className="relative w-60 h-16">
                  <Image
                    src="/comunicados/pronunciamiento-unidad-nacional-preview-marca.png"
                    alt="Acción por los Derechos Fundamentales, A.C."
                    fill
                    className="object-contain"
                    sizes="240px"
                  />
                </div>
                <p className="font-display text-base sm:text-lg font-bold text-[#154c66] leading-snug max-w-[15rem] sm:max-w-xs">
                  Felicitación y reconocimiento a María Corina Machado
                </p>
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase px-2.5 py-1 rounded-full bg-[#154c66]/10 text-[#154c66]">
                    Comunicado público
                  </span>
                </div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-text-soft/70 uppercase">
                  Octubre de 2025
                </p>
                <p className="text-text-soft text-sm leading-relaxed line-clamp-3">
                  Acción por los Derechos Fundamentales, A.C. expresa su felicitación y reconocimiento a María Corina Machado por su firmeza, valentía y compromiso con los valores democráticos y los derechos fundamentales.
                </p>
                <div className="mt-auto pt-2">
                  <Link
                    href="/comunicados/felcitaciones-maria-corina-machado.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#154c66] hover:text-[#0d3347] transition-colors"
                  >
                    Leer comunicado completo
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg shadow-md w-full sm:w-auto"
              >
                Contactar a la asociación
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="/proximos-encuentros"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white border border-white/30 hover:border-white/60 px-8 py-4 rounded-lg transition-colors w-full sm:w-auto"
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
