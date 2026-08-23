import { useState } from "react";
import "../../styles/shared/ThemeToggle.css";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  function handleThemeToggle() {
    const nextTheme = !isDark;

    setIsDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
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