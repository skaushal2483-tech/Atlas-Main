import "../../styles/exercises/ExerciseCard.css";

function ExerciseCard({ exercise, onClick }) {
    const difficultyClass = exercise.difficulty?.toLowerCase() || "beginner";

    return (
        <article
            className="exercise-card"
            onClick={() => onClick(exercise)}
            role="button"
            tabIndex={0}
            aria-label={`View details for ${exercise.name}`}
        > <div className="exercise-card-image"> <img
            src={exercise.image}
            alt={exercise.name}
            loading="lazy"
        />


                <span className="exercise-card-category">
                    {exercise.category}
                </span>
            </div>

            <div className="exercise-card-content">
                <h3 className="exercise-card-title">
                    {exercise.name}
                </h3>

                <span className={`exercise-card-difficulty ${difficultyClass}`}>
                    <span className="exercise-card-difficulty-dot" />
                    {exercise.difficulty}
                </span>
            </div>
        </article>

    );
}

export default ExerciseCard;
