import { useEffect, useState } from 'react';
import { Plus, FileSignature } from 'lucide-react';
import Topbar from '../../components/Topbar';
import { Table, Tr, Td, Avatar, Mono, Pill, Button, StatCard } from '../../components/ui';
import { getMatriculas } from '../../services/api';
import type { Matricula } from '../../types';

const TONO: Record<Matricula['estado'], 'ok' | 'warn' | 'bad'> = { completa: 'ok', pendiente: 'warn', observada: 'bad' };

export default function Matriculas() {
  const [items, setItems] = useState<Matricula[]>([]);
  useEffect(() => { getMatriculas().then(setItems); }, []);
  return (
    <>
      <Topbar title="Matrículas" subtitle="Periodo 2026 · Proceso extraordinario abierto" />
      <div className="px-8 pb-10 max-w-[1280px] space-y-4">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          <StatCard icon={<FileSignature size={19} strokeWidth={1.7} />} label="Matriculados 2026" value="560" note="Capacidad: 620" noteTone="ok" />
          <StatCard icon={<FileSignature size={19} strokeWidth={1.7} />} label="Nuevas este mes" value="12" note="4 más que en junio" noteTone="ok" />
          <StatCard icon={<FileSignature size={19} strokeWidth={1.7} />} label="Pendientes" value="3" note="Falta documentación" noteTone="warn" />
          <StatCard icon={<FileSignature size={19} strokeWidth={1.7} />} label="Observadas" value="1" note="Requiere revisión" noteTone="bad" />
        </div>
        <div className="flex justify-end">
          <Button><Plus size={14} /> Nueva matrícula</Button>
        </div>
        <Table head={['Alumno', 'Grado', 'Apoderado', 'Fecha', 'Estado']}>
          {items.map(m => (
            <Tr key={m.id}>
              <Td>
                <div className="flex items-center gap-3">
                  <Avatar nombre={m.alumno} size="sm" />
                  <span className="font-semibold text-[13px]">{m.alumno}</span>
                </div>
              </Td>
              <Td><Mono>{m.grado}</Mono></Td>
              <Td className="text-[13px]">{m.apoderado}</Td>
              <Td><Mono>{m.fecha}</Mono></Td>
              <Td><Pill tone={TONO[m.estado]}>{m.estado.charAt(0).toUpperCase() + m.estado.slice(1)}</Pill></Td>
            </Tr>
          ))}
        </Table>
      </div>
    </>
  );
}
