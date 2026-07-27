import { NavLink } from "react-router-dom";
import type { MenuItem } from "./menu";

export default function BottomNav({ items }: { items: MenuItem[] }) {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 flex md:hidden z-20">
      {items.slice(0, 4).map((m) => (
        <NavLink
          key={m.path}
          to={m.path}
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium ${
              isActive ? "text-indigo-900" : "text-slate-400"
            }`
          }
        >
          {m.icon} {m.label}
        </NavLink>
      ))}
    </nav>
  );
}
