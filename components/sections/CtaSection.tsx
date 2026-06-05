export default function CtaSection() {
  return (
    <section className="py-24 px-6 bg-secondary/20 text-center">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-main mb-5">
          Construyamos algo más fuerte juntos
        </h2>
        <p className="text-lg text-text-soft leading-relaxed mb-10 max-w-2xl mx-auto">
          Tu participación se traduce en comunidad, programas sólidos,
          propuestas legislativas y acciones con impacto social real.
        </p>
        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          <button className="h-14 bg-primary text-white font-semibold text-sm tracking-wide rounded-lg shadow-lg active:scale-95 transition-all">
            Quiero ser miembro
          </button>
          <button className="h-14 border-2 border-primary text-primary font-semibold text-sm tracking-wide rounded-lg hover:bg-white transition-all">
            Contactar a la asociación
          </button>
        </div>
      </div>
    </section>
  );
}
