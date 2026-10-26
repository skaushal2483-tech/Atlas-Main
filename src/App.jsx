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

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const pageProps = {
    isDark,
    setIsDark,
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage {...pageProps} />}
        />

        <Route
          path="/auth"
          element={<Auth {...pageProps} />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard {...pageProps} />}
        />

        <Route
          path="/community"
          element={<Community {...pageProps} />}
        />

        <Route
          path="/exercises"
          element={<Exercises {...pageProps} />}
        />

        <Route
          path="/workouts"
          element={<WorkoutLogger {...pageProps} />}
        />

        <Route
          path="/meals"
          element={<Meals {...pageProps} />}
        />

        <Route
          path="/pr"
          element={<PR {...pageProps} />}
        />

        <Route
          path="/meals/:date"
          element={<DailyMealLog {...pageProps} />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
