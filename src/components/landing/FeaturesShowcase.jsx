import React, { memo, useState, useCallback } from 'react';
import { useInView } from '../../hooks/useInView';
import pantallasUrl from '../../assets/pantallas.png';

// ─── Ilustración Órdenes ────────────────────────────────────────────────────
function OrdersIllustration() {
  return (
    <svg viewBox="0 0 440 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
      <rect x="40" y="30" width="220" height="160" rx="16" fill="white" stroke="#E4E8F0" strokeWidth="1.5"/>
      <rect x="40" y="30" width="220" height="44" rx="16" fill="#002EE5" fillOpacity="0.05"/>
      <circle cx="68" cy="52" r="10" fill="#002EE5" fillOpacity="0.12"/>
      <text x="86" y="48" fontSize="11" fill="#002EE5" fontWeight="700" fontFamily="Manrope,sans-serif">Amoxicilina · 500mg</text>
      <text x="86" y="63" fontSize="9" fill="#6B7592" fontFamily="Manrope,sans-serif">Dosis: 500mg · Frecuencia: cada 8hrs</text>
      <line x1="56" y1="86" x2="244" y2="86" stroke="#E4E8F0" strokeWidth="1"/>
      <text x="56" y="104" fontSize="9" fill="#6B7592" fontFamily="Manrope,sans-serif">Dr. Jesus Ferrer · ESPECIALISTA</text>
      <text x="56" y="120" fontSize="9" fill="#6B7592" fontFamily="Manrope,sans-serif">Emitida: 28/05/2026 · Válida hasta: 26/08/2026</text>
      <rect x="56" y="132" width="120" height="18" rx="9" fill="#E6F9F4"/>
      <text x="64" y="144" fontSize="8" fill="#00A878" fontWeight="700" fontFamily="Manrope,sans-serif">✓ Firma Digital Verificada</text>
      <rect x="216" y="56" width="30" height="30" rx="6" fill="#002EE5" fillOpacity="0.07"/>
      <rect x="220" y="60" width="8" height="8" rx="1.5" fill="#002EE5"/>
      <rect x="230" y="60" width="8" height="8" rx="1.5" fill="#002EE5" fillOpacity="0.4"/>
      <rect x="220" y="70" width="8" height="8" rx="1.5" fill="#002EE5" fillOpacity="0.4"/>
      <rect x="230" y="70" width="8" height="8" rx="1.5" fill="#002EE5"/>
      <path d="M150 198 L150 228" stroke="#002EE5" strokeWidth="1.5" strokeDasharray="4 3"/>
      <polygon points="144,226 156,226 150,238" fill="#002EE5" fillOpacity="0.5"/>
      <rect x="70" y="240" width="180" height="64" rx="14" fill="white" stroke="#E4E8F0" strokeWidth="1.5"/>
      <circle cx="98" cy="272" r="16" fill="#E6F9F4"/>
      <text x="94" y="277" fontSize="13" fill="#00A878" textAnchor="middle">✓</text>
      <text x="120" y="265" fontSize="10" fill="#0A0E1A" fontWeight="700" fontFamily="Manrope,sans-serif">Farmacia Central</text>
      <text x="120" y="280" fontSize="8.5" fill="#6B7592" fontFamily="Manrope,sans-serif">Dispensada · 28/05 · 10:32 AM</text>
      <rect x="310" y="60" width="100" height="200" rx="14" fill="white" stroke="#E4E8F0" strokeWidth="1.5"/>
      <text x="330" y="84" fontSize="8" fill="#6B7592" fontFamily="Manrope,sans-serif" fontWeight="700" letterSpacing="1">ESTADO</text>
      {[
        { y: 108, color: '#00A878', label: 'Emitida'     },
        { y: 144, color: '#00A878', label: 'QR activo'   },
        { y: 180, color: '#F59E0B', label: 'En farmacia' },
        { y: 216, color: '#E4E8F0', label: 'Entregada'   },
      ].map((s, i) => (
        <g key={i}>
          <circle cx="328" cy={s.y} r="6" fill={s.color}/>
          {i < 3 && <line x1="328" y1={s.y + 6} x2="328" y2={s.y + 32} stroke="#E4E8F0" strokeWidth="1.5"/>}
          <text x="342" y={s.y + 5} fontSize="9" fill="#3D4458" fontFamily="Manrope,sans-serif">{s.label}</text>
        </g>
      ))}
    </svg>
  );
}

