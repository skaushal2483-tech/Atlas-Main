import "../styles/Header.css";

function Header() {
  return (
    <header className="dashboard-header">

      {/* Welcome */}
      <div className="header-welcome">
        <p>WELCOME BACK</p>
        <h1>Let's get to work, Alex.</h1>
        <span>Ready to crush your goals today?</span>
      </div>

      {/* Streak */}
      <div className="header-right">
        <div className="streak-card">

          <div className="streak-top">
            <span className="streak-fire">🔥</span>

            <div>
              <p>Current Streak</p>

              <h2>
                12 <span>days</span>
              </h2>
            </div>
          </div>

          <div className="streak-week">
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
            <span>S</span>
          </div>

          <div className="streak-status">
            <b>✓</b>
            <b>✓</b>
            <b>✓</b>
            <b>✓</b>
            <i></i>
            <i></i>
            <i></i>
          </div>

        </div>
      </div>

      {/* Theme */}
    </header>
  );
}

export default Header;