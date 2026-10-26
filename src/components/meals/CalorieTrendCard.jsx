import "../../styles/meals/CalorieTrendCard.css";

function CalorieTrendCard() {
  return (
    <section className="calorie-trend-card">
      <div className="calorie-trend-heading">
        <span className="calorie-trend-eyebrow">
          FUEL YOUR PROGRESS
        </span>


        <h2>
          Calorie <span>Intake</span>
        </h2>
      </div>

      <div className="calorie-trend-placeholder">
        <span className="calorie-trend-coming-soon">
          COMING SOON...
        </span>
      </div>
    </section>

  );
}

export default CalorieTrendCard;
