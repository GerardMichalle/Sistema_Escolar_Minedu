import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import type { EstadoAsistencia } from "../../types";

const styles: Record<EstadoAsistencia, string> = {
  Puntual: "bg-teal-50 text-teal-700 border-teal-200",
  Tardanza: "bg-amber-50 text-amber-700 border-amber-200",
  Ausente: "bg-rose-50 text-rose-700 border-rose-200",
};

const icons: Record<EstadoAsistencia, JSX.Element> = {
  Puntual: <CheckCircle2 size={12} />,
  Tardanza: <AlertTriangle size={12} />,
  Ausente: <XCircle size={12} />,
};

export default function EstadoBadge({ estado }: { estado: EstadoAsistencia }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${styles[estado]}`}>
      {icons[estado]} {estado}
    </span>
  );
}
