import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Plus,
  MapPin,
  Users,
  Target,
  Lightbulb,
  BookOpen,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Diálogos con la Sociedad | Conferencias y encuentros ciudadanos en Tijuana",
  description:
    "Diálogos con la Sociedad es un programa de Acción por los Derechos Fundamentales, A.C. con encuentros ciudadanos, conferencias, diálogo social y networking en Tijuana, Baja California.",
};

function FineLine({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`mb-6 h-px ${light ? "bg-[#a3d3f2]" : "bg-[#3d815c]"}`}
      style={{ width: 60 }}
    />
  );
}

const fichaItems = [
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Tijuana, Baja California.",
  },
  {
    icon: Users,
    label: "Dirigido a",
    value:
      "Ciudadanos, empresarios, profesionistas, educadores, estudiantes, instituciones, líderes sociales y personas interesadas en temas públicos.",
  },
  {
    icon: Target,
    label: "Propósito",
    value:
      "Abrir espacios de diálogo ciudadano, conferencias y encuentros sobre temas sociales, económicos, institucionales y comunitarios.",
  },
  {
    icon: Lightbulb,
    label: "Enfoque",
    value:
      "Acercar conversaciones importantes a la ciudadanía de forma clara, seria y participativa.",
  },
  {
    icon: BookOpen,
    label: "Participan",
    value:
      "Líderes, especialistas, autoridades, empresarios, académicos, representantes sociales y ciudadanos interesados en comprender y aportar.",
  },
];

const elementosPrograma = [
  "Conferencias en Tijuana.",
  "Encuentros ciudadanos.",
  "Foros de diálogo social.",
  "Conversaciones con líderes y especialistas.",
  "Temas de actualidad local, estatal y nacional.",
  "Espacios de networking en Tijuana.",
  "Participación empresarial y ciudadana.",
  "Vinculación con personas interesadas en cultura cívica.",
  "Oportunidades para conocer otros programas de la asociación.",
];

const temas = [
  "Participación ciudadana",
  "Cultura cívica",
  "Derechos fundamentales",
  "Economía y desarrollo regional",
  "Educación y valores",
  "Legalidad e instituciones",
  "Seguridad y comunidad",
  "Libertad económica y certeza jurídica",
  "Desarrollo de Tijuana y Baja California",
  "Liderazgo regional",
  "Retos sociales y oportunidades para la comunidad",
];

const participantes = [
  "Ciudadanos interesados en temas públicos.",
  "Empresarios y líderes de Baja California.",
  "Profesionistas con vocación social.",
  "Estudiantes y jóvenes interesados en cultura cívica.",
  "Educadores y académicos.",
  "Instituciones y organizaciones.",
  "Personas interesadas en conferencias, foros y eventos en Tijuana.",
  "Personas que buscan networking con propósito ciudadano.",
  "Miembros y aliados de Acción por los Derechos Fundamentales.",
];

const encuentrosRealizados = [
  {
    img: "/eventos/dialogos-sociedad-conferencia-01.jpeg",
    alt: "Conferencia del programa Diálogos con la Sociedad en Tijuana",
    titulo: "Conferencia · Diálogos con la Sociedad",
    descripcion:
      "Encuentro ciudadano realizado en Tijuana con la participación de ponentes, líderes y ciudadanos interesados en el diálogo social.",
  },
  {
    img: "/eventos/dialogos-sociedad-ponente-01.jpeg",
    alt: "Ponente en encuentro ciudadano de Diálogos con la Sociedad",
    titulo: "Ponencia en encuentro ciudadano",
    descripcion:
      "Espacio de diálogo donde ciudadanos, líderes y especialistas conversaron sobre temas de actualidad local y regional.",
  },
  {
    img: "/eventos/dialogos-sociedad-presentacion-01.jpeg",
    alt: "Presentación en foro de diálogo social de Diálogos con la Sociedad",
    titulo: "Foro de diálogo social",
    descripcion:
      "Foro organizado por Acción por los Derechos Fundamentales, A.C. en Tijuana, Baja California.",
  },
  {
    img: "/eventos/Foto grupal del evento de Diálogos con la Sociedad.jpeg",
    alt: "Foto grupal de participantes en Diálogos con la Sociedad",
    titulo: "Encuentro ciudadano · Diálogos con la Sociedad",
    descripcion:
      "Participantes en un encuentro del programa Diálogos con la Sociedad, Tijuana.",
  },
];

