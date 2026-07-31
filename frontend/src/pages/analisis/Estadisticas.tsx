import Topbar from '../../components/Topbar';
import { PanelHead, Mono, Pill, cn } from '../../components/ui';

const MESES = [
  { mes: 'MAR', pct: 93 }, { mes: 'ABR', pct: 91 }, { mes: 'MAY', pct: 94 },
  { mes: 'JUN', pct: 90 }, { mes: 'JUL', pct: 92 },
];
const GRADOS = [
  { g: '1° Primaria', pct: 95 }, { g: '2° Primaria', pct: 93 }, { g: '3° Primaria', pct: 89 },
  { g: '4° Primaria', pct: 94 }, { g: '5° Primaria', pct: 92 }, { g: '6° Primaria', pct: 90 },
];

export default function Estadisticas() {
  return (
    <>
      <Topbar title="Estadísticas" subtitle="Indicadores del año escolar 2026" />
      <div className="px-4 sm:px-8 pb-10 max-w-[1280px] grid xl:grid-cols-2 gap-4">
        <div className="card p-6">
          <PanelHead title="Asistencia promedio mensual" sub="Porcentaje sobre alumnos matriculados" right={<Pill tone="ok">▲ Tendencia estable</Pill>} />
          <div className="flex items-end gap-4 h-[180px] mt-2">
            {MESES.map(m => (
              <div key={m.mes} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <Mono className="!text-[11px] font-semibold !text-ink">{m.pct}%</Mono>
                <div className="w-full max-w-[46px] rounded-t-[8px] bg-brand/80 transition-all hover:bg-brand" style={{ height: `${(m.pct - 80) * 5}%` }} />
                <span className="label-mono !text-[9.5px]">{m.mes}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card p-6">
          <PanelHead title="Asistencia por grado" sub="Julio 2026" />
          <div className="space-y-3 mt-2">
            {GRADOS.map(g => (
              <div key={g.g} className="flex items-center gap-3">
                <span className="w-[100px] text-[12px] text-ink-2 shrink-0">{g.g}</span>
                <div className="flex-1 h-2.5 rounded-full bg-canvas overflow-hidden">
                  <div className={cn('h-full rounded-full', g.pct >= 92 ? 'bg-ok' : g.pct >= 90 ? 'bg-warn' : 'bg-bad')} style={{ width: `${g.pct}%` }} />
                </div>
                <Mono className="w-10 text-right font-semibold !text-ink">{g.pct}%</Mono>
              </div>
            ))}
          </div>
          <p className="mt-5 pt-4 border-t border-line text-[12px] text-ink-2">
            3° de Primaria está <b className="font-semibold text-bad">3 puntos por debajo</b> del promedio institucional. Se recomienda contactar a los apoderados con inasistencia reiterada.
          </p>
        </div>
      </div>
    </>
  );
}
