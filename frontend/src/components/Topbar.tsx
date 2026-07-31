import { Search, Bell } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Avatar } from './ui';

function fechaLarga() {
  const f = new Date();
  const s = f.toLocaleDateString('es-PE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const h = f.toLocaleTimeString('es-PE', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase();
  return `${s.charAt(0).toUpperCase() + s.slice(1)} · ${h}`;
}

export default function Topbar({ title, subtitle }: { title: string; subtitle?: string }) {
  const { usuario } = useAuth();
  return (
    <header className="flex items-center justify-between gap-4 px-8 pt-6 pb-5">
      <div className="min-w-0">
        <h1 className="text-[22px] font-bold tracking-tight truncate">{title}</h1>
        <p className="text-[12.5px] text-ink-3 mt-0.5">{subtitle ?? fechaLarga()}</p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <label className="hidden md:flex items-center gap-2 bg-paper border border-line rounded-[10px] px-3.5 py-2.5 w-[260px] transition-colors focus-within:border-line-2">
          <Search size={15} className="text-ink-3" />
          <input
            placeholder="Buscar alumno, código o DNI…"
            className="w-full bg-transparent outline-none text-[13px] placeholder:text-ink-3"
          />
        </label>
        <button className="relative grid place-items-center w-10 h-10 rounded-[10px] border border-line bg-paper text-ink-2 hover:text-ink transition-colors cursor-pointer" aria-label="Notificaciones">
          <Bell size={16} />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand border-2 border-paper" />
        </button>
        {usuario && <Avatar nombre={usuario.nombre} size="lg" />}
      </div>
    </header>
  );
}
