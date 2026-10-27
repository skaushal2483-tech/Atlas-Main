import { useEffect, useState } from "react";
import Sidebar from "../components/shared/Sidebar";
import WorkoutStats from "../components/workouts/WorkoutStats";
import AddWorkoutCard from "../components/workouts/AddWorkoutCard";
import WorkoutCard from "../components/workouts/WorkoutCard";
import WorkoutModal from "../components/workouts/WorkoutModal";
import "../styles/workouts/WorkoutLogger.css";

const STORAGE_KEY = "atlas_workout_logs";

function WorkoutLogger({ isDark, setIsDark }) {
  const [workouts, setWorkouts] = useState([]);
  const [hasLoadedWorkouts, setHasLoadedWorkouts] = useState(false);

  const [isWorkoutModalOpen, setIsWorkoutModalOpen] = useState(false);
  const [workoutToEdit, setWorkoutToEdit] = useState(null);

  // Load saved workouts
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

  // Persist workouts without overwriting storage before initial loading
  useEffect(() => {
    if (!hasLoadedWorkouts) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(workouts));
    } catch (error) {
      console.error("Failed to save workouts:", error);
    }
  }, [workouts, hasLoadedWorkouts]);

  // Open a blank Create Workout modal
  const handleOpenCreateModal = () => {
    setWorkoutToEdit(null);
    setIsWorkoutModalOpen(true);
  };

  // Open the same modal in Edit mode
  const handleEditWorkout = (workout) => {
    setWorkoutToEdit(workout);
    setIsWorkoutModalOpen(true);
  };

  // Close modal and clear editing state
  const handleCloseWorkoutModal = () => {
    setIsWorkoutModalOpen(false);
    setWorkoutToEdit(null);
  };

  // Save new workout or update existing workout
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

  // Delete workout
  const handleDeleteWorkout = (workoutId) => {
    const workoutToDelete = workouts.find(
      (workout) => workout.id === workoutId
    );

    if (!workoutToDelete) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete "${workoutToDelete.name}"?`
    );

    if (!confirmed) return;

    setWorkouts((previousWorkouts) =>
      previousWorkouts.filter((workout) => workout.id !== workoutId)
    );

    if (workoutToEdit?.id === workoutId) {
      handleCloseWorkoutModal();
    }
  };

  // Parse workout dates for sorting
  const getWorkoutTimestamp = (dateString) => {
    if (!dateString) return 0;

    let parsedDate;

    if (/^\d{2}-\d{2}-\d{4}$/.test(dateString)) {
      const [day, month, year] = dateString.split("-").map(Number);
      parsedDate = new Date(year, month - 1, day);
    } else if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      const [year, month, day] = dateString.split("-").map(Number);
      parsedDate = new Date(year, month - 1, day);
    } else {
      parsedDate = new Date(dateString);
    }

    const timestamp = parsedDate.getTime();

    return Number.isNaN(timestamp) ? 0 : timestamp;
  };

  const sortedWorkouts = [...workouts].sort((a, b) => {
    const dateDifference =
      getWorkoutTimestamp(b.date) - getWorkoutTimestamp(a.date);

    if (dateDifference !== 0) return dateDifference;

    return (
      new Date(b.createdAt || 0).getTime() -
      new Date(a.createdAt || 0).getTime()
    );
  });

  return (
    <div className="workout-logger-page">
      <Sidebar isDark={isDark} setIsDark={setIsDark} />

      <main className="workout-logger-main">
        <div className="workout-logger-container">

          {/* Premium centered page header */}
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

          {/* Training statistics */}
          <section className="workout-logger-overview">
            <WorkoutStats workouts={workouts} />
          </section>

          {/* Centered workout library */}
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

              {sortedWorkouts.map((workout) => (
                <WorkoutCard
                  key={workout.id}
                  workout={workout}
                  onClick={handleEditWorkout}
                  onDelete={handleDeleteWorkout}
                />
              ))}
            </div>

          </section>
        </div>
      </main>

      {/* Shared create/edit modal */}
      <WorkoutModal
        isOpen={isWorkoutModalOpen}
        onClose={handleCloseWorkoutModal}
        onSave={handleSaveWorkout}
        workout={workoutToEdit}
      />
    </div>
  );
}

export default WorkoutLogger;
