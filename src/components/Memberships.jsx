import "../styles/Memberships.css";

function Memberships() {
  return (
    <section className="membership">
      <div className="membership-header">

        <h2>
          Choose how far
          <span>you want to go.</span>
        </h2>
      </div>

      <div className="membership-grid">

        <div className="membership-card">
          <div className="membership-card-top">
            <h3>FREE</h3>
            <p>Start your journey.</p>
          </div>

          <div className="membership-price">
            <strong>₹0</strong>
            <span>/ forever</span>
          </div>

          <ul>
            <li>Exercise library</li>
            <li>Basic workout tracking</li>
            <li>Supplement Store</li>
          </ul>

          <button className="membership-button">
            Get Started →
          </button>
        </div>

        <div className="membership-card">
          <div className="membership-card-top">
            <h3>PRO</h3>
            <p>Train with purpose.</p>
          </div>

          <div className="membership-price">
            <strong>₹199</strong>
            <span>/ month</span>
          </div>

          <ul>
            <li>Everything in Free</li>
            <li>Full training programs</li>
            <li>Community Access</li>
            <li>AI Coach</li>
          </ul>

          <button className="membership-button">
            Start Pro →
          </button>
        </div>

        <div className="membership-card">
          <div className="membership-card-top">
            <h3>ELITE</h3>
            <p>Push beyond limits.</p>
          </div>

          <div className="membership-price">
            <strong>₹499</strong>
            <span>/ month</span>
          </div>

          <ul>
            <li>Everything in Pro</li>
            <li>Exclusive Discounts</li>
            <li>Prep Coaches</li>
            <li>Early access to upcoming features</li>
          </ul>

          <button className="membership-button">
            Go Elite →
          </button>
        </div>

      </div>
    </section>
  );
}

export default Memberships;