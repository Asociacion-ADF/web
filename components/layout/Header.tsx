"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/programas", label: "Programas" },
  { href: "/participa", label: "Participa" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 w-full z-50 bg-white border-b border-border-subtle shadow-sm h-28 flex items-center">
        <nav
          aria-label="Navegación principal"
          className="flex justify-between items-center max-w-7xl mx-auto px-5 w-full"
        >
          {/* Logo + marca */}
          <Link href="/" className="flex items-center gap-4 shrink-0">
            <Image
              src="/images/logo-aadf-transparent.png"
              alt="Acción por los Derechos Fundamentales, A.C."
              width={100}
              height={88}
              className="object-contain w-auto h-14 md:h-[88px] shrink-0"
              priority
            />
            <div className="hidden lg:block border-l border-text-blue/20 pl-4 py-1">
              <span className="text-[12px] font-bold text-text-blue tracking-tight leading-snug block uppercase">
                Acción por los<br />Derechos Fundamentales
              </span>
              <span className="text-[10px] font-semibold text-text-muted tracking-[0.18em] uppercase mt-0.5 block">
                Asociación Civil
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-text-blue hover:text-brand-green hover:bg-brand-blue/20 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/proximos-encuentros"
            className="hidden md:flex h-11 px-6 bg-brand-green text-white text-sm font-semibold rounded hover:brightness-110 active:scale-[0.98] transition-all shadow-sm items-center shrink-0"
          >
            Próximos encuentros
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(true)}
            className="md:hidden p-2 text-text-blue hover:bg-brand-blue/15 rounded-lg transition-colors"
          >
            <Menu size={26} aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 md:hidden"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed right-0 top-0 bottom-0 z-[70] w-4/5 max-w-sm bg-white shadow-2xl flex flex-col gap-10 p-8 transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b border-border-subtle pb-6">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
            <Image
              src="/images/logo-aadf-transparent.png"
              alt="Acción por los Derechos Fundamentales, A.C."
              width={64}
              height={56}
              className="object-contain w-auto h-[56px] shrink-0"
            />
          </Link>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="p-2 text-text-blue/60 hover:bg-brand-blue/15 rounded-lg transition-colors"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-lg font-semibold text-text-blue hover:text-brand-green hover:bg-brand-blue/15 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto">
          <Link
            href="/proximos-encuentros"
            onClick={() => setOpen(false)}
            className="flex w-full h-14 items-center justify-center bg-brand-green text-white font-semibold text-sm tracking-wide rounded shadow-md hover:brightness-110 active:scale-95 transition-all"
          >
            Próximos encuentros
          </Link>
        </div>
      </div>
    </>
  );
}
