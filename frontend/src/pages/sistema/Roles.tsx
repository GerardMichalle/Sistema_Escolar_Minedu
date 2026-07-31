import Topbar from '../../components/Topbar';
import { ShieldCheck, Check, Minus } from 'lucide-react';
import { PanelHead, Pill } from '../../components/ui';

/** Matriz de permisos de los 5 roles del sistema.
 *  El Administrador es el único que puede modificarla.
 *  TODO Spring Boot: persistir en tabla `permisos_rol` y validar en cada endpoint. */
const PERMISOS: { modulo: string; adm: boolean; dir: boolean; doc: boolean; alu: boolean; pad: boolean }[] = [
  { modulo: 'Dashboard institucional completo', adm: true, dir: true, doc: false, alu: false, pad: false },
  { modulo: 'Gestionar alumnos, padres y docentes', adm: true, dir: false, doc: false, alu: false, pad: false },
  { modulo: 'Consultar registros y vínculos padre-alumno', adm: true, dir: true, doc: false, alu: false, pad: false },
  { modulo: 'Control en vivo · todas las puertas', adm: true, dir: true, doc: false, alu: false, pad: false },
  { modulo: 'Asistencia en vivo · solo su aula', adm: true, dir: true, doc: true, alu: false, pad: false },
  { modulo: 'Subir notas y publicar libretas', adm: true, dir: false, doc: true, alu: false, pad: false },
  { modulo: 'Registrar conducta y observaciones', adm: true, dir: true, doc: true, alu: false, pad: false },
  { modulo: 'Publicar comunicados', adm: true, dir: true, doc: true, alu: false, pad: false },
  { modulo: 'Ver su asistencia, notas y conducta', adm: true, dir: true, doc: true, alu: true, pad: true },
  { modulo: 'Mi perfil con tarjeta QR / RFID', adm: false, dir: false, doc: false, alu: true, pad: false },
  { modulo: 'Cursos gratuitos · consumir contenido', adm: true, dir: true, doc: true, alu: true, pad: true },
  { modulo: 'Cursos gratuitos · subir y gestionar contenido', adm: true, dir: false, doc: false, alu: false, pad: false },
  { modulo: 'Exportar y enviar reportes', adm: true, dir: true, doc: false, alu: false, pad: false },
  { modulo: 'Usuarios, roles y configuración del sistema', adm: true, dir: false, doc: false, alu: false, pad: false },
];

const Cell = ({ ok }: { ok: boolean }) => (
  <td className="px-4 py-3 text-center">
    {ok
      ? <span className="inline-grid place-items-center w-6 h-6 rounded-full bg-ok-soft text-ok"><Check size={13} /></span>
      : <span className="inline-grid place-items-center w-6 h-6 rounded-full bg-canvas text-ink-3"><Minus size={13} /></span>}
  </td>
);

export default function Roles() {
  return (
    <>
      <Topbar title="Roles y permisos" subtitle="Qué puede hacer cada tipo de cuenta" />
      <div className="px-4 sm:px-8 pb-10 max-w-[1150px]">
        <div className="card p-6">
          <PanelHead
            title="Matriz de permisos"
            sub="Solo el Administrador puede modificar esta matriz"
            right={<Pill tone="brand"><ShieldCheck size={11} /> 5 roles definidos</Pill>}
          />
          <div className="overflow-x-auto scroll-thin">
            <table className="w-full border-collapse min-w-[780px]">
              <thead>
                <tr>
                  <th className="label-mono text-left px-4 py-3">Permiso</th>
                  <th className="label-mono px-4 py-3 text-center">Admin.</th>
                  <th className="label-mono px-4 py-3 text-center">Dirección</th>
                  <th className="label-mono px-4 py-3 text-center">Docente</th>
                  <th className="label-mono px-4 py-3 text-center">Alumno</th>
                  <th className="label-mono px-4 py-3 text-center">Padre</th>
                </tr>
              </thead>
              <tbody>
                {PERMISOS.map(p => (
                  <tr key={p.modulo} className="border-t border-line hover:bg-canvas transition-colors">
                    <td className="px-4 py-3 text-[13px] font-medium">{p.modulo}</td>
                    <Cell ok={p.adm} /><Cell ok={p.dir} /><Cell ok={p.doc} /><Cell ok={p.alu} /><Cell ok={p.pad} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11.5px] text-ink-3 mt-4">
            El docente solo accede a la información de las aulas que tiene asignadas. El padre solo ve la información de sus hijos vinculados. Dirección supervisa pero no modifica configuraciones críticas ni crea administradores.
          </p>
        </div>
      </div>
    </>
  );
}
