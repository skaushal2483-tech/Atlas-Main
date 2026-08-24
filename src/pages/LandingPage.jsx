import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Why from "../components/Why";
import Programs from "../components/Programs";
import Memberships from "../components/Memberships";
import Footer from "../components/Footer";

function LandingPage({ isDark, setIsDark }) {
  return (
    <>
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
      />

      <main>
        <Hero isDark={isDark} />
        <Stats />
        <Why/>
        <Programs/>
        <Memberships/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default LandingPage;