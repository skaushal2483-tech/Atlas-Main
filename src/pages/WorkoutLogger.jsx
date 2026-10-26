import { useEffect, useState } from "react";

import Sidebar from "../components/shared/Sidebar";
import WorkoutStats from "../components/workouts/WorkoutStats";
import AddWorkoutCard from "../components/workouts/AddWorkoutCard";
import WorkoutModal from "../components/workouts/WorkoutModal";

import "../styles/workouts/WorkoutLogger.css";

const STORAGE_KEY = "atlas_workout_logs";

function WorkoutLogger({ isDark, setIsDark }) {
  const [workouts, setWorkouts] = useState([]);
  const [hasLoadedWorkouts, setHasLoadedWorkouts] = useState(false);

  const [isWorkoutModalOpen, setIsWorkoutModalOpen] = useState(false);

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
    } finally {
      setHasLoadedWorkouts(true);
    }
  }, []);

  useEffect(() => {
    if (!hasLoadedWorkouts) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(workouts));
    } catch (error) {
      console.error("Failed to save workouts:", error);
    }
  }, [workouts, hasLoadedWorkouts]);

  const handleOpenCreateModal = () => {
    setIsWorkoutModalOpen(true);
  };

  const handleCloseWorkoutModal = () => {
    setIsWorkoutModalOpen(false);
  };

  // Save a newly created workout
  const handleSaveWorkout = (savedWorkout) => {
    setWorkouts((previousWorkouts) => {
      const exists = previousWorkouts.some(
        (workout) => workout.id === savedWorkout.id
      );

      if (exists) {
        return previousWorkouts.map((workout) =>
          workout.id === savedWorkout.id ? savedWorkout : workout
        );
      }

      return [savedWorkout, ...previousWorkouts];
    });

    handleCloseWorkoutModal();
  };

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

          <section className="workout-logger-library">
            <div className="workout-logger-section-heading">
              <div>
                <span className="workout-logger-section-eyebrow">
                  YOUR TRAINING
                </span>

                <h2>Your Workout Library</h2>

                <p className="workout-logger-section-description">
                  Track your progress, one workout at a time.
                </p>
              </div>
            </div>

            <div className="workout-library-divider">
              <span className="workout-library-divider-accent" />
            </div>

            <div className="workout-logger-grid">
              <AddWorkoutCard onClick={handleOpenCreateModal} />
            </div>
          </section>
        </div>
      </main>

      <WorkoutModal
        isOpen={isWorkoutModalOpen}
        onClose={handleCloseWorkoutModal}
        onSave={handleSaveWorkout}
        workout={null}
      />
    </div>
  );
}

export default WorkoutLogger;
