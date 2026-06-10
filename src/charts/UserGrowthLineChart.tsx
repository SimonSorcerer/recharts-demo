import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';

const data = [
    { week: 'W1', active: 1200, new: 340 },
    { week: 'W2', active: 1450, new: 410 },
    { week: 'W3', active: 1380, new: 290 },
    { week: 'W4', active: 1620, new: 520 },
    { week: 'W5', active: 1810, new: 480 },
    { week: 'W6', active: 2050, new: 610 },
    { week: 'W7', active: 1970, new: 390 },
    { week: 'W8', active: 2340, new: 730 },
];

export default function UserGrowthLineChart() {
    return (
        <ResponsiveContainer width='100%' height={260}>
            <LineChart data={data}>
                <CartesianGrid
                    strokeDasharray='3 3'
                    stroke='var(--border)'
                    vertical={false}
                />
                <XAxis
                    dataKey='week'
                    tick={{ fontSize: 12, fill: 'var(--text)' }}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis
                    tick={{ fontSize: 12, fill: 'var(--text)' }}
                    axisLine={false}
                    tickLine={false}
                    width={44}
                />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: 13 }} />
                <Line
                    type='monotone'
                    dataKey='active'
                    name='Active users'
                    stroke='#7c3aed'
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{ r: 5 }}
                />
                <Line
                    type='monotone'
                    dataKey='new'
                    name='New sign-ups'
                    stroke='#f59e0b'
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{ r: 5 }}
                    strokeDasharray='5 3'
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
