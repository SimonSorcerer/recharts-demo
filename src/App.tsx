import './App.css';
import SalesBarChart from './charts/SalesBarChart';
import UserGrowthLineChart from './charts/UserGrowthLineChart';
import DevicePieChart from './charts/DevicePieChart';
import PerformanceRadarChart from './charts/PerformanceRadarChart';
import ServerLoadAreaChart from './charts/ServerLoadAreaChart';

interface ChartCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function ChartCard({ title, description, children }: ChartCardProps) {
  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="chart-card-body">{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Recharts Demo</h1>
        <p>A showcase of chart types built with the Recharts library</p>
      </header>

      <main className="chart-grid">
        <ChartCard
          title="Monthly Revenue vs Expenses"
          description="Grouped bar chart comparing revenue and expenses over 8 months"
        >
          <SalesBarChart />
        </ChartCard>

        <ChartCard
          title="User Growth"
          description="Active users and new sign-ups tracked week by week"
        >
          <UserGrowthLineChart />
        </ChartCard>

        <ChartCard
          title="Sessions by Device"
          description="Donut chart breaking down traffic across device categories"
        >
          <DevicePieChart />
        </ChartCard>

        <ChartCard
          title="Team Performance"
          description="Radar chart comparing two teams across six metrics"
        >
          <PerformanceRadarChart />
        </ChartCard>

        <ChartCard
          title="Server Load (24h)"
          description="CPU and memory utilisation throughout the day as an area chart"
        >
          <ServerLoadAreaChart />
        </ChartCard>
      </main>
    </div>
  );
}
