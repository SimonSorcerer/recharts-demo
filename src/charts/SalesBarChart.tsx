import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 42000, expenses: 28000 },
  { month: 'Feb', revenue: 53000, expenses: 31000 },
  { month: 'Mar', revenue: 61000, expenses: 34000 },
  { month: 'Apr', revenue: 47000, expenses: 29000 },
  { month: 'May', revenue: 74000, expenses: 38000 },
  { month: 'Jun', revenue: 85000, expenses: 41000 },
  { month: 'Jul', revenue: 79000, expenses: 39000 },
  { month: 'Aug', revenue: 92000, expenses: 44000 },
];

export default function SalesBarChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} barGap={4} barCategoryGap="30%">
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: 'var(--text)' }} axisLine={false} tickLine={false} />
        <YAxis tickFormatter={(v) => `$${v / 1000}k`} tick={{ fontSize: 12, fill: 'var(--text)' }} axisLine={false} tickLine={false} width={48} />
        <Tooltip formatter={(v) => [`$${Number(v).toLocaleString()}`, undefined]} />
        <Legend wrapperStyle={{ fontSize: 13 }} />
        <Bar dataKey="revenue" name="Revenue" fill="#7c3aed" radius={[4, 4, 0, 0]} />
        <Bar dataKey="expenses" name="Expenses" fill="#a78bfa" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
