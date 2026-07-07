"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

type Mention = {
  src: string;
  alt: string;
  medio: string;
  fecha: string;
  titulo: string;
  resumen: string;
  href?: string;
  cover: boolean;
};

const mentions: Mention[] = [
  {
    src: "/noticias/esquina32-sector-productivo-julieta-ramirez.jpeg",
    alt: "Esquina 32 — Sector productivo de BC, junio de 2026",
    medio: "Esquina 32",
    fecha: "Junio de 2026",
    titulo: "Sector productivo de BC presenta propuestas durante encuentro con Julieta Ramírez",
    resumen: "Durante el encuentro Diálogos con la Sociedad, integrantes de Acción por los Derechos Fundamentales expusieron inquietudes del sector productivo sobre movilidad, agua, energía, certeza jurídica, inversión e infraestructura educativa.",
    href: "https://esquina32.info/tag/accion-por-los-derechos-fundamentales/",
    cover: false,
  },
  {
    src: "/noticias/elmexicano-presentan-asociacion-29-mayo-2026.jpeg",
    alt: "El Mexicano — Presentan asociación \"Acción por los Derechos Fundamentales\", mayo de 2026",
    medio: "El Mexicano",
    fecha: "26 de mayo de 2026",
    titulo: "Presentan asociación \"Acción por los Derechos Fundamentales\"",
    resumen: "Buscarán impulsar propuestas relacionadas con escuelas para padres, fortalecimiento de la educación en valores y recuperación de la autoridad magisterial.",
    href: "https://el-mexicano.com.mx/Noticia/Tijuana/94500/Presentan-asociaci%C3%B3n-%E2%80%9CAcci%C3%B3n-por-los-Derechos-Fundamentales%E2%80%9D",
    cover: true,
  },
  {
    src: "/noticias/zeta-personaje-marzo-2026.jpeg",
    alt: "ZETA — Personaje, marzo de 2026",
    medio: "ZETA Tijuana",
    fecha: "Marzo de 2026",
    titulo: "Personaje",
    resumen: "ZETA destacó la trayectoria de Rufo Ibarra Batista y el trabajo de Acción por los Derechos Fundamentales en temas sociales, legislativos, humanos y educativos.",
    href: "https://zetatijuana.com/2026/03/personaje/",
    cover: false,
  },
  {
    src: "/noticias/zeta-dichoz-hechoz-dialogos-sociedad-marzo-2026.jpeg",
    alt: "ZETA — Columna Dichoz y Hechoz, Diálogos con la Sociedad, marzo de 2026",
    medio: "ZETA Tijuana",
    fecha: "Semana del 20 al 26 de marzo de 2026",
    titulo: "Acción por los Derechos Fundamentales aparece en columna de ZETA sobre Diálogos con la Sociedad",
    resumen: "La columna Dichoz y Hechoz hizo referencia a las actividades de Acción por los Derechos Fundamentales y a su programa Diálogos con la Sociedad como espacio ciudadano de conversación y participación pública.",
    href: undefined,
    cover: false,
  },
  {
    src: "/noticias/zeta-valores-noviembre-2025.jpeg",
    alt: "ZETA — Valores, noviembre de 2025",
    medio: "ZETA Tijuana",
    fecha: "Noviembre de 2025",
    titulo: "Valores",
    resumen: "ZETA hizo referencia al programa Fortaleciendo Valores en la Educación Básica, iniciativa impulsada por Acción por los Derechos Fundamentales para fortalecer el desarrollo integral de niñas, niños y familias.",
    href: "https://zetatijuana.com/2025/11/valores/",
    cover: false,
  },
  {
    src: "/noticias/elimparcial-presentan-foro-fortalecimiento-valores-imagen.jpeg",
    alt: "El Imparcial — Presentan foro Fortaleciendo Valores en la Educación Básica, noviembre de 2025",
    medio: "El Imparcial",
    fecha: "Noviembre de 2025",
    titulo: "Presentan foro \"Fortaleciendo Valores en la Educación Básica\"",
    resumen: "El Imparcial reseñó el arranque del foro ciudadano \"Fortaleciendo Valores en la Educación Básica\", una iniciativa impulsada por Acción por los Derechos Fundamentales para construir una propuesta de formación en valores dentro de las escuelas.",
    href: "https://www.elimparcial.com/tij/tijuana/2025/11/26/presentan-foro-fortaleciendo-valores-en-la-educacion-basica-como-inicio-de-una-propuesta-ciudadana/",
    cover: true,
  },
  {
    src: "/noticias/elmexicano-realizan-tijuana-foro-ciudadano-imagen.jpeg",
    alt: "El Mexicano — Foro ciudadano Fortaleciendo Valores en la Educación Básica, noviembre de 2025",
    medio: "El Mexicano",
    fecha: "Noviembre de 2025",
    titulo: "Realizan en Tijuana el foro ciudadano \"Fortaleciendo Valores en la Educación Básica\"",
    resumen: "El Mexicano destacó la participación de asociaciones civiles, profesionistas y ciudadanos en el foro, así como el objetivo de diseñar un modelo que refuerce la enseñanza de valores en las aulas.",
    href: "https://el-mexicano.com.mx/Noticia/Tijuana/86719/Realizan-en-Tijuana-el-foro-ciudadano-%E2%80%9CFortaleciendo-Valores-en-la-Educaci%C3%B3n-B%C3%A1sica%E2%80%9D",
    cover: true,
  },
  {
    src: "/noticias/infobaja-realizan-foro-ciudadano-imagen.jpeg",
    alt: "Infobaja — Foro ciudadano para reforzar valores en educación básica, noviembre de 2025",
    medio: "Infobaja",
    fecha: "Noviembre de 2025",
    titulo: "Realizan foro ciudadano para reforzar valores en educación básica",
    resumen: "Infobaja informó sobre el foro ciudadano convocado por Acción por los Derechos Fundamentales y el desarrollo de una metodología con maestros, familias, estudiantes y comunidad para fortalecer valores desde la educación básica.",
    href: "https://www.infobaja.info/realizan-foro-ciudadano-para-reforzar-valores-en-educacion-basica/",
    cover: true,
  },
  {
    src: "/noticias/afn-urge recobrar-valores-imagen.jpeg",
    alt: "AFN — Urge recobrar valores, foro ciudadano, noviembre de 2025",
    medio: "AFN",
    fecha: "Noviembre de 2025",
    titulo: "Urge recobrar valores, advierten en foro",
    resumen: "AFN cubrió la presentación del proyecto \"Fortaleciendo Valores en la Educación Básica\", destacando la preocupación por el deterioro social y la importancia de fortalecer valores desde la niñez.",
    href: "https://afntijuana.info/informacion_general/170833_urge_recobrar_valores_advierten_en_foro",
    cover: true,
  },
  {
    src: "/noticias/afn-fortalecimiento-valores-educacion-imagen.jpeg",
    alt: "AFN — O no reconstruimos o nos vamos al abismo, foro Fortaleciendo Valores, noviembre de 2025",
    medio: "AFN",
    fecha: "Noviembre de 2025",
    titulo: "O no reconstruimos, o nos vamos al abismo",
    resumen: "La columna de AFN mencionó el desayuno-foro ciudadano \"Fortaleciendo Valores en la Educación Básica\" como una iniciativa de Acción por los Derechos Fundamentales orientada a reconstruir el tejido social desde la infancia.",
    href: "https://afntijuana.info/afn_politico170756_o_no_reconstruimos_o_nos_vamos_al_abismo",
    cover: true,
  },
  {
    src: "/noticias/eltijuanense-foro-ciudadano-imagen.jpeg",
    alt: "El Tijuanense — Foro ciudadano Fortaleciendo Valores en la Educación Básica, noviembre de 2025",
    medio: "El Tijuanense",
    fecha: "Noviembre de 2025",
    titulo: "Foro ciudadano \"Fortaleciendo Valores en la Educación Básica\"",
    resumen: "El Tijuanense reportó la participación de organizaciones civiles y ciudadanos en el foro, así como la intención de construir una propuesta ciudadana para reforzar valores en los planteles educativos.",
    href: "https://eltijuanense.com/2025/11/26/foro-ciudadano-fortaleciendo-valores-en-la-educacion-basica/",
    cover: true,
  },
  {
    src: "/noticias/diario-tijuana-realizan-foro-ciudadano-imagen.jpeg",
    alt: "Diario Tijuana — Foro ciudadano Fortaleciendo Valores en la Educación Básica, noviembre de 2025",
    medio: "Diario Tijuana",
    fecha: "Noviembre de 2025",
    titulo: "Realizan en Tijuana el foro ciudadano \"Fortaleciendo Valores en la Educación Básica\"",
    resumen: "Diario Tijuana publicó la realización del foro ciudadano organizado por Acción por los Derechos Fundamentales, destacando su carácter ciudadano y el proceso para construir una propuesta con participación social.",
    href: "https://diariotijuana.info/2025/11/realizan-en-tijuana-el-foro-ciudadano-fortaleciendo-valores-en-la-educacion-basica",
    cover: true,
  },
  {
    src: "/noticias/zeta-ley-ingresos-2024-diciembre-2023.jpeg",
    alt: "ZETA — Ley de Ingresos 2024, diciembre de 2023",
    medio: "ZETA Tijuana",
    fecha: "Diciembre de 2023",
    titulo: "Expresa Acción por los Derechos Fundamentales preocupación por iniciativa de Ley de Ingresos 2024",
    resumen: "La publicación recoge la postura de la asociación sobre la propuesta de Ley de Ingresos 2024 y sus posibles efectos en educación, seguridad pública y desarrollo económico.",
    href: "https://zetatijuana.com/2023/12/expresa-accion-por-los-derechos-fundamentales-preocupacion-por-iniciativa-de-ley-de-ingresos-2024/",
    cover: false,
  },
  {
    src: "/noticias/tijuanotas-academia-conocimiento-accion-derechos-fundamentales-2020.jpeg",
    alt: "Tijuanotas — Presentación de Acción por los Derechos Fundamentales, noviembre de 2020",
    medio: "Tijuanotas",
    fecha: "Noviembre de 2020",
    titulo: "Presentan academia del conocimiento \"Acción por los Derechos Fundamentales\"",
    resumen: "La nota presenta a Acción por los Derechos Fundamentales como una asociación civil integrada por profesionistas, académicos y organismos colegiados, orientada al análisis social, el diálogo público y la generación de propuestas.",
    href: "https://tijuanotas.com/2020/11/presentan-academia-del-conocimiento-accion-por-los-derechos-fundamentales/",
    cover: false,
  },
  {
    src: "/noticias/Infobaja-presentan nueva organización-2020.jpeg",
    alt: "Infobaja — Presentación de Acción por los Derechos Fundamentales A.C., noviembre de 2020",
    medio: "Infobaja",
    fecha: "Noviembre de 2020",
    titulo: "Presentan nueva organización \"Acción por los Derechos Fundamentales A.C.\"",
    resumen: "Infobaja reseñó la presentación de la organización y su propósito de contribuir con la sociedad civil y autoridades mediante análisis, diálogo y propuestas en áreas como derecho constitucional, economía, educación y derechos humanos.",
    href: "https://www.infobaja.info/presentan-nueva-organizacion-accion-por-los-derechos-fundamentales-a-c/",
    cover: false,
  },
];