// ─── Ilustración Finanzas ────────────────────────────────────────────────────
function FinanceIllustration() {
  const bars = [55, 42, 68, 50, 80, 65, 92];
  return (
    <svg viewBox="0 0 440 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
      <rect x="30" y="20" width="380" height="300" rx="20" fill="white" stroke="#E4E8F0" strokeWidth="1.5"/>
      <text x="54" y="54" fontSize="12" fill="#6B7592" fontFamily="Manrope,sans-serif">Conciliación del día</text>
      <text x="54" y="80" fontSize="28" fill="#0A0E1A" fontWeight="800" fontFamily="Manrope,sans-serif">$12,840</text>
      <rect x="54" y="90" width="80" height="20" rx="10" fill="#E6F9F4"/>
      <text x="62" y="104" fontSize="8.5" fill="#00A878" fontWeight="700" fontFamily="Manrope,sans-serif">+14.2% vs ayer</text>
      <rect x="310" y="40" width="78" height="26" rx="10" fill="#002EE5" fillOpacity="0.08"/>
      <text x="322" y="57" fontSize="9.5" fill="#002EE5" fontWeight="700" fontFamily="Manrope,sans-serif">Bancaribe ✓</text>
      {bars.map((h, i) => (
        <rect key={i} x={54 + i * 50} y={260 - (h / 100) * 120} width={32} height={(h / 100) * 120}
          rx="8" fill="#002EE5" fillOpacity={i === bars.length - 1 ? 0.9 : 0.12 + i * 0.08}/>
      ))}
      <line x1="54" y1="260" x2="406" y2="260" stroke="#E4E8F0" strokeWidth="1"/>
      <polyline points="70,248 120,238 170,224 220,234 270,210 320,220 370,196"
        stroke="#002EE5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.35"/>
      <circle cx="370" cy="196" r="5" fill="#002EE5"/>
      <circle cx="370" cy="196" r="9" fill="#002EE5" fillOpacity="0.15"/>
    </svg>
  );
}

// ─── Datos de roles ──────────────────────────────────────────────────────────
const ROLES = [
  {
    id: 'medicos',
    tab: 'Para profesionales de salud',
    heading: 'Atención conectada.',
    subhead:
      'Gestione su práctica, optimice su tiempo y brinde atención basada en datos reales, no en suposiciones.',

    bullets: [
      {
        title: 'Continuidad asistencial.',
        desc: 'Acceda al historial clínico completo de sus pacientes desde la primera consulta. Obtenga contexto inmediato sobre antecedentes, laboratorios previos y tratamientos activos.'
      },
      {
        title: 'Dashboard de gestión unificada.',
        desc: 'KPIs clínicos, financieros y de agenda en una sola pantalla. Controle su práctica sin depender de hojas de cálculo ni procesos manuales.'
      },
      {
        title: 'Recetas digitales verificadas.',
        desc: 'Firma digital validada por el Colegio Médico. Emita recetas con despacho directo a farmacia mediante código QR y trazabilidad completa.'
      },
      {
        title: 'Ingresos automatizados.',
        desc: 'Liquidación directa vía Bancaribe. Reciba sus honorarios sin intermediarios, sin esperas y sin procesos de cobranza.'
      }
    ],

    visual: 'screenshot'
  },

  {
    id: 'farmacias',
    tab: 'Para farmacias',
    heading: 'Orquestación de alto rendimiento.',
    subhead:
      'Optimice su inventario, automatice la logística y despache con precisión. Una infraestructura diseñada para proteger su rentabilidad y eliminar la fricción en mostrador.',

    bullets: [
      {
        title: 'Gestión de inventario de grado farmacéutico.',
        desc: 'Control total sobre lotes y fechas de vencimiento. Gestione su abastecimiento directamente desde el Marketplace B2B conectado a proveedores aliados.'
      },
      {
        title: 'Validación de recetas en segundos.',
        desc: 'Escanee la receta digital, valide la identidad del paciente y verifique la prescripción en menos de 3 segundos.'
      },
      {
        title: 'Stock predictivo y sin quiebres.',
        desc: 'Cruce la demanda de prescripciones con el histórico de ventas para anticipar compras y evitar pérdidas por falta de inventario.'
      },
      {
        title: 'Cobro embebido en el despacho.',
        desc: 'Procese pagos C2P y B2P dentro del flujo de dispensación. La conciliación financiera ocurre automáticamente al cierre del día.'
      }
    ],

    visual: 'orders'
  },

  {
    id: 'clinicas',
    tab: 'Para centros de atención',
    heading: 'Infraestructura operativa.',
    subhead:
      'Gestione sus espacios, su personal y sus suministros en una sola plataforma. Un ecosistema que automatiza lo administrativo para que usted se enfoque en la salud.',

    bullets: [
      {
        title: 'Conciliación financiera automatizada.',
        desc: 'Liquidación nocturna automática con soporte para C2P, B2P y Zelle bajo una sola capa de trazabilidad financiera.'
      },
      {
        title: 'Control de operaciones y espacios.',
        desc: 'Administre consultorios, ocupación y flujos de trabajo en tiempo real con visibilidad completa sobre la productividad del centro.'
      },
      {
        title: 'Abastecimiento inteligente.',
        desc: 'Conéctese directamente con proveedores aliados desde el Marketplace B2B y reduzca tiempos de compra, costos operativos y procesos manuales.'
      },
      {
        title: 'Gestión integral de personal.',
        desc: 'Administre nómina, turnos, roles y accesos desde un panel centralizado con estándares unificados de seguridad y auditoría.'
      }
    ],

    visual: 'finance'
  }
];
// ─── Panel visual derecho ────────────────────────────────────────────────────
const VisualPanel = memo(function VisualPanel({ role }) {
  if (role.visual === 'screenshot') {
    return (
      <div className="rounded-2xl overflow-hidden border border-border shadow-card-lg bg-white">
        <div className="flex items-center gap-1.5 px-4 py-3 bg-surface border-b border-border">
          <span className="size-2.5 rounded-full bg-[#FF5F57]" />
          <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="size-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-auto text-[10px] text-ink-tertiary tracking-wide font-inter">app.healtng.com</span>
        </div>
        <img src={pantallasUrl} alt="Dashboard de Healtng" className="w-full block" loading="lazy" decoding="async" draggable="false" />
      </div>
    );
  }
  if (role.visual === 'orders') {
    return (
      <div className="rounded-2xl overflow-hidden border border-border shadow-card-lg bg-[#F7F8FB] p-6">
        <OrdersIllustration />
      </div>
    );
  }
  return (
    <div className="rounded-2xl overflow-hidden border border-border shadow-card-lg bg-[#F7F8FB] p-6">
      <FinanceIllustration />
    </div>
  );
});

