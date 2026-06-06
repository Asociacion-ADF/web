import type { Metadata } from "next";
import type React from "react";
import Link from "next/link";
import { ArrowRight, Plus, Check, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Participa | Hazte miembro de Acción por los Derechos Fundamentales, A.C.",
  description:
    "Participa en Acción por los Derechos Fundamentales, A.C. como miembro, aliado estratégico o apoyando un programa específico de participación ciudadana en Tijuana.",
};

function FineLine({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`mb-6 h-px ${light ? "bg-[#a3d3f2]" : "bg-[#3d815c]"}`}
      style={{ width: 60 }}
    />
  );
}

const pasos = [
  {
    num: "1",
    label: "Modalidad",
    desc: "Elige la modalidad de participación que más se ajuste a tu interés.",
    highlight: false,
  },
  {
    num: "2",
    label: "Formulario",
    desc: "Completa el formulario con tus datos de contacto.",
    highlight: false,
  },
  {
    num: "3",
    label: "Contacto",
    desc: "Una persona del equipo se pondrá en contacto contigo en un lapso de 24 horas.",
    highlight: true,
  },
  {
    num: "4",
    label: "Orientación",
    desc: "Recibirás orientación sobre los siguientes pasos, la modalidad elegida y la forma de realizar tu aportación.",
    highlight: false,
  },
  {
    num: "5",
    label: "Integración",
    desc: "Podrás integrarte a la comunidad, recibir información y conocer las actividades o programas relacionados con tu interés.",
    highlight: false,
    final: true,
  },
];

const publicos = [
  { icon: "🏛️", label: "Ciudadanos" },
  { icon: "💼", label: "Empresarios" },
  { icon: "🤝", label: "Profesionistas" },
  { icon: "📚", label: "Docentes" },
  { icon: "🎓", label: "Estudiantes" },
  { icon: "🏫", label: "Instituciones educativas" },
  { icon: "🌐", label: "Organizaciones sociales" },
  { icon: "🏢", label: "Empresas" },
];

const faq: Array<{ q: string; a: React.ReactNode }> = [
  {
    q: "¿Cómo puedo participar en Acción por los Derechos Fundamentales?",
    a: "Puedes participar como miembro, aliado estratégico o apoyando un programa específico. También puedes acercarte asistiendo a próximos encuentros o solicitando información.",
  },
  {
    q: "¿Cuánto cuesta ser miembro?",
    a: "La aportación anual como miembro es de $6,000 MXN.",
  },
  {
    q: "¿Cuánto cuesta ser aliado estratégico?",
    a: "La aportación anual como aliado estratégico es de $12,000 MXN.",
  },
  {
    q: "¿Puedo apoyar solo un programa específico?",
    a: "Sí. Puedes apoyar un programa específico mediante una aportación voluntaria, según el programa seleccionado.",
  },
  {
    q: "¿Qué programas puedo apoyar?",
    a: "Puedes apoyar programas como Fortaleciendo Valores, Diálogos con la Sociedad, Vigilancia Ciudadana o Derecho de Propiedad.",
  },
  {
    q: "¿La asociación emite factura?",
    a: "Sí. A solicitud del participante, Acción por los Derechos Fundamentales podrá emitir recibo oficial y/o factura conforme a la normatividad fiscal vigente.",
  },
  {
    q: "¿Cómo se realizan las aportaciones?",
    a: "Las aportaciones pueden realizarse por transferencia bancaria o depósito. Una persona del equipo te orientará sobre los siguientes pasos después de enviar tu solicitud.",
  },
  {
    q: "¿En cuánto tiempo me contactan?",
    a: "Una persona del equipo se pondrá en contacto contigo en un lapso de 24 horas después de recibir tu información.",
  },
  {
    q: "¿Necesito ser miembro para asistir a un encuentro?",
    a: "No necesariamente. Puedes acercarte asistiendo a próximos encuentros o solicitando información. Si después quieres participar de forma más activa, puedes sumarte como miembro.",
  },
  {
    q: "¿Acción por los Derechos Fundamentales es un partido político?",
    a: "No. Acción por los Derechos Fundamentales, A.C. es una asociación civil apartidista. No es un partido político ni forma parte de una campaña electoral.",
  },
  {
    q: "¿Dónde puedo pedir más información?",
    a: (
      <>
        Puedes escribir al correo{" "}
        <a
          href="mailto:contacto@asociacionaccion.com"
          className="text-[#3d815c] underline hover:text-[#154c66] transition-colors"
        >
          contacto@asociacionaccion.com
        </a>{" "}
        o comunicarte con la asociación desde la página de Contacto.
      </>
    ),
  },
];

