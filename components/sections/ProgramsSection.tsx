import { Handshake, Users, Eye, Scale, ArrowUpRight } from "lucide-react";

const programs = [
  {
    icon: Handshake,
    title: "Fortaleciendo Valores",
    description:
      "Formación cívica y valores para niñas, niños y jóvenes.",
    href: "/programas/fortaleciendo-valores",
  },
  {
    icon: Users,
    title: "Diálogos con la Sociedad",
    description:
      "Encuentros ciudadanos, conferencias y diálogo social en Tijuana.",
    href: "/programas/dialogos-con-la-sociedad",
  },
  {
    icon: Eye,
    title: "Vigilancia Ciudadana",
    description:
      "Participación responsable, legalidad y defensa de la vida democrática.",
    href: "/programas/vigilancia-ciudadana",
  },
  {
    icon: Scale,
    title: "Derecho de Propiedad",
    description:
      "Certeza jurídica, patrimonio y desarrollo urbano.",
    href: "/programas/derecho-de-propiedad",
  },
];

export default function ProgramsSection() {
  return (
    <section className="py-20 lg:py-28 px-5 bg-brand-blue/30 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="text-[10px] font-bold tracking-[0.22em] text-brand-green uppercase block mb-3">
            Programas
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight text-text-blue max-w-xl">
            Programas de Acción por los Derechos Fundamentales
          </h2>
        </div>

        {/* Horizontal card list */}
        <div className="flex flex-col gap-4">
          {programs.map(({ icon: Icon, title, description, href }) => (
            <a
              key={title}
              href={href}
              className="group flex items-center gap-8 bg-white border border-border-subtle hover:border-brand-blue/50 rounded-2xl p-8 transition-all hover:shadow-md"
            >
              {/* Icon box */}
              <div className="w-14 h-14 rounded-xl bg-brand-blue/35 group-hover:bg-brand-green flex items-center justify-center shrink-0 transition-colors">
                <Icon
                  className="text-text-blue group-hover:text-white transition-colors"
                  size={24}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg font-semibold text-text-blue mb-1">
                  {title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Arrow */}
              <ArrowUpRight
                className="text-brand-green shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                size={22}
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
