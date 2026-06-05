const tiers = [
  {
    name: "Miembro",
    description:
      "Para ciudadanos comprometidos que desean participar plenamente en asambleas, votaciones y programas internos.",
    price: "Aportación anual: $6,000 MXN",
    cta: "Quiero ser miembro",
    highlighted: false,
    outline: false,
  },
  {
    name: "Aliado estratégico",
    description:
      "Para líderes y organizaciones que buscan mayor incidencia, visibilidad y respaldo institucional en nuestras causas.",
    price: "Aportación anual: $12,000 MXN",
    cta: "Quiero ser aliado estratégico",
    highlighted: true,
    outline: false,
  },
  {
    name: "Apoya un programa",
    description:
      "Contribuciones específicas destinadas exclusivamente al sostenimiento de un proyecto o programa de su interés.",
    price: "Modalidad: Voluntario / Donante",
    cta: "Quiero apoyar un programa",
    highlighted: false,
    outline: true,
  },
];

export default function ParticipateSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-2xl sm:text-[28px] font-semibold leading-snug text-text-main mb-4">
            Elige cómo quieres sumarte
          </h2>
          <p className="text-text-soft text-base">
            Diferentes formas de respaldar nuestra misión ciudadana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-10 flex flex-col items-start text-left bg-white ${
                tier.highlighted
                  ? "border-2 border-primary shadow-lg"
                  : "border border-border-subtle hover:shadow-xl transition-shadow"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-10 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Recomendado
                </div>
              )}
              <h3 className="font-serif text-2xl font-semibold text-text-main mb-2">
                {tier.name}
              </h3>
              <p className="text-text-soft text-base leading-relaxed mb-6">
                {tier.description}
              </p>
              <p className="text-sm font-semibold text-text-muted mb-8">
                {tier.price}
              </p>
              <button
                className={`mt-auto w-full h-12 rounded-lg font-semibold text-sm tracking-wide transition-all ${
                  tier.outline
                    ? "border-2 border-primary text-primary hover:bg-primary/5"
                    : "bg-primary text-white hover:brightness-110 shadow-md"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
