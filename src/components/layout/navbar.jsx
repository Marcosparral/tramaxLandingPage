import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
    {label: "Inicio", to: "/"},
    {label: "Servicios", to: "/services"},
    {label: "Preguntas Frecuentes", to: "/faq"}
    
];

export default function Navbar() {
    const [isOpen, setIsopen] = useState(false)

    const toggleMenu = () => setIsopen((prev) => !prev);
    const closeMenu = () => setIsopen(false)


    return (
       <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 rounded-md" />
            <span className="font-semibold tracking-wide text-slate-900">
                TRAMAX
            </span>
        </div>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-900",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Botón hamburguesa mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 border border-slate-300"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {/* Icono hamburguesa / X simple en SVG */}
          {!isOpen ? (
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Overlay oscuro detrás del menú (solo mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={closeMenu}
        />
      )}

      {/* Menú lateral mobile (desde la derecha) */}
      <aside
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-xl md:hidden z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-200">
          <span className="font-semibold tracking-wide text-slate-900">
            Menú
          </span>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 border border-slate-300"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="px-4 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                [
                  "block text-sm font-medium py-2 border-b border-slate-100",
                  isActive
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </aside>
    </header>
    )
}