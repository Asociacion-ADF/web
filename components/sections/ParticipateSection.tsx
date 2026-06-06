const tiers = [
  {
    name: "Miembro",
    description:
      "Para personas que quieren participar activamente en la vida de la asociación.",
    price: "Aportación anual: $6,000 MXN",
    cta: "Quiero ser miembro",
    href: "/participa#miembro",
    highlighted: false,
  },
  {
    name: "Aliado estratégico",
    description:
      "Para empresas, instituciones y líderes que quieren fortalecer el alcance de la asociación.",
    price: "Aportación anual: $12,000 MXN",
    cta: "Quiero ser aliado estratégico",
    href: "/participa#aliado",
    highlighted: true,
  },
  {
    name: "Apoya un programa",
    description:
      "Para personas, empresas o instituciones que quieren respaldar una causa concreta.",
    price: "Aportación voluntaria, según el programa seleccionado.",
    cta: "Quiero apoyar un programa",
    href: "/participa#apoyar",
    highlighted: false,
  },
];

export default function ParticipateSection() {
  return (
    <section className="py-20 lg:py-28 px-5 bg-white border-b border-border-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 mb-14">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-brand-green uppercase block mb-3">
              Participa
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight text-text-blue">
              Elige cómo quieres sumarte
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-text-soft text-base leading-relaxed">
              Hay distintas formas de apoyar la misión de Acción por los
              Derechos Fundamentales. Desde la participación activa como
              miembro hasta el respaldo puntual de un programa específico.
            </p>
          </div>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`group relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 ${
                tier.highlighted
                  ? "border-2 border-brand-green bg-brand-blue/35 shadow-md hover:-translate-y-2 hover:shadow-xl"
                  : "border border-border-subtle bg-white hover:-translate-y-2 hover:shadow-lg hover:border-brand-blue/65 hover:bg-brand-blue/25"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-8 bg-brand-green text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">
                  Más popular
                </span>
              )}

              <div>
                <h3 className="font-display text-xl font-bold text-text-blue mb-2">
                  {tier.name}
                </h3>
                <p className="text-text-soft text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <p className="text-xs font-semibold text-text-muted border-t border-border-subtle pt-4">
                {tier.price}
              </p>

              <a
                href={tier.href}
                className={`mt-auto flex h-12 items-center justify-center rounded font-semibold text-sm tracking-wide transition-all ${
                  tier.highlighted
                    ? "bg-brand-green text-white hover:brightness-110 shadow-sm"
                    : "border border-text-blue/30 text-text-blue hover:border-brand-green hover:text-brand-green group-hover:border-brand-green group-hover:text-brand-green"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
