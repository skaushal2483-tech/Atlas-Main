import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Authentication"

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <Auth />
  );
}

export default App;