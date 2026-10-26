import { useEffect, useState } from "react";
import "../../styles/workouts/WorkoutModal.css";

const createId = (prefix) =>
  `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

const createSet = (number = 1) => ({
  id: createId("set"),
  number,
  weight: "",
  reps: "",
});

const createExercise = () => ({
  id: createId("exercise"),
  name: "",
  primaryMuscle: "",
  sets: [createSet()],
});

function normalizeExercise(exercise, exerciseIndex) {
  const previousSets = Array.isArray(exercise.sets)
    ? exercise.sets
    : [
        {
          weight: exercise.weight ?? "",
          reps: exercise.reps ?? "",
        },
      ];

  return {
    id: exercise.id ?? createId(`exercise-${exerciseIndex}`),
    name: exercise.name || "",
    primaryMuscle:
      exercise.primaryMuscle || exercise.category || "",
    sets: previousSets.map((set, setIndex) => ({
      id: set.id ?? createId(`set-${exerciseIndex}-${setIndex}`),
      number: setIndex + 1,
      weight: set.weight ?? "",
      reps: set.reps ?? "",
    })),
  };
}

function WorkoutModal({
  isOpen,
  onClose,
  onSave,
  workout = null,
}) {
  const [workoutName, setWorkoutName] = useState("");
  const [workoutDate, setWorkoutDate] = useState("");
  const [exercises, setExercises] = useState([]);

  const isEditing = Boolean(workout);

  // Initialize the form when opening or switching workouts.
  useEffect(() => {
    if (!isOpen) return;

    if (workout) {
      setWorkoutName(workout.name || "");
      setWorkoutDate(workout.date || "");

      setExercises(
        Array.isArray(workout.exercises) &&
          workout.exercises.length > 0
          ? workout.exercises.map(normalizeExercise)
          : [createExercise()]
      );
    } else {
      setWorkoutName("");
      setWorkoutDate("");
      setExercises([createExercise()]);
    }
  }, [isOpen, workout]);

  if (!isOpen) return null;

  // -----------------------------------------
  // EXERCISE ACTIONS
  // -----------------------------------------

  const handleAddExercise = () => {
    setExercises((previous) => [
      ...previous,
      createExercise(),
    ]);
  };

  const handleRemoveExercise = (exerciseId) => {
    setExercises((previous) =>
      previous.filter((exercise) => exercise.id !== exerciseId)
    );
  };

  const handleExerciseChange = (exerciseId, field, value) => {
    setExercises((previous) =>
      previous.map((exercise) =>
        exercise.id === exerciseId
          ? { ...exercise, [field]: value }
          : exercise
      )
    );
  };

  // -----------------------------------------
  // SET ACTIONS
  // -----------------------------------------

  const handleAddSet = (exerciseId) => {
    setExercises((previous) =>
      previous.map((exercise) => {
        if (exercise.id !== exerciseId) return exercise;

        return {
          ...exercise,
          sets: [
            ...exercise.sets,
            createSet(exercise.sets.length + 1),
          ],
        };
      })
    );
  };

  const handleRemoveSet = (exerciseId, setId) => {
    setExercises((previous) =>
      previous.map((exercise) => {
        if (exercise.id !== exerciseId) return exercise;

        const remainingSets = exercise.sets.filter(
          (set) => set.id !== setId
        );

        return {
          ...exercise,
          sets: remainingSets.map((set, index) => ({
            ...set,
            number: index + 1,
          })),
        };
      })
    );
  };

  const handleSetChange = (
    exerciseId,
    setId,
    field,
    value
  ) => {
    setExercises((previous) =>
      previous.map((exercise) => {
        if (exercise.id !== exerciseId) return exercise;

        return {
          ...exercise,
          sets: exercise.sets.map((set) =>
            set.id === setId
              ? { ...set, [field]: value }
              : set
          ),
        };
      })
    );
  };

  // -----------------------------------------
  // VALIDATION AND SAVE
  // -----------------------------------------

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!workoutName.trim()) {
      window.alert("Please enter a workout name.");
      return;
    }

    if (!workoutDate.trim()) {
      window.alert("Please enter a workout date.");
      return;
    }

    // Ignore exercise cards that have not been named.
    const validExercises = exercises.filter(
      (exercise) => exercise.name.trim()
    );

    if (validExercises.length === 0) {
      window.alert("Please enter at least one exercise name.");
      return;
    }

    for (const exercise of validExercises) {
      if (exercise.sets.length === 0) {
        window.alert(
          `Please add at least one set to ${exercise.name}.`
        );
        return;
      }

      for (const set of exercise.sets) {
        const weight = Number(set.weight);
        const reps = Number(set.reps);

        if (
          set.weight === "" ||
          set.reps === "" ||
          !Number.isFinite(weight) ||
          !Number.isFinite(reps) ||
          weight < 0 ||
          reps < 1
        ) {
          window.alert(
            `Enter a valid weight and rep count for ${exercise.name}, set ${set.number}.`
          );
          return;
        }
      }
    }

    const savedWorkout = {
      ...(workout || {}),
      id: workout?.id || createId("workout"),
      name: workoutName.trim(),
      date: workoutDate.trim(),

      exercises: validExercises.map((exercise) => ({
        ...exercise,
        name: exercise.name.trim(),
        primaryMuscle: exercise.primaryMuscle.trim(),

        sets: exercise.sets.map((set, index) => ({
          id: set.id,
          number: index + 1,
          weight: Number(set.weight),
          reps: Number(set.reps),
        })),
      })),

      createdAt:
        workout?.createdAt || new Date().toISOString(),
    };

    onSave(savedWorkout);
  };

  // -----------------------------------------
  // MODAL UI
  // -----------------------------------------

  return (
    // No backdrop click handler: clicking outside will not close the modal.
    <div className="workout-modal-overlay">
      <section
        className="workout-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="workout-modal-title"
      >
        {/* The cross is the only close control. */}
        <button
          type="button"
          className="workout-modal-close"
          onClick={onClose}
          aria-label="Close workout modal"
        >
          ×
        </button>

        <form
          className="workout-modal-form"
          onSubmit={handleSubmit}
        >
          {/* Single centered heading */}

          <header className="workout-modal-header">
            <h2 id="workout-modal-title">
              {isEditing ? "EDIT WORKOUT" : "CREATE WORKOUT"}
            </h2>
          </header>

          {/* Workout name and manually entered date */}

          <section className="workout-modal-details">
            <label className="workout-modal-field">
              <span className="sr-only">Workout name</span>

              <input
                type="text"
                value={workoutName}
                onChange={(event) =>
                  setWorkoutName(event.target.value)
                }
                placeholder="Workout name"
                aria-label="Workout name"
                autoComplete="off"
                required
              />
            </label>

            <label className="workout-modal-field">
              <span className="sr-only">Workout date</span>

              <input
                type="text"
                value={workoutDate}
                onChange={(event) =>
                  setWorkoutDate(event.target.value)
                }
                placeholder="DD-MM-YYYY"
                aria-label="Workout date"
                autoComplete="off"
                required
              />
            </label>
          </section>

          {/* Exercise cards */}

          <section className="workout-modal-exercises">
            {exercises.map((exercise, exerciseIndex) => (
              <article
                className="workout-exercise-card"
                key={exercise.id}
              >
                <header className="workout-exercise-header">
                  <span className="workout-exercise-eyebrow">
                    EXERCISE{" "}
                    {String(exerciseIndex + 1).padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    className="workout-exercise-remove"
                    onClick={() =>
                      handleRemoveExercise(exercise.id)
                    }
                    aria-label={`Remove ${
                      exercise.name ||
                      `exercise ${exerciseIndex + 1}`
                    }`}
                    title="Remove exercise"
                  >
                    ×
                  </button>
                </header>

                {/* Exercise name and muscle group */}

                <div className="workout-exercise-details">
                  <label className="workout-modal-field">
                    <span className="sr-only">
                      Exercise name
                    </span>

                    <input
                      type="text"
                      value={exercise.name}
                      onChange={(event) =>
                        handleExerciseChange(
                          exercise.id,
                          "name",
                          event.target.value
                        )
                      }
                      placeholder="Exercise name"
                      aria-label={`Exercise ${exerciseIndex + 1} name`}
                      autoComplete="off"
                    />
                  </label>

                  <label className="workout-modal-field">
                    <span className="sr-only">
                      Muscle group
                    </span>

                    <input
                      type="text"
                      value={exercise.primaryMuscle}
                      onChange={(event) =>
                        handleExerciseChange(
                          exercise.id,
                          "primaryMuscle",
                          event.target.value
                        )
                      }
                      placeholder="Muscle group"
                      aria-label={`Exercise ${exerciseIndex + 1} muscle group`}
                      autoComplete="off"
                    />
                  </label>
                </div>

                {/* Set headings */}

                <div className="workout-set-heading">
                  <span>SET</span>
                  <span>WEIGHT (KG)</span>
                  <span>REPS</span>
                  <span aria-hidden="true" />
                </div>

                {/* Individual sets */}

                <div className="workout-set-list">
                  {exercise.sets.map((set) => (
                    <div
                      className="workout-set-row"
                      key={set.id}
                    >
                      <span className="workout-set-number">
                        {String(set.number).padStart(2, "0")}
                      </span>

                      <input
                        type="number"
                        min="0"
                        step="any"
                        value={set.weight}
                        onChange={(event) =>
                          handleSetChange(
                            exercise.id,
                            set.id,
                            "weight",
                            event.target.value
                          )
                        }
                        placeholder="Weight"
                        aria-label={`Set ${set.number} weight in kg`}
                        required
                      />

                      <input
                        type="number"
                        min="1"
                        step="1"
                        value={set.reps}
                        onChange={(event) =>
                          handleSetChange(
                            exercise.id,
                            set.id,
                            "reps",
                            event.target.value
                          )
                        }
                        placeholder="Reps"
                        aria-label={`Set ${set.number} reps`}
                        required
                      />

                      <button
                        type="button"
                        className="workout-set-remove"
                        onClick={() =>
                          handleRemoveSet(exercise.id, set.id)
                        }
                        disabled={exercise.sets.length === 1}
                        aria-label={`Remove set ${set.number}`}
                        title="Remove set"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>

                {/* Add set */}

                <button
                  type="button"
                  className="workout-add-set"
                  onClick={() => handleAddSet(exercise.id)}
                >
                  <span aria-hidden="true">+</span>
                  Add Set
                </button>
              </article>
            ))}
          </section>

          {/* Add exercise */}

          <button
            type="button"
            className="workout-add-exercise"
            onClick={handleAddExercise}
          >
            <span aria-hidden="true">+</span>
            Add Exercise
          </button>

          {/* Centered save button */}

          <footer className="workout-modal-footer">
            <button
              type="submit"
              className="workout-modal-save"
            >
              {isEditing ? "Save Changes" : "Save Workout"}
            </button>
          </footer>
        </form>
      </section>
    </div>
  );
}

export default WorkoutModal;
