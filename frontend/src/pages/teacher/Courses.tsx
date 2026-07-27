import { BookOpen, ChevronRight } from "lucide-react";
import { CURSOS_PROFESOR } from "../../utils/mockData";
import { useAuth } from "../../context/AuthContext";

export default function Courses() {
  const { usuario } = useAuth();
  return (
    <div className="max-w-md mx-auto space-y-4">
      <div className="bg-indigo-900 rounded-2xl p-5 text-white">
        <div className="text-indigo-300 text-xs">Lunes 27 de julio</div>
        <div className="font-bold text-lg mt-0.5">Buenos días, {usuario?.nombre ?? "Profesor"} 👋</div>
        <div className="text-sm text-indigo-200 mt-1">Tienes 3 clases hoy · 90 alumnos en total</div>
      </div>
      <h3 className="font-semibold text-slate-800 text-sm">Mis cursos de hoy</h3>
      {CURSOS_PROFESOR.map((c, i) => (
        <div key={i} className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center">
            <BookOpen size={18} className="text-amber-700" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-slate-800">{c.curso} · {c.grado}</div>
            <div className="text-xs text-slate-500">{c.horario} · {c.alumnos} alumnos</div>
          </div>
          <ChevronRight size={17} className="text-slate-300" />
        </div>
      ))}
    </div>
  );
}
