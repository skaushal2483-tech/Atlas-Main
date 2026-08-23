import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="footer-logo">
          ATLAS
        </div>

        <button
          className="footer-top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </div>

      <div className="footer-main">

        <div className="footer-statement">
          <h2>
            Train hard.
            <span>Track everything.</span>
            Become stronger.
          </h2>
        </div>

        <div className="footer-links">

          <div className="footer-link-group">
            <p>EXPLORE</p>

            <a href="#programs">Programs</a>
            <a href="#exercises">Exercises</a>
            <a href="#membership">Membership</a>
            <a href="#about">About</a>
          </div>

          <div className="footer-link-group">
            <p>CONNECT</p>

            <a href="#instagram">Instagram</a>
            <a href="#x">X</a>
            <a href="#youtube">YouTube</a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 <span>ATLAS</span>
        </p>

        <p>
          Built with purpose.
        </p>

      </div>

    </footer>
  );
}

export default Footer;