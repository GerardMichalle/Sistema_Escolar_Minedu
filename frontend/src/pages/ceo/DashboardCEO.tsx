import { Users, CheckCircle2, Clock, XCircle, ChevronRight } from "lucide-react";
import StatCard from "../../components/common/StatCard";
import GraficoSemana from "../../components/dashboard/GraficoSemana";
import GraficoDistribucion from "../../components/dashboard/GraficoDistribucion";
import GraficoTendencia from "../../components/dashboard/GraficoTendencia";

const SEDES = [
  { sede: "Sede Central — San Isidro", alumnos: 320, pct: "94%" },
  { sede: "Sede Norte — Los Olivos", alumnos: 150, pct: "91%" },
  { sede: "Sede Este — Ate", alumnos: 90, pct: "89%" },
];

export default function DashboardCEO() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <StatCard icon={<Users size={16} className="text-white" />} color="bg-indigo-900" label="Total alumnos" valor="560" detalle="3 sedes activas" />
        <StatCard icon={<CheckCircle2 size={16} className="text-white" />} color="bg-teal-600" label="Asistencias hoy" valor="498" detalle="88.9% del total" />
        <StatCard icon={<Clock size={16} className="text-white" />} color="bg-amber-500" label="Tardanzas hoy" valor="45" detalle="8.0% del total" />
        <StatCard icon={<XCircle size={16} className="text-white" />} color="bg-rose-600" label="Ausentes hoy" valor="17" detalle="3.1% del total" />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-slate-800 text-sm">Asistencia de la semana</h3>
            <button className="text-xs text-indigo-700 font-medium flex items-center gap-1">
              Ver reporte <ChevronRight size={13} />
            </button>
          </div>
          <GraficoSemana />
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <h3 className="font-semibold text-slate-800 text-sm mb-3">Distribución de hoy</h3>
          <GraficoDistribucion />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-4">
          <h3 className="font-semibold text-slate-800 text-sm mb-3">Puntualidad del mes (%)</h3>
          <GraficoTendencia />
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <h3 className="font-semibold text-slate-800 text-sm mb-3">Sedes</h3>
          {SEDES.map((s) => (
            <div key={s.sede} className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0">
              <div>
                <div className="text-sm font-medium text-slate-700">{s.sede}</div>
                <div className="text-xs text-slate-400">{s.alumnos} alumnos</div>
              </div>
              <span className="text-sm font-bold text-teal-700">{s.pct}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
