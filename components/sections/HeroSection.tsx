import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-border-subtle">
      {/* Editorial right-side panel — desktop only */}
      <div
        className="absolute top-0 right-0 h-full w-5/12 bg-brand-blue/10 pointer-events-none hidden lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 py-10 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left: heading + text + mobile image + CTA */}
          <div className="lg:col-span-6 flex flex-col gap-5 lg:gap-8">
            <div className="w-10 h-[3px] bg-brand-green" aria-hidden="true" />

            <h1 className="font-display text-[2rem] sm:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.08] tracking-tight text-text-blue">
              Participar también es{" "}
              <em className="not-italic text-brand-green">
                defender tu futuro
              </em>
            </h1>

            <p className="text-base lg:text-lg text-text-soft leading-relaxed max-w-lg">
              <span className="sm:hidden">
                Desde Baja California impulsamos participación ciudadana,
                diálogo social y defensa de derechos fundamentales.
              </span>
              <span className="hidden sm:inline">
                Acción por los Derechos Fundamentales, A.C. es una asociación
                civil apartidista con sede en Tijuana, Baja California.
                Promovemos participación ciudadana, formación cívica y diálogo
                social desde la sociedad.
              </span>
            </p>

            {/* Mobile-only image — visible below subtitle, hidden on desktop */}
            <div className="relative w-full rounded-xl overflow-hidden lg:hidden shadow-[0_8px_24px_rgba(21,76,102,0.12)] border border-border-subtle">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/eventos/dialogos-sociedad-asistentes-01.jpeg"
                  alt="Asistentes al encuentro ciudadano Diálogos con la Sociedad"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 0px"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/participa"
                className="inline-flex h-14 px-8 items-center justify-center bg-brand-green text-white font-semibold text-sm tracking-wide rounded shadow-md hover:brightness-110 active:scale-[0.98] transition-all w-full sm:w-auto"
              >
                Quiero ser miembro
              </a>
              <a
                href="/proximos-encuentros"
                className="inline-flex h-14 px-8 items-center justify-center border-2 border-text-blue/30 text-text-blue font-semibold text-sm tracking-wide rounded hover:border-text-blue hover:bg-brand-blue/10 transition-all w-full sm:w-auto"
              >
                Ver próximos encuentros
              </a>
            </div>
          </div>

          {/* Right: photo — desktop only */}
          <div className="hidden lg:flex lg:col-span-6 justify-end">
            <div className="relative w-full max-w-lg">
              <div
                className="absolute -bottom-3 -right-3 w-full h-full bg-brand-blue/25 rounded-xl pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative rounded-xl overflow-hidden border-4 border-white shadow-[0_12px_36px_rgba(21,76,102,0.14)]">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/eventos/hero-dialogos-sociedad.jpeg"
                    alt="Encuentro ciudadano de Diálogos con la Sociedad"
                    fill
                    className="object-cover"
                    priority
                    sizes="(min-width: 1024px) 512px, 0px"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
