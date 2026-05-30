export function AppointmentCard() {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          Mis citas
        </h2>

        <button className="text-[#002EE5] font-medium text-sm">
          Ver todas
        </button>
      </div>

      <div className="border border-slate-200 rounded-2xl p-5">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold text-slate-900">
              Dr. Jesús Ferrer
            </p>

            <p className="text-slate-500 text-sm">
              Migraña • Dolor de garganta
            </p>
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#002EE5]/10 text-[#002EE5]">
            Confirmada
          </span>
        </div>

        <div className="flex gap-3 mt-5">
          <button className="border border-slate-200 px-4 py-2 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors">
            Reagendar
          </button>

          <button className="border border-slate-200 px-4 py-2 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}