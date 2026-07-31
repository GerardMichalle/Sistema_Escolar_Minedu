import type {
  Alumno, LecturaRfid, Docente, Apoderado, Curso, Evento, Comunicado,
  Actividad, Matricula, RegistroConducta, LibroBiblioteca, ItemInventario, Usuario,
} from '../types';

export const USUARIO_DEMO: Usuario = {
  id: 'u-01',
  nombre: 'Patricia Soto',
  correo: 'patricia.soto@sanmartin.edu.pe',
  rol: 'admin',
  colegio: 'I.E.P. San Martín',
  sede: 'Sede Central',
  iniciales: 'PS',
};

export const ALUMNOS: Alumno[] = [
  { id: 'a1', codigo: 'A-2041', nombres: 'Valeria', apellidos: 'Quispe Rojas', grado: '5°', seccion: 'A', tarjetaRfid: 'RF-88213', apoderado: 'Rosa Rojas', telefonoApoderado: '987 654 321', entradaHoy: '07:42', salidaHoy: '15:03', estadoHoy: 'puntual', fechaNacimiento: '2014-07-30' },
  { id: 'a2', codigo: 'A-2042', nombres: 'Diego', apellidos: 'Fernández Luna', grado: '5°', seccion: 'A', tarjetaRfid: 'RF-88214', apoderado: 'Mario Fernández', telefonoApoderado: '912 345 678', entradaHoy: '08:14', salidaHoy: '15:05', estadoHoy: 'tardanza', fechaNacimiento: '2014-03-12' },
  { id: 'a3', codigo: 'A-2043', nombres: 'Camila', apellidos: 'Torres Vega', grado: '4°', seccion: 'B', tarjetaRfid: 'RF-88215', apoderado: 'Luz Vega', telefonoApoderado: '998 877 665', entradaHoy: '07:38', salidaHoy: '15:01', estadoHoy: 'puntual', fechaNacimiento: '2015-11-02' },
  { id: 'a4', codigo: 'A-2044', nombres: 'Mateo', apellidos: 'Huamán Ríos', grado: '3°', seccion: 'C', tarjetaRfid: 'RF-88216', apoderado: 'Julia Ríos', telefonoApoderado: '955 443 322', entradaHoy: null, salidaHoy: null, estadoHoy: 'ausente', fechaNacimiento: '2016-01-20' },
  { id: 'a5', codigo: 'A-2045', nombres: 'Luciana', apellidos: 'Paredes Cruz', grado: '5°', seccion: 'B', tarjetaRfid: 'RF-88217', apoderado: 'Ana Cruz', telefonoApoderado: '977 665 544', entradaHoy: '07:29', salidaHoy: '15:00', estadoHoy: 'puntual', fechaNacimiento: '2014-07-30' },
  { id: 'a6', codigo: 'A-2046', nombres: 'Sebastián', apellidos: 'Chávez Mori', grado: '2°', seccion: 'A', tarjetaRfid: 'RF-88218', apoderado: 'Pilar Mori', telefonoApoderado: '933 221 100', entradaHoy: '08:07', salidaHoy: '14:58', estadoHoy: 'tardanza', fechaNacimiento: '2017-09-15' },
  { id: 'a7', codigo: 'A-2047', nombres: 'Renata', apellidos: 'García Paz', grado: '1°', seccion: 'B', tarjetaRfid: 'RF-88221', apoderado: 'Carmen Paz', telefonoApoderado: '911 223 344', entradaHoy: '08:16', salidaHoy: null, estadoHoy: 'tardanza', fechaNacimiento: '2018-04-08' },
  { id: 'a8', codigo: 'A-2048', nombres: 'Joaquín', apellidos: 'Terrones Vidal', grado: '6°', seccion: 'A', tarjetaRfid: 'RF-88222', apoderado: 'Elsa Vidal', telefonoApoderado: '922 334 455', entradaHoy: '08:14', salidaHoy: null, estadoHoy: 'tardanza', fechaNacimiento: '2013-12-01' },
  { id: 'a9', codigo: 'A-2049', nombres: 'Alessia', apellidos: 'Gamboa León', grado: '4°', seccion: 'A', tarjetaRfid: 'RF-88223', apoderado: 'Hugo Gamboa', telefonoApoderado: '944 556 677', entradaHoy: '08:18', salidaHoy: null, estadoHoy: 'tardanza', fechaNacimiento: '2015-07-30' },
  { id: 'a10', codigo: 'A-2050', nombres: 'Bruno', apellidos: 'Salazar Peña', grado: '3°', seccion: 'B', tarjetaRfid: 'RF-88224', apoderado: 'Iris Peña', telefonoApoderado: '966 778 899', entradaHoy: '08:27', salidaHoy: null, estadoHoy: 'tardanza', fechaNacimiento: '2016-06-17' },
  { id: 'a11', codigo: 'A-2051', nombres: 'Fabiana', apellidos: 'Rojas Díaz', grado: '2°', seccion: 'B', tarjetaRfid: null, apoderado: 'Sonia Díaz', telefonoApoderado: '900 111 222', entradaHoy: null, salidaHoy: null, estadoHoy: 'justificado', fechaNacimiento: '2017-02-25' },
];

