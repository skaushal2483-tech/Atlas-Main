import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

import "../../styles/shared/Sidebar.css";

function Sidebar({ isDark, setIsDark }) {
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

        <NavLink to="/meals" className="sidebar-link">
          {/* Use the same icon approach as your other links */}
          Meal Log
        </NavLink>
        <a>Programs</a>
        <a>Exercises</a>
        <a>Progress</a>
        <a>Membership</a>
        <a>Settings</a>
      </nav>

      <div className="sidebar-theme">
        <ThemeToggle
          isDark={isDark}
          setIsDark={setIsDark}
        />
      </div>
    </aside>
  );
}

export default Sidebar;
