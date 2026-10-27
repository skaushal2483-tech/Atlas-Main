import "../../styles/personalRecords/PRHeader.css";

function PRHeader() {
  return (
    <header className="pr-header">
      <p className="pr-header-eyebrow">
        <span className="pr-header-line" />
        YOUR FITNESS JOURNEY
        <span className="pr-header-line" />
      </p>

      <h1 className="pr-header-title">
        Personal <span>Records</span>
      </h1>

      <p className="pr-header-subtitle">
        Every milestone tells a story.
      </p>

      <div className="pr-header-divider">
        <span className="pr-header-divider-line" />
        <span className="pr-header-divider-mark" />
        <span className="pr-header-divider-line" />
      </div>
    </header>
  );
}

export default PRHeader;
