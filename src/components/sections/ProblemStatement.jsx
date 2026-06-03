import React, { memo } from 'react';
import { useInView } from '../../hooks/useInView';

const PROBLEMS = [
  {
    id: 'historiales',
    title: 'Cada médico trabaja solo.',
    desc: 'El historial del paciente vive atrapado en carpetas físicas o en la memoria de cada consultorio. Al fragmentarse la comunicación con laboratorios y clínicas, se quiebra la continuidad asistencial.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c4.418 0 8 1.119 8 2.5S16.418 8 12 8 4 6.881 4 5.5 7.582 3 12 3z" />
        <path d="M4 5.5v4c0 1.2 2.5 2.1 5.5 2.4" />
        <path d="M20 5.5v3.5c0 .35-.2.68-.55.95" />
        <path d="M14.5 13.5c1.8-.2 3.5-.8 4.5-1.5" strokeDasharray="3 3" />
        <path d="M4 13.5v4c0 1.381 3.582 2.5 8 2.5.5 0 1-.02 1.5-.05" />
        <path d="M19.5 17.5c.35-.25.5-.55.5-.85V15" />
        <line x1="19" y1="13" x2="13" y2="19" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 'recetas',
    title: 'La receta llega ilegible.',
    desc: 'El paciente llega a la farmacia con un papel indescifrable. El farmacéutico se ve obligado a llamar para verificar, interrumpiendo la consulta en desarrollo. Todos pierden tiempo crítico.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h5l2.5-7 3.5 14 2.5-10 2.5 3h5" stroke="currentColor" />
        <circle cx="14" cy="19" r="4.5" fill="currentColor" fillOpacity="0.15" stroke="none" />
        <circle cx="14" cy="19" r="2.5" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    id: 'pagos',
    title: 'Los pagos son un caos.',
    desc: 'Zelle, efectivo, C2P y transferencias. Cada ingreso se concilia a mano en hojas de cálculo propensas a errores. Al cierre de la jornada, cuadrar caja toma más tiempo que la propia atención médica.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18l5-5 3 3" />
        <path d="M16 10l5-5M21 10V5h-5" />
        <line x1="11" y1="16" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    )
  }
];

export const ProblemStatement = memo(function ProblemStatement() {
  const { ref, inView } = useInView({ threshold: 0.12 });

  return (
    <section 
      id="desafio" 
      /* CORRECCIÓN AQUÍ: Agregamos '-mt-px' para romper la línea de subpixel artificial */
      className="relative -mt-px bg-gradient-to-b from-[#B8D4FF] to-white text-ink overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40" 
      aria-labelledby="problem-heading"
    >
      
      {/* Fondo Atmosférico y Rejilla Estética */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 inset-x-0 h-[300px] bg-white/20 blur-[100px]" />
        
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
        
        {/* Encabezado de Sección */}
        <div className={[
          'text-center mb-20 transition-all duration-700 ease-out',
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ].join(' ')}>
          <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-brand bg-brand-light rounded-full mb-6 border border-brand/10 backdrop-blur-sm">
            El Desafío
          </span>
          <h2 id="problem-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-6 max-w-3xl mx-auto leading-[1.2] text-slate-900">
            La atención médica en Venezuela funciona<br className="hidden md:block" />
            a pesar del sistema, no gracias a él.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto font-light Inter">
            No es deficiencia de los profesionales ni de los comercios. Es que las herramientas de gestión actuales están completamente aisladas y no fueron diseñadas para trabajar juntas.
          </p>
        </div>

        {/* Cuadrícula de Tarjetas Reducidas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {PROBLEMS.map((prob, i) => (
            <div 
              key={prob.id} 
              className={[
                'p-6 rounded-[28px] bg-white border border-slate-100/80 shadow-sm',
                'hover:shadow-card-lg hover:-translate-y-0.5 transition-all duration-500 group',
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              ].join(' ')} 
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              {/* Contenedor del Icono */}
              <div className="text-[#002EE5] mb-6 group-hover:scale-[1.05] transition-transform duration-300 origin-left">
                {prob.icon}
              </div>
              
              {/* Título */}
              <h3 className="font-bold text-[19px] text-slate-900 mb-2.5 tracking-tight">
                {prob.title}
              </h3>
              
              {/* Descripción */}
              <p className="text-[14px] text-slate-600 leading-relaxed font-normal Inter">
                {prob.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
});
