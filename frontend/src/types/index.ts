export type Rol = 'direccion' | 'admin' | 'profesor' | 'alumno' | 'apoderado';

export type EstadoAsistencia = 'puntual' | 'tardanza' | 'ausente' | 'justificado';

export interface Usuario {
  id: string;
  nombre: string;
  correo: string;
  rol: Rol;
  colegio: string;
  sede: string;
  iniciales: string;
  /** Aula asignada (solo docentes) */
  aula?: string;
  /** Código del alumno (solo rol alumno) */
  codigoAlumno?: string;
  /** Código del hijo vinculado (solo rol apoderado) */
  hijoCodigo?: string;
}

export interface Alumno {
  id: string;
  codigo: string;
  nombres: string;
  apellidos: string;
  grado: string;
  seccion: string;
  tarjetaRfid: string | null;
  apoderado: string;
  telefonoApoderado: string;
  entradaHoy: string | null;
  salidaHoy: string | null;
  estadoHoy: EstadoAsistencia;
  fechaNacimiento: string; // ISO
}

export interface LecturaRfid {
  id: string;
  alumnoId: string;
  nombre: string;
  grado: string;
  tarjeta: string;
  hora: string;
  tipo: 'entrada' | 'salida';
  puerta: string;
  estado: EstadoAsistencia;
}

export interface Docente {
  id: string;
  nombres: string;
  apellidos: string;
  correo: string;
  cursos: string[];
  tutoria: string | null;
  estado: 'activo' | 'licencia';
}

export interface Apoderado {
  id: string;
  nombres: string;
  apellidos: string;
  dni: string;
  telefono: string;
  correo: string;
  hijos: string[]; // códigos de alumno
  registradoWeb: boolean;
}

export interface Curso {
  id: string;
  nombre: string;
  nivel: 'Inicial' | 'Primaria' | 'Secundaria';
  grado: string;
  docente: string;
  horasSemana: number;
}

export interface Evento {
  id: string;
  titulo: string;
  fecha: string; // ISO
  hora: string;
  lugar: string;
  tipo: 'academico' | 'civico' | 'deportivo' | 'reunion';
}

export interface Comunicado {
  id: string;
  titulo: string;
  cuerpo: string;
  fecha: string;
  destinatarios: string;
  autor: string;
  leidoPor: number;
  totalDestinatarios: number;
}

export interface Actividad {
  id: string;
  texto: string;
  detalle: string;
  hora: string;
  tipo: 'entrada' | 'salida' | 'sistema' | 'comunicado' | 'matricula';
}

export interface Matricula {
  id: string;
  alumno: string;
  grado: string;
  fecha: string;
  estado: 'completa' | 'pendiente' | 'observada';
  apoderado: string;
}

export interface RegistroConducta {
  id: string;
  alumno: string;
  grado: string;
  tipo: 'merito' | 'demerito';
  categoria: string;
  descripcion: string;
  fecha: string;
  registradoPor: string;
}

export interface LibroBiblioteca {
  id: string;
  titulo: string;
  autor: string;
  codigo: string;
  categoria: string;
  disponibles: number;
  total: number;
}

export interface ItemInventario {
  id: string;
  nombre: string;
  codigo: string;
  categoria: string;
  ubicacion: string;
  cantidad: number;
  estado: 'operativo' | 'mantenimiento' | 'baja';
}

/* ── Cursos gratuitos ─────────────────────────────────────────────── */
export type TipoRecurso = 'pdf' | 'video' | 'libro' | 'imagen';

export interface RecursoCurso {
  id: string;
  titulo: string;
  tipo: TipoRecurso;
  tamano?: string;
  duracion?: string;
}

export interface CategoriaCurso {
  id: string;
  nombre: string;
  recursos: RecursoCurso[];
}

export interface CursoGratuito {
  id: string;
  titulo: string;
  descripcion: string;
  inscritos: number;
  categorias: CategoriaCurso[];
}
