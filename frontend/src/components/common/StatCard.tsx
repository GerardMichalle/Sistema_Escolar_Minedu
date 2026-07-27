import type { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  label: string;
  valor: string;
  detalle: string;
  color: string;
}

export default function StatCard({ icon, label, valor, detalle, color }: Props) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{label}</span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>{icon}</div>
      </div>
      <div className="text-2xl font-bold text-slate-800">{valor}</div>
      <div className="text-xs text-slate-400">{detalle}</div>
    </div>
  );
}
