import AddLogCard from "./AddLogCard";
import DayLogCard from "./DayLogCard";
import "../../styles/meals/YourJourney.css";

function YourJourney({ logs = [], onAddLog, onOpenLog }) {
  const sortedLogs = [...logs].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="your-journey">
      <header className="your-journey-header">

        <h2 className="your-journey-title">
          Nutrition <span>Journal</span>
        </h2>

        <p className="your-journey-subtitle">
          A little better every day.
        </p>

        {logs.length > 0 && (
          <span className="your-journey-count">
            {logs.length} {logs.length === 1 ? "DAY" : "DAYS"} LOGGED
          </span>
        )}

        <div className="your-journey-divider" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </header>

      <div className="your-journey-grid">
        <AddLogCard onClick={onAddLog} />

        {sortedLogs.map((log) => (
          <DayLogCard
            key={log.date}
            log={log}
            onClick={onOpenLog}
          />
        ))}
      </div>
    </section>

  );
}

export default YourJourney;
