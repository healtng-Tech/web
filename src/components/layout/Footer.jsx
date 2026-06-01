import React, { memo } from 'react';
// Apuntamos correctamente a la carpeta assets desde components/layout/
import logoBlanco from '../../assets/healtng-blanco.svg';

export const Footer = memo(function Footer({ onOpenLegal }) {
  const currentYear = new Date().getFullYear();

  // Función auxiliar para mover el scroll suavemente a las secciones de la landing
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#002EE5] pt-20 pb-10 border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer HEALTNG</h2>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Columna 1: Marca y Misión */}
          <div className="md:col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <img 
                src={logoBlanco} 
                alt="Logo HEALTNG" 
                className="h-8 w-auto" 
                draggable="false"
              />
              </div>
            <p className="text-[15px] text-white/75 leading-relaxed max-w-sm">
              Infraestructura de orquestación en salud. Conectando profesionales, farmacias y centros de atención en un solo flujo operativo sin fricciones.
            </p>
          </div>

          {/* Columna 2: Plataforma */}
          <div>
            <h3 className="text-[12px] font-bold tracking-widest uppercase text-white mb-5">Plataforma</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#soluciones" onClick={(e) => handleScroll(e, 'soluciones')} className="text-[14px] text-white/70 hover:text-white transition-colors">Para profesionales</a>
              </li>
              <li>
                <a href="#soluciones" onClick={(e) => handleScroll(e, 'soluciones')} className="text-[14px] text-white/70 hover:text-white transition-colors">Para farmacias</a>
              </li>
              <li>
                <a href="#infraestructura" onClick={(e) => handleScroll(e, 'infraestructura')} className="text-[14px] text-white/70 hover:text-white transition-colors">Para centros de atención</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Compañía */}
          <div>
            <h3 className="text-[12px] font-bold tracking-widest uppercase text-white mb-5">Compañía</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#piloto" className="text-[14px] text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  Programa Piloto
                  <span className="text-[9px] font-bold text-[#002EE5] bg-white px-2 py-0.5 rounded-full">2026</span>
                </a>
              </li>
              <li>
                <a href="mailto:comercial@healtng.com" className="text-[14px] text-white/70 hover:text-white transition-colors">Contacto comercial</a>
              </li>
              <li>
                <a href="mailto:soporte@healtng.com" className="text-[14px] text-white/70 hover:text-white transition-colors">Soporte técnico</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="w-full h-px bg-white/15 mb-8" />

        {/* Bottom Footer: Legal y Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <button onClick={() => onOpenLegal('privacy')} className="text-[12px] text-white/50 hover:text-white/90 transition-colors">Privacidad de datos</button>
            <button onClick={() => onOpenLegal('terms')} className="text-[12px] text-white/50 hover:text-white/90 transition-colors">Términos de servicio</button>
            <button onClick={() => onOpenLegal('security')} className="text-[12px] text-white/50 hover:text-white/90 transition-colors">Auditoría y Seguridad</button>
          </div>
          <p className="text-[12px] text-white/50">
            &copy; {currentYear} Copyright © 2026 Healtng. RIF J-507272128, Healtng Technologies C.A
          </p>
        </div>
      </div>
    </footer>
  );
});
