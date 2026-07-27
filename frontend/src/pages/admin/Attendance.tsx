import { FileText, Download } from "lucide-react";

const REPORTES = [
  { nombre: "Reporte diario de asistencia", detalle: "Todos los grados · Hoy", formato: "PDF" },
  { nombre: "Consolidado semanal por sección", detalle: "Semana del 20 al 24 de julio", formato: "Excel" },
  { nombre: "Tardanzas acumuladas del mes", detalle: "Julio 2026", formato: "PDF" },
  { nombre: "Historial completo por alumno", detalle: "Buscar por código", formato: "Excel" },
];

export default function Attendance() {
  return (
    <div className="space-y-4 max-w-2xl">
      <h2 className="font-bold text-slate-800">Reportes de asistencia</h2>
      {REPORTES.map((r) => (
        <div key={r.nombre} className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center">
            <FileText size={17} className="text-rose-600" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-slate-700">{r.nombre}</div>
            <div className="text-xs text-slate-400">{r.detalle} · {r.formato}</div>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 text-xs font-medium text-slate-700 hover:bg-slate-50">
            <Download size={13} /> Descargar
          </button>
        </div>
      ))}
    </div>
  );
}
