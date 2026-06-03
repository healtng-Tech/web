import React, { memo } from 'react';
import { useInView } from '../../hooks/useInView';

const FOUNDERS = [
  { name: 'Dr. Richard Araujo',     specialty: 'Neurocirugía',          location: 'San Diego',     initial: 'RA', color: 'bg-blue-100 text-blue-700'    },
  { name: 'Psicól. Lucia Ratti',    specialty: 'Psicólogo clínico',     location: 'Valencia',      initial: 'LR', color: 'bg-violet-100 text-violet-700' },
  { name: 'Dr. Luis Pinto',         specialty: 'Gastroenterólogo',      location: 'Naguanagua',    initial: 'LP', color: 'bg-emerald-100 text-emerald-700'},
  { name: 'Dra. Laura Jiménez',     specialty: 'Ginecología',           location: 'Valencia',      initial: 'LJ', color: 'bg-amber-100 text-amber-700'   },
  { name: 'Odont. Isleydi Rojas',   specialty: 'Odontólogo',            location: 'San Diego',     initial: 'IR', color: 'bg-rose-100 text-rose-700'     },
  { name: 'Dra. María Torres',      specialty: 'Dermatología',          location: 'Naguanagua',    initial: 'MT', color: 'bg-teal-100 text-teal-700'     },
];

const DoctorCard = memo(function DoctorCard({ doctor, delay, inView }) {
  return (
    <div className={['flex items-center gap-4 p-5 rounded-2xl bg-white border border-border transition-all duration-500 ease-out hover:shadow-card hover:-translate-y-0.5', inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'].join(' ')} style={{ transitionDelay: inView ? delay : '0ms' }}>
      <div className={['flex items-center justify-center size-11 rounded-full shrink-0 text-[13px] font-bold select-none', doctor.color].join(' ')} aria-hidden="true">{doctor.initial}</div>
      <div className="min-w-0">
        <p className="text-[14px] font-semibold text-ink leading-snug truncate">{doctor.name}</p>
        <p className="text-[12px] text-ink-secondary leading-snug truncate">{doctor.specialty}</p>
        <div className="flex items-center gap-1 mt-1">
          <svg viewBox="0 0 12 12" fill="none" className="size-3 text-ink-tertiary shrink-0" aria-hidden="true">
            <path d="M6 1a3.5 3.5 0 0 1 3.5 3.5C9.5 7.5 6 11 6 11S2.5 7.5 2.5 4.5A3.5 3.5 0 0 1 6 1Z" stroke="currentColor" strokeWidth="1.2"/>
            <circle cx="6" cy="4.5" r="1" fill="currentColor"/>
          </svg>
          <span className="text-[11px] text-ink-tertiary">{doctor.location}</span>
        </div>
      </div>
      <div className="ml-auto shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100">
        <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
        <span className="text-[10px] font-semibold text-emerald-700">Activo</span>
      </div>
    </div>
  );
});

export const FoundersSection = memo(function FoundersSection() {
  const { ref: headRef, inView: headInView } = useInView({ threshold: 0.1 });
  const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.05 });

  return (
    <section id="medicos-piloto" className="py-24 bg-surface border-y border-border" aria-labelledby="founders-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headRef} className={['flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 transition-all duration-600 ease-out', headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'].join(' ')}>
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-brand bg-brand-light rounded-full mb-5 border border-brand/10">Médicos del piloto</span>
            <h2 id="founders-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 leading-[1.15]">Los médicos que ya<br />están adentro.</h2>
            <p className="text-[16px] text-slate-600 leading-relaxed">
              Profesionales de Naguanagua y Valencia que usan Healtng hoy para gestionar su consulta. Son los primeros en usar Healtng del piloto Carabobo 2026.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end shrink-0">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-[56px] font-extrabold text-ink leading-none tracking-tight">{FOUNDERS.length}</span>
              <span className="text-[18px] font-semibold text-ink-secondary">médicos</span>
            </div>
            <p className="text-[13px] text-ink-tertiary">activos en la plataforma · Carabobo</p>
            <div className="mt-3 w-full md:w-48">
              <div className="flex justify-between text-[11px] text-ink-tertiary mb-1.5">
                <span>Piloto: {FOUNDERS.length} de 100</span>
                <span>{Math.round((FOUNDERS.length / 100) * 100)}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-border overflow-hidden">
                <div className="h-full rounded-full bg-brand transition-all duration-1000" style={{ width: `${Math.min((FOUNDERS.length / 100) * 100, 100)}%` }} />
              </div>
            </div>
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FOUNDERS.map((doctor, i) => (
            <DoctorCard key={doctor.name} doctor={doctor} inView={gridInView} delay={`${i * 80}ms`} />
          ))}
        </div>

        <div className={['mt-10 text-center transition-all duration-600 ease-out', gridInView ? 'opacity-100' : 'opacity-0'].join(' ')} style={{ transitionDelay: `${FOUNDERS.length * 80 + 200}ms` }}>
          <p className="text-[14px] text-slate-600 mb-4 font-medium">¿Ejerce en Carabobo? El acceso para médicos es gratuito durante el piloto.</p>
          <a href="https://app.healtng.com/login?action=register" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#002EE5] text-[#002EE5] text-[14px] font-bold tracking-tight transition-all duration-200 hover:bg-[#002EE5] hover:text-white hover:-translate-y-px hover:shadow-sm active:scale-[0.98]">
            Registrarse — acceso gratuito
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4" aria-hidden="true">
              <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L9.19 8 6.22 5.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
});
