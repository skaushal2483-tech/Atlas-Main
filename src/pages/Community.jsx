import Sidebar from "../components/shared/Sidebar";
import CommunityHero from "../components/community/CommunityHero";
import CreatePost from "../components/community/CreatePost";
import Leaderboard from "../components/community/Leaderboard";
import Trending from "../components/community/Trending";
import Filters from "../components/community/Filters";
import Posts from "../components/community/Posts";

import "../styles/community/Community.css";

function Community({ isDark, setIsDark }) {
  return (
    <div className="community-layout">

      <Sidebar
        isDark={isDark}
        setIsDark={setIsDark}
      />

      <main className="community-main">

        <CommunityHero />

        <div className="community-content-grid">

          <section className="community-feed">

            <CreatePost />

            <Filters />

            <Posts />

          </section>

          <aside className="community-sidebar">

            <Leaderboard />

            <Trending />

          </aside>

        </div>

      </main>

    </div>
  );
}

export default Community;
