import "../../styles/landing/Hero.css";
import { Link } from "react-router-dom";


function Hero({ isDark }) {
  return (
    <section className="hero">
      <video
        className={`hero-video ${!isDark ? "active" : ""}`}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://res.cloudinary.com/faxly6vc/video/upload/v1787239805/atlas_light.mp4" type="video/mp4" />
      </video>

      <video
        className={`hero-video ${isDark ? "active" : ""}`}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/HeroDark.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          <span className="hero-white">Carry Your</span>
          <span>Ambition...</span>
        </h1>

        <p>
          Train with purpose, Track your progress, Become stronger.
        </p>

        <Link to="/auth" className="hero-cta">
          Start Your Journey <span>→</span>
        </Link>
      </div>
    </section>
  );
}

export default Hero;