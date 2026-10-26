import "../../styles/meals/MealLogHeader.css";

function MealLogHeader() {
  return (
    <header className="meal-log-header">
      <div className="meal-log-header-eyebrow">
        <span className="meal-log-header-eyebrow-line" />
        <span>FUEL YOUR PROGRESS</span>
        <span className="meal-log-header-eyebrow-line" />
      </div>

      <h1 className="meal-log-header-title">
        Meal
        <span className="meal-log-header-title-second">
          Log
        </span>
      </h1>

      <p className="meal-log-header-description">
        Track your nutrition, build consistency,
        <br className="meal-log-header-desktop-break" />
        and fuel your journey towards a stronger you.
      </p>

      <div className="meal-log-header-divider" aria-hidden="true">
        <span className="meal-log-header-divider-line" />
        <span className="meal-log-header-divider-mark" />
        <span className="meal-log-header-divider-line" />
      </div>
    </header>
  );
}

export default MealLogHeader;
