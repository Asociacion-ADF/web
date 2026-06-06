"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

const tabs = ["Encuentros", "Programas", "Comunicados"] as const;
type Tab = (typeof tabs)[number];

export default function NewsSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Encuentros");

  return (
    <section className="py-20 lg:py-28 px-5 bg-gray-50 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-brand-green uppercase block mb-3">
              Noticias
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight text-text-blue max-w-xl">
              Noticias, eventos y actividades de Acción por los Derechos
              Fundamentales
            </h2>
          </div>
          <a
            href="/noticias"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:underline shrink-0"
          >
            Ver todo
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-7" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold tracking-wide border transition-colors ${
                activeTab === tab
                  ? "bg-[#154c66] text-white border-[#154c66]"
                  : "bg-white text-text-soft border-border-subtle hover:text-text-blue hover:border-text-blue/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Panel: Encuentros */}
        {activeTab === "Encuentros" && (
          <div
            role="tabpanel"
            className="bg-white rounded-2xl border border-[#a3d3f2] shadow-sm overflow-hidden flex flex-col md:flex-row"
          >
            <div className="relative w-full aspect-[3/4] md:w-56 md:aspect-auto lg:w-64 shrink-0 bg-blue-50/50">
              <Image
                src="/eventos/calendario-encuentros-dialogos-2026.jpeg"
                alt="Calendario de eventos Diálogos con la Sociedad 2026"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 256px"
              />
            </div>
            <div className="flex flex-col justify-center gap-5 p-8 lg:p-10">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-bold tracking-[0.22em] text-brand-green uppercase">
                  Encuentros
                </span>
                <span className="text-text-soft/40 text-xs" aria-hidden="true">·</span>
                <span className="text-[10px] font-semibold tracking-wide text-text-soft uppercase">
                  Diálogos con la Sociedad
                </span>
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-bold text-text-blue leading-snug">
                Calendario de eventos Diálogos con la Sociedad 2026
              </h3>
              <p className="text-text-soft text-sm leading-relaxed max-w-lg">
                Consulta las próximas fechas del programa Diálogos con la Sociedad.
              </p>
              <div>
                <Link
                  href="/proximos-encuentros"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-5 py-2.5 rounded-lg transition-colors"
                >
                  Ver próximos encuentros
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Panel: Programas */}
        {activeTab === "Programas" && (
          <div
            role="tabpanel"
            className="bg-white rounded-2xl border border-[#a3d3f2] shadow-sm overflow-hidden flex flex-col md:flex-row"
          >
            <div className="relative w-full aspect-[3/4] md:w-56 md:aspect-auto lg:w-64 shrink-0 bg-gray-50">
              <Image
                src="/eventos/fortaleciendo-valores-portada-01.jpeg"
                alt="Programa Fortaleciendo Valores"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 256px"
              />
            </div>
            <div className="flex flex-col justify-center gap-5 p-8 lg:p-10">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-bold tracking-[0.22em] text-brand-green uppercase">
                  Programas
                </span>
                <span className="text-text-soft/40 text-xs" aria-hidden="true">·</span>
                <span className="text-[10px] font-semibold tracking-wide text-text-soft uppercase">
                  Fortaleciendo Valores
                </span>
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-bold text-text-blue leading-snug">
                Fortaleciendo Valores: educación cívica y valores para nuevas generaciones
              </h3>
              <p className="text-text-soft text-sm leading-relaxed max-w-lg">
                Programa orientado a promover valores, cultura cívica y responsabilidad
                social en niñas, niños y jóvenes, involucrando a familias, docentes,
                instituciones educativas y ciudadanía comprometida.
              </p>
              <div>
                <Link
                  href="/programas/fortaleciendo-valores"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-5 py-2.5 rounded-lg transition-colors"
                >
                  Conocer Fortaleciendo Valores
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Panel: Comunicados */}
        {activeTab === "Comunicados" && (
          <div
            role="tabpanel"
            className="bg-white rounded-2xl border border-[#a3d3f2] shadow-sm overflow-hidden flex flex-col md:flex-row"
          >
            <div className="w-full aspect-[3/4] md:w-56 md:aspect-auto lg:w-64 shrink-0 bg-blue-50/60 flex items-center justify-center">
              <FileText className="text-text-blue/25" size={52} aria-hidden="true" />
            </div>
            <div className="flex flex-col justify-center gap-5 p-8 lg:p-10">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-bold tracking-[0.22em] text-brand-green uppercase">
                  Comunicados
                </span>
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-bold text-text-blue leading-snug">
                Solicitud de permanencia del estímulo fiscal del 8% de IVA en regiones fronterizas
              </h3>
              <p className="text-text-soft text-sm leading-relaxed max-w-lg">
                Acción por los Derechos Fundamentales, A.C. solicita mantener el
                estímulo fiscal del 8% de IVA en regiones fronterizas como medida
                de estabilidad económica, certeza jurídica y competitividad regional.
              </p>
              <div>
                <Link
                  href="/noticias?tipo=comunicado"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-5 py-2.5 rounded-lg transition-colors"
                >
                  Ver comunicado
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
