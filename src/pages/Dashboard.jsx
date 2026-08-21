import SideBar from "../components/SideBar";
import Header from "../components/Header";
import "../styles/Dashboard.css";



function Dashboard() {
  return (
    <div className="dashboard">
      <SideBar />

      <main className="dashboard-main">
        <Header />
      </main>
    </div>
  );
}

export default Dashboard;