# Sistema Integral de Gestión Escolar — RFID/NFC + Libreta Virtual

Sistema web para colegios que automatiza el control de asistencia mediante
tarjetas RFID/NFC o carnets QR, con libreta virtual, reportes exportables,
alertas a padres y acceso por roles (Dirección, Administrador, Profesor,
Alumno/Padre). Diseñado multi-sede desde el inicio para escalar a varios
colegios.

## Estructura del proyecto

| Módulo | Tecnología | Estado |
|---|---|---|
| `frontend/` | React + TypeScript + Vite + Tailwind | ✅ Desarrollado (con datos simulados) |
| `backend/` | Java Spring Boot | 🔜 Estructura preparada, pendiente |
| `database/` | PostgreSQL | 🔜 Estructura preparada, pendiente |
| `docs/` | Documentación del proyecto | En progreso |
| `docker/` | Orquestación de servicios | Preparado |

## Frontend — cómo ejecutar

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
npm run build    # build de producción
```

El login es demostrativo: elige un rol y entra con cualquier credencial.
Toda la data es simulada (`src/utils/mockData.ts`). La capa de servicios
(`src/services/api.ts`) ya está preparada para conectarse al backend
Spring Boot en `http://localhost:8080/api` a través del proxy de Vite —
cuando el backend exista, solo se reemplaza el cuerpo de cada función.

## Roles y rutas

| Rol | Ruta inicial | Funciones |
|---|---|---|
| CEO / Dirección | `/ceo/dashboard` | Estadísticas globales, sedes, reportes |
| Administrador | `/admin/alumnos` | Alumnos, tarjetas RFID, asistencia en vivo, reportes |
| Profesor | `/profesor/cursos` | Cursos, notas, asistencia (mobile-first) |
| Alumno / Padre | `/alumno/libreta` | Libreta virtual, historial, reportes, avisos |

## Próximos módulos

1. **Backend (Spring Boot):** API REST, JWT, endpoint receptor de lecturas RFID, generación de PDF/Excel, alertas a padres.
2. **Base de datos (PostgreSQL):** esquema multi-tenant (columna `sede_id`/`colegio_id` en tablas clave), contraseñas con BCrypt.
3. **Docker:** levantar frontend + backend + PostgreSQL con `docker compose up`.
