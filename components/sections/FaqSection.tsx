"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Qué es Acción por los Derechos Fundamentales, A.C.?",
    answer:
      "Es una asociación civil apartidista con sede en Tijuana dedicada a promover la participación ciudadana y la defensa de los derechos fundamentales.",
  },
  {
    question:
      "¿Acción por los Derechos Fundamentales es un partido político?",
    answer:
      "No. Somos una organización ciudadana independiente y apartidista. No somos un partido ni una campaña electoral.",
  },
  {
    question: "¿Dónde está ubicada la asociación?",
    answer:
      "Nuestras oficinas se encuentran en Blvd. Agua Caliente 4558, Interior 1403-B, Col. Aviación, Tijuana, B.C.",
  },
  {
    question: "¿Qué programas tiene Acción por los Derechos Fundamentales?",
    answer:
      "Contamos con cuatro programas principales: Fortaleciendo Valores, Diálogos con la Sociedad, Vigilancia Ciudadana y Derecho de Propiedad.",
  },
  {
    question: "¿Cómo puedo participar?",
    answer:
      "Puedes sumarte como miembro activo, aliado estratégico, voluntario en programas específicos o asistiendo a nuestros encuentros públicos.",
  },
  {
    question: "¿Cuánto cuesta ser miembro?",
    answer:
      "La aportación anual para la modalidad de Miembro es de $6,000 MXN.",
  },
  {
    question: "¿Cuánto cuesta ser aliado estratégico?",
    answer:
      "La aportación anual para Aliados Estratégicos es de $12,000 MXN.",
  },
  {
    question: "¿Puedo apoyar solo un programa específico?",
    answer:
      "Sí, contamos con la modalidad de apoyo a programas específicos para quienes desean dirigir su contribución a una causa particular.",
  },
  {
    question: "¿La asociación emite factura?",
    answer:
      "Sí, como Asociación Civil legalmente constituida, emitimos los comprobantes fiscales correspondientes por las aportaciones recibidas.",
  },
  {
    question: "¿En cuánto tiempo me contactan después de enviar mis datos?",
    answer:
      "Un integrante de nuestro equipo se pondrá en contacto contigo en un lapso máximo de 24 horas hábiles.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 px-5 bg-white border-b border-border-subtle">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left: label + heading */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
          <span className="text-[10px] font-bold tracking-[0.22em] text-brand-green uppercase block mb-3">
            FAQ
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight text-text-blue">
            Preguntas frecuentes
          </h2>
        </div>

        {/* Right: accordion */}
        <div className="lg:col-span-8">
          <dl>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border-b border-brand-blue/30 last:border-b-0"
                >
                  <dt>
                    <button
                      className="w-full flex justify-between items-center text-left py-5 font-semibold text-base text-text-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
                      aria-expanded={isOpen}
                      onClick={() => toggle(index)}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`shrink-0 ml-4 text-text-blue/40 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-brand-green" : ""
                        }`}
                        size={20}
                        aria-hidden="true"
                      />
                    </button>
                  </dt>
                  <dd
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-64 pb-5" : "max-h-0"
                    }`}
                  >
                    <p className="text-text-soft text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
