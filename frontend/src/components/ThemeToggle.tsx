import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

/** Alterna claro/oscuro. La preferencia se guarda en localStorage
 *  y se aplica antes del render (ver main.tsx) para evitar parpadeo. */
export default function ThemeToggle() {
  const [oscuro, setOscuro] = useState(() => document.documentElement.classList.contains('dark'));
  function alternar() {
    const activado = document.documentElement.classList.toggle('dark');
    localStorage.setItem('willay-tema', activado ? 'oscuro' : 'claro');
    setOscuro(activado);
  }
  return (
    <button
      onClick={alternar}
      className="grid place-items-center w-10 h-10 rounded-[10px] border border-line bg-paper text-ink-2 hover:text-ink transition-colors cursor-pointer"
      aria-label={oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={oscuro ? 'Modo claro' : 'Modo oscuro'}
    >
      {oscuro ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
