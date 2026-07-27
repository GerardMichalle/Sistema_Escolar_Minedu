import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { Rol } from "../types";

import Login from "../pages/auth/Login";
import CEOLayout from "../layouts/CEOLayout";
import AdminLayout from "../layouts/AdminLayout";
import TeacherLayout from "../layouts/TeacherLayout";
import StudentLayout from "../layouts/StudentLayout";

import DashboardCEO from "../pages/ceo/DashboardCEO";
import Students from "../pages/admin/Students";
import Teachers from "../pages/admin/Teachers";
import Attendance from "../pages/admin/Attendance";
import RFID from "../pages/admin/RFID";
import Courses from "../pages/teacher/Courses";
import Grades from "../pages/teacher/Grades";
import AttendanceTeacher from "../pages/teacher/AttendanceTeacher";
import VirtualNotebook from "../pages/student/VirtualNotebook";
import AttendanceHistory from "../pages/student/AttendanceHistory";
import Reports from "../pages/student/Reports";
import Notices from "../pages/student/Notices";

/** Protege rutas: exige sesión iniciada y (opcionalmente) roles permitidos. */
function RutaProtegida({ roles }: { roles?: Rol[] }) {
  const { usuario } = useAuth();
  if (!usuario) return <Navigate to="/login" replace />;
  if (roles && !roles.includes(usuario.rol)) return <Navigate to="/login" replace />;
  return <Outlet />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* CEO */}
      <Route element={<RutaProtegida roles={["CEO"]} />}>
        <Route element={<CEOLayout />}>
          <Route path="/ceo/dashboard" element={<DashboardCEO />} />
        </Route>
      </Route>

      {/* Administrador (el CEO también puede entrar) */}
      <Route element={<RutaProtegida roles={["ADMIN", "CEO"]} />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin/alumnos" element={<Students />} />
          <Route path="/admin/profesores" element={<Teachers />} />
          <Route path="/admin/asistencia" element={<Attendance />} />
          <Route path="/admin/rfid" element={<RFID />} />
        </Route>
      </Route>

      {/* Profesor */}
      <Route element={<RutaProtegida roles={["PROFESOR"]} />}>
        <Route element={<TeacherLayout />}>
          <Route path="/profesor/cursos" element={<Courses />} />
          <Route path="/profesor/notas" element={<Grades />} />
          <Route path="/profesor/asistencia" element={<AttendanceTeacher />} />
        </Route>
      </Route>

      {/* Alumno / Padre */}
      <Route element={<RutaProtegida roles={["ALUMNO"]} />}>
        <Route element={<StudentLayout />}>
          <Route path="/alumno/libreta" element={<VirtualNotebook />} />
          <Route path="/alumno/asistencia" element={<AttendanceHistory />} />
          <Route path="/alumno/reportes" element={<Reports />} />
          <Route path="/alumno/avisos" element={<Notices />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
