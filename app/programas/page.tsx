import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus, BookOpen, Users, Eye, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Programas | Acción por los Derechos Fundamentales, A.C. en Tijuana",
  description:
    "Conoce los programas de Acción por los Derechos Fundamentales, A.C. en Tijuana: Fortaleciendo Valores, Diálogos con la Sociedad, Vigilancia Ciudadana y Derecho de Propiedad.",
};

// Stitch "fine-line" accent — 60px horizontal bar above section headings
function FineLine({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`mb-6 h-px ${light ? "bg-[#a3d3f2]" : "bg-[#3d815c]"}`}
      style={{ width: 60 }}
    />
  );
}

// Stitch animated underline CTA — expanding line on hover
function ProgramLink({
  href,
  label,
  light = false,
}: {
  href: string;
  label: string;
  light?: boolean;
}) {
  const color = light ? "text-white hover:text-[#a3d3f2]" : "text-[#154c66] hover:text-[#3d815c]";
  const lineBase = light ? "bg-white group-hover/btn:bg-[#a3d3f2]" : "bg-[#154c66] group-hover/btn:bg-[#3d815c]";
  return (
    <Link
      href={href}
      className={`group/btn inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest transition-colors ${color}`}
    >
      {label}
      <span className={`h-px w-8 group-hover/btn:w-12 transition-all duration-300 ${lineBase}`} />
    </Link>
  );
}

const faq = [
  {
    q: "¿Qué programas tiene Acción por los Derechos Fundamentales, A.C.?",
    a: "Acción por los Derechos Fundamentales, A.C. impulsa cuatro programas principales: Fortaleciendo Valores, Diálogos con la Sociedad, Vigilancia Ciudadana y Derecho de Propiedad.",
  },
  {
    q: "¿Qué es Fortaleciendo Valores?",
    a: "Fortaleciendo Valores es un programa de formación cívica y valores para niñas, niños y jóvenes de Tijuana. Busca involucrar a familias, docentes, instituciones educativas, especialistas y ciudadanos.",
  },
  {
    q: "¿Qué es Diálogos con la Sociedad?",
    a: "Diálogos con la Sociedad es un programa de encuentros ciudadanos, conferencias y espacios de diálogo social en Tijuana con líderes, especialistas, autoridades, empresarios, académicos y voces relevantes.",
  },
  {
    q: "¿Qué es Vigilancia Ciudadana?",
    a: "Vigilancia Ciudadana es un programa de participación responsable, observación, documentación, legalidad y defensa de la vida democrática desde la ciudadanía organizada.",
  },
  {
    q: "¿Qué es Derecho de Propiedad?",
    a: "Derecho de Propiedad es un programa orientado a promover certeza jurídica, defensa del patrimonio y análisis de su relación con el desarrollo urbano.",
  },
  {
    q: "¿Dónde puedo ver más información sobre cada programa?",
    a: "Cada programa cuenta con una página interna específica: Fortaleciendo Valores, Diálogos con la Sociedad, Vigilancia Ciudadana y Derecho de Propiedad.",
  },
  {
    q: "¿Necesito ser miembro para conocer los programas?",
    a: "No necesariamente. Puedes conocer los programas, asistir a próximos encuentros o contactar a la asociación para recibir información.",
  },
  {
    q: "¿Los programas se realizan en Tijuana?",
    a: "La asociación tiene sede en Tijuana, Baja California, y sus programas se impulsan principalmente desde esta ciudad.",
  },
  {
    q: "¿Quiénes pueden participar en los programas?",
    a: "Pueden participar ciudadanos, empresarios, profesionistas, educadores, estudiantes, instituciones, organizaciones y personas interesadas en cultura cívica, derechos fundamentales, valores, legalidad, certeza jurídica y participación ciudadana.",
  },
  {
    q: "¿Cómo puedo pedir información sobre un programa?",
    a: "Puedes contactar a la asociación desde la página de Contacto o escribir al correo contacto@asociacionaccion.com.",
  },
];


