import React, { useState, useCallback } from 'react';
// Importaciones de layout y secciones
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ProblemStatement } from './components/sections/ProblemStatement';

// Importaciones desde tu carpeta de landing (usando el index.js)
import {
  InfrastructureSection,
  PartnersSection,
  FeaturesShowcase,
  ResourcesSection,
  FinalCTA,
} from './components/landing';

function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState({ open: false, type: '' });

  const handleOpenModal = useCallback(() => setDemoModalOpen(true), []);
  const handleCloseModal = useCallback(() => setDemoModalOpen(false), []);

  const handleOpenLegal = useCallback((type) => setLegalModal({ open: true, type }), []);
  const handleCloseLegal = useCallback(() => setLegalModal({ open: false, type: '' }), []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-ink selection:bg-brand/20">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <ProblemStatement />
        <InfrastructureSection />
        <FeaturesShowcase />
        <PartnersSection />
        <ResourcesSection />
        <FinalCTA onOpenModal={handleOpenModal} />
      </main>

      {/* Footer conectado al sistema de modales legales */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* ─── Modal de Demostración ────────────────────────────────────────── */}
      {demoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Agendar demostración"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div className="bg-white rounded-3xl shadow-float max-w-md w-full p-8" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-ink mb-2">Agendar demostración</h3>
            <p className="text-sm text-ink-secondary mb-6">
              Un Arquitecto Clínico se pondrá en contacto en menos de 24 horas para personalizar su experiencia.
            </p>
            <button
              type="button"
              onClick={handleCloseModal}
              className="w-full py-3 rounded-xl bg-brand text-white font-semibold text-sm hover:bg-brand/90 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* ─── Modal de Documentos Legales (Trust Design + Responsive) ──────── */}
      {legalModal.open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={handleCloseLegal}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-3xl w-full max-h-[85vh] overflow-y-auto p-5 sm:p-8 md:p-10" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Modal */}
            <div className="flex justify-between items-start pb-4 border-b border-slate-100 mb-6">
              <div>
                <span className="text-[11px] font-bold text-brand uppercase tracking-widest block mb-1">
                  Ecosistema Regulado
                </span>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                  {legalModal.type === 'privacy' && 'Privacidad de Datos'}
                  {legalModal.type === 'terms' && 'Términos de Servicio'}
                  {legalModal.type === 'security' && 'Auditoría y Seguridad'}
                </h3>
              </div>
              <button 
                onClick={handleCloseLegal} 
                className="size-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors text-xs font-semibold"
                aria-label="Cerrar documento"
              >
                ✕
              </button>
            </div>
            
            {/* Cuerpo del Documento */}
            <div className="text-[14px] text-slate-600 space-y-6 leading-relaxed font-normal">
              
              {/* CASO 1: PRIVACIDAD DE DATOS */}
              {legalModal.type === 'privacy' && (
                <>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Política de Privacidad y Tratamiento de Datos de Healtng</h4>
                    <p className="text-xs text-slate-400 font-mono mt-1">Última actualización: Junio, 2026.</p>
                  </div>
                  <p>
                    En HEALTNG nos tomamos con absoluta seriedad la confidencialidad y la protección de tu información de salud. Esta Política de Privacidad describe cómo recopilamos, almacenamos y procesamos los datos de nuestros Pacientes, Médicos, Clínicas, Proveedores y Aliados.
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="font-bold text-slate-800 uppercase tracking-wider text-[12px]">A. Marco Legal Aplicable</h5>
                    <p>Nuestras operaciones y el tratamiento de bases de datos están estrictamente blindados bajo el ordenamiento jurídico de la República Bolivariana de Venezuela, de conformidad con:</p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600">
                      <li>La Ley de Protección de Datos (Gaceta Oficial N° 37.313).</li>
                      <li>La Ley contra los Delitos Informáticos (Gaceta Oficial N° 37.313).</li>
                      <li>Las obligaciones de confidencialidad y buena fe del Código Civil Venezolano.</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-bold text-slate-800 uppercase tracking-wider text-[12px]">B. Consentimiento y Uso de Datos por Perfil</h5>
                    <div className="space-y-2 pl-2 border-l-2 border-brand/20">
                      <p><strong className="text-slate-900">Pacientes:</strong> Al registrarte y aceptar nuestro Consentimiento Informado Digital (Anexo D), autorizas expresamente a HEALTNG para centralizar tu historial de salud digital, gestionar tus agendamientos médicos y procesar tus recetas o diagnósticos electrónicos. Tus datos clínicos solo serán accesibles para los profesionales de la salud con los que agendes activamente una consulta.</p>
                      <p><strong className="text-slate-900">Profesionales y Clínicas:</strong> Toda la información médica recopilada en las interacciones con pacientes o expedida a través del módulo de diagnósticos se maneja bajo el más estricto secreto profesional y absoluta confidencialidad corporativa.</p>
                      <p><strong className="text-slate-900">Proveedores y Aliados Comerciales:</strong> Los datos comerciales, de inventario, transacciones financieras y analítica colectiva se procesarán bajo estricta reserva mercantil para fines operativos internos del ecosistema digital.</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-bold text-slate-800 uppercase tracking-wider text-[12px]">C. Custodia y Destrucción de la Información</h5>
                    <p>
                      HEALTNG implementa rigurosos protocolos de seguridad técnica para evitar el acceso no autorizado. En caso de finalización de las relaciones contractuales o eliminación de cuentas, no conservaremos copias de la información técnica, procediendo a su devolución o destrucción segura, manteniendo únicamente los datos mínimos necesarios por exigencias legales de facturación o regulatorias.
                    </p>
                  </div>
                </>
              )}

              {/* CASO 2: TÉRMINOS DE SERVICIO */}
              {legalModal.type === 'terms' && (
                <>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Términos y Condiciones Generales de Uso de Healtng</h4>
                    <p className="text-xs text-slate-400 font-mono mt-1">Última actualización: Junio, 2026.</p>
                  </div>
                  <p>
                    El acceso, navegación y uso de la plataforma web y móvil <a href="https://www.healtng.com" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline font-medium">www.healtng.com</a> implica la aceptación total de los presentes Términos y Condiciones. Si no estás de acuerdo con ellos, debes abstenerte de utilizar nuestros servicios.
                  </p>

                  <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100/60 space-y-2">
                    <h5 className="font-bold text-brand uppercase tracking-wider text-[12px]">A. Naturaleza de la Plataforma (Cláusula de Intermediación)</h5>
                    <p className="text-slate-700 font-medium">
                      AVISO CRÍTICO: HEALTNG es exclusivamente una plataforma digital de intermediación tecnológica que conecta a Pacientes, Profesionales de la salud, Clínicas, Proveedores y Aliados comerciales. HEALTNG no es un proveedor de servicios de salud, no provee servicios de telemedicina ni canales de videollamada directa, y no se responsabiliza bajo ningún concepto por los actos, diagnósticos, tratamientos o malas praxis de terceros.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-bold text-slate-800 uppercase tracking-wider text-[12px]">B. Obligaciones y Responsabilidades de los Usuarios</h5>
                    <div className="space-y-2 pl-2 border-l-2 border-slate-200">
                      <p><strong className="text-slate-900">Pacientes:</strong> Reconocen que su atención médica es intermediada y que los profesionales son terceros independientes. El uso del asistente de síntomas con IA sirve únicamente como guía previa y jamás sustituye una consulta médica formal.</p>
                      <p><strong className="text-slate-900">Médicos y Clínicas:</strong> Declaran bajo fe de juramento que poseen títulos, permisos y la idoneidad ética requerida para ejercer. Asumen la total responsabilidad civil, penal y clínica por el contenido y las consecuencias de las recetas y diagnósticos emitidos desde la plataforma.</p>
                      <p><strong className="text-slate-900">Proveedores (Farmacias, Laboratorios, Tiendas):</strong> Garantizan la legalidad, origen, permisos sanitarios vigentes, trazabilidad y calidad de los productos comercializados, obligándose a atender cualquier reclamo postventa en un plazo máximo de 48 horas hábiles.</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-bold text-slate-800 uppercase tracking-wider text-[12px]">C. Cláusula de Indemnización (Hold Harmless)</h5>
                    <p>
                      Todos los usuarios (pacientes, profesionales y comercios) se comprometen expresamente a indemnizar y mantener indemne a HEALTNG ante cualquier reclamo, demanda, pérdida, costo o gasto (incluyendo honorarios legales) derivado de un uso indebido de la plataforma, negligencia profesional, fraude o fallas en la calidad de los productos ofertados.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-bold text-slate-800 uppercase tracking-wider text-[12px]">D. Ley Aplicable y Jurisdicción</h5>
                    <p>
                      Para la interpretación y resolución de cualquier conflicto derivado de estos términos, las partes renuncian expresamente a cualquier otro fuero y se someten formalmente a la mediación y a los Juzgados y Tribunales competentes de la ciudad de Valencia, Estado Carabobo, República Bolivariana de Venezuela.
                    </p>
                  </div>
                </>
              )}

              {/* CASO 3: AUDITORÍA Y SEGURIDAD (OPTIMIZADO RESPONSIVE) */}
              {legalModal.type === 'security' && (
                <>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Política de Supervisión Externa, Seguridad y Régimen Sancionatorio</h4>
                    <p className="text-xs text-slate-400 font-mono mt-1">Monitoreo de Infraestructura Activa</p>
                  </div>
                  <p>
                    Para garantizar un ecosistema de salud transparente, confiable y libre de fraudes, HEALTNG ejecuta auditorías continuas sobre las interacciones, datos, inventarios y plazos de entrega que ocurren dentro de la plataforma.
                  </p>

                  <div className="space-y-2">
                    <h5 className="font-bold text-slate-800 uppercase tracking-wider text-[12px]">A. Protocolos de Auditoría y Verificación</h5>
                    <p>HEALTNG se reserva el derecho inalienable de realizar supervisiones periódicas y exigir documentación de respaldo en cualquier momento:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong className="text-slate-900">Verificación de Idoneidad:</strong> Validación documental de las credenciales, títulos y permisos sanitarios de médicos, clínicas y farmacias aliados.</li>
                      <li><strong className="text-slate-900">Trazabilidad Operativa:</strong> Auditoría de plazos de entrega de productos y cumplimiento de citas agendadas.</li>
                      <li><strong className="text-slate-900">Security Informática:</strong> Monitoreo y registro de accesos (logs) para asegurar el uso legítimo de las herramientas de diagnóstico y resguardo de datos sensibles.</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-bold text-slate-800 uppercase tracking-wider text-[12px]">B. Matriz de Consecuencias e Incumplimiento</h5>
                    <p>Cualquier violación a nuestras políticas de seguridad, términos de servicio o normativa legal vigente activará de forma inmediata un procedimiento sancionatorio estructurado en tres niveles:</p>
                    
                    {/* ──── VISTA MÓVIL: Micro-tarjetas verticales (block md:hidden) ──── */}
                    <div className="block md:hidden space-y-4 mt-4">
                      {/* Tarjeta Nivel 1 */}
                      <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-4 space-y-2.5">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-slate-900 text-[14px]">Nivel 1</span>
                          <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold text-[10px]">Preventivo</span>
                        </div>
                        <p className="text-slate-600 text-[13px] leading-relaxed">
                          Emisión de una advertencia formal o notificación escrita detallando la irregularidad, otorgando un plazo perentorio para su subsanación.
                        </p>
                      </div>

                      {/* Tarjeta Nivel 2 */}
                      <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-4 space-y-2.5">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-slate-900 text-[14px]">Nivel 2</span>
                          <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-semibold text-[10px]">Correctivo</span>
                        </div>
                        <p className="text-slate-600 text-[13px] leading-relaxed">
                          Restricción temporal de funcionalidades clave en la plataforma o suspensión del perfil y retiro inmediato de la visibilidad pública en el buscador.
                        </p>
                      </div>

                      {/* Tarjeta Nivel 3 */}
                      <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-4 space-y-2.5">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-slate-900 text-[14px]">Nivel 3</span>
                          <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-semibold text-[10px]">Definitivo</span>
                        </div>
                        <p className="text-slate-600 text-[13px] leading-relaxed">
                          Eliminación permanente de la cuenta, terminación definitiva del contrato, bloqueo de accesos y, de ser procedente, ejercicio de acciones civiles, penales o reportes formales ante autoridades sanitarias y gremiales.
                        </p>
                      </div>
                    </div>

                    {/* ──── VISTA DESKTOP: Tabla Tradicional (hidden md:block) ──── */}
                    <div className="hidden md:block border border-slate-100 rounded-xl overflow-hidden mt-3 shadow-sm">
                      <table className="min-w-full divide-y divide-slate-100 text-left text-xs">
                        <thead className="bg-slate-50 font-bold text-slate-700">
                          <tr>
                            <th className="px-4 py-3">Nivel de Falta</th>
                            <th className="px-4 py-3">Clasificación</th>
                            <th className="px-4 py-3">Acción Contractual y Operativa</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white text-slate-600">
                          <tr className="hover:bg-slate-50/50">
                            <td className="px-4 py-3.5 font-bold text-slate-900 whitespace-nowrap">Nivel 1</td>
                            <td className="px-4 py-3.5"><span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-medium">Preventivo</span></td>
                            <td className="px-4 py-3.5">Emisión de una advertencia formal o notificación escrita detallando la irregularidad, otorgando un plazo perentorio para su subsanación.</td>
                          </tr>
                          <tr className="hover:bg-slate-50/50">
                            <td className="px-4 py-3.5 font-bold text-slate-900 whitespace-nowrap">Nivel 2</td>
                            <td className="px-4 py-3.5"><span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-medium">Correctivo</span></td>
                            <td className="px-4 py-3.5">Restricción temporal de funcionalidades clave en la plataforma o suspensión del perfil y retiro inmediato de la visibilidad pública en el buscador.</td>
                          </tr>
                          <tr className="hover:bg-slate-50/50">
                            <td className="px-4 py-3.5 font-bold text-slate-900 whitespace-nowrap">Nivel 3</td>
                            <td className="px-4 py-3.5"><span className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-medium">Definitivo</span></td>
                            <td className="px-4 py-3.5">Eliminación permanente de la cuenta, terminación definitiva del contrato, bloqueo de accesos y, de ser procedente, ejercicio de acciones civiles, penales o reportes formales ante autoridades sanitarias y gremiales.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}
            </div>
            
            {/* Footer del modal */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
              <button 
                onClick={handleCloseLegal} 
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors w-full sm:w-auto"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
