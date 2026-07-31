import Topbar from '../../components/Topbar';
import { Plus } from 'lucide-react';
import { Table, Tr, Td, Avatar, Mono, Pill, Button } from '../../components/ui';

const USUARIOS = [
  { nombre: 'Ricardo Palomino', correo: 'direccion@sanmartin.edu.pe', rol: 'Dirección', ultimo: 'Hoy, 7:58 a. m.', activo: true },
  { nombre: 'Patricia Soto', correo: 'patricia.soto@sanmartin.edu.pe', rol: 'Administrador', ultimo: 'Hoy, 8:12 a. m.', activo: true },
  { nombre: 'Carlos Mendoza', correo: 'c.mendoza@sanmartin.edu.pe', rol: 'Profesor', ultimo: 'Hoy, 8:05 a. m.', activo: true },
  { nombre: 'María Fernández', correo: 'm.fernandez@sanmartin.edu.pe', rol: 'Profesor', ultimo: 'Ayer, 6:40 p. m.', activo: true },
  { nombre: 'Rosa Rojas', correo: 'rosa.rojas@gmail.com', rol: 'Apoderado', ultimo: 'Hace 3 días', activo: false },
];

export default function Usuarios() {
  return (
    <>
      <Topbar title="Usuarios" subtitle="Cuentas con acceso al sistema" />
      <div className="px-4 sm:px-8 pb-10 max-w-[1280px] space-y-4">
        <div className="flex justify-end">
          <Button><Plus size={14} /> Crear usuario</Button>
        </div>
        <Table head={['Usuario', 'Correo', 'Rol', 'Último acceso', 'Estado']}>
          {USUARIOS.map(u => (
            <Tr key={u.correo}>
              <Td>
                <div className="flex items-center gap-3">
                  <Avatar nombre={u.nombre} size="sm" />
                  <span className="font-semibold text-[13px]">{u.nombre}</span>
                </div>
              </Td>
              <Td className="text-[12.5px] text-ink-2">{u.correo}</Td>
              <Td><Pill tone={u.rol === 'Dirección' ? 'brand' : u.rol === 'Administrador' ? 'info' : 'neutral'}>{u.rol}</Pill></Td>
              <Td><Mono>{u.ultimo}</Mono></Td>
              <Td>{u.activo ? <Pill tone="ok">Activo</Pill> : <Pill tone="warn">Inactivo</Pill>}</Td>
            </Tr>
          ))}
        </Table>
      </div>
    </>
  );
}
