import "../../styles/community/Trending.css";

function Trending() {
  const topics = [
    "MuscleBuilding",
    "HomeWorkouts",
    "WeightLoss",
    "StrengthTraining",
  ];

  return (
    <section className="trending">

      <div className="trending-header">
        <h2 className="trending-title">
          Trending
        </h2>

        <p className="trending-subtitle">
          Popular in the community:
        </p>
      </div>

      <div className="trending-list">

        {topics.map((topic) => (
          <div
            className="trending-row"
            key={topic}
          >
            <span className="trending-hashtag">
              #{topic}
            </span>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Trending;