export default function ParticipaPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[680px] flex items-center justify-center overflow-hidden bg-[#154c66]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#a3d3f2 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 w-96 h-96 bg-[#3d815c]/20 blur-[120px] rounded-full pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute left-0 bottom-0 w-96 h-96 bg-[#a3d3f2]/10 blur-[120px] rounded-full pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          <div className="lg:col-span-8">
            <div className="w-14 h-px bg-[#3d815c] mb-8" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-white/70 uppercase block mb-5">
              Acción por los Derechos Fundamentales, A.C.
            </span>
            <h1
              className="font-display text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
            >
              Participa en Acción por los Derechos Fundamentales
            </h1>
            <p className="text-lg lg:text-xl text-[#a3d3f2] font-semibold leading-snug max-w-2xl mb-5 opacity-90">
              Súmate como miembro, aliado estratégico o apoya un programa
              específico
            </p>
            <div className="flex flex-col gap-3 text-base text-white/75 leading-relaxed max-w-2xl mb-10">
              <p>
                Acción por los Derechos Fundamentales, A.C. es una asociación
                civil apartidista con sede en Tijuana, Baja California, que
                promueve participación ciudadana, formación cívica, diálogo
                social, defensa de derechos fundamentales e incidencia
                institucional.
              </p>
              <p>
                Si quieres formar parte de una comunidad ciudadana seria,
                organizada y comprometida con Tijuana y Baja California, puedes
                participar como miembro, sumarte como aliado estratégico o
                apoyar un programa específico.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#form"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg"
              >
                Quiero ser miembro
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white border border-white/30 hover:border-white/60 px-8 py-4 rounded-lg transition-colors"
              >
                Quiero recibir información
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-sm">
              <div className="flex flex-col gap-8">
                {[
                  {
                    icon: "✓",
                    title: "Asociación civil apartidista",
                    desc: "Organización independiente orientada al interés ciudadano.",
                  },
                  {
                    icon: "◎",
                    title: "Comunidad ciudadana",
                    desc: "Ciudadanos, empresarios, profesionistas e instituciones comprometidos con Tijuana.",
                  },
                  {
                    icon: "◈",
                    title: "Transparencia institucional",
                    desc: "Aportaciones con recibo oficial conforme a la normatividad vigente.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 bg-[#3d815c]/30 rounded-xl flex items-center justify-center text-[#a3d3f2] font-bold text-base">
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">
                        {title}
                      </h3>
                      <p className="text-white/55 text-sm leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10"
        />
      </section>

      {/* ─── ¿CÓMO PUEDO PARTICIPAR? — MODALIDADES ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#3d815c] uppercase block mb-4">
              Modalidades
            </span>
            <FineLine />
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-[#154c66] mb-8">
              ¿Cómo puedo participar?
            </h2>
            <div className="flex flex-col gap-4 text-text-soft text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                Puedes participar en Acción por los Derechos Fundamentales de
                tres formas principales: como miembro, como aliado estratégico
                o apoyando un programa específico.
              </p>
              <p>
                Cada modalidad permite involucrarte de una manera distinta,
                según tu interés, tu experiencia, tu institución o la forma en
                que deseas aportar.
              </p>
              <p>
                La asociación está abierta a ciudadanos, empresarios,
                profesionistas, educadores, estudiantes, instituciones,
                organizaciones y líderes sociales interesados en participar de
                forma responsable en temas de cultura cívica, valores, derechos
                fundamentales, diálogo social y comunidad.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {/* Miembro */}
            <div className="bg-white border border-border-subtle rounded-2xl p-10 flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 bg-[#154c66]/5 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 text-[#154c66]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-[#154c66] mb-1 text-center">
                Miembro
              </h3>
              <p className="text-text-soft text-xs font-semibold leading-snug mb-4 text-center">
                Para personas que quieren participar activamente
              </p>
              <div className="flex flex-col gap-3 text-text-soft text-sm leading-relaxed flex-grow mb-6 w-full">
                <p>
                  La modalidad de miembro está dirigida a ciudadanos,
                  profesionistas, estudiantes, padres de familia, docentes y
                  personas interesadas en formar parte de una comunidad
                  comprometida con la participación ciudadana y los derechos
                  fundamentales.
                </p>
                <p>
                  Como miembro puedes acercarte a las actividades, encuentros,
                  programas y espacios de participación de Acción por los
                  Derechos Fundamentales.
                </p>
              </div>
              <div className="border-t border-border-subtle pt-7 w-full">
                <div className="flex justify-center items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold text-[#154c66]">
                    $6,000
                  </span>
                  <span className="text-text-soft text-sm font-semibold">
                    MXN / anual
                  </span>
                </div>
                <Link
                  href="#form"
                  className="w-full inline-flex justify-center items-center gap-2 text-sm font-semibold text-[#154c66] bg-[#154c66]/5 hover:bg-[#154c66] hover:text-white py-4 rounded-lg transition-all"
                >
                  Quiero ser miembro
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Aliado Estratégico — featured */}
            <div className="bg-white border-2 border-[#3d815c] rounded-2xl p-10 flex flex-col items-center shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 bg-[#3d815c] text-white text-[10px] px-5 py-2 rounded-bl-2xl font-bold tracking-wider uppercase"
                aria-label="Modalidad más completa"
              >
                La más completa
              </div>
              <div className="w-14 h-14 bg-[#3d815c]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 text-[#3d815c]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-[#154c66] mb-1 text-center">
                Aliado Estratégico
              </h3>
              <p className="text-text-soft text-xs font-semibold leading-snug mb-4 text-center">
                Para empresas, instituciones y líderes que quieren fortalecer
                el alcance de la asociación
              </p>
              <div className="flex flex-col gap-3 text-text-soft text-sm leading-relaxed flex-grow mb-6 w-full">
                <p>
                  La modalidad de aliado estratégico está dirigida a
                  empresarios, instituciones, universidades, organizaciones,
                  líderes sociales y profesionistas que desean colaborar de
                  manera más activa con Acción por los Derechos Fundamentales.
                </p>
                <p>
                  Esta modalidad permite apoyar el crecimiento institucional de
                  la asociación y fortalecer sus programas, encuentros y
                  espacios de participación ciudadana.
                </p>
              </div>
              <div className="border-t border-border-subtle pt-7 w-full">
                <div className="flex justify-center items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold text-[#154c66]">
                    $12,000
                  </span>
                  <span className="text-text-soft text-sm font-semibold">
                    MXN / anual
                  </span>
                </div>
                <Link
                  href="#form"
                  className="w-full inline-flex justify-center items-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] py-4 rounded-lg transition-all shadow-lg shadow-[#3d815c]/20"
                >
                  Quiero ser aliado estratégico
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Apoyo a programa */}
            <div className="bg-white border border-border-subtle rounded-2xl p-10 flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 bg-[#a3d3f2]/20 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 text-[#154c66]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-[#154c66] mb-1 text-center">
                Apoya un programa
              </h3>
              <p className="text-text-soft text-xs font-semibold leading-snug mb-4 text-center">
                Para personas, empresas o instituciones que quieren respaldar
                una causa concreta
              </p>
              <div className="flex flex-col gap-3 text-text-soft text-sm leading-relaxed flex-grow mb-6 w-full">
                <p>
                  También puedes apoyar directamente uno de los programas de
                  Acción por los Derechos Fundamentales.
                </p>
                <p>
                  Esta modalidad está dirigida a personas, empresas,
                  instituciones u organizaciones que desean contribuir con una
                  iniciativa específica, según su interés social, educativo,
                  ciudadano o institucional.
                </p>
              </div>
              <div className="border-t border-border-subtle pt-7 w-full">
                <p className="text-text-soft text-sm text-center mb-6">
                  Esta modalidad es ideal para apoyar un programa concreto.
                </p>
                <Link
                  href="#form"
                  className="w-full inline-flex justify-center items-center gap-2 text-sm font-semibold text-[#154c66] bg-[#154c66]/5 hover:bg-[#154c66] hover:text-white py-4 rounded-lg transition-all"
                >
                  Quiero apoyar un programa
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PARTICIPAR TAMBIÉN ES CONSTRUIR COMUNIDAD ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#154c66] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 w-96 h-96 bg-[#3d815c]/20 rounded-full blur-[120px] pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -left-20 -bottom-20 w-96 h-96 bg-[#a3d3f2]/10 rounded-full blur-[120px] pointer-events-none"
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FineLine light />
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-8">
            Participar también es construir comunidad
          </h2>
          <div className="flex flex-col gap-4 text-white/75 text-base lg:text-lg leading-relaxed mb-12 text-left lg:text-center max-w-3xl mx-auto">
            <p>
              Muchas personas quieren involucrarse en los temas que afectan su
              ciudad, su familia, su empresa, su patrimonio o su comunidad, pero
              no siempre encuentran espacios claros para hacerlo.
            </p>
            <p>
              Acción por los Derechos Fundamentales busca abrir ese espacio.
            </p>
            <p>
              Participar en la asociación significa acercarte a una comunidad
              que promueve diálogo, formación, programas e iniciativas
              ciudadanas con sentido social.
            </p>
            <p>No necesitas ser experto para comenzar.</p>
            <p>
              Puedes sumarte desde tu experiencia, profesión, empresa,
              institución o interés ciudadano.
            </p>
          </div>
          <div className="text-[#3d815c] text-5xl mb-6 opacity-50 leading-none font-display font-bold select-none" aria-hidden="true">
            &ldquo;
          </div>
          <blockquote className="font-display text-2xl lg:text-4xl font-bold text-white leading-snug italic max-w-3xl mx-auto">
            Tu participación puede convertirse en comunidad, programas,
            propuestas y acciones con impacto social.
          </blockquote>
        </div>
      </section>

      {/* ─── ¿QUÉ MODALIDAD ME CONVIENE? ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#a3d3f2]/15">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-[#154c66] mb-6">
              ¿Qué modalidad me conviene?
            </h2>
            <p className="text-text-soft text-base lg:text-lg leading-relaxed max-w-2xl">
              Cada persona puede aportar desde su lugar. Esto puede orientarte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Si quieres integrarte como persona",
                rec: "Miembro",
                desc: "La modalidad recomendada es Miembro. Es una buena opción si quieres participar en actividades, recibir información, conocer los programas y formar parte de una comunidad ciudadana.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                ),
                title: "Si representas una empresa, institución u organización",
                rec: "Aliado estratégico",
                desc: "La modalidad recomendada es Aliado estratégico. Es una buena opción si quieres colaborar de forma más amplia, apoyar el alcance de la asociación y vincularte con otros actores sociales, empresariales e institucionales.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
                title: "Si te interesa una causa puntual",
                rec: "Apoya un programa específico",
                desc: "La modalidad recomendada es Apoya un programa específico. Es una buena opción si quieres respaldar directamente una iniciativa concreta, como valores, diálogo ciudadano, vigilancia ciudadana o derecho de propiedad.",
              },
            ].map(({ icon, title, rec, desc }) => (
              <div
                key={title}
                className="bg-white border border-border-subtle rounded-2xl p-8 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-[#a3d3f2]/20 rounded-xl flex items-center justify-center text-[#3d815c]">
                    {icon}
                  </div>
                  <h3 className="font-display text-base font-bold text-[#154c66] leading-snug">
                    {title}
                  </h3>
                </div>
                <p className="text-text-soft text-sm leading-relaxed mb-5">
                  {desc}
                </p>
                <div className="pt-4 border-t border-border-subtle">
                  <span className="text-[10px] font-bold tracking-[0.18em] text-[#3d815c] uppercase">
                    Modalidad recomendada: {rec}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESO PARA PARTICIPAR — 5 PASOS ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-[#154c66] mb-4">
              ¿Qué pasa después de enviar tus datos?
            </h2>
            <p className="text-text-soft text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
              El proceso es sencillo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pasos.map(({ num, label, desc, highlight, final }) => (
              <div key={num} className="flex flex-col items-center text-center group">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 border-2 transition-transform group-hover:scale-110 ${
                    final
                      ? "bg-[#154c66] border-[#154c66] text-white shadow-xl shadow-[#154c66]/25"
                      : highlight
                      ? "bg-[#3d815c]/15 border-[#3d815c]/40 text-[#3d815c]"
                      : "bg-[#a3d3f2]/20 border-[#a3d3f2]/40 text-[#154c66]"
                  }`}
                >
                  {final ? (
                    <Check size={24} aria-hidden="true" />
                  ) : (
                    <span className="font-bold text-xl">{num}</span>
                  )}
                </div>
                <h4
                  className={`font-bold text-sm mb-2 tracking-wide uppercase ${
                    highlight || final ? "text-[#3d815c]" : "text-[#154c66]"
                  }`}
                >
                  {label}
                </h4>
                <p className="text-text-soft text-xs leading-relaxed max-w-[160px]">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <div className="inline-block bg-[#a3d3f2]/20 border border-[#a3d3f2] rounded-xl px-8 py-4">
              <p className="text-[#154c66] font-semibold text-sm">
                Después de enviar tu solicitud, te contactaremos en un lapso de
                24 horas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── APORTACIONES, RECIBO Y FACTURA ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#154c66]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <FineLine light />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-8">
              Aportaciones claras y responsables
            </h2>
            <p className="text-[#a3d3f2] text-base lg:text-lg leading-relaxed mb-10 opacity-90">
              Las aportaciones permiten fortalecer las actividades, programas y
              acciones impulsadas por Acción por los Derechos Fundamentales,
              A.C.
            </p>
            <div className="flex flex-col gap-5">
              {[
                {
                  title: "Cómo realizar aportaciones",
                  desc: "Las aportaciones pueden realizarse por transferencia bancaria o depósito. Una persona del equipo te orientará sobre los detalles después de recibir tu solicitud.",
                  bgIcon: "bg-[#3d815c]",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                  ),
                },
                {
                  title: "Recibo oficial y factura",
                  desc: "A solicitud del participante, la asociación podrá emitir recibo oficial y/o factura conforme a la normatividad fiscal vigente.",
                  bgIcon: "bg-[#a3d3f2]",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#154c66]" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  ),
                },
                {
                  title: "Orientación sobre factura",
                  desc: "Si requieres factura, podrás indicarlo durante el proceso de contacto para recibir orientación sobre los datos necesarios.",
                  bgIcon: "bg-[#3d815c]/60",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                },
              ].map(({ title, desc, bgIcon, icon }) => (
                <div
                  key={title}
                  className="flex gap-5 p-7 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
                >
                  <div
                    className={`shrink-0 w-12 h-12 ${bgIcon} rounded-xl flex items-center justify-center`}
                  >
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">
                      {title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual accent */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 bg-[#3d815c]/20 blur-3xl rounded-full" aria-hidden="true" />
            <div className="relative z-10 grid grid-cols-2 gap-5 w-full max-w-sm">
              {[
                { val: "$6,000", label: "Aportación anual Miembro" },
                { val: "$12,000", label: "Aportación anual Aliado estratégico" },
                { val: "24h", label: "Tiempo de respuesta" },
                { val: "A.C.", label: "Asociación civil legalmente constituida" },
              ].map(({ val, label }) => (
                <div
                  key={label}
                  className="bg-white/10 border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center"
                >
                  <span className="font-display text-3xl font-bold text-white mb-2">
                    {val}
                  </span>
                  <span className="text-[#a3d3f2] text-xs font-semibold leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ¿QUIÉNES PUEDEN PARTICIPAR? ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-[#154c66] mb-6">
              ¿Quiénes pueden participar?
            </h2>
            <p className="text-text-soft text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              Acción por los Derechos Fundamentales convoca a personas e
              instituciones interesadas en participar de forma seria,
              responsable y apartidista.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-12">
            {publicos.map(({ icon, label }) => (
              <div
                key={label}
                className="p-8 bg-white border border-border-subtle rounded-2xl shadow-sm hover:shadow-md transition-all group flex flex-col items-center text-center gap-4"
              >
                <div className="w-14 h-14 bg-[#a3d3f2]/15 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {icon}
                </div>
                <span className="font-display font-bold text-[#154c66] text-base">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-center flex flex-col gap-3 text-text-soft text-base lg:text-lg leading-relaxed">
            <p className="font-semibold text-[#154c66]">
              No necesitas ser especialista.
            </p>
            <p>
              Puedes participar si quieres informarte, dialogar, colaborar o
              apoyar una causa con sentido social.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PARTICIPACIÓN CIUDADANA INDEPENDIENTE ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#a3d3f2]/15">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#154c66] rounded-[40px] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 shadow-2xl">
            <div
              aria-hidden="true"
              className="absolute right-0 bottom-0 opacity-5 pointer-events-none text-[280px] font-display font-bold text-white leading-none select-none"
            >
              ◈
            </div>
            <div className="lg:w-2/3 relative z-10">
              <FineLine light />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-8">
                Participación ciudadana independiente
              </h2>
              <div className="flex flex-col gap-4 text-[#a3d3f2] text-base lg:text-lg leading-relaxed opacity-90">
                <p>
                  Acción por los Derechos Fundamentales, A.C. es una
                  asociación civil independiente y apartidista.
                </p>
                <p>No somos un partido político.</p>
                <p>No somos una campaña electoral.</p>
                <p>No representamos intereses de ningún partido político.</p>
                <p>
                  Participar en Acción por los Derechos Fundamentales no
                  significa militar en un partido.
                </p>
                <p>
                  Significa formar parte de una comunidad ciudadana que promueve
                  cultura cívica, valores, diálogo social, defensa de derechos
                  fundamentales e incidencia institucional desde la sociedad.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 relative z-10 flex justify-center">
              <div className="w-40 h-40 bg-white/5 border-2 border-[#3d815c] rounded-full flex items-center justify-center group hover:scale-105 transition-transform shadow-2xl shadow-black/20">
                <ShieldCheck
                  size={64}
                  className="text-[#3d815c]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FORMULARIO DE PARTICIPACIÓN ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white" id="form">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-6">
              Quiero participar
            </h2>
            <p className="text-text-soft text-base lg:text-lg leading-relaxed mb-10">
              Déjanos tus datos y nos pondremos en contacto contigo en un lapso
              de 24 horas.
            </p>
            <div className="flex flex-col gap-5">
              <a
                href="mailto:contacto@asociacionaccion.com"
                className="group flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 bg-[#a3d3f2]/20 rounded-xl flex items-center justify-center group-hover:bg-[#154c66] transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#154c66] group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <span className="font-semibold text-[#154c66] text-sm">
                  contacto@asociacionaccion.com
                </span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white border border-border-subtle rounded-3xl p-10 lg:p-14 shadow-md">
            <form action="/contacto" method="GET" className="flex flex-col gap-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="nombre"
                    className="text-[10px] font-bold tracking-[0.18em] text-[#154c66] uppercase"
                  >
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    required
                    maxLength={100}
                    className="w-full px-5 py-4 bg-gray-50 border border-border-subtle rounded-xl focus:ring-2 focus:ring-[#3d815c]/20 focus:border-[#3d815c] outline-none transition-all placeholder:text-text-muted text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="telefono"
                    className="text-[10px] font-bold tracking-[0.18em] text-[#154c66] uppercase"
                  >
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="664 000 0000"
                    required
                    maxLength={20}
                    className="w-full px-5 py-4 bg-gray-50 border border-border-subtle rounded-xl focus:ring-2 focus:ring-[#3d815c]/20 focus:border-[#3d815c] outline-none transition-all placeholder:text-text-muted text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[10px] font-bold tracking-[0.18em] text-[#154c66] uppercase"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@ejemplo.com"
                  required
                  maxLength={254}
                  className="w-full px-5 py-4 bg-gray-50 border border-border-subtle rounded-xl focus:ring-2 focus:ring-[#3d815c]/20 focus:border-[#3d815c] outline-none transition-all placeholder:text-text-muted text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="modalidad"
                    className="text-[10px] font-bold tracking-[0.18em] text-[#154c66] uppercase"
                  >
                    Modalidad de interés
                  </label>
                  <select
                    id="modalidad"
                    name="modalidad"
                    className="w-full px-5 py-4 bg-gray-50 border border-border-subtle rounded-xl focus:ring-2 focus:ring-[#3d815c]/20 focus:border-[#3d815c] outline-none appearance-none cursor-pointer transition-all text-sm text-text-soft"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="miembro">Miembro</option>
                    <option value="aliado">Aliado estratégico</option>
                    <option value="programa">Apoyar un programa específico</option>
                    <option value="informacion">Deseo recibir más información</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="programa"
                    className="text-[10px] font-bold tracking-[0.18em] text-[#154c66] uppercase"
                  >
                    Programa de interés, si aplica
                  </label>
                  <select
                    id="programa"
                    name="programa"
                    className="w-full px-5 py-4 bg-gray-50 border border-border-subtle rounded-xl focus:ring-2 focus:ring-[#3d815c]/20 focus:border-[#3d815c] outline-none appearance-none cursor-pointer transition-all text-sm text-text-soft"
                  >
                    <option value="">Selecciona un programa</option>
                    <option value="valores">Fortaleciendo Valores</option>
                    <option value="dialogos">Diálogos con la Sociedad</option>
                    <option value="vigilancia">Vigilancia Ciudadana</option>
                    <option value="propiedad">Derecho de Propiedad</option>
                    <option value="sin-decidir">Aún no estoy seguro</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mensaje"
                  className="text-[10px] font-bold tracking-[0.18em] text-[#154c66] uppercase"
                >
                  Mensaje (opcional)
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={3}
                  placeholder="Cuéntanos brevemente cómo te gustaría participar o qué información necesitas."
                  maxLength={1000}
                  className="w-full px-5 py-4 bg-gray-50 border border-border-subtle rounded-xl focus:ring-2 focus:ring-[#3d815c]/20 focus:border-[#3d815c] outline-none transition-all placeholder:text-text-muted text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#3d815c] hover:bg-[#2d6347] text-white font-bold py-5 rounded-xl transition-all shadow-xl shadow-[#3d815c]/20 text-sm uppercase tracking-widest"
              >
                Enviar solicitud
              </button>

              <p className="text-text-soft/60 text-xs text-center leading-relaxed">
                Hemos recibido tu información. En un lapso de 24 horas, una
                persona del equipo se pondrá en contacto contigo para
                compartirte los siguientes pasos y resolver cualquier duda
                sobre la modalidad de participación que elegiste.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 lg:py-24 px-5 bg-gray-50 border-y border-border-subtle">
        <div className="max-w-3xl mx-auto">
          <FineLine />
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-10">
            Preguntas frecuentes sobre cómo participar
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
                <div className="mt-4 text-text-soft text-sm leading-relaxed pr-8">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL — fondo #A3D3F2 ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#a3d3f2]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6 relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#154c66 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-6">
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#154c66] uppercase block">
                Acción por los Derechos Fundamentales
              </span>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-[#154c66] leading-tight">
                Súmate a una comunidad que quiere construir
              </h2>
              <div className="flex flex-col gap-3 text-[#154c66]/80 text-base leading-relaxed max-w-xl">
                <p>
                  Tu participación puede fortalecer programas, encuentros,
                  conversaciones y acciones con impacto social.
                </p>
                <p>
                  Si quieres formar parte de una asociación civil seria, cercana
                  y comprometida con Tijuana y Baja California, este es un buen
                  lugar para comenzar.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link
                  href="#form"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg shadow-md"
                >
                  Quiero ser miembro
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#154c66] border-2 border-[#154c66]/40 hover:border-[#154c66] bg-white/50 hover:bg-white px-8 py-4 rounded-lg transition-all"
                >
                  Quiero recibir información
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
              <p className="text-[#154c66]/60 text-xs leading-relaxed max-w-sm">
                Al enviar tus datos, una persona del equipo se pondrá en
                contacto contigo en un lapso de 24 horas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
