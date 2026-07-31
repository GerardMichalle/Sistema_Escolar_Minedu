import Topbar from '../../components/Topbar';
import { PanelHead, Mono, Pill, Avatar, cn } from '../../components/ui';

const NOTAS = [
  { curso: 'Matemática', b1: 19, b2: 18 },
  { curso: 'Comunicación', b1: 17, b2: 18 },
  { curso: 'Ciencia y Tecnología', b1: 18, b2: 19 },
  { curso: 'Personal Social', b1: 16, b2: 17 },
  { curso: 'Inglés', b1: 18, b2: 18 },
  { curso: 'Educación Física', b1: 20, b2: 20 },
];

export default function Libreta() {
  return (
    <>
      <Topbar title="Libreta virtual" subtitle="Valeria Quispe Rojas · 5° 'A' · A-2041" />
      <div className="px-8 pb-10 max-w-[900px] space-y-4">
        <div className="card p-6 flex items-center gap-4">
          <Avatar nombre="Valeria Quispe" size="lg" />
          <div className="flex-1">
            <p className="text-[15px] font-bold">Valeria Quispe Rojas</p>
            <Mono className="!text-[11px]">5° "A" · Tutor: Carlos Mendoza · Tarjeta RF-88213</Mono>
          </div>
          <div className="text-right">
            <div className="label-mono">Promedio general</div>
            <div className="text-[26px] font-bold text-ok leading-tight">18.2</div>
          </div>
        </div>
        <div className="card p-6">
          <PanelHead title="Notas por bimestre" sub="Escala vigesimal · mínima aprobatoria 13" right={<Pill tone="ok">Sin cursos en riesgo</Pill>} />
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="label-mono text-left py-2.5">Curso</th>
                <th className="label-mono text-center py-2.5">I Bim.</th>
                <th className="label-mono text-center py-2.5">II Bim.</th>
                <th className="label-mono text-center py-2.5">Tendencia</th>
              </tr>
            </thead>
            <tbody>
              {NOTAS.map(n => (
                <tr key={n.curso} className="border-t border-line">
                  <td className="py-3 text-[13px] font-medium">{n.curso}</td>
                  <td className="py-3 text-center"><Mono className="font-semibold !text-ink">{n.b1}</Mono></td>
                  <td className="py-3 text-center"><Mono className="font-semibold !text-ink">{n.b2}</Mono></td>
                  <td className={cn('py-3 text-center text-[12px] font-semibold', n.b2 >= n.b1 ? 'text-ok' : 'text-warn')}>
                    {n.b2 > n.b1 ? '▲ Mejoró' : n.b2 === n.b1 ? '— Estable' : '▼ Bajó'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card p-6">
          <PanelHead title="Asistencia del mes" sub="Julio 2026" />
          <div className="flex gap-6">
            <div><div className="label-mono">Asistió</div><div className="text-[22px] font-bold text-ok">20</div></div>
            <div><div className="label-mono">Tardanzas</div><div className="text-[22px] font-bold text-warn">1</div></div>
            <div><div className="label-mono">Faltas</div><div className="text-[22px] font-bold">0</div></div>
          </div>
        </div>
      </div>
    </>
  );
}
