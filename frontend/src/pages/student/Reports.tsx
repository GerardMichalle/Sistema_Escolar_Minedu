import { FileText, Download } from "lucide-react";

const REPORTES = [
  { nombre: "Reporte de asistencia — Julio 2026", tipo: "PDF" },
  { nombre: "Historial completo de entradas y salidas", tipo: "Excel" },
  { nombre: "Boleta de calificaciones — Bimestre II", tipo: "PDF" },
];

export default function Reports() {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h2 className="font-bold text-slate-800">Reportes descargables</h2>
      <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-3">
        <label className="text-xs font-semibold text-slate-600 uppercase">Buscar por código de alumno</label>
        <div className="flex gap-2">
          <input
            defaultValue="A-2041"
            className="flex-1 px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="px-4 py-2.5 rounded-lg bg-indigo-900 text-white text-sm font-medium">Buscar</button>
        </div>
      </div>
      {REPORTES.map((r) => (
        <div key={r.nombre} className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center">
            <FileText size={17} className="text-rose-600" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-slate-700">{r.nombre}</div>
            <div className="text-xs text-slate-400">Formato {r.tipo}</div>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 text-xs font-medium text-slate-700 hover:bg-slate-50">
            <Download size={13} /> Descargar
          </button>
        </div>
      ))}
    </div>
  );
}
