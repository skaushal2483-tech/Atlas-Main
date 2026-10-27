import "../../styles/workouts/WorkoutCard.css";

function WorkoutCard({ workout, onClick, onDelete }) {
  const exercises = Array.isArray(workout.exercises)
    ? workout.exercises
    : [];

  const totalSets = exercises.reduce((total, exercise) => {
    if (Array.isArray(exercise.sets)) {
      return total + exercise.sets.length;
    }

    return total + Math.max(0, Number(exercise.sets) || 0);
  }, 0);

  const totalVolume = exercises.reduce((total, exercise) => {
    if (Array.isArray(exercise.sets)) {
      return (
        total +
        exercise.sets.reduce((setTotal, set) => {
          const weight = Number(set.weight) || 0;
          const reps = Number(set.reps) || 0;

          return setTotal + weight * reps;
        }, 0)
      );
    }

    const sets = Math.max(0, Number(exercise.sets) || 0);
    const reps = Math.max(0, Number(exercise.reps) || 0);
    const weight = Math.max(0, Number(exercise.weight) || 0);

    return total + sets * reps * weight;
  }, 0);

  const formatVolume = (volume) => {
    return new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 1,
    }).format(volume);
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    onDelete?.(workout.id);
  };

  const handleKeyDown = (event) => {
    if (event.target !== event.currentTarget) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick?.(workout);
    }
  };

  return (
    <article
      className="workout-card"
      onClick={() => onClick?.(workout)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Edit workout: ${workout.name || "Untitled Workout"}`}
    >
      {onDelete && (
        <button
          type="button"
          className="workout-card-delete"
          onClick={handleDelete}
          aria-label={`Delete ${workout.name || "workout"}`}
          title="Delete workout"
        >
          ×
        </button>
      )}

      <div className="workout-card-content">
        <h3 className="workout-card-title">
          {workout.name || "Untitled Workout"}
        </h3>

        <div className="workout-card-volume">
          <span className="workout-card-volume-value">
            {formatVolume(totalVolume)}
          </span>

          <span className="workout-card-volume-unit">kg</span>
        </div>

        <span className="workout-card-volume-label">
          TOTAL VOLUME
        </span>

        <div className="workout-card-divider" />

        <div className="workout-card-stats">
          <div className="workout-card-stat">
            <span className="workout-card-stat-value">
              {exercises.length}
            </span>

            <span className="workout-card-stat-label">
              EXERCISES
            </span>
          </div>

          <div className="workout-card-stat-divider" />

          <div className="workout-card-stat">
            <span className="workout-card-stat-value">
              {totalSets}
            </span>

            <span className="workout-card-stat-label">
              TOTAL SETS
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default WorkoutCard;
