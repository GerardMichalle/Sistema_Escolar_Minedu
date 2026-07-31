import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Tema = 'light' | 'dark';
const STORAGE_KEY = 'willay-theme';

function temaInicial(): Tema {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

interface ThemeCtx {
  tema: Tema;
  alternar: () => void;
}

const Ctx = createContext<ThemeCtx>({ tema: 'light', alternar: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState<Tema>(temaInicial);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', tema === 'dark');
    localStorage.setItem(STORAGE_KEY, tema);
  }, [tema]);

  const alternar = () => setTema(t => (t === 'dark' ? 'light' : 'dark'));

  return <Ctx.Provider value={{ tema, alternar }}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);
