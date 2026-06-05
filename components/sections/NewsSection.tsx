"use client";

import { useState } from "react";
import { FileText } from "lucide-react";

const tabs = ["Encuentros", "Programas", "Comunicados"] as const;
type Tab = (typeof tabs)[number];

export default function NewsSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Encuentros");

  return (
    <section className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="font-serif text-2xl sm:text-[28px] font-semibold text-text-main mb-10 uppercase tracking-widest">
          Noticias, eventos y actividades
        </h2>

        <div
          className="flex justify-center gap-8 mb-12 text-sm font-semibold uppercase tracking-wider"
          role="tablist"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-primary text-primary"
                  : "text-text-muted hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          className="bg-white p-16 rounded-3xl border border-border-subtle shadow-inner"
        >
          <FileText
            className="text-text-muted mx-auto mb-6"
            size={56}
            aria-hidden="true"
          />
          <p className="text-text-soft text-lg max-w-xl mx-auto">
            Próximamente compartiremos noticias, encuentros y actividades de
            Acción por los Derechos Fundamentales, A.C.
          </p>
        </div>
      </div>
    </section>
  );
}
