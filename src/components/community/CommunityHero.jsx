import "../../styles/community/CommunityHero.css";

function CommunityHero() {
  return (
    <section className="community-hero">

      {/* Background */}
      <div className="community-hero-image"></div>

      {/* Dark gradient */}
      <div className="community-hero-overlay"></div>

      {/* Main content */}
      <div className="community-hero-content">

        {/* Heading */}
        <div className="community-hero-heading">

          <span className="community-hero-eyebrow">
            ATLAS COMMUNITY
          </span>

          <h1 className="community-hero-tagline">
            <span>Train together,</span>
            <span>Stay motivated.</span>
          </h1>

        </div>


        {/* Stats */}
        <div className="community-hero-stats">

          {/* Members */}
          <div className="community-stat-card">
            <div className="community-stat-info">
              <strong>12.4K</strong>
              <span>Members</span>
            </div>
          </div>


          {/* Posts */}
          <div className="community-stat-card">
            <div className="community-stat-info">
              <strong>48K</strong>
              <span>Posts</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default CommunityHero;