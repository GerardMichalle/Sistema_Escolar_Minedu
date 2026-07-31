import { useEffect, useState } from 'react';
import { Avatar, Mono } from './ui';
import { getLecturasHoy } from '../services/api';
import type { LecturaRfid } from '../types';

const SIMULADAS: Omit<LecturaRfid, 'id' | 'hora'>[] = [
  { alumnoId: 'a3', nombre: 'Camila Torres', grado: '4°B', tarjeta: 'RF-88215', tipo: 'entrada', puerta: 'Puerta principal', estado: 'puntual' },
  { alumnoId: 'a5', nombre: 'Luciana Paredes', grado: '5°B', tarjeta: 'RF-88217', tipo: 'entrada', puerta: 'Puerta principal', estado: 'puntual' },
  { alumnoId: 'a6', nombre: 'Sebastián Chávez', grado: '2°A', tarjeta: 'RF-88218', tipo: 'entrada', puerta: 'Puerta principal', estado: 'tardanza' },
];

/**
 * Lecturas de la puerta en tiempo real.
 * HOY: simula una lectura nueva cada ~7 s para la demo.
 * TODO Spring Boot: suscribirse a SSE/WebSocket /api/asistencia/stream
 * y hacer prepend de cada evento recibido.
 */
export default function GateTicker() {
  const [lecturas, setLecturas] = useState<LecturaRfid[]>([]);

  useEffect(() => {
    getLecturasHoy().then(l => setLecturas(l.slice(0, 5)));
  }, []);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      const base = SIMULADAS[i % SIMULADAS.length]; i++;
      const hora = new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit', hour12: false });
      setLecturas(prev => [{ ...base, id: `sim-${Date.now()}`, hora }, ...prev].slice(0, 6));
    }, 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="card flex items-stretch overflow-hidden animate-rise">
      <div className="flex items-center gap-3 px-5 py-4 shrink-0">
        <span className="w-3 h-3 rounded-full bg-brand dot-live" />
        <span className="label-mono !text-ink font-semibold">Puerta principal</span>
      </div>
      <div className="flex items-stretch overflow-hidden flex-1 [mask-image:linear-gradient(90deg,#000_85%,transparent)]">
        {lecturas.map(l => (
          <div key={l.id} className="flex items-center gap-3 px-5 border-l border-line shrink-0 animate-slide-in">
            <Avatar nombre={l.nombre} size="sm" />
            <div className="leading-tight">
              <p className="text-[12.5px] font-semibold whitespace-nowrap">{l.nombre}</p>
              <Mono className="!text-[10.5px] whitespace-nowrap">{l.grado} · {l.tarjeta}</Mono>
            </div>
            <Mono className={`!text-[12px] font-semibold ${l.estado === 'puntual' ? '!text-ok' : '!text-warn'}`}>{l.hora}</Mono>
          </div>
        ))}
      </div>
    </div>
  );
}
