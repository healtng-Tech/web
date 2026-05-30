import React, { memo, useCallback } from 'react';
import { useInView } from '../../hooks/useInView';

export const FinalCTA = memo(function FinalCTA({ onOpenModal }) {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const handleCTA = useCallback(() => {
    if (typeof onOpenModal === 'function') onOpenModal();
  }, [onOpenModal]);

  return (
    <section
      id="piloto"
      className="relative overflow-hidden bg-[#002EE5]"
      aria-labelledby="cta-heading"
    >
      {/* Orbes decorativos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-32 size-[500px] rounded-full bg-white/5 blur-[80px]" />
        <div className="absolute -bottom-20 -right-20 size-[400px] rounded-full bg-white/8 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-[#1a4fff]/30 blur-[120px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      {/* Contenido */}
      <div
        ref={ref}
        className={[
          'relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32',
          'flex flex-col items-center text-center gap-8',
          'transition-all duration-700 ease-out',
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ].join(' ')}
      >
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-[11px] font-semibold tracking-widest uppercase">
          <span className="size-1.5 rounded-full bg-white animate-pulse" aria-hidden="true" />
          Piloto Valencia 2026 · Plazas limitadas
        </div>

        {/* Título */}
        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.08] max-w-3xl"
        >
          ¿Listo para coordinar
          <br />
          su operación de salud?
        </h2>

        {/* Subtexto */}
        <p className="text-[16px] sm:text-[17px] text-white/70 leading-relaxed max-w-xl">
          Dé el primer paso hacia una gestión conectada y sin fricción administrativa.
          Implementación progresiva, sin interrumpir su operación diaria.
        </p>

        {/* Micro-formulario */}
        <div
          className="w-full max-w-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col gap-4"
          role="form"
          aria-label="Formulario de contacto para piloto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Nombre de la institución"
              autoComplete="organization"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-[14px] font-medium outline-none focus:border-white/50 focus:bg-white/15 transition-colors duration-150"
            />
            <input
              type="text"
              placeholder="Especialidad o tipo"
              autoComplete="off"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-[14px] font-medium outline-none focus:border-white/50 focus:bg-white/15 transition-colors duration-150"
            />
          </div>
          <input
            type="tel"
            placeholder="WhatsApp (+58)"
            autoComplete="tel"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-[14px] font-medium outline-none focus:border-white/50 focus:bg-white/15 transition-colors duration-150"
          />
          <button
            type="button"
            onClick={handleCTA}
            className={[
              'w-full flex items-center justify-center gap-2',
              'px-6 py-4 rounded-xl',
              'bg-white text-[#002EE5]',
              'text-[15px] font-bold tracking-[-0.01em]',
              'shadow-[0_4px_24px_rgba(255,255,255,0.25)]',
              'transition-all duration-200',
              'hover:bg-white/95 hover:shadow-[0_8px_32px_rgba(255,255,255,0.35)] hover:-translate-y-px',
              'active:scale-[0.98]',
            ].join(' ')}
          >
            Agendar demostración
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4" aria-hidden="true">
              <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L9.19 8 6.22 5.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
          <p className="text-center text-[11px] text-white/40">
            Sin tarjeta de crédito · Respuesta en menos de 24 horas
          </p>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-2">
          {[
            { icon: '🔒', text: 'Setup gratuito para la cohorte fundacional' },
            { icon: '⚡', text: 'Activación el mismo día'                    },
            { icon: '🏥', text: 'Solo para Valencia, por ahora'              },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 text-[12px] text-white/50">
              <span aria-hidden="true">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});