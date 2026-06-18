import React, { memo } from 'react';
import { GradientBlob } from '../ui/GradientBlob';
import { DashboardGrid } from '../layout/dashboard/DashboardGrid';

export const Hero = memo(function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-[#B8D4FF]"
      aria-label="Encabezado principal"
    >
      {/* ─── 1. Capa de Blobs Atmosféricos ─────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <GradientBlob
          color="bg-blob-blue"
          size="xl"
          blur="2xl"
          opacity={25}
          className="-top-40 -left-48"
        />
        <GradientBlob
          color="bg-blob-violet"
          size="lg"
          blur="xl"
          opacity={20}
          className="top-20 right-[-12%]"
        />
        <GradientBlob
          color="bg-blob-cyan"
          size="md"
          blur="lg"
          opacity={15}
          className="bottom-0 right-[20%]"
        />
      </div>

      {/* ─── 2. Bloque de Contenido Central ────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">

          {/* Eyebrow de Conversión Local */}
          <div
            className={[
              'inline-flex items-center gap-2',
              'px-4 py-1.5 rounded-full mb-6',
              'bg-brand-light border border-brand/20',
              'text-brand text-[11px] font-bold tracking-widest uppercase font-mono shadow-sm',
            ].join(' ')}
          >
            <span className="size-1.5 rounded-full bg-brand animate-pulse" aria-hidden="true" />
           La evolución de la gestión médica
          </div>

          {/* H1: Humano y Directo */}
          <h1
            className={[
              'font-sans font-extrabold text-slate-900',
              'text-[40px] sm:text-5xl md:text-[56px] lg:text-[62px]',
              'leading-[1.05] tracking-[-0.04em]',
              'mb-6 max-w-3xl',
            ].join(' ')}
          >
            Toda su práctica clínica,{' '}
            <span className="text-brand block sm:inline">
              sincronizada en un solo ecosistema.
            </span>
          </h1>

          {/* Subtítulo: Enfocado en Utilidad Real */}
          <p
            className={[
              'text-ink-secondary font-inter',
              'text-base sm:text-lg leading-relaxed',
              'max-w-2xl mb-10 font-normal',
            ].join(' ')}
          >
            Conecte su consulta con clínicas, laboratorios y las farmacias de la zona.
            Emita recetas digitales verificadas y reciba los pagos directamente sin trámites adicionales.
          </p>

          {/* Acciones */}
          <div className="flex flex-col sm:flex-row items-center gap-3 z-20">
            <a
              href="https://app.healtng.com/iniciar-sesion?action=register"
              className={[
                'inline-flex items-center gap-2',
                'px-6 py-3.5 rounded-full',
                'bg-brand text-white',
                'text-[14px] font-bold tracking-[-0.01em]',
                'transition-all duration-200',
                'hover:bg-brand/90 hover:shadow-xl hover:-translate-y-px',
                'active:scale-[0.98]',
              ].join(' ')}
            >
              Crear cuenta gratis
            </a>
            <a
              href="#soluciones"
              className={[
                'inline-flex items-center gap-2',
                'px-6 py-3.5 rounded-full',
                'bg-white border border-slate-200 text-slate-700',
                'text-[14px] font-semibold tracking-[-0.01em]',
                'transition-all duration-200',
                'hover:text-slate-900 hover:border-slate-300 hover:shadow-card',
                'active:scale-[0.98]',
              ].join(' ')}
            >
              Ver cómo funciona
            </a>
          </div>
        </div>

        {/* ─── 3. Contenedor de la Interfaz Dashboard ────────────────────────── */}
        <div id="plataforma" className="relative mx-auto max-w-5xl w-full z-10 mt-4">
          <div className="absolute inset-x-12 bottom-0 h-40 rounded-full bg-brand/10 blur-[100px] pointer-events-none" />

          <div className="relative rounded-3xl overflow-hidden border border-slate-200/60 shadow-[0_32px_80px_-16px_rgba(0,46,229,0.1)] bg-[#f8fafc]">
            <div className="flex items-center gap-1.5 px-5 py-4 bg-white border-b border-slate-100">
              <div className="size-2.5 rounded-full bg-slate-200" />
              <div className="size-2.5 rounded-full bg-slate-200" />
              <div className="size-2.5 rounded-full bg-slate-200" />
              <div className="ml-auto flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase font-semibold">
                  app.healtng.com
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-[#f8fafc]">
              <DashboardGrid />
            </div>
          </div>
        </div>
      </div>

      {/* Parche molecular de sellado subpíxel */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px bg-[#B8D4FF] z-30 pointer-events-none" 
        style={{ transform: 'translateY(0.5px)' }} 
      />
    </section>
  );
});
