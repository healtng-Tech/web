import React, { useState, useCallback } from 'react';
// Importaciones de layout y secciones
import { Navbar } from './components/layout/Navbar';
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

  const handleOpenModal = useCallback(() => setDemoModalOpen(true), []);
  const handleCloseModal = useCallback(() => setDemoModalOpen(false), []);

  return (
    <div className="min-h-screen bg-white text-ink selection:bg-brand/20">
      <Navbar />

      <main>
        <Hero />
        <ProblemStatement />
        <InfrastructureSection />
        <FeaturesShowcase />
        <PartnersSection />
        <ResourcesSection />
        <FinalCTA onOpenModal={handleOpenModal} />
      </main>

      {/* Modal de Demostración */}
      {demoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Agendar demostración"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-3xl shadow-float max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
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
    </div>
  );
}

export default App;