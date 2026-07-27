import type { ReactNode } from "react";
import {
  LayoutDashboard, Users, GraduationCap, CreditCard, FileText, BookOpen,
  Home, ClipboardList, Calendar, Download, MessageSquare,
} from "lucide-react";

export interface MenuItem {
  path: string;
  label: string;
  icon: ReactNode;
}

export const MENU_CEO: MenuItem[] = [
  { path: "/ceo/dashboard", label: "Dashboard", icon: <LayoutDashboard size={16} /> },
  { path: "/admin/alumnos", label: "Alumnos", icon: <Users size={16} /> },
  { path: "/admin/profesores", label: "Profesores", icon: <GraduationCap size={16} /> },
  { path: "/admin/rfid", label: "Asistencia RFID", icon: <CreditCard size={16} /> },
  { path: "/admin/asistencia", label: "Reportes", icon: <FileText size={16} /> },
];

export const MENU_ADMIN: MenuItem[] = [
  { path: "/admin/alumnos", label: "Alumnos", icon: <Users size={16} /> },
  { path: "/admin/rfid", label: "Asistencia en vivo", icon: <CreditCard size={16} /> },
  { path: "/admin/profesores", label: "Profesores", icon: <GraduationCap size={16} /> },
  { path: "/admin/asistencia", label: "Reportes", icon: <FileText size={16} /> },
];

export const MENU_PROFESOR: MenuItem[] = [
  { path: "/profesor/cursos", label: "Inicio", icon: <Home size={16} /> },
  { path: "/profesor/asistencia", label: "Asistencia", icon: <Calendar size={16} /> },
  { path: "/profesor/notas", label: "Notas", icon: <ClipboardList size={16} /> },
];

export const MENU_ALUMNO: MenuItem[] = [
  { path: "/alumno/libreta", label: "Libreta", icon: <BookOpen size={16} /> },
  { path: "/alumno/asistencia", label: "Asistencia", icon: <Calendar size={16} /> },
  { path: "/alumno/reportes", label: "Reportes", icon: <Download size={16} /> },
  { path: "/alumno/avisos", label: "Avisos", icon: <MessageSquare size={16} /> },
];
