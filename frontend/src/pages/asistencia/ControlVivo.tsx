import { useEffect, useState } from 'react';
import { Radio, DoorOpen, LogIn, LogOut } from 'lucide-react';
import Topbar from '../../components/Topbar';
import { Avatar, Mono, EstadoBadge, PanelHead, Pill, cn } from '../../components/ui';
import { getLecturasHoy } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import type { LecturaRfid } from '../../types';

const SIM: Omit<LecturaRfid, 'id' | 'hora'>[] = [
  { alumnoId: 'a1', nombre: 'Valeria Quispe Rojas', grado: '5°A', tarjeta: 'RF-88213', tipo: 'entrada', puerta: 'Puerta principal', estado: 'puntual' },
  { alumnoId: 'a2', nombre: 'Diego Fernández Luna', grado: '5°A', tarjeta: 'RF-88214', tipo: 'salida', puerta: 'Puerta principal', estado: 'tardanza' },
  { alumnoId: 'a3', nombre: 'Camila Torres Vega', grado: '4°B', tarjeta: 'RF-88215', tipo: 'entrada', puerta: 'Puerta posterior', estado: 'puntual' },
  { alumnoId: 'a6', nombre: 'Sebastián Chávez Mori', grado: '2°A', tarjeta: 'RF-88218', tipo: 'salida', puerta: 'Puerta principal', estado: 'tardanza' },
];

/**
 * TODO Spring Boot: este feed se conecta al lector físico vía
 * SSE /api/asistencia/stream. El lector envía POST /api/asistencia/lectura
 * y el backend re-emite el evento aquí en tiempo real.
 */
export default function ControlVivo() {
  const { usuario } = useAuth();
  const esProfesor = usuario?.rol === 'profesor';
  const [lecturas, setLecturas] = useState<LecturaRfid[]>([]);
  const [ultima, setUltima] = useState<LecturaRfid | null>(null);

  useEffect(() => {
    getLecturasHoy().then(todas => {
      // El docente SOLO ve su aula. TODO Spring Boot: el backend ya envía filtrado.
      const l = esProfesor ? todas.filter(x => x.grado === '5°A') : todas;
      setLecturas(l); setUltima(l[0] ?? null);
    });
    let i = 0;
    const t = setInterval(() => {
      const pool = esProfesor ? SIM.filter(s => s.grado === '5°A') : SIM;
      const base = pool[i % pool.length]; i++;
      const nueva: LecturaRfid = {
        ...base,
        id: `live-${Date.now()}`,
        hora: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
      };
      setUltima(nueva);
      setLecturas(prev => [nueva, ...prev].slice(0, 30));
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <Topbar
        title={esProfesor ? 'Asistencia en vivo · 5° A' : 'Control en vivo'}
        subtitle={esProfesor ? 'Solo se muestran los estudiantes de tu aula' : 'Lecturas RFID de todas las puertas · conectado'}
      />
      <div className="px-4 sm:px-8 pb-10 max-w-[1280px] grid xl:grid-cols-[1fr_1.4fr] gap-4 items-start">

        {/* Última lectura, en grande: pensada para proyectar en portería */}
        <div className="card p-8 text-center sticky top-6">
          <div className="flex items-center justify-center gap-2 label-mono">
            <span className="w-2.5 h-2.5 rounded-full bg-brand dot-live" /> Última lectura
          </div>
          {ultima && (
            <div key={ultima.id} className="animate-rise">
              <div className="mx-auto mt-6 w-20 h-20 grid place-items-center">
                <Avatar nombre={ultima.nombre} size="lg" />
              </div>
              <h2 className="mt-4 text-[22px] font-bold tracking-tight">{ultima.nombre}</h2>
              <Mono className="!text-[12px]">{ultima.grado} · {ultima.tarjeta}</Mono>
              <div className="mt-5 font-mono text-[40px] font-semibold tracking-tight leading-none">
                {ultima.hora}
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                <Pill tone={ultima.tipo === 'entrada' ? 'ok' : 'info'}>
                  {ultima.tipo === 'entrada' ? <LogIn size={11} /> : <LogOut size={11} />}
                  {ultima.tipo === 'entrada' ? 'Entrada' : 'Salida'}
                </Pill>
                <EstadoBadge estado={ultima.estado} />
              </div>
              <p className="mt-4 flex items-center justify-center gap-1.5 text-[12px] text-ink-3">
                <DoorOpen size={13} /> {ultima.puerta}
              </p>
            </div>
          )}
        </div>

        {/* Feed del día */}
        <div className="card p-6">
          <PanelHead
            title="Registro del día"
            sub={`${lecturas.length} lecturas · Jueves 30 de julio`}
            right={<Pill tone="brand"><Radio size={11} /> 4 lectores en línea</Pill>}
          />
          <div>
            {lecturas.map((l, i) => (
              <div key={l.id} className={cn('flex items-center gap-3.5 py-3 animate-slide-in', i > 0 && 'border-t border-line')}>
                <Avatar nombre={l.nombre} size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold truncate">{l.nombre}</p>
                  <Mono className="!text-[10.5px]">{l.grado} · {l.tarjeta} · {l.puerta}</Mono>
                </div>
                <Pill tone={l.tipo === 'entrada' ? 'ok' : 'info'}>{l.tipo === 'entrada' ? 'Entrada' : 'Salida'}</Pill>
                <Mono className="font-semibold !text-ink w-[64px] text-right">{l.hora}</Mono>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
