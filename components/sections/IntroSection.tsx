export default function IntroSection() {
  return (
    <section className="py-20 lg:py-28 px-5 bg-brand-blue/30 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left: label + heading */}
        <div className="lg:col-span-4 lg:sticky lg:top-32">
          <span className="text-[10px] font-bold tracking-[0.22em] text-brand-green uppercase block mb-4">
            Quiénes somos
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight text-text-blue">
            Una asociación que abre espacios para la participación.
          </h2>
        </div>

        {/* Right: paragraphs */}
        <div className="lg:col-span-8 flex flex-col gap-6 text-text-soft text-base leading-relaxed">
          <p>
            Acción por los Derechos Fundamentales, A.C., también conocida como
            Acción por los Derechos o AADF, nace para abrir espacios serios de
            participación ciudadana, formación cívica y diálogo social en
            Tijuana, Baja California.
          </p>
          <p className="hidden md:block">
            Muchas personas se sienten afectadas por decisiones públicas que
            impactan su vida, su comunidad y su futuro. Personas que quieren
            entender qué pasa, opinar con fundamentos, organizarse con otros,
            hacer algo al respecto.
          </p>
          <p>Pero no siempre saben cómo participar.</p>
          <p className="hidden md:block">
            A veces los temas parecen lejanos, complicados o reservados para
            expertos. A veces falta un espacio donde la conversación sea
            posible, clara y respetuosa.
          </p>
          <p>Acción por los Derechos existe para reducir esa distancia.</p>

          <blockquote className="mt-4 border-l-4 border-brand-green bg-white rounded-r-xl px-8 py-6 text-text-blue font-semibold text-lg leading-snug not-italic">
            &ldquo;Participar no tiene que ser complicado. Solo necesita un espacio
            serio, claro y con propósito.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