export default function ProgramasPage() {
  return (
    <>
      {/* ─── HERO: Asymmetric editorial composition (Stitch §1) ─── */}
      <section className="relative pt-20 pb-28 lg:pb-36 px-5 overflow-hidden bg-white">
        {/* blur orb */}
        <div
          aria-hidden="true"
          className="absolute -top-20 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(163,211,242,0.18)" }}
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left 7 cols — text */}
          <div className="md:col-span-7 z-10">
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#3d815c] uppercase block mb-5 text-center md:text-left">
              Programas
            </span>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-[#154c66] mb-8 text-center md:text-left">
              Programas para convertir la{" "}
              <em className="not-italic text-[#3d815c]">participación ciudadana</em>{" "}
              en acción
            </h1>
            <div className="flex flex-col gap-4 text-text-soft text-base lg:text-lg leading-relaxed mb-10 max-w-xl text-center md:text-left mx-auto md:mx-0">
              <p>
                Acción por los Derechos Fundamentales, A.C. impulsa programas de
                participación ciudadana, formación cívica, diálogo social, vigilancia
                ciudadana y defensa de derechos fundamentales en Tijuana, Baja
                California.
              </p>
              <p>
                Cada programa abre una forma distinta de entender los problemas,
                reunir voces, construir comunidad y generar acciones con sentido
                social.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 items-center md:items-start">
              <Link
                href="#programas"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg w-full sm:w-auto"
              >
                Conocer programas
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="/proximos-encuentros"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#154c66] border border-[#154c66]/30 hover:border-[#154c66] px-8 py-4 rounded-lg transition-colors w-full sm:w-auto"
              >
                Ver próximos encuentros
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right 5 cols — rotated image collage (Stitch pattern) */}
          <div className="md:col-span-5 relative mt-12 md:mt-0">
            <div
              aria-hidden="true"
              className="absolute -top-10 -right-10 w-64 h-64 rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgba(163,211,242,0.2)" }}
            />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="pt-12">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/eventos/dialogos-sociedad-asistentes-01.jpeg"
                    alt="Asistentes a un encuentro de Diálogos con la Sociedad"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
              </div>
              <div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/eventos/dialogos-sociedad-ponente-01.jpeg"
                    alt="Ponente en encuentro de Diálogos con la Sociedad"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
              </div>
            </div>
            {/* corner accent */}
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-[#3d815c]/40 pointer-events-none"
            />
          </div>
        </div>
      </section>

      {/* ─── MISSION QUOTE: Sophisticated serif moment (Stitch §2) ─── */}
      <section className="bg-gray-50 py-20 lg:py-24 px-5 border-y border-border-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] font-bold tracking-[0.22em] text-[#3d815c] uppercase block mb-6">
            Nuestra misión
          </span>
          <blockquote className="font-display text-2xl lg:text-3xl xl:text-4xl font-bold text-[#154c66] leading-relaxed">
            &ldquo;Participar no es solo opinar. Participar también es{" "}
            <em className="text-[#3d815c]">aprender, organizarse, colaborar</em>{" "}
            y construir soluciones.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ─── PROGRAMS: High-impact editorial layout (Stitch §3) ─── */}
      <section
        id="programas"
        className="py-20 lg:py-28 px-5 bg-white relative overflow-hidden"
      >
        {/* ambient orbs */}
        <div
          aria-hidden="true"
          className="absolute top-40 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "rgba(163,211,242,0.12)", filter: "blur(100px)" }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-40 left-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "rgba(61,129,92,0.05)", filter: "blur(80px)" }}
        />

        <div className="max-w-7xl mx-auto">
          {/* Section header with border-bottom (Stitch pattern) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-border-subtle pb-8 gap-6">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold tracking-[0.22em] text-[#3d815c] uppercase block mb-4">
                Nuestras iniciativas
              </span>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-[#154c66]">
                Conoce las cuatro áreas de trabajo de Acción por los Derechos
                Fundamentales
              </h2>
            </div>
            <p className="text-text-soft text-sm leading-relaxed max-w-xs md:text-right shrink-0">
              Cada programa responde a una necesidad social distinta y permite que
              más personas puedan participar desde su experiencia, profesión,
              institución o interés ciudadano.
            </p>
          </div>

          <div className="flex flex-col gap-16 md:gap-32">

            {/* ── 01: Fortaleciendo Valores — image left, content right ── */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <div className="bg-[#a3d3f2]/25 p-4 rounded-sm shadow-xl">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/eventos/fortaleciendo-valores-nino-estudiando-01.jpeg"
                      alt="Niño realizando actividades escolares del programa Fortaleciendo Valores"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 42vw"
                    />
                  </div>
                </div>
              </div>

              <div className="md:col-span-6 md:col-start-7 py-8">
                <FineLine />
                <BookOpen className="text-[#3d815c] mb-6" size={26} aria-hidden="true" />
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-2 leading-snug">
                  Fortaleciendo Valores
                </h3>
                <p className="text-text-soft text-sm mb-6">
                  Formación cívica y valores para niñas, niños y jóvenes
                </p>
                <div className="flex flex-col gap-3 text-text-soft text-sm leading-relaxed mb-8 max-w-md">
                  <p>
                    Fortaleciendo Valores es un programa orientado a promover
                    valores, cultura cívica y responsabilidad social en niñas,
                    niños y jóvenes de Tijuana.
                  </p>
                  <p>
                    Busca involucrar a familias, docentes, instituciones educativas,
                    especialistas y ciudadanos comprometidos con la formación de
                    nuevas generaciones.
                  </p>
                  <p>
                    El programa parte de una idea central: los valores no solo deben
                    enseñarse, también deben vivirse en la familia, la escuela y la
                    comunidad.
                  </p>
                </div>
                <ProgramLink
                  href="/programas/fortaleciendo-valores"
                  label="Conocer Fortaleciendo Valores"
                />
              </div>
            </div>

            {/* ── 02: Diálogos — content left, framed image right ── */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 order-2 md:order-1 py-8">
                <FineLine />
                <Users className="text-[#3d815c] mb-6" size={26} aria-hidden="true" />
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-2 leading-snug">
                  Diálogos con la Sociedad
                </h3>
                <p className="text-text-soft text-sm mb-6">
                  Encuentros ciudadanos, conferencias y diálogo social en Tijuana
                </p>
                <div className="flex flex-col gap-3 text-text-soft text-sm leading-relaxed mb-8 max-w-md">
                  <p>
                    Diálogos con la Sociedad es un programa de encuentros ciudadanos
                    con líderes, especialistas, autoridades, empresarios, académicos
                    y voces relevantes de la comunidad.
                  </p>
                  <p>
                    Su objetivo es abrir conversaciones claras, serias y
                    participativas sobre temas que impactan a Tijuana, Baja
                    California y México.
                  </p>
                  <p>
                    Este programa también funciona como espacio de networking,
                    participación empresarial, liderazgo regional y diálogo
                    ciudadano.
                  </p>
                </div>
                <ProgramLink
                  href="/programas/dialogos-con-la-sociedad"
                  label="Conocer Diálogos con la Sociedad"
                />
              </div>

              <div className="md:col-span-5 md:col-start-8 order-1 md:order-2">
                <div className="bg-[#a3d3f2]/25 p-4 rounded-sm shadow-xl">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/eventos/dialogos-sociedad-conferencia-01.jpeg"
                      alt="Encuentro de Diálogos con la Sociedad"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 42vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── 03: Vigilancia Ciudadana — card + editorial-mask image ── */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6">
                <div className="bg-gray-50 p-10 md:p-16 rounded-sm border border-border-subtle">
                  <FineLine />
                  <Eye className="text-[#3d815c] mb-6" size={26} aria-hidden="true" />
                  <h3 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-2 leading-snug">
                    Vigilancia Ciudadana
                  </h3>
                  <p className="text-text-soft text-sm mb-6">
                    Participación responsable, legalidad y vida democrática
                  </p>
                  <div className="flex flex-col gap-3 text-text-soft text-sm leading-relaxed mb-8">
                    <p>
                      Vigilancia Ciudadana es un programa orientado a promover
                      participación responsable, observación, documentación,
                      legalidad y defensa de la vida democrática desde la ciudadanía
                      organizada.
                    </p>
                    <p>
                      Su enfoque está en formar ciudadanos presentes, informados y
                      comprometidos con el cuidado de los procesos públicos y la
                      confianza institucional.
                    </p>
                    <p>
                      Se trata de participar con evidencia, responsabilidad y
                      compromiso ciudadano.
                    </p>
                  </div>
                  <ProgramLink
                    href="/programas/vigilancia-ciudadana"
                    label="Conocer Vigilancia Ciudadana"
                  />
                </div>
              </div>

              <div className="md:col-span-5 md:col-start-8">
                {/* Stitch: editorial-mask parallelogram clip */}
                <div
                  className="relative aspect-[4/5] overflow-hidden shadow-2xl rotate-2"
                  style={{
                    clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
                  }}
                >
                  <Image
                    src="/eventos/Reunion ciudadana.jpeg"
                    alt="Reunión ciudadana de Acción por los Derechos Fundamentales"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                </div>
              </div>
            </div>

            {/* ── 04: Derecho de Propiedad — image left, content right ── */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <div className="bg-[#a3d3f2]/25 p-4 rounded-sm shadow-xl">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/eventos/derecho-propiedad-uso-suelo-01.jpeg"
                      alt="Imagen del programa Derecho de Propiedad — uso de suelo y desarrollo urbano"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 42vw"
                    />
                  </div>
                </div>
              </div>

              <div className="md:col-span-6 md:col-start-7 py-8">
                <FineLine />
                <Scale className="text-[#3d815c] mb-6" size={26} aria-hidden="true" />
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-2 leading-snug">
                  Derecho de Propiedad
                </h3>
                <p className="text-text-soft text-sm mb-6">
                  Certeza jurídica, patrimonio y desarrollo urbano
                </p>
                <div className="flex flex-col gap-3 text-text-soft text-sm leading-relaxed mb-8 max-w-md">
                  <p>
                    Derecho de Propiedad es un programa orientado a promover la
                    importancia de la certeza jurídica, la defensa del patrimonio y
                    su relación con el desarrollo urbano.
                  </p>
                  <p>
                    La propiedad, la inversión y el orden urbano son temas que
                    impactan directamente a familias, empresas y comunidades.
                  </p>
                  <p>
                    Este programa busca abrir espacios de análisis, diálogo y
                    participación alrededor de estos temas, con una visión
                    ciudadana e institucional.
                  </p>
                </div>
                <ProgramLink
                  href="/programas/derecho-de-propiedad"
                  label="Conocer Derecho de Propiedad"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── ENCUENTRA TU PROGRAMA ─── */}
      <section className="py-20 lg:py-24 px-5 bg-gray-50 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="text-[10px] font-bold tracking-[0.22em] text-[#3d815c] uppercase block mb-4">
                ¿Por dónde empezar?
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#154c66] mb-4">
                Encuentra el programa más cercano a tu interés
              </h2>
              <p className="text-text-soft text-sm lg:text-base leading-relaxed mb-8">
                Puedes acercarte a Acción por los Derechos Fundamentales desde
                distintas causas.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                {[
                  {
                    interest:
                      "la educación, la familia, la formación cívica y los valores",
                    program: "Fortaleciendo Valores",
                    href: "/programas/fortaleciendo-valores",
                  },
                  {
                    interest:
                      "las conferencias, los eventos en Tijuana, el diálogo ciudadano, el networking y los temas públicos",
                    program: "Diálogos con la Sociedad",
                    href: "/programas/dialogos-con-la-sociedad",
                  },
                  {
                    interest:
                      "la legalidad, la democracia, la observación ciudadana y la participación responsable",
                    program: "Vigilancia Ciudadana",
                    href: "/programas/vigilancia-ciudadana",
                  },
                  {
                    interest:
                      "la certeza jurídica, el patrimonio, la inversión y el desarrollo urbano",
                    program: "Derecho de Propiedad",
                    href: "/programas/derecho-de-propiedad",
                  },
                ].map(({ interest, program, href }) => (
                  <div
                    key={program}
                    className="border-l-2 border-[#a3d3f2] pl-4"
                  >
                    <p className="text-text-soft text-sm leading-relaxed">
                      Si te interesa {interest}, puedes conocer{" "}
                      <Link
                        href={href}
                        className="font-semibold text-[#154c66] hover:text-[#3d815c] transition-colors"
                      >
                        {program}
                      </Link>
                      .
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/proximos-encuentros"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-6 py-3 rounded-lg transition-colors"
              >
                Ver próximos encuentros
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>

            {/* Quick-nav list with Stitch-style expanding line on hover */}
            <div className="flex flex-col gap-1 lg:pt-14">
              {[
                { num: "01", title: "Fortaleciendo Valores", href: "/programas/fortaleciendo-valores" },
                { num: "02", title: "Diálogos con la Sociedad", href: "/programas/dialogos-con-la-sociedad" },
                { num: "03", title: "Vigilancia Ciudadana", href: "/programas/vigilancia-ciudadana" },
                { num: "04", title: "Derecho de Propiedad", href: "/programas/derecho-de-propiedad" },
              ].map(({ num, title, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex items-center justify-between border-b border-border-subtle py-5 hover:border-[#3d815c] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-[#3d815c] tracking-widest shrink-0">
                      {num}
                    </span>
                    <span className="font-display text-base font-semibold text-[#154c66] group-hover:text-[#3d815c] transition-colors">
                      {title}
                    </span>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-[#3d815c] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 lg:py-24 px-5 bg-white border-b border-border-subtle">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#154c66] mb-10">
            Preguntas frecuentes sobre los programas
          </h2>
          <div>
            {faq.map(({ q, a }) => (
              <details
                key={q}
                className="group border-b border-border-subtle py-5"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-sm font-semibold text-[#154c66] leading-snug">
                    {q}
                  </span>
                  <Plus
                    className="shrink-0 text-[#3d815c] group-open:rotate-45 transition-transform duration-200"
                    size={18}
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-4 text-text-soft text-sm leading-relaxed pr-8">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL: dot-pattern block (Stitch §5) ─── */}
      <section className="py-20 lg:py-24 px-5 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#a3d3f2]/20 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden">
            {/* Stitch dot pattern */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#154c66 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-[#154c66] leading-tight">
                Conoce el programa que conecta con tu causa
              </h2>
              <p className="text-text-soft text-base leading-relaxed">
                Acción por los Derechos Fundamentales impulsa programas para
                quienes desean participar, dialogar y aportar a su comunidad desde
                una plataforma ciudadana seria y organizada.
              </p>
              <p className="text-text-soft text-base leading-relaxed">
                Explora cada programa y descubre cómo puedes acercarte a la
                asociación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link
                  href="/proximos-encuentros"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg"
                >
                  Ver próximos encuentros
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#154c66] border border-[#154c66]/30 hover:border-[#154c66] bg-white/80 px-8 py-4 rounded-lg transition-colors"
                >
                  Contactar a la asociación
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
              <p className="text-text-soft/60 text-xs leading-relaxed max-w-sm">
                Si deseas más información, una persona del equipo podrá orientarte
                sobre los programas y próximos encuentros disponibles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
