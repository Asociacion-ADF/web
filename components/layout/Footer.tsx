import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const navColumns = [
  {
    title: "Navegación",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Nosotros", href: "/nosotros" },
      { label: "Programas", href: "/programas" },
      { label: "Participa", href: "/participa" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Programas",
    links: [
      { label: "Fortaleciendo Valores", href: "/programas/fortaleciendo-valores" },
      { label: "Diálogos con la Sociedad", href: "/programas/dialogos-con-la-sociedad" },
      { label: "Vigilancia Ciudadana", href: "/programas/vigilancia-ciudadana" },
      { label: "Derecho de Propiedad", href: "/programas/derecho-de-propiedad" },
    ],
  },
  {
    title: "Participa",
    links: [
      { label: "Quiero ser miembro", href: "/participa#miembro" },
      { label: "Aliado estratégico", href: "/participa#aliado" },
      { label: "Apoyar un programa", href: "/participa#apoyar" },
      { label: "Próximos encuentros", href: "/proximos-encuentros" },
    ],
  },
  {
    title: "Noticias",
    links: [
      { label: "En medios", href: "/noticias" },
      { label: "Actividades / Próximos encuentros", href: "/proximos-encuentros" },
      { label: "Comunicados", href: "/comunicados" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-green text-white pt-10 pb-8 md:pt-14 md:pb-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
        {/* Main grid: brand + nav columns + contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo-aadf-transparent.png"
                alt="Acción por los Derechos Fundamentales, A.C."
                width={80}
                height={71}
                className="object-contain shrink-0 brightness-0 invert opacity-90"
              />
              <h2 className="font-display text-base font-bold uppercase leading-snug">
                Acción por los<br />Derechos Fundamentales
              </h2>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Plataforma ciudadana de participación, formación cívica, diálogo
              social e incidencia institucional en Tijuana, Baja California.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/accionporlosderechosfundamentales" },
                { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/accionderechosfundamentales/" },
                { Icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/asociacion-derechos-fundamentales" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns + Contact column */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {navColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-[0.22em] mb-5">
                  {col.title}
                </h4>
                <nav className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-white/80 hover:text-white text-sm leading-snug transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}

            {/* Contact column */}
            <div>
              <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-[0.22em] mb-5">
                Contacto
              </h4>
              <div className="flex flex-col gap-4 text-sm">
                <a
                  href="tel:+526646817278"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <Phone size={14} className="shrink-0" aria-hidden="true" />
                  +52 664 681 7278
                </a>
                <a
                  href="mailto:contacto@asociacionaccion.com"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <Mail size={14} className="shrink-0" aria-hidden="true" />
                  contacto@asociacionaccion.com
                </a>
                <address className="not-italic flex items-start gap-2 text-white/70 leading-relaxed">
                  <MapPin size={14} className="shrink-0 mt-0.5" aria-hidden="true" />
                  Blvd. Agua Caliente 4558, Int. 1403-B, Col. Aviación, C.P. 22014, Tijuana, B.C.
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: copyright + legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-white/40 text-[11px] tracking-widest uppercase">
            © {year} Acción por los Derechos Fundamentales, A.C. — Todos los
            derechos reservados.
          </p>
          <Link
            href="/aviso-de-privacidad"
            className="text-white/40 hover:text-white/70 text-[11px] tracking-widest uppercase transition-colors"
          >
            Aviso de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
