import "../styles/Metrics.css";

function Metrics() {
  return (
    <section className="metrics">

      <div className="metrics-heading">
        <span>BODY METRICS</span>
      </div>

      <div className="metrics-layout">

        {/* BODYWEIGHT */}
        <div className="metric-weight-card">

          <span className="metric-label">BODYWEIGHT</span>

          <div className="weight-value">
            <strong>78.4</strong>
            <span>KG</span>
          </div>

          <div className="metric-coming-soon">
            <span>COMING SOON...</span>
          </div>

        </div>


        {/* DAILY CALORIES */}
        <div className="metric-small-card">

          <span className="metric-label">DAILY CALORIES</span>

          <div className="small-value">
            <strong>2,450</strong>
            <span>KCAL</span>
          </div>

        </div>


        {/* BODY FAT */}
        <div className="metric-small-card">

          <span className="metric-label">BODY FAT</span>

          <div className="small-value">
            <strong>14.8</strong>
            <span>%</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Metrics;