// ─── Componente principal ────────────────────────────────────────────────────
export const FeaturesShowcase = memo(function FeaturesShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const { ref: headRef, inView: headInView } = useInView();
  const { ref: bodyRef, inView: bodyInView } = useInView({ threshold: 0.05 });
  const active = ROLES[activeIdx];
  const handleTab = useCallback((i) => setActiveIdx(i), []);

  return (
    <section id="soluciones" className="py-24 bg-white" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div ref={headRef} className={['text-center max-w-2xl mx-auto mb-16 transition-all duration-600 ease-out', headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'].join(' ')}>
          <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-brand bg-brand-light rounded-full mb-6">
            Plataforma
          </span>
          <h2 id="features-heading" className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mb-5 leading-[1.12]">
            Todo el ciclo clínico.<br />Un solo sistema.
          </h2>
          <p className="text-[16px] text-ink-secondary leading-relaxed">
            Desde el primer diagnóstico hasta la conciliación financiera. Healtng orquesta cada paso sin fisuras.
          </p>
        </div>

        {/* Layout sticky */}
        <div ref={bodyRef} className={['grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start transition-all duration-700 ease-out', bodyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'].join(' ')}>

          {/* Izquierda */}
          <div className="flex flex-col gap-0 lg:sticky lg:top-24">

            {/* Tabs de rol — el corazón del dinamismo */}
            <div className="flex flex-col gap-0 mb-10" role="tablist" aria-label="Seleccionar rol">
              {ROLES.map((role, i) => (
                <button key={role.id} role="tab" aria-selected={i === activeIdx}
                  onClick={() => handleTab(i)}
                  className={[
                    'group text-left py-2 px-3 rounded-xl transition-all duration-200',
                    'text-[20px] sm:text-[24px] md:text-[28px] font-bold leading-tight tracking-tight',
                    i === activeIdx ? 'text-ink' : 'text-ink/20 hover:text-ink/40',
                  ].join(' ')}
                >
                  <span className="relative">
                    {role.tab}
                    {i === activeIdx && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-brand rounded-full" />
                    )}
                  </span>
                  <span className={i === activeIdx ? 'text-ink' : 'text-ink/20'}></span>
                </button>
              ))}
            </div>

            {/* Contenido del tab */}
            <div id={`panel-${active.id}`} role="tabpanel" key={active.id} className="flex flex-col gap-6">
              <p className="text-[16px] text-ink-secondary leading-relaxed max-w-md">{active.subhead}</p>

              <ul className="flex flex-col gap-5" role="list">
                {active.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <svg viewBox="0 0 20 20" fill="none" className="size-5 shrink-0 mt-0.5 text-brand" aria-hidden="true">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <p className="text-[15px] font-semibold text-ink leading-snug">{b.title}</p>
                      <p className="text-[13px] text-ink-secondary leading-relaxed mt-0.5">{b.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a href="#piloto" className="inline-flex items-center gap-2 self-start mt-2 px-5 py-3 rounded-full border border-ink/15 text-ink text-[13px] font-semibold hover:bg-ink hover:text-white hover:border-ink transition-all duration-200">
                Solicitar demostración
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3.5" aria-hidden="true">
                  <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L9.19 8 6.22 5.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Derecha sticky */}
          <div className="lg:sticky lg:top-24">
            <div key={active.id} className="animate-[fadeSlideUp_0.4s_ease-out_both]">
              <VisualPanel role={active} />
            </div>
            <div className="flex items-center justify-center gap-2 mt-5" aria-hidden="true">
              {ROLES.map((_, i) => (
                <button key={i} onClick={() => handleTab(i)}
                  className={['rounded-full transition-all duration-300', i === activeIdx ? 'w-6 h-1.5 bg-brand' : 'size-1.5 bg-ink/15 hover:bg-ink/30'].join(' ')} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
});