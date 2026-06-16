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
  CheckCircle2,
  BookOpen,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Fortaleciendo Valores | Programa de valores para niñas, niños y jóvenes en Tijuana",
  description:
    "Fortaleciendo Valores es un programa de Acción por los Derechos Fundamentales, A.C. para promover valores, formación cívica y responsabilidad social en niñas, niños y jóvenes de Tijuana.",
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
      "Niñas, niños, jóvenes, familias, docentes e instituciones educativas.",
  },
  {
    icon: Target,
    label: "Propósito",
    value:
      "Promover valores, formación cívica, cultura cívica y responsabilidad social.",
  },
  {
    icon: Lightbulb,
    label: "Enfoque",
    value:
      "Pasar de la teoría a la práctica: que los valores se vivan en la familia, la escuela y la comunidad.",
  },
  {
    icon: BookOpen,
    label: "Participan",
    value:
      "Familias, escuelas, docentes, especialistas, ciudadanos e instituciones interesadas en la formación de nuevas generaciones.",
  },
];

const valores = [
  {
    num: "01",
    titulo: "Respeto",
    descripcion:
      "El respeto permite reconocer la dignidad de los demás, convivir mejor y construir relaciones más sanas.",
  },
  {
    num: "02",
    titulo: "Honestidad",
    descripcion:
      "La honestidad fortalece la confianza, la responsabilidad y la vida comunitaria.",
  },
  {
    num: "03",
    titulo: "Responsabilidad",
    descripcion:
      "La responsabilidad ayuda a comprender que los derechos también implican obligaciones, esfuerzo y compromiso.",
  },
  {
    num: "04",
    titulo: "Empatía",
    descripcion:
      "La empatía permite reconocer lo que viven otras personas y actuar con mayor sensibilidad.",
  },
  {
    num: "05",
    titulo: "Autocontrol y resiliencia",
    descripcion:
      "El autocontrol y la resiliencia ayudan a manejar emociones, frustraciones, impulsos y retos cotidianos.",
  },
  {
    num: "06",
    titulo: "Tolerancia e inclusión",
    descripcion:
      "La tolerancia y la inclusión fortalecen la convivencia en entornos diversos y ayudan a construir comunidades más respetuosas.",
  },
];

const pedagogiaItems = [
  "Relatos o narrativas con dilemas morales.",
  "Testimonios reales conectados con la comunidad.",
  "Reflexión guiada.",
  "Actividades prácticas.",
  "Participación de docentes.",
  "Participación de familias.",
  "Trabajo con escuelas e instituciones.",
];

const lineasAccion = [
  "Diagnóstico sobre valores en niñas, niños y jóvenes.",
  "Cuestionarios y ejercicios de reflexión con estudiantes.",
  "Participación de docentes, familias y especialistas.",
  "Programas piloto en escuelas de Tijuana.",
  "Materiales formativos y actividades prácticas.",
  "Escuela para padres o espacios de acompañamiento familiar.",
  "Propuestas sustentadas en evidencia para fortalecer la formación cívica.",
  "Vinculación con instituciones educativas y comunidad.",
];

const participantes = [
  "Madres y padres de familia.",
  "Docentes.",
  "Directivos escolares.",
  "Instituciones educativas.",
  "Psicólogos, pedagogos y especialistas.",
  "Empresarios interesados en apoyar programas educativos.",
  "Ciudadanos comprometidos con valores y cultura cívica.",
  "Organizaciones sociales.",
  "Jóvenes interesados en participación comunitaria.",
];

const aportes = [
  "Mejorar la convivencia escolar.",
  "Fortalecer el respeto entre estudiantes, familias y docentes.",
  "Promover responsabilidad y compromiso.",
  "Impulsar cultura cívica desde edades tempranas.",
  "Reforzar el vínculo entre familia y escuela.",
  "Abrir espacios de reflexión sobre legalidad, honestidad y comunidad.",
  "Formar ciudadanos más conscientes y participativos.",
];

