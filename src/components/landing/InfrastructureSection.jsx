import React, { memo } from 'react';
import { useInView } from '../../hooks/useInView';

// ─── Configuración de Tarjetas con Micro-UIs integradas de forma nativa ─────
const INFRA_CARDS = [
  {
    id: 'interop',
    colorIcon: 'text-brand',
    colorLabel: 'text-brand',
    label: 'Integración',
    title: 'Se conecta con lo que ya tiene.',
    description: 'Si ya usa un sistema de historia clínica, Healtng se integra sin reemplazarlo. Sus datos viajan de forma segura sin interrumpir su flujo de trabajo actual.',
    detail: 'API REST · HL7 FHIR · Webhooks',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M8 6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>
        <path d="M16 2h4v4"/>
        <path d="M20 2 9 13"/>
      </svg>
    ),
    // Micro-UI: Fragmento de API e Interoperabilidad
    visual: (
      <div className="flex flex-col gap-3 w-full text-left bg-slate-50 border border-slate-150 rounded-xl p-3.5 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand shadow-[0_0_8px_#002EE5] animate-[scan_2.5s_ease-in-out_infinite]" />
        <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
          <span className="text-[10px] text-slate-500 font-mono font-medium">POST /api/v1/patients</span>
          <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">200 OK</span>
        </div>
        <div className="font-mono text-[11px] text-slate-600 leading-normal space-y-0.5">
          <div><span className="text-[#002EE5]">const</span> patient = {'{'}</div>
          <div className="pl-3">"resource": <span className="text-emerald-600">"FHIR"</span>,</div>
          <div className="pl-3">"status": <span className="text-[#002EE5]">true</span></div>
          <div>{'}'};</div>
        </div>
      </div>
    )
  },
  {
    id: 'payments',
    colorIcon: 'text-emerald-600',
    colorLabel: 'text-emerald-700',
    label: 'Pagos',
    title: 'El dinero entra y se registra solo.',
    description:'Conectado directamente a su cuenta bancaria. Cada pago —C2P, B2P o transferencia— queda registrado en tiempo real. Al cierre del día su reporte está listo, sin conciliaciones manuales.',
    detail: 'C2P · B2P · Conciliación',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <path d="M2 10h20"/>
        <path d="M7 15h2"/>
        <path d="M11 15h4"/>
      </svg>
    ),
    // Micro-UI: Estado de Cuenta y Liquidación Bancaria
    visual: (
      <div className="flex flex-col gap-2.5 w-full text-left bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] font-semibold text-slate-700">Liquidación Nocturna</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Bancaribe</span>
        </div>
        <div className="flex items-baseline gap-1.5 mt-0.5">
          <span className="text-2xl font-extrabold text-slate-900 leading-none">$12,840</span>
          <span className="text-[10px] text-slate-400 font-medium">100% Conciliado</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-1 mt-1 overflow-hidden">
          <div className="bg-emerald-500 h-full rounded-full w-full" />
        </div>
      </div>
    )
  },
  {
    id: 'logistics',
    colorIcon: 'text-amber-600',
    colorLabel: 'text-amber-700',
    label: 'Despacho',
    title: 'El medicamento llega con precisión.',
    description: 'El paciente puede retirar su medicamento en la farmacia aliada o recibirlo en casa. Usted sabe en qué estado está cada entrega sin hacer una sola llamada.',
    detail: 'Yummy Rides · Seguimiento en vivo',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/>
        <rect x="9" y="11" width="14" height="10" rx="1"/>
        <circle cx="12" cy="21" r="1"/>
        <circle cx="20" cy="21" r="1"/>
      </svg>
    ),
    // Micro-UI: Trazabilidad Logística de Insumos
    visual: (
      <div className="flex flex-col gap-2.5 w-full text-left bg-slate-50 border border-slate-150 rounded-xl p-3.5">
        <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
          <span className="text-[11px] font-bold text-slate-800">Orden #4821</span>
          <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">En tránsito · 12 min</span>
        </div>
        <div className="relative pl-4 border-l border-slate-200 space-y-2 mt-0.5">
          <div className="text-[11px]">
            <span className="absolute -left-[4.5px] top-1 size-2 rounded-full bg-slate-300 ring-2 ring-slate-50" />
            <p className="text-slate-400 text-[10px] leading-none">Origen</p>
            <p className="font-medium text-slate-700 mt-0.5">Farmacia Aliada</p>
          </div>
          <div className="text-[11px]">
            <span className="absolute -left-[4.5px] top-1 size-2 rounded-full bg-amber-500 ring-2 ring-slate-50 shadow-[0_0_6px_#f59e0b]" />
            <p className="text-amber-600 text-[10px] leading-none">Ruta</p>
            <p className="font-bold text-slate-900 mt-0.5">Unidad Yummy #844</p>
          </div>
        </div>
      </div>
    )
  }
];

