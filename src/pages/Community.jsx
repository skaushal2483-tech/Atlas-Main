import SideBar from "../components/SideBar";
import CommunityHero from "../components/CommunityHero";
import "../styles/Community.css";

function Community() {
  return (
    <div className="community-layout">

      <SideBar />

      <main className="community-main">

        <CommunityHero />

      </main>

    </div>
  );
}

export default Community;