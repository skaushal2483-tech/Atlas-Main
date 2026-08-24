import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
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
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default LandingPage;