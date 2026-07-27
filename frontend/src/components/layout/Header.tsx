import { Menu, Search, Bell } from "lucide-react";
import Avatar from "../common/Avatar";
import { useAuth } from "../../context/AuthContext";

interface Props {
  titulo: string;
  onMenu: () => void;
}

export default function Header({ titulo, onMenu }: Props) {
  const { usuario } = useAuth();
  return (
    <header className="bg-white border-b border-slate-200 px-4 md:px-6 py-3 flex items-center gap-3 sticky top-0 z-20">
      <button className="md:hidden text-slate-600" onClick={onMenu} aria-label="Abrir menú">
        <Menu size={22} />
      </button>
      <h1 className="font-semibold text-slate-800 text-sm md:text-base flex-1 truncate">{titulo}</h1>
      <div className="hidden sm:flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-1.5 text-sm text-slate-400">
        <Search size={14} /> <span className="hidden lg:inline">Buscar alumno, código…</span>
      </div>
      <button className="relative text-slate-500 hover:text-slate-700" aria-label="Notificaciones">
        <Bell size={19} />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[10px] rounded-full flex items-center justify-center">3</span>
      </button>
      {usuario && (
        <div className="flex items-center gap-2">
          <Avatar nombre={usuario.nombre} />
          <span className="hidden lg:block text-sm font-medium text-slate-700">{usuario.nombre}</span>
        </div>
      )}
    </header>
  );
}
