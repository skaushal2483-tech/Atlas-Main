import "../../styles/shared/Navbar.css";

function Navbar({ isDark, setIsDark }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/atlasLogo_Crimson.png" alt="ATLAS" />
      </div>

      <div className="navbar-actions">
        <button
          className={`theme-button ${isDark ? "nyx" : "eos"}`}
          onClick={() => setIsDark(!isDark)}
          aria-label="Switch theme"
        />
      </div>
    </nav>
  );
}

export default Navbar;