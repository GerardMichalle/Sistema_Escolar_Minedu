import { useEffect, useState } from 'react';
import { Download, Plus, CreditCard, ArrowRight } from 'lucide-react';
import Topbar from '../../components/Topbar';
import { Table, Tr, Td, Avatar, EstadoBadge, Mono, FilterTabs, Button } from '../../components/ui';
import { getAlumnos } from '../../services/api';
import type { Alumno } from '../../types';

const TABS = ['Todos', 'Puntuales', 'Tardanzas', 'Ausentes', 'Sin tarjeta'];

export default function Alumnos() {
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);
  const [tab, setTab] = useState('Todos');

  useEffect(() => { getAlumnos().then(setAlumnos); }, []);

  const filtrados = alumnos.filter(a => {
    if (tab === 'Puntuales') return a.estadoHoy === 'puntual';
    if (tab === 'Tardanzas') return a.estadoHoy === 'tardanza';
    if (tab === 'Ausentes') return a.estadoHoy === 'ausente';
    if (tab === 'Sin tarjeta') return !a.tarjetaRfid;
    return true;
  });

  return (
    <>
      <Topbar title="Alumnos" subtitle={`${alumnos.length ? '560 registrados · 542 tarjetas vinculadas' : 'Cargando…'}`} />
      <div className="px-4 sm:px-8 pb-10 max-w-[1280px] space-y-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <FilterTabs tabs={TABS} active={tab} onChange={setTab} />
          <div className="flex gap-2">
            <Button variant="ghost"><Download size={14} /> Exportar</Button>
            <Button><Plus size={14} /> Registrar alumno</Button>
          </div>
        </div>

        <Table head={['Alumno', 'Código', 'Grado', 'Tarjeta RFID', 'Entrada / salida', 'Estado hoy']}>
          {filtrados.map(a => (
            <Tr key={a.id}>
              <Td>
                <div className="flex items-center gap-3">
                  <Avatar nombre={`${a.nombres} ${a.apellidos}`} />
                  <div className="leading-tight">
                    <p className="font-semibold text-[13px]">{a.nombres} {a.apellidos}</p>
                    <Mono className="!text-[10.5px]">Apod. {a.apoderado} · {a.telefonoApoderado}</Mono>
                  </div>
                </div>
              </Td>
              <Td><Mono>{a.codigo}</Mono></Td>
              <Td><Mono>{a.grado} "{a.seccion}"</Mono></Td>
              <Td>
                {a.tarjetaRfid ? (
                  <span className="inline-flex items-center gap-1.5 rounded-[8px] border border-line bg-canvas px-2.5 py-1">
                    <CreditCard size={12} className="text-ink-3" />
                    <Mono className="!text-[11px]">{a.tarjetaRfid}</Mono>
                  </span>
                ) : (
                  <button className="text-[11.5px] font-semibold text-brand hover:text-brand-strong cursor-pointer">+ Vincular tarjeta</button>
                )}
              </Td>
              <Td>
                {a.entradaHoy ? (
                  <span className="inline-flex items-center gap-1.5">
                    <Mono className="font-semibold !text-ink">{a.entradaHoy}</Mono>
                    <ArrowRight size={11} className="text-ink-3" />
                    <Mono className="font-semibold !text-ink">{a.salidaHoy ?? '—'}</Mono>
                  </span>
                ) : (
                  <Mono className="!text-ink-3">— sin registro —</Mono>
                )}
              </Td>
              <Td><EstadoBadge estado={a.estadoHoy} /></Td>
            </Tr>
          ))}
        </Table>
      </div>
    </>
  );
}
