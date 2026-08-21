import "../styles/SideBar.css";
import ThemeToggle from "./ThemeToggle";

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        ATLAS
      </div>

      <nav className="sidebar-nav">
        <a className="active">Dashboard</a>
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