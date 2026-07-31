import { useEffect, useState } from 'react';
import { Plus, ThumbsUp, ThumbsDown } from 'lucide-react';
import Topbar from '../../components/Topbar';
import { Avatar, Mono, Pill, Button, PanelHead, cn } from '../../components/ui';
import { getConducta } from '../../services/api';
import type { RegistroConducta } from '../../types';

export default function Conducta() {
  const [items, setItems] = useState<RegistroConducta[]>([]);
  useEffect(() => { getConducta().then(setItems); }, []);
  return (
    <>
      <Topbar title="Conducta" subtitle="Méritos y deméritos · comunicados al apoderado" />
      <div className="px-4 sm:px-8 pb-10 max-w-[900px] space-y-4">
        <div className="flex justify-end">
          <Button><Plus size={14} /> Nuevo registro</Button>
        </div>
        <div className="card p-6">
          <PanelHead title="Registros recientes" sub="Últimos 7 días" />
          {items.map((r, i) => (
            <div key={r.id} className={cn('flex gap-3.5 py-4', i > 0 && 'border-t border-line')}>
              <span className={cn('grid place-items-center w-9 h-9 rounded-full shrink-0', r.tipo === 'merito' ? 'bg-ok-soft text-ok' : 'bg-bad-soft text-bad')}>
                {r.tipo === 'merito' ? <ThumbsUp size={15} /> : <ThumbsDown size={15} />}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-[13px]">{r.alumno}</span>
                  <Mono className="!text-[10.5px]">{r.grado}</Mono>
                  <Pill tone={r.tipo === 'merito' ? 'ok' : 'bad'}>{r.categoria}</Pill>
                </div>
                <p className="text-[12.5px] text-ink-2 mt-1">{r.descripcion}</p>
                <Mono className="!text-[10.5px] mt-1 block">{r.fecha} · Registró: {r.registradoPor}</Mono>
              </div>
              <Avatar nombre={r.alumno} size="sm" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
