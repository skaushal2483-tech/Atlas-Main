import SideBar from "../components/SideBar";
import CommunityHero from "../components/CommunityHero";
import CreatePost from "../components/CreatePost";
import Leaderboard from "../components/Leaderboard";
import Trending from "../components/Trending";
import Filters from "../components/Filters";
import Posts from "../components/Posts";

import "../styles/Community.css";

function Community() {
  return (
    <div className="community-layout">

      <SideBar />

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