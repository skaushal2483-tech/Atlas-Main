import "../../styles/meals/MealList.css";

function MealList({ meals = [], onAddMeal }) {
  const formatNumber = (value) =>
    (Number(value) || 0).toLocaleString();

  return (
    <section className="meal-list-section">
      <div className="meal-list-header">
        <div className="meal-list-heading">
          <span className="meal-list-eyebrow">
            YOUR FOOD JOURNAL </span>

          <h2>
            Today's Meals
          </h2>

          <p>Every meal counts towards your goals.</p>
        </div>
      </div>

      <div className="meal-list-divider" />

      <div className="meal-list-grid">
        <button
          type="button"
          className="meal-list-add-card"
          onClick={onAddMeal}
        >
          <span className="meal-list-add-icon">+</span>
          <span className="meal-list-add-label">Add Meal</span>
        </button>

        {meals.map((meal) => {
          const foods = Array.isArray(meal.foods)
            ? meal.foods
            : [];

          const mealTotals = foods.reduce(
            (total, food) => ({
              calories:
                total.calories + (Number(food.calories) || 0),
              protein:
                total.protein + (Number(food.protein) || 0),
              carbs:
                total.carbs + (Number(food.carbs) || 0),
              fats:
                total.fats + (Number(food.fats) || 0),
            }),
            {
              calories: 0,
              protein: 0,
              carbs: 0,
              fats: 0,
            }
          );

          return (
            <article
              className="meal-list-card"
              key={meal.id}
            >
              <div className="meal-list-card-header">
                <h3>{meal.name}</h3>

                <span className="meal-list-total-calories">
                  {formatNumber(mealTotals.calories)} kcal
                </span>
              </div>

              <div className="meal-list-foods">
                {foods.map((food) => (
                  <div
                    className="meal-list-food"
                    key={food.id}
                  >
                    <div className="meal-list-food-info">
                      <span className="meal-list-food-name">
                        {food.name}
                      </span>
                    </div>

                    <div className="meal-list-macros">
                      <span>
                        <strong>
                          {formatNumber(food.protein)}g
                        </strong>
                        <small>Protein</small>
                      </span>

                      <span>
                        <strong>
                          {formatNumber(food.carbs)}g
                        </strong>
                        <small>Carbs</small>
                      </span>

                      <span>
                        <strong>
                          {formatNumber(food.fats)}g
                        </strong>
                        <small>Fats</small>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>

  );
}

export default MealList;
