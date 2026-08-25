import "../../styles/dashboard/PersonalRecords.css";

function PersonalRecords() {
  return (
    <section className="personal-records">

      <div className="personal-records-header">
        <div className="records-heading">
          <span>PERSONAL RECORDS</span>
          <h2>Strength Standards</h2>
        </div>

        <button className="records-view">
          View All
          <span>→</span>
        </button>
      </div>

      <div className="records-grid">

        <div className="record-card">
          <div className="record-card-top">
            <span className="record-label">SQUAT</span>
            <span className="record-badge">1 RM</span>
          </div>

          <div className="record-value">
            <strong>100</strong>
            <span>KG</span>
          </div>

          <div className="record-divider" />

          <p>PERSONAL BEST</p>
        </div>

        <div className="record-card">
          <div className="record-card-top">
            <span className="record-label">BENCH PRESS</span>
            <span className="record-badge">1 RM</span>
          </div>

          <div className="record-value">
            <strong>80</strong>
            <span>KG</span>
          </div>

          <div className="record-divider" />

          <p>PERSONAL BEST</p>
        </div>

        <div className="record-card">
          <div className="record-card-top">
            <span className="record-label">DEADLIFT</span>
            <span className="record-badge">1 RM</span>
          </div>

          <div className="record-value">
            <strong>120</strong>
            <span>KG</span>
          </div>

          <div className="record-divider" />

          <p>PERSONAL BEST</p>
        </div>

      </div>
    </section>
  );
}

export default PersonalRecords;