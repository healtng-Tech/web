import React from 'react';
import { 
  Home, User, Calendar, Folder, Clock, Settings, HelpCircle, 
  Search, Bell, Plus, Upload, MoreHorizontal, ChevronRight,
  FileText, Activity, HeartPulse, AlertTriangle, Menu
} from "lucide-react";

export function DashboardGrid() {
  return (
    <div className="flex w-full h-[600px] md:min-h-[540px] md:h-auto bg-[#f8fafc] font-sans text-slate-900 overflow-hidden rounded-b-xl">
      
      {/* ─── SIDEBAR (Oculto en móvil, visible desde tablets) ────────── */}
      <aside className="hidden md:flex w-16 shrink-0 border-r border-slate-200 bg-white flex-col items-center">
        <div className="h-12 w-full border-b border-slate-200 flex items-center justify-center">
          <HeartPulse size={22} className="text-[#002EE5]" />
        </div>
        
        <nav className="flex flex-col gap-5 text-slate-400 mt-5">
          <div className="text-[#002EE5] bg-blue-50 p-2 rounded-xl"><Home size={20} /></div>
          <div className="hover:text-slate-600 cursor-pointer"><User size={20} /></div>
          <div className="hover:text-slate-600 cursor-pointer"><Calendar size={20} /></div>
          <div className="hover:text-slate-600 cursor-pointer"><Folder size={20} /></div>
          <div className="hover:text-slate-600 cursor-pointer"><Clock size={20} /></div>
        </nav>
        
        <nav className="mt-auto flex flex-col gap-5 text-slate-400 mb-6">
          <div className="hover:text-slate-600 cursor-pointer"><Settings size={20} /></div>
          <div className="hover:text-slate-600 cursor-pointer"><HelpCircle size={20} /></div>
        </nav>
      </aside>

      {/* ─── CONTENIDO PRINCIPAL ───────────────────────────────── */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Barra Superior */}
        <header className="h-12 shrink-0 border-b border-slate-200 bg-white flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            {/* Icono de menú hamburguesa solo visible en móviles */}
            <Menu className="md:hidden text-slate-500 mr-1" size={18} />
            <span className="hidden sm:inline">Inicio</span>
            <ChevronRight size={14} className="hidden sm:inline" />
            <span className="text-slate-900 font-medium">Dashboard</span>
          </div>
          <div className="flex items-center gap-3 md:gap-5">
            <Search size={16} className="hidden sm:block text-slate-400" />
            <div className="relative">
              <Bell size={16} className="text-slate-400" />
              <span className="absolute -top-0.5 -right-0.5 size-1.5 bg-red-500 rounded-full border border-white"></span>
            </div>
            <div className="flex items-center gap-2 border-l pl-3 md:pl-4 border-slate-200">
              <span className="text-xs font-medium hidden sm:block">Pedro</span>
              <img 
                src="https://ui-avatars.com/api/?name=Pedro+Perez&background=002EE5&color=fff" 
                className="size-6 rounded-full object-cover" 
                alt="Profile" 
              />
            </div>
          </div>
        </header>

        {/* Cuerpo del Dashboard */}
        <div className="p-4 md:p-6 overflow-y-auto custom-scrollbar">
          
          {/* Welcome Section - Apilado en móvil */}
          <section className="bg-white border border-slate-200 rounded-3xl p-4 md:p-5 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm">
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop" 
                className="size-12 md:size-14 rounded-full object-cover border-2 border-slate-50"
                alt="Pedro Perez"
              />
              <div>
                <h1 className="text-lg md:text-xl font-bold text-slate-900 mb-0.5">¡Hola, Pedro Perez!</h1>
                <p className="text-slate-500 text-xs">Última visita: 05/29/2026</p>
              </div>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <button className="flex-1 md:flex-none justify-center flex items-center gap-1.5 bg-[#002EE5] text-white px-4 py-2.5 md:py-2 rounded-xl text-xs font-bold shadow-md shadow-blue-200 hover:bg-blue-700 transition-all">
                <Plus size={16} /> Nueva Cita
              </button>
              <button className="flex-1 md:flex-none justify-center flex items-center gap-1.5 bg-white border border-slate-200 text-slate-700 px-4 py-2.5 md:py-2 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all">
                <Upload size={16} /> Soporte
              </button>
            </div>
          </section>

          {/* Accesos Rápidos - 2x2 en móvil, 4 en línea en PC */}
          <div className="mb-6">
            <h2 className="text-slate-500 text-xs font-semibold mb-3 ml-1">Accesos Rápidos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <QuickCard icon={<Calendar />} label="Nueva Cita" sub="Agendar pronto" color="bg-[#bfdbfe]" />
              <QuickCard icon={<FileText />} label="Mis Recetas" sub="Ver y renovar" color="bg-[#fde68a]" />
              <QuickCard icon={<Activity />} label="Historial" sub="Tus registros" color="bg-[#e9d5ff]" />
              <QuickCard icon={<Upload />} label="Soportes" sub="Sube archivos" color="bg-[#a7f3d0]" />
            </div>
          </div>

          {/* Bottom Grid - Apilado en móvil (grid-cols-1) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Mis Citas */}
            <div className="md:col-span-7 bg-white border border-slate-200 rounded-3xl p-5 shadow-sm">
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-bold">Mis Citas</h2>
                  <span className="text-blue-500 bg-blue-50 px-2 py-0.5 rounded text-[10px] font-bold">1 próxima</span>
                </div>
                <button className="text-slate-400 text-xs font-medium">Ver todas</button>
              </div>
              
              <div className="border border-slate-100 rounded-2xl p-3.5 flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="size-10 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-xs shrink-0">JUN</div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-900 text-xs truncate">Miguel Ferrer</h3>
                    <p className="text-[10px] text-slate-500">08:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="hidden sm:inline-block bg-blue-50 text-blue-500 text-[9px] font-black px-2 py-1 rounded-full uppercase tracking-wider">Confirmada</span>
                  <div className="flex gap-1">
                    <button className="p-1.5 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50"><Clock size={14} /></button>
                    <button className="p-1.5 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50"><AlertTriangle size={14} /></button>
                  </div>
                </div>
              </div>
            </div>

            {/* Perfil de Salud */}
            <div className="md:col-span-5 bg-white border border-slate-200 rounded-3xl p-5 shadow-sm">
              <h2 className="text-sm font-bold mb-1">Perfil de Salud</h2>
              <p className="text-slate-400 text-[10px] mb-4">Resumen de información médica</p>
              
              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="size-8 bg-red-50 rounded-lg flex items-center justify-center text-red-500 shrink-0"><HeartPulse size={16} /></div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Tipo de sangre</p>
                    </div>
                  </div>
                  <span className="text-base font-black text-red-500">B+</span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="size-8 bg-yellow-50 rounded-lg flex items-center justify-center text-yellow-600 shrink-0"><AlertTriangle size={16} /></div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Alergias</p>
                    </div>
                  </div>
                  <MoreHorizontal size={16} className="text-slate-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function QuickCard({ icon, label, sub, color }) {
  return (
    <div className={`${color} rounded-2xl p-3 md:p-4 flex flex-col xl:flex-row items-center xl:items-start gap-2 md:gap-3 shadow-sm hover:scale-[1.02] transition-transform cursor-pointer group text-center xl:text-left`}>
      <div className="bg-white/40 p-2 rounded-xl text-slate-800 group-hover:bg-white/60 transition-colors shrink-0">
        {React.cloneElement(icon, { className: "w-4 h-4 md:w-[18px] md:h-[18px]" })}
      </div>
      <div>
        <p className="font-bold text-slate-900 text-[11px] md:text-xs leading-tight">{label}</p>
        <p className="text-[9px] md:text-[10px] text-slate-700 mt-0.5 hidden md:block xl:block">{sub}</p>
      </div>
    </div>
  );
}