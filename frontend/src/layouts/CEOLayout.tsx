import MainLayout from "./MainLayout";
import { MENU_CEO } from "../components/layout/menu";

export default function CEOLayout() {
  return <MainLayout menu={MENU_CEO} titulo="Panel de Dirección" />;
}
