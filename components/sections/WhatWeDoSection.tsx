import { Users, BadgeCheck, MessageSquare, Scale, Landmark, ArrowRight } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Participación ciudadana",
    description:
      "Impulsamos la vinculación activa del ciudadano con los procesos públicos de su comunidad.",
  },
  {
    icon: BadgeCheck,
    title: "Formación cívica y valores",
    description:
      "Educación constante sobre el compromiso ético y la responsabilidad del ciudadano.",
  },
  {
    icon: MessageSquare,
    title: "Diálogo social",
    description:
      "Espacios de encuentro para el intercambio respetuoso y constructivo de ideas.",
  },
  {
    icon: Scale,
    title: "Derechos fundamentales",
    description:
      "Promoción y defensa técnica de las garantías individuales consagradas en la ley.",
  },
  {
    icon: Landmark,
    title: "Incidencia institucional",
    description:
      "Vigilancia y propuestas ciudadanas para la mejora de nuestras instituciones públicas.",
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-[28px] font-semibold leading-snug text-text-main">
            Convertimos preocupación social en participación organizada
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col p-8 rounded-2xl bg-white border border-border-subtle shadow-sm"
            >
              <Icon
                className="text-primary mb-4 shrink-0"
                size={36}
                aria-hidden="true"
              />
              <h3 className="font-serif text-xl font-semibold text-text-main mb-2">
                {title}
              </h3>
              <p className="text-text-soft text-base leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="h-14 px-10 bg-primary text-white font-semibold text-sm tracking-wide rounded-lg shadow-md hover:brightness-110 transition-all inline-flex items-center gap-3">
            Conocer nuestros programas
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
