import MainLayout from "./MainLayout";
import { MENU_ADMIN } from "../components/layout/menu";

export default function AdminLayout() {
  return <MainLayout menu={MENU_ADMIN} titulo="Panel de Administración" />;
}
