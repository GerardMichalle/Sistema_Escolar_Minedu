# Base de datos — PostgreSQL (pendiente de desarrollo)

- `scripts/database.sql` → creación de la base de datos y usuario
- `scripts/tables.sql`   → tablas del sistema (diseño multi-tenant: toda tabla clave lleva `sede_id`)
- `scripts/inserts.sql`  → datos iniciales de prueba
- `migrations/`          → migraciones versionadas (Flyway/Liquibase)
- `diagrams/`            → modelo entidad-relación

Tablas previstas: `sede`, `usuario`, `rol`, `alumno`, `tarjeta_rfid`,
`asistencia`, `curso`, `nota`, `aviso`, `apoderado`.
Contraseñas: hash BCrypt (nunca texto plano).
