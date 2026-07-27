import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { PIE_HOY } from "../../utils/mockData";

export default function GraficoDistribucion() {
  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={PIE_HOY} dataKey="value" innerRadius={45} outerRadius={70} paddingAngle={3}>
            {PIE_HOY.map((e, i) => <Cell key={i} fill={e.color} />)}
          </Pie>
          <Legend iconSize={10} wrapperStyle={{ fontSize: 12 }} />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