const InfraCard = memo(function InfraCard({ card, delay }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  return (
    <article
      ref={ref}
      className={[
        'group flex flex-col gap-5 p-8 rounded-[28px]',
        'bg-surface border border-border',
        'transition-all duration-500 ease-out',
        'hover:shadow-card-lg hover:-translate-y-1 hover:border-slate-300/70',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
      ].join(' ')}
      style={{ transitionDelay: inView ? delay : '0ms' }}
    >
      {/* Icono de Módulo */}
      <div className={['flex items-center justify-center w-14 h-14 rounded-2xl border border-border/80 bg-white shadow-sm group-hover:scale-105 transition-transform duration-300', card.colorIcon].join(' ')}>
        {card.icon}
      </div>
      
      {/* Etiqueta de Categoría */}
      <span className={['text-[10px] font-bold tracking-widest uppercase', card.colorLabel].join(' ')}>
        {card.label}
      </span>
      
      {/* Copys e Información */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[17px] font-bold text-ink leading-snug">{card.title}</h3>
        <p className="text-[14px] text-ink-secondary leading-relaxed">{card.description}</p>
      </div>

      {/* Inyección de la Micro-UI (Interactividad integrada) */}
      <div className="w-full mt-2">
        {card.visual}
      </div>
      
      {/* Pie de Tarjeta con Datos Técnicos */}
      <div className="mt-auto pt-4 border-t border-border">
        <p className="text-[11px] text-ink-tertiary font-mono font-medium tracking-wide">{card.detail}</p>
      </div>
    </article>
  );
});

export const InfrastructureSection = memo(function InfrastructureSection() {
  const { ref: headRef, inView: headInView } = useInView();

  return (
    <section id="infraestructura" className="py-24 bg-white" aria-labelledby="infra-heading">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header de Sección */}
        <div ref={headRef} className={['text-center max-w-2xl mx-auto mb-16 transition-all duration-600 ease-out', headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'].join(' ')}>
          <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-brand bg-brand-light rounded-full mb-6">
            Infraestructura
          </span>
          <h2 id="infra-heading" className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mb-5 leading-[1.15]">
            Una capa digital.<br />Un solo flujo de trabajo.
          </h2>
          <p className="text-[16px] text-ink-secondary leading-relaxed">
            Menos llamadas entre médicos, farmacias y pacientes. Menos errores operativos. Más tiempo enfocado en la salud.
          </p>
        </div>

        {/* Grid Corporativo de 3 Columnas Autónomas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INFRA_CARDS.map((card, i) => (
            <InfraCard key={card.id} card={card} delay={`${i * 120}ms`} />
          ))}
        </div>
      </div>

      {/* Estilos para la barra de escaneo de la Micro-UI de API */}
      <style>{`
        @keyframes scan {
          0%, 100% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(42px); }
          90% { opacity: 1; }
        }
      `}</style>
    </section>
  );
});
