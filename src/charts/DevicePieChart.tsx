import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Desktop', value: 4820 },
  { name: 'Mobile', value: 6130 },
  { name: 'Tablet', value: 1540 },
  { name: 'Other', value: 390 },
];

const COLORS = ['#7c3aed', '#a78bfa', '#f59e0b', '#6ee7b7'];

export default function DevicePieChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(v) => [Number(v).toLocaleString(), 'Sessions']} />
        <Legend wrapperStyle={{ fontSize: 13 }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
