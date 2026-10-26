import { useMemo, useState } from "react";

import Sidebar from "../components/shared/Sidebar";
import ExerciseHeader from "../components/exercises/ExerciseHeader";
import ExerciseSearch from "../components/exercises/ExerciseSearch";
import ExerciseFilters from "../components/exercises/ExerciseFilters";
import ExerciseCard from "../components/exercises/ExerciseCard";
import ExerciseModal from "../components/exercises/ExerciseModal";

import exercises from "../data/exercises";

import "../styles/exercises/Exercises.css";

function Exercises({ isDark, setIsDark }) {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [equipment, setEquipment] = useState("All");
  const [selectedExercise, setSelectedExercise] = useState(null);

  const filteredExercises = useMemo(() => {
    const searchTerm = input.trim().toLowerCase();

    return exercises.filter((exercise) => {
      const matchesSearch =
        !searchTerm ||
        exercise.name.toLowerCase().includes(searchTerm) ||
        exercise.category.toLowerCase().includes(searchTerm) ||
        exercise.primaryMuscle.toLowerCase().includes(searchTerm) ||
        exercise.equipment.toLowerCase().includes(searchTerm) ||
        exercise.secondaryMuscles.some((muscle) =>
          muscle.toLowerCase().includes(searchTerm)
        );

      const matchesCategory =
        category === "All" || exercise.category === category;

      const matchesDifficulty =
        difficulty === "All" || exercise.difficulty === difficulty;

      const matchesEquipment =
        equipment === "All" || exercise.equipment === equipment;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDifficulty &&
        matchesEquipment
      );
    });


  }, [input, category, difficulty, equipment]);

  const resetFilters = () => {
    setInput("");
    setCategory("All");
    setDifficulty("All");
    setEquipment("All");
  };

  return (<div className="exercises-page"> <Sidebar isDark={isDark} setIsDark={setIsDark} />

    <main className="exercises-main">
      <div className="exercises-container">
        <ExerciseHeader
          exerciseCount={filteredExercises.length}
          totalCount={exercises.length}
        />

        <section
          className="exercises-toolbar"
          aria-label="Exercise search and filters"
        >
          <ExerciseSearch input={input} setInput={setInput} />

          <ExerciseFilters
            category={category}
            setCategory={setCategory}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            equipment={equipment}
            setEquipment={setEquipment}
            resetFilters={resetFilters}
          />
        </section>

        <div className="exercises-results-heading">
          <h2>Explore Exercises</h2>

          <p>
            Showing <strong>{filteredExercises.length}</strong> of{" "}
            <strong>{exercises.length}</strong> exercises
          </p>
        </div>

        {filteredExercises.length > 0 ? (
          <div className="exercises-grid">
            {filteredExercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                onClick={setSelectedExercise}
              />
            ))}
          </div>
        ) : (
          <div className="exercises-empty">
            <span
              className="exercises-empty-icon"
              aria-hidden="true"
            >
              &#9906;
            </span>

            <h3>No exercises found</h3>

            <p>
              Try another search term or adjust your filters to find an
              exercise.
            </p>

            <button type="button" onClick={resetFilters}>
              Clear Search &amp; Filters
            </button>
          </div>
        )}
      </div>
    </main>

    <ExerciseModal
      exercise={selectedExercise}
      onClose={() => setSelectedExercise(null)}
    />
  </div>


  );
}

export default Exercises;
