import SideBar from "../components/SideBar";
import CommunityHero from "../components/CommunityHero";
import CreatePost from "../components/CreatePost";
import Filters from "../components/Filters";

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

          </section>

        </div>

      </main>

    </div>
  );
}

export default Community;