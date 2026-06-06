import type { Metadata } from "next";
import type React from "react";
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
  title: "Derecho de Propiedad | Certeza jurídica y patrimonio en Tijuana",
  description:
    "Derecho de Propiedad es un programa de Acción por los Derechos Fundamentales, A.C. enfocado en certeza jurídica, defensa del patrimonio y desarrollo urbano en Tijuana.",
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
      "Ciudadanos, propietarios, empresarios, profesionistas, especialistas, instituciones y personas interesadas en certeza jurídica, patrimonio y desarrollo urbano.",
  },
  {
    icon: Target,
    label: "Propósito",
    value:
      "Promover la importancia del derecho de propiedad, la certeza jurídica y la defensa del patrimonio.",
  },
  {
    icon: Lightbulb,
    label: "Enfoque",
    value:
      "Abrir espacios de análisis, diálogo y participación sobre el impacto social, económico y urbano del derecho de propiedad.",
  },
  {
    icon: BookOpen,
    label: "Participan",
    value:
      "Ciudadanos, empresarios, profesionistas, especialistas, instituciones y líderes interesados en patrimonio, inversión, legalidad y comunidad.",
  },
];

const temas = [
  "Derecho de propiedad",
  "Certeza jurídica",
  "Patrimonio familiar",
  "Patrimonio empresarial",
  "Desarrollo urbano",
  "Planeación urbana",
  "Inversión y confianza",
  "Impacto social de decisiones públicas",
  "Relación entre propiedad, ciudad y comunidad",
  "Diálogo entre ciudadanía, especialistas e instituciones",
];

const participantes = [
  "Ciudadanos interesados en proteger su patrimonio.",
  "Propietarios.",
  "Empresarios e inversionistas.",
  "Profesionistas relacionados con derecho, urbanismo, construcción, arquitectura, desarrollo inmobiliario o economía.",
  "Instituciones y organizaciones.",
  "Especialistas en temas urbanos o jurídicos.",
  "Personas interesadas en derechos fundamentales, legalidad y comunidad.",
];

const aportaciones = [
  "Promover cultura de certeza jurídica.",
  "Fortalecer la conversación sobre patrimonio y comunidad.",
  "Abrir espacios de análisis sobre desarrollo urbano.",
  "Acercar temas jurídicos y urbanos a la ciudadanía.",
  "Vincular ciudadanos, empresarios, profesionistas, especialistas e instituciones.",
  "Impulsar diálogo sobre propiedad, inversión y bienestar comunitario.",
  "Relacionar el derecho de propiedad con la defensa de derechos fundamentales.",
];

const faq: Array<{ q: string; a: React.ReactNode }> = [
  {
    q: "¿Qué es el programa Derecho de Propiedad?",
    a: "Derecho de Propiedad es un programa de Acción por los Derechos Fundamentales, A.C. orientado a promover la importancia de la certeza jurídica, la defensa del patrimonio y su relación con el desarrollo urbano.",
  },
  {
    q: "¿Quién impulsa Derecho de Propiedad?",
    a: "El programa es impulsado por Acción por los Derechos Fundamentales, A.C., asociación civil apartidista con sede en Tijuana, Baja California.",
  },
  {
    q: "¿Por qué es importante el derecho de propiedad?",
    a: "Porque el derecho de propiedad se relaciona con el patrimonio, la inversión, la seguridad jurídica, el desarrollo urbano y la estabilidad de familias, empresas y comunidades.",
  },
  {
    q: "¿A quién está dirigido el programa?",
    a: "Está dirigido a ciudadanos, propietarios, empresarios, profesionistas, especialistas, instituciones y personas interesadas en certeza jurídica, patrimonio y desarrollo urbano.",
  },
  {
    q: "¿El programa es solo para especialistas?",
    a: "No. El programa busca acercar estos temas a la ciudadanía de forma clara y participativa, aunque también puede convocar a especialistas, profesionistas e instituciones.",
  },
  {
    q: "¿Qué temas puede abordar Derecho de Propiedad?",
    a: "Puede abordar temas como derecho de propiedad, certeza jurídica, patrimonio familiar y empresarial, desarrollo urbano, inversión, legalidad e impacto social de decisiones públicas.",
  },
  {
    q: "¿Dónde se impulsa este programa?",
    a: "El programa se impulsa desde Tijuana, Baja California.",
  },
  {
    q: "¿Puedo solicitar información aunque no sea miembro?",
    a: "Sí. Puedes solicitar información sobre el programa o acercarte a próximos encuentros de Acción por los Derechos Fundamentales.",
  },
  {
    q: "¿Cómo puedo pedir más información?",
    a: (
      <>
        Puedes contactar a Acción por los Derechos Fundamentales al correo{" "}
        <a
          href="mailto:contacto@asociacionaccion.com"
          className="text-[#3d815c] underline hover:text-[#154c66] transition-colors"
        >
          contacto@asociacionaccion.com
        </a>{" "}
        o desde la página de Contacto.
      </>
    ),
  },
];

