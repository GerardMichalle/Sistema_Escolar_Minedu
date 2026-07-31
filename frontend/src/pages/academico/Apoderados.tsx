import { useEffect, useState } from 'react';
import { Plus, Send } from 'lucide-react';
import Topbar from '../../components/Topbar';
import { Table, Tr, Td, Avatar, Mono, Pill, Button } from '../../components/ui';
import { getApoderados } from '../../services/api';
import type { Apoderado } from '../../types';

export default function Apoderados() {
  const [items, setItems] = useState<Apoderado[]>([]);
  useEffect(() => { getApoderados().then(setItems); }, []);
  return (
    <>
      <Topbar title="Apoderados" subtitle="486 familias · 402 con cuenta web activa" />
      <div className="px-4 sm:px-8 pb-10 max-w-[1280px] space-y-4">
        <div className="flex justify-end gap-2">
          <Button variant="ghost"><Send size={14} /> Invitar pendientes</Button>
          <Button><Plus size={14} /> Registrar apoderado</Button>
        </div>
        <Table head={['Apoderado', 'DNI', 'Contacto', 'Hijos', 'Cuenta web']}>
          {items.map(p => (
            <Tr key={p.id}>
              <Td>
                <div className="flex items-center gap-3">
                  <Avatar nombre={`${p.nombres} ${p.apellidos}`} size="sm" />
                  <span className="font-semibold text-[13px]">{p.nombres} {p.apellidos}</span>
                </div>
              </Td>
              <Td><Mono>{p.dni}</Mono></Td>
              <Td>
                <div className="leading-tight">
                  <Mono className="block">{p.telefono}</Mono>
                  <span className="text-[11.5px] text-ink-3">{p.correo}</span>
                </div>
              </Td>
              <Td><Mono>{p.hijos.join(', ')}</Mono></Td>
              <Td>{p.registradoWeb ? <Pill tone="ok">Activa</Pill> : <Pill tone="warn">Sin registrar</Pill>}</Td>
            </Tr>
          ))}
        </Table>
      </div>
    </>
  );
}
