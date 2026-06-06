import { Users, BookOpen, MessageSquare, Scale, Landmark, ArrowRight } from "lucide-react";

const pillars = [
  {
    num: "01",
    icon: Users,
    title: "Participación ciudadana",
    description:
      "Impulsamos la vinculación activa del ciudadano con los procesos públicos de su comunidad.",
  },
  {
    num: "02",
    icon: BookOpen,
    title: "Formación cívica y valores",
    description:
      "Educación constante sobre el compromiso ético y la responsabilidad ciudadana.",
  },
  {
    num: "03",
    icon: MessageSquare,
    title: "Diálogo social",
    description:
      "Espacios de encuentro para el intercambio respetuoso y constructivo de ideas.",
  },
  {
    num: "04",
    icon: Scale,
    title: "Derechos fundamentales",
    description:
      "Promoción y defensa de las garantías individuales consagradas en la ley.",
  },
  {
    num: "05",
    icon: Landmark,
    title: "Incidencia institucional",
    description:
      "Vigilancia y propuestas ciudadanas para la mejora de nuestras instituciones públicas.",
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="py-20 lg:py-28 px-5 bg-white border-b border-border-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-14">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-brand-green uppercase block mb-3">
              Lo que hacemos
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight text-text-blue max-w-lg">
              Cinco ejes que guían el trabajo de la asociación
            </h2>
          </div>
          <a
            href="/programas"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:underline shrink-0"
          >
            Conocer los programas
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        {/* Pillars grid: gap-px trick for hairline borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-brand-blue/40 border border-brand-blue/40 rounded-2xl overflow-hidden">
          {pillars.map(({ num, icon: Icon, title, description }) => (
            <div
              key={num}
              className="bg-white p-8 flex flex-col gap-5 hover:bg-brand-blue/25 transition-colors group"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-3xl font-bold text-brand-blue/80 leading-none group-hover:text-brand-green transition-colors">
                  {num}
                </span>
                <Icon
                  className="text-text-blue/30 group-hover:text-brand-green transition-colors"
                  size={22}
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-display text-base font-semibold text-text-blue leading-snug">
                {title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