const INITIAL_VISIBLE = 9;

export default function MediaGrid() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? mentions : mentions.slice(0, INITIAL_VISIBLE);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map(({ src, alt, medio, fecha, titulo, resumen, href, cover }) => (
          <div
            key={src}
            className="rounded-2xl border border-[#a3d3f2] overflow-hidden flex flex-col bg-white"
          >
            <div className="relative w-full aspect-[4/3] bg-gray-50 shrink-0">
              <Image
                src={src}
                alt={alt}
                fill
                className={`${cover ? "object-cover object-center" : "object-contain object-center"}`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-col gap-3 p-6 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase px-2.5 py-1 rounded-full bg-[#154c66]/10 text-[#154c66]">
                  En medios
                </span>
                <span className="text-text-soft/40 text-xs" aria-hidden="true">·</span>
                <span className="text-[10px] font-semibold tracking-wide text-text-soft uppercase">
                  {medio}
                </span>
              </div>
              <p className="text-[10px] font-semibold tracking-[0.2em] text-text-soft/70 uppercase">
                {fecha}
              </p>
              <h3 className="font-display text-base font-bold text-[#154c66] leading-snug">
                {titulo}
              </h3>
              <p className="text-text-soft text-sm leading-relaxed flex-1">
                {resumen}
              </p>
              {href && (
                <div className="mt-auto pt-2">
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#3d815c] hover:text-[#2d6347] transition-colors"
                  >
                    Leer nota original
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {!showAll && mentions.length > INITIAL_VISIBLE && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#154c66] border border-[#154c66]/30 hover:border-[#154c66] hover:bg-[#154c66]/5 px-8 py-3.5 rounded-lg transition-colors"
          >
            Ver más publicaciones
            <ChevronDown size={16} aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}
