import React, { memo } from 'react';
import { useInView } from '../../hooks/useInView';
import bancaribeLogoUrl from '../../assets/bancaribe.svg';
import yummyLogoUrl from '../../assets/yummy-rides-logo.svg';

const PARTNERS = [
  {
    id: 'bancaribe',
    name: 'Bancaribe',
    logo: bancaribeLogoUrl,
    desc: 'Procesamiento de pagos seguro y conciliación automatizada.',
    width: 'w-36',
  },
  {
    id: 'yummy',
    name: 'Yummy Rides',
    logo: yummyLogoUrl,
    desc: 'Distribución inteligente y trazabilidad de última milla.',
    width: 'w-32',
  },
];

const PartnerLogo = memo(function PartnerLogo({ partner, delay, inView }) {
  return (
    <div
      className={[
        'group flex flex-col items-center gap-5 p-8 rounded-[24px]',
        'bg-white border border-slate-200/60',
        'transition-all duration-500 ease-out',
        'hover:shadow-card-lg hover:border-slate-300/70 hover:-translate-y-0.5',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
      ].join(' ')}
      style={{ transitionDelay: inView ? delay : '0ms' }}
    >
      <div className="flex items-center justify-center h-12">
        <img
          src={partner.logo}
          alt={`${partner.name} — socio operativo de Healtng`}
          className={[
            partner.width,
            'h-auto object-contain',
            'grayscale opacity-60',
            'group-hover:grayscale-0 group-hover:opacity-100',
            'transition-all duration-400 ease-out',
          ].join(' ')}
          loading="lazy"
          decoding="async"
        />
      </div>
      <p className="text-center text-[13px] text-slate-500 font-medium leading-snug max-w-[200px]">
        {partner.desc}
      </p>
    </div>
  );
});

export const PartnersSection = memo(function PartnersSection() {
  const { ref: wrapRef, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="aliados"
      className="py-24 bg-white border-y border-slate-100"
      aria-labelledby="partners-heading"
    >
      <div ref={wrapRef} className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Texto narrativo limpio y directo */}
          <div
            className={[
              'flex-1 max-w-xl',
              'transition-all duration-600 ease-out',
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6',
            ].join(' ')}
          >
            <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-[#002EE5] bg-[#002EE5]/5 rounded-full mb-6 border border-[#002EE5]/10">
              Nuestra Red de Infraestructura
            </span>
            <h2
              id="partners-heading"
              className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-5 leading-[1.15]"
            >
              Infraestructura integrada con
              <br />
              líderes del mercado.
            </h2>
            <p className="text-[16px] text-slate-600 leading-relaxed mb-8 font-medium">
              Healtng une en un solo lugar los servicios financieros y logísticos que el sector salud privado en Venezuela necesita. Cada alianza está diseñada para garantizar que la salud nunca se detenga.
            </p>
            <p className="text-[13.5px] text-slate-500 font-semibold mb-5">
              ¿Su clínica o farmacia busca optimizar su logística y flujos de cobro?
            </p>
            
            {/* CTA directo a correo con asunto prellenado y estilo de marca */}
            <a
              href="mailto:info@healtng.com?subject=Interés%20en%20alianza%20operativa%20con%20Healtng"
              className={[
                'inline-flex items-center gap-2',
                'px-6 py-3.5 rounded-full',
                'border-2 border-[#002EE5] text-[#002EE5] bg-transparent',
                'text-[14px] font-bold tracking-tight',
                'transition-all duration-200',
                'hover:bg-[#002EE5] hover:text-white hover:shadow-sm hover:-translate-y-px',
                'active:scale-[0.98]',
              ].join(' ')}
            >
              Quiero ser un aliado operativo
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4" aria-hidden="true">
                <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L9.19 8 6.22 5.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Logos */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto lg:max-w-[280px]">
            {PARTNERS.map((partner, i) => (
              <PartnerLogo
                key={partner.id}
                partner={partner}
                inView={inView}
                delay={`${(i + 1) * 150}ms`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
