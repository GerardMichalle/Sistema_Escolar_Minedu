export type Rol = "CEO" | "ADMIN" | "PROFESOR" | "ALUMNO";

export type EstadoAsistencia = "Puntual" | "Tardanza" | "Ausente";

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: Rol;
}

export interface Alumno {
  codigo: string;
  nombre: string;
  grado: string;
  seccion: string;
  tarjetaRFID: string;
  estadoHoy: EstadoAsistencia;
  entrada: string;
  salida: string;
}

export interface RegistroAsistencia {
  fecha: string;
  entrada: string;
  salida: string;
  estado: EstadoAsistencia;
}

export interface LecturaRFID {
  hora: string;
  nombre: string;
  codigo: string;
  tipo: "Entrada" | "Salida";
  estado: EstadoAsistencia;
}

export interface NotaCurso {
  curso: string;
  n1: number;
  n2: number;
  n3: number;
  promedio: number;
}

export interface CursoProfesor {
  curso: string;
  grado: string;
  alumnos: number;
  horario: string;
}

export interface Aviso {
  titulo: string;
  fecha: string;
  tipo: "aviso" | "rfid";
}
