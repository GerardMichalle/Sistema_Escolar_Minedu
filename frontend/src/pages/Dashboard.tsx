import { useEffect, useState } from 'react';
import {
  Users, Clock, UserX, Presentation, ChevronDown, ChevronRight, Bell,
  CalendarDays, Megaphone, Cake, HeartHandshake,
} from 'lucide-react';
import Topbar from '../components/Topbar';
import GateTicker from '../components/GateTicker';
import { StatCard, PanelHead, Avatar, Mono, Pill, cn } from '../components/ui';
import { getStatsHoy, getAsistenciaSemana, getEventos, getComunicados, getActividad, getAlumnos } from '../services/api';
import { useAuth } from '../context/AuthContext';
import type { Evento, Comunicado, Actividad, Alumno } from '../types';

const TIPO_EVENTO: Record<Evento['tipo'], { txt: string; tone: 'brand' | 'info' | 'ok' | 'warn' }> = {
  civico: { txt: 'Cívico', tone: 'brand' },
  academico: { txt: 'Académico', tone: 'info' },
  deportivo: { txt: 'Deportivo', tone: 'ok' },
  reunion: { txt: 'Reunión', tone: 'warn' },
};

function fechaCorta(iso: string) {
  const f = new Date(iso + 'T12:00:00');
  return { dia: f.getDate(), mes: f.toLocaleDateString('es-PE', { month: 'short' }).replace('.', '').toUpperCase() };
}

