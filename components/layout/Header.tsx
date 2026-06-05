"use client";

import { useState } from "react";
import Link from "next/link";
import { Landmark, Menu, X } from "lucide-react";

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
      <header className="fixed top-0 w-full z-50 bg-white border-b border-border-subtle shadow-sm h-20 flex items-center px-6">
        <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <Landmark
                className="text-primary"
                size={26}
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm sm:text-base font-bold text-primary uppercase tracking-tight">
                Acción por los Derechos Fundamentales
              </span>
              <span className="text-[11px] font-semibold text-text-muted tracking-widest uppercase">
                Asociación Civil
              </span>
            </div>
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(true)}
            className="p-2 text-text-soft hover:bg-surface-container-low rounded-lg transition-colors"
          >
            <Menu size={28} aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/40"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed right-0 top-0 bottom-0 z-[70] w-4/5 max-w-sm bg-white shadow-2xl flex flex-col gap-10 p-8 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b border-border-subtle pb-6">
          <span className="font-serif text-[22px] font-bold text-primary">
            Menú
          </span>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="p-2 text-text-soft hover:bg-surface-container-low rounded-lg transition-colors"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-lg font-semibold text-text-soft hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto">
          <button
            className="w-full h-14 bg-primary text-white font-semibold text-sm tracking-wide rounded-lg shadow-md hover:brightness-110 active:scale-95 transition-all"
            onClick={() => setOpen(false)}
          >
            Próximos encuentros
          </button>
        </div>
      </div>
    </>
  );
}
