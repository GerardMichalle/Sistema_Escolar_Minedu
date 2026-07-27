import { createContext, useContext, useState, type ReactNode } from "react";
import type { Usuario, Rol } from "../types";
import * as api from "../services/api";

interface AuthContextType {
  usuario: Usuario | null;
  login: (email: string, password: string, rol: Rol) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const login = async (email: string, password: string, rol: Rol) => {
    const user = await api.login(email, password, rol);
    setUsuario(user);
    // TODO backend: guardar el token JWT → localStorage.setItem("token", res.token)
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("token");
  };

  return <AuthContext.Provider value={{ usuario, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  return ctx;
}
