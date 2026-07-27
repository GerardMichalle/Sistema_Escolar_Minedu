import Avatar from "../../components/common/Avatar";
import { ALUMNOS } from "../../utils/mockData";

export default function Grades() {
  return (
    <div className="max-w-md mx-auto space-y-3">
      <h2 className="font-bold text-slate-800">Registrar notas — Bimestre II</h2>
      {ALUMNOS.slice(0, 4).map((a) => (
        <div key={a.codigo} className="bg-white rounded-xl border border-slate-200 p-3.5">
          <div className="flex items-center gap-2.5 mb-2.5">
            <Avatar nombre={a.nombre} />
            <span className="text-sm font-medium text-slate-700">{a.nombre}</span>
          </div>
          <div className="flex gap-2">
            {["Nota 1", "Nota 2", "Nota 3"].map((n) => (
              <input
                key={n}
                placeholder={n}
                className="w-full px-2.5 py-2 rounded-lg border border-slate-300 text-sm text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ))}
          </div>
        </div>
      ))}
      <button className="w-full py-3 rounded-xl bg-indigo-900 text-white font-semibold text-sm">Guardar notas</button>
    </div>
  );
}
