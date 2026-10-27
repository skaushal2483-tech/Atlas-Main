import "../../styles/personalRecords/PRDisplayCard.css";

function PRDisplayCard({ record, onEdit, onDelete }) {
  const handleDelete = (event) => {
    event.stopPropagation();
    onDelete?.(record.id);
  };

  const handleKeyDown = (event) => {
    if (event.target !== event.currentTarget) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onEdit?.(record);
    }
  };

  const formattedDate = record.date
    ? new Date(`${record.date}T00:00:00`).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <article
      className="pr-display-card"
      onClick={() => onEdit?.(record)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Edit ${record.exercise} personal record`}
    >
      <button
        type="button"
        className="pr-display-card-delete"
        onClick={handleDelete}
        aria-label={`Delete ${record.exercise} record`}
        title="Delete record"
      >
        ×
      </button>

      <div className="pr-display-card-content">
        <span className="pr-display-card-label">
          {record.exercise}
        </span>

        <div className="pr-display-card-value">
          <strong>{record.weight}</strong>
          <span>KG</span>
        </div>

        <div className="pr-display-card-divider" />

        <div className="pr-display-card-bottom">
          <p>PERSONAL BEST</p>

          {formattedDate && (
            <span className="pr-display-card-date">
              {formattedDate}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default PRDisplayCard;
