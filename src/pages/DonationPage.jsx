import { memo, useState, useCallback } from 'react';
import { Heart, MapPin, ChevronDown, Send, Loader2, Building2 } from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: '¿Quiénes pueden solicitar una férula?',
    a: 'Cualquier persona que haya sufrido una fractura, esguince o lesión que requiera inmovilización. Las donaciones están destinadas a personas de escasos recursos en Venezuela que no pueden costear un inmovilizador ortopédico.',
  },
  {
    q: '¿Cómo se entregan las férulas?',
    a: 'Una vez recibida tu solicitud, nos pondremos en contacto vía telefónica o email en un plazo de 24 a 48 horas para coordinar la entrega en el centro de acopio en Valencia, Carabobo. Evaluamos envíos a otras zonas según disponibilidad.',
  },
  {
    q: '¿Tienen algún costo?',
    a: 'No. Las férulas e inmovilizadores son completamente gratuitos. Son donaciones de Healtng y aliados estratégicos comprometidos con la salud de la comunidad venezolana.',
  },
  {
    q: '¿Puedo donar férulas o insumos?',
    a: '¡Sí! Aceptamos donaciones de férulas, inmovilizadores, vendas, yeso y otros insumos ortopédicos en buen estado. Puedes llevarlos directamente al centro de acopio en Valencia, Carabobo, o contactarnos para coordinar.',
  },
  {
    q: '¿Cuánto tarda la entrega?',
    a: 'Procesamos las solicitudes en un plazo de 24 a 48 horas hábiles. La entrega se coordina según la disponibilidad del inventario y la ubicación del solicitante.',
  },
  {
    q: '¿Qué tipos de inmovilizadores tienen disponibles?',
    a: 'Contamos con férulas para brazo y antebrazo en varias tallas, inmovilizadores para dedos (tipo martillo, fracturas digitales) e inmovilizadores para muñeca (tipo cock-up, para túnel carpiano y esguinces).',
  },
  {
    q: '¿Cómo se usa una férula impresa en 3D?',
    a: 'Las férulas impresas en 3D se moldean con agua caliente. Solo necesitas sumergir la férula en agua a unos 60-70 °C durante 30 a 60 segundos hasta que el material se vuelva flexible. Luego la retiras, la secas ligeramente y la colocas sobre la zona lesionada, moldeándola suavemente con las manos para que se adapte a la anatomía del paciente. Al enfriarse en 2 a 3 minutos, el material recupera su rigidez y queda con la forma deseada. Si necesitas reajustarla, puedes repetir el proceso con agua caliente.',
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="flex flex-col gap-3">
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white transition-all duration-200 hover:border-slate-300">
          <button
            type="button"
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
          >
            <span className="text-[15px] font-semibold text-slate-900">{item.q}</span>
            <ChevronDown className={`size-5 text-slate-400 shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180 text-brand' : ''}`} />
          </button>
          <div
            className={`grid transition-all duration-200 ease-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-5 text-[14px] text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SplintSvg({ className }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <rect x="35" y="20" width="50" height="85" rx="10" fill="#E8EFFF" stroke="#002EE5" strokeWidth="2" />
      <rect x="42" y="28" width="36" height="8" rx="3" fill="#002EE5" opacity="0.15" />
      <rect x="42" y="42" width="36" height="8" rx="3" fill="#002EE5" opacity="0.15" />
      <rect x="42" y="56" width="36" height="8" rx="3" fill="#002EE5" opacity="0.15" />
      <rect x="42" y="70" width="36" height="8" rx="3" fill="#002EE5" opacity="0.15" />
      <circle cx="45" cy="48" r="3" fill="#002EE5" opacity="0.3" />
      <circle cx="45" cy="62" r="3" fill="#002EE5" opacity="0.3" />
      <circle cx="45" cy="76" r="3" fill="#002EE5" opacity="0.3" />
    </svg>
  );
}

function FingerSvg({ className }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <rect x="40" y="25" width="18" height="70" rx="6" fill="#ECFDF5" stroke="#00A878" strokeWidth="2" />
      <rect x="44" y="35" width="10" height="14" rx="3" fill="#00A878" opacity="0.15" />
      <rect x="44" y="55" width="10" height="14" rx="3" fill="#00A878" opacity="0.15" />
      <rect x="44" y="75" width="10" height="12" rx="3" fill="#00A878" opacity="0.15" />
      <circle cx="53" cy="38" r="1.5" fill="#00A878" opacity="0.4" />
      <circle cx="53" cy="58" r="1.5" fill="#00A878" opacity="0.4" />
      <circle cx="53" cy="78" r="1.5" fill="#00A878" opacity="0.4" />
      <rect x="58" y="44" width="28" height="4" rx="2" fill="#00A878" opacity="0.2" />
      <rect x="58" y="64" width="28" height="4" rx="2" fill="#00A878" opacity="0.2" />
      <rect x="58" y="84" width="22" height="4" rx="2" fill="#00A878" opacity="0.2" />
    </svg>
  );
}

function WristSvg({ className }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <rect x="30" y="50" width="60" height="40" rx="8" fill="#F5F0FF" stroke="#7C3AED" strokeWidth="2" />
      <rect x="36" y="56" width="48" height="6" rx="3" fill="#7C3AED" opacity="0.15" />
      <rect x="36" y="66" width="48" height="6" rx="3" fill="#7C3AED" opacity="0.15" />
      <rect x="36" y="76" width="48" height="6" rx="3" fill="#7C3AED" opacity="0.15" />
      <rect x="34" y="86" width="24" height="4" rx="2" fill="#7C3AED" opacity="0.3" />
      <rect x="62" y="86" width="24" height="4" rx="2" fill="#7C3AED" opacity="0.3" />
      <circle cx="55" cy="60" r="2" fill="#7C3AED" opacity="0.4" />
      <circle cx="55" cy="70" r="2" fill="#7C3AED" opacity="0.4" />
      <circle cx="55" cy="80" r="2" fill="#7C3AED" opacity="0.4" />
    </svg>
  );
}

const ITEMS = [
  {
    title: 'Férulas',
    subtitle: 'Brazo y antebrazo',
    description: 'Férulas rígidas en distintas tallas para inmovilización de fracturas de brazo y antebrazo, esguinces severos y soporte post-operatorio.',
    colors: { stroke: '#002EE5', bg: '#E8EFFF', accent: 'from-[#002EE5] to-[#3375FF]' },
    Svg: SplintSvg,
  },
  {
    title: 'Inmovilizadores para dedos',
    subtitle: 'Tipo martillo y fracturas',
    description: 'Inmovilizadores digitales diseñados para fracturas de falanges y dedo en martillo. Diseño anatómico con ajuste cómodo y seguro.',
    colors: { stroke: '#00A878', bg: '#ECFDF5', accent: 'from-[#00A878] to-[#34D399]' },
    Svg: FingerSvg,
  },
  {
    title: 'Inmovilizadores para muñeca',
    subtitle: 'Tipo cock-up y carpiano',
    description: 'Inmovilizadores para síndrome del túnel carpiano, esguinces de muñeca y post-fractura. Soporte rígido con acolchado interno.',
    colors: { stroke: '#7C3AED', bg: '#F5F0FF', accent: 'from-[#7C3AED] to-[#A78BFA]' },
    Svg: WristSvg,
  },
];

export const DonationPage = memo(function DonationPage() {
  const [formData, setFormData] = useState({ nombre: '', apellido: '', telefono: '', email: '', comentario: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = useCallback((field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/donaciones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ nombre: '', apellido: '', telefono: '', email: '', comentario: '' });
      } else {
        const data = await res.json();
        setStatus('error');
        console.error('Error del servidor:', data.error);
      }
    } catch {
      setStatus('error');
    }
  }, [formData]);

  const [centroData, setCentroData] = useState({ nombreCentro: '', responsable: '', telefono: '', email: '', direccion: '', comentario: '' });
  const [centroStatus, setCentroStatus] = useState('idle');

  const handleCentroChange = useCallback((field) => (e) => {
    setCentroData((prev) => ({ ...prev, [field]: e.target.value }));
  }, []);

  const handleCentroSubmit = useCallback(async (e) => {
    e.preventDefault();
    setCentroStatus('submitting');

    try {
      const res = await fetch('/api/centros-acopio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(centroData),
      });

      if (res.ok) {
        setCentroStatus('success');
        setCentroData({ nombreCentro: '', responsable: '', telefono: '', email: '', direccion: '', comentario: '' });
      } else {
        const data = await res.json();
        setCentroStatus('error');
        console.error('Error del servidor:', data.error);
      }
    } catch {
      setCentroStatus('error');
    }
  }, [centroData]);

  return (
    <div className="min-h-screen">
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-b from-[#FFF1F2] to-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <svg className="w-full h-full">
            <pattern id="donate-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E11D48" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#donate-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-rose-200 text-rose-700 text-[11px] font-bold tracking-widest uppercase shadow-sm mb-6">
            <Heart className="size-3.5 fill-rose-500 text-rose-500" />
            Iniciativa de donación
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-[-0.03em] leading-[1.06] mb-6">
            Dona una férula,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">devuelve la movilidad</span>
          </h1>

          <p className="text-[16px] sm:text-[18px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            Tenemos férulas, inmovilizadores para dedos y para muñecas disponibles para donar.
            Las donaciones se reciben en nuestro centro de acopio en Valencia, Carabobo, y luego
            son trasladadas a donde sean necesarias.
          </p>
        </div>
      </section>

      {/* ─── QUÉ DONAMOS ──────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-[11px] font-bold tracking-widest uppercase mb-4">
              Qué donamos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.03em]">
              Insumos ortopédicos disponibles
            </h2>
            <p className="mt-4 text-[15px] text-slate-500 max-w-xl mx-auto">
              Todos los insumos son impresos con tecnología 3D. Cada solicitud es evaluada para asegurar que el inmovilizador sea el adecuado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ITEMS.map((item) => (
              <div
                key={item.title}
                className="group relative bg-white border border-slate-100 rounded-3xl p-8 transition-all duration-300 hover:shadow-card-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="size-24 rounded-2xl flex items-center justify-center" style={{ backgroundColor: item.colors.bg }}>
                    <item.Svg className="size-16" />
                  </div>
                </div>
                <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase text-white bg-gradient-to-r mb-4" style={{ backgroundImage: `linear-gradient(to right, ${item.colors.stroke}, transparent)` }}>
                  <span className={`bg-gradient-to-r ${item.colors.accent} bg-clip-text text-transparent`} style={{ color: item.colors.stroke }}>{item.subtitle}</span>
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold uppercase tracking-wide mb-4" style={{ marginLeft: item.subtitle ? 0 : 0 }}>
                  {item.subtitle}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-[14px] text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CENTRO DE ACOPIO ─────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-bold tracking-widest uppercase mb-5">
                <MapPin className="size-3.5 text-rose-500" />
                Centro de acopio
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.03em] mb-5">
                Valencia, Carabobo
              </h2>
              <p className="text-[15px] text-slate-600 leading-relaxed mb-6">
                Nuestro centro de acopio está ubicado en Valencia, estado Carabobo. Desde aquí
                coordinamos la recepción, clasificación y distribución de todos los insumos
                ortopédicos donados hacia las comunidades que más los necesitan.
              </p>
              <p className="text-[15px] text-slate-600 leading-relaxed mb-8">
                Si necesitas una férula o inmovilizador, <strong className="text-slate-900">deja tus datos en el formulario</strong> y
                te contactaremos para coordinar la entrega.
              </p>
              <div className="flex items-center gap-3 text-slate-500">
                <div className="size-10 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                  <MapPin className="size-5 text-rose-600" />
                </div>
                <span className="text-[14px] font-medium">Valencia, Estado Carabobo, Venezuela</span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-card-lg h-[350px] bg-slate-100">
              <iframe
                title="Centro de acopio - Wynwood Park, Valencia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926!2d-68.007151!3d10.2301518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e806753f62fc1dd%3A0x6fbd22e4149f5148!2sWynwood+Park!5e0!3m2!1ses!2sve!4v1719705600000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FORMULARIO ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white" id="formulario-donacion">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative bg-gradient-to-b from-[#FFF1F2] to-white rounded-3xl overflow-hidden shadow-card-lg">
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
              <svg className="w-full h-full">
                <pattern id="form-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E11D48" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#form-grid)" />
              </svg>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto px-6 py-14 md:py-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.03em] mb-4">
                  Solicita tu férula
                </h2>
                <p className="text-[15px] text-slate-500 max-w-lg mx-auto">
                  Déjanos tus datos y te contactaremos para coordinar la entrega de tu inmovilizador.
                  Todos los campos marcados con * son obligatorios.
                </p>
              </div>

              {status === 'success' ? (
                <div className="py-8 flex flex-col items-center gap-3">
                  <div className="size-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    <svg className="size-7 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-2">¡Solicitud recibida!</h3>
                  <p className="text-[14px] text-slate-500 text-center max-w-sm">
                    Te contactaremos en las próximas 24 a 48 horas al teléfono o email que nos proporcionaste para coordinar la entrega.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-[13px] font-semibold hover:bg-slate-200 transition-colors"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : status === 'error' ? (
                <div className="py-8 flex flex-col items-center gap-3">
                  <div className="size-14 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600 text-xl font-bold">!</div>
                  <h3 className="text-xl font-bold text-slate-900 mt-2">Error al enviar</h3>
                  <p className="text-[14px] text-slate-500 text-center max-w-sm">
                    Ocurrió un error al procesar tu solicitud. Por favor intenta de nuevo o escríbenos directamente a nuestro correo.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-[13px] font-semibold hover:bg-slate-200 transition-colors"
                  >
                    Intentar de nuevo
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      required
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange('nombre')}
                      placeholder="Nombre *"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-[14px] font-medium outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-50 transition-all duration-150"
                    />
                    <input
                      required
                      type="text"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleChange('apellido')}
                      placeholder="Apellido *"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-[14px] font-medium outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-50 transition-all duration-150"
                    />
                  </div>
                  <input
                    required
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange('telefono')}
                    placeholder="Teléfono de contacto * (+58)"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-[14px] font-medium outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-50 transition-all duration-150"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    placeholder="Correo electrónico"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-[14px] font-medium outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-50 transition-all duration-150"
                  />
                  <textarea
                    name="comentario"
                    value={formData.comentario}
                    onChange={handleChange('comentario')}
                    placeholder="Comentario adicional (tipo de lesión, talla aproximada, etc.)"
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-[14px] font-medium outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-50 transition-all duration-150 resize-none"
                  />

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 text-white text-[15px] font-bold tracking-[-0.01em] shadow-[0_4px_24px_rgba(225,29,72,0.25)] transition-all duration-200 hover:from-rose-600/90 hover:to-rose-700/90 hover:shadow-[0_8px_32px_rgba(225,29,72,0.35)] hover:-translate-y-px active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Enviando solicitud...
                      </>
                    ) : (
                      <>
                        <Send className="size-4" />
                        Solicitar férula
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400 font-medium">
                    Tus datos son confidenciales. Solo los usaremos para contactarte respecto a tu solicitud.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CENTROS DE ACOPIO ───────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface" id="centros-acopio-form">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-bold tracking-widest uppercase mb-4">
              <Building2 className="size-3.5" />
              Para centros de acopio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.03em] mb-4">
              ¿Eres un centro de acopio?
            </h2>
            <p className="text-[15px] text-slate-500 max-w-lg mx-auto">
              Si representas un centro de acopio u organización que quiere participar en la red de distribución de férulas e inmovilizadores, déjanos tus datos y te contactaremos para coordinar.
            </p>
          </div>

          <div className="relative bg-white rounded-3xl border border-slate-100 shadow-card-lg overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
              <svg className="w-full h-full">
                <pattern id="centro-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#002EE5" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#centro-grid)" />
              </svg>
            </div>

            <div className="relative z-10 px-6 py-10 md:p-10">
              {centroStatus === 'success' ? (
                <div className="py-6 flex flex-col items-center gap-3">
                  <div className="size-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    <svg className="size-7 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-2">¡Registro recibido!</h3>
                  <p className="text-[14px] text-slate-500 text-center max-w-sm">
                    Gracias por tu interés. Te contactaremos en las próximas 24 a 48 horas para coordinar la incorporación de tu centro a la red.
                  </p>
                  <button
                    type="button"
                    onClick={() => setCentroStatus('idle')}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-[13px] font-semibold hover:bg-slate-200 transition-colors"
                  >
                    Registrar otro centro
                  </button>
                </div>
              ) : centroStatus === 'error' ? (
                <div className="py-6 flex flex-col items-center gap-3">
                  <div className="size-14 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600 text-xl font-bold">!</div>
                  <h3 className="text-xl font-bold text-slate-900 mt-2">Error al enviar</h3>
                  <p className="text-[14px] text-slate-500 text-center max-w-sm">
                    Ocurrió un error al procesar tu registro. Por favor intenta de nuevo.
                  </p>
                  <button
                    type="button"
                    onClick={() => setCentroStatus('idle')}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-[13px] font-semibold hover:bg-slate-200 transition-colors"
                  >
                    Intentar de nuevo
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCentroSubmit} className="flex flex-col gap-4">
                  <input
                    required
                    type="text"
                    name="nombreCentro"
                    value={centroData.nombreCentro}
                    onChange={handleCentroChange('nombreCentro')}
                    placeholder="Nombre del centro *"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-[14px] font-medium outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all duration-150"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      required
                      type="text"
                      name="responsable"
                      value={centroData.responsable}
                      onChange={handleCentroChange('responsable')}
                      placeholder="Responsable *"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-[14px] font-medium outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all duration-150"
                    />
                    <input
                      required
                      type="tel"
                      name="telefono"
                      value={centroData.telefono}
                      onChange={handleCentroChange('telefono')}
                      placeholder="Teléfono * (+58)"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-[14px] font-medium outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all duration-150"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={centroData.email}
                    onChange={handleCentroChange('email')}
                    placeholder="Correo electrónico"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-[14px] font-medium outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all duration-150"
                  />
                  <input
                    type="text"
                    name="direccion"
                    value={centroData.direccion}
                    onChange={handleCentroChange('direccion')}
                    placeholder="Dirección del centro"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-[14px] font-medium outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all duration-150"
                  />
                  <textarea
                    name="comentario"
                    value={centroData.comentario}
                    onChange={handleCentroChange('comentario')}
                    placeholder="Comentario adicional (capacidad, zona de cobertura, etc.)"
                    rows={3}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-[14px] font-medium outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all duration-150 resize-none"
                  />

                  <button
                    type="submit"
                    disabled={centroStatus === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-brand to-brand-mid text-white text-[15px] font-bold tracking-[-0.01em] shadow-[0_4px_24px_rgba(0,46,229,0.25)] transition-all duration-200 hover:from-brand/90 hover:to-brand-mid/90 hover:shadow-[0_8px_32px_rgba(0,46,229,0.35)] hover:-translate-y-px active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {centroStatus === 'submitting' ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Enviando registro...
                      </>
                    ) : (
                      <>
                        <Send className="size-4" />
                        Quiero participar
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400 font-medium">
                    Tus datos serán utilizados exclusivamente para coordinar la participación de tu centro en la red de distribución.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-[11px] font-bold tracking-widest uppercase mb-4">
              Preguntas frecuentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.03em]">
              ¿Tienes dudas?
            </h2>
            <p className="mt-4 text-[15px] text-slate-500">
              Aquí respondemos las preguntas más comunes sobre el programa de donación.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Heart className="size-10 text-rose-500 mx-auto mb-5" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-[-0.02em] mb-4">
            ¿Quieres donar insumos?
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed mb-8">
            Si tienes férulas, inmovilizadores, vendas u otros insumos ortopédicos en buen estado,
            puedes llevarlos a nuestro centro de acopio en Valencia, Carabobo, o escribirnos para
            coordinar la recolección.
          </p>
          <a
            href="#formulario-donacion"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-rose-600 to-rose-700 text-white text-[15px] font-bold shadow-[0_4px_24px_rgba(225,29,72,0.25)] transition-all duration-200 hover:shadow-[0_8px_32px_rgba(225,29,72,0.35)] hover:-translate-y-px active:scale-[0.98]"
          >
            Solicitar una férula
            <Send className="size-4" />
          </a>
        </div>
      </section>
    </div>
  );
});
