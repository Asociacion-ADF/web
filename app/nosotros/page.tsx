import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Users,
  MapPin,
  Phone,
  Lightbulb,
  ShieldCheck,
  Info,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros | Acción por los Derechos Fundamentales, A.C. en Tijuana",
  description:
    "Conoce Acción por los Derechos Fundamentales, A.C., asociación civil apartidista en Tijuana que promueve participación ciudadana, formación cívica, diálogo social, derechos fundamentales e incidencia institucional.",
};

function FineLine({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`mb-6 h-px ${light ? "bg-[#a3d3f2]" : "bg-[#3d815c]"}`}
      style={{ width: 60 }}
    />
  );
}

type PillarVariant = "light" | "blue" | "green";

const pillars: {
  num: string;
  title: string;
  body: string;
  variant: PillarVariant;
}[] = [
  {
    num: "01",
    title: "Derechos fundamentales",
    body: "Promovemos la comprensión, protección y defensa de los derechos fundamentales como base de una sociedad más libre, justa, responsable y participativa.",
    variant: "light",
  },
  {
    num: "02",
    title: "Participación ciudadana",
    body: "Impulsamos espacios para que más personas puedan involucrarse en los temas que afectan a su comunidad, no desde la queja aislada, sino desde la participación organizada.",
    variant: "blue",
  },
  {
    num: "03",
    title: "Formación cívica y valores",
    body: "Creemos que la cultura cívica, la educación en valores y la responsabilidad social son esenciales para fortalecer a niñas, niños, jóvenes, familias, escuelas y comunidades.",
    variant: "light",
  },
  {
    num: "04",
    title: "Libertad económica y certeza jurídica",
    body: "Reconocemos la importancia de la certeza jurídica, el derecho de propiedad, la inversión y el desarrollo económico para proteger el patrimonio de las familias y fortalecer a la comunidad.",
    variant: "green",
  },
  {
    num: "05",
    title: "Incidencia institucional",
    body: "Buscamos que la participación ciudadana pueda convertirse en programas, propuestas, diagnósticos, encuentros e iniciativas que dialoguen con instituciones y actores clave.",
    variant: "light",
  },
];

const workForms = [
  "Encuentros ciudadanos.",
  "Conferencias en Tijuana.",
  "Foros de diálogo social.",
  "Programas de formación cívica y valores.",
  "Iniciativas de participación ciudadana.",
  "Vinculación con empresarios, profesionistas, educadores e instituciones.",
];

const programs = [
  {
    title: "Fortaleciendo Valores",
    body: "Programa enfocado en niñas, niños y jóvenes para promover valores, cultura cívica y responsabilidad social desde la familia, la escuela y la comunidad.",
    href: "/programas/fortaleciendo-valores",
  },
  {
    title: "Diálogos con la Sociedad",
    body: "Encuentros ciudadanos, conferencias y espacios de diálogo con líderes, especialistas, empresarios, académicos, autoridades y voces relevantes de la comunidad.",
    href: "/programas/dialogos-con-la-sociedad",
  },
  {
    title: "Vigilancia Ciudadana",
    body: "Programa orientado a promover participación responsable, observación, documentación, legalidad y defensa de la vida democrática desde la ciudadanía organizada.",
    href: "/programas/vigilancia-ciudadana",
  },
  {
    title: "Derecho de Propiedad",
    body: "Programa enfocado en la importancia de la certeza jurídica, el patrimonio y su relación con el desarrollo urbano, la inversión y la comunidad.",
    href: "/programas/derecho-de-propiedad",
  },
];

