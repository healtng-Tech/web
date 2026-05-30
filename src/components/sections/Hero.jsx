import React from 'react';
import { GradientBlob } from '../ui/GradientBlob';
// Importación correcta de DashboardGrid
import { DashboardGrid } from '../layout/dashboard/DashboardGrid';

export function Hero() {
  return (
    <section
      id="inicio"
      // Gradiente de blanco -> Blanco -> Azul Pastel (#B8D4FF) en la unión
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-[#B8D4FF]"
      aria-label="Encabezado principal"
    >
      {/* ── 1. CAPA DE BLOBS ───────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <GradientBlob
          color="bg-blob-blue"
          size="xl"
          blur="2xl"
          opacity={30} // Bajamos opacidad para el fondo claro
          className="-top-40 -left-48"
        />
        <GradientBlob
          color="bg-blob-violet"
          size="lg"
          blur="xl"
          opacity={25}
          className="top-20 right-[-12%]"
        />
        <GradientBlob
          color="bg-blob-cyan"
          size="md"
          blur="lg"
          opacity={20}
          className="bottom-0 right-[20%]"
        />
      </div>

      {/* ── 2. CONTENIDO ───────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-16">

        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">

          {/* Eyebrow */}
          <div
            className={[
              'inline-flex items-center gap-2',
              'px-3.5 py-1.5 rounded-full mb-6',
              'bg-brand-light border border-brand/20',
              'text-brand text-[11px] font-semibold tracking-widest uppercase',
            ].join(' ')}
          >
            <span className="size-1.5 rounded-full bg-brand animate-pulse" aria-hidden="true" />
            la unica infraestructura orquestadora del sistema sanitario de venezuela
          </div>

          {/* H1 - El titular negro resalta perfecto sobre el gradiente claro */}
          <h1
            className={[
              'font-sans font-extrabold text-ink',
              'text-[40px] sm:text-5xl md:text-[58px] lg:text-[64px]',
              'leading-[1.06] tracking-[-0.04em]',
              'mb-6',
            ].join(' ')}
          >
            El Sistema Operativo
            <br />
            <span className="text-brand">
              de la Salud Privada.
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            className={[
              'text-ink-secondary font-inter',
              'text-base sm:text-lg leading-relaxed',
              'max-w-2xl mb-10',
            ].join(' ')}
          >
            Conectamos médicos, clínicas, farmacias y laboratorios
            en una sola capa operativa. Menos fricción, más control,
            trazabilidad total del episodio clínico.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="https://app.healtng.com/login?action=register"
              className={[
                'inline-flex items-center gap-2',
                'px-6 py-3.5 rounded-full',
                'bg-brand text-white',
                'text-[14px] font-semibold tracking-[-0.01em]',
                'transition-all duration-200',
                'hover:bg-brand/90 hover:shadow-lg hover:-translate-y-px',
                'active:scale-[0.98]',
              ].join(' ')}
            >
              Crear cuenta gratis
            </a>
            <a
              href="#plataforma"
              className={[
                'inline-flex items-center gap-2',
                'px-6 py-3.5 rounded-full',
                'bg-white border border-border text-ink-secondary',
                'text-[14px] font-semibold tracking-[-0.01em]',
                'transition-all duration-200',
                'hover:text-ink hover:border-ink/30 hover:shadow-card',
                'active:scale-[0.98]',
              ].join(' ')}
            >
              Ver la plataforma
            </a>
          </div>
        </div>

        {/* ── 3. MOCKUP INTERACTIVO ──────────────────────────────────────── */}
        <div
          id="plataforma"
          className="relative mx-auto max-w-6xl w-full z-10"
        >
          {/* Halo sutil ambiental en tono violeta/azul sobre el fondo pastel */}
          <div className="absolute inset-x-12 bottom-0 h-40 rounded-full bg-violet-200/50 blur-[100px] pointer-events-none" />

          {/* Contenedor del Dashboard (Marco visual de Fabric Health) */}
          <div
            className={[
              'relative rounded-3xl overflow-hidden',
              'border border-slate-200/50',
              'shadow-[0_24px_70px_-12px_rgba(45,71,114,0.12)]', // Sombra suave institucional
              'bg-[#f8fafc]',
            ].join(' ')}
          >
            {/* Barra de ventana falsa */}
            <div className="flex items-center gap-1.5 px-4 py-3.5 bg-white border-b border-slate-100">
              <span className="size-2.5 rounded-full bg-slate-200" />
              <span className="size-2.5 rounded-full bg-slate-200" />
              <span className="size-2.5 rounded-full bg-slate-200" />
              <span className="ml-auto text-[10px] text-ink-tertiary font-inter tracking-wide">
                app.healtng.com
              </span>
            </div>

            {/* Inserción del DashboardGrid */}
            <div className="p-4 md:p-6 bg-[#f8fafc]">
              <DashboardGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}