export const LECTURAS_INICIALES: LecturaRfid[] = [
  { id: 'l1', alumnoId: 'a10', nombre: 'Bruno Salazar', grado: '3°B', tarjeta: 'RF-88224', hora: '08:27', tipo: 'entrada', puerta: 'Puerta principal', estado: 'tardanza' },
  { id: 'l2', alumnoId: 'a9', nombre: 'Alessia Gamboa', grado: '4°A', tarjeta: 'RF-88223', hora: '08:18', tipo: 'entrada', puerta: 'Puerta principal', estado: 'tardanza' },
  { id: 'l3', alumnoId: 'a7', nombre: 'Renata García', grado: '1°B', tarjeta: 'RF-88221', hora: '08:16', tipo: 'entrada', puerta: 'Puerta principal', estado: 'tardanza' },
  { id: 'l4', alumnoId: 'a8', nombre: 'Joaquín Terrones', grado: '6°A', tarjeta: 'RF-88222', hora: '08:14', tipo: 'entrada', puerta: 'Puerta principal', estado: 'tardanza' },
  { id: 'l5', alumnoId: 'a2', nombre: 'Diego Fernández', grado: '5°A', tarjeta: 'RF-88214', hora: '08:14', tipo: 'entrada', puerta: 'Puerta principal', estado: 'tardanza' },
  { id: 'l6', alumnoId: 'a1', nombre: 'Valeria Quispe', grado: '5°A', tarjeta: 'RF-88213', hora: '07:42', tipo: 'entrada', puerta: 'Puerta principal', estado: 'puntual' },
];

export const DOCENTES: Docente[] = [
  { id: 'd1', nombres: 'Carlos', apellidos: 'Mendoza Silva', correo: 'c.mendoza@sanmartin.edu.pe', cursos: ['Matemática 5°', 'Matemática 6°'], tutoria: '5° A', estado: 'activo' },
  { id: 'd2', nombres: 'María', apellidos: 'Fernández Torres', correo: 'm.fernandez@sanmartin.edu.pe', cursos: ['Comunicación 4°', 'Comunicación 5°'], tutoria: '4° B', estado: 'activo' },
  { id: 'd3', nombres: 'Jorge', apellidos: 'Castillo Ramos', correo: 'j.castillo@sanmartin.edu.pe', cursos: ['Ciencia y Tecnología 3°'], tutoria: '3° C', estado: 'activo' },
  { id: 'd4', nombres: 'Lucía', apellidos: 'Vargas Prado', correo: 'l.vargas@sanmartin.edu.pe', cursos: ['Inglés 1°–6°'], tutoria: null, estado: 'activo' },
  { id: 'd5', nombres: 'Pedro', apellidos: 'Núñez Campos', correo: 'p.nunez@sanmartin.edu.pe', cursos: ['Educación Física'], tutoria: null, estado: 'licencia' },
];

