import MainLayout from "./MainLayout";
import { MENU_PROFESOR } from "../components/layout/menu";

export default function TeacherLayout() {
  return <MainLayout menu={MENU_PROFESOR} titulo="Portal del Profesor" />;
}
