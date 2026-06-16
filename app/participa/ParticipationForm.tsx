"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const inputBase =
  "w-full px-5 py-4 bg-gray-50 border border-border-subtle rounded-xl focus:ring-2 focus:ring-[#3d815c]/20 focus:border-[#3d815c] outline-none transition-all placeholder:text-slate-400 text-sm";

export default function ParticipationForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [modalidad, setModalidad] = useState("");
  const [programa, setPrograma] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    router.push("/confirmacion");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
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
            placeholder="664 000 0000"
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
          placeholder="email@ejemplo.com"
          required
          maxLength={254}
          className={inputBase}
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
            value={modalidad}
            onChange={(e) => setModalidad(e.target.value)}
            className={`${inputBase} appearance-none cursor-pointer ${modalidad === "" ? "text-slate-400" : "text-gray-800"}`}
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
            value={programa}
            onChange={(e) => setPrograma(e.target.value)}
            className={`${inputBase} appearance-none cursor-pointer ${programa === "" ? "text-slate-400" : "text-gray-800"}`}
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
          className={`${inputBase} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#3d815c] hover:bg-[#2d6347] text-white font-bold py-5 rounded-xl transition-all shadow-xl shadow-[#3d815c]/20 text-sm uppercase tracking-widest disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Enviando..." : "Enviar solicitud"}
      </button>

      <p className="text-center text-[11px] text-text-muted leading-relaxed">
        Al enviar tus datos aceptas el{" "}
        <Link
          href="/aviso-de-privacidad"
          className="underline hover:text-[#3d815c] transition-colors"
        >
          Aviso de privacidad
        </Link>
      </p>
    </form>
  );
}
