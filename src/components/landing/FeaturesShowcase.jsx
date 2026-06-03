import React, { memo, useState, useCallback } from 'react';
import { useInView } from '../../hooks/useInView';

import profesionalImg from '../../assets/profesional.png';
import farmaciaImg from '../../assets/Farmacia.png';
import consultorioImg from '../../assets/consultorio.png';

const ROLES = [
  {
    id: 'medicos',
    tabTitle: 'Médicos',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200/60 ring-blue-500',
    dotColor: 'bg-blue-500',
    heading: 'Atención conectada.',
    subhead: 'Gestione su práctica, optimice su tiempo y brinde atención basada en datos reales, no en suposiciones.',
    bullets: [
      { title: 'Continuidad asistencial.', desc: 'Acceda al historial clínico completo de sus pacientes desde la primera consulta. Obtenga contexto inmediato sobre antecedentes, laboratorios previos y tratamientos activos.' },
      { title: 'Dashboard de gestión unificada.', desc: 'KPIs clínicos, financieros y de agenda en una sola pantalla. Controle su práctica sin depender de hojas de cálculo ni procesos manuales.' },
      { title: 'Recetas digitales verificadas.', desc: 'Firma y sello digital validado por el Colegio Médico. Emita recetas con despacho directo a farmacia mediante código QR y trazabilidad completa.' },
      { title: 'Ingresos automatizados.', desc: 'Liquidación directa a su cuenta bancaria. Reciba sus honorarios sin intermediarios, sin esperas y sin procesos de cobranza.' }
    ],
    image: profesionalImg,
    glowColor: 'bg-blue-500',
    customWidget: (
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100/80">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs ring-1 ring-blue-100">CM</div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-slate-400">ID: V-12450332</span>
              <span className="text-[14px] font-bold text-slate-800 leading-none mt-0.5">Carlos Mendoza</span>
            </div>
          </div>
          <div className="bg-emerald-50 text-emerald-600 text-[9px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            EN LÍNEA
          </div>
        </div>
        <div className="flex items-center justify-between bg-slate-50/80 rounded-lg p-2.5 border border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="size-6 rounded-md bg-white shadow-sm flex items-center justify-center text-blue-500">
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-[12px] font-semibold text-slate-700">Receta Emitida y Validada</span>
          </div>
          <svg className="size-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    )
  },
  {
    id: 'farmacias',
    tabTitle: 'Farmacias',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/60 ring-emerald-500',
    dotColor: 'bg-emerald-500',
    heading: 'Despache más rápido, con menos errores.',
    subhead: 'Optimice su inventario, automatice la logística y despache con precisión. Una infraestructura diseñada para proteger su rentabilidad y eliminar la fricción en mostrador.',
    bullets: [
      { title: 'Gestión de inventario de grado farmacéutico.', desc: 'Control total sobre lotes y fechas de vencimiento. Gestione su abastecimiento directamente desde el Marketplace B2B conectado a proveedores aliados.' },
      { title: 'Validación de recetas en segundos.', desc: 'Escanee la receta digital, valide la identidad del paciente y verifique la prescripción en menos de 3 segundos.' },
      { title: 'Stock predictivo y sin quiebres.', desc: 'Cruce la demanda de prescripciones con el histórico de ventas para anticipar compras y evitar pérdidas por falta de inventario.' },
      { title: 'Cobro embebido en el despacho.', desc: 'Procese pagos C2P y B2P dentro del flujo de dispensación. La conciliación financiera ocurre automáticamente al cierre del día.' }
    ],
    image: farmaciaImg,
    glowColor: 'bg-emerald-500',
    customWidget: (
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-start gap-3">
          <div className="relative size-12 bg-slate-50 rounded-xl shadow-sm border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-emerald-500 shadow-[0_0_8px_#10b981] animate-[scan_2s_ease-in-out_infinite]" />
            <svg className="size-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
          </div>
          <div className="flex flex-col pt-0.5 w-full">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase">QR Detectado</span>
              <span className="text-[10px] font-mono text-slate-400">0.3s</span>
            </div>
            <span className="text-[14px] font-bold text-slate-800 leading-tight">Amoxicilina 500mg</span>
            <span className="text-[11px] text-slate-500 mt-0.5">Dosis: Cada 8hrs (Lote A89)</span>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 mt-1 pt-3 border-t border-slate-100">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Stock actual</span>
            <span className="text-[11px] font-bold text-slate-700">142 Cajas</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full w-[85%]"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'clinicas',
    tabTitle: 'Clínicas',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200/60 ring-indigo-500',
    dotColor: 'bg-indigo-500',
    heading: 'Control total de su clínica, sin hojas de cálculo.',
    subhead: 'Para que usted se enfoque en la atención, no en el papeleo.',
    bullets: [
      { title: 'Conciliación financiera automatizada.', desc: 'Liquidación nocturna automática con soporte para C2P, B2P y Zelle con registro automático en Bancaribe.' },
      { title: 'Control de operaciones y espacios.', desc: 'Administre consultorios, ocupación y flujos de trabajo en tiempo real con visibilidad completa sobre la productividad del centro.' },
      { title: 'Abastecimiento inteligente.', desc: 'Conéctese directamente con proveedores aliados desde el Marketplace B2B y reduzca tiempos de compra, costos operativos y procesos manuales.' },
      { title: 'Gestión integral de personal.', desc: 'Administre nómina, turnos, roles y accesos desde un panel centralizado con estándares unificados de seguridad y auditoría.' }
    ],
    image: consultorioImg,
    glowColor: 'bg-indigo-500',
    customWidget: (
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-start mb-2">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Cierre Nocturno</span>
            <div className="flex items-center gap-2">
              <span className="text-[26px] font-extrabold text-slate-900 leading-none">$12,840</span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-100">+14%</span>
            </div>
          </div>
          <div className="size-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center mt-1 mb-3">
          <span className="text-[11px] font-semibold text-slate-600 flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            Liquidación Completada
          </span>
          <span className="text-[10px] font-mono text-slate-400">100% Auditado</span>
        </div>
        <div className="flex items-end gap-1.5 h-10 mt-2">
          {/* Progresión de Color en Gráfico */}
          {[
            { h: 40, c: 'bg-indigo-100' },
            { h: 30, c: 'bg-indigo-200' },
            { h: 60, c: 'bg-indigo-300' },
            { h: 45, c: 'bg-indigo-400' },
            { h: 75, c: 'bg-indigo-500' },
            { h: 50, c: 'bg-indigo-600' },
            { h: 100, c: 'bg-[#002EE5] shadow-[0_0_8px_rgba(0,46,229,0.3)]' }
          ].map((bar, i) => (
            <div 
              key={i} 
              className={`flex-1 rounded-t-sm transition-all duration-500 hover:opacity-80 ${bar.c}`} 
              style={{ height: `${bar.h}%` }}
            ></div>
          ))}
        </div>
      </div>
    )
  }
];

const VisualPanel = memo(function VisualPanel({ role }) {
  return (
    <div className="relative w-full h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-[0_24px_50px_-12px_rgba(0,0,0,0.15)] group">
      <img src={role.image} alt={role.heading} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" draggable="false" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/30 to-transparent opacity-90" />
      <div className={`absolute bottom-0 left-4 w-48 h-48 ${role.glowColor} rounded-full mix-blend-screen filter blur-[80px] opacity-40 transition-colors duration-500`} />
      <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:w-[340px] bg-white/95 backdrop-blur-xl border border-white/40 rounded-2xl p-5 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.3)] animate-float">
        {role.customWidget}
      </div>
    </div>
  );
});

