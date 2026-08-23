import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LandingPage({ isDark, setIsDark }) {
  return (
    <>
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
      />
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default LandingPage;