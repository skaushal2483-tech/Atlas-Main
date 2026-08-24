import { useEffect, useState } from "react";
import "../../styles/landing/Stats.css";

function Stats() {
  const [users, setUsers] = useState(0);
  const [success, setSuccess] = useState(0);
  const [exercises, setExercises] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const start = Date.now();

    const timer = setInterval(() => {
      const progress = Math.min(
        (Date.now() - start) / duration,
        1
      );

      setUsers(Math.floor(1000 * progress));
      setSuccess(Math.floor(95 * progress));
      setExercises(Math.floor(100 * progress));

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="stats">
      <div className="stat">
        <h2>{users.toLocaleString()}+</h2>
        <p>Users</p>
      </div>

      <div className="stat">
        <h2>{success}%</h2>
        <p>Success Rate</p>
      </div>

      <div className="stat">
        <h2>{exercises}+</h2>
        <p>Exercises</p>
      </div>
    </section>
  );
}

export default Stats;