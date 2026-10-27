import { useEffect, useState } from "react";
import "../../styles/meals/AddMealModal.css";

const initialForm = {
  mealName: "",
  foodName: "",
  calories: "",
  protein: "",
  carbs: "",
  fats: "",
};

const nutritionFields = [
  { key: "calories", label: "Calories", unit: "kcal" },
  { key: "protein", label: "Protein", unit: "g" },
  { key: "carbs", label: "Carbs", unit: "g" },
  { key: "fats", label: "Fats", unit: "g" },
];

function AddMealModal({ isOpen, onSave, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setForm(initialForm);
      setError("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const mealName = form.mealName.trim();
    const foodName = form.foodName.trim();

    if (!mealName || !foodName) {
      setError("Please enter both a meal name and a food name.");
      return;
    }

    const food = {};

    for (const field of nutritionFields) {
      const value = form[field.key];

      if (
        value === "" ||
        !Number.isFinite(Number(value)) ||
        Number(value) < 0
      ) {
        setError(
          `Enter a valid, non-negative value for ${field.label.toLowerCase()}.`
        );
        return;
      }

      food[field.key] = Number(value);
    }

    onSave({
      mealName,
      food: {
        id: Date.now(),
        name: foodName,
        ...food,
      },
    });
  };

  return (
    <div
      className="add-meal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="add-meal-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-meal-title"
      >
        <div className="add-meal-header">
          <div>
            <span className="add-meal-eyebrow">
              NUTRITION JOURNAL
            </span>

            <h2 id="add-meal-title">
              Add a Meal<span>.</span>
            </h2>

            <p>Log your food and track your nutrition.</p>
          </div>

          <button
            type="button"
            className="add-meal-close"
            onClick={onClose}
            aria-label="Close add meal modal"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="add-meal-fields">
            <div className="add-meal-field add-meal-full-width">
              <label htmlFor="add-meal-name">Meal name</label>

              <input
                id="add-meal-name"
                type="text"
                name="mealName"
                value={form.mealName}
                onChange={handleChange}
                placeholder="e.g. Breakfast"
                maxLength={50}
                required
              />
            </div>

            <div className="add-meal-field add-meal-full-width">
              <label htmlFor="add-meal-food-name">Food name</label>

              <input
                id="add-meal-food-name"
                type="text"
                name="foodName"
                value={form.foodName}
                onChange={handleChange}
                placeholder="e.g. Boiled Eggs"
                maxLength={100}
                required
              />
            </div>

            {nutritionFields.map((field) => (
              <div className="add-meal-field" key={field.key}>
                <label htmlFor={`add-meal-${field.key}`}>
                  {field.label}
                </label>

                <div className="add-meal-input-wrap">
                  <input
                    id={`add-meal-${field.key}`}
                    type="number"
                    name={field.key}
                    value={form[field.key]}
                    onChange={handleChange}
                    min="0"
                    step="any"
                    placeholder="0"
                    required
                  />

                  <span>{field.unit}</span>
                </div>
              </div>
            ))}
          </div>

          {error && (
            <p className="add-meal-error" role="alert">
              {error}
            </p>
          )}

          <div className="add-meal-actions">
            <button
              type="button"
              className="add-meal-cancel"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className="add-meal-save">
              Save Meal
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddMealModal;
