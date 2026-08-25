import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Community from "./pages/Community";
import Auth from "./pages/Authentication"

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    // <LandingPage
    //   isDark={isDark}
    //   setIsDark={setIsDark}
    // />
    // <Dashboard />
    // <Community />
    <Auth />
  );
}

export default App;