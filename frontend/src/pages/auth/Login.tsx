import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  Wifi,
  BarChart3,
  Users,
  BookOpen,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import type { Rol } from "../../types";


const RUTAS_POR_ROL: Record<Rol, string> = {
  CEO: "/ceo/dashboard",
  ADMIN: "/admin/alumnos",
  PROFESOR: "/profesor/cursos",
  ALUMNO: "/alumno/libreta",
};

export default function Login() {
  const [rol, setRol] = useState<Rol>("ADMIN");
  const [email, setEmail] = useState("demo@sanmartin.edu.pe");
  const [password, setPassword] = useState("demo1234");
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [cargando, setCargando] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const roles: { id: Rol; label: string; icon: JSX.Element; colorInactivo: string }[] = [
    { id: "CEO", label: "Dirección", icon: <BarChart3 size={16} />, colorInactivo: "text-sky-600" },
    { id: "ADMIN", label: "Administrador", icon: <Users size={16} />, colorInactivo: "text-emerald-600" },
    { id: "PROFESOR", label: "Profesor", icon: <GraduationCap size={16} />, colorInactivo: "text-[#070635]" },
    { id: "ALUMNO", label: "Alumno / Padre", icon: <BookOpen size={16} />, colorInactivo: "text-slate-500" },
  ];

  const handleLogin = async () => {
    setCargando(true);
    await login(email, password, rol);
    navigate(RUTAS_POR_ROL[rol]);
  };

  return (
    <div className="min-h-screen bg-[#070635] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(45deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-amber-300 rounded-2xl"
            style={{
              width: 260,
              height: 160,
              top: `${(i * 23) % 90}%`,
              left: `${(i * 37) % 85}%`,
              transform: `rotate(${i * 13 - 20}deg)`,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-md relative z-10 flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl bg-[#fdc003] flex items-center justify-center shadow-lg mb-4">
          <GraduationCap className="text-[#070635]" size={28} />
        </div>
        <h1 className="text-white font-bold text-2xl text-center leading-tight">
          Universidad Privada del Norte
        </h1>
        <p className="text-indigo-300 text-sm mt-1 mb-6 text-center">
          Gestión Escolar · Asistencia RFID
        </p>

        <div className="w-full bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex justify-end mb-4">
            <span className="inline-flex items-center gap-1.5 bg-[#fdc003] text-[#070635] text-xs font-bold tracking-widest rounded-full px-3 py-1.5">
              <Wifi size={13} className="rotate-90" /> RFID · NFC
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                Ingresar como
              </label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {roles.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRol(r.id)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                      rol === r.id
                        ? "border-[#070635] bg-[#070635] text-white"
                        : `border-slate-200 text-slate-700 hover:border-slate-300 ${r.colorInactivo}`
                    }`}
                  >
                    {r.icon} {r.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                Usuario
              </label>
              <div className="relative mt-1.5">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="demo@upn.edu.pe"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#3f4191] focus:border-[#3f4191]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                Contraseña
              </label>
              <div className="relative mt-1.5">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={mostrarPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#3f4191] focus:border-[#3f4191]"
                />
                <button
                  type="button"
                  onClick={() => setMostrarPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  tabIndex={-1}
                >
                  {mostrarPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input type="checkbox" defaultChecked className="rounded" /> Recordar sesión
              </label>
              <button type="button" className="text-[#3f4191] font-medium hover:underline">
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <button
              onClick={handleLogin}
              disabled={cargando}
              className="w-full py-3 rounded-lg bg-[#070635] text-white font-semibold text-sm hover:bg-[#1e1e4b] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {cargando ? "Ingresando…" : "Iniciar sesión"}
              {!cargando && <ArrowRight size={16} />}
            </button>

            <p className="flex items-center justify-center gap-1.5 text-center text-xs text-slate-400">
              <ShieldCheck size={13} /> Conexión segura · Datos encriptados
            </p>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-white/40 space-y-1">
          <p>© 2026 Gerard Rengifo. Todos los derechos reservados.</p>
          <p>
            <button type="button" className="hover:underline">Privacidad</button>
            {" · "}
            <button type="button" className="hover:underline">Términos</button>
          </p>
        </div>
      </div>
    </div>
  );
}
