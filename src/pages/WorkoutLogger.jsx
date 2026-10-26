import { useEffect, useState } from "react";

import Sidebar from "../components/shared/Sidebar";
import WorkoutStats from "../components/workouts/WorkoutStats";

import "../styles/workouts/WorkoutLogger.css";

const STORAGE_KEY = "atlas_workout_logs";

function WorkoutLogger({ isDark, setIsDark }) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    try {
      const storedWorkouts = localStorage.getItem(STORAGE_KEY);

      if (storedWorkouts) {
        const parsedWorkouts = JSON.parse(storedWorkouts);

        if (Array.isArray(parsedWorkouts)) {
          setWorkouts(parsedWorkouts);
        }
      }
    } catch (error) {
      console.error("Failed to load workouts:", error);
    }
  }, []);

  return (
    <div className="workout-logger-page">
      <Sidebar isDark={isDark} setIsDark={setIsDark} />

      <main className="workout-logger-main">
        <div className="workout-logger-container">
          <header className="workout-logger-header">
            <p className="workout-logger-eyebrow">
              <span className="workout-logger-eyebrow-line" />
              YOUR FITNESS JOURNEY
              <span className="workout-logger-eyebrow-line" />
            </p>

            <h1 className="workout-logger-title">
              Carry Your
              <span className="workout-logger-title-accent">
                Ambition.
              </span>
            </h1>

            <p className="workout-logger-subtitle">
              Every rep counts. Keep showing up.
            </p>

            <div className="workout-logger-divider">
              <span className="workout-logger-divider-line" />
              <span className="workout-logger-divider-mark" />
              <span className="workout-logger-divider-line" />
            </div>
          </header>

          <section className="workout-logger-overview">
            <WorkoutStats workouts={workouts} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default WorkoutLogger;