export default function DerechoDePropiedad() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-[88vh] min-h-[580px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/eventos/derecho-propiedad-pancartas-uso-suelo-lomas-agua-caliente-01.jpeg"
            alt="Pancartas ciudadanas sobre uso de suelo en Lomas Agua Caliente"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#154c66]/50 via-[#154c66]/30 to-[#154c66]/80" />
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
            Derecho de Propiedad
          </h1>
          <p
            className="text-lg lg:text-xl text-white/85 font-semibold leading-snug max-w-2xl mx-auto mb-10"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.35)" }}
          >
            Certeza jurídica, patrimonio y desarrollo urbano
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

      {/* ─── INTRO HERO TRANSITION ─── */}
      <section className="py-16 lg:py-20 px-5 bg-white border-b border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="font-display text-xl lg:text-2xl font-bold text-[#154c66] mb-6 border-l-4 border-[#3d815c] pl-5 leading-snug">
              Derecho de Propiedad es un programa de Acción por los Derechos
              Fundamentales, A.C. orientado a promover la importancia de la
              certeza jurídica, la defensa del patrimonio y su relación con el
              desarrollo urbano.
            </p>
            <div className="flex flex-col gap-4 text-text-soft text-base lg:text-lg leading-relaxed">
              <p>
                La propiedad, la inversión y el orden urbano son temas que
                impactan directamente a familias, empresas, comunidades e
                instituciones.
              </p>
              <p>
                Este programa busca abrir espacios de análisis, diálogo y
                participación alrededor del derecho de propiedad, con una visión
                ciudadana e institucional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ¿QUÉ ES? + FICHA RÁPIDA ─── */}
      <section className="py-20 lg:py-28 px-5 bg-gray-50 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
              ¿Qué es Derecho de Propiedad?
            </h2>
            <div className="flex flex-col gap-5 text-text-soft text-base lg:text-lg leading-relaxed">
              <p>
                Derecho de Propiedad es un programa de Acción por los Derechos
                Fundamentales, A.C. enfocado en la importancia del patrimonio,
                la certeza jurídica y el desarrollo urbano.
              </p>
              <p>
                Su propósito es generar conciencia sobre cómo las decisiones
                públicas, la planeación urbana, la regulación y la seguridad
                jurídica pueden impactar la vida de las personas, las familias,
                las empresas y la comunidad.
              </p>
              <p>
                El programa busca promover conversación, análisis y
                participación ciudadana sobre temas relacionados con propiedad,
                patrimonio, inversión, desarrollo urbano y derechos
                fundamentales.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white border border-border-subtle rounded-xl p-8 shadow-sm">
              <span className="text-[10px] font-bold tracking-[0.22em] text-[#3d815c] uppercase block mb-1">
                Derecho de Propiedad
              </span>
              <h3 className="font-display text-xl font-bold text-[#154c66] mb-6 pb-4 border-b border-border-subtle">
                En una mirada
              </h3>
              <ul className="flex flex-col gap-5">
                {fichaItems.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-[#a3d3f2]/30 flex items-center justify-center">
                      <Icon
                        size={16}
                        className="text-[#154c66]"
                        aria-hidden="true"
                      />
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

      {/* ─── EL PATRIMONIO TAMBIÉN NECESITA CERTEZA ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
              El patrimonio también necesita certeza
            </h2>
            <div className="flex flex-col gap-5 text-text-soft text-base lg:text-lg leading-relaxed">
              <p>
                El derecho de propiedad no es un tema lejano ni exclusivo de
                especialistas.
              </p>
              <p>Tiene relación directa con la vida diaria de las personas.</p>
              <p>
                Cuando una familia protege su patrimonio, cuando una empresa
                invierte, cuando una comunidad crece o cuando una ciudad se
                desarrolla, la certeza jurídica se vuelve fundamental.
              </p>
              <p>Sin certeza, hay incertidumbre.</p>
              <p>
                Con certeza, hay mayor confianza, orden y posibilidad de
                desarrollo.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-16">
            <div className="relative bg-[#154c66] rounded-xl p-8 lg:p-10">
              <Quote
                size={32}
                className="text-[#a3d3f2] mb-6 opacity-80"
                aria-hidden="true"
              />
              <p className="font-display text-lg lg:text-xl font-bold text-white leading-relaxed">
                La certeza jurídica protege el patrimonio y fortalece la
                confianza de familias, empresas y comunidades.
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

      {/* ─── ¿POR QUÉ ES IMPORTANTE? ─── */}
      <section className="py-20 lg:py-28 px-5 bg-gray-50 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <FineLine />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
              ¿Por qué es importante este programa?
            </h2>
            <div className="flex flex-col gap-5 text-text-soft text-base lg:text-lg leading-relaxed mb-8">
              <p>
                Porque el derecho de propiedad impacta la estabilidad de las
                familias, la confianza de los inversionistas, el desarrollo de
                las empresas y el crecimiento ordenado de la ciudad.
              </p>
              <p>La propiedad no solo representa un bien material.</p>
              <p>
                También puede representar esfuerzo, ahorro, inversión,
                seguridad familiar, actividad económica y proyecto de vida.
              </p>
              <p>
                Por eso, hablar de derecho de propiedad es hablar también de
                derechos fundamentales, certeza jurídica, desarrollo urbano y
                bienestar comunitario.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 gap-3">
              {[
                { num: "01", label: "Estabilidad familiar" },
                { num: "02", label: "Confianza inversionista" },
                { num: "03", label: "Desarrollo empresarial" },
                { num: "04", label: "Crecimiento urbano" },
                { num: "05", label: "Certeza jurídica" },
                { num: "06", label: "Bienestar comunitario" },
              ].map(({ num, label }) => (
                <div
                  key={num}
                  className="bg-white border border-border-subtle rounded-xl p-5 flex flex-col gap-2 shadow-sm"
                >
                  <span className="font-display text-2xl font-bold text-[#3d815c]/30 leading-none">
                    {num}
                  </span>
                  <span className="text-xs font-semibold text-[#154c66] leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEMAS ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-border-subtle pb-8 gap-6">
            <div className="max-w-2xl">
              <FineLine />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66]">
                Temas que puede abordar el programa
              </h2>
            </div>
            <p className="text-text-soft text-sm leading-relaxed max-w-xs md:text-right shrink-0">
              Derecho de Propiedad puede abrir conversaciones y espacios de
              análisis sobre temas relacionados con patrimonio, legalidad,
              inversión y ciudad.
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

      {/* ─── UNA VISIÓN CIUDADANA E INSTITUCIONAL ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#154c66]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/eventos/derecho-propiedad-uso-suelo-lomas-agua-caliente-cartel-01.jpeg"
                alt="Cartel ciudadano sobre uso de suelo en Lomas Agua Caliente"
                width={700}
                height={520}
                className="object-cover w-full"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-[#a3d3f2]/40 pointer-events-none hidden xl:block"
            />
          </div>

          <div className="lg:col-span-7 lg:pl-8 order-1 lg:order-2">
            <FineLine light />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-8">
              Una visión ciudadana e institucional
            </h2>
            <div className="flex flex-col gap-4 text-white/75 text-base lg:text-lg leading-relaxed mb-8">
              <p>
                Derecho de Propiedad busca tratar estos temas desde una
                perspectiva clara, seria y participativa.
              </p>
              <p>
                El objetivo no es convertir la conversación en un debate técnico
                inaccesible.
              </p>
              <p>
                El objetivo es acercar el tema a ciudadanos, empresarios,
                profesionistas e instituciones que desean comprender mejor cómo
                el derecho de propiedad se relaciona con su vida, su patrimonio
                y su entorno urbano.
              </p>
              <p>
                Cuando estos temas se explican con claridad, más personas pueden
                participar de forma informada.
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

      {/* ─── ¿A QUIÉN CONVOCA? ─── */}
      <section className="py-20 lg:py-28 px-5 bg-[#a3d3f2]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <FineLine />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
                ¿A quién convoca Derecho de Propiedad?
              </h2>
              <div className="flex flex-col gap-4 text-[#154c66]/80 text-base lg:text-lg leading-relaxed">
                <p>
                  Este programa convoca a personas e instituciones interesadas
                  en la certeza jurídica, el patrimonio y el desarrollo urbano.
                </p>
                <p>No necesitas ser especialista para acercarte.</p>
                <p>
                  Puedes participar si quieres comprender mejor el tema, recibir
                  información o formar parte de espacios de diálogo relacionados
                  con patrimonio y desarrollo urbano.
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

      {/* ─── ¿QUÉ PUEDE APORTAR? ─── */}
      <section className="py-20 lg:py-28 px-5 bg-gray-50 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-border-subtle pb-8 gap-6">
            <div className="max-w-2xl">
              <FineLine />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66]">
                ¿Qué puede aportar este programa a la comunidad?
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="flex flex-col gap-5 text-text-soft text-base lg:text-lg leading-relaxed">
                <p>
                  Derecho de Propiedad busca contribuir a una conversación más
                  clara sobre la importancia de la certeza jurídica y el
                  desarrollo urbano ordenado.
                </p>
                <p>
                  Cuando la ciudadanía comprende mejor estos temas, puede
                  participar con más información en conversaciones que afectan
                  su patrimonio, su comunidad y su ciudad.
                </p>
                <p>El programa puede contribuir a:</p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aportaciones.map((item, i) => (
                  <div
                    key={i}
                    className="group relative bg-white border border-border-subtle rounded-xl overflow-hidden hover:border-[#3d815c] hover:shadow-md transition-all duration-200"
                  >
                    <div
                      className="h-1 bg-[#3d815c] w-full"
                      aria-hidden="true"
                    />
                    <div className="p-6">
                      <span className="font-display text-2xl font-bold text-[#3d815c]/30 block mb-3 leading-none">
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
          </div>
        </div>
      </section>

      {/* ─── ¿CÓMO PARTICIPAR? ─── */}
      <section className="py-20 lg:py-28 px-5 bg-white border-b border-border-subtle">
        <div className="max-w-3xl mx-auto text-center">
          <FineLine />
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-8">
            ¿Cómo puedo conocer o participar en Derecho de Propiedad?
          </h2>
          <div className="flex flex-col gap-4 text-text-soft text-base lg:text-lg leading-relaxed mb-10">
            <p>
              Puedes acercarte al programa Derecho de Propiedad solicitando
              información, asistiendo a actividades de Acción por los Derechos
              Fundamentales o registrando tu interés para recibir detalles sobre
              próximos avances.
            </p>
            <p>
              La asociación podrá orientarte sobre actividades disponibles,
              temas relacionados y formas de participación.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-3 flex-wrap">
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

      {/* ─── NOTICIAS Y AVANCES ─── */}
      <section className="py-20 lg:py-28 px-5 bg-gray-50 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <FineLine />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66]">
                Noticias y avances de Derecho de Propiedad
              </h2>
              <p className="text-text-soft text-base leading-relaxed mt-2 max-w-xl">
                En esta sección se podrán publicar notas sobre actividades,
                análisis, encuentros, comunicados o avances relacionados con
                Derecho de Propiedad.
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
            {/* Cobertura ciudadana — primera card */}
            <article className="group border border-border-subtle rounded-xl overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/eventos/derecho-propiedad-uso-suelo-lomas-agua-caliente-cartel-01.jpeg"
                  alt="Cartel ciudadano sobre uso de suelo en Lomas Agua Caliente"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold tracking-[0.18em] text-[#3d815c] uppercase block mb-3">
                  Avances · Derecho de Propiedad
                </span>
                <h3 className="font-display text-base font-bold text-[#154c66] leading-snug mb-3">
                  Cobertura ciudadana sobre uso de suelo en Lomas Agua Caliente
                </h3>
                <p className="text-text-soft text-sm leading-relaxed">
                  Registro visual relacionado con temas de uso de suelo,
                  desarrollo urbano y participación ciudadana vinculados al
                  programa Derecho de Propiedad.
                </p>
              </div>
            </article>

            {/* Próximas noticias */}
            <div className="border border-dashed border-[#a3d3f2] rounded-xl p-10 bg-[#f8fbfe] flex flex-col items-center justify-center text-center min-h-[220px] gap-3">
              <span className="text-[10px] font-bold tracking-[0.22em] text-[#3d815c] uppercase">
                Próximamente
              </span>
              <p className="text-text-soft text-sm leading-relaxed">
                Próximamente compartiremos noticias, actividades y avances del
                programa Derecho de Propiedad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 lg:py-24 px-5 bg-white border-b border-border-subtle">
        <div className="max-w-3xl mx-auto">
          <FineLine />
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66] mb-10">
            Preguntas frecuentes sobre Derecho de Propiedad
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
                Derecho de Propiedad
              </span>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-[#154c66] leading-tight">
                Proteger el patrimonio también es construir comunidad
              </h2>
              <div className="flex flex-col gap-3 text-text-soft text-base leading-relaxed max-w-2xl">
                <p>
                  Derecho de Propiedad busca abrir conversaciones necesarias
                  sobre certeza jurídica, patrimonio y desarrollo urbano.
                </p>
                <p>
                  Si quieres conocer más sobre este programa o recibir
                  información sobre próximas actividades, puedes contactar a la
                  asociación.
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
