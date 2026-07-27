import type { Alumno, RegistroAsistencia, LecturaRFID, NotaCurso, CursoProfesor, Aviso } from "../types";

export const ALUMNOS: Alumno[] = [
  { codigo: "A-2041", nombre: "Valeria Quispe Rojas", grado: "5°", seccion: "A", tarjetaRFID: "RF-88213", estadoHoy: "Puntual", entrada: "07:42", salida: "15:03" },
  { codigo: "A-2042", nombre: "Diego Fernández Luna", grado: "5°", seccion: "A", tarjetaRFID: "RF-88214", estadoHoy: "Tardanza", entrada: "08:14", salida: "15:05" },
  { codigo: "A-2043", nombre: "Camila Torres Vega", grado: "4°", seccion: "B", tarjetaRFID: "RF-88215", estadoHoy: "Puntual", entrada: "07:38", salida: "15:01" },
  { codigo: "A-2044", nombre: "Mateo Huamán Ríos", grado: "3°", seccion: "C", tarjetaRFID: "RF-88216", estadoHoy: "Ausente", entrada: "—", salida: "—" },
  { codigo: "A-2045", nombre: "Luciana Paredes Cruz", grado: "5°", seccion: "B", tarjetaRFID: "RF-88217", estadoHoy: "Puntual", entrada: "07:29", salida: "15:00" },
  { codigo: "A-2046", nombre: "Sebastián Chávez Mori", grado: "2°", seccion: "A", tarjetaRFID: "RF-88218", estadoHoy: "Tardanza", entrada: "08:07", salida: "14:58" },
];

export const ASISTENCIA_SEMANA = [
  { dia: "Lun", puntuales: 512, tardanzas: 34, ausentes: 14 },
  { dia: "Mar", puntuales: 528, tardanzas: 22, ausentes: 10 },
  { dia: "Mié", puntuales: 505, tardanzas: 41, ausentes: 14 },
  { dia: "Jue", puntuales: 531, tardanzas: 19, ausentes: 10 },
  { dia: "Vie", puntuales: 498, tardanzas: 45, ausentes: 17 },
];

export const TENDENCIA_MES = [
  { sem: "Sem 1", pct: 92.1 },
  { sem: "Sem 2", pct: 93.4 },
  { sem: "Sem 3", pct: 91.2 },
  { sem: "Sem 4", pct: 94.6 },
];

export const PIE_HOY = [
  { name: "Puntuales", value: 498, color: "#0d9488" },
  { name: "Tardanzas", value: 45, color: "#d97706" },
  { name: "Ausentes", value: 17, color: "#e11d48" },
];

export const HISTORIAL_ALUMNO: RegistroAsistencia[] = [
  { fecha: "Vie 24 Jul", entrada: "07:42", salida: "15:03", estado: "Puntual" },
  { fecha: "Jue 23 Jul", entrada: "07:51", salida: "15:04", estado: "Puntual" },
  { fecha: "Mié 22 Jul", entrada: "08:12", salida: "15:02", estado: "Tardanza" },
  { fecha: "Mar 21 Jul", entrada: "07:39", salida: "15:00", estado: "Puntual" },
  { fecha: "Lun 20 Jul", entrada: "—", salida: "—", estado: "Ausente" },
];

export const NOTAS: NotaCurso[] = [
  { curso: "Matemática", n1: 16, n2: 18, n3: 15, promedio: 16.3 },
  { curso: "Comunicación", n1: 14, n2: 15, n3: 17, promedio: 15.3 },
  { curso: "Ciencia y Tecnología", n1: 18, n2: 17, n3: 19, promedio: 18.0 },
  { curso: "Personal Social", n1: 15, n2: 16, n3: 16, promedio: 15.7 },
  { curso: "Inglés", n1: 17, n2: 18, n3: 18, promedio: 17.7 },
];

export const LECTURAS_VIVO: LecturaRFID[] = [
  { hora: "08:14:22", nombre: "Diego Fernández Luna", codigo: "A-2042", tipo: "Entrada", estado: "Tardanza" },
  { hora: "08:11:05", nombre: "Sebastián Chávez Mori", codigo: "A-2046", tipo: "Entrada", estado: "Tardanza" },
  { hora: "07:59:48", nombre: "Ana Lucía Ramos", codigo: "A-2051", tipo: "Entrada", estado: "Puntual" },
  { hora: "07:58:12", nombre: "Piero Salazar Inca", codigo: "A-2057", tipo: "Entrada", estado: "Puntual" },
];

export const CURSOS_PROFESOR: CursoProfesor[] = [
  { curso: "Matemática", grado: "5° A", alumnos: 32, horario: "08:00 – 09:30" },
  { curso: "Matemática", grado: "5° B", alumnos: 30, horario: "09:45 – 11:15" },
  { curso: "Matemática", grado: "4° B", alumnos: 28, horario: "11:30 – 13:00" },
];

export const AVISOS: Aviso[] = [
  { titulo: "Reunión de padres — 5° grado", fecha: "Hoy, 10:30", tipo: "aviso" },
  { titulo: "Valeria registró su entrada a las 07:42", fecha: "Hoy, 07:42", tipo: "rfid" },
  { titulo: "Entrega de libretas — Bimestre II", fecha: "Ayer", tipo: "aviso" },
  { titulo: "Valeria registró su salida a las 15:03", fecha: "Ayer, 15:03", tipo: "rfid" },
];
