import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { TENDENCIA_MES } from "../../utils/mockData";

export default function GraficoTendencia() {
  return (
    <div className="h-44">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={TENDENCIA_MES}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="sem" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis domain={[88, 96]} tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip />
          <Line type="monotone" dataKey="pct" stroke="#1e1b4b" strokeWidth={2.5} dot={{ fill: "#f59e0b", r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
