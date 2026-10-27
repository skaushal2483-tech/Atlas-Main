import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/shared/Sidebar";
import MealLogHeader from "../components/meals/MealLogHeader";
import CalorieTrendCard from "../components/meals/CalorieTrendCard";
import YourJourney from "../components/meals/YourJourney";
import { useTheme } from "../context/ThemeContext";


import "../styles/meals/MealLog.css";

const STORAGE_KEY = "atlas_daily_meal_logs";

function getSavedLogs() {
  try {
    const storedLogs = localStorage.getItem(STORAGE_KEY);

    if (!storedLogs) {
      return [];
    }

    const parsedLogs = JSON.parse(storedLogs);

    return Array.isArray(parsedLogs) ? parsedLogs : [];
  } catch (error) {
    console.error("Failed to load saved meal logs:", error);
    return [];
  }
}

function MealLog() {
  const { isDark, setIsDark } = useTheme();

  const navigate = useNavigate();
  const [logs, setLogs] = useState(getSavedLogs);

  useEffect(() => {
    const refreshLogs = () => {
      setLogs(getSavedLogs());
    };

    window.addEventListener("focus", refreshLogs);
    window.addEventListener("storage", refreshLogs);

    return () => {
      window.removeEventListener("focus", refreshLogs);
      window.removeEventListener("storage", refreshLogs);
    };
  }, []);

  const handleAddLog = () => {
    navigate("/meals/new");
  };

  const handleOpenLog = (log) => {
    navigate(`/meals/${log.date}`);
  };

  const handleDeleteLog = (date) => {
    try {
      const updatedLogs = getSavedLogs().filter(
        (log) => log.date !== date
      );

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedLogs)
      );

      setLogs(updatedLogs);
    } catch (error) {
      console.error("Failed to delete meal log:", error);
    }
  };


  return (
    <div className="meal-log-page">
      <Sidebar/>

      <main className="meal-log-main">
        <div className="meal-log-container">
          <MealLogHeader />

          <CalorieTrendCard />

          <YourJourney
            logs={logs}
            onAddLog={handleAddLog}
            onOpenLog={handleOpenLog}
            onDeleteLog={handleDeleteLog}
          />
        </div>
      </main>
    </div>
  );
}

export default MealLog;
