import { Handshake, Users, Eye, Scale, ArrowUpRight } from "lucide-react";

const programs = [
  {
    icon: Handshake,
    title: "Fortaleciendo Valores",
    description:
      "Proyecto educativo enfocado en reconstruir el tejido social a través del civismo y la ética ciudadana en todos los sectores.",
  },
  {
    icon: Users,
    title: "Diálogos con la Sociedad",
    description:
      "Ciclo de conferencias y mesas de trabajo diseñadas para conectar líderes de opinión con la ciudadanía preocupada.",
  },
  {
    icon: Eye,
    title: "Vigilancia Ciudadana",
    description:
      "Observatorio permanente de la legalidad y transparencia gubernamental en Baja California y sus municipios.",
  },
  {
    icon: Scale,
    title: "Derecho de Propiedad",
    description:
      "Mecanismos de defensa jurídica y difusión sobre la importancia fundamental de la propiedad privada para la libertad.",
  },
];

export default function ProgramsSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-2xl sm:text-[28px] font-semibold leading-snug text-text-main mb-4">
            Programas de Acción por los Derechos Fundamentales
          </h2>
          <p className="text-text-soft text-lg italic">
            Cuatro formas de convertir la participación en acción
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-surface-container-low p-10 rounded-2xl border border-border-subtle hover:border-primary/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mb-6">
                <Icon
                  className="text-primary"
                  size={28}
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-text-main mb-4">
                {title}
              </h3>
              <p className="text-text-soft text-base leading-relaxed mb-6">
                {description}
              </p>
              <a
                href="#"
                className="text-primary font-semibold text-sm inline-flex items-center gap-2 hover:underline"
              >
                Ver programa{" "}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
