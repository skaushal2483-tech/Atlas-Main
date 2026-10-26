import { useEffect, useState } from "react";
import {
BrowserRouter,
Routes,
Route,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Community from "./pages/Community";
import Auth from "./pages/Authentication";
import MealLog from "./pages/MealLog";
import DailyMealLog from "./pages/DailyMealLog";

function App() {
const [isDark, setIsDark] = useState(false);

useEffect(() => {
document.documentElement.classList.toggle("dark", isDark);
}, [isDark]);

return ( <BrowserRouter> <Routes>
<Route
path="/"
element={ <LandingPage
           isDark={isDark}
           setIsDark={setIsDark}
         />
}
/>

    <Route
      path="/auth"
      element={
        <Auth
          isDark={isDark}
          setIsDark={setIsDark}
        />
      }
    />

    <Route
      path="/dashboard"
      element={
        <Dashboard
          isDark={isDark}
          setIsDark={setIsDark}
        />
      }
    />

    <Route
      path="/community"
      element={
        <Community
          isDark={isDark}
          setIsDark={setIsDark}
        />
      }
    />

    <Route
      path="/meals"
      element={
        <MealLog
          isDark={isDark}
          setIsDark={setIsDark}
        />
      }
    />

    <Route
      path="/meals/new"
      element={
        <DailyMealLog
          isDark={isDark}
          setIsDark={setIsDark}
        />
      }
    />

    <Route
      path="/meals/:date"
      element={
        <DailyMealLog
          isDark={isDark}
          setIsDark={setIsDark}
        />
      }
    />
  </Routes>
</BrowserRouter>

);
}

export default App;
