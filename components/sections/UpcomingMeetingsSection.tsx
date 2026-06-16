import { ArrowRight } from "lucide-react";

export default function UpcomingMeetingsSection() {
  return (
    <section className="py-20 lg:py-28 px-5 bg-brand-green text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left: heading */}
        <div className="lg:col-span-5">
          <span className="text-[10px] font-bold tracking-[0.22em] text-white/50 uppercase block mb-4">
            Encuentros
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight">
            Ven, conoce la comunidad y participa
          </h2>
        </div>

        {/* Right: description + CTA */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <p className="text-white/80 text-lg leading-relaxed">
            Los encuentros de Acción por los Derechos Fundamentales son una
            de las formas más sencillas de acercarte a la asociación.
            Conferencias, mesas de diálogo y conversaciones con otros
            ciudadanos comprometidos. Sin requisitos previos. Solo disposición
            a participar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/proximos-encuentros"
              className="inline-flex h-14 px-8 items-center justify-center gap-2 bg-white text-brand-green font-semibold text-sm tracking-wide rounded shadow-md hover:bg-white/90 active:scale-[0.98] transition-all w-full sm:w-auto"
            >
              Ver próximos encuentros
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="/contacto"
              className="inline-flex h-14 px-8 items-center justify-center border-2 border-white/40 text-white font-semibold text-sm tracking-wide rounded hover:border-white hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              Quiero recibir información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
