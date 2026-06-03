import React, { memo, useState } from 'react';
import { useInView } from '../../hooks/useInView';

/**
 * ResourcesSection — FAQs reescritas
 *
 * Criterio de reescritura aplicado:
 * 1. Pregunta = lo que dice el médico o farmacéutico en la reunión, no lo que
 *    redacta el equipo de producto.
 * 2. Respuesta = la más corta que elimina el miedo. Sin jerga.
 * 3. Se añaden las dos preguntas que más aparecen en campo:
 *    teléfono del paciente y funcionamiento sin internet.
 * 4. Schema FAQ en index.html sincronizado con este array.
 */
const FAQS = [
  {
    q: '¿Cuánto cuesta usar Healtng?',
    a: 'Para médicos el acceso es gratuito durante el piloto en Carabobo. Las farmacias aliadas tienen una membresía fija de $120 al mes por sede y los laboratorios de $95 al mes. Sin contratos forzosos, letras chiquitas ni penalidades por cancelar.',
  },
  {
    q: '¿Tengo que reemplazar el sistema que ya uso en mi clínica o negocio?',
    a: 'No. Healtng se integra con lo que ya tiene. Si usa un software de historias clínicas o un sistema administrativo, nos conectamos a él de forma transparente para añadirle recetas digitales y flujos de pago, sin alterar su rutina.',
  },
  {
    q: '¿Healtng es un sistema genérico o software alquilado?',
    a: 'No. Toda la infraestructura, el motor de trazabilidad y el sistema de puntuación de eventos clínicos (ECS) son propiedad intelectual exclusiva de Healtng Technologies. Es tecnología propia desarrollada desde cero para adaptarse a las normativas y realidades operativas del sector salud en Venezuela.',
  },
  {
    q: '¿Cómo recibo el dinero de mis consultas?',
    a: 'Cada pago digital procesado se liquida de forma automática y directa en su cuenta bancaria. Al cierre del día, el sistema genera un reporte consolidado con todo perfectamente cuadrado, eliminando los registros manuales por completo.',
  },
  {
    q: '¿Los datos de mis pacientes están protegidos?',
    a: 'Sí. Operamos bajo el marco legal de protección de datos de Venezuela. Solo el médico tratante y el paciente tienen acceso a la información clínica. Healtng no comercializa ni comparte historiales médicos con terceros.',
  },
 {
    q: '¿Cuánto tiempo tarda en activarse el sistema?',
    a: 'Es inmediato. El proceso de registro y onboarding digital está diseñado para que usted mismo configure su panel profesional, consultorio o comercio en pocos minutos de forma guiada. Al completar los pasos iniciales, el sistema pasa a una verificación interna de seguridad y credenciales que toma menos de 2 horas. Tras esta validación, su cuenta queda plenamente activa y lista para recibir citas, recetas y ordenes, gestionar inventarios o emitir su primer código QR al instante.',
  },
  {
    q: '¿Cómo es la experiencia para el paciente final?',
    a: 'Diseñamos una doble ruta de adopción. El paciente digital puede revisar inventarios, cotizar y comprar sus fármacos desde la plataforma antes de salir del consultorio. Para el paciente no digital, el médico imprime la receta con un código QR físico; el usuario solo lo muestra en el mostrador de la farmacia para su escaneo rápido, sin instalar ninguna aplicación.',
  },
  {
    q: '¿Funciona cuando hay cortes de luz o internet lento?',
    a: 'Healtng está optimizado para la realidad local. Las recetas emitidas se guardan de forma local en el dispositivo y se sincronizan automáticamente al recuperar la señal. Los flujos declarados offline también se concilian después sin perder información.',
  },
];

const AccordionItem = memo(function AccordionItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-slate-100 last:border-none">
      <button
        type="button"
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <span className={[
          'text-[17px] font-bold pr-6 transition-colors duration-200',
          isOpen ? 'text-[#002EE5]' : 'text-slate-900 group-hover:text-[#002EE5]',
        ].join(' ')}>
          {faq.q}
        </span>
        <div className={[
          'shrink-0 size-8 rounded-full flex items-center justify-center border transition-all duration-300',
          isOpen
            ? 'bg-[#002EE5] border-[#002EE5] text-white rotate-180'
            : 'bg-white border-slate-200 text-slate-400 group-hover:border-[#002EE5]/30 group-hover:text-[#002EE5]',
        ].join(' ')}>
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div className={[
        'grid transition-all duration-300 ease-in-out',
        isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0',
      ].join(' ')}>
        <div className="overflow-hidden">
          <p className="text-[15px] text-slate-600 leading-relaxed pr-8">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
});

export const ResourcesSection = memo(function ResourcesSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="preguntas-frecuentes"
      className="py-24 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div
          ref={ref}
          className={[
            'text-center mb-16 transition-all duration-700 ease-out',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-[#002EE5] bg-[#002EE5]/5 rounded-full mb-5 border border-[#002EE5]/10">
            Preguntas frecuentes
          </span>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Lo que siempre preguntan
            <br />antes de empezar.
          </h2>
          <p className="text-[16px] text-slate-500">
            Respuestas directas, sin rodeos.
          </p>
        </div>
        <div className={[
          'transition-all duration-700 ease-out delay-150',
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ].join(' ')}>
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-[14px] text-slate-400">
            ¿Tiene una duda más específica?{' '}
            <a
              href="https://wa.me/584128888302?text=Hola%2C+tengo+una+pregunta+sobre+Healtng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#002EE5] font-bold hover:underline underline-offset-4"
            >
              Escríbanos por WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
});
