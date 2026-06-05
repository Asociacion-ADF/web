export default function UpcomingMeetingsSection() {
  return (
    <section className="py-24 px-6 bg-primary text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-[30px] sm:text-[48px] font-bold leading-tight tracking-tight mb-10">
          Ven, conoce la comunidad y participa
        </h2>
        <p className="text-lg leading-relaxed opacity-90 mb-10">
          Nuestros encuentros son el corazón de la asociación. Conferencias
          magistrales, mesas de diálogo y networking con líderes comprometidos.
          Abordamos temas sociales y cívicos actuales, abriendo oportunidades
          directas de participación institucional.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="h-14 px-8 bg-white text-primary font-semibold text-sm tracking-wide rounded-lg shadow-lg hover:bg-secondary/20 transition-all">
            Ver próximos encuentros
          </button>
          <button className="h-14 px-8 border-2 border-white text-white font-semibold text-sm tracking-wide rounded-lg hover:bg-white/10 transition-all">
            Quiero recibir información
          </button>
        </div>
      </div>
    </section>
  );
}
