import { useEffect } from "react";
import "../../styles/exercises/ExerciseModal.css";

function ExerciseModal({ exercise, onClose }) {
useEffect(() => {
if (!exercise) return;

const handleKeyDown = (event) => {
  if (event.key === "Escape") {
    onClose();
  }
};

const previousOverflow = document.body.style.overflow;

document.addEventListener("keydown", handleKeyDown);
document.body.style.overflow = "hidden";

return () => {
  document.removeEventListener("keydown", handleKeyDown);
  document.body.style.overflow = previousOverflow;
};

}, [exercise, onClose]);

if (!exercise) return null;

const secondaryMuscles = exercise.secondaryMuscles || [];
const instructions = exercise.instructions || [];
const commonMistakes = exercise.commonMistakes || [];

const difficulty = exercise.difficulty?.toLowerCase() || "beginner";

return (
<div
className="exercise-modal-overlay"
onMouseDown={(event) => {
if (event.target === event.currentTarget) {
onClose();
}
}}
> <section
     className="exercise-modal"
     role="dialog"
     aria-modal="true"
     aria-labelledby="exercise-modal-title"
   >
{/* Exercise Image */} <div className="exercise-modal-image"> <img
         src={exercise.image}
         alt={exercise.name}
       />

      <span className="exercise-modal-category">
        {exercise.category}
      </span>
    </div>

    <div className="exercise-modal-content">
      {/* Exercise Introduction */}
      <header className="exercise-modal-heading">
        <span className="exercise-modal-eyebrow">
          EXERCISE LIBRARY
        </span>

        <h2 id="exercise-modal-title">
          {exercise.name}
        </h2>

        {exercise.description && (
          <p className="exercise-modal-description">
            {exercise.description}
          </p>
        )}

        <span
          className={`exercise-modal-difficulty ${difficulty}`}
        >
          <span className="exercise-modal-difficulty-dot" />
          {exercise.difficulty}
        </span>
      </header>

      {/* Exercise Details */}
      <div className="exercise-modal-meta">
        <div className="exercise-modal-meta-item">
          <span className="exercise-modal-meta-label">
            PRIMARY MUSCLE
          </span>

          <strong>{exercise.primaryMuscle}</strong>
        </div>

        <div className="exercise-modal-meta-item">
          <span className="exercise-modal-meta-label">
            EQUIPMENT
          </span>

          <strong>{exercise.equipment}</strong>
        </div>

        <div className="exercise-modal-meta-item">
          <span className="exercise-modal-meta-label">
            CATEGORY
          </span>

          <strong>{exercise.category}</strong>
        </div>
      </div>

      {/* Recommended Sets and Reps */}
      <section className="exercise-modal-training-section">
        <div className="exercise-modal-training">
          <div className="exercise-modal-training-item">
            <span className="exercise-modal-section-kicker">
              RECOMMENDED SETS
            </span>

            <strong>{exercise.recommendedSets}</strong>
          </div>

          <div className="exercise-modal-training-item">
            <span className="exercise-modal-section-kicker">
              RECOMMENDED REPS
            </span>

            <strong>{exercise.recommendedReps}</strong>
          </div>
        </div>
      </section>

      {/* Muscles Worked */}
      <section className="exercise-modal-muscles-section">
        <h3>Muscles Worked</h3>

        <div className="exercise-modal-muscles">
          {exercise.primaryMuscle && (
            <span className="exercise-modal-muscle-primary">
              {exercise.primaryMuscle}
            </span>
          )}

          {secondaryMuscles.map((muscle) => (
            <span key={muscle}>{muscle}</span>
          ))}
        </div>
      </section>

      {/* How to Perform */}
      <section className="exercise-modal-instructions-section">
        <div className="exercise-modal-section-heading">
          <span className="exercise-modal-section-kicker">
            STEP BY STEP
          </span>

          <h3>How to Perform</h3>
        </div>

        <ol className="exercise-modal-instructions">
          {instructions.map((instruction, index) => (
            <li key={`${index}-${instruction}`}>
              <span className="exercise-modal-step-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>{instruction}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Common Mistakes */}
      {commonMistakes.length > 0 && (
        <section className="exercise-modal-mistakes">
          <div className="exercise-modal-mistakes-heading">
            <span className="exercise-modal-section-kicker">
              KEEP YOUR FORM CLEAN
            </span>

            <h3>Common Mistakes</h3>
          </div>

          <ul>
            {commonMistakes.map((mistake, index) => (
              <li key={`${index}-${mistake}`}>
                {mistake}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  </section>
</div>


);
}

export default ExerciseModal;