const faq = [
  {
    q: "¿Qué es Fortaleciendo Valores?",
    a: "Fortaleciendo Valores es un programa de Acción por los Derechos Fundamentales, A.C. orientado a promover valores, formación cívica y responsabilidad social en niñas, niños y jóvenes de Tijuana.",
  },
  {
    q: "¿Quién impulsa Fortaleciendo Valores?",
    a: "El programa es impulsado por Acción por los Derechos Fundamentales, A.C., asociación civil apartidista con sede en Tijuana, Baja California.",
  },
  {
    q: "¿A quién está dirigido el programa?",
    a: "Está dirigido a niñas, niños, jóvenes, familias, docentes, instituciones educativas, especialistas y ciudadanos interesados en fortalecer la formación en valores.",
  },
  {
    q: "¿Qué valores trabaja el programa?",
    a: "El programa trabaja valores como respeto, honestidad, responsabilidad, empatía, autocontrol, resiliencia, tolerancia, inclusión y sentido comunitario.",
  },
  {
    q: "¿Por qué es importante este programa?",
    a: "Porque los valores no solo deben enseñarse en teoría. También necesitan practicarse en la familia, la escuela y la comunidad.",
  },
  {
    q: "¿Fortaleciendo Valores trabaja con escuelas?",
    a: "El programa contempla la participación de escuelas, docentes, familias e instituciones educativas como parte de su enfoque comunitario.",
  },
  {
    q: "¿Pueden participar padres de familia?",
    a: "Sí. La participación de madres y padres de familia es importante porque la familia es un espacio central en la formación de valores.",
  },
  {
    q: "¿Pueden participar docentes o especialistas?",
    a: "Sí. Docentes, directivos, psicólogos, pedagogos y especialistas pueden acercarse para conocer formas de colaboración.",
  },
  {
    q: "¿Dónde se desarrolla Fortaleciendo Valores?",
    a: "El programa se impulsa desde Tijuana, Baja California.",
  },
  {
    q: "¿Cómo puedo pedir más información?",
    a: "Puedes contactar a Acción por los Derechos Fundamentales al correo contacto@asociacionaccion.com o desde la página de Contacto.",
  },
];

