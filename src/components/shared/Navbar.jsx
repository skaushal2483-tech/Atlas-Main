import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/shared/Navbar.css";

function Navbar({
  isDark,
  setIsDark,
  scrollToWhy,
  scrollToPrograms,
  scrollToMemberships,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleSectionClick(scrollFunction) {
    setIsMenuOpen(false);
    scrollFunction();
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
          <img src="/images/atlasLogo_Crimson.png" alt="ATLAS" />
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

        <button
          type="button"
          onClick={() => handleSectionClick(scrollToWhy)}
        >
          Features
        </button>

        <button
          type="button"
          onClick={() => handleSectionClick(scrollToPrograms)}
        >
          Programs
        </button>

        <button
          type="button"
          onClick={() =>
            handleSectionClick(scrollToMemberships)
          }
        >
          Membership
        </button>

        <div className="menu-divider"></div>

        <Link
          to="/auth"
          className="menu-cta"
          onClick={() => setIsMenuOpen(false)}
        >
          Start Your Journey
        </Link>

      </div>
    </>
  );
}

export default Navbar;