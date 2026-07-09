import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
  ArrowRight,
  Plus,
  MapPin,
  Users,
  Target,
  Lightbulb,
  BookOpen,
  Quote,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Vigilancia Ciudadana | Participación responsable y legalidad en Tijuana",
  description:
    "Vigilancia Ciudadana es un programa de Acción por los Derechos Fundamentales, A.C. para promover participación responsable, documentación con evidencia, legalidad y vida democrática en Tijuana.",
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
      "Ciudadanos, profesionistas, empresarios, estudiantes, organizaciones e instituciones interesadas en legalidad, participación ciudadana y vida democrática.",
  },
  {
    icon: Target,
    label: "Propósito",
    value:
      "Promover participación responsable, observación ciudadana, documentación con evidencia y defensa de la vida democrática.",
  },
  {
    icon: Lightbulb,
    label: "Enfoque",
    value:
      "Actuar con responsabilidad, evidencia y legalidad, evitando la especulación y la confrontación innecesaria.",
  },
  {
    icon: BookOpen,
    label: "Participan",
    value:
      "Ciudadanos, líderes sociales, profesionistas, empresarios, estudiantes, organizaciones civiles e instituciones interesadas en fortalecer la participación pública.",
  },
];

const loQueBusca = [
  "Participación ciudadana informada.",
  "Observación responsable de procesos públicos.",
  "Documentación con evidencia.",
  "Cultura de legalidad.",
  "Responsabilidad cívica.",
  "Confianza institucional.",
  "Defensa de la vida democrática.",
  "Participación sin especulación.",
  "Organización ciudadana.",
  "Vinculación entre ciudadanía, profesionistas, empresarios, estudiantes e instituciones.",
];

const lineasAccion = [
  "Orientación ciudadana sobre participación responsable.",
  "Capacitación sobre observación y documentación.",
  "Espacios de análisis sobre legalidad y vida democrática.",
  "Protocolos básicos para registrar información con evidencia.",
  "Vinculación con ciudadanos, profesionistas, empresarios y estudiantes.",
  "Promoción de cultura cívica y responsabilidad social.",
  "Participación organizada antes, durante y después de procesos relevantes.",
  "Difusión de información clara y verificable.",
];

const participantes = [
  "Ciudadanos interesados en legalidad y democracia.",
  "Profesionistas con vocación cívica.",
  "Empresarios interesados en certeza institucional.",
  "Estudiantes y jóvenes.",
  "Organizaciones ciudadanas.",
  "Líderes sociales.",
  "Personas interesadas en observar, documentar y participar responsablemente.",
  "Instituciones interesadas en cultura cívica y participación social.",
];

const aportes = [
  "Fortalecer la cultura de legalidad.",
  "Promover participación ciudadana informada.",
  "Impulsar responsabilidad cívica.",
  "Fomentar documentación con evidencia.",
  "Reducir la indiferencia ciudadana.",
  "Crear espacios de organización responsable.",
  "Fortalecer la confianza institucional.",
  "Promover una vida democrática más participativa.",
];

const faq = [
  {
    q: "¿Qué es Vigilancia Ciudadana?",
    a: "Vigilancia Ciudadana es un programa de Acción por los Derechos Fundamentales, A.C. orientado a promover participación responsable, observación ciudadana, documentación con evidencia, legalidad y defensa de la vida democrática.",
  },
  {
    q: "¿Quién impulsa Vigilancia Ciudadana?",
    a: "El programa es impulsado por Acción por los Derechos Fundamentales, A.C., asociación civil apartidista con sede en Tijuana, Baja California.",
  },
  {
    q: "¿Vigilancia Ciudadana es una campaña política?",
    a: "No. Vigilancia Ciudadana no es una campaña política ni promueve candidaturas. Es un programa ciudadano y apartidista enfocado en legalidad, participación responsable y vida democrática.",
  },
  {
    q: "¿A quién está dirigido el programa?",
    a: "Está dirigido a ciudadanos, profesionistas, empresarios, estudiantes, organizaciones e instituciones interesadas en participación ciudadana, legalidad y vida democrática.",
  },
  {
    q: "¿Qué significa participar con evidencia?",
    a: "Significa observar, registrar y documentar información de forma responsable, evitando rumores, especulación o señalamientos sin sustento.",
  },
  {
    q: "¿Necesito experiencia previa para participar?",
    a: "No necesariamente. Puedes acercarte para recibir información, conocer actividades y aprender sobre formas responsables de participación ciudadana.",
  },
  {
    q: "¿Dónde se impulsa Vigilancia Ciudadana?",
    a: "El programa se impulsa desde Tijuana, Baja California.",
  },
  {
    q: "¿Pueden participar estudiantes?",
    a: "Sí. Estudiantes y jóvenes pueden participar si tienen interés en cultura cívica, legalidad y participación ciudadana responsable.",
  },
  {
    q: "¿Pueden participar empresarios o profesionistas?",
    a: "Sí. Empresarios y profesionistas pueden participar desde su experiencia, liderazgo, conocimiento técnico o interés en fortalecer la legalidad y la confianza institucional.",
  },
  {
    q: "¿Cómo puedo pedir más información?",
    a: "Puedes contactar a Acción por los Derechos Fundamentales al correo contacto@asociacionaccion.com o desde la página de Contacto.",
  },
];

export default function VigilanciaCiudadanaPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Programas", href: "/programas" },
          { label: "Vigilancia Ciudadana" },
        ]}
      />

      {/* ─── HERO ─── */}
      <section className="relative h-[88vh] min-h-[580px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/eventos/vigilancia-ciudadana-mesa-trabajo-01.jpeg"
            alt="Mesa de trabajo del programa Vigilancia Ciudadana"
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
            Vigilancia Ciudadana
          </h1>
          <p
            className="text-lg lg:text-xl text-white/85 font-semibold leading-snug max-w-2xl mx-auto mb-10"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.35)" }}
          >
            Participación responsable, legalidad y defensa de la vida democrática
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

      {/* ─── ¿QUÉ ES VIGILANCIA CIUDADANA? + FICHA RÁPIDA ─── */}
      <section className="py-20 lg:py-28 px-5 bg-gray-50 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — copy */}
          <div className="lg:col-span-7">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
              ¿Qué es Vigilancia Ciudadana?
            </h2>
            <div className="flex flex-col gap-5 text-text-soft text-base lg:text-lg leading-relaxed">
              <p>
                Vigilancia Ciudadana es un programa de Acción por los Derechos
                Fundamentales, A.C. que promueve la participación organizada de
                ciudadanos interesados en fortalecer la legalidad, la vida
                democrática y la confianza en las instituciones.
              </p>
              <p>
                El programa impulsa una ciudadanía más atenta, informada y
                comprometida con observar, documentar y participar de manera
                responsable.
              </p>
              <p>
                Vigilancia Ciudadana parte de una idea central: la democracia y
                la legalidad no se fortalecen solo con opiniones o quejas
                aisladas. También requieren ciudadanos presentes, informados y
                organizados.
              </p>
            </div>
          </div>

          {/* Right — ficha rápida */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-border-subtle rounded-xl p-8 shadow-sm">
              <span className="text-[10px] font-bold tracking-[0.22em] text-[#3d815c] uppercase block mb-1">
                Vigilancia Ciudadana
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

      {/* ─── LA PARTICIPACIÓN NO TERMINA EN LA OPINIÓN ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
              La participación no termina en la opinión
            </h2>
            <div className="flex flex-col gap-5 text-text-soft text-base lg:text-lg leading-relaxed">
              <p>
                Muchas personas se sienten preocupadas por la legalidad, la
                calidad de las instituciones, la confianza pública o los
                procesos democráticos.
              </p>
              <p>
                Sin embargo, la preocupación por sí sola no siempre genera
                cambio.
              </p>
              <p>
                Vigilancia Ciudadana busca ayudar a que esa preocupación se
                convierta en participación responsable.
              </p>
              <p>Participar no significa solo opinar.</p>
              <p>
                También significa observar, documentar, aprender, organizarse y
                actuar con sentido de responsabilidad social.
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
                Una ciudadanía informada y organizada puede cuidar mejor la
                legalidad, la confianza institucional y la vida democrática.
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
      <section className="py-20 lg:py-28 px-5 bg-[#154c66]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <FineLine light />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-8">
                ¿Por qué es importante este programa?
              </h2>
              <div className="flex flex-col gap-5 text-white/75 text-base lg:text-lg leading-relaxed">
                <p>
                  Porque la democracia, la legalidad y las instituciones
                  necesitan ciudadanos presentes.
                </p>
                <p>
                  Cuando las personas se alejan de los temas públicos, crece la
                  indiferencia y se debilita la participación social.
                </p>
                <p>
                  Vigilancia Ciudadana busca fortalecer una cultura de
                  participación responsable, donde los ciudadanos puedan
                  involucrarse sin improvisación, sin rumores y sin intereses
                  partidistas.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 lg:pt-16">
              <div className="flex flex-col gap-5 text-white/75 text-base lg:text-lg leading-relaxed mb-8">
                <p className="text-white font-semibold text-lg lg:text-xl leading-snug">
                  La vida democrática no pertenece solo a gobiernos, partidos o
                  autoridades.
                </p>
                <p>También corresponde a la ciudadanía.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Participación informada", desc: "Sin improvisación ni rumores." },
                  { label: "Cultura de legalidad", desc: "Con evidencia y criterios claros." },
                  { label: "Defensa democrática", desc: "Desde la ciudadanía organizada." },
                ].map(({ label, desc }) => (
                  <div
                    key={label}
                    className="bg-white/10 border border-white/15 rounded-xl p-5"
                  >
                    <p className="text-white font-semibold text-sm mb-2 leading-snug">
                      {label}
                    </p>
                    <p className="text-white/60 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LO QUE BUSCA PROMOVER VIGILANCIA CIUDADANA ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white border-y border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-8 border-b border-border-subtle gap-6">
            <div className="max-w-2xl">
              <FineLine />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66]">
                Lo que busca promover Vigilancia Ciudadana
              </h2>
            </div>
            <p className="text-text-soft text-sm leading-relaxed max-w-xs md:text-right shrink-0">
              El programa busca formar y organizar participación ciudadana desde
              una perspectiva responsable, documentada y apartidista.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 max-w-5xl">
            {loQueBusca.map((item, i) => (
              <span
                key={i}
                className={`px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-default ${
                  i % 2 === 0 ? "bg-[#154c66]" : "bg-[#3d815c]"
                }`}
              >
                {item.replace(/\.$/, "")}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTICIPAR CON EVIDENCIA, NO CON RUMORES ─── */}
      <section className="py-20 lg:py-28 px-5 bg-gray-50 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
              Participar con evidencia, no con rumores
            </h2>
            <div className="flex flex-col gap-5 text-text-soft text-base lg:text-lg leading-relaxed">
              <p>
                Uno de los principios centrales de Vigilancia Ciudadana es la
                documentación responsable.
              </p>
              <p>
                La participación ciudadana debe construirse con información
                clara, evidencia verificable y criterios de legalidad.
              </p>
              <p>
                Esto permite evitar rumores, confusión o señalamientos sin
                sustento.
              </p>
              <p>
                El programa busca promover una cultura donde la ciudadanía pueda
                observar, registrar y participar de manera seria, ordenada y
                responsable.
              </p>
            </div>
          </div>

          {/* Highlight box */}
          <div className="lg:col-span-5 lg:pt-16">
            <div className="bg-white border border-border-subtle rounded-xl p-8 shadow-sm">
              <div className="h-1 bg-[#3d815c] w-full mb-8 -mt-8 -mx-8 rounded-t-xl" style={{ width: "calc(100% + 64px)" }} />
              <div className="border-l-4 border-[#3d815c] pl-6 py-2">
                <p className="font-display text-lg font-bold text-[#154c66] leading-relaxed">
                  La participación ciudadana gana fuerza cuando se apoya en
                  evidencia, legalidad y responsabilidad.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                {["Observar", "Documentar", "Participar responsablemente"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="w-2 h-2 rounded-full bg-[#3d815c] shrink-0"
                      />
                      <span className="text-sm font-semibold text-[#154c66]">
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── UNA INICIATIVA CIUDADANA Y APARTIDISTA ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/eventos/vigilancia-ciudadana-mesa-trabajo-01.jpeg"
                alt="Mesa de trabajo ciudadana para análisis y participación responsable"
                width={700}
                height={520}
                className="object-cover w-full"
              />
            </div>
            <div
              aria-hidden="true"
              className="mt-4 flex items-center gap-3 pl-1"
            >
              <span className="w-8 h-px bg-[#3d815c]" />
              <span className="text-[10px] font-bold tracking-[0.22em] text-[#3d815c] uppercase">
                Asociación civil apartidista
              </span>
            </div>
          </div>

          {/* Right — copy */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
              Una iniciativa ciudadana y apartidista
            </h2>
            <div className="flex flex-col gap-4 text-text-soft text-base lg:text-lg leading-relaxed">
              <p>
                Vigilancia Ciudadana forma parte de Acción por los Derechos
                Fundamentales, A.C., una asociación civil apartidista.
              </p>
              <div className="my-2 flex flex-col gap-2">
                {[
                  "Este programa no es una campaña electoral.",
                  "No promueve candidaturas.",
                  "No representa intereses de ningún partido político.",
                ].map((line) => (
                  <p key={line} className="font-semibold text-[#154c66]">
                    {line}
                  </p>
                ))}
              </div>
              <p>
                Su propósito es fortalecer la cultura cívica, la legalidad, la
                participación responsable y la defensa de la vida democrática
                desde la ciudadanía organizada.
              </p>
              <p>
                Participar en Vigilancia Ciudadana no significa militar en un
                partido.
              </p>
              <p>
                Significa asumir que la legalidad y la vida pública también
                necesitan ciudadanos informados y responsables.
              </p>
            </div>
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
                Vigilancia Ciudadana puede desarrollarse a través de actividades
                formativas, espacios de organización y mecanismos de
                participación responsable.
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[10px] font-bold tracking-[0.22em] text-[#a3d3f2] uppercase block mb-6">
                El programa puede impulsar
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

      {/* ─── ¿A QUIÉN CONVOCA VIGILANCIA CIUDADANA? ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#a3d3f2]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <FineLine />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
                ¿A quién convoca Vigilancia Ciudadana?
              </h2>
              <div className="flex flex-col gap-4 text-[#154c66]/80 text-base lg:text-lg leading-relaxed">
                <p>
                  Vigilancia Ciudadana está dirigido a personas interesadas en
                  participar de manera seria y responsable en temas de
                  legalidad, instituciones y vida democrática.
                </p>
                <p>No necesitas ser experto para acercarte.</p>
                <p>
                  Puedes participar si deseas aprender, informarte, observar,
                  documentar o colaborar desde tu experiencia ciudadana.
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

      {/* ─── ¿QUÉ PUEDE APORTAR VIGILANCIA CIUDADANA A LA COMUNIDAD? ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white border-b border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <FineLine />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
                ¿Qué puede aportar Vigilancia Ciudadana a la comunidad?
              </h2>
              <div className="flex flex-col gap-4 text-text-soft text-base lg:text-lg leading-relaxed">
                <p>
                  Vigilancia Ciudadana busca fortalecer una cultura de
                  participación pública más seria, informada y responsable.
                </p>
                <p>
                  Cuando la ciudadanía participa con evidencia y legalidad, se
                  fortalece la confianza, se reducen los rumores y se abren
                  mejores caminos para la colaboración social.
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

      {/* ─── ¿CÓMO PUEDO CONOCER O PARTICIPAR? ─── */}
      <section className="py-20 lg:py-28 px-5 bg-gray-50 border-b border-border-subtle">
        <div className="max-w-3xl mx-auto text-center">
          <FineLine />
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
            ¿Cómo puedo conocer o participar en Vigilancia Ciudadana?
          </h2>
          <div className="flex flex-col gap-4 text-text-soft text-base lg:text-lg leading-relaxed mb-10">
            <p>
              Puedes acercarte a Vigilancia Ciudadana solicitando información,
              asistiendo a actividades de Acción por los Derechos Fundamentales
              o registrando tu interés para conocer próximos pasos del programa.
            </p>
            <p>
              La asociación podrá orientarte sobre actividades disponibles,
              formas de colaboración y oportunidades para participar desde tu
              experiencia ciudadana, profesional, empresarial, estudiantil o
              institucional.
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

      {/* ─── NOTICIAS Y AVANCES DE VIGILANCIA CIUDADANA ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white border-b border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <FineLine />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66]">
                Noticias y avances de Vigilancia Ciudadana
              </h2>
              <p className="text-text-soft text-base leading-relaxed mt-2 max-w-xl">
                En esta sección se podrán publicar notas sobre actividades,
                capacitaciones, encuentros, comunicados, avances y materiales
                relacionados con Vigilancia Ciudadana.
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

          {/* Placeholder */}
          <div className="border border-dashed border-border-subtle rounded-2xl p-16 lg:p-24 text-center bg-gray-50 max-w-2xl">
            <div className="w-14 h-14 rounded-full bg-[#a3d3f2]/30 flex items-center justify-center mx-auto mb-6">
              <span
                aria-hidden="true"
                className="w-6 h-6 rounded-full border-2 border-[#154c66]/40"
              />
            </div>
            <h3 className="font-display text-lg font-bold text-[#154c66] mb-3">
              Próximamente compartiremos noticias, actividades y avances del
              programa Vigilancia Ciudadana.
            </h3>
            <p className="text-text-soft text-sm leading-relaxed max-w-md mx-auto">
              Las noticias ayudan a documentar el trabajo del programa, compartir
              información útil y mantener informada a la comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 lg:py-24 px-5 bg-gray-50 border-b border-border-subtle">
        <div className="max-w-3xl mx-auto">
          <FineLine />
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-10">
            Preguntas frecuentes sobre Vigilancia Ciudadana
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
                Vigilancia Ciudadana
              </span>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-[#154c66] leading-tight">
                Participar también es cuidar la vida democrática
              </h2>
              <div className="flex flex-col gap-3 text-text-soft text-base leading-relaxed max-w-2xl">
                <p>
                  Vigilancia Ciudadana busca sumar a personas que creen en la
                  importancia de la legalidad, la responsabilidad pública y la
                  participación informada.
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
