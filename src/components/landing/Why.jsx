import "../../styles/landing/Why.css";

function Why() {
  return (
    <section className="why-atlas">
      <div className="why-atlas-header">
        <p>WHY ATLAS?</p>

        <h2>
          Built for those who
          <span>refuse to stay the same.</span>
        </h2>
      </div>

      <div className="why-atlas-points">
        <div className="why-point">
          <h3>Train With Purpose</h3>
          <p>
            Structured training designed around real
            progression.
          </p>
        </div>

        <div className="why-point">
          <h3>Track Your Progress</h3>
          <p>
            Measure your strength, consistency, and
            improvement.
          </p>
        </div>

        <div className="why-point">
          <h3>Know Your Body</h3>
          <p>
            Understand every movement and exactly what
            you're training.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Why;