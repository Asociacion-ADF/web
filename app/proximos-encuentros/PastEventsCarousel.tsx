"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  {
    src: "/eventos/dialogos-sociedad-jesus-alejandro-ruiz-uribe-17-marzo-2026.jpeg",
    alt: "Diálogos con la Sociedad con Jesús Alejandro Ruiz Uribe — 17 de marzo de 2026",
  },
  {
    src: "/eventos/dialogos-sociedad-evangelina-moreno-guerra-06-abril-2026.jpeg",
    alt: "Diálogos con la Sociedad con Evangelina Moreno Guerra — 6 de abril de 2026",
  },
  {
    src: "/eventos/dialogos-sociedad-christopher-teal-29-mayo-2026.jpeg",
    alt: "Diálogos con la Sociedad con Christopher Teal — 29 de mayo de 2026",
  },
  {
    src: "/eventos/dialogos-sociedad-hector-osuna-jaime-flyer-cuadrado-15-junio-2026.jpeg",
    alt: "Diálogos con la Sociedad con Héctor Osuna Jaime — 15 de junio de 2026",
  },
  {
    src: "/eventos/dialogos-sociedad-lorena-becerra-22-junio-2026.jpeg",
    alt: "Diálogos con la Sociedad con la Dra. Lorena Becerra — 22 de junio de 2026",
  },
  {
    src: "/eventos/dialogos-sociedad-ismael-burgueno-6-julio-2026.jpg",
    alt: "Diálogos con la Sociedad con el Dr. Ismael Burgueño Ruiz — 6 de julio de 2026",
  },
];

export default function PastEventsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / events.length;
    el.scrollBy({ left: dir === "right" ? cardWidth : -cardWidth, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Left arrow */}
      <button
        onClick={() => scroll("left")}
        aria-label="Ver encuentros anteriores"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-[#a3d3f2]/50 shadow-md flex items-center justify-center text-[#154c66] hover:bg-[#154c66] hover:text-white transition-colors"
      >
        <ChevronLeft size={20} aria-hidden="true" />
      </button>

      {/* Scroll track */}
      <div
        ref={scrollRef}
        className="flex gap-4 lg:gap-6 overflow-x-auto scroll-smooth px-14"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {events.map(({ src, alt }) => (
          <div
            key={src}
            className="relative flex-none w-52 lg:w-64 aspect-[3/4] rounded-2xl overflow-hidden border border-[#a3d3f2]/30 shadow-sm"
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 208px, 256px"
            />
          </div>
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scroll("right")}
        aria-label="Ver más encuentros anteriores"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-[#a3d3f2]/50 shadow-md flex items-center justify-center text-[#154c66] hover:bg-[#154c66] hover:text-white transition-colors"
      >
        <ChevronRight size={20} aria-hidden="true" />
      </button>
    </div>
  );
}
