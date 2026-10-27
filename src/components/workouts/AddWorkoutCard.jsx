import "../../styles/workouts/AddWorkoutCard.css";

function AddWorkoutCard({ onClick }) {
  return (
    <button
      type="button"
      className="add-workout-card"
      onClick={onClick}
      aria-label="Add a new workout"
    >
      <span className="add-workout-card-icon" aria-hidden="true">
        +
      </span>

      <span className="add-workout-card-title">
        Add Workout
      </span>
    </button>
  );
}

export default AddWorkoutCard;
