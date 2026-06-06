import Image from "next/image";

export default function CommunitySection() {
  return (
    <section className="py-20 lg:py-28 px-5 bg-white border-b border-border-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold tracking-[0.22em] text-brand-green uppercase block mb-3">
            Comunidad
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight text-text-blue">
            Una comunidad que se reúne, dialoga y construye
          </h2>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border-subtle">
            <Image
              src="/eventos/Foto grupal del evento de Diálogos con la Sociedad.jpeg"
              alt="Foto grupal del encuentro Diálogos con la Sociedad"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border-subtle">
            <Image
              src="/eventos/Reunion ciudadana.jpeg"
              alt="Reunión ciudadana de Acción por los Derechos Fundamentales"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border-subtle">
            <Image
              src="/eventos/dialogos-sociedad-conferencia-01.jpeg"
              alt="Encuentro de Diálogos con la Sociedad con asistentes y ponente"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border-subtle">
            <Image
              src="/eventos/fundador-entrega-comida-comunidad-01.jpeg"
              alt="Actividad comunitaria de apoyo social"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
