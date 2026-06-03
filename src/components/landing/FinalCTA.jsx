import React, { memo, useState, useCallback, useEffect, useRef } from 'react';

export const FinalCTA = memo(function FinalCTA() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const [formData, setFormData] = useState({ institution: '', specialty: '', whatsapp: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = useCallback(() => {
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ institution: '', specialty: '', whatsapp: '' });
    }, 1200);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !cardRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight - windowHeight * 0.25)));
      const currentRadius = 32 * (1 - progress);
      const currentPaddingH = 24 * (1 - progress);

      cardRef.current.style.maxWidth = `${Math.max(1152, window.innerWidth > 1152 ? 1152 + (window.innerWidth - 1152) * progress : window.innerWidth)}px`;
      cardRef.current.style.borderTopLeftRadius = `${currentRadius}px`;
      cardRef.current.style.borderTopRightRadius = `${currentRadius}px`;
      cardRef.current.style.width = `calc(100% - ${currentPaddingH * 2}px)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-white w-full pt-10 md:pt-16 flex flex-col items-center overflow-hidden" aria-labelledby="cta-heading">
      {/* Iframe oculto para evitar la redirección de Formspree */}
      <iframe name="hidden_iframe" style={{ display: 'none' }} title="hidden"></iframe>

      <div ref={cardRef} className="bg-gradient-to-b from-[#B2D0FD] to-[#F3F6FF] relative overflow-hidden transition-all duration-75 ease-out" style={{ maxWidth: '1152px', borderTopLeftRadius: '32px', borderTopRightRadius: '32px', width: 'calc(100% - 48px)' }}>
        
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
          <svg className="w-full h-full"><pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#002EE5" strokeWidth="0.5"/></pattern><rect width="100%" height="100%" fill="url(#cta-grid)"/></svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-28 flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-slate-300/50 text-slate-800 text-[11px] font-bold tracking-widest uppercase font-mono shadow-sm">
            <span className="size-1.5 rounded-full bg-[#002EE5] animate-pulse" /> Plazas Limitadas
          </div>

          <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-[-0.03em] leading-[1.08]">
            ¿Quiere probar Healtng<br />en su consulta esta semana?
          </h2>

          <p className="text-[16px] sm:text-[17px] text-slate-700 leading-relaxed max-w-xl font-medium">
            El acceso para médicos en Carabobo es gratuito. Déjenos sus datos de contacto y coordinamos su activación en menos de 24 horas, sin interrumpir su jornada.
          </p>

          <div className="w-full max-w-lg bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-[0_24px_60px_-15px_rgba(0,46,229,0.06)]">
            {status === 'success' ? (
              <div className="py-6 flex flex-col items-center gap-3 animate-in fade-in zoom-in-95 duration-300">
                <div className="size-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 text-xl font-bold">✓</div>
                <h3 className="text-lg font-bold text-slate-900 mt-2">Solicitud recibida correctamente</h3>
                <p className="text-sm text-slate-500">Nuestro agente se comunicará vía WhatsApp en las próximas horas para gestionar sus accesos de prueba.</p>
              </div>
            ) : (
              <form action="https://formspree.io/f/xvznpdvz" method="POST" target="hidden_iframe" onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input required type="text" name="institucion" value={formData.institution} onChange={(e) => setFormData({...formData, institution: e.target.value})} placeholder="Institución o profesional" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-[14px] font-medium outline-none focus:border-[#002EE5] focus:bg-white transition-all duration-150" />
                  <input required type="text" name="especialidad" value={formData.specialty} onChange={(e) => setFormData({...formData, specialty: e.target.value})} placeholder="Especialidad o sector" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-[14px] font-medium outline-none focus:border-[#002EE5] focus:bg-white transition-all duration-150" />
                </div>
                <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} placeholder="WhatsApp (+58)" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-[14px] font-medium outline-none focus:border-[#002EE5] focus:bg-white transition-all duration-150" />
                
                <button type="submit" disabled={status === 'submitting'} className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#002EE5] text-white text-[15px] font-bold tracking-[-0.01em] shadow-[0_4px_24px_rgba(0,46,229,0.2)] transition-all duration-200 hover:bg-[#002EE5]/90 hover:shadow-[0_8px_32px_rgba(0,46,229,0.3)] hover:-translate-y-px active:scale-[0.98]">
                  {status === 'submitting' ? 'Procesando alta...' : 'Quiero empezar'}
                </button>
                <p className="text-center text-[11px] text-slate-400 font-semibold">Soporte de migración gratuito · Sin contratos forzosos · Respuesta en 24 horas</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});