const faqs = [
  {
    q: "¿Qué es Acción por los Derechos Fundamentales, A.C.?",
    a: "Acción por los Derechos Fundamentales, A.C. es una asociación civil apartidista con sede en Tijuana, Baja California. Promueve participación ciudadana, formación cívica, diálogo social, defensa de derechos fundamentales e incidencia institucional.",
  },
  {
    q: "¿Dónde está ubicada Acción por los Derechos Fundamentales?",
    a: "La asociación está ubicada en Blvd. Agua Caliente 4558, Interior 1403-B, Col. Aviación, C.P. 22014, Tijuana, Baja California.",
  },
  {
    q: "¿Acción por los Derechos Fundamentales es un partido político?",
    a: "No. Acción por los Derechos Fundamentales, A.C. no es un partido político ni forma parte de una campaña electoral. Es una asociación civil independiente y apartidista.",
  },
  {
    q: "¿Qué hace Acción por los Derechos Fundamentales?",
    a: "La asociación promueve participación ciudadana, cultura cívica, formación en valores, diálogo social, defensa de derechos fundamentales, legalidad, certeza jurídica e incidencia institucional.",
  },
  {
    q: "¿Qué programas tiene la asociación?",
    a: "Acción por los Derechos Fundamentales impulsa cuatro programas principales: Fortaleciendo Valores, Diálogos con la Sociedad, Vigilancia Ciudadana y Derecho de Propiedad.",
  },
  {
    q: "¿Quién fundó Acción por los Derechos Fundamentales, A.C.?",
    a: "La asociación fue fundada y es presidida por el C.P. Rufo Ibarra Batista, profesionista con trayectoria académica, empresarial, social y pública en Baja California.",
  },
  {
    q: "¿Quiénes pueden participar?",
    a: "Pueden participar ciudadanos, empresarios, profesionistas, educadores, estudiantes, instituciones, organizaciones y personas interesadas en derechos fundamentales, cultura cívica, valores y participación ciudadana.",
  },
  {
    q: "¿Cómo puedo participar?",
    a: "Puedes participar como miembro, aliado estratégico, asistente a próximos encuentros o apoyando un programa específico.",
  },
  {
    q: "¿Cuánto cuesta ser miembro?",
    a: "La aportación anual como miembro es de $6,000 MXN.",
  },
  {
    q: "¿Cómo contacto a la asociación?",
    a: "Puedes comunicarte al teléfono de oficina +52 664 681 7278 o escribir al correo contacto@asociacionaccion.com.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[80vh] flex items-center bg-[#154c66] overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#a3d3f2] transform skew-x-12 origin-bottom" />
        </div>

        <div className="max-w-7xl mx-auto px-5 relative z-10 grid grid-cols-12 gap-6 items-center py-24 w-full">
          <div className="col-span-12 lg:col-span-7 text-white">
            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Somos una asociación civil para participar, dialogar y construir soluciones
            </h1>
            <p className="text-lg mb-10 text-[#c5e7ff] max-w-2xl leading-relaxed">
              Acción por los Derechos Fundamentales, A.C. es una asociación civil apartidista con sede en Tijuana, Baja California.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/participa"
                className="bg-[#3d815c] text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-[#2d6347] transition-all flex items-center gap-2"
              >
                Quiero ser miembro <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="/programas"
                className="border border-white text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-white/10 transition-all"
              >
                Conocer nuestros programas
              </Link>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <div className="aspect-[4/5] rounded-xl overflow-hidden border-t-8 border-r-8 border-[#3d815c] shadow-2xl relative">
              <Image
                src="/eventos/dialogos-sociedad-asistentes-01.jpeg"
                alt="Encuentro ciudadano de Acción por los Derechos Fundamentales en Tijuana"
                fill
                className="object-cover object-center"
                sizes="40vw"
                priority
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#154c66]/60 to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUÉ ES ACCIÓN ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#3d815c] uppercase block mb-4">
                ¿Quiénes somos?
              </span>
              <FineLine />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
                Qué es Acción por los Derechos Fundamentales
              </h2>
              <p className="text-lg text-text-soft leading-relaxed mb-6">
                Acción por los Derechos Fundamentales, A.C., por sus siglas AADF, es una plataforma ciudadana ubicada en Tijuana, Baja California.
              </p>
              <p className="text-base text-text-soft leading-relaxed mb-6">
                La asociación nace para abrir espacios de participación, cultura cívica, diálogo social y defensa de derechos fundamentales. Nuestro propósito es que más personas puedan entender los temas que impactan su vida diaria, participar de manera informada y sumarse a programas con sentido social.
              </p>
              <div className="p-8 bg-[#154c66] text-white rounded-lg shadow-xl">
                <h3 className="font-display text-xl font-bold text-[#a3d3f2] mb-4">
                  Independencia absoluta
                </h3>
                <p className="font-display text-lg italic leading-relaxed text-white">
                  &ldquo;No somos un partido político. No somos una campaña electoral. No representamos intereses partidistas.&rdquo;
                </p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:col-start-8 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-square rounded-lg overflow-hidden relative">
                  <Image
                    src="/eventos/dialogos-sociedad-conferencia-01.jpeg"
                    alt="Conferencia ciudadana de Diálogos con la Sociedad"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden relative">
                  <Image
                    src="/eventos/fundador-entrega-comida-comunidad-01.jpeg"
                    alt="Actividad comunitaria de Acción por los Derechos Fundamentales"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-lg relative">
                  <Image
                    src="/eventos/fortaleciendo-valores-nino-estudiando-01.jpeg"
                    alt="Programa Fortaleciendo Valores de la AADF"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden relative">
                  <Image
                    src="/eventos/fortaleciendo-valores-programa-piloto-educacion-basica-01.jpeg"
                    alt="Presentación del programa piloto Fortaleciendo Valores en educación básica"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NUESTRA RAZÓN DE SER ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#f8fbfe]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
              Nuestra razón de ser
            </h2>
            <p className="text-lg text-text-soft leading-relaxed mb-12">
              Muchas personas se sienten afectadas por decisiones públicas, problemas sociales, falta de valores, incertidumbre económica o situaciones que impactan a su familia, empresa o comunidad. A veces los temas públicos parecen lejanos o reservados para unos cuantos. Acción por los Derechos Fundamentales existe para reducir esa distancia.
            </p>
            <div className="relative py-12 px-8 bg-white rounded-xl border border-border-subtle shadow-lg">
              <blockquote className="font-display text-2xl font-bold text-[#154c66] italic max-w-2xl mx-auto">
                &ldquo;La participación no debe ser exclusiva de unos cuantos. Una sociedad fuerte necesita ciudadanos presentes, informados y organizados.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISIÓN / VISIÓN ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#154c66] p-12 rounded-lg text-white">
              <Target size={48} className="mb-6 text-[#9dcdeb]" aria-hidden="true" />
              <h3 className="font-display text-3xl lg:text-4xl font-bold mb-6">Misión</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Promover participación ciudadana, formación cívica, diálogo social, defensa de derechos fundamentales e incidencia institucional desde la sociedad civil en Tijuana, Baja California.
              </p>
            </div>
            <div className="bg-[#3d815c] p-12 rounded-lg text-white">
              <ShieldCheck size={48} className="mb-6 text-[#abf2c5]" aria-hidden="true" />
              <h3 className="font-display text-3xl lg:text-4xl font-bold mb-6">Visión</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Una comunidad ciudadana más informada, organizada y participativa, donde más personas puedan aportar desde su experiencia, profesión e interés ciudadano al desarrollo de Tijuana y Baja California.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PILARES ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#f8fbfe] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#3d815c] uppercase block mb-4">
                Nuestros cimientos
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66]">
                Pilares de trabajo institucional
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {pillars.map(({ num, title, body, variant }) => {
              const isBlue = variant === "blue";
              const isGreen = variant === "green";
              const isDark = isBlue || isGreen;
              return (
                <div
                  key={num}
                  className={`p-8 rounded-lg flex flex-col gap-4 hover:-translate-y-2 transition-all ${
                    isBlue
                      ? "bg-[#154c66]"
                      : isGreen
                        ? "bg-[#3d815c]"
                        : "bg-white border border-border-subtle"
                  }`}
                >
                  <span
                    className={`font-display text-4xl font-bold italic ${
                      isDark ? "text-white/30" : "text-[#a3d3f2]"
                    }`}
                  >
                    {num}
                  </span>
                  <h4
                    className={`font-display text-xl font-bold leading-tight ${
                      isDark ? "text-white" : "text-[#154c66]"
                    }`}
                  >
                    {title}
                  </h4>
                  <div
                    className={`h-1 w-12 ${
                      isDark
                        ? isBlue
                          ? "bg-white/40"
                          : "bg-white"
                        : "bg-[#3d815c]"
                    }`}
                    aria-hidden="true"
                  />
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-white/80" : "text-text-soft"
                    }`}
                  >
                    {body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CÓMO TRABAJAMOS ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#154c66] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-8">
                Cómo trabajamos: De la preocupación a la acción
              </h2>
              <div className="flex flex-col gap-8 mb-10">
                {[
                  {
                    n: "1",
                    title: "Primero entendemos el problema.",
                    desc: "Identificamos las necesidades y preocupaciones de la comunidad.",
                  },
                  {
                    n: "2",
                    title: "Después reunimos voces ciudadanas, profesionales e institucionales.",
                    desc: "Convocamos a ciudadanos, profesionistas, empresarios e instituciones.",
                  },
                  {
                    n: "3",
                    title: "Luego organizamos participación.",
                    desc: "Canalizamos el esfuerzo colectivo hacia objetivos comunes.",
                  },
                  {
                    n: "4",
                    title: "Finalmente impulsamos programas con impacto social.",
                    desc: "Ejecutamos acciones concretas con seguimiento y propósito social.",
                  },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#3d815c] flex items-center justify-center text-[#3d815c] font-bold font-display group-hover:bg-[#3d815c] group-hover:text-white transition-all">
                      {n}
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-bold mb-1">{title}</h4>
                      <p className="opacity-70 text-base leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-8 border border-white/20 rounded-lg bg-white/5 mb-8">
                <h4 className="font-bold mb-4">Nuestra forma de trabajo incluye:</h4>
                <ul className="grid grid-cols-2 gap-3 text-sm opacity-80">
                  {workForms.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check size={14} className="text-[#3d815c] mt-0.5 shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/programas"
                className="bg-[#3d815c] text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-[#2d6347] transition-all inline-flex items-center gap-2"
              >
                Conocer nuestros programas
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src="/eventos/vigilancia-ciudadana-mesa-trabajo-01.jpeg"
                  alt="Mesa de trabajo de Acción por los Derechos Fundamentales"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute -top-10 -right-10 w-64 h-64 bg-[#3d815c]/20 rounded-full blur-3xl"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#a3d3f2]/20 rounded-full blur-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FUNDADOR ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto bg-[#f8fbfe] border border-border-subtle rounded-2xl overflow-hidden grid md:grid-cols-12 items-center">
            <div className="md:col-span-5 p-12 bg-[#154c66] flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#3d815c] relative mb-6">
                <Image
                  src="/eventos/rufo-ibarra-batista-fundador-aadf-01.jpg"
                  alt="C.P. Rufo Ibarra Batista, fundador de Acción por los Derechos Fundamentales, A.C."
                  fill
                  className="object-cover object-top"
                  sizes="192px"
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                C.P. Rufo Ibarra Batista
              </h3>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#a3d3f2] uppercase mt-2">
                Fundador y presidente
              </span>
            </div>

            <div className="md:col-span-7 p-12">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] leading-tight mb-6">
                Una trayectoria que aporta confianza institucional
              </h2>
              <div className="flex flex-col gap-4 text-base text-text-soft leading-relaxed">
                <p>
                  Acción por los Derechos Fundamentales, A.C. fue fundada y es presidida por el C.P. Rufo Ibarra Batista, profesionista con amplia trayectoria en los ámbitos académico, empresarial, social y público.
                </p>
                <p>
                  Originario de Cananea, Sonora, y residente de Tijuana desde 1962, Rufo Ibarra Batista estudió Contaduría Pública en la Universidad Autónoma de Baja California.
                </p>
                <p>
                  Su trayectoria incluye experiencia como presidente del Colegio de Contadores Públicos de Baja California, presidente de la Academia de Estudios Fiscales de Baja California, maestro en materia fiscal en la UABC y CETYS Universidad, así como Secretario de la Contraloría General del Estado, Secretario de Finanzas en el Ayuntamiento de Tijuana y Alcalde suplente.
                </p>
              </div>
              <Link
                href="#"
                className="mt-8 inline-flex items-center gap-2 text-[#3d815c] font-bold hover:text-[#2d6347] transition-colors text-sm"
              >
                Ver trayectoria completa
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#3d815c]/10 text-[#3d815c] rounded-full border border-[#3d815c]/20">
              <Users size={18} aria-hidden="true" />
              <span className="text-sm font-semibold">
                Una asociación con más voces: ciudadanos, empresarios y profesionistas.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROGRAMAS ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66]">
              Programas y espacios para participar
            </h2>
            <p className="text-lg text-text-soft mt-4 max-w-2xl mx-auto">
              Acción por los Derechos Fundamentales impulsa programas que permiten convertir la participación en acción concreta.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map(({ title, body, href }) => (
              <Link
                key={title}
                href={href}
                className="p-8 border border-border-subtle rounded-lg bg-[#f8fbfe] hover:shadow-lg transition-all hover:border-[#3d815c]/30 flex flex-col gap-4"
              >
                <h4 className="font-display text-xl font-bold text-[#154c66]">{title}</h4>
                <div className="h-px w-10 bg-[#3d815c]" aria-hidden="true" />
                <p className="text-text-soft text-sm leading-relaxed flex-1">{body}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#3d815c]">
                  Ver programa <ArrowRight size={13} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/programas"
              className="bg-[#3d815c] text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-[#2d6347] transition-colors shadow-lg inline-flex items-center gap-2"
            >
              Ver todos los programas
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── A QUIÉN CONVOCAMOS ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#f8fbfe]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
                A quién convocamos
              </h2>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <ul className="space-y-4 text-text-soft">
                  {[
                    "Ciudadanos interesados en participar.",
                    "Empresarios y líderes.",
                    "Profesionistas con vocación social.",
                  ].map((a) => (
                    <li key={a} className="flex items-center gap-2 font-medium">
                      <Check size={16} className="text-[#3d815c] shrink-0" aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4 text-text-soft">
                  {[
                    "Educadores y directivos escolares.",
                    "Estudiantes y jóvenes.",
                    "Organizaciones sociales.",
                  ].map((a) => (
                    <li key={a} className="flex items-center gap-2 font-medium">
                      <Check size={16} className="text-[#3d815c] shrink-0" aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-white border border-[#3d815c]/30 rounded-lg shadow-sm">
                <p className="font-display text-xl font-bold text-[#3d815c]">
                  &ldquo;No necesitas ser experto para participar. Necesitas tener interés en comprender, dialogar y construir.&rdquo;
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#154c66] aspect-square rounded-2xl flex flex-col items-center justify-center text-white text-center p-6 shadow-xl hover:scale-105 transition-transform">
                <Lightbulb size={48} className="mb-4" aria-hidden="true" />
                <span className="text-sm font-bold uppercase tracking-wider">Ideas frescas</span>
              </div>
              <div className="bg-[#3d815c] aspect-square rounded-2xl flex flex-col items-center justify-center text-white text-center p-6 translate-y-8 shadow-xl hover:scale-105 transition-transform">
                <ShieldCheck size={48} className="mb-4" aria-hidden="true" />
                <span className="text-sm font-bold uppercase tracking-wider">Compromiso real</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOMOS ASOCIACIÓN CIVIL, NO PARTIDO POLÍTICO ─── */}
      <section className="py-24 bg-[#154c66] text-white text-center relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="max-w-3xl mx-auto border-2 border-[#3d815c] p-12 rounded-xl bg-white/5">
            <h2 className="font-display text-4xl font-bold mb-6">
              Somos una asociación civil, no un partido político
            </h2>
            <p className="text-lg text-[#c5e7ff] max-w-2xl mx-auto leading-relaxed">
              Acción por los Derechos Fundamentales, A.C. es una asociación civil independiente y apartidista. No participamos en contiendas electorales ni representamos intereses de ningún partido. Somos ciudadanos trabajando para ciudadanos.
            </p>
          </div>
        </div>
      </section>

      {/* ─── POR QUÉ SUMARTE + FAQ ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
              ¿Por qué sumarte?
            </h2>
            <ul className="space-y-6 mb-8">
              {[
                {
                  Icon: Users,
                  title: "Red ciudadana",
                  desc: "Conoce personas con intereses cívicos, sociales y profesionales en Tijuana y Baja California.",
                },
                {
                  Icon: Info,
                  title: "Información directa",
                  desc: "Asiste a encuentros, conferencias y foros ciudadanos y mantente informado sobre programas y actividades.",
                },
                {
                  Icon: Target,
                  title: "Participación organizada",
                  desc: "Apoya iniciativas de formación cívica, valores y participación ciudadana desde tu experiencia.",
                },
              ].map(({ Icon, title, desc }) => (
                <li
                  key={title}
                  className="flex gap-4 p-4 rounded-lg hover:bg-[#f8fbfe] transition-colors"
                >
                  <Icon size={28} className="text-[#3d815c] flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-[#154c66]">{title}</h4>
                    <p className="text-sm text-text-soft mt-1">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/participa"
              className="w-full bg-[#3d815c] text-white py-4 rounded-lg font-bold hover:bg-[#2d6347] shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Quiero ser miembro
              <ArrowRight size={15} aria-hidden="true" />
            </Link>

            <div className="mt-10 p-8 bg-[#f8fbfe] rounded-lg border border-border-subtle">
              <h4 className="font-bold text-[#154c66] mb-4 flex items-center gap-2">
                <MapPin size={16} aria-hidden="true" />
                Ubicación
              </h4>
              <address className="not-italic text-text-soft text-sm leading-relaxed mb-3">
                Blvd. Agua Caliente 4558, Interior 1403-B,
                <br />
                Col. Aviación, C.P. 22014,
                <br />
                Tijuana, Baja California.
              </address>
              <a
                href="tel:+526646817278"
                className="text-text-soft text-sm flex items-center gap-2 hover:text-[#154c66] transition-colors"
              >
                <Phone size={14} aria-hidden="true" />
                +52 664 681 7278
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
              Preguntas frecuentes sobre Acción por los Derechos Fundamentales, A.C.
            </h2>
            <div className="flex flex-col gap-4">
              {faqs.map(({ q, a }) => (
                <details
                  key={q}
                  className="border border-border-subtle rounded-lg overflow-hidden shadow-sm group"
                >
                  <summary className="w-full p-6 text-left flex justify-between items-center bg-[#f8fbfe] hover:bg-white transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="font-display font-bold text-[#154c66] text-base pr-4">
                      {q}
                    </span>
                    <ChevronDown
                      size={18}
                      className="text-[#3d815c] shrink-0 transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="p-6 border-t border-border-subtle bg-white text-text-soft text-sm leading-relaxed">
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#f8fbfe]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#3d815c] rounded-2xl p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Súmate a una comunidad que quiere construir
              </h2>
              <p className="text-lg mb-10 opacity-90 leading-relaxed">
                Si quieres participar en una asociación civil seria, cercana y comprometida con Tijuana y Baja California, Acción por los Derechos Fundamentales puede ser un punto de encuentro para ti.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="/participa"
                  className="bg-white text-[#3d815c] px-10 py-5 rounded-lg font-bold hover:bg-[#f8fbfe] transition-all shadow-xl flex items-center gap-2"
                >
                  Quiero ser miembro
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <Link
                  href="/proximos-encuentros"
                  className="border-2 border-white text-white px-10 py-5 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  Ver próximos encuentros
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
