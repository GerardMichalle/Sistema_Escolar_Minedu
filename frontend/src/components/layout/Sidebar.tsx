import { University, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import type { MenuItem } from "./menu";

interface Props {
  menu: MenuItem[];
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ menu, open, onClose }: Props) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <aside
        className={`fixed md:static inset-y-0 left-0 z-40 w-64 bg-indigo-950 flex flex-col transition-transform ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-5 flex items-center gap-3 border-b border-indigo-900">
          <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center">
            <University className="text-indigo-900" size={20} />
          </div>
          <div>
            <div className="text-white font-bold text-sm">Universidad Privada Del Norte</div>
            <div className="text-indigo-400 text-xs">Gestión Escolar</div>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {menu.map((m) => (
            <NavLink
              key={m.path}
              to={m.path}
              onClick={onClose}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? "bg-amber-400 text-indigo-950" : "text-indigo-300 hover:bg-indigo-900 hover:text-white"
                }`
              }
            >
              {m.icon} {m.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-indigo-900">
          <button
            onClick={() => { logout(); navigate("/login"); }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-indigo-300 hover:bg-indigo-900 hover:text-white"
          >
            <LogOut size={16} /> Cerrar sesión
          </button>
        </div>
      </aside>
      {open && <div className="fixed inset-0 bg-black/40 z-30 md:hidden" onClick={onClose} />}
    </>
  );
}