export const APODERADOS: Apoderado[] = [
  { id: 'p1', nombres: 'Rosa', apellidos: 'Rojas Medina', dni: '42715836', telefono: '987 654 321', correo: 'rosa.rojas@gmail.com', hijos: ['A-2041'], registradoWeb: true },
  { id: 'p2', nombres: 'Mario', apellidos: 'Fernández Ruiz', dni: '40128457', telefono: '912 345 678', correo: 'mfernandez@gmail.com', hijos: ['A-2042'], registradoWeb: true },
  { id: 'p3', nombres: 'Luz', apellidos: 'Vega Salas', dni: '45632178', telefono: '998 877 665', correo: 'luzvega@hotmail.com', hijos: ['A-2043'], registradoWeb: false },
  { id: 'p4', nombres: 'Julia', apellidos: 'Ríos Chumpitaz', dni: '41893265', telefono: '955 443 322', correo: 'julia.rios@gmail.com', hijos: ['A-2044'], registradoWeb: true },
  { id: 'p5', nombres: 'Ana', apellidos: 'Cruz Ordoñez', dni: '43217654', telefono: '977 665 544', correo: 'anacruz@gmail.com', hijos: ['A-2045', 'A-2051'], registradoWeb: true },
];

export const CURSOS: Curso[] = [
  { id: 'c1', nombre: 'Matemática', nivel: 'Primaria', grado: '5°', docente: 'Carlos Mendoza', horasSemana: 6 },
  { id: 'c2', nombre: 'Comunicación', nivel: 'Primaria', grado: '5°', docente: 'María Fernández', horasSemana: 6 },
  { id: 'c3', nombre: 'Ciencia y Tecnología', nivel: 'Primaria', grado: '3°', docente: 'Jorge Castillo', horasSemana: 4 },
  { id: 'c4', nombre: 'Inglés', nivel: 'Primaria', grado: '1°–6°', docente: 'Lucía Vargas', horasSemana: 3 },
  { id: 'c5', nombre: 'Personal Social', nivel: 'Primaria', grado: '4°', docente: 'María Fernández', horasSemana: 4 },
  { id: 'c6', nombre: 'Educación Física', nivel: 'Primaria', grado: '1°–6°', docente: 'Pedro Núñez', horasSemana: 2 },
];

export const EVENTOS: Evento[] = [
  { id: 'e1', titulo: 'Actuación por Fiestas Patrias', fecha: '2026-07-31', hora: '09:00', lugar: 'Patio central', tipo: 'civico' },
  { id: 'e2', titulo: 'Reunión de apoderados · 5° grado', fecha: '2026-08-04', hora: '18:30', lugar: 'Aula 5°A', tipo: 'reunion' },
  { id: 'e3', titulo: 'Entrega de libretas · I Bimestre', fecha: '2026-08-07', hora: '08:00', lugar: 'Aulas por grado', tipo: 'academico' },
  { id: 'e4', titulo: 'Campeonato interaulas · vóley', fecha: '2026-08-12', hora: '10:00', lugar: 'Losa deportiva', tipo: 'deportivo' },
];

