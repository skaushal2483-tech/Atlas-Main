import "../../styles/meals/NutritionSummary.css";

const nutritionItems = [
  {
    key: "calories",
    label: "Calories",
    unit: "kcal",
    icon: "🔥",
  },
  {
    key: "protein",
    label: "Protein",
    unit: "g",
    icon: "💪",
  },
  {
    key: "carbs",
    label: "Carbs",
    unit: "g",
    icon: "🌾",
  },
  {
    key: "fats",
    label: "Fats",
    unit: "g",
    icon: "🥑",
  },
];

function NutritionSummary({
  totals,
  targets,
  onEditTargets,
}) {
  return (
    <section className="nutrition-summary">
      <div className="nutrition-summary-grid">
        {nutritionItems.map((item) => {
          const consumed = Number(totals?.[item.key]) || 0;
          const target = Number(targets?.[item.key]) || 0;

          const progress =
            target > 0
              ? Math.min((consumed / target) * 100, 100)
              : 0;

          return (
            <article
              className="nutrition-summary-card"
              key={item.key}
            >
              <div className="nutrition-summary-card-top">
                <span className="nutrition-summary-icon">
                  {item.icon}
                </span>

                <span className="nutrition-summary-label">
                  {item.label}
                </span>
              </div>

              <div className="nutrition-summary-values">
                <span className="nutrition-summary-consumed">
                  {consumed.toLocaleString()}
                </span>

                <span className="nutrition-summary-separator">
                  /
                </span>

                <span className="nutrition-summary-target">
                  {target.toLocaleString()}
                </span>

                <span className="nutrition-summary-unit">
                  {item.unit}
                </span>
              </div>

              <div
                className="nutrition-summary-progress-track"
                role="progressbar"
                aria-label={`${item.label} progress`}
                aria-valuemin={0}
                aria-valuemax={target || 100}
                aria-valuenow={Math.min(consumed, target || 0)}
              >
                <div
                  className="nutrition-summary-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="nutrition-summary-caption">
                {target > 0
                  ? `${Math.round(progress)}% of daily target`
                  : "Set a daily target"}
              </p>
            </article>
          );
        })}
      </div>

      <div className="nutrition-summary-actions">
        <button
          type="button"
          className="nutrition-summary-edit-button"
          onClick={onEditTargets}
        >
          <span aria-hidden="true">✎</span>
          Add / Edit Targets
        </button>
      </div>
    </section>

  );
}

export default NutritionSummary;
