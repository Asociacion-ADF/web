"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

const inputBase =
  "w-full px-5 py-4 bg-gray-50 border border-border-subtle rounded-xl focus:ring-2 focus:ring-[#3d815c]/20 focus:border-[#3d815c] outline-none transition-all placeholder:text-gray-400 text-sm";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center text-center py-14 gap-5">
        <CheckCircle className="text-[#3d815c]" size={52} aria-hidden="true" />
        <div>
          <h3 className="font-display text-2xl font-bold text-[#154c66] mb-3">
            ¡Mensaje enviado!
          </h3>
          <p className="text-text-soft text-sm leading-relaxed max-w-md mx-auto">
            Gracias por contactar a Acción por los Derechos Fundamentales, A.C.
            Hemos recibido tu información. En un lapso de 24 horas, una persona
            del equipo se pondrá en contacto contigo.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            className={inputBase}
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
            placeholder="+52 664 000 0000"
            required
            maxLength={20}
            className={inputBase}
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
          placeholder="correo@ejemplo.com"
          required
          maxLength={254}
          className={inputBase}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="motivo"
          className="text-[10px] font-bold tracking-[0.18em] text-[#154c66] uppercase"
        >
          Motivo de contacto
        </label>
        <select
          id="motivo"
          name="motivo"
          className={`${inputBase} appearance-none cursor-pointer`}
        >
          <option value="">Selecciona una opción</option>
          <option value="miembro">Quiero ser miembro</option>
          <option value="aliado">Quiero ser aliado estratégico</option>
          <option value="programa">Quiero apoyar un programa específico</option>
          <option value="encuentros">
            Quiero información sobre próximos encuentros
          </option>
          <option value="programas-info">
            Quiero información sobre programas
          </option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="mensaje"
          className="text-[10px] font-bold tracking-[0.18em] text-[#154c66] uppercase"
        >
          Mensaje{" "}
          <span className="text-text-muted font-normal normal-case">
            (opcional)
          </span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          placeholder="Cuéntanos brevemente cómo podemos ayudarte."
          maxLength={1000}
          className={`${inputBase} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#3d815c] hover:bg-[#2d6347] text-white font-bold py-5 rounded-xl transition-all shadow-xl shadow-[#3d815c]/20 text-sm uppercase tracking-widest disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
