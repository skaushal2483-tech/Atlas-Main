import "../../styles/exercises/ExerciseSearch.css";

function ExerciseSearch({ input, setInput }) {
  return (<div className="exercise-search"> <span className="exercise-search-icon" aria-hidden="true">
    ⚲ </span>

    <input
      type="text"
      placeholder="Search exercises..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      aria-label="Search exercises"
    />

    {input && (
      <button
        type="button"
        className="exercise-search-clear"
        onClick={() => setInput("")}
        aria-label="Clear search"
      >
        &times;
      </button>
    )}
  </div>

  );
}

export default ExerciseSearch;
