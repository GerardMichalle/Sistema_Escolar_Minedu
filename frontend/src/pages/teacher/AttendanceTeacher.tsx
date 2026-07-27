import Avatar from "../../components/common/Avatar";
import EstadoBadge from "../../components/common/EstadoBadge";
import { ALUMNOS } from "../../utils/mockData";

export default function AttendanceTeacher() {
  return (
    <div className="max-w-md mx-auto space-y-3">
      <h2 className="font-bold text-slate-800">Matemática · 5° "A"</h2>
      {ALUMNOS.slice(0, 5).map((a) => (
        <div key={a.codigo} className="bg-white rounded-xl border border-slate-200 p-3.5 flex items-center gap-3">
          <Avatar nombre={a.nombre} size="w-10 h-10" />
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-slate-700 truncate">{a.nombre}</div>
            <div className="text-xs text-slate-400">{a.codigo}</div>
          </div>
          <EstadoBadge estado={a.estadoHoy} />
        </div>
      ))}
    </div>
  );
}
