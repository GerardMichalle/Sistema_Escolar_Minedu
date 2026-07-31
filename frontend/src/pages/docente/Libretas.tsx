import { useEffect, useState } from 'react';
import { Upload, Send, FileText } from 'lucide-react';
import Topbar from '../../components/Topbar';
import { Table, Tr, Td, Avatar, Mono, Pill, Button, PanelHead } from '../../components/ui';
import { getAlumnos } from '../../services/api';
import type { Alumno } from '../../types';

/** Subida de notas y libretas del docente (solo su aula).
 *  TODO Spring Boot: POST /api/libretas (multipart PDF) + PUT /api/libretas/{id}/publicar
 *  Al publicar, la libreta aparece automáticamente en el portal del alumno y del apoderado. */
export default function Libretas() {
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);
  useEffect(() => {
    getAlumnos().then(a => setAlumnos(a.filter(x => x.grado === '5°' && x.seccion === 'A')));
  }, []);

  return (
    <>
      <Topbar title="Notas y libretas" subtitle="5° 'A' · II Bimestre 2026" />
      <div className="px-4 sm:px-8 pb-10 max-w-[1100px] space-y-4">
        <div className="card p-5 flex items-center gap-4 bg-brand-faint border-brand-soft">
          <span className="grid place-items-center w-10 h-10 rounded-[10px] bg-brand-soft text-brand shrink-0"><FileText size={17} /></span>
          <p className="text-[12.5px] text-ink-2 flex-1">
            Al <b className="font-semibold text-ink">publicar</b> una libreta, el alumno y su apoderado la ven al instante en su portal. Los borradores solo los ves tú.
          </p>
          <Button><Upload size={14} /> Subir libretas (PDF)</Button>
        </div>

        <div>
          <PanelHead title="Estado por estudiante" />
          <Table head={['Estudiante', 'Promedio II Bim.', 'Libreta', 'Acción']}>
            {alumnos.map((a, i) => (
              <Tr key={a.id}>
                <Td>
                  <div className="flex items-center gap-3">
                    <Avatar nombre={`${a.nombres} ${a.apellidos}`} size="sm" />
                    <span className="font-semibold text-[13px]">{a.nombres} {a.apellidos}</span>
                  </div>
                </Td>
                <Td><Mono className="font-semibold !text-ink !text-[13px]">{i === 0 ? '18.2' : '14.6'}</Mono></Td>
                <Td>{i === 0 ? <Pill tone="ok">Publicada · 25 JUL</Pill> : <Pill tone="warn">Borrador</Pill>}</Td>
                <Td>
                  {i === 0
                    ? <button className="text-[12px] font-semibold text-ink-2 hover:text-ink cursor-pointer">Ver PDF</button>
                    : <button className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand hover:text-brand-strong cursor-pointer"><Send size={12} /> Publicar</button>}
                </Td>
              </Tr>
            ))}
          </Table>
        </div>
      </div>
    </>
  );
}
