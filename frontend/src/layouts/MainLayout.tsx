import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import BottomNav from "../components/layout/BottomNav";
import type { MenuItem } from "../components/layout/menu";

interface Props {
  menu: MenuItem[];
  titulo: string;
}

export default function MainLayout({ menu, titulo }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-100 flex">
      <Sidebar menu={menu} open={open} onClose={() => setOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header titulo={titulo} onMenu={() => setOpen(true)} />
        <main className="flex-1 p-4 md:p-6 pb-24 md:pb-6">
          <Outlet />
        </main>
      </div>
      <BottomNav items={menu} />
    </div>
  );
}
