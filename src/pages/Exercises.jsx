import { useEffect, useMemo, useState } from "react";

import Sidebar from "../components/shared/Sidebar";
import ExerciseHeader from "../components/exercises/ExerciseHeader";
import ExerciseSearch from "../components/exercises/ExerciseSearch";
import ExerciseFilters from "../components/exercises/ExerciseFilters";
import ExerciseCard from "../components/exercises/ExerciseCard";
import ExerciseModal from "../components/exercises/ExerciseModal";

import "../styles/exercises/Exercises.css";
import { useTheme } from "../context/ThemeContext";

function Exercises() {
  const { isDark, setIsDark } = useTheme();

  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [input, setInput] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [equipment, setEquipment] = useState("All");
  const [selectedExercise, setSelectedExercise] = useState(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch("http://localhost:3001/exercises");

        if (!response.ok) {
          throw new Error("Failed to fetch exercises. Please try again.");
        }

        const data = await response.json();
        setExercises(data);
      } catch (err) {
        setError(
          err.message ||
            "Unable to load exercises. Make sure JSON Server is running."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  const filteredExercises = useMemo(() => {
    const searchTerm = input.trim().toLowerCase();

    return exercises.filter((exercise) => {
      const matchesSearch =
        !searchTerm ||
        exercise.name.toLowerCase().includes(searchTerm) ||
        exercise.category.toLowerCase().includes(searchTerm) ||
        exercise.primaryMuscle.toLowerCase().includes(searchTerm) ||
        exercise.equipment.toLowerCase().includes(searchTerm) ||
        (exercise.secondaryMuscles || []).some((muscle) =>
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
  }, [exercises, input, category, difficulty, equipment]);

  const resetFilters = () => {
    setInput("");
    setCategory("All");
    setDifficulty("All");
    setEquipment("All");
  };

  return (
    <div className="exercises-page">
      <Sidebar />

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

          {loading ? (
            <div className="exercises-empty">
              <h3>Loading exercises...</h3>
              <p>Please wait while we load your exercise library.</p>
            </div>
          ) : error ? (
            <div className="exercises-empty">
              <h3>Unable to load exercises</h3>
              <p>{error}</p>
              <p>
                Make sure JSON Server is running on port 3001 and try
                refreshing the page.
              </p>
            </div>
          ) : filteredExercises.length > 0 ? (
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
              <span className="exercises-empty-icon" aria-hidden="true">
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
