import Sidebar from "../components/shared/Sidebar";
import Header from "../components/dashboard/Header";
import StatsCards from "../components/dashboard/StatsCards";
import PersonalRecords from "../components/dashboard/PersonalRecords";
import Metrics from "../components/dashboard/Metrics";

import "../styles/dashboard/Dashboard.css";

function Dashboard({ isDark, setIsDark }) {
  return (
    <div className="dashboard">
      <Sidebar
        isDark={isDark}
        setIsDark={setIsDark}
      />

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
