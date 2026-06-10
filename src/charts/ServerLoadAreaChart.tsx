import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';

const data = [
    { time: '00:00', cpu: 22, memory: 45 },
    { time: '03:00', cpu: 18, memory: 42 },
    { time: '06:00', cpu: 31, memory: 48 },
    { time: '09:00', cpu: 67, memory: 63 },
    { time: '12:00', cpu: 82, memory: 71 },
    { time: '15:00', cpu: 75, memory: 68 },
    { time: '18:00', cpu: 88, memory: 74 },
    { time: '21:00', cpu: 54, memory: 60 },
    { time: '24:00', cpu: 28, memory: 47 },
];

export default function ServerLoadAreaChart() {
    return (
        <ResponsiveContainer width='100%' height={260}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id='gradCpu' x1='0' y1='0' x2='0' y2='1'>
                        <stop
                            offset='5%'
                            stopColor='#7c3aed'
                            stopOpacity={0.3}
                        />
                        <stop
                            offset='95%'
                            stopColor='#7c3aed'
                            stopOpacity={0}
                        />
                    </linearGradient>
                    <linearGradient id='gradMem' x1='0' y1='0' x2='0' y2='1'>
                        <stop
                            offset='5%'
                            stopColor='#f59e0b'
                            stopOpacity={0.3}
                        />
                        <stop
                            offset='95%'
                            stopColor='#f59e0b'
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <CartesianGrid
                    strokeDasharray='3 3'
                    stroke='var(--border)'
                    vertical={false}
                />
                <XAxis
                    dataKey='time'
                    tick={{ fontSize: 12, fill: 'var(--text)' }}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis
                    tickFormatter={(v) => `${v}%`}
                    domain={[0, 100]}
                    tick={{ fontSize: 12, fill: 'var(--text)' }}
                    axisLine={false}
                    tickLine={false}
                    width={40}
                />
                <Tooltip formatter={(v) => [`${Number(v)}%`, undefined]} />
                <Legend wrapperStyle={{ fontSize: 13 }} />
                <Area
                    type='monotone'
                    dataKey='cpu'
                    name='CPU'
                    stroke='#7c3aed'
                    strokeWidth={2}
                    fill='url(#gradCpu)'
                />
                <Area
                    type='monotone'
                    dataKey='memory'
                    name='Memory'
                    stroke='#f59e0b'
                    strokeWidth={2}
                    fill='url(#gradMem)'
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}
