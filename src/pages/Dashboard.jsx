import SideBar from "../components/dashboard/SideBar";
import Header from "../components/dashboard/Header";
import StatsCards from "../components/dashboard/StatsCards";
import PersonalRecords from "../components/dashboard/PersonalRecords";
import Metrics from "../components/dashboard/Metrics";

import "../styles/dashboard/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <SideBar />

      <main className="dashboard-main">
        <Header />

        <Metrics/>

        <StatsCards />

        <PersonalRecords/>
      </main>
    </div>
  );
}

export default Dashboard;