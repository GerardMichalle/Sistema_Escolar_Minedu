import { Wifi } from "lucide-react";
import Avatar from "../../components/common/Avatar";
import { NOTAS } from "../../utils/mockData";

export default function VirtualNotebook() {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="bg-indigo-900 rounded-2xl p-5 text-white relative overflow-hidden">
        <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-amber-400 opacity-20" />
        <div className="flex items-center gap-4">
          <Avatar nombre="Valeria Quispe" size="w-14 h-14" text="text-lg" />
          <div className="flex-1">
            <div className="font-bold text-lg leading-tight">Valeria Quispe Rojas</div>
            <div className="text-indigo-300 text-sm">5° grado "A" · Código A-2041</div>
          </div>
          <div className="text-right">
            <Wifi size={18} className="text-amber-400 rotate-90 ml-auto" />
            <div className="text-[10px] font-mono text-indigo-300 mt-1">RF-88213</div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[["Asistencia", "96%"], ["Tardanzas", "2"], ["Ausencias", "1"]].map(([l, v]) => (
            <div key={l} className="bg-indigo-950/60 rounded-lg px-3 py-2">
              <div className="text-[10px] text-indigo-300 uppercase tracking-wide">{l}</div>
              <div className="font-bold text-amber-300">{v}</div>
            </div>
          ))}
        </div>
      </div>

      <h3 className="font-semibold text-slate-800 text-sm">Calificaciones — Bimestre II</h3>
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-left text-xs text-slate-500 uppercase">
              <th className="px-4 py-3 font-semibold">Curso</th>
              <th className="px-3 py-3 font-semibold text-center">N1</th>
              <th className="px-3 py-3 font-semibold text-center">N2</th>
              <th className="px-3 py-3 font-semibold text-center">N3</th>
              <th className="px-3 py-3 font-semibold text-center">Prom.</th>
            </tr>
          </thead>
          <tbody>
            {NOTAS.map((n) => (
              <tr key={n.curso} className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium text-slate-700">{n.curso}</td>
                <td className="px-3 py-3 text-center text-slate-600">{n.n1}</td>
                <td className="px-3 py-3 text-center text-slate-600">{n.n2}</td>
                <td className="px-3 py-3 text-center text-slate-600">{n.n3}</td>
                <td className="px-3 py-3 text-center font-bold text-indigo-900">{n.promedio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
