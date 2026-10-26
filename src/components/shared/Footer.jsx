import "../../styles/shared/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-brand">
        <img
          src="/images/atlasLogo_Crimson.png"
          alt="ATLAS"
          className="footer-brand-logo"
        />

        <p>Discipline builds strength.</p>
      </div>
      <div className="footer-socials">
        <p className="footer-socials-title">FOLLOW US</p>

        <div className="footer-social-links">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v1.9H7v3.1h2.8v8z"
              />
            </svg>
          </a>

          <a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7.5L5.5 22H2.3l7.3-8.4L1.8 2h6.4l4.4 7zM17.8 19.8h1.7L7.3 4.1H5.5z"
              />
            </svg>
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M23 6.2a3 3 0 0 0-2.1-2.1C19.1 3.6 12 3.6 12 3.6s-7.1 0-8.9.5A3 3 0 0 0 1 6.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 8.9.5 8.9.5s7.1 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-5.8 31 31 0 0 0-.5-5.8ZM9.5 15.6V8.4l6.2 3.6z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} <span>ATLAS</span> — All rights reserved
        </p>

        <p>Built with purpose.</p>
      </div>

    </footer>
  );
}

export default Footer;