const faq = [
  {
    q: "¿Qué es Diálogos con la Sociedad?",
    a: "Diálogos con la Sociedad es un programa de Acción por los Derechos Fundamentales, A.C. que organiza encuentros ciudadanos, conferencias y espacios de diálogo social en Tijuana, Baja California.",
  },
  {
    q: "¿Quién impulsa Diálogos con la Sociedad?",
    a: "El programa es impulsado por Acción por los Derechos Fundamentales, A.C., asociación civil apartidista con sede en Tijuana, Baja California.",
  },
  {
    q: "¿Dónde se realizan los encuentros?",
    a: "Los encuentros se impulsan desde Tijuana, Baja California. La sede, fecha y horario de cada actividad se informarán en la sección de Próximos encuentros.",
  },
  {
    q: "¿Quiénes pueden asistir?",
    a: "Pueden asistir ciudadanos, empresarios, profesionistas, educadores, estudiantes, instituciones, líderes sociales y personas interesadas en temas públicos, cultura cívica y participación ciudadana.",
  },
  {
    q: "¿Necesito ser miembro para asistir?",
    a: "No necesariamente. Puedes acercarte asistiendo a próximos encuentros o solicitando información. Si después deseas participar de forma más activa, puedes conocer las modalidades de participación de la asociación.",
  },
  {
    q: "¿Qué tipo de temas se tratan?",
    a: "El programa puede abordar temas de participación ciudadana, cultura cívica, derechos fundamentales, economía, educación, legalidad, instituciones, desarrollo regional y otros asuntos relevantes para Tijuana y Baja California.",
  },
  {
    q: "¿Diálogos con la Sociedad es un evento político?",
    a: "No. Diálogos con la Sociedad forma parte de una asociación civil apartidista. Su propósito es abrir espacios de conversación ciudadana, no promover campañas ni intereses partidistas.",
  },
  {
    q: "¿Puedo proponer un tema o invitado?",
    a: "Puedes contactar a la asociación para compartir propuestas de temas, invitados o colaboraciones relacionadas con los objetivos del programa.",
  },
  {
    q: "¿Dónde puedo ver los próximos eventos?",
    a: "Puedes consultar la sección de Próximos encuentros o contactar a la asociación para recibir información actualizada.",
  },
  {
    q: "¿Cómo puedo pedir más información?",
    a: "Puedes escribir al correo contacto@asociacionaccion.com o comunicarte con la asociación desde la página de Contacto.",
  },
];

