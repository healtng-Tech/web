import { useState, useEffect } from 'react';
import { Logo } from '../ui/Logo'; 

const NAV_LINKS = [
  { label: 'Infraestructura', href: '#infraestructura' },
  { label: 'Plataforma',       href: '#plataforma'       },
  { label: 'Soluciones',      href: '#soluciones'       },
];

// ─── Botón CTA desktop ──────────────────────────────────────────────────────
function NavCTA() {
  return (
    <a
      href="https://app.healtng.com/login?action=register"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand text-white text-[13px] font-semibold tracking-[-0.01em] transition-all duration-200 hover:bg-brand/90 hover:shadow-md active:scale-[0.98]"
    >
      Iniciar Demo
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3.5 opacity-70" aria-hidden="true">
        <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L9.19 8 6.22 5.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
      </svg>
    </a>
  );
}

// ─── Componente principal ───────────────────────────────────────────────────
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ease-out ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-border shadow-card' : 'bg-transparent'}`}>
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo solo */}
          <a href="/" aria-label="Healtng — inicio" className="flex items-center select-none group">
            <Logo className="h-10 w-auto" />
          </a>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="px-4 py-2 rounded-full text-[13px] font-medium text-ink-secondary transition-colors duration-150 hover:text-ink hover:bg-surface">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://app.healtng.com/login" className="px-4 py-2 rounded-full text-[13px] font-medium text-ink-secondary transition-colors duration-150 hover:text-ink hover:bg-surface">
              Inicia sesión
            </a>
            <NavCTA />
          </div>

          {/* Mobile Hamburger */}
          <button type="button" onClick={() => setMobileOpen(v => !v)} className="md:hidden size-10 rounded-xl hover:bg-surface flex flex-col justify-center items-center gap-[5px]">
            {[0, 1, 2].map(i => (
              <span key={i} className={`block h-[1.5px] bg-ink rounded-full transition-all ${i === 0 && mobileOpen ? 'w-5 translate-y-[6.5px] rotate-45' : 'w-5'} ${i === 1 && mobileOpen ? 'w-5 opacity-0' : 'w-4'} ${i === 2 && mobileOpen ? 'w-5 -translate-y-[6.5px] -rotate-45' : 'w-5'}`} />
            ))}
          </button>
        </nav>
      </header>

      {/* Menú mobile */}
      <div className={`fixed inset-0 z-30 md:hidden flex flex-col pt-16 bg-white/95 backdrop-blur-xl transition-all duration-300 ease-out ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col gap-1 px-6 pt-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setMobileOpen(false)} className="px-4 py-3.5 rounded-xl text-[15px] font-medium text-ink hover:bg-surface transition-colors">
              {label}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
            <a href="https://app.healtng.com/login" onClick={() => setMobileOpen(false)} className="px-4 py-3.5 rounded-xl text-[15px] font-medium text-ink-secondary hover:bg-surface transition-colors">
              Inicia sesión
            </a>
            <a href="https://app.healtng.com/login?action=register" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-brand text-white text-[15px] font-semibold hover:bg-brand/90 transition-colors">
              Iniciar Demo
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}