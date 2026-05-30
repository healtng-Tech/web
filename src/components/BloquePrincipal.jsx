// 1. Importamos tus imágenes sin fondo
import imgDashboard from '../assets/dashboard-healtng.png';
import imgReceta from '../assets/receta-healtng.png';

export function BloquePrincipal() {
  return (
    // CONTENEDOR MAESTRO: relative y overflow-hidden para los floaters
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-50">
      
      {/* EL FONDO CON EFECTO BLUR (Gradient dinámico) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-blue-100 blur-[150px] opacity-70"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-100 blur-[130px] opacity-60"></div>
      </div>

      {/* LA CUADRÍCULA DE DISEÑO (Basada en Fabric) */}
      {/* max-w-7xl y px-8 para alinearse con la barra de navegación */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-8 pt-32 pb-24 min-h-screen">
        
        {/* COLUMNA IZQUIERDA: Textos y Botones */}
        <div className="flex flex-col items-start text-left max-w-xl">
          
          {/* TÍTULO H1: Serif, grande, alineación izquierda */}
          <h1 className="font-serif text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-slate-950">
            Orquestación total para el <br />
            <span className="text-healtng-azul">ecosistema de salud.</span>
          </h1>

          {/* SUBTÍTULO: Reducimos el ancho para legibilidad */}
          <p className="text-xl text-slate-700 mb-12 max-w-md leading-relaxed">
            Centralizamos los servicios de salud que más necesitas en una plataforma intuitiva, rápida y segura para ti y tu familia.
          </p>

          {/* BOTONES (Invertimos colores para seguir el estilo) */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto">
            {/* Botón Principal (Oscuro, igual que Fabric) */}
            <button className="bg-slate-950 text-white text-lg px-8 py-4 rounded-full font-semibold shadow-xl shadow-slate-900/10 hover:bg-slate-800 transition transform hover:-translate-y-1 w-full sm:w-auto">
              Agendar demostración técnica
            </button>
            {/* Botón Secundario (Borde, igual que Fabric) */}
            <button className="bg-white text-slate-900 text-lg px-8 py-4 rounded-full font-semibold shadow-sm border border-slate-200 hover:bg-slate-50 transition w-full sm:w-auto">
              Ver Directorio de Servicios
            </button>
          </div>
        </div>

        {/* COLUMNA DERECHA: El panel de producto "flotante" */}
        {/* Usamos flex y position absolute para que parezca salir del contenedor */}
        <div className="relative w-full h-full min-h-[400px] md:min-h-0 hidden md:flex items-center justify-center">
          
          {/* EL DASHBOARD PRINCIPAL: z-20 para estar encima */}
          <img 
            src={imgDashboard} 
            alt="Dashboard Healtng"
            className="absolute z-20 top-0 -right-[15%] w-[110%] max-w-[800px] rounded-3xl shadow-3xl shadow-slate-950/15 rotate-[2deg] border border-white/50"
          />

          {/* LA RECETA DIGITAL: z-10 para estar por debajo */}
          {/* La movemos a la izquierda y abajo para la composición */}
          <img 
            src={imgReceta} 
            alt="Receta digital Healtng"
            className="absolute z-10 bottom-[10%] left-[-15%] w-[45%] max-w-[280px] rounded-xl shadow-2xl shadow-slate-950/10 rotate-[-8deg] border border-white/70"
          />

        </div>
      </div>

    </main>
  );
}