import { Bell, CreditCard } from "lucide-react";
import { AVISOS } from "../../utils/mockData";

export default function Notices() {
  return (
    <div className="max-w-2xl mx-auto space-y-3">
      <h2 className="font-bold text-slate-800">Comunicaciones</h2>
      {AVISOS.map((a, i) => (
        <div key={i} className="bg-white rounded-xl border border-slate-200 p-4 flex items-start gap-3">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${a.tipo === "rfid" ? "bg-teal-50 border-teal-100" : "bg-amber-50 border-amber-100"}`}>
            {a.tipo === "rfid" ? <CreditCard size={16} className="text-teal-700" /> : <Bell size={16} className="text-amber-700" />}
          </div>
          <div>
            <div className="text-sm font-medium text-slate-700">{a.titulo}</div>
            <div className="text-xs text-slate-400 mt-0.5">{a.fecha}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
