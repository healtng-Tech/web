import React, { memo } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';
import logoColor from '../../assets/healtng-logo.svg';

export const Footer = memo(function Footer({ onOpenLegal }) {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (e, id) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };

  return (
    <footer
      className="relative z-10 -mt-px bg-[#F3F6FF] pt-20 pb-10"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer HEALTNG</h2>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">

          <div className="md:col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <img src={logoColor} alt="Logo HEALTNG" className="h-8 w-auto" draggable="false" />
            </div>
            <p className="text-[15px] text-slate-600 leading-relaxed max-w-sm font-medium mb-6">
              Conectamos médicos, farmacias y clínicas en Venezuela. Recetas digitales, pagos integrados y gestión de agenda en un solo lugar.
            </p>

            <div className="flex items-center gap-4 text-slate-400">
              <a href="https://www.instagram.com/healtng_/" target="_blank" rel="noopener noreferrer" className="hover:text-[#002EE5] transition-colors duration-200" aria-label="Instagram">
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.072 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>

              <a href="https://www.tiktok.com/@healtng" target="_blank" rel="noopener noreferrer" className="hover:text-[#002EE5] transition-colors duration-200" aria-label="TikTok">
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.01c1.306-.022 2.611-.012 3.917-.012.017 1.455.516 2.891 1.454 4.008.975 1.159 2.412 1.89 3.935 2.043v3.914c-1.282-.016-2.548-.344-3.694-.962a7.177 7.177 0 0 1-2.613-2.457v8.051a6.39 6.39 0 0 1-1.636 4.31 6.25 6.25 0 0 1-4.664 2.062 6.241 6.241 0 0 1-4.707-2.096A6.41 6.41 0 0 1 .636 14.53a6.414 6.414 0 0 1 1.843-4.385 6.245 6.245 0 0 1 4.673-2.046c.456-.004.911.042 1.359.138v3.987a2.298 2.298 0 0 0-1.359-.115 2.235 2.235 0 0 0-1.666 1.48c-.287.828-.016 1.761.642 2.308a2.26 2.26 0 0 0 2.946-.016c.55-.494.814-1.232.812-1.96V0h2.64v.01z"/>
                </svg>
              </a>

              <a href="https://www.linkedin.com/company/healtng" target="_blank" rel="noopener noreferrer" className="hover:text-[#002EE5] transition-colors duration-200" aria-label="LinkedIn">
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-bold tracking-widest uppercase text-slate-900 mb-5">Plataforma</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="/#soluciones" onClick={(e) => handleSectionClick(e, 'soluciones')} className="text-[14px] text-slate-500 hover:text-[#002EE5] font-medium transition-colors">Para profesionales</a></li>
              <li><a href="/#soluciones" onClick={(e) => handleSectionClick(e, 'soluciones')} className="text-[14px] text-slate-500 hover:text-[#002EE5] font-medium transition-colors">Para farmacias</a></li>
              <li><a href="/#infraestructura" onClick={(e) => handleSectionClick(e, 'infraestructura')} className="text-[14px] text-slate-500 hover:text-[#002EE5] font-medium transition-colors">Para centros de atención</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-bold tracking-widest uppercase text-slate-900 mb-5">Compañía</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="/#inicio" onClick={(e) => handleSectionClick(e, 'inicio')} className="text-[14px] text-slate-500 hover:text-[#002EE5] font-medium transition-colors">Sobre nosotros</a></li>
              <li><Link to="/donaciones" className="text-[14px] text-slate-500 hover:text-rose-600 font-medium transition-colors inline-flex items-center gap-1.5">
                <Heart className="size-3.5" />
                Donaciones
              </Link></li>
              <li><a href="mailto:info@healtng.com" className="text-[14px] text-slate-500 hover:text-[#002EE5] font-medium transition-colors">Contacto comercial</a></li>
              <li><a href="mailto:soporte@healtng.com" className="text-[14px] text-slate-500 hover:text-[#002EE5] font-medium transition-colors">Soporte técnico</a></li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-slate-200 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button onClick={() => onOpenLegal('privacy')} className="text-[12px] text-slate-500 font-medium hover:text-[#002EE5] transition-colors">Privacidad de datos</button>
            <button onClick={() => onOpenLegal('terms')} className="text-[12px] text-slate-500 font-medium hover:text-[#002EE5] transition-colors">Términos de servicio</button>
            <button onClick={() => onOpenLegal('security')} className="text-[12px] text-slate-500 font-medium hover:text-[#002EE5] transition-colors">Auditoría y Seguridad</button>
          </div>
          <p className="text-[12px] text-slate-400 font-medium text-center md:text-left mt-2 md:mt-0">
            &copy; {currentYear} Copyright © 2026 Healtng. RIF J-507272128, Healtng Technologies C.A
          </p>
        </div>
      </div>
    </footer>
  );
});
