import "../../styles/dashboard/StatsCards.css";

function AnalyticsGrid() {
  return (
    <section className="analytics-grid">

      <article className="analytics-card">
        <div className="analytics-card-header">
          <span>WEEKLY ACTIVITY</span>
          <h2>42 min</h2>
        </div>

        <div className="chart-placeholder">
          <span>Coming soon...</span>
        </div>
      </article>


      <article className="analytics-card">
        <div className="analytics-card-header">
          <span>WORKOUT DISTRIBUTION</span>
          <h2>Training Mix</h2>
        </div>

        <div className="chart-placeholder chart-placeholder-donut">
          <span>Coming soon...</span>
        </div>
      </article>


      <article className="analytics-card">
        <div className="analytics-card-header">
          <span>TRAINING VOLUME</span>
          <h2>Weekly Load</h2>
        </div>

        <div className="chart-placeholder">
          <span>Coming soon...</span>
        </div>
      </article>


      <article className="analytics-card">
        <div className="analytics-card-header">
          <span>GOAL PROGRESS</span>
          <h2>72%</h2>
        </div>

        <div className="chart-placeholder chart-placeholder-progress">
          <span>Coming soon...</span>
        </div>
      </article>

    </section>
  );
}

export default AnalyticsGrid;