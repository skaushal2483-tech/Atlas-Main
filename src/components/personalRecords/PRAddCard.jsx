import "../../styles/personalRecords/PRAddCard.css";

function PRAddCard({ onClick }) {
  return (
    <button
      type="button"
      className="pr-add-card"
      onClick={onClick}
      aria-label="Add a personal record"
    >
      <span className="pr-add-card-icon" aria-hidden="true">
        +
      </span>

      <span className="pr-add-card-title">
        ADD PR
      </span>

      <span className="pr-add-card-description">
        Log a new personal best
      </span>
    </button>
  );
}

export default PRAddCard;
