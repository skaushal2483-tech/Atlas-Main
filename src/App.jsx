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
import Exercises from "./pages/Exercises";
import WorkoutLogger from "./pages/WorkoutLogger";
import Meals from "./pages/MealLog";
import PR from "./pages/PersonalRecordsPage";
import DailyMealLog from "./pages/DailyMealLog";

import ProtectedRoute from "./components/authentication/ProtectedRoute";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Auth />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/community" element={<Community />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/workouts" element={<WorkoutLogger />} />
            <Route path="/meals" element={<Meals />} />
            <Route path="/meals/:date" element={<DailyMealLog />} />
            <Route path="/pr" element={<PR />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;