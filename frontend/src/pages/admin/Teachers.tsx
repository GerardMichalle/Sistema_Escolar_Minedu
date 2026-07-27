import Avatar from "../../components/common/Avatar";

const PROFESORES = [
  { nombre: "Jorge Delgado Paz", curso: "Matemática", grados: "4° y 5°", email: "jdelgado@sanmartin.edu.pe" },
  { nombre: "María Elena Vargas", curso: "Comunicación", grados: "5°", email: "mvargas@sanmartin.edu.pe" },
  { nombre: "Carlos Sifuentes Roca", curso: "Ciencia y Tecnología", grados: "3° y 4°", email: "csifuentes@sanmartin.edu.pe" },
  { nombre: "Rosa Aguilar Neyra", curso: "Inglés", grados: "1° a 5°", email: "raguilar@sanmartin.edu.pe" },
];

export default function Teachers() {
  return (
    <div className="space-y-4">
      <h2 className="font-bold text-slate-800">Profesores</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {PROFESORES.map((p) => (
          <div key={p.email} className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3">
            <Avatar nombre={p.nombre} size="w-11 h-11" text="text-sm" />
            <div className="min-w-0">
              <div className="text-sm font-semibold text-slate-800 truncate">{p.nombre}</div>
              <div className="text-xs text-slate-500">{p.curso} · {p.grados}</div>
              <div className="text-xs text-slate-400 truncate">{p.email}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
