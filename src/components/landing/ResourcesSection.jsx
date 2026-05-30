import React, { memo } from 'react';
import { useInView } from '../../hooks/useInView';

const RESOURCES = [
  {
    id:          'digitalize',
    category:    'Operaciones',
    catColor:    'text-brand bg-brand-light',
    readTime:    '5 min de lectura',
    title:       'Cómo digitalizar su gestión médica sin detener la operación.',
    excerpt:     'La transición digital no tiene que ser un evento disruptivo. Descubra el enfoque de implementación progresiva que permite a los centros médicos operar sin interrupciones.',
    accentColor: 'group-hover:border-brand/40 group-hover:shadow-[0_8px_32px_0_rgba(0,46,229,0.10)]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
        <path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    ),
  },
  {
    id:          'traceability',
    category:    'Farmacias',
    catColor:    'text-amber-700 bg-amber-50',
    readTime:    '7 min de lectura',
    title:       'El impacto operativo de la trazabilidad en farmacias y laboratorios.',
    excerpt:     'Las farmacias que implementan trazabilidad digital reducen un 34% el tiempo de dispensación y eliminan casi por completo los errores de medicación por homonimia.',
    accentColor: 'group-hover:border-amber-300/60 group-hover:shadow-[0_8px_32px_0_rgba(245,158,11,0.10)]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    id:          'middleware',
    category:    'Arquitectura',
    catColor:    'text-emerald-700 bg-emerald-50',
    readTime:    '9 min de lectura',
    title:       'Arquitectura de integraciones: por qué el middleware es el futuro.',
    excerpt:     'El software monolítico en salud está llegando a su límite. Analizamos por qué la arquitectura de capa de orquestación es la única alternativa sostenible para sistemas sanitarios complejos.',
    accentColor: 'group-hover:border-emerald-300/60 group-hover:shadow-[0_8px_32px_0_rgba(0,168,120,0.10)]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
        <rect x="2" y="3" width="6" height="6" rx="1"/><rect x="16" y="3" width="6" height="6" rx="1"/><rect x="9" y="15" width="6" height="6" rx="1"/>
        <path d="M5 9v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9"/><path d="M12 12v3"/>
      </svg>
    ),
  },
];

const ResourceCard = memo(function ResourceCard({ resource, delay, inView }) {
  return (
    <article
      className={[
        'group flex flex-col gap-5 p-8 rounded-[28px]',
        'bg-white border border-border',
        'transition-all duration-400 ease-out',
        'hover:-translate-y-1.5',
        resource.accentColor,
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
      ].join(' ')}
      style={{ transitionDelay: inView ? delay : '0ms' }}
    >
      <div className="flex items-center justify-between">
        <span className={['inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase', resource.catColor].join(' ')}>
          {resource.icon}
          {resource.category}
        </span>
        <span className="text-[11px] text-ink-tertiary">{resource.readTime}</span>
      </div>

      <h3 className="text-[17px] font-bold text-ink leading-snug flex-1">
        {resource.title}
      </h3>

      <p className="text-[13px] text-ink-secondary leading-relaxed">
        {resource.excerpt}
      </p>

      <div className="mt-auto pt-4 border-t border-border">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand hover:gap-2.5 transition-all duration-200"
          aria-label={`Leer: ${resource.title}`}
        >
          Leer perspectiva
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3.5" aria-hidden="true">
            <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L9.19 8 6.22 5.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </article>
  );
});

export const ResourcesSection = memo(function ResourcesSection() {
  const { ref: wrapRef, inView } = useInView({ threshold: 0.08 });

  return (
    <section
      id="perspectivas"
      className="py-24 bg-surface border-t border-border"
      aria-labelledby="resources-heading"
    >
      <div ref={wrapRef} className="max-w-6xl mx-auto px-6">
        <div
          className={[
            'text-center max-w-2xl mx-auto mb-16',
            'transition-all duration-600 ease-out',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
          ].join(' ')}
        >
          <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-brand bg-brand-light rounded-full mb-6">
            Perspectivas
          </span>
          <h2
            id="resources-heading"
            className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mb-5 leading-[1.15]"
          >
            Perspectivas sobre la evolución
            <br />
            del ecosistema de salud.
          </h2>
          <p className="text-[16px] text-ink-secondary leading-relaxed">
            Análisis estratégico y técnico para decisores del sector salud privado en LATAM.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((resource, i) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              inView={inView}
              delay={`${i * 120}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
});