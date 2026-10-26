import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

import "../../styles/shared/Navbar.css";

function Navbar({
  isDark,
  setIsDark,
  scrollToWhy,
  scrollToPrograms,
  scrollToMemberships,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  function handleMenuClick() {
    setIsMenuOpen((prev) => !prev);
  }

  function handleSectionClick(scrollFunction) {
    setIsMenuOpen(false);
    scrollFunction?.();
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
        <Link
          to="/"
          className="navbar-logo"
          aria-label="ATLAS home"
        >
          <img
            src="/images/atlasLogo_Crimson.png"
            alt="ATLAS"
          />
        </Link>

        <div className="navbar-actions">
          <ThemeToggle
            isDark={isDark}
            setIsDark={setIsDark}
          />

          {isLandingPage && (
            <button
              type="button"
              className="navbar-button menu-button"
              onClick={handleMenuClick}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              ☰
            </button>
          )}
        </div>
      </nav>

      {isLandingPage && (
        <div className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
          <button
            type="button"
            onClick={() => handleSectionClick(scrollToWhy)}
            disabled={!scrollToWhy}
          >
            Features
          </button>

          <button
            type="button"
            onClick={() => handleSectionClick(scrollToPrograms)}
            disabled={!scrollToPrograms}
          >
            Programs
          </button>

          <button
            type="button"
            onClick={() =>
              handleSectionClick(scrollToMemberships)
            }
            disabled={!scrollToMemberships}
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
      )}
    </>
  );
}

export default Navbar;
