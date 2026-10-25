import { useMemo, useState } from "react";

import Sidebar from "../components/shared/Sidebar";
import ExerciseHeader from "../components/exercises/ExerciseHeader";
import ExerciseSearch from "../components/exercises/ExerciseSearch";
import ExerciseFilters from "../components/exercises/ExerciseFilters";

import exercises from "../data/exercises";

import "../styles/exercises/Exercises.css";

function Exercises({ isDark, setIsDark }) {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [equipment, setEquipment] = useState("All");

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
        category === "All" || category === "All Categories" ||
        exercise.category === category;

      const matchesDifficulty =
        difficulty === "All" || difficulty === "All Levels" ||
        exercise.difficulty === difficulty;

      const matchesEquipment =
        equipment === "All" || equipment === "All Equipment" ||
        exercise.equipment === equipment;

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

  return (
    <div className="exercises-page">
      <Sidebar isDark={isDark} setIsDark={setIsDark} />

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
            <ExerciseSearch
              input={input}
              setInput={setInput}
            />

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

          {/* Temporary table for testing search and filters */}
          <div className="exercises-results-heading">
            <h2>Test Exercise Results</h2>

            <p>
              Showing <strong>{filteredExercises.length}</strong> of{" "}
              <strong>{exercises.length}</strong> exercises
            </p>
          </div>

          {filteredExercises.length > 0 ? (
            <div className="exercise-test-table-wrapper">
              <table className="exercise-test-table">
                <thead>
                  <tr>
                    <th>Exercise</th>
                    <th>Category</th>
                    <th>Primary Muscle</th>
                    <th>Difficulty</th>
                    <th>Equipment</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredExercises.map((exercise) => (
                    <tr key={exercise.id}>
                      <td>{exercise.name}</td>
                      <td>{exercise.category}</td>
                      <td>{exercise.primaryMuscle}</td>
                      <td>
                        <span
                          className={`exercise-test-difficulty ${
                            exercise.difficulty?.toLowerCase() || "beginner"
                          }`}
                        >
                          {exercise.difficulty}
                        </span>
                      </td>
                      <td>{exercise.equipment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="exercises-empty">
              <h3>No exercises found</h3>

              <p>
                Try another search term or adjust your filters.
              </p>

              <button type="button" onClick={resetFilters}>
                Clear Search &amp; Filters
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Exercises;
