import { useState } from "react";
import LandingPage from "./pages/LandingPage";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark" : "light"}>
      <LandingPage
        isDark={isDark}
        setIsDark={setIsDark}
      />
    </div>
  );
}

export default App;