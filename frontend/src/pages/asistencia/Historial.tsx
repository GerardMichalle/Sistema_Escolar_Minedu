import { useEffect, useState } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import Topbar from '../../components/Topbar';
import { Table, Tr, Td, Avatar, EstadoBadge, Mono, Button, FilterTabs } from '../../components/ui';
import { getAlumnos } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import type { Alumno } from '../../types';

export default function Historial() {
  const { usuario } = useAuth();
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);
  const [tab, setTab] = useState('Hoy');
  useEffect(() => {
    getAlumnos().then(todos => {
      // Cada rol ve solo lo suyo. TODO Spring Boot: el backend filtra por JWT.
      let lista = todos;
      if (usuario?.rol === 'alumno') lista = todos.filter(a => a.codigo === usuario.codigoAlumno);
      if (usuario?.rol === 'apoderado') lista = todos.filter(a => a.codigo === usuario.hijoCodigo);
      if (usuario?.rol === 'profesor') lista = todos.filter(a => a.grado === '5°' && a.seccion === 'A');
      setAlumnos(lista);
    });
  }, [usuario]);

  return (
    <>
      <Topbar
        title={usuario?.rol === 'alumno' ? 'Mi asistencia' : usuario?.rol === 'apoderado' ? 'Asistencia de Valeria' : 'Historial de asistencia'}
        subtitle={usuario?.rol === 'profesor' ? 'Registros de tu aula · 5° A' : 'Registros con fecha, hora de entrada y salida'}
      />
      <div className="px-4 sm:px-8 pb-10 max-w-[1280px] space-y-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <FilterTabs tabs={['Hoy', 'Esta semana', 'Este mes', 'Bimestre']} active={tab} onChange={setTab} />
          <div className="flex gap-2">
            <Button variant="ghost">Todos los grados <ChevronDown size={13} /></Button>
            <Button variant="ghost"><Download size={14} /> Exportar</Button>
          </div>
        </div>
        <Table head={['Alumno', 'Grado', 'Fecha', 'Entrada', 'Salida', 'Estado']}>
          {alumnos.map(a => (
            <Tr key={a.id}>
              <Td>
                <div className="flex items-center gap-3">
                  <Avatar nombre={`${a.nombres} ${a.apellidos}`} size="sm" />
                  <span className="font-semibold text-[13px]">{a.nombres} {a.apellidos}</span>
                </div>
              </Td>
              <Td><Mono>{a.grado} "{a.seccion}"</Mono></Td>
              <Td><Mono>30 JUL 2026</Mono></Td>
              <Td><Mono className="font-semibold !text-ink">{a.entradaHoy ?? '—'}</Mono></Td>
              <Td><Mono className="font-semibold !text-ink">{a.salidaHoy ?? '—'}</Mono></Td>
              <Td><EstadoBadge estado={a.estadoHoy} /></Td>
            </Tr>
          ))}
        </Table>
      </div>
    </>
  );
}
