# Willay · Sistema de Gestión Escolar

Frontend en React + TypeScript + Vite + Tailwind CSS v4.
Asistencia RFID en tiempo real, gestión académica y comunicación con familias.

## Ejecutar en tu máquina

```bash
npm install
npm run dev      # abre http://localhost:5173
```

Usuario demo: cualquier correo/contraseña — elige el rol en la pantalla de login.

## Estructura

- `src/services/api.ts` — ÚNICA capa de datos. Hoy devuelve mocks; cada función
  tiene documentado su endpoint Spring Boot (TODO). Cambiar aquí = backend real
  sin tocar ninguna vista.
- `src/data/mock.ts` — datos de demostración.
- `src/components/ui.tsx` — design system (cards, badges, tablas, avatares).
- `src/index.css` — tokens de color y tipografía (@theme de Tailwind v4).
- `src/pages/**` — un archivo por módulo.

## Integración futura (Spring Boot)

- Proxy ya configurado en `vite.config.ts`: `/api` → `http://localhost:8080`.
- Lector físico → `POST /api/asistencia/lectura` → SSE `/api/asistencia/stream`
  → GateTicker y Control en vivo.
- Login → `POST /api/auth/login` (JWT).

## Roles (v1)

- **Administrador**: acceso total — usuarios, roles, configuración, cursos gratuitos (sube PDFs/videos/libros/imágenes), control en vivo, reportes.
- **Dirección**: supervisa todo (registros, vínculos padre-alumno, asistencia en vivo, reportes, comunicados) pero NO configura el sistema ni roles.
- **Docente**: solo su aula asignada — asistencia en vivo filtrada, conducta, notas y libretas, comunicados.
- **Estudiante**: portal propio con Mi Perfil (foto, QR/tarjeta RFID, racha), notas, asistencia, cursos gratuitos.
- **Padre**: todo sobre su hijo en una vista — ingreso/salida en tiempo real con fecha y hora, libreta, conducta, comunicados, cursos.

## Nota de alcance v1

Sin Finanzas, Horarios, Evaluaciones, Biblioteca ni Inventario (fuera del alcance inicial).
Cursos gratuitos incluye "Economía y Finanzas", estructura lista para más cursos.