export default function FortaliciendoValoresPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-[88vh] min-h-[580px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/eventos/fortaleciendo-valores-programa-piloto-educacion-basica-01.jpeg"
            alt="Programa Fortaleciendo Valores en educación básica"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#154c66]/82" />
        </div>

        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          <div className="w-14 h-px bg-[#3d815c] mx-auto mb-8" aria-hidden="true" />
          <span className="text-[10px] font-bold tracking-[0.4em] text-white/80 uppercase block mb-5">
            Programa institucional · Acción por los Derechos Fundamentales
          </span>
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-7xl xl:text-[84px] font-bold leading-tight text-white mb-6 break-words max-w-full"
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
          >
            Fortaleciendo Valores
          </h1>
          <p
            className="text-lg lg:text-xl text-white/85 font-semibold leading-snug max-w-2xl mx-auto mb-10"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.35)" }}
          >
            Formación cívica y valores para niñas, niños y jóvenes de Tijuana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg"
            >
              Quiero recibir información
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="/programas"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white border border-white/50 hover:border-white px-8 py-4 rounded-lg transition-colors"
            >
              Conocer otros programas
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"
        />
      </section>

      {/* ─── ¿QUÉ ES FORTALECIENDO VALORES? + FICHA RÁPIDA ─── */}
      <section className="py-20 lg:py-28 px-5 bg-gray-50 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — copy */}
          <div className="lg:col-span-7">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
              ¿Qué es Fortaleciendo Valores?
            </h2>
            <div className="flex flex-col gap-5 text-text-soft text-base lg:text-lg leading-relaxed">
              <p>
                Fortaleciendo Valores es un programa de formación cívica y
                valores impulsado por Acción por los Derechos Fundamentales,
                A.C. en Tijuana, Baja California.
              </p>
              <p>
                Está dirigido a niñas, niños y jóvenes, con participación de
                familias, docentes, escuelas, especialistas y ciudadanos.
              </p>
              <p>
                Su propósito es fortalecer valores como respeto, honestidad,
                responsabilidad, empatía, autocontrol, resiliencia, tolerancia,
                inclusión y sentido comunitario.
              </p>
              <p>
                Fortaleciendo Valores busca pasar de la teoría a la práctica: no
                solo explicar qué son los valores, sino promover que puedan
                vivirse en situaciones reales de convivencia.
              </p>
            </div>
          </div>

          {/* Right — ficha rápida */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-border-subtle rounded-xl p-8 shadow-sm">
              <span className="text-[10px] font-bold tracking-[0.22em] text-[#3d815c] uppercase block mb-1">
                Fortaleciendo Valores
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

      {/* ─── LOS VALORES SE CONOCEN, PERO NO SIEMPRE SE VIVEN ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
              Los valores se conocen, pero no siempre se viven
            </h2>
            <div className="flex flex-col gap-5 text-text-soft text-base lg:text-lg leading-relaxed">
              <p>
                En la vida diaria, muchas niñas, niños y jóvenes pueden
                reconocer valores como respeto, honestidad o responsabilidad.
              </p>
              <p>
                Sin embargo, el reto no siempre está en saber nombrarlos.
              </p>
              <p className="font-semibold text-[#154c66]">
                El verdadero reto está en vivirlos.
              </p>
              <p>
                Fortaleciendo Valores parte de una preocupación social: la
                formación en valores no puede quedarse solo en discursos, clases
                aisladas o buenas intenciones.
              </p>
              <p>
                Los valores necesitan practicarse en casa, reforzarse en la
                escuela y sostenerse en la comunidad.
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
                El objetivo no es solo que las nuevas generaciones sepan qué es
                un valor. El objetivo es que puedan aplicarlo en su vida diaria.
              </p>
              <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 w-24 h-24 rounded-br-xl overflow-hidden opacity-10"
                style={{
                  background:
                    "radial-gradient(#a3d3f2 1px, transparent 1px)",
                  backgroundSize: "12px 12px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── LA FORMACIÓN EN VALORES NECESITA A LA FAMILIA, LA ESCUELA Y LA SOCIEDAD ─── */}
      <section className="py-20 lg:py-28 px-5 bg-gray-50 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
              La formación en valores necesita a la familia, la escuela y la
              sociedad
            </h2>
            <div className="flex flex-col gap-4 text-text-soft text-base lg:text-lg leading-relaxed">
              <p>
                Por eso, Fortaleciendo Valores no mira la formación cívica como
                una tarea de una sola institución.
              </p>
              <p>La entiende como una responsabilidad compartida.</p>
              <p>
                Si la familia, la escuela y la sociedad no caminan en la misma
                dirección, los esfuerzos se debilitan.
              </p>
              <p>
                Pero cuando trabajan juntas, pueden construir entornos más
                sanos, responsables y humanos.
              </p>
            </div>
          </div>

          {/* Tres bloques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                titulo: "Familia",
                copy:
                  "La familia es el primer espacio de formación.",
                acento: "bg-[#154c66]",
              },
              {
                titulo: "Escuela",
                copy:
                  "La escuela refuerza hábitos, convivencia y aprendizaje.",
                acento: "bg-[#3d815c]",
              },
              {
                titulo: "Comunidad",
                copy:
                  "La comunidad influye todos los días en lo que niñas, niños y jóvenes ven, escuchan y normalizan.",
                acento: "bg-[#154c66]/70",
              },
            ].map(({ titulo, copy, acento }) => (
              <div
                key={titulo}
                className="bg-white border border-border-subtle rounded-xl overflow-hidden shadow-sm"
              >
                <div className={`${acento} h-1.5 w-full`} />
                <div className="p-8">
                  <h3 className="font-display text-xl font-bold text-[#154c66] mb-3">
                    {titulo}
                  </h3>
                  <p className="text-text-soft text-base leading-relaxed">
                    {copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALORES QUE FORTALECEN LA CONVIVENCIA Y LA VIDA COMUNITARIA ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-border-subtle pb-8 gap-6">
            <div className="max-w-2xl">
              <FineLine />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66]">
                Valores que fortalecen la convivencia y la vida comunitaria
              </h2>
            </div>
            <p className="text-text-soft text-sm leading-relaxed max-w-xs md:text-right shrink-0">
              Fortaleciendo Valores trabaja con valores esenciales para la vida
              personal, familiar, escolar y social.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map(({ num, titulo, descripcion }) => (
              <div
                key={titulo}
                className="group relative bg-[#f8fbfe] border border-border-subtle rounded-xl overflow-hidden hover:border-[#3d815c] hover:shadow-md transition-all duration-200"
              >
                <div className="h-1 bg-[#3d815c] w-full" aria-hidden="true" />
                <div className="p-8">
                  <span className="font-display text-3xl font-bold text-[#3d815c]/50 block mb-4 leading-none">
                    {num}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#154c66] mb-3">
                    {titulo}
                  </h3>
                  <p className="text-text-soft text-sm leading-relaxed">
                    {descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PEDAGOGÍA VIVENCIAL ─── */}
      <section className="py-20 lg:py-28 px-5 bg-gray-50 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — copy */}
          <div className="lg:col-span-5">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
              Pedagogía vivencial: aprender valores desde la práctica
            </h2>
            <div className="flex flex-col gap-4 text-text-soft text-base lg:text-lg leading-relaxed mb-8">
              <p>
                Fortaleciendo Valores propone una formación práctica y cercana.
              </p>
              <p>
                No se trata únicamente de memorizar conceptos.
              </p>
              <p>
                Se trata de presentar situaciones, relatos, testimonios y
                reflexiones que ayuden a niñas, niños y jóvenes a pensar cómo
                actuarían en la vida real.
              </p>
            </div>

            {/* Texto destacado */}
            <div className="border-l-4 border-[#3d815c] pl-5 py-1">
              <p className="text-[#154c66] font-semibold text-base leading-relaxed">
                Los valores se fortalecen cuando se practican, se conversan y se
                viven en comunidad.
              </p>
            </div>
          </div>

          {/* Right — lista */}
          <div className="lg:col-span-7">
            <p className="text-[10px] font-bold tracking-[0.22em] text-[#3d815c] uppercase block mb-6">
              El enfoque puede integrar
            </p>
            <ul className="flex flex-col gap-3">
              {pedagogiaItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 bg-white border border-border-subtle rounded-lg px-6 py-4"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#3d815c] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-text-soft text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── LÍNEAS DE ACCIÓN DEL PROGRAMA ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#154c66]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <FineLine light />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
                Líneas de acción del programa
              </h2>
              <p className="text-white/75 text-base lg:text-lg leading-relaxed">
                Fortaleciendo Valores busca avanzar de la reflexión a la acción
                mediante actividades, diagnósticos, pilotos y propuestas que
                puedan fortalecer la formación cívica y de valores.
              </p>
            </div>

            <div className="lg:col-span-8">
              <p className="text-[10px] font-bold tracking-[0.22em] text-[#a3d3f2] uppercase block mb-6">
                El programa busca impulsar
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {lineasAccion.map((linea, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 p-5 bg-white border border-[#a3d3f2]/40 rounded-lg hover:border-[#3d815c] hover:shadow-lg transition-all duration-200"
                  >
                    <span className="text-sm font-bold text-[#3d815c] shrink-0 mt-0.5 font-display">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[#154c66] text-sm leading-relaxed">
                      {linea}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── UNA INICIATIVA PARA SUMAR A TODA LA COMUNIDAD EDUCATIVA ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#a3d3f2]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <FineLine />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
                Una iniciativa para sumar a toda la comunidad educativa
              </h2>
              <div className="flex flex-col gap-4 text-[#154c66]/80 text-base lg:text-lg leading-relaxed">
                <p>
                  Fortaleciendo Valores convoca a personas e instituciones
                  interesadas en la formación de nuevas generaciones.
                </p>
                <p>
                  No se necesita ser experto para acercarse.
                </p>
                <p>
                  También pueden participar personas que desean apoyar,
                  escuchar, aprender o conectar con una causa educativa y
                  social.
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
                    className="flex items-center gap-3 bg-[#154c66] rounded-lg px-5 py-3 border border-[#154c66]"
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

      {/* ─── ¿QUÉ PUEDE APORTAR FORTALECIENDO VALORES A LA COMUNIDAD? ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white border-b border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <FineLine />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
                ¿Qué puede aportar Fortaleciendo Valores a la comunidad?
              </h2>
              <div className="flex flex-col gap-4 text-text-soft text-base lg:text-lg leading-relaxed">
                <p>
                  Fortaleciendo Valores busca contribuir a una sociedad más
                  respetuosa, responsable y participativa.
                </p>
                <p>
                  Cuando niñas, niños y jóvenes fortalecen valores desde la
                  práctica, también mejora la convivencia familiar, escolar y
                  comunitaria.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-[10px] font-bold tracking-[0.22em] text-[#3d815c] uppercase block mb-6">
                El programa puede contribuir a
              </p>
              <ul className="flex flex-col gap-3">
                {aportes.map((aporte) => (
                  <li key={aporte} className="flex items-start gap-4">
                    <CheckCircle2
                      size={18}
                      className="text-[#3d815c] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-text-soft text-base leading-relaxed">
                      {aporte}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ¿CÓMO PUEDO CONOCER O APOYAR FORTALECIENDO VALORES? ─── */}
      <section className="py-20 lg:py-28 px-5 bg-gray-50 border-b border-border-subtle">
        <div className="max-w-3xl mx-auto text-center">
          <FineLine />
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
            ¿Cómo puedo conocer o apoyar Fortaleciendo Valores?
          </h2>
          <div className="flex flex-col gap-4 text-text-soft text-base lg:text-lg leading-relaxed mb-10">
            <p>
              Puedes acercarte a Fortaleciendo Valores solicitando información,
              asistiendo a actividades de Acción por los Derechos Fundamentales
              o registrando tu interés para recibir detalles sobre próximos
              avances del programa.
            </p>
            <p>
              La asociación podrá orientarte sobre actividades disponibles,
              formas de colaboración y oportunidades para participar desde tu
              experiencia o institución.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg"
            >
              Quiero recibir información
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
              href="/proximos-encuentros"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#154c66] border border-[#154c66]/30 hover:border-[#154c66] px-8 py-4 rounded-lg transition-colors"
            >
              Ver próximos encuentros
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── AVANCES DE FORTALECIENDO VALORES ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white border-b border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <FineLine />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66]">
                Avances de Fortaleciendo Valores
              </h2>
            </div>
            <Link
              href="/noticias"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3d815c] hover:text-[#154c66] transition-colors shrink-0"
            >
              Ver noticias
              <span className="h-px w-8 bg-[#3d815c]" />
            </Link>
          </div>

          {/* Card de avance */}
          <div className="max-w-md">
            <article className="group border border-border-subtle rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/eventos/fortaleciendo-valores-nino-estudiando-01.jpeg"
                  alt="Niño realizando actividades escolares del programa Fortaleciendo Valores"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 448px"
                />
              </div>
              <div className="p-7">
                <span className="text-[10px] font-bold tracking-[0.18em] text-[#3d815c] uppercase block mb-3">
                  Avances · Fortaleciendo Valores
                </span>
                <h3 className="font-display text-lg font-bold text-[#154c66] leading-snug mb-3">
                  Presentan foro &ldquo;Fortaleciendo Valores en la Educación Básica&rdquo;
                </h3>
                <p className="text-text-soft text-sm leading-relaxed mb-5">
                  El programa Fortaleciendo Valores busca promover formación
                  cívica, valores y responsabilidad social en niñas, niños y
                  jóvenes.
                </p>
                <Link
                  href="/noticias"
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#3d815c] hover:text-[#154c66] transition-colors"
                >
                  Ver noticias
                  <span className="h-px w-6 group-hover:w-10 bg-current transition-all duration-300" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 lg:py-24 px-5 bg-gray-50 border-b border-border-subtle">
        <div className="max-w-3xl mx-auto">
          <FineLine />
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-10">
            Preguntas frecuentes sobre Fortaleciendo Valores
          </h2>
          <div>
            {faq.map(({ q, a }) => (
              <details key={q} className="group border-b border-border-subtle py-5">
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
                Fortaleciendo Valores
              </span>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-[#154c66] leading-tight">
                Formar valores también es construir futuro
              </h2>
              <div className="flex flex-col gap-3 text-text-soft text-base leading-relaxed max-w-2xl">
                <p>
                  Fortaleciendo Valores busca sumar a familias, docentes,
                  instituciones y ciudadanos que creen en la importancia de
                  formar nuevas generaciones con respeto, honestidad,
                  responsabilidad y sentido comunitario.
                </p>
                <p>
                  Si quieres conocer más sobre este programa o participar desde
                  tu experiencia, puedes solicitar información a la asociación.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#3d815c] hover:bg-[#2d6347] px-8 py-4 rounded-lg transition-all hover:shadow-lg"
                >
                  Quiero recibir información
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
                Una persona del equipo podrá orientarte sobre el programa y las
                formas disponibles para acercarte.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