export default function DialogosConLaSociedadPage() {
  return (
    <>
      {/* ─── HERO (full-bleed) ─── */}
      <section className="relative h-[88vh] min-h-[580px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/eventos/hero-dialogos-sociedad.jpeg"
            alt="Encuentro ciudadano del programa Diálogos con la Sociedad en Tijuana"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65" />
        </div>

        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          <div
            className="w-14 h-px bg-[#3d815c] mx-auto mb-8"
            aria-hidden="true"
          />
          <span className="text-[10px] font-bold tracking-[0.4em] text-white/80 uppercase block mb-5">
            Programa institucional · Acción por los Derechos Fundamentales
          </span>
          <h1
            className="font-display text-5xl lg:text-7xl xl:text-[84px] font-bold leading-[1.05] text-white mb-6"
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
          >
            Diálogos con la Sociedad
          </h1>
          <p
            className="text-lg lg:text-xl text-white/85 font-semibold leading-snug max-w-2xl mx-auto"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.35)" }}
          >
            Encuentros ciudadanos, conferencias y diálogo social en Tijuana
          </p>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"
        />
      </section>

      {/* ─── HERO TRANSITION: intro + CTAs ─── */}
      <section className="py-16 lg:py-20 px-5 bg-white border-b border-border-subtle">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="font-display text-xl lg:text-2xl font-bold text-[#154c66] mb-6 border-l-4 border-[#3d815c] pl-5 leading-snug">
              Encuentros ciudadanos, conferencias y diálogo social en Tijuana.
            </p>
            <div className="flex flex-col gap-4 text-text-soft text-base lg:text-lg leading-relaxed max-w-2xl">
              <p>
                Diálogos con la Sociedad es un programa de Acción por los
                Derechos Fundamentales, A.C. que reúne a ciudadanos,
                empresarios, profesionistas, educadores, estudiantes,
                instituciones y líderes sociales para conversar sobre temas que
                impactan a Tijuana, Baja California y México.
              </p>
              <p>
                A través de encuentros, conferencias y espacios de diálogo, este
                programa acerca voces relevantes de la comunidad a personas
                interesadas en entender mejor su entorno y participar de forma
                informada.
              </p>
              <p>
                Diálogos con la Sociedad busca abrir conversaciones serias,
                claras y cercanas sobre los temas públicos, sociales, económicos
                e institucionales que influyen en la vida diaria.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:justify-end">
            <Link
              href="/proximos-encuentros"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg"
            >
              Ver próximos encuentros
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#154c66] border border-[#154c66]/30 hover:border-[#154c66] px-8 py-4 rounded-lg transition-colors"
            >
              Quiero recibir información
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ¿QUÉ ES DIÁLOGOS CON LA SOCIEDAD? + FICHA RÁPIDA ─── */}
      <section className="py-20 lg:py-28 px-5 bg-gray-50 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — copy */}
          <div className="lg:col-span-7">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
              ¿Qué es Diálogos con la Sociedad?
            </h2>
            <div className="flex flex-col gap-5 text-text-soft text-base lg:text-lg leading-relaxed">
              <p>
                Diálogos con la Sociedad es un programa de encuentros ciudadanos
                impulsado por Acción por los Derechos Fundamentales, A.C. en
                Tijuana, Baja California.
              </p>
              <p>
                Su objetivo es crear espacios de conversación entre la sociedad
                civil, empresarios, profesionistas, líderes sociales,
                autoridades, académicos, especialistas y ciudadanos interesados
                en participar.
              </p>
              <p>
                El programa permite escuchar distintas perspectivas, hacer
                preguntas, conocer temas relevantes y conectar con una comunidad
                interesada en la participación ciudadana, la cultura cívica y el
                desarrollo de Baja California.
              </p>
              <p>No se trata solo de asistir a una conferencia.</p>
              <p>Se trata de participar en una comunidad que busca entender, dialogar y construir.</p>
            </div>
          </div>

          {/* Right — ficha rápida */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-border-subtle rounded-xl p-8 shadow-sm">
              <span className="text-[10px] font-bold tracking-[0.22em] text-[#3d815c] uppercase block mb-1">
                Diálogos con la Sociedad
              </span>
              <h3 className="font-display text-xl font-bold text-[#154c66] mb-6 pb-4 border-b border-border-subtle">
                En una mirada
              </h3>
              <ul className="flex flex-col gap-5">
                {fichaItems.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-[#a3d3f2]/30 flex items-center justify-center">
                      <Icon size={16} className="text-[#154c66]" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.18em] text-[#3d815c] uppercase block mb-0.5">
                        {label}
                      </span>
                      <span className="text-sm text-text-soft leading-relaxed">
                        {value}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── UN ESPACIO PARA ENTENDER LO QUE ESTÁ PASANDO ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
              Un espacio para entender lo que está pasando
            </h2>
            <div className="flex flex-col gap-5 text-text-soft text-base lg:text-lg leading-relaxed">
              <p>
                Muchas veces los temas que impactan a la ciudad parecen lejanos,
                técnicos o reservados para ciertos grupos.
              </p>
              <p>Diálogos con la Sociedad busca acercar esas conversaciones a más personas.</p>
              <p>
                El programa permite escuchar de primera mano a voces relevantes,
                conocer diferentes puntos de vista y comprender mejor los temas
                que influyen en la vida pública, económica, social e
                institucional.
              </p>
              <p>
                Porque para participar mejor, primero necesitamos entender mejor.
              </p>
            </div>
          </div>

          {/* Texto destacado */}
          <div className="lg:col-span-5 lg:pt-16">
            <div className="relative bg-[#154c66] rounded-xl p-8 lg:p-10">
              <Quote
                size={32}
                className="text-[#a3d3f2] mb-6 opacity-80"
                aria-hidden="true"
              />
              <p className="font-display text-lg lg:text-xl font-bold text-white leading-relaxed">
                Cuando una comunidad conversa con seriedad, también empieza a
                construir mejores soluciones.
              </p>
              <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 w-24 h-24 rounded-br-xl overflow-hidden opacity-10"
                style={{
                  background: "radial-gradient(#a3d3f2 1px, transparent 1px)",
                  backgroundSize: "12px 12px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── ¿POR QUÉ ES IMPORTANTE ESTE PROGRAMA? ─── */}
      <section className="py-20 lg:py-28 px-5 bg-gray-50 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — image collage */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-xl shadow-sm">
                <Image
                  src="/eventos/dialogos-sociedad-asistentes-01.jpeg"
                  alt="Asistentes al encuentro de Diálogos con la Sociedad"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-sm mt-8">
                <Image
                  src="/eventos/dialogos-sociedad-logo-pantalla-01.jpeg"
                  alt="Logo de Diálogos con la Sociedad en pantalla de evento"
                  width={300}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
              ¿Por qué es importante este programa?
            </h2>
            <div className="flex flex-col gap-5 text-text-soft text-base lg:text-lg leading-relaxed mb-8">
              <p>
                Diálogos con la Sociedad parte de una idea sencilla: una
                sociedad más informada puede participar mejor.
              </p>
              <p>
                Los encuentros ciudadanos permiten abrir espacios de escucha,
                reflexión y vinculación entre personas que comparten interés por
                los temas que afectan a Tijuana y Baja California.
              </p>
              <p>
                En estos espacios se fortalece la cultura cívica, se promueve la
                participación ciudadana y se generan conexiones entre distintos
                sectores de la comunidad.
              </p>
              <p>
                La conversación no resuelve todo por sí sola, pero puede ser el
                primer paso para organizarse, colaborar y actuar.
              </p>
            </div>
            <div className="border-l-4 border-[#3d815c] pl-5 py-1">
              <p className="text-[#154c66] font-semibold text-base leading-relaxed">
                Cada encuentro es una oportunidad para fortalecer el tejido
                ciudadano de Tijuana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ¿QUÉ PUEDES ENCONTRAR EN DIÁLOGOS CON LA SOCIEDAD? ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-border-subtle pb-8 gap-6">
            <div className="max-w-2xl">
              <FineLine />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66]">
                ¿Qué puedes encontrar en Diálogos con la Sociedad?
              </h2>
            </div>
            <p className="text-text-soft text-sm leading-relaxed max-w-xs md:text-right shrink-0">
              Este programa reúne actividades y encuentros diseñados para
              acercar información, análisis y comunidad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {elementosPrograma.map((item, i) => (
              <div
                key={i}
                className="group relative bg-[#f8fbfe] border border-border-subtle rounded-xl overflow-hidden hover:border-[#3d815c] hover:shadow-md transition-all duration-200"
              >
                <div className="h-1 bg-[#3d815c] w-full" aria-hidden="true" />
                <div className="p-7">
                  <span className="font-display text-3xl font-bold text-[#3d815c]/35 block mb-4 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[#154c66] text-sm font-semibold leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEMAS QUE PUEDE ABORDAR EL PROGRAMA ─── */}
      <section className="py-20 lg:py-28 px-5 bg-gray-50 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-4">
              Temas que puede abordar el programa
            </h2>
            <p className="text-text-soft text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              Diálogos con la Sociedad puede abordar temas públicos, sociales,
              económicos e institucionales desde una perspectiva ciudadana.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {temas.map((tema, i) => (
              <span
                key={i}
                className={`px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-default ${
                  i % 2 === 0 ? "bg-[#154c66]" : "bg-[#3d815c]"
                }`}
              >
                {tema}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UN PUNTO DE ENCUENTRO PARA LA COMUNIDAD ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#154c66]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left — image */}
          <div className="lg:col-span-5 relative">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/eventos/Reunion ciudadana.jpeg"
                alt="Reunión ciudadana del programa Diálogos con la Sociedad"
                width={700}
                height={520}
                className="object-cover w-full"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-[#a3d3f2]/40 pointer-events-none"
            />
          </div>

          {/* Right — copy */}
          <div className="lg:col-span-7 lg:pl-8">
            <FineLine light />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-8 italic">
              &ldquo;Participar también empieza por estar presente, escuchar y
              formar parte de conversaciones que importan.&rdquo;
            </h2>
            <div className="flex flex-col gap-4 text-white/75 text-base lg:text-lg leading-relaxed mb-8">
              <p>
                Diálogos con la Sociedad también funciona como un espacio de
                vinculación.
              </p>
              <p>
                En cada encuentro pueden coincidir personas de distintos
                sectores: ciudadanos, empresarios, profesionistas, estudiantes,
                docentes, instituciones y líderes sociales.
              </p>
              <p>
                Esa mezcla de voces permite que el diálogo sea más amplio y que
                la participación no se quede encerrada en un solo grupo.
              </p>
              <p>
                El programa busca que más personas puedan escuchar, preguntar,
                conocer y conectar.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="w-8 h-px bg-[#3d815c]" />
              <span className="text-[10px] font-bold tracking-[0.22em] text-[#a3d3f2] uppercase">
                Compromiso ciudadano
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ¿A QUIÉN CONVOCA DIÁLOGOS CON LA SOCIEDAD? ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#a3d3f2]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <FineLine />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
                ¿A quién convoca Diálogos con la Sociedad?
              </h2>
              <div className="flex flex-col gap-4 text-[#154c66]/80 text-base lg:text-lg leading-relaxed">
                <p>
                  Este programa está abierto a personas interesadas en
                  comprender mejor los temas que impactan a su comunidad.
                </p>
                <p>No necesitas ser especialista para asistir.</p>
                <p>
                  Puedes acercarte si quieres escuchar, aprender, hacer
                  preguntas, conocer personas o descubrir formas de participar.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[10px] font-bold tracking-[0.22em] text-[#3d815c] uppercase block mb-6">
                Pueden participar
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {participantes.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-[#154c66] rounded-lg px-5 py-3"
                  >
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[#3d815c] shrink-0"
                    />
                    <span className="text-white/90 text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRÓXIMOS ENCUENTROS ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <FineLine />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66]">
                Próximos encuentros
              </h2>
            </div>
            <Link
              href="/proximos-encuentros"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3d815c] hover:text-[#154c66] transition-colors shrink-0"
            >
              Ver todos
              <span className="h-px w-8 bg-[#3d815c]" />
            </Link>
          </div>

          <div className="flex flex-col gap-4 text-text-soft text-base lg:text-lg leading-relaxed max-w-3xl mb-10">
            <p>
              Los encuentros son una de las formas más sencillas de acercarte a
              Acción por los Derechos Fundamentales, A.C.
            </p>
            <p>
              En esta sección podrás consultar las próximas conferencias,
              invitados, fechas, horarios, sedes y formas de registro.
            </p>
            <p>
              Si aún no hay un evento publicado, puedes dejar tus datos para
              recibir información sobre las próximas actividades.
            </p>
          </div>

          {/* Calendario de próximos encuentros */}
          <div className="border border-border-subtle rounded-2xl overflow-hidden shadow-sm bg-white max-w-2xl">
            <div className="bg-[#f8fbfe] flex items-center justify-center p-6 lg:p-8">
              <div className="relative w-full" style={{ maxHeight: 520 }}>
                <Image
                  src="/eventos/calendario-encuentros-dialogos-2026.jpeg"
                  alt="Calendario de próximos encuentros de Diálogos con la Sociedad 2026"
                  width={800}
                  height={1000}
                  className="object-contain w-full h-auto"
                  style={{ maxHeight: 520 }}
                />
              </div>
            </div>
            <div className="px-8 py-6 border-t border-border-subtle flex flex-col sm:flex-row gap-3">
              <Link
                href="/proximos-encuentros"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg"
              >
                Ver próximos encuentros
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#154c66] border border-[#154c66]/30 hover:border-[#154c66] px-8 py-4 rounded-lg transition-colors"
              >
                Quiero recibir información
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ENCUENTROS REALIZADOS ─── */}
      <section className="py-20 lg:py-28 px-5 bg-gray-50 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <FineLine />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66]">
                Encuentros realizados
              </h2>
              <p className="text-text-soft text-base leading-relaxed mt-2 max-w-xl">
                Diálogos con la Sociedad documenta sus encuentros y actividades
                para mostrar el trabajo de la asociación y mantener informada a
                la comunidad.
              </p>
            </div>
            <Link
              href="/noticias"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3d815c] hover:text-[#154c66] transition-colors shrink-0"
            >
              Ver noticias
              <span className="h-px w-8 bg-[#3d815c]" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {encuentrosRealizados.map(({ img, alt, titulo, descripcion }) => (
              <article
                key={titulo}
                className="group border border-border-subtle rounded-xl overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={img}
                    alt={alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold tracking-[0.18em] text-[#3d815c] uppercase block mb-3">
                    Encuentro realizado · Diálogos con la Sociedad
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#154c66] leading-snug mb-2">
                    {titulo}
                  </h3>
                  <p className="text-text-soft text-sm leading-relaxed">
                    {descripcion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOTICIAS DE DIÁLOGOS CON LA SOCIEDAD ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white border-b border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <FineLine />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66]">
                Noticias de Diálogos con la Sociedad
              </h2>
              <p className="text-text-soft text-base leading-relaxed mt-2 max-w-xl">
                En esta sección se publican notas sobre conferencias, encuentros,
                invitados, conversaciones destacadas y actividades relacionadas
                con Diálogos con la Sociedad.
              </p>
            </div>
            <Link
              href="/noticias"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3d815c] hover:text-[#154c66] transition-colors shrink-0"
            >
              Ver noticias
              <span className="h-px w-8 bg-[#3d815c]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
            {/* Card 1 — Facebook */}
            <article className="group border border-border-subtle rounded-xl overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/eventos/dialogos-sociedad-conferencia-01.jpeg"
                  alt="Encuentro de Diálogos con la Sociedad — Jesús Ruiz Uribe con Acción por los Derechos Fundamentales"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold tracking-[0.18em] text-[#3d815c] uppercase block mb-3">
                  Publicación · Facebook · Diálogos con la Sociedad
                </span>
                <h3 className="font-display text-base font-bold text-[#154c66] leading-snug mb-3">
                  Jesús Ruiz Uribe comparte encuentro con Acción por los
                  Derechos Fundamentales
                </h3>
                <p className="text-text-soft text-sm leading-relaxed mb-5">
                  En el encuentro de Acción por los Derechos Fundamentales se
                  dialogó con ciudadanía y empresarios de Baja California sobre
                  participación, respeto y construcción de soluciones.
                </p>
                <a
                  href="https://www.facebook.com/100049359393323/posts/1473396037649029/?mibextid=wwXIfr&rdid=Vktw2CqZ4kXc27yu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#3d815c] hover:text-[#154c66] transition-colors"
                >
                  Ver publicación original
                  <span className="h-px w-6 group-hover:w-10 bg-current transition-all duration-300" />
                </a>
              </div>
            </article>

            {/* Card 2 — Instagram */}
            <article className="group border border-border-subtle rounded-xl overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/eventos/dialogos-sociedad-christopher-teal-uniradio-01.jpeg"
                  alt="Cobertura de Uniradio Informa Baja California — encuentro de Diálogos con la Sociedad con Christopher Teal"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold tracking-[0.18em] text-[#3d815c] uppercase block mb-3">
                  Cobertura · Instagram · Diálogos con la Sociedad
                </span>
                <h3 className="font-display text-base font-bold text-[#154c66] leading-snug mb-3">
                  Uniradio Informa Baja California cubre encuentro de Diálogos
                  con la Sociedad
                </h3>
                <p className="text-text-soft text-sm leading-relaxed mb-5">
                  Cobertura externa relacionada con un encuentro de Diálogos con
                  la Sociedad y la despedida del Cónsul Christopher Teal en
                  Tijuana.
                </p>
                <a
                  href="https://www.instagram.com/reels/DZCtuOgCuwU/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#3d815c] hover:text-[#154c66] transition-colors"
                >
                  Ver publicación original
                  <span className="h-px w-6 group-hover:w-10 bg-current transition-all duration-300" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ─── ¿CÓMO PUEDO ASISTIR O RECIBIR INFORMACIÓN? ─── */}
      <section className="py-20 lg:py-28 px-5 bg-gray-50 border-b border-border-subtle">
        <div className="max-w-3xl mx-auto text-center">
          <FineLine />
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
            ¿Cómo puedo asistir o recibir información?
          </h2>
          <div className="flex flex-col gap-4 text-text-soft text-base lg:text-lg leading-relaxed mb-10">
            <p>
              Puedes acercarte a Diálogos con la Sociedad registrándote a los
              próximos encuentros, solicitando información o contactando a
              Acción por los Derechos Fundamentales.
            </p>
            <p>
              La asociación podrá orientarte sobre fechas, invitados, actividades
              disponibles y formas de participación.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/proximos-encuentros"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg"
            >
              Ver próximos encuentros
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#154c66] border border-[#154c66]/30 hover:border-[#154c66] px-8 py-4 rounded-lg transition-colors"
            >
              Contactar a la asociación
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#154c66] border border-[#154c66]/30 hover:border-[#154c66] px-8 py-4 rounded-lg transition-colors"
            >
              Quiero recibir información
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 lg:py-24 px-5 bg-white border-b border-border-subtle">
        <div className="max-w-3xl mx-auto">
          <FineLine />
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-10">
            Preguntas frecuentes sobre Diálogos con la Sociedad
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

      {/* ─── CTA FINAL ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#a3d3f2]/20 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden">
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
              <span className="text-[10px] font-bold tracking-[0.22em] text-[#3d815c] uppercase block">
                Diálogos con la Sociedad
              </span>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-[#154c66] leading-tight">
                Dialogar también es participar
              </h2>
              <div className="flex flex-col gap-3 text-text-soft text-base leading-relaxed max-w-2xl">
                <p>
                  Diálogos con la Sociedad busca reunir a personas que quieren
                  entender mejor su entorno, escuchar distintas voces y formar
                  parte de conversaciones que pueden abrir caminos de
                  participación.
                </p>
                <p>
                  Si quieres acercarte a la asociación, este programa puede ser
                  un buen punto de inicio.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link
                  href="/proximos-encuentros"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg"
                >
                  Ver próximos encuentros
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <Link
                  href="/programas"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#154c66] border border-[#154c66]/30 hover:border-[#154c66] bg-white/80 px-8 py-4 rounded-lg transition-colors"
                >
                  Conocer otros programas
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
              <p className="text-text-soft/60 text-xs leading-relaxed max-w-sm">
                Una persona del equipo podrá orientarte sobre próximos
                encuentros, actividades y formas disponibles para participar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
