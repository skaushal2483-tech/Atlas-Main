import "../../styles/landing/Hero.css";

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
        <source src="/videos/HeroLight.mp4" type="video/mp4" />
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

        <button className="hero-cta">
          Start Your Journey <span>→</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;