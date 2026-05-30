import React from 'react';
import { useInView } from '../../hooks/useInView';

export function ProblemStatement() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section 
      id="desafio" 
      // Fondo sólido Pastel exacto para seamless con el Hero
      className="relative bg-[#B8D4FF] text-ink overflow-hidden py-24 md:py-32" 
      aria-labelledby="problem-heading"
    >
      
      {/* Fondo atmosférico sutil adaptado al nuevo color (muy tenue) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-white/40 blur-[120px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="prob-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#prob-grid)" />
        </svg>
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Cabecera con tipografía aligerada (font-bold) */}
        <div className={[
          'text-center mb-20 transition-all duration-700 ease-out',
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ].join(' ')}>
          {/* Eyebrow: Regresa a paleta azul marca sobre fondo claro */}
          <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-brand bg-brand-light rounded-full mb-6 border border-brand/10 backdrop-blur-sm">
            El Desafío
          </span>
          <h2 id="problem-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-6 max-w-3xl mx-auto leading-[1.2]">
            La fragmentación es el costo <br className="hidden md:block" />
            más oculto de su gestión médica.
          </h2>
          {/* Texto secundario: Regresa a oscuro */}
          <p className="text-lg md:text-xl text-ink-secondary leading-relaxed max-w-2xl mx-auto font-light Inter">
            Los procesos manuales y los sistemas aislados drenan tiempo, generan pérdidas financieras e interrumpen la continuidad del paciente.
          </p>
        </div>

        {/* Grid de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Columna 1 */}
          <div 
            className={[
              // Tarjetas: Regresan a fondo blanco limpio
              'p-8 rounded-[32px] bg-white border border-slate-100 hover:shadow-card-lg transition-all duration-500 group',
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ].join(' ')} 
            style={{ transitionDelay: '100ms' }}
          >
            {/* Ícono ampliado: Regresa a color azul marca sin caja de fondo */}
            <div className="text-[#002EE5] mb-8 group-hover:scale-[1.05] transition-transform origin-left">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3c4.418 0 8 1.119 8 2.5S16.418 8 12 8 4 6.881 4 5.5 7.582 3 12 3z" />
                <path d="M4 5.5v4c0 1.2 2.5 2.1 5.5 2.4" />
                <path d="M20 5.5v3.5c0 .35-.2.68-.55.95" />
                <path d="M14.5 13.5c1.8-.2 3.5-.8 4.5-1.5" strokeDasharray="3 3" />
                <path d="M4 13.5v4c0 1.381 3.582 2.5 8 2.5.5 0 1-.02 1.5-.05" />
                <path d="M19.5 17.5c.35-.25.5-.55.5-.85V15" />
                <line x1="19" y1="13" x2="13" y2="19" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            {/* Título tarjeta: Regresa a ink */}
            <h3 className="font-semibold text-xl text-ink mb-3 tracking-tight">Historiales aislados.</h3>
            {/* Texto tarjeta: Regresa a ink-tertiary */}
            <p className="text-[15px] text-ink-tertiary leading-relaxed font-light Inter">
              La falta de comunicación entre el centro médico y proveedores externos quiebra la trazabilidad del paciente.
            </p>
          </div>

          {/* Columna 2 */}
          <div 
            className={[
              'p-8 rounded-[32px] bg-white border border-slate-100 hover:shadow-card-lg transition-all duration-500 group',
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ].join(' ')} 
            style={{ transitionDelay: '200ms' }}
          >
            <div className="text-[#002EE5] mb-8 group-hover:scale-[1.05] transition-transform origin-left">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h5l2.5-7 3.5 14 2.5-10 2.5 3h5" stroke="currentColor" />
                <circle cx="14" cy="19" r="4.5" fill="currentColor" fillOpacity="0.2" stroke="none" />
                <circle cx="14" cy="19" r="2.5" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-ink mb-3 tracking-tight">Conciliaciones complejas.</h3>
            <p className="text-[15px] text-ink-tertiary leading-relaxed font-light Inter">
              Horas invertidas en verificación manual de cuentas por cobrar entre aseguradoras, clínicas y plataformas.
            </p>
          </div>

          {/* Columna 3 */}
          <div 
            className={[
              'p-8 rounded-[32px] bg-white border border-slate-100 hover:shadow-card-lg transition-all duration-500 group',
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ].join(' ')} 
            style={{ transitionDelay: '300ms' }}
          >
            <div className="text-[#002EE5] mb-8 group-hover:scale-[1.05] transition-transform origin-left">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18l5-5 3 3" />
                <path d="M16 10l5-5M21 10V5h-5" />
                <line x1="11" y1="16" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-ink mb-3 tracking-tight">Despacho fragmentado.</h3>
            <p className="text-[15px] text-ink-tertiary leading-relaxed font-light Inter">
              La desconexión en tiempo real con redes de distribución provoca retrasos críticos en la entrega de insumos.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}