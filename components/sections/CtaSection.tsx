export default function CtaSection() {
  return (
    <section className="py-20 lg:py-28 px-5 bg-brand-blue/30 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-[10px] font-bold tracking-[0.22em] text-brand-green uppercase block mb-5">
          Únete
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-text-blue mb-6 max-w-2xl mx-auto">
          Construyamos algo más fuerte juntos
        </h2>
        <p className="text-lg text-text-soft leading-relaxed mb-10 max-w-xl mx-auto">
          Tu participación puede convertirse en comunidad, programas, propuestas
          y acciones con impacto social.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/participa"
            className="inline-flex h-14 px-8 items-center justify-center bg-brand-green text-white font-semibold text-sm tracking-wide rounded shadow-md hover:brightness-110 active:scale-[0.98] transition-all"
          >
            Quiero ser miembro
          </a>
          <a
            href="/contacto"
            className="inline-flex h-14 px-8 items-center justify-center border-2 border-text-blue/30 text-text-blue font-semibold text-sm tracking-wide rounded hover:border-text-blue hover:bg-white transition-all"
          >
            Contactar a la asociación
          </a>
        </div>
      </div>
    </section>
  );
}
