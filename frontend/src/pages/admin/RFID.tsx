import { useEffect, useState } from "react";
import { CreditCard } from "lucide-react";
import EstadoBadge from "../../components/common/EstadoBadge";
import { getLecturasEnVivo } from "../../services/api";
import type { LecturaRFID } from "../../types";

export default function RFID() {
  const [lecturas, setLecturas] = useState<LecturaRFID[]>([]);

  useEffect(() => {
    getLecturasEnVivo().then(setLecturas);
    // TODO backend: reemplazar por WebSocket / SSE para lecturas en tiempo real
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500" />
        </span>
        <h2 className="font-bold text-slate-800">Asistencia en tiempo real — Portería principal</h2>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
        {lecturas.map((l, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center">
              <CreditCard size={16} className="text-indigo-800" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-slate-700 truncate">{l.nombre}</div>
              <div className="text-xs text-slate-400 font-mono">{l.codigo} · {l.tipo} · {l.hora}</div>
            </div>
            <EstadoBadge estado={l.estado} />
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-400">
        Cada lectura del lector RFID aparece aquí al instante y notifica al padre de familia automáticamente.
      </p>
    </div>
  );
}
