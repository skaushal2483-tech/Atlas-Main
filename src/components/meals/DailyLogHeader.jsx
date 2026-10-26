import "../../styles/meals/DailyLogHeader.css";

function DailyLogHeader({ date, onDateChange }) {
  return (
    <header className="daily-log-header">
      <div className="daily-log-heading">
        <span className="daily-log-eyebrow">YOUR NUTRITION</span>

        <h1>Daily Log</h1>

        <p>Track what you eat. Stay on target.</p>
      </div>

      <div className="daily-log-date">
        <label htmlFor="daily-log-date-input">SELECT DATE</label>

        <input
          id="daily-log-date-input"
          type="date"
          value={date || ""}
          onChange={(event) => onDateChange(event.target.value)}
        />
      </div>
    </header>
  );
}

export default DailyLogHeader;
