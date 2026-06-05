import { Image as ImageIcon } from "lucide-react";

export default function CommunitySection() {
  return (
    <section className="py-24 px-6 bg-white border-y border-border-subtle">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="font-serif text-3xl font-bold text-primary mb-12">
          Una comunidad que se reúne, dialoga y construye
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-surface-container rounded-2xl flex items-center justify-center"
              aria-label="Fotografía de la comunidad (próximamente)"
            >
              <ImageIcon
                className="text-primary/20"
                size={48}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
