import { useRef } from "react";

import Navbar from "../components/shared/Navbar";
import Hero from "../components/landing/Hero";
import Stats from "../components/landing/Stats";
import Why from "../components/landing/Why";
import Programs from "../components/landing/Programs";
import Memberships from "../components/landing/Memberships";
import Footer from "../components/shared/Footer";

function LandingPage({ isDark, setIsDark }) {
  const whyRef = useRef(null);
  const programsRef = useRef(null);
  const membershipsRef = useRef(null);

  function scrollToSection(ref) {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <>
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        scrollToWhy={() => scrollToSection(whyRef)}
        scrollToPrograms={() => scrollToSection(programsRef)}
        scrollToMemberships={() =>
          scrollToSection(membershipsRef)
        }
      />

      <main>
        <Hero isDark={isDark} />

        <Stats />

        <div ref={whyRef}>
          <Why />
        </div>

        <div ref={programsRef}>
          <Programs />
        </div>

        <div ref={membershipsRef}>
          <Memberships />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default LandingPage;