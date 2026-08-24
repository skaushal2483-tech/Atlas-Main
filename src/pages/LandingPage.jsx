import Navbar from "../components/shared/Navbar";
import Hero from "../components/landing/Hero";
import Stats from "../components/landing/Stats";
import Why from "../components/landing/Why";
import Programs from "../components/landing/Programs";
import Memberships from "../components/landing/Memberships";
import Footer from "../components/shared/Footer";

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