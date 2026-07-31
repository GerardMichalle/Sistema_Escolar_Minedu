import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CalendarDays, Megaphone, Flame, BookOpen, IdCard } from 'lucide-react';
import Topbar from '../../components/Topbar';
import { PanelHead, Mono, Pill } from '../../components/ui';

export default function InicioAlumno() {
  return (
    <>
      <Topbar title="¡Hola, Valeria!" subtitle="Este es tu espacio en Willay" />
      <div className="px-4 sm:px-8 pb-10 max-w-[1100px] space-y-4">

        {/* Hero joven */}
        <div className="card overflow-hidden">
          <div className="bg-gradient-to-r from-brand to-[#F2683C] text-white px-7 py-6 relative">
            <div className="absolute inset-0 opacity-[.12]" style={{ backgroundImage: 'radial-gradient(circle at 15% 40%, #fff 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }} />
            <div className="relative flex flex-wrap items-center gap-5 justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">Racha de asistencia</div>
                <div className="flex items-center gap-2 mt-1">
                  <Flame size={22} />
                  <span className="text-[30px] font-bold leading-none">12 días seguidos</span>
                </div>
                <p className="text-[12.5px] text-white/85 mt-2">¡Sigue así! Mañana llegas a 13 y superas tu récord del bimestre.</p>
              </div>
              <Link to="/mi-perfil" className="flex items-center gap-2 bg-white text-brand rounded-[10px] px-4 py-2.5 text-[13px] font-semibold hover:bg-brand-faint transition-colors">
                <IdCard size={15} /> Ver mi tarjeta y QR
              </Link>
            </div>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 gap-4">
          <div className="card p-6">
            <PanelHead title="Mis notas" right={<BookOpen size={16} className="text-ink-3" />} />
            <div className="flex items-baseline gap-1.5">
              <span className="text-[30px] font-bold tracking-tight text-ok">18.2</span>
              <span className="text-[13px] text-ink-3">promedio general</span>
            </div>
            <p className="text-[12px] text-ink-2 mt-2">Tu mejor curso: <b className="font-semibold">Ed. Física (20)</b></p>
            <Link to="/libreta" className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand hover:text-brand-strong transition-colors">
              Ver todas mis notas <ArrowRight size={13} />
            </Link>
          </div>

          <div className="card p-6">
            <PanelHead title="Cursos gratuitos" right={<Sparkles size={16} className="text-ink-3" />} />
            <p className="text-[13px] font-semibold">Economía y Finanzas</p>
            <p className="text-[12px] text-ink-2 mt-1">Aprende a ahorrar y hacer crecer tus propinas.</p>
            <div className="mt-3 h-1.5 rounded-full bg-canvas overflow-hidden">
              <div className="h-full bg-brand rounded-full" style={{ width: '35%' }} />
            </div>
            <p className="text-[11px] text-ink-3 mt-1.5">3 de 7 recursos completados</p>
            <Link to="/cursos" className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand hover:text-brand-strong transition-colors">
              Continuar <ArrowRight size={13} />
            </Link>
          </div>

          <div className="card p-6">
            <PanelHead title="Próximo evento" right={<CalendarDays size={16} className="text-ink-3" />} />
            <div className="flex items-center gap-3.5">
              <div className="w-12 text-center rounded-[10px] border border-line py-2 bg-paper">
                <div className="text-[18px] font-bold leading-none">31</div>
                <div className="label-mono !text-[9px] mt-0.5">JUL</div>
              </div>
              <div>
                <p className="text-[13px] font-semibold">Actuación por Fiestas Patrias</p>
                <Mono className="!text-[10.5px]">09:00 · Patio central</Mono>
              </div>
            </div>
            <Pill tone="brand">Salida especial: 12:30 p. m.</Pill>
          </div>
        </div>

        <div className="card p-6">
          <PanelHead title="Comunicados para ti" right={<Megaphone size={16} className="text-ink-3" />} />
          <div className="space-y-3">
            {[
              { t: 'Horario especial por Fiestas Patrias', m: 'Dirección · 29 JUL' },
              { t: 'Lista de útiles · II Semestre', m: 'Coordinación académica · 25 JUL' },
            ].map(c => (
              <div key={c.t} className="flex items-center justify-between gap-3 group cursor-pointer">
                <div>
                  <p className="text-[13px] font-semibold group-hover:text-brand transition-colors">{c.t}</p>
                  <Mono className="!text-[10.5px]">{c.m}</Mono>
                </div>
                <ArrowRight size={14} className="text-ink-3 group-hover:text-brand group-hover:translate-x-0.5 transition-all" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
