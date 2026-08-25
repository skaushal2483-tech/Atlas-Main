import { Link } from "react-router-dom";
import "../../styles/dashboard/SideBar.css";
import ThemeToggle from "../shared/ThemeToggle";

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        ATLAS
      </div>

      <nav className="sidebar-nav">
        <Link to="/dashboard" className="active">
          Dashboard
        </Link>

        <Link to="/community">
          Community
        </Link>

        <a>Workouts</a>
        <a>Programs</a>
        <a>Exercises</a>
        <a>Progress</a>
        <a>Membership</a>
        <a>Settings</a>
      </nav>

      <div className="sidebar-theme">
        <ThemeToggle />
      </div>
    </aside>
  );
}

export default SideBar;