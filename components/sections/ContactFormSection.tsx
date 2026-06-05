"use client";

import { useState } from "react";
import { Lock, CheckCircle } from "lucide-react";

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  modalidad: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  telefono?: string;
  email?: string;
}

const modalidades = [
  "Miembro",
  "Aliado estratégico",
  "Apoyar un programa específico",
  "Deseo recibir más información",
];

const inputBase =
  "w-full h-14 border border-border-subtle rounded-xl px-5 text-base text-text-main bg-surface-container-low/50 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-text-muted";

const errorBase = "border-red-400 focus:border-red-500 focus:ring-red-400";

export default function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    email: "",
    modalidad: "Miembro",
    mensaje: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!formData.nombre.trim()) e.nombre = "El nombre es requerido.";
    if (!formData.telefono.trim()) e.telefono = "El teléfono es requerido.";
    if (!formData.email.trim()) {
      e.email = "El correo es requerido.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "Ingresa un correo válido.";
    }
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
    setSuccess(true);
  };

  return (
    <section className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-main mb-3">
            Quiero participar
          </h2>
          <p className="text-text-soft text-base max-w-lg mx-auto">
            Déjanos tus datos y un integrante de nuestro equipo se pondrá en
            contacto contigo en un lapso de 24 horas.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-border-subtle max-w-2xl mx-auto">
          {success ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <CheckCircle
                className="text-primary"
                size={56}
                aria-hidden="true"
              />
              <h3 className="font-serif text-2xl font-semibold text-text-main">
                ¡Solicitud recibida!
              </h3>
              <p className="text-text-soft text-base max-w-sm">
                Gracias por tu interés. Un integrante del equipo se comunicará
                contigo en las próximas 24 horas hábiles.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-semibold text-text-main mb-2"
                >
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  placeholder="Ej. Juan Pérez"
                  value={formData.nombre}
                  onChange={handleChange}
                  aria-describedby={errors.nombre ? "nombre-error" : undefined}
                  className={`${inputBase} ${errors.nombre ? errorBase : ""}`}
                />
                {errors.nombre && (
                  <p id="nombre-error" className="mt-1 text-sm text-red-500">
                    {errors.nombre}
                  </p>
                )}
              </div>

              {/* Teléfono + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-semibold text-text-main mb-2"
                  >
                    Teléfono <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    autoComplete="tel"
                    placeholder="664-000-0000"
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
                      className="mt-1 text-sm text-red-500"
                    >
                      {errors.telefono}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-text-main mb-2"
                  >
                    Correo electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="email@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`${inputBase} ${errors.email ? errorBase : ""}`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Modalidad */}
              <div>
                <label
                  htmlFor="modalidad"
                  className="block text-sm font-semibold text-text-main mb-2"
                >
                  Modalidad de interés
                </label>
                <select
                  id="modalidad"
                  name="modalidad"
                  value={formData.modalidad}
                  onChange={handleChange}
                  className={`${inputBase}`}
                >
                  {modalidades.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-semibold text-text-main mb-2"
                >
                  Mensaje{" "}
                  <span className="text-text-muted font-normal">
                    (opcional)
                  </span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder="¿Cómo podemos colaborar?"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full border border-border-subtle rounded-xl px-5 py-4 text-base text-text-main bg-surface-container-low/50 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-text-muted resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-16 bg-primary text-white font-semibold text-lg rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Enviando..." : "Enviar solicitud"}
                </button>
                <p className="text-center mt-6 text-xs text-text-muted flex items-center justify-center gap-2">
                  <Lock size={12} aria-hidden="true" />
                  Sus datos están protegidos y solo se usarán para fines de
                  contacto institucional.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
