import { useEffect, useState } from "react";
import "../../styles/meals/NutritionTargets.css";

const targetFields = [
  { key: "calories", label: "Calories", unit: "kcal" },
  { key: "protein", label: "Protein", unit: "g" },
  { key: "carbs", label: "Carbs", unit: "g" },
  { key: "fats", label: "Fats", unit: "g" },
];

function NutritionTargets({ isOpen, targets, onSave, onClose }) {
  const [formValues, setFormValues] = useState({
    calories: "",
    protein: "",
    carbs: "",
    fats: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setFormValues({
        calories: targets?.calories ?? "",
        protein: targets?.protein ?? "",
        carbs: targets?.carbs ?? "",
        fats: targets?.fats ?? "",
      });

      setError("");
    }
  }, [isOpen, targets]);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const values = {};

    for (const field of targetFields) {
      const value = formValues[field.key];

      if (
        value === "" ||
        !Number.isFinite(Number(value)) ||
        Number(value) < 0
      ) {
        setError(
          `Enter a valid, non-negative ${field.label.toLowerCase()} target.`
        );
        return;
      }

      values[field.key] = Number(value);
    }

    onSave(values);
    onClose();
  };

  return (
    <div
      className="nutrition-targets-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="nutrition-targets-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="nutrition-targets-title"
      >
        <div className="nutrition-targets-header">
          <div>
            <span className="nutrition-targets-eyebrow">
              DAILY GOALS
            </span>

            <h2 id="nutrition-targets-title">
              Nutrition Targets
            </h2>

            <p>Set your goals for the day.</p>
          </div>

          <button
            type="button"
            className="nutrition-targets-close"
            onClick={onClose}
            aria-label="Close nutrition targets"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="nutrition-targets-fields">
            {targetFields.map((field) => (
              <div
                className="nutrition-targets-field"
                key={field.key}
              >
                <label htmlFor={`target-${field.key}`}>
                  {field.label}
                </label>

                <div className="nutrition-targets-input-wrap">
                  <input
                    id={`target-${field.key}`}
                    type="number"
                    name={field.key}
                    min="0"
                    step="any"
                    value={formValues[field.key]}
                    onChange={handleChange}
                    placeholder="0"
                    required
                  />

                  <span>{field.unit}</span>
                </div>
              </div>
            ))}
          </div>

          {error && (
            <p className="nutrition-targets-error" role="alert">
              {error}
            </p>
          )}

          <div className="nutrition-targets-actions">
            <button
              type="button"
              className="nutrition-targets-cancel"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="nutrition-targets-save"
            >
              Save Targets
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default NutritionTargets;
