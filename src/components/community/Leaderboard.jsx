import "../../styles/community/Leaderboard.css";

function Leaderboard() {
  const users = [
    {
      rank: "01",
      name: "Suryansh Gupta",
      posts: 12,
    },
    {
      rank: "02",
      name: "Somesh Arora",
      posts: 11,
    },
    {
      rank: "03",
      name: "Arshdeep Singh",
      posts: 10,
    },
    {
      rank: "04",
      name: "Daksh Bassi",
      posts: 9,
    },
    {
      rank: "05",
      name: "Yogendra Sharma",
      posts: 8,
    },
  ];

  return (
    <section className="leaderboard">

      <div className="leaderboard-header">
        <h2 className="leaderboard-title">
          Top Contributors
        </h2>

        <p className="leaderboard-subtitle">
          Most active in the community:
        </p>
      </div>


      <div className="leaderboard-list">

        {users.map((user) => (
          <div
            className="leaderboard-row"
            key={user.name}
          >

            <span className="leaderboard-rank">
              {user.rank}
            </span>


            <div className="leaderboard-avatar">
              {user.name.charAt(0)}
            </div>


            <div className="leaderboard-user">

              <span className="leaderboard-name">
                {user.name}
              </span>

              <span className="leaderboard-posts">
                {user.posts} posts
              </span>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Leaderboard;