# Backend — Java Spring Boot (pendiente de desarrollo)

Estructura preparada para la futura API REST:

```
src/main/java/com/colegio/sistema/
├── controller/   → Endpoints REST (AuthController, AlumnoController, AsistenciaController…)
├── service/      → Lógica de negocio (registro de entrada/salida, cálculo de estados, alertas)
├── repository/   → Interfaces JPA hacia PostgreSQL
├── model/        → Entidades (Alumno, Tarjeta, Asistencia, Usuario, Sede…)
├── dto/          → Objetos de transferencia (requests/responses)
├── security/     → JWT, filtros, BCrypt, roles (CEO, ADMIN, PROFESOR, ALUMNO)
└── config/       → CORS, Swagger, configuración general
```

Endpoints previstos (contrato que el frontend ya espera en `services/api.ts`):

- `POST /api/auth/login` → token JWT + datos del usuario
- `GET  /api/alumnos` → lista de alumnos de la sede
- `POST /api/asistencia/lectura` → **receptor de eventos del lector RFID**
- `GET  /api/asistencia/alumno/{codigo}` → historial de un alumno
- `GET  /api/notas/alumno/{codigo}` → calificaciones
- `GET  /api/reportes/...` → exportación PDF/Excel

Puerto previsto: `8080` (el proxy de Vite ya apunta aquí).
