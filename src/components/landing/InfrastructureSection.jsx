import React, { useState, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';

const INFRA_TABS = [
  {
    id: 'interop',
    label: 'Interoperabilidad',
    title: 'Conexión Interoperable',
    description: 'Sincronice sus datos vía API REST. Integramos su EMR sin fricción operativa ni tiempo de inactividad.',
    detail: 'API REST · HL7 FHIR · Webhooks',
    visual: (
      <div className="flex flex-col gap-6 w-full h-full justify-center scale-[1.2] origin-center">
        {/* Tarjeta de Request */}
        <div className="flex items-center justify-between px-5 py-4 bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="size-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#002EE5]">
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M4 17h16a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-[12px] text-slate-500 font-mono">POST /api/v1/patients</p>
              <p className="text-[14px] font-semibold text-slate-900">Sincronización EMR</p>
            </div>
          </div>
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md">200 OK</span>
        </div>
        
        {/* Tarjeta de Código */}
        <div className="px-5 py-4 bg-white rounded-xl border border-slate-200 shadow-sm font-mono text-[12px] text-slate-600 leading-relaxed">
          <span className="text-[#002EE5]">const</span> payload = {'{'} <br/>
          &nbsp;&nbsp;<span className="text-slate-800">"resourceType"</span>: <span className="text-emerald-600">"Patient"</span>,<br/>
          &nbsp;&nbsp;<span className="text-slate-800">"identifier"</span>: <span className="text-emerald-600">"V-12450332"</span>,<br/>
          &nbsp;&nbsp;<span className="text-slate-800">"active"</span>: <span className="text-[#002EE5]">true</span><br/>
          {'}'};
        </div>
      </div>
    )
  },
  {
    id: 'payments',
    label: 'Finanzas',
    title: 'Pagos Automatizados',
    description: 'Conciliación directa con Bancaribe. Procese pagos C2P y B2P con trazabilidad total y liquidación nocturna.',
    detail: 'C2P · B2P · CRIN · Zelle',
    visual: (
      <div className="flex flex-col gap-6 w-full h-full justify-center scale-[1.2] origin-center">
        <div className="flex flex-col items-center justify-center mb-2">
          <div className="size-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4 relative">
            <span className="absolute inset-0 rounded-full animate-ping bg-emerald-100 opacity-75"></span>
            <svg className="size-8 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-[16px] font-bold text-slate-900">Liquidación Exitosa</p>
          <p className="text-[12px] text-slate-500 mt-1">Lote #8492 · Bancaribe</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[13px] text-slate-500">Total liquidado</span>
            <span className="text-[18px] font-bold text-emerald-600">$12,840.00</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-full rounded-full"></div>
          </div>
          <p className="text-[11px] text-slate-400 mt-3 text-right">100% conciliado automáticamente</p>
        </div>
      </div>
    )
  },
  {
    id: 'logistics',
    label: 'Logística',
    title: 'Orquestación Logística',
    description: 'Conectividad nativa para despacho de insumos médicos. Trazabilidad de última milla desde la orden hasta la entrega.',
    detail: 'Yummy Rides · QR Trazable · ETA en vivo',
    visual: (
      <div className="flex flex-col gap-6 w-full h-full justify-center relative scale-[1.2] origin-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50 rounded-xl" />
        
        <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-[11px] font-bold text-amber-600 tracking-wider uppercase mb-1">En tránsito</p>
              <p className="text-[14px] font-bold text-slate-900">Orden #4821</p>
            </div>
            <span className="text-[12px] font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">ETA: 12 min</span>
          </div>

          <div className="relative pl-6 border-l-2 border-slate-100 space-y-6">
            <div className="relative">
              <span className="absolute -left-[25px] top-1 size-3.5 rounded-full bg-slate-300 ring-4 ring-white"></span>
              <p className="text-[12px] text-slate-500">Origen</p>
              <p className="text-[14px] font-medium text-slate-800">Farmacia SAAS - Sede Norte</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[25px] top-1 size-3.5 rounded-full bg-amber-500 ring-4 ring-white shadow-[0_0_10px_rgba(245,158,11,0.3)]"></span>
              <p className="text-[12px] text-amber-600">Ubicación actual</p>
              <p className="text-[14px] font-medium text-slate-900">Unidad Yummy #844</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export function InfrastructureSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % INFRA_TABS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const active = INFRA_TABS[activeIdx];

  return (
    <section id="infraestructura" className="py-24 bg-white overflow-hidden" aria-labelledby="infra-heading">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className={[
            'lg:col-span-5 flex flex-col gap-8',
            'transition-all duration-700 ease-out',
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          ].join(' ')}>
            <div>
              <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-brand bg-brand-light rounded-full mb-6">
                Infraestructura
              </span>
              <h2 id="infra-heading" className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mb-4 leading-[1.15]">
                Una capa digital.<br/>Un solo flujo de trabajo.
              </h2>
              <p className="text-[15px] text-ink-secondary leading-relaxed">
                Transformamos datos aislados en un flujo operativo coordinado. Menos llamadas, menos errores humanos, más capacidad de atención.
              </p>
            </div>
            <div className="flex flex-col gap-3 relative" role="tablist">
              <div className="absolute left-[19px] top-4 bottom-4 w-px bg-slate-100 -z-10"></div>
              {INFRA_TABS.map((tab, i) => {
                const isActive = i === activeIdx;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveIdx(i)}
                    className={[
                      'group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 text-left border',
                      isActive ? 'bg-white shadow-card-lg border-slate-100' : 'bg-transparent border-transparent hover:bg-slate-50'
                    ].join(' ')}
                  >
                    <div className={[
                      'mt-0.5 size-6 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors duration-300 z-10',
                      isActive ? 'bg-[#002EE5] border-[#002EE5]' : 'bg-white border-slate-200 group-hover:border-slate-300'
                    ].join(' ')}>
                      <div className={['size-1.5 rounded-full transition-colors duration-300', isActive ? 'bg-white' : 'bg-transparent'].join(' ')} />
                    </div>
                    <div>
                      <h3 className={['text-[15px] font-bold tracking-tight mb-1 transition-colors duration-300', isActive ? 'text-ink' : 'text-ink-tertiary group-hover:text-ink-secondary'].join(' ')}>
                        {tab.title}
                      </h3>
                      {isActive && (
                        <div className="animate-in slide-in-from-top-2 fade-in duration-300">
                          <p className="text-[13px] text-ink-secondary leading-relaxed mb-3">
                            {tab.description}
                          </p>
                          <p className="text-[10px] font-bold tracking-widest uppercase text-brand">
                            {tab.detail}
                          </p>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <div className={[
            'lg:col-span-7 relative h-[420px] lg:h-[500px] w-full',
            'transition-all duration-700 ease-out delay-150',
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          ].join(' ')}>
            <div className="absolute inset-0 bg-slate-50 rounded-[32px] overflow-hidden shadow-[0_24px_70px_-12px_rgba(45,71,114,0.12)] border border-slate-200/60">
              <div className="absolute top-0 inset-x-0 h-12 bg-white border-b border-slate-100 flex items-center px-5 gap-2 z-20">
                <div className="size-2.5 rounded-full bg-[#FF5F57]"></div>
                <div className="size-2.5 rounded-full bg-[#FEBC2E]"></div>
                <div className="size-2.5 rounded-full bg-[#28C840]"></div>
                <div className="ml-auto flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Sistema en línea</span>
                </div>
              </div>
              <div className="absolute inset-0 pt-12 px-8 pb-8 flex items-center justify-center">
                <div key={active.id} className="w-full max-w-sm animate-in fade-in zoom-in-95 duration-500 ease-out">
                  {active.visual}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}