export const COMUNICADOS: Comunicado[] = [
  { id: 'm1', titulo: 'Horario especial por Fiestas Patrias', cuerpo: 'El día viernes 31 de julio la salida será a las 12:30 p.m. para todos los niveles…', fecha: '2026-07-29', destinatarios: 'Todos los apoderados', autor: 'Dirección', leidoPor: 412, totalDestinatarios: 486 },
  { id: 'm2', titulo: 'Campaña de vacunación escolar', cuerpo: 'En coordinación con el MINSA, el día 6 de agosto se realizará la campaña de vacunación…', fecha: '2026-07-28', destinatarios: 'Apoderados de Primaria', autor: 'Enfermería', leidoPor: 198, totalDestinatarios: 310 },
  { id: 'm3', titulo: 'Lista de útiles · II Semestre', cuerpo: 'Compartimos la lista de materiales complementarios para el segundo semestre…', fecha: '2026-07-25', destinatarios: 'Todos los apoderados', autor: 'Coordinación académica', leidoPor: 455, totalDestinatarios: 486 },
];

export const ACTIVIDAD: Actividad[] = [
  { id: 'ac1', texto: 'Bruno Salazar registró entrada', detalle: 'Puerta principal', hora: '08:27 a. m.', tipo: 'entrada' },
  { id: 'ac2', texto: 'Alessia Gamboa registró entrada', detalle: 'Puerta principal', hora: '08:18 a. m.', tipo: 'entrada' },
  { id: 'ac3', texto: 'Dirección publicó un comunicado', detalle: 'Horario especial por Fiestas Patrias', hora: '07:55 a. m.', tipo: 'comunicado' },
  { id: 'ac4', texto: 'Nueva matrícula registrada', detalle: 'Fabiana Rojas Díaz · 2° B', hora: 'Ayer, 4:12 p. m.', tipo: 'matricula' },
  { id: 'ac5', texto: 'Renata García registró salida', detalle: 'Puerta principal', hora: 'Ayer, 1:45 p. m.', tipo: 'salida' },
];

export const MATRICULAS: Matricula[] = [
  { id: 'mt1', alumno: 'Fabiana Rojas Díaz', grado: '2° B', fecha: '2026-07-29', estado: 'completa', apoderado: 'Sonia Díaz' },
  { id: 'mt2', alumno: 'Gael Ortiz Rivas', grado: '1° A', fecha: '2026-07-28', estado: 'pendiente', apoderado: 'Nadia Rivas' },
  { id: 'mt3', alumno: 'Emma Solís Bravo', grado: '3° A', fecha: '2026-07-26', estado: 'observada', apoderado: 'Raúl Solís' },
  { id: 'mt4', alumno: 'Ian Castro Luna', grado: '4° B', fecha: '2026-07-24', estado: 'completa', apoderado: 'Diana Luna' },
];

export const CONDUCTA: RegistroConducta[] = [
  { id: 'cd1', alumno: 'Diego Fernández Luna', grado: '5° A', tipo: 'demerito', categoria: 'Tardanza reiterada', descripcion: 'Tercera tardanza en la semana.', fecha: '2026-07-30', registradoPor: 'C. Mendoza' },
  { id: 'cd2', alumno: 'Valeria Quispe Rojas', grado: '5° A', tipo: 'merito', categoria: 'Representación', descripcion: 'Primer puesto en concurso de matemática UGEL.', fecha: '2026-07-28', registradoPor: 'Dirección' },
  { id: 'cd3', alumno: 'Sebastián Chávez Mori', grado: '2° A', tipo: 'demerito', categoria: 'Disciplina', descripcion: 'Interrupciones constantes en clase de Comunicación.', fecha: '2026-07-27', registradoPor: 'M. Fernández' },
];

export const BIBLIOTECA: LibroBiblioteca[] = [
  { id: 'b1', titulo: 'Paco Yunque', autor: 'César Vallejo', codigo: 'LIT-0112', categoria: 'Literatura peruana', disponibles: 6, total: 10 },
  { id: 'b2', titulo: 'Matemática razonada 5°', autor: 'Ed. Santillana', codigo: 'MAT-0234', categoria: 'Texto escolar', disponibles: 0, total: 25 },
  { id: 'b3', titulo: 'Tradiciones peruanas', autor: 'Ricardo Palma', codigo: 'LIT-0087', categoria: 'Literatura peruana', disponibles: 4, total: 8 },
  { id: 'b4', titulo: 'Atlas del Perú y del mundo', autor: 'Ed. Norma', codigo: 'GEO-0045', categoria: 'Consulta', disponibles: 12, total: 15 },
];

