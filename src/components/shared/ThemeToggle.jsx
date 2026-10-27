import "../../styles/shared/ThemeToggle.css";
import {useTheme} from "../../context/ThemeContext"

function ThemeToggle() {
  const { isDark, setIsDark } = useTheme();


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
