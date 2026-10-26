import "../../styles/community/CommunityHero.css";

function CommunityHero() {
  return (
    <section className="community-hero">

      <div className="community-hero-image"></div>

      <div className="community-hero-overlay"></div>

      <div className="community-hero-content">

        <div className="community-hero-heading">

          <span className="community-hero-eyebrow">
            ATLAS COMMUNITY
          </span>

          <h1 className="community-hero-tagline">
            <span>Train together,</span>
            <span>Stay motivated.</span>
          </h1>

        </div>


        <div className="community-hero-stats">

          <div className="community-stat-card">
            <div className="community-stat-info">
              <strong>12.4K</strong>
              <span>Members</span>
            </div>
          </div>


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