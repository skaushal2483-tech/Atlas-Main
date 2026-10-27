import Sidebar from "../components/shared/Sidebar";
import Header from "../components/dashboard/Header";
import StatsCards from "../components/dashboard/StatsCards";
import PersonalRecords from "../components/dashboard/PersonalRecords";
import Metrics from "../components/dashboard/Metrics";

import "../styles/dashboard/Dashboard.css";
import { useTheme } from "../context/ThemeContext";


function Dashboard() {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className="dashboard">
      <Sidebar/>

      <main className="dashboard-main">
        <Header />

        <Metrics />

        <StatsCards />

        <PersonalRecords />
      </main>
    </div>
  );
}

export default Dashboard;
