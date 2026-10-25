import Sidebar from "../components/shared/Sidebar";
import ExerciseHeader from "../components/exercises/ExerciseHeader";

import "../styles/exercises/Exercises.css";

function Exercises({ isDark, setIsDark }) {
  return (
    <div className="exercises-page">
      <Sidebar isDark={isDark} setIsDark={setIsDark} />

      <main className="exercises-main">
        <div className="exercises-container">
          <ExerciseHeader />
        </div>
      </main>
    </div>
  );
}

export default Exercises;
