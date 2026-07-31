import Topbar from '../../components/Topbar';
import { Building2, CreditCard, BellRing, Palette } from 'lucide-react';
import { PanelHead, Mono, Pill, Button } from '../../components/ui';

export default function Configuracion() {
  return (
    <>
      <Topbar title="Configuración" subtitle="Institución, lectores y notificaciones" />
      <div className="px-8 pb-10 max-w-[900px] space-y-4">

        <div className="card p-6">
          <PanelHead title="Institución" right={<Building2 size={16} className="text-ink-3" />} />
          <div className="grid sm:grid-cols-2 gap-4 text-[13px]">
            <div><div className="label-mono mb-1">Nombre</div>I.E.P. San Martín</div>
            <div><div className="label-mono mb-1">Código modular</div><Mono>0568211</Mono></div>
            <div><div className="label-mono mb-1">Sede activa</div>Sede Central</div>
            <div><div className="label-mono mb-1">Año escolar</div><Mono>2026</Mono></div>
          </div>
          <div className="mt-4"><Button variant="ghost">Editar datos</Button></div>
        </div>

        <div className="card p-6">
          <PanelHead
            title="Lectores RFID"
            sub="Dispositivos vinculados a esta sede"
            right={<CreditCard size={16} className="text-ink-3" />}
          />
          <div className="space-y-2.5">
            {[
              { n: 'Puerta principal · Lector A', c: 'RD-0001', ok: true },
              { n: 'Puerta principal · Lector B', c: 'RD-0001B', ok: true },
              { n: 'Puerta posterior · Lector A', c: 'RD-0002', ok: false },
              { n: 'Puerta posterior · Lector B', c: 'RD-0002B', ok: true },
            ].map(l => (
              <div key={l.c} className="flex items-center justify-between rounded-[10px] border border-line px-4 py-3">
                <div>
                  <p className="text-[13px] font-semibold">{l.n}</p>
                  <Mono className="!text-[10.5px]">{l.c} · Tolerancia de tardanza: 08:00 a. m.</Mono>
                </div>
                {l.ok ? <Pill tone="ok">En línea</Pill> : <Pill tone="warn">Mantenimiento</Pill>}
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <PanelHead title="Avisos a apoderados" sub="Se envían al registrar entrada o salida" right={<BellRing size={16} className="text-ink-3" />} />
          <div className="space-y-2 text-[13px]">
            <p>Canal: <b className="font-semibold">WhatsApp</b> <Pill tone="ok">Conectado</Pill></p>
            <p className="text-ink-2 text-[12.5px]">Mensaje: "Su hijo(a) [nombre] registró [entrada/salida] a las [hora]." — <button className="font-semibold text-brand cursor-pointer">personalizar</button></p>
          </div>
        </div>

        <div className="card p-6">
          <PanelHead title="Marca del colegio" sub="Personaliza colores y logo por institución" right={<Palette size={16} className="text-ink-3" />} />
          <p className="text-[12.5px] text-ink-2">El sistema es multi-colegio: cada institución puede usar su propio logo y color institucional sin afectar a las demás.</p>
        </div>

      </div>
    </>
  );
}
