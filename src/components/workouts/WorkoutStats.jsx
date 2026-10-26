import "../../styles/workouts/WorkoutStats.css";

function WorkoutStats({ workouts = [] }) {
  const totalWorkouts = workouts.length;

  const totalExercises = workouts.reduce(
    (total, workout) => {
      const exercises = Array.isArray(workout.exercises)
        ? workout.exercises
        : [];

      return total + exercises.length;
    },
    0
  );

  const totalSets = workouts.reduce(
    (total, workout) => {
      const exercises = Array.isArray(workout.exercises)
        ? workout.exercises
        : [];

      return (
        total +
        exercises.reduce((sum, exercise) => {
          if (Array.isArray(exercise.sets)) {
            return sum + exercise.sets.length;
          }

          return sum + Math.max(0, Number(exercise.sets) || 0);
        }, 0)
      );
    },
    0
  );

  const totalVolume = workouts.reduce(
    (total, workout) => {
      const exercises = Array.isArray(workout.exercises)
        ? workout.exercises
        : [];

      return (
        total +
        exercises.reduce((sum, exercise) => {
          if (Array.isArray(exercise.sets)) {
            const exerciseVolume = exercise.sets.reduce(
              (setTotal, set) => {
                const weight = Number(set.weight);
                const reps = Number(set.reps);

                if (
                  set.weight === "" ||
                  set.weight == null ||
                  set.reps === "" ||
                  set.reps == null ||
                  !Number.isFinite(weight) ||
                  !Number.isFinite(reps)
                ) {
                  return setTotal;
                }

                return setTotal + weight * reps;
              },
              0
            );

            return sum + exerciseVolume;
          }

          // Support older saved workouts.
          const sets = Math.max(
            0,
            Number(exercise.sets) || 0
          );

          const reps = Math.max(
            0,
            Number(exercise.reps) || 0
          );

          const weight = Math.max(
            0,
            Number(exercise.weight) || 0
          );

          return sum + sets * reps * weight;
        }, 0)
      );
    },
    0
  );

  const stats = [
    {
      id: "workouts",
      value: totalWorkouts.toLocaleString(),
      label: "Workouts Completed",
    },
    {
      id: "exercises",
      value: totalExercises.toLocaleString(),
      label: "Exercises Performed",
    },
    {
      id: "sets",
      value: totalSets.toLocaleString(),
      label: "Total Sets",
    },
    {
      id: "volume",
      value: `${totalVolume.toLocaleString()} kg`,
      label: "Training Volume",
    },
  ];

  return (
    <section className="workout-stats">
      <header className="workout-stats-header">
        <span className="workout-stats-line" />

        <h2>Your Progress</h2>

        <span className="workout-stats-line" />
      </header>

      <div className="workout-stats-grid">
        {stats.map((stat) => (
          <article
            className="workout-stat-card"
            key={stat.id}
          >
            <h3 className="workout-stat-value">
              {stat.value}
            </h3>

            <p className="workout-stat-label">
              {stat.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WorkoutStats;