export const FeaturesShowcase = memo(function FeaturesShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const { ref: headRef, inView: headInView } = useInView();
  const { ref: bodyRef, inView: bodyInView } = useInView({ threshold: 0.05 });
  const active = ROLES[activeIdx];
  const handleTab = useCallback((i) => setActiveIdx(i), []);

  return (
    <section id="soluciones" className="py-24 bg-white" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headRef} className={['text-center max-w-2xl mx-auto mb-16 transition-all duration-600 ease-out', headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'].join(' ')}>
          <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-brand bg-brand-light rounded-full mb-6 border border-brand/10">
            Plataforma
          </span>
          <h2 id="features-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-5 leading-[1.12]">
            Todo el ciclo clínico.<br />Un solo sistema.
          </h2>
          <p className="text-[16px] text-slate-600 leading-relaxed">
            Desde el primer diagnóstico hasta la conciliación financiera. Healtng orquesta cada paso sin fisuras para cada actor del ecosistema.
          </p>
        </div>

        <div ref={bodyRef} className={['grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start transition-all duration-700 ease-out', bodyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'].join(' ')}>
          <div className="flex flex-col gap-0 lg:sticky lg:top-24">
            <div className="flex flex-wrap gap-2.5 mb-8" role="tablist">
              {ROLES.map((role, i) => {
                const isActive = i === activeIdx;
                return (
                  <button key={role.id} role="tab" aria-selected={isActive} onClick={() => handleTab(i)} className={['px-4 py-2 rounded-full text-[13px] font-semibold border flex items-center gap-2 transition-all duration-200', isActive ? `${role.badgeColor} shadow-sm ring-1 ring-offset-1` : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100'].join(' ')}>
                    <span className={['size-1.5 rounded-full transition-colors duration-300', isActive ? role.dotColor : 'bg-slate-400'].join(' ')} />
                    {role.tabTitle}
                  </button>
                );
              })}
            </div>

            <div id={`panel-${active.id}`} role="tabpanel" key={active.id} className="flex flex-col gap-6 animate-in fade-in slide-in-from-left-4 duration-500">
              <h3 className="text-3xl font-bold text-slate-900 leading-tight">{active.heading}</h3>
              <p className="text-[16px] text-slate-600 leading-relaxed max-w-md font-medium">{active.subhead}</p>
              <ul className="flex flex-col gap-5 mt-2" role="list">
                {active.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <svg viewBox="0 0 20 20" fill="none" className={`size-5 shrink-0 mt-0.5 transition-colors duration-300 ${active.dotColor.replace('bg-', 'text-')}`} aria-hidden="true">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <p className="text-[15px] font-bold text-slate-900 leading-snug">{b.title}</p>
                      <p className="text-[13.5px] text-slate-600 leading-relaxed mt-1">{b.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Botón en Azul Healtng */}
              <a href="#piloto" className="inline-flex items-center gap-2 self-start mt-4 px-6 py-3.5 rounded-full border-2 border-[#002EE5] text-[#002EE5] text-[14px] font-bold hover:bg-[#002EE5] hover:text-white transition-all duration-200 shadow-sm active:scale-[0.98]">
                Solicitar acceso anticipado
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4" aria-hidden="true">
                  <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L9.19 8 6.22 5.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <div key={active.id} className="animate-[fadeSlideUp_0.4s_ease-out_both]"><VisualPanel role={active} /></div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes scan { 0%, 100% { transform: translateY(0); opacity: 0; } 10% { opacity: 1; } 50% { transform: translateY(44px); } 90% { opacity: 1; } }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
});
