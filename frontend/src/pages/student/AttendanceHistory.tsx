import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import EstadoBadge from "../../components/common/EstadoBadge";
import { getHistorialAlumno } from "../../services/api";
import type { RegistroAsistencia } from "../../types";

export default function AttendanceHistory() {
  const [historial, setHistorial] = useState<RegistroAsistencia[]>([]);

  useEffect(() => {
    getHistorialAlumno("A-2041").then(setHistorial);
  }, []);

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h2 className="font-bold text-slate-800">Historial de asistencia — Julio</h2>
      <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
        {historial.map((h, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-3">
            <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
              <Calendar size={15} className="text-slate-500" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-slate-700">{h.fecha}</div>
              <div className="text-xs text-slate-400 font-mono">Entrada {h.entrada} · Salida {h.salida}</div>
            </div>
            <EstadoBadge estado={h.estado} />
          </div>
        ))}
      </div>
    </div>
  );
}