export const INVENTARIO: ItemInventario[] = [
  { id: 'i1', nombre: 'Proyector Epson X41', codigo: 'EQ-0021', categoria: 'Equipos', ubicacion: 'Aula 5°A', cantidad: 1, estado: 'operativo' },
  { id: 'i2', nombre: 'Laptop Lenovo V15', codigo: 'EQ-0034', categoria: 'Equipos', ubicacion: 'Sala de cómputo', cantidad: 18, estado: 'operativo' },
  { id: 'i3', nombre: 'Lector RFID · Puerta principal', codigo: 'RD-0001', categoria: 'Control de acceso', ubicacion: 'Puerta principal', cantidad: 2, estado: 'operativo' },
  { id: 'i4', nombre: 'Lector RFID · Puerta posterior', codigo: 'RD-0002', categoria: 'Control de acceso', ubicacion: 'Puerta posterior', cantidad: 2, estado: 'mantenimiento' },
  { id: 'i5', nombre: 'Carpetas unipersonales', codigo: 'MB-0110', categoria: 'Mobiliario', ubicacion: 'Almacén', cantidad: 40, estado: 'operativo' },
];

export const ASISTENCIA_SEMANA = [
  { dia: 'LUN', entradas: 512 },
  { dia: 'MAR', entradas: 498 },
  { dia: 'MIÉ', entradas: 505 },
  { dia: 'JUE', entradas: 518 },
  { dia: 'VIE', entradas: null },
  { dia: 'SÁB', entradas: null },
  { dia: 'DOM', entradas: null },
];

export const STATS_HOY = {
  presentes: 512,
  total: 560,
  tardanzas: 31,
  ausentes: 17,
  docentesActivos: 34,
  docentesTotal: 36,
  apoderadosWeb: 402,
  apoderadosTotal: 486,
  lectoresActivos: 4,
  lectoresTotal: 4,
  matriculasNuevasMes: 12,
};

/* ── Cursos gratuitos (gestionados por el Administrador) ──────────── */
import type { CursoGratuito } from '../types';

export const CURSOS_GRATUITOS: CursoGratuito[] = [
  {
    id: 'cf1',
    titulo: 'Economía y Finanzas',
    descripcion: 'Aprende a ahorrar, hacer un presupuesto y emprender desde el colegio. Material para alumnos y familias.',
    inscritos: 238,
    categorias: [
      {
        id: 'cat1',
        nombre: 'Educación financiera básica',
        recursos: [
          { id: 'r1', titulo: '¿Qué es el dinero? · Guía ilustrada', tipo: 'pdf', tamano: '2.4 MB' },
          { id: 'r2', titulo: 'El ahorro explicado en 5 minutos', tipo: 'video', duracion: '5:12' },
          { id: 'r3', titulo: 'Mi primera alcancía · lámina de actividad', tipo: 'imagen', tamano: '800 KB' },
        ],
      },
      {
        id: 'cat2',
        nombre: 'Ahorro y presupuesto',
        recursos: [
          { id: 'r4', titulo: 'Presupuesto familiar para niños', tipo: 'pdf', tamano: '1.8 MB' },
          { id: 'r5', titulo: 'Cuento: La hormiga ahorradora', tipo: 'libro', tamano: '5.1 MB' },
        ],
      },
      {
        id: 'cat3',
        nombre: 'Emprendimiento escolar',
        recursos: [
          { id: 'r6', titulo: 'Cómo crear tu primer negocio escolar', tipo: 'video', duracion: '12:40' },
          { id: 'r7', titulo: 'Plan de negocio en una sola hoja', tipo: 'pdf', tamano: '640 KB' },
        ],
      },
    ],
  },
];