export default function Dashboard() {
  const { usuario } = useAuth();
  const [stats, setStats] = useState<Awaited<ReturnType<typeof getStatsHoy>> | null>(null);
  const [semana, setSemana] = useState<Awaited<ReturnType<typeof getAsistenciaSemana>>>([]);
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [comunicados, setComunicados] = useState<Comunicado[]>([]);
  const [actividad, setActividad] = useState<Actividad[]>([]);
  const [cumples, setCumples] = useState<Alumno[]>([]);

  useEffect(() => {
    getStatsHoy().then(setStats);
    getAsistenciaSemana().then(setSemana);
    getEventos().then(setEventos);
    getComunicados().then(c => setComunicados(c.slice(0, 3)));
    getActividad().then(setActividad);
    getAlumnos().then(al => {
      const hoy = new Date();
      const md = `${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`;
      setCumples(al.filter(a => a.fechaNacimiento.slice(5) === md));
    });
  }, []);

  const saludo = new Date().getHours() < 12 ? 'Buenos días' : new Date().getHours() < 19 ? 'Buenas tardes' : 'Buenas noches';

  return (
    <>
      <Topbar title={`${saludo}, ${usuario?.nombre.split(' ')[0]}`} />
      <div className="px-4 sm:px-8 pb-10 space-y-4 max-w-[1280px]">

        <GateTicker />

        {/* ── Indicadores del día ── */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          <StatCard
            icon={<Users size={19} strokeWidth={1.7} />}
            label="Presentes hoy"
            value={String(stats?.presentes ?? '—')}
            denom={String(stats?.total ?? '')}
            note={stats ? `${((stats.presentes / stats.total) * 100).toFixed(1)}% de asistencia` : ''}
            noteTone="ok"
          />
          <StatCard
            icon={<UserX size={19} strokeWidth={1.7} />}
            label="Ausentes"
            value={String(stats?.ausentes ?? '—')}
            note="3 con inasistencia reiterada"
            noteTone="bad"
          />
          <StatCard
            icon={<Clock size={19} strokeWidth={1.7} />}
            label="Tardanzas"
            value={String(stats?.tardanzas ?? '—')}
            note="12% menos que ayer"
            noteTone="warn"
          />
          <StatCard
            icon={<Presentation size={19} strokeWidth={1.7} />}
            label="Docentes activos"
            value={String(stats?.docentesActivos ?? '—')}
            denom={String(stats?.docentesTotal ?? '')}
            note="2 con licencia"
            noteTone="neutral"
          />
        </div>

        {/* ── Semana + Próximos eventos ── */}
        <div className="grid xl:grid-cols-[1.6fr_1fr] gap-4">
          <div className="card p-6">
            <PanelHead
              title="Asistencia de la semana"
              sub="Entradas registradas por RFID"
              right={
                <button className="flex items-center gap-1.5 rounded-[10px] border border-line px-3 py-1.5 text-[12px] font-medium text-ink-2 hover:border-line-2 transition-colors cursor-pointer">
                  22 – 30 Jul. 2026 <ChevronDown size={13} />
                </button>
              }
            />
            <div className="grid grid-cols-7 mt-6">
              {semana.map((d, i) => (
                <div key={d.dia} className={cn('text-center py-2', i > 0 && 'border-l border-line')}>
                  <div className="label-mono">{d.dia}</div>
                  <div className={cn('mt-2 text-[24px] font-bold tracking-tight', d.entradas === null && 'text-ink-3 font-medium')}>
                    {d.entradas ?? '—'}
                  </div>
                  <div className="text-[10.5px] text-ink-3 mt-0.5">Entradas</div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
              <span className="text-[12px] text-ink-3">Mejor día: <b className="text-ink font-semibold">Jueves (518)</b></span>
              <Pill tone="ok">▲ 2.1% vs. semana pasada</Pill>
            </div>
          </div>

          <div className="card p-6">
            <PanelHead title="Próximos eventos" sub="Calendario institucional" right={<CalendarDays size={16} className="text-ink-3" />} />
            <div className="space-y-1">
              {eventos.map(e => {
                const f = fechaCorta(e.fecha);
                const t = TIPO_EVENTO[e.tipo];
                return (
                  <div key={e.id} className="flex items-center gap-3.5 rounded-[10px] px-2 py-2.5 -mx-2 hover:bg-canvas transition-colors cursor-pointer group">
                    <div className="w-11 shrink-0 text-center rounded-[10px] border border-line py-1.5 bg-paper">
                      <div className="text-[16px] font-bold leading-none">{f.dia}</div>
                      <div className="label-mono !text-[9px] mt-0.5">{f.mes}</div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[12.5px] font-semibold truncate">{e.titulo}</p>
                      <Mono className="!text-[10.5px]">{e.hora} · {e.lugar}</Mono>
                    </div>
                    <Pill tone={t.tone}>{t.txt}</Pill>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Comunicados + Cumpleaños + Apoderados web ── */}
        <div className="grid xl:grid-cols-3 gap-4">
          <div className="card p-6">
            <PanelHead title="Comunicados recientes" right={<Megaphone size={16} className="text-ink-3" />} />
            <div className="space-y-4">
              {comunicados.map(c => (
                <div key={c.id} className="group cursor-pointer">
                  <p className="text-[12.5px] font-semibold group-hover:text-brand transition-colors">{c.titulo}</p>
                  <div className="flex items-center justify-between mt-1">
                    <Mono className="!text-[10.5px]">{c.autor} · {fechaCorta(c.fecha).dia} {fechaCorta(c.fecha).mes}</Mono>
                    <span className="text-[11px] text-ink-3">{c.leidoPor}/{c.totalDestinatarios} leídos</span>
                  </div>
                  <div className="mt-1.5 h-1 rounded-full bg-canvas overflow-hidden">
                    <div className="h-full bg-brand/70 rounded-full" style={{ width: `${(c.leidoPor / c.totalDestinatarios) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <PanelHead title="Cumpleaños de hoy" right={<Cake size={16} className="text-ink-3" />} />
            {cumples.length === 0 ? (
              <p className="text-[12.5px] text-ink-3 py-6 text-center">Hoy nadie está de cumpleaños.</p>
            ) : (
              <div className="space-y-3">
                {cumples.map(a => (
                  <div key={a.id} className="flex items-center gap-3">
                    <Avatar nombre={`${a.nombres} ${a.apellidos}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[12.5px] font-semibold truncate">{a.nombres} {a.apellidos}</p>
                      <Mono className="!text-[10.5px]">{a.grado} "{a.seccion}" · {a.codigo}</Mono>
                    </div>
                    <button className="grid place-items-center w-8 h-8 rounded-[9px] bg-brand-soft text-brand hover:bg-brand hover:text-white transition-colors cursor-pointer" title="Enviar saludo al apoderado">
                      <Bell size={13} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="card p-6">
            <PanelHead title="Familias conectadas" sub="Apoderados con cuenta web activa" right={<HeartHandshake size={16} className="text-ink-3" />} />
            <div className="flex items-baseline gap-1.5">
              <span className="text-[30px] font-bold tracking-tight">402</span>
              <span className="text-[14px] text-ink-3 font-medium">/486</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-canvas overflow-hidden">
              <div className="h-full bg-ok rounded-full" style={{ width: '82.7%' }} />
            </div>
            <p className="mt-3 text-[12px] text-ink-2">
              <b className="font-semibold">82.7%</b> de los apoderados ya recibe avisos de entrada y salida.
            </p>
            <button className="mt-4 text-[12px] font-semibold text-brand hover:text-brand-strong transition-colors cursor-pointer">
              Invitar a los 84 restantes →
            </button>
          </div>
        </div>

        {/* ── Actividad reciente ── */}
        <div className="card p-6">
          <PanelHead title="Actividad reciente" right={<Bell size={16} className="text-ink-3" />} />
          <div>
            {actividad.map((a, i) => (
              <div key={a.id} className={cn('flex items-center gap-3.5 py-3 cursor-pointer group', i > 0 && 'border-t border-line')}>
                <Avatar nombre={a.texto} size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-[12.5px] truncate">
                    <b className="font-semibold">{a.texto.split(' ').slice(0, 2).join(' ')}</b>{' '}
                    {a.texto.split(' ').slice(2).join(' ')}
                  </p>
                  <Mono className="!text-[10.5px]">{a.detalle} · {a.hora}</Mono>
                </div>
                <ChevronRight size={15} className="text-ink-3 group-hover:text-ink group-hover:translate-x-0.5 transition-all" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
