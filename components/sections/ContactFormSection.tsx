"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, MapPin, Phone, Mail } from "lucide-react";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  modalidad: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  telefono?: string;
}

const modalidades = [
  "Miembro",
  "Aliado estratégico",
  "Apoyar un programa específico",
  "Deseo recibir más información",
];

const inputBase =
  "w-full h-12 border border-border-subtle rounded-lg px-4 text-sm text-text-main bg-white/70 outline-none transition-all focus:border-text-blue focus:ring-1 focus:ring-text-blue/30 placeholder:text-slate-400";

const selectBase =
  "w-full h-12 border border-border-subtle rounded-lg px-4 text-sm bg-white/70 outline-none transition-all focus:border-text-blue focus:ring-1 focus:ring-text-blue/30 appearance-none cursor-pointer";

const errorBase = "border-red-400 focus:border-red-500 focus:ring-red-400/30";

export default function ContactFormSection() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    modalidad: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!formData.nombre.trim()) e.nombre = "El nombre es requerido.";
    if (!formData.email.trim()) {
      e.email = "El correo es requerido.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "Ingresa un correo válido.";
    }
    if (!formData.telefono.trim()) e.telefono = "El teléfono es requerido.";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    router.push("/confirmacion");
  };

  return (
    <section className="py-20 lg:py-28 px-5 bg-brand-blue/30 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
        {/* Left: info */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div>
            <span className="text-[10px] font-bold tracking-[0.22em] text-brand-green uppercase block mb-3">
              Contacto
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight text-text-blue mb-5">
              Quiero participar
            </h2>
            <p className="text-text-soft text-base leading-relaxed">
              Déjanos tus datos y un integrante de nuestro equipo se pondrá en
              contacto contigo en un lapso de 24 horas hábiles.
            </p>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-5">
            <a
              href="tel:+526646817278"
              className="flex items-center gap-4 text-text-soft hover:text-text-blue transition-colors group"
            >
              <div className="w-10 h-10 bg-brand-blue/35 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-blue/55 transition-colors">
                <Phone size={18} className="text-text-blue" aria-hidden="true" />
              </div>
              <span className="text-sm font-semibold">+52 664 681 7278</span>
            </a>
            <a
              href="mailto:contacto@asociacionaccion.com"
              className="flex items-center gap-4 text-text-soft hover:text-text-blue transition-colors group"
            >
              <div className="w-10 h-10 bg-brand-blue/35 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-blue/55 transition-colors">
                <Mail size={18} className="text-text-blue" aria-hidden="true" />
              </div>
              <span className="text-sm font-semibold">
                contacto@asociacionaccion.com
              </span>
            </a>
            <address className="flex items-start gap-4 text-text-soft not-italic">
              <div className="w-10 h-10 bg-brand-blue/35 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={18} className="text-text-blue" aria-hidden="true" />
              </div>
              <span className="text-sm leading-relaxed">
                Blvd. Agua Caliente 4558, Interior 1403-B,
                <br />
                Col. Aviación, C.P. 22014,
                <br />
                Tijuana, Baja California.
              </span>
            </address>
          </div>
        </div>

        {/* Right: form with glass panel */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-2xl border border-border-subtle p-8 sm:p-10 editorial-shadow">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Row 1: nombre + email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-xs font-semibold text-text-blue mb-2 uppercase tracking-wide"
                    >
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      autoComplete="name"
                      placeholder="Ej. Juan Pérez"
                      maxLength={100}
                      value={formData.nombre}
                      onChange={handleChange}
                      aria-describedby={
                        errors.nombre ? "nombre-error" : undefined
                      }
                      className={`${inputBase} ${errors.nombre ? errorBase : ""}`}
                    />
                    {errors.nombre && (
                      <p id="nombre-error" className="mt-1 text-xs text-red-500">
                        {errors.nombre}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-text-blue mb-2 uppercase tracking-wide"
                    >
                      Correo electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="email@ejemplo.com"
                      maxLength={254}
                      value={formData.email}
                      onChange={handleChange}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      className={`${inputBase} ${errors.email ? errorBase : ""}`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: telefono + modalidad */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-xs font-semibold text-text-blue mb-2 uppercase tracking-wide"
                    >
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      autoComplete="tel"
                      placeholder="664-000-0000"
                      maxLength={20}
                      value={formData.telefono}
                      onChange={handleChange}
                      aria-describedby={
                        errors.telefono ? "telefono-error" : undefined
                      }
                      className={`${inputBase} ${errors.telefono ? errorBase : ""}`}
                    />
                    {errors.telefono && (
                      <p
                        id="telefono-error"
                        className="mt-1 text-xs text-red-500"
                      >
                        {errors.telefono}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="modalidad"
                      className="block text-xs font-semibold text-text-blue mb-2 uppercase tracking-wide"
                    >
                      Modalidad de interés
                    </label>
                    <select
                      id="modalidad"
                      name="modalidad"
                      value={formData.modalidad}
                      onChange={handleChange}
                      className={`${selectBase} ${formData.modalidad === "" ? "text-slate-400" : "text-gray-900"}`}
                    >
                      <option value="">Selecciona una modalidad</option>
                      {modalidades.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-xs font-semibold text-text-blue mb-2 uppercase tracking-wide"
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
                    placeholder="¿Cómo podemos colaborar?"
                    maxLength={1000}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full border border-border-subtle rounded-lg px-4 py-3 text-sm text-gray-800 bg-white/70 outline-none transition-all focus:border-text-blue focus:ring-1 focus:ring-text-blue/30 placeholder:text-slate-400 resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-14 bg-brand-green text-white font-semibold text-sm tracking-wide rounded shadow-md hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Enviando..." : "Enviar solicitud"}
                  </button>
                  <p className="text-center mt-5 text-xs text-slate-400 flex items-center justify-center gap-2">
                    <Lock size={11} aria-hidden="true" />
                    Sus datos están protegidos y solo se usarán para fines de
                    contacto institucional.
                  </p>
                  <p className="text-center text-[11px] text-slate-400 leading-relaxed">
                    Al enviar tus datos aceptas el{" "}
                    <Link
                      href="/aviso-de-privacidad"
                      className="underline hover:text-[#3d815c] transition-colors"
                    >
                      Aviso de privacidad
                    </Link>
                  </p>
                </div>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
}
