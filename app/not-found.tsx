import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Página no encontrada | Acción por los Derechos Fundamentales, A.C.",
  description:
    "La página que buscas no está disponible. Vuelve al inicio o conoce los programas, próximos encuentros y formas de contacto de Acción por los Derechos Fundamentales, A.C.",
};

const cards = [
  {
    title: "Programas",
    body: "Conoce los programas de Acción por los Derechos Fundamentales:",
    list: [
      "Fortaleciendo Valores",
      "Diálogos con la Sociedad",
      "Vigilancia Ciudadana",
      "Derecho de Propiedad",
    ],
    href: "/programas",
    cta: "Ver programas",
  },
  {
    title: "Participa",
    body: "Súmate como miembro, aliado estratégico o apoya un programa específico.",
    list: null,
    href: "/participa",
    cta: "Cómo participar",
  },
  {
    title: "Próximos encuentros",
    body: "Consulta próximos encuentros, conferencias y actividades ciudadanas.",
    list: null,
    href: "/proximos-encuentros",
    cta: "Ver encuentros",
  },
  {
    title: "Contacto",
    body: "Comunícate con la asociación o déjanos tus datos para recibir información.",
    list: null,
    href: "/contacto",
    cta: "Ir a contacto",
  },
];

export default function NotFound() {
  return (
    <>
      {/* ─── SECCIÓN CENTRAL ─── */}
      <section className="min-h-[60vh] flex items-center justify-center px-5 py-20 bg-[#f8fbfe]">
        <div className="max-w-2xl w-full text-center flex flex-col items-center gap-6">
          <AlertCircle
            size={56}
            className="text-[#3d815c]"
            aria-hidden="true"
          />

          <div>
            <p className="text-sm font-bold tracking-[0.3em] text-[#3d815c] uppercase mb-3">
              Error 404
            </p>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-[#154c66] mb-4 leading-tight">
              Página no encontrada
            </h1>
            <p className="font-display text-xl font-semibold text-[#154c66]/60 mb-6">
              Parece que este enlace no está disponible
            </p>
            <div
              className="h-px w-14 bg-[#3d815c] mx-auto mb-6"
              aria-hidden="true"
            />
            <p className="text-base text-text-soft leading-relaxed max-w-lg mx-auto mb-2">
              La página que buscas pudo haber cambiado de ubicación, ya no
              estar disponible o haber sido escrita incorrectamente.
            </p>
            <p className="text-base text-text-soft leading-relaxed max-w-lg mx-auto">
              Puedes volver al inicio o visitar alguna de las secciones
              principales de Acción por los Derechos Fundamentales, A.C.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 pt-2 w-full">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-[#154c66] text-white text-sm font-semibold hover:bg-[#0e3348] transition-all"
            >
              Volver al inicio
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/programas"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg border border-border-subtle bg-white text-[#154c66] text-sm font-semibold hover:bg-[#f8fbfe] transition-all"
            >
              Conocer programas
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/proximos-encuentros"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg border border-border-subtle bg-white text-[#154c66] text-sm font-semibold hover:bg-[#f8fbfe] transition-all"
            >
              Ver próximos encuentros
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg border border-border-subtle bg-white text-[#154c66] text-sm font-semibold hover:bg-[#f8fbfe] transition-all"
            >
              Contactar a la asociación
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PUEDES CONTINUAR POR AQUÍ ─── */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#3d815c] uppercase block mb-3">
              Puedes continuar por aquí
            </span>
            <div className="h-px w-14 bg-[#3d815c]" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cards.map(({ title, body, list, href, cta }) => (
              <Link
                key={title}
                href={href}
                className="bg-[#f8fbfe] border border-border-subtle rounded-2xl p-7 flex flex-col gap-4 hover:shadow-md hover:border-[#3d815c]/30 transition-all group"
              >
                <h2 className="font-display text-lg font-bold text-[#154c66] group-hover:text-[#3d815c] transition-colors">
                  {title}
                </h2>
                <div className="h-px w-10 bg-[#3d815c]" aria-hidden="true" />
                <p className="text-sm text-text-soft leading-relaxed">{body}</p>
                {list && (
                  <ul className="flex flex-col gap-1">
                    {list.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-text-soft flex items-start gap-2"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[#3d815c] mt-1.5 shrink-0"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[#3d815c]">
                  {cta} <ArrowRight size={13} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
