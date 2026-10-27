import "../../styles/meals/DayLogCard.css";

function DayLogCard({ log, onClick }) {
  const formattedDate = new Date(
    `${log.date}T12:00:00`
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const foods = (log.meals || []).flatMap((meal) =>
    Array.isArray(meal.foods) ? meal.foods : []
  );

  const totals = foods.reduce(
    (total, food) => ({
      calories: total.calories + (Number(food.calories) || 0),
      protein: total.protein + (Number(food.protein) || 0),
      carbs: total.carbs + (Number(food.carbs) || 0),
      fats: total.fats + (Number(food.fats) || 0),
    }),
    { calories: 0, protein: 0, carbs: 0, fats: 0 }
  );

  return (
    <button
      type="button"
      className="day-log-card"
      onClick={() => onClick(log)}
    >
      <div className="day-log-card-header">
        <span className="day-log-card-label">DAILY LOG</span>
        <span className="day-log-card-date">{formattedDate}</span>
      </div>

      <div className="day-log-card-calories">
        <span className="day-log-card-caption">CALORIES CONSUMED</span>

        <div className="day-log-card-calorie-value">
          <strong>{Math.round(totals.calories).toLocaleString()}</strong>
          <span>kcal</span>
        </div>

        <div className="day-log-card-calorie-line" />
      </div>

      <div className="day-log-card-macros">
        <div className="day-log-card-macro">
          <span>PROTEIN</span>
          <strong>{Math.round(totals.protein)}<small> g</small></strong>
        </div>

        <div className="day-log-card-macro">
          <span>CARBS</span>
          <strong>{Math.round(totals.carbs)}<small> g</small></strong>
        </div>

        <div className="day-log-card-macro">
          <span>FATS</span>
          <strong>{Math.round(totals.fats)}<small> g</small></strong>
        </div>
      </div>
    </button>
  );
}

export default DayLogCard;
