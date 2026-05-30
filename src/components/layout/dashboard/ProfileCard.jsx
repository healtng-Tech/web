import { HeartPulse, AlertTriangle } from "lucide-react";

export function ProfileCard() {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6 text-slate-900">
        Perfil de salud
      </h2>

      <div className="space-y-4">
        <div className="border border-slate-200 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-900">
                Tipo de sangre
              </p>

              <p className="text-sm text-slate-500">
                Grupo registrado
              </p>
            </div>

            <span className="text-2xl font-bold text-red-500">
              B+
            </span>
          </div>
        </div>

        <div className="border border-slate-200 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-900">
                Alergias
              </p>

              <p className="text-sm text-slate-500">
                Sin registros
              </p>
            </div>

            <AlertTriangle size={18} className="text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
}