import React from 'react';

// Actualizamos para que acepte 'className' como prop para el color de fondo
export function MetricCard({ title, subtitle, icon, className }) {
  return (
    <div
      className={`
        ${className} /* Aquí entra el color de fondo (ej. bg-blue-300) */
        border
        border-slate-200
        rounded-3xl
        p-6
        shadow-sm
        transition-all
        hover:-translate-y-0.5
        lg:col-span-3 /* Ocupan 3/12 columnas para que quepan 4 en una fila */
      `}
    >
      <div className="flex items-center gap-3 mb-4">
        {/* Un contenedor blanco para el icono para que destaque */}
        <div className="p-2.5 rounded-2xl bg-white shadow-inner text-slate-700">
          {icon}
        </div>

        <h3 className="font-semibold text-slate-950">
          {title}
        </h3>
      </div>

      <p className="text-sm text-slate-800 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}