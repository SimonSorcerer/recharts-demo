import {
    RadarChart,
    Radar,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';

const data = [
    { metric: 'Speed', teamA: 88, teamB: 72 },
    { metric: 'Accuracy', teamA: 74, teamB: 91 },
    { metric: 'Reliability', teamA: 95, teamB: 83 },
    { metric: 'Scalability', teamA: 68, teamB: 79 },
    { metric: 'UX', teamA: 82, teamB: 65 },
    { metric: 'Security', teamA: 90, teamB: 88 },
];

export default function PerformanceRadarChart() {
    return (
        <ResponsiveContainer width='100%' height={260}>
            <RadarChart data={data}>
                <PolarGrid stroke='var(--border)' />
                <PolarAngleAxis
                    dataKey='metric'
                    tick={{ fontSize: 12, fill: 'var(--text)' }}
                />
                <PolarRadiusAxis
                    domain={[0, 100]}
                    tick={{ fontSize: 10, fill: 'var(--text)' }}
                    tickCount={4}
                />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: 13 }} />
                <Radar
                    name='Team A'
                    dataKey='teamA'
                    stroke='#7c3aed'
                    fill='#7c3aed'
                    fillOpacity={0.25}
                />
                <Radar
                    name='Team B'
                    dataKey='teamB'
                    stroke='#f59e0b'
                    fill='#f59e0b'
                    fillOpacity={0.2}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
}
