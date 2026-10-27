import "../../styles/meals/AddLogCard.css";

function AddLogCard({ onClick }) {
  return (<button
    type="button"
    className="add-log-card"
    onClick={onClick}
    aria-label="Add a new meal log"
  > <span className="add-log-card-icon" aria-hidden="true">
      + </span>

    <span className="add-log-card-title">Add Log</span>
  </button>

  );
}

export default AddLogCard;
