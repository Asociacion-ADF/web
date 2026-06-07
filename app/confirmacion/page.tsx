import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Confirmación | Acción por los Derechos Fundamentales, A.C.",
  description:
    "Confirmación de solicitud enviada a Acción por los Derechos Fundamentales, A.C.",
};

export default function ConfirmacionPage() {
  return (
    <section className="min-h-[calc(100vh-200px)] flex items-center justify-center px-5 py-20 bg-[#f8fbfe]">
      <div className="w-full max-w-2xl bg-white rounded-2xl border border-border-subtle shadow-md px-10 py-14 flex flex-col items-center text-center gap-6">
        <CheckCircle
          size={64}
          className="text-[#3d815c]"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-3">
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-[#154c66]">
            Gracias por contactarnos
          </h1>
          <p className="font-display text-xl font-semibold text-[#154c66]/70">
            Hemos recibido tu información.
          </p>
        </div>

        <div
          className="h-px w-16 bg-[#3d815c]"
          aria-hidden="true"
        />

        <p className="text-base text-text-soft leading-relaxed max-w-lg">
          Una persona del equipo de Acción por los Derechos Fundamentales, A.C.
          se pondrá en contacto contigo en un lapso de 24 horas para
          compartirte los siguientes pasos y resolver cualquier duda.
        </p>

        <p className="text-sm text-text-muted leading-relaxed">
          Mientras tanto, puedes conocer nuestros programas o revisar los
          próximos encuentros de la asociación.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 pt-2 w-full">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-[#154c66] text-white text-sm font-semibold hover:bg-[#0e3348] transition-all"
          >
            Volver al inicio
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link
            href="/programas"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg border border-border-subtle bg-white text-[#154c66] text-sm font-semibold hover:bg-[#f8fbfe] transition-all"
          >
            Conocer programas
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link
            href="/proximos-encuentros"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg border border-border-subtle bg-white text-[#154c66] text-sm font-semibold hover:bg-[#f8fbfe] transition-all"
          >
            Ver próximos encuentros
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
