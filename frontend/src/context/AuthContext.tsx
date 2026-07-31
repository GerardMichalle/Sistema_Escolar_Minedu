import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Usuario } from '../types';

interface AuthCtx {
  usuario: Usuario | null;
  iniciar: (u: Usuario) => void;
  cerrar: () => void;
}

const Ctx = createContext<AuthCtx>({ usuario: null, iniciar: () => {}, cerrar: () => {} });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  // TODO Spring Boot: persistir JWT en memoria + refresh token httpOnly
  return (
    <Ctx.Provider value={{ usuario, iniciar: setUsuario, cerrar: () => setUsuario(null) }}>
      {children}
    </Ctx.Provider>
  );
}

export const useAuth = () => useContext(Ctx);
