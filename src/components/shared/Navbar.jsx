import { useEffect, useState } from "react";
import "../../styles/shared/Navbar.css";

function Navbar({ isDark, setIsDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    function handleScroll() {
      setIsMenuOpen(false);
    }

    function handleClickOutside(event) {
      if (
        isMenuOpen &&
        !event.target.closest(".menu") &&
        !event.target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          ATLAS
        </div>

        <div className="navbar-actions">
          <button
  className={`theme-button ${isDark ? "nyx" : "eos"}`}
  onClick={() => setIsDark(!isDark)}
  aria-label="Switch theme"
></button>

          <button
            className="navbar-button menu-button"
            onClick={handleMenuClick}
            aria-label="Open navigation menu"
          >
            ☰
          </button>
        </div>
      </nav>

      <div className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
        <a href="#features">Features</a>
        <a href="#programs">Programs</a>
        <a href="#exercises">Exercises</a>
        <a href="#muscle-atlas">Muscle Atlas</a>
        <a href="#membership">Membership</a>

        <div className="menu-divider"></div>

        <a href="#login">Login</a>

        <button className="menu-cta">
          Start Your Journey
        </button>
      </div>
    </>
  );
}

export default Navbar;