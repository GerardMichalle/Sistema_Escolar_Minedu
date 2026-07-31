import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import Topbar from '../../components/Topbar';
import { Table, Tr, Td, Avatar, Mono, Pill, Button } from '../../components/ui';
import { getDocentes } from '../../services/api';
import type { Docente } from '../../types';

export default function Docentes() {
  const [items, setItems] = useState<Docente[]>([]);
  useEffect(() => { getDocentes().then(setItems); }, []);
  return (
    <>
      <Topbar title="Docentes" subtitle="36 en planilla · 34 activos hoy" />
      <div className="px-4 sm:px-8 pb-10 max-w-[1280px] space-y-4">
        <div className="flex justify-end">
          <Button><Plus size={14} /> Registrar docente</Button>
        </div>
        <Table head={['Docente', 'Correo', 'Cursos a cargo', 'Tutoría', 'Estado']}>
          {items.map(d => (
            <Tr key={d.id}>
              <Td>
                <div className="flex items-center gap-3">
                  <Avatar nombre={`${d.nombres} ${d.apellidos}`} size="sm" />
                  <span className="font-semibold text-[13px]">{d.nombres} {d.apellidos}</span>
                </div>
              </Td>
              <Td><span className="text-[12.5px] text-ink-2">{d.correo}</span></Td>
              <Td className="text-[12.5px]">{d.cursos.join(' · ')}</Td>
              <Td>{d.tutoria ? <Mono>{d.tutoria}</Mono> : <span className="text-ink-3 text-[12px]">—</span>}</Td>
              <Td>{d.estado === 'activo' ? <Pill tone="ok">Activo</Pill> : <Pill tone="warn">Licencia</Pill>}</Td>
            </Tr>
          ))}
        </Table>
      </div>
    </>
  );
}
