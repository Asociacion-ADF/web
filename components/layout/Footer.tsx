import Link from "next/link";
import { Landmark, MapPin, Phone, Mail } from "lucide-react";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const navCol = [
  {
    title: "Navegación",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Nosotros", href: "/nosotros" },
      { label: "Programas", href: "/programas" },
    ],
  },
  {
    title: "Programas",
    links: [
      { label: "Valores", href: "/programas#valores" },
      { label: "Diálogos", href: "/programas#dialogos" },
      { label: "Vigilancia", href: "/programas#vigilancia" },
      { label: "Propiedad", href: "/programas#propiedad" },
    ],
  },
  {
    title: "Participa",
    links: [
      { label: "Miembro", href: "/participa#miembro" },
      { label: "Aliado", href: "/participa#aliado" },
      { label: "Donar", href: "/participa#donar" },
    ],
  },
  {
    title: "Noticias",
    links: [
      { label: "Comunicados", href: "/noticias#comunicados" },
      { label: "Eventos", href: "/noticias#eventos" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Brand */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white flex items-center justify-center rounded-2xl shadow-lg shrink-0">
                <Landmark
                  className="text-primary"
                  size={32}
                  aria-hidden="true"
                />
              </div>
              <span className="font-serif text-xl font-bold uppercase leading-tight">
                Acción por los Derechos Fundamentales, A.C.
              </span>
            </div>
            <p className="text-white/80 text-base leading-relaxed max-w-xl">
              Plataforma ciudadana de participación, formación cívica, diálogo
              social e incidencia institucional en Tijuana, Baja California.
              Transformamos la preocupación ciudadana en cambio positivo.
            </p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {navCol.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold text-secondary uppercase tracking-[0.25em] mb-6 border-b border-white/20 pb-2">
                  {col.title}
                </h4>
                <nav className="flex flex-col gap-4">
                  {col.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-white/90 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Contact column */}
        <div className="pt-4">
          <h4 className="text-xs font-semibold text-secondary uppercase tracking-[0.25em] mb-6 border-b border-white/20 pb-2 w-fit">
            Contacto
          </h4>
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-white/90">
            <a
              href="tel:6643681278"
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <Phone size={16} aria-hidden="true" />
              664-368-12-78
            </a>
            <a
              href="mailto:contacto@asociacionaccion.com"
              className="flex items-center gap-3 hover:text-white transition-colors underline decoration-secondary"
            >
              <Mail size={16} aria-hidden="true" />
              contacto@asociacionaccion.com
            </a>
          </div>
        </div>

        {/* Location + social + legal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-white/10 items-end">
          <div>
            <h4 className="text-xs font-semibold text-secondary uppercase tracking-widest mb-3">
              Ubicación
            </h4>
            <address className="not-italic text-white/80 text-sm flex items-start gap-3">
              <MapPin
                className="text-white/60 shrink-0 mt-0.5"
                size={18}
                aria-hidden="true"
              />
              Blvd. Agua Caliente 4558, Interior 1403-B, Col. Aviación,
              C.P. 22014, Tijuana, Baja California.
            </address>
          </div>

          <div className="flex flex-col md:items-end gap-6">
            <div className="flex gap-3">
              {[
                { Icon: FacebookIcon, label: "Facebook" },
                { Icon: InstagramIcon, label: "Instagram" },
                { Icon: LinkedinIcon, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="flex gap-6 text-xs text-white/60 uppercase tracking-widest font-semibold">
              <Link href="/privacidad" className="hover:text-white transition-colors">
                Aviso de Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-white transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-white/5">
          <p className="text-white/40 text-[11px] tracking-widest uppercase">
            © {year} Acción por los Derechos Fundamentales, A.C. — Tijuana,
            B.C. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
