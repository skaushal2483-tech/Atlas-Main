import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/dashboard/PersonalRecords.css";

const STORAGE_KEY = "atlas_personal_records";

const FIXED_EXERCISES = [
  { name: "Squat", key: "squat" },
  { name: "Bench Press", key: "bench press" },
  { name: "Deadlift", key: "deadlift" },
];

function PersonalRecords() {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const loadRecords = () => {
      try {
        const savedRecords = localStorage.getItem(STORAGE_KEY);

        if (!savedRecords) {
          setRecords([]);
          return;
        }

        const parsedRecords = JSON.parse(savedRecords);

        setRecords(
          Array.isArray(parsedRecords) ? parsedRecords : []
        );
      } catch (error) {
        console.error("Failed to load personal records:", error);
        setRecords([]);
      }
    };

    loadRecords();

    window.addEventListener("storage", loadRecords);
    window.addEventListener("focus", loadRecords);

    return () => {
      window.removeEventListener("storage", loadRecords);
      window.removeEventListener("focus", loadRecords);
    };
  }, []);

  // Find the highest recorded weight for each fixed exercise.
  const dashboardRecords = FIXED_EXERCISES.map((exercise) => {
    const matchingRecords = records.filter(
      (record) =>
        record.exercise?.trim().toLowerCase() === exercise.key
    );

    const bestRecord = matchingRecords.reduce(
      (best, current) => {
        if (!best) return current;

        return Number(current.weight) > Number(best.weight)
          ? current
          : best;
      },
      null
    );

    return {
      ...exercise,
      record: bestRecord,
    };
  });

  return (
    <section className="personal-records">
      <div className="personal-records-header">
        <div className="records-heading">
          <span>PERSONAL RECORDS</span>
          <h2>Strength Standards</h2>
        </div>

        <button
          type="button"
          className="records-view"
          onClick={() => navigate("/pr")}
        >
          View All
          <span>→</span>
        </button>
      </div>

      <div className="records-grid">
        {dashboardRecords.map(({ name, key, record }) => {
          const badge = record
            ? record.recordType === "rm"
              ? `${record.rmValue} RM`
              : `${record.reps} REPS`
            : "NO PR";

          return (
            <div className="record-card" key={key}>
              <div className="record-card-top">
                <span className="record-label">{name}</span>

                <span className="record-badge">{badge}</span>
              </div>

              <div className="record-value">
                <strong>
                  {record ? record.weight : "0"}
                </strong>

                <span>KG</span>
              </div>

              <div className="record-divider" />

              <p>
                Personal Record
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PersonalRecords;
