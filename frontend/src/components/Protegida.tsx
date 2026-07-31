import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import type { Rol } from '../types';
import type { ReactNode } from 'react';

/** Guardia de ruta por rol. Si el rol no está permitido, vuelve al inicio.
 *  TODO Spring Boot: además de esta guardia visual, el backend valida
 *  cada endpoint con el rol del JWT (seguridad real en el servidor). */
export default function Protegida({ roles, children }: { roles: Rol[]; children: ReactNode }) {
  const { usuario } = useAuth();
  if (!usuario) return <Navigate to="/login" replace />;
  if (!roles.includes(usuario.rol)) return <Navigate to="/" replace />;
  return <>{children}</>;
}
