export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex flex-col justify-center px-6 py-24 hero-bg overflow-hidden border-b border-border-subtle">
      <div className="relative z-10 max-w-[1200px] mx-auto w-full">
        <span className="inline-block px-4 py-1.5 bg-secondary/30 text-primary text-sm font-semibold tracking-wider rounded-full mb-5 uppercase">
          Tijuana, Baja California
        </span>
        <h1 className="font-serif text-[30px] sm:text-[48px] lg:text-[52px] font-bold leading-tight tracking-tight text-text-main mb-10 max-w-3xl">
          Participar también es defender tu futuro
        </h1>
        <p className="text-lg text-text-soft leading-relaxed mb-10 max-w-2xl">
          Acción por los Derechos Fundamentales, A.C. es una asociación civil
          apartidista con sede en Tijuana, Baja California. Promovemos
          participación ciudadana, formación cívica, diálogo social, defensa de
          derechos fundamentales e incidencia institucional desde la sociedad.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="h-14 px-8 bg-primary text-white font-semibold text-sm tracking-wide rounded-lg shadow-lg hover:brightness-110 active:scale-[0.98] transition-all">
            Quiero ser miembro
          </button>
          <button className="h-14 px-8 border-2 border-primary text-primary font-semibold text-sm tracking-wide rounded-lg hover:bg-primary/5 transition-colors">
            Ver próximos encuentros
          </button>
        </div>
      </div>
      <div
        className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
