import "../../styles/exercises/ExerciseHeader.css";

function ExerciseHeader() {
  return (
    <header className="exercise-header">
      <div className="exercise-header-eyebrow">
        <span className="exercise-header-eyebrow-line" />
        <span>THE ART OF GETTING STRONGER</span>
        <span className="exercise-header-eyebrow-line" />
      </div>

      <h1 className="exercise-header-title">
        Exercise
        <span className="exercise-header-title-second">Library</span>
      </h1>

      <p className="exercise-header-description">
        A curated collection of movements to build strength,
        <br className="exercise-header-desktop-break" />
        master your technique, and push your limits.
      </p>

      <div className="exercise-header-divider" aria-hidden="true">
        <span className="exercise-header-divider-line" />
        <span className="exercise-header-divider-mark" />
        <span className="exercise-header-divider-line" />
      </div>
    </header>
  );
}

export default ExerciseHeader;
