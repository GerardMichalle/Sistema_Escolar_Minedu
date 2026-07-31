import Topbar from '../../components/Topbar';
import { FileText, Download, CalendarDays, Users, Clock, Flag } from 'lucide-react';
import { PanelHead, Mono } from '../../components/ui';

const REPORTES = [
  { icon: <Users size={16} />, titulo: 'Asistencia mensual por grado', desc: 'Consolidado de entradas, tardanzas y ausencias por sección.', formato: 'PDF · EXCEL' },
  { icon: <Clock size={16} />, titulo: 'Tardanzas reiteradas', desc: 'Alumnos con 3+ tardanzas en el mes, con datos del apoderado.', formato: 'PDF' },
  { icon: <FileText size={16} />, titulo: 'Libreta de notas por alumno', desc: 'Boleta oficial del bimestre lista para imprimir o enviar.', formato: 'PDF' },
  { icon: <Flag size={16} />, titulo: 'Registro de conducta', desc: 'Méritos y deméritos del periodo, por alumno o por grado.', formato: 'PDF · EXCEL' },
  { icon: <CalendarDays size={16} />, titulo: 'Nómina de matrícula', desc: 'Formato compatible con SIAGIE para reporte al MINEDU.', formato: 'EXCEL' },
  { icon: <Users size={16} />, titulo: 'Directorio de apoderados', desc: 'Contactos por grado con estado de cuenta web.', formato: 'EXCEL' },
];

export default function Reportes() {
  return (
    <>
      <Topbar title="Reportes" subtitle="Documentos oficiales listos para exportar" />
      <div className="px-8 pb-10 max-w-[1280px]">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {REPORTES.map(r => (
            <div key={r.titulo} className="card p-5 flex flex-col hover:shadow-[0_4px_16px_rgba(0,0,0,.05)] hover:-translate-y-px transition-all">
              <span className="grid place-items-center w-9 h-9 rounded-[10px] bg-brand-soft text-brand">{r.icon}</span>
              <h3 className="mt-3 text-[14px] font-bold tracking-tight">{r.titulo}</h3>
              <p className="mt-1 text-[12px] text-ink-2 flex-1">{r.desc}</p>
              <div className="mt-4 pt-3 border-t border-line flex items-center justify-between">
                <Mono className="!text-[10px]">{r.formato}</Mono>
                <button className="flex items-center gap-1.5 text-[12px] font-semibold text-brand hover:text-brand-strong transition-colors cursor-pointer">
                  <Download size={13} /> Generar
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="card p-6 mt-4">
          <PanelHead title="Reportes programados" sub="Se envían automáticamente por correo" />
          <p className="text-[12.5px] text-ink-2">El consolidado de asistencia se envía a Dirección todos los viernes a las 4:00 p. m. — <button className="font-semibold text-brand cursor-pointer">configurar</button></p>
        </div>
      </div>
    </>
  );
}
