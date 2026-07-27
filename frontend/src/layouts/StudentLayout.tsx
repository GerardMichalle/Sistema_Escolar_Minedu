import MainLayout from "./MainLayout";
import { MENU_ALUMNO } from "../components/layout/menu";

export default function StudentLayout() {
  return <MainLayout menu={MENU_ALUMNO} titulo="Libreta Virtual" />;
}
