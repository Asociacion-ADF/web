import { Shield } from "lucide-react";

export default function InstitutionalTrustSection() {
  return (
    <section className="py-20 lg:py-28 px-5 bg-white border-b border-border-subtle">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-brand-blue/40 rounded-2xl flex items-center justify-center shrink-0">
              <Shield className="text-text-blue" size={28} aria-hidden="true" />
            </div>
            <span className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-xs font-bold tracking-wider rounded-full uppercase">
              Asociación civil
            </span>
          </div>

          <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight text-text-blue">
            Una asociación civil, ciudadana y apartidista
          </h2>

          <div className="flex flex-col gap-4">
            <p className="font-display text-lg font-semibold text-brand-green">
              No somos un partido político.
            </p>
            <p className="font-display text-lg font-semibold text-text-blue">
              No somos una campaña electoral.
            </p>
            <p className="font-display text-lg font-semibold text-brand-green">
              No representamos intereses partidistas.
            </p>
          </div>
        </div>

        {/* Right: quote block */}
        <div className="border-l-4 border-brand-green bg-brand-blue/30 rounded-r-2xl px-10 py-10">
          <blockquote className="not-italic space-y-6">
            <p className="text-text-soft text-base leading-relaxed">
              Nuestro único compromiso es con la legalidad y la participación
              institucional de los ciudadanos en Tijuana, Baja California.
            </p>
            <p className="text-text-soft text-base leading-relaxed">
              Creemos que una sociedad más participativa, informada y organizada
              es la base de mejores instituciones y de un desarrollo más justo
              para todos.
            </p>
            <footer className="pt-4 border-t border-brand-blue/50">
              <cite className="not-italic text-sm font-semibold text-text-blue tracking-wide">
                Acción por los Derechos Fundamentales, A.C.
              </cite>
              <span className="block text-xs text-text-muted mt-1">
                Tijuana, Baja California
              </span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
