// ============================================================
// Capa de servicios — preparada para la integración con el
// backend Spring Boot (http://localhost:8080/api).
//
// Mientras el backend no exista, cada función devuelve datos
// simulados (mock). Cuando el backend esté listo, solo hay que
// reemplazar el cuerpo de cada función por la llamada real,
// sin tocar ninguna página ni componente.
// ============================================================
import type { Alumno, LecturaRFID, RegistroAsistencia, NotaCurso, Usuario, Rol } from "../types";
import { ALUMNOS, LECTURAS_VIVO, HISTORIAL_ALUMNO, NOTAS } from "../utils/mockData";

export const API_BASE_URL = "/api"; // proxy de Vite → Spring Boot :8080

// Ejemplo de cliente HTTP para el futuro:
// async function http<T>(path: string, options?: RequestInit): Promise<T> {
//   const token = localStorage.getItem("token");
//   const res = await fetch(`${API_BASE_URL}${path}`, {
//     ...options,
//     headers: {
//       "Content-Type": "application/json",
//       ...(token ? { Authorization: `Bearer ${token}` } : {}),
//       ...options?.headers,
//     },
//   });
//   if (!res.ok) throw new Error(`Error ${res.status}`);
//   return res.json();
// }

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export async function login(email: string, _password: string, rol: Rol): Promise<Usuario> {
  await delay();
  // TODO backend: return http<Usuario>("/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });
  const nombres: Record<Rol, string> = {
    CEO: "Dir. Ricardo Málaga",
    ADMIN: "Admin. Patricia Soto",
    PROFESOR: "Prof. Jorge Delgado",
    ALUMNO: "Valeria Quispe",
  };
  return { id: 1, nombre: nombres[rol], email, rol };
}

export async function getAlumnos(): Promise<Alumno[]> {
  await delay();
  // TODO backend: return http<Alumno[]>("/alumnos");
  return ALUMNOS;
}

export async function getLecturasEnVivo(): Promise<LecturaRFID[]> {
  await delay();
  // TODO backend: return http<LecturaRFID[]>("/asistencia/lecturas");
  return LECTURAS_VIVO;
}

export async function getHistorialAlumno(_codigo: string): Promise<RegistroAsistencia[]> {
  await delay();
  // TODO backend: return http<RegistroAsistencia[]>(`/asistencia/alumno/${codigo}`);
  return HISTORIAL_ALUMNO;
}

export async function getNotasAlumno(_codigo: string): Promise<NotaCurso[]> {
  await delay();
  // TODO backend: return http<NotaCurso[]>(`/notas/alumno/${codigo}`);
  return NOTAS;
}
