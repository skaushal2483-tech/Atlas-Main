import { useState } from "react";
import "../styles/Filters.css";

function Filters() {
  const filters = [
    "All",
    "Bodybuilding",
    "Nutrition",
    "Motivation",
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterSelect = (filter) => {
    setActiveFilter(filter);
    setIsOpen(false);
  };

  return (
    <div className="community-filters">

      <h3 className="community-filters-title">
        Filters
      </h3>

      <div className="community-filter-dropdown">

        <button
          type="button"
          className="community-filter-trigger"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span className="community-filter-value">
            {activeFilter}
          </span>

          <span
            className={`community-filter-arrow ${
              isOpen ? "open" : ""
            }`}
          >
            ▾
          </span>
        </button>

        {isOpen && (
          <div className="community-filter-menu">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`community-filter-option ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => handleFilterSelect(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}

export default Filters;