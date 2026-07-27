import { useEffect, useState } from "react";
import { Download, Plus, Wifi } from "lucide-react";
import Avatar from "../../components/common/Avatar";
import EstadoBadge from "../../components/common/EstadoBadge";
import { getAlumnos } from "../../services/api";
import type { Alumno } from "../../types";

export default function Students() {
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);

  useEffect(() => {
    getAlumnos().then(setAlumnos);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3 justify-between">
        <div>
          <h2 className="font-bold text-slate-800">Gestión de alumnos</h2>
          <p className="text-xs text-slate-500">560 alumnos registrados · 542 tarjetas vinculadas</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-300 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Download size={15} /> Exportar
          </button>
          <button className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-indigo-900 text-white text-sm font-medium hover:bg-indigo-800">
            <Plus size={15} /> Registrar alumno
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-left text-xs text-slate-500 uppercase tracking-wide">
                <th className="px-4 py-3 font-semibold">Alumno</th>
                <th className="px-4 py-3 font-semibold">Código</th>
                <th className="px-4 py-3 font-semibold hidden sm:table-cell">Grado</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Tarjeta RFID</th>
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">Entrada / Salida</th>
                <th className="px-4 py-3 font-semibold">Estado hoy</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((a) => (
                <tr key={a.codigo} className="border-t border-slate-100 hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <Avatar nombre={a.nombre} />
                      <span className="font-medium text-slate-700">{a.nombre}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-500 font-mono text-xs">{a.codigo}</td>
                  <td className="px-4 py-3 text-slate-600 hidden sm:table-cell">{a.grado} "{a.seccion}"</td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-800 bg-indigo-50 border border-indigo-100 rounded px-2 py-0.5">
                      <Wifi size={11} className="rotate-90" /> {a.tarjetaRFID}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-600 hidden lg:table-cell font-mono text-xs">{a.entrada} → {a.salida}</td>
                  <td className="px-4 py-3"><EstadoBadge estado={a.estadoHoy} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
