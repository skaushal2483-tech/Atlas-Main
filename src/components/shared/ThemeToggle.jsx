import "../../styles/shared/ThemeToggle.css";

function ThemeToggle({ isDark, setIsDark }) {

  function handleThemeToggle() {
    setIsDark(!isDark);
  }

  return (
    <button
      className={`theme-button ${isDark ? "nyx" : "eos"}`}
      onClick={handleThemeToggle}
      aria-label="Switch theme"
      type="button"
    />
  );
}

export default ThemeToggle;
