import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../../context/ThemeContext";

import "../../styles/shared/Sidebar.css";

function Sidebar() {
  const { isDark, setIsDark } = useTheme();

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Link to="/" aria-label="Go to ATLAS home">
          <img
            src="/images/atlasLogo_Crimson.png"
            alt="ATLAS"
          />
        </Link>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/community">
          Community
        </NavLink>

        <NavLink
          to="/exercises"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Exercises
        </NavLink>

        <NavLink to="/workouts">
          Workouts
        </NavLink>

        <NavLink to="/meals">
          Meals
        </NavLink>

        <a>Progress</a>
        <a>Membership</a>
        <a>Settings</a>
      </nav>

      <div className="sidebar-theme">
        <ThemeToggle/>
      </div>
    </aside>
  );
}

export default Sidebar;