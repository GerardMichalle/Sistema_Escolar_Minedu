import { Link } from 'react-router-dom';
import { ArrowRight, LogIn, CalendarDays, Megaphone, BookOpen, Award, Sparkles } from 'lucide-react';
import Topbar from '../../components/Topbar';
import { PanelHead, Mono, Pill, Avatar, cn } from '../../components/ui';

const REGISTROS = [
  { fecha: 'Jue 30 Jul', entrada: '07:42', salida: '15:03', estado: 'Puntual', ok: true },
  { fecha: 'Mié 29 Jul', entrada: '07:38', salida: '15:01', estado: 'Puntual', ok: true },
  { fecha: 'Mar 28 Jul', entrada: '08:05', salida: '15:00', estado: 'Tardanza', ok: false },
  { fecha: 'Lun 27 Jul', entrada: '07:45', salida: '15:02', estado: 'Puntual', ok: true },
];

export default function InicioPadre() {
  return (
    <>
      <Topbar title="Buenos días, Rosa" subtitle="Resumen de Valeria · 5° 'A'" />
      <div className="px-8 pb-10 max-w-[1100px] space-y-4">

        {/* Estado ahora: lo primero que un padre quiere saber */}
        <div className="card p-6 flex flex-wrap items-center gap-5">
          <span className="relative">
            <Avatar nombre="Valeria Quispe" size="lg" />
            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-ok border-[3px] border-paper" />
          </span>
          <div className="flex-1 min-w-[220px]">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-[17px] font-bold tracking-tight">Valeria está en el colegio</h2>
              <Pill tone="ok"><LogIn size={11} /> Ingresó a las 07:42</Pill>
            </div>
            <Mono className="!text-[11px] mt-1 block">HOY · PUERTA PRINCIPAL · TARJETA RF-88213</Mono>
          </div>
          <div className="flex gap-7">
            <div className="text-center"><div className="label-mono">Asistencias</div><div className="text-[22px] font-bold text-ok">20</div></div>
            <div className="text-center"><div className="label-mono">Tardanzas</div><div className="text-[22px] font-bold text-warn">1</div></div>
            <div className="text-center"><div className="label-mono">Faltas</div><div className="text-[22px] font-bold">0</div></div>
          </div>
        </div>

        <div className="grid xl:grid-cols-[1.5fr_1fr] gap-4">
          {/* Últimos registros con fecha y hora */}
          <div className="card p-6">
            <PanelHead
              title="Entradas y salidas recientes"
              sub="Registro automático del lector RFID"
              right={<Link to="/asistencia/historial" className="text-[12px] font-semibold text-brand hover:text-brand-strong transition-colors">Ver todo</Link>}
            />
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="label-mono text-left py-2">Fecha</th>
                  <th className="label-mono text-left py-2">Entrada</th>
                  <th className="label-mono text-left py-2">Salida</th>
                  <th className="label-mono text-left py-2">Estado</th>
                </tr>
              </thead>
              <tbody>
                {REGISTROS.map(r => (
                  <tr key={r.fecha} className="border-t border-line">
                    <td className="py-2.5 text-[13px] font-medium">{r.fecha}</td>
                    <td className="py-2.5"><Mono className="font-semibold !text-ink">{r.entrada}</Mono></td>
                    <td className="py-2.5"><Mono className="font-semibold !text-ink">{r.salida}</Mono></td>
                    <td className="py-2.5">
                      <span className={cn('text-[11.5px] font-semibold', r.ok ? 'text-ok' : 'text-warn')}>{r.estado}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <div className="card p-6">
              <PanelHead title="Libreta de notas" right={<BookOpen size={16} className="text-ink-3" />} />
              <div className="flex items-baseline gap-1.5">
                <span className="text-[26px] font-bold tracking-tight text-ok">18.2</span>
                <span className="text-[12.5px] text-ink-3">promedio · II Bim.</span>
              </div>
              <p className="text-[12px] text-ink-2 mt-1.5">Publicada por el tutor el 25 de julio.</p>
              <Link to="/libreta" className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand hover:text-brand-strong transition-colors">
                Ver libreta completa <ArrowRight size={13} />
              </Link>
            </div>
            <div className="card p-6">
              <PanelHead title="Conducta" right={<Award size={16} className="text-ink-3" />} />
              <p className="text-[12.5px]"><b className="font-semibold text-ok">Mérito:</b> primer puesto en concurso de matemática UGEL.</p>
              <Mono className="!text-[10.5px] mt-1 block">28 JUL · DIRECCIÓN</Mono>
            </div>
          </div>
        </div>

        <div className="grid xl:grid-cols-2 gap-4">
          <div className="card p-6">
            <PanelHead title="Comunicados" right={<Megaphone size={16} className="text-ink-3" />} />
            <div className="space-y-3">
              {[
                { t: 'Horario especial por Fiestas Patrias', m: 'Dirección · 29 JUL · salida 12:30 p. m.' },
                { t: 'Campaña de vacunación escolar', m: 'Enfermería · 28 JUL' },
              ].map(c => (
                <div key={c.t} className="flex items-center justify-between gap-3 group cursor-pointer">
                  <div>
                    <p className="text-[13px] font-semibold group-hover:text-brand transition-colors">{c.t}</p>
                    <Mono className="!text-[10.5px]">{c.m}</Mono>
                  </div>
                  <ArrowRight size={14} className="text-ink-3 group-hover:text-brand transition-all group-hover:translate-x-0.5" />
                </div>
              ))}
            </div>
          </div>
          <div className="card p-6 flex items-center gap-4">
            <span className="grid place-items-center w-11 h-11 rounded-[12px] bg-brand-soft text-brand shrink-0"><Sparkles size={19} /></span>
            <div className="flex-1">
              <p className="text-[13.5px] font-bold">Cursos gratuitos para la familia</p>
              <p className="text-[12px] text-ink-2 mt-0.5">Economía y Finanzas: aprendan juntos a ahorrar y presupuestar.</p>
            </div>
            <Link to="/cursos" className="shrink-0 text-[12px] font-semibold text-brand hover:text-brand-strong transition-colors">Explorar →</Link>
          </div>
        </div>

        <p className="flex items-center gap-1.5 text-[11.5px] text-ink-3">
          <CalendarDays size={12} /> Mañana: Actuación por Fiestas Patrias · salida especial 12:30 p. m.
        </p>
      </div>
    </>
  );
}
