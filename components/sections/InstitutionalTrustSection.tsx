import { Shield } from "lucide-react";

export default function InstitutionalTrustSection() {
  return (
    <section className="py-24 px-6 institution-gradient">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <Shield className="text-primary" size={48} aria-hidden="true" />
        </div>
        <h2 className="font-serif text-2xl sm:text-[28px] font-semibold leading-snug text-text-main mb-8">
          Una asociación civil, ciudadana y apartidista
        </h2>
        <div className="space-y-4 text-xl font-bold uppercase tracking-tight">
          <p className="text-primary">No somos un partido político.</p>
          <p className="text-text-main">No somos una campaña electoral.</p>
          <p className="text-primary">No representamos intereses partidistas.</p>
        </div>
        <p className="mt-8 text-text-muted text-base italic">
          Nuestro único compromiso es con la legalidad y la participación
          institucional de los ciudadanos en Tijuana.
        </p>
      </div>
    </section>
  );
}
