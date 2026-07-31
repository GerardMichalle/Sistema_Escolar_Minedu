/**
 * Capa de servicios de Willay.
 *
 * HOY: devuelve datos mock para la demo del frontend.
 * MAÑANA: reemplazar el cuerpo de cada función por un fetch() al backend
 * Spring Boot (proxy ya configurado: /api → http://localhost:8080).
 *
 * Ninguna página importa datos mock directamente: todas pasan por aquí,
 * así el cambio a backend real no toca ninguna vista.
 */
import {
  ALUMNOS, LECTURAS_INICIALES, DOCENTES, APODERADOS, EVENTOS,
  COMUNICADOS, ACTIVIDAD, MATRICULAS, CONDUCTA,
  ASISTENCIA_SEMANA, STATS_HOY, USUARIO_DEMO, CURSOS_GRATUITOS,
} from '../data/mock';
import type { Rol, Usuario, LecturaRfid } from '../types';

const delay = (ms = 220) => new Promise((r) => setTimeout(r, ms));

// ── Auth ────────────────────────────────────────────────────────────
// TODO Spring Boot: POST /api/auth/login  { usuario, password } → { token, usuario }
export async function login(_correo: string, _password: string, rol: Rol): Promise<Usuario> {
  await delay(400);
  const base = { ...USUARIO_DEMO, rol };
  switch (rol) {
    case 'direccion':
      return { ...base, nombre: 'Ricardo Palomino', correo: 'direccion@sanmartin.edu.pe', iniciales: 'RP' };
    case 'admin':
      return { ...base, nombre: 'Patricia Soto', correo: 'patricia.soto@sanmartin.edu.pe', iniciales: 'PS' };
    case 'profesor':
      return { ...base, nombre: 'Carlos Mendoza', correo: 'c.mendoza@sanmartin.edu.pe', iniciales: 'CM', aula: '5° A' };
    case 'alumno':
      return { ...base, nombre: 'Valeria Quispe', correo: 'valeria.quispe@sanmartin.edu.pe', iniciales: 'VQ', codigoAlumno: 'A-2041' };
    case 'apoderado':
      return { ...base, nombre: 'Rosa Rojas', correo: 'rosa.rojas@gmail.com', iniciales: 'RR', hijoCodigo: 'A-2041' };
  }
}

// ── Alumnos ─────────────────────────────────────────────────────────
// TODO: GET /api/alumnos?sede={sedeId}   ·   GET /api/alumnos?aula={aulaId}
export async function getAlumnos() { await delay(); return ALUMNOS; }

// ── Asistencia ──────────────────────────────────────────────────────
// TODO: GET /api/asistencia/lecturas/hoy  (histórico)
//       WebSocket/SSE /api/asistencia/stream  (tiempo real desde el lector)
//       El backend filtra por aula cuando el rol es docente.
export async function getLecturasHoy(): Promise<LecturaRfid[]> { await delay(); return LECTURAS_INICIALES; }

// TODO: GET /api/asistencia/resumen-semana
export async function getAsistenciaSemana() { await delay(); return ASISTENCIA_SEMANA; }

// ── Dashboard ───────────────────────────────────────────────────────
// TODO: GET /api/dashboard/stats
export async function getStatsHoy() { await delay(); return STATS_HOY; }
export async function getActividad() { await delay(); return ACTIVIDAD; }

// ── Personas ────────────────────────────────────────────────────────
export async function getDocentes() { await delay(); return DOCENTES; }        // TODO: GET /api/docentes
export async function getApoderados() { await delay(); return APODERADOS; }    // TODO: GET /api/apoderados

// ── Académico ───────────────────────────────────────────────────────
export async function getMatriculas() { await delay(); return MATRICULAS; }    // TODO: GET /api/matriculas
export async function getConducta() { await delay(); return CONDUCTA; }        // TODO: GET /api/conducta

// ── Comunicación / eventos ──────────────────────────────────────────
export async function getEventos() { await delay(); return EVENTOS; }          // TODO: GET /api/eventos
export async function getComunicados() { await delay(); return COMUNICADOS; }  // TODO: GET /api/comunicados

// ── Cursos gratuitos ────────────────────────────────────────────────
// TODO: GET /api/cursos-gratuitos
//       POST /api/cursos-gratuitos/{id}/recursos  (multipart: pdf/video/imagen/libro — solo admin)
export async function getCursosGratuitos() { await delay(); return CURSOS_GRATUITOS; }
