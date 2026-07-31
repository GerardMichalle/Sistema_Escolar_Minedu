import { useEffect, useState } from 'react';
import { Plus, Megaphone } from 'lucide-react';
import Topbar from '../../components/Topbar';
import { Mono, Button, cn } from '../../components/ui';
import { getComunicados } from '../../services/api';
import type { Comunicado } from '../../types';

export default function Comunicados() {
  const [items, setItems] = useState<Comunicado[]>([]);
  useEffect(() => { getComunicados().then(setItems); }, []);
  return (
    <>
      <Topbar title="Comunicados" subtitle="Avisos oficiales enviados a las familias" />
      <div className="px-4 sm:px-8 pb-10 max-w-[900px] space-y-4">
        <div className="flex justify-end">
          <Button><Plus size={14} /> Redactar comunicado</Button>
        </div>
        {items.map(c => {
          const pct = Math.round((c.leidoPor / c.totalDestinatarios) * 100);
          return (
            <article key={c.id} className="card p-6 hover:shadow-[0_4px_16px_rgba(0,0,0,.05)] transition-all cursor-pointer group">
              <div className="flex items-start gap-4">
                <span className="grid place-items-center w-10 h-10 rounded-[10px] bg-brand-soft text-brand shrink-0"><Megaphone size={17} /></span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-bold tracking-tight group-hover:text-brand transition-colors">{c.titulo}</h3>
                  <p className="text-[12.5px] text-ink-2 mt-1 line-clamp-2">{c.cuerpo}</p>
                  <div className="flex items-center gap-3 mt-3 flex-wrap">
                    <Mono className="!text-[10.5px]">{c.autor} · {c.fecha} · {c.destinatarios}</Mono>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex-1 h-1.5 rounded-full bg-canvas overflow-hidden">
                      <div className={cn('h-full rounded-full', pct > 80 ? 'bg-ok' : 'bg-warn')} style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-[11.5px] text-ink-2 font-medium shrink-0">{c.leidoPor}/{c.totalDestinatarios} leídos ({pct}%)</span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
