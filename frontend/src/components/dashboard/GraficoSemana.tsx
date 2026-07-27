import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { ASISTENCIA_SEMANA } from "../../utils/mockData";

export default function GraficoSemana() {
  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={ASISTENCIA_SEMANA} barSize={18}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="dia" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="puntuales" name="Puntuales" fill="#1e1b4b" radius={[4, 4, 0, 0]} />
          <Bar dataKey="tardanzas" name="Tardanzas" fill="#f59e0b" radius={[4, 4, 0, 0]} />
          <Bar dataKey="ausentes" name="Ausentes" fill="#e11d48" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
