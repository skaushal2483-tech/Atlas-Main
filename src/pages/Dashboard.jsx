import SideBar from "../components/SideBar";
import Header from "../components/Header";
import StatsCards from "../components/StatsCards";
import Metrics from "../components/Metrics";

import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <SideBar />

      <main className="dashboard-main">
        <Header />

        <Metrics/>

        <StatsCards />
      </main>
    </div>
  );
}

export default Dashboard;