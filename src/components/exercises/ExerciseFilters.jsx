import { useState, useEffect, useRef } from "react";
import "../../styles/exercises/ExerciseFilters.css";

const filterOptions = {
  category: [
    "All Categories",
    "Chest",
    "Back",
    "Legs",
    "Shoulders",
    "Arms",
    "Core",
    "Cardio",
    "Full Body",
  ],
  difficulty: [
    "All Levels",
    "Beginner",
    "Intermediate",
    "Advanced",
  ],
  equipment: [
    "All Equipment",
    "Bodyweight",
    "Dumbbells",
    "Barbell",
    "Cable Machine",
    "Machine",
    "Kettlebell",
  ],
};

function FilterDropdown({
  label,
  options,
  value,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="exercise-filter-dropdown" ref={dropdownRef}>
      <span className="exercise-filter-label">{label}</span>

      <button
        type="button"
        className="exercise-filter-trigger"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="exercise-filter-value">{value}</span>

        <span
          className={`exercise-filter-arrow ${
            isOpen ? "open" : ""
          }`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      {isOpen && (
        <div
          className="exercise-filter-menu"
          role="listbox"
          aria-label={label}
        >
          {options.map((option) => (
            <button
              key={option}
              type="button"
              role="option"
              aria-selected={value === option}
              className={`exercise-filter-option ${
                value === option ? "active" : ""
              }`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              <span>{option}</span>

              {value === option && (
                <span className="exercise-filter-check" aria-hidden="true">
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ExerciseFilters({
  category,
  setCategory,
  difficulty,
  setDifficulty,
  equipment,
  setEquipment,
  resetFilters,
}) {
  const hasActiveFilters =
    category !== "All Categories" ||
    difficulty !== "All Levels" ||
    equipment !== "All Equipment";

  return (
    <section className="exercise-filters" aria-label="Exercise filters">
      <div className="exercise-filters-heading">
        <span className="exercise-filters-title">Filters</span>
        
      </div>

      <div className="exercise-filters-controls">
        <FilterDropdown
          label="CATEGORY"
          options={filterOptions.category}
          value={category}
          onChange={setCategory}
        />

        <FilterDropdown
          label="DIFFICULTY"
          options={filterOptions.difficulty}
          value={difficulty}
          onChange={setDifficulty}
        />

        <FilterDropdown
          label="EQUIPMENT"
          options={filterOptions.equipment}
          value={equipment}
          onChange={setEquipment}
        />

        {hasActiveFilters && (
          <button
            type="button"
            className="exercise-filters-reset"
            onClick={resetFilters}
          >
            Reset filters
            <span aria-hidden="true">↺</span>
          </button>
        )}
      </div>
    </section>
  );
}

export default ExerciseFilters;
