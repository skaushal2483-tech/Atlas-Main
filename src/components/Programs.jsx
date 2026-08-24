import "../styles/Programs.css";

function Programs() {
    return (
        <section className="programs">
            <div className="programs-header">
                <h2>TRAIN YOUR WAY...</h2>
            </div>

            <div className="programs-grid">
                <div className="program-card bodybuilding">
                    <div className="program-overlay"></div>

                    <div className="program-content">
                        <h3>Bodybuilding</h3>
                        <span>Build muscle. Shape your physique.</span>
                    </div>
                </div>

                <div className="program-card powerlifting">
                    <div className="program-overlay"></div>

                    <div className="program-content">
                        <h3>Powerlifting</h3>
                        <span>Get stronger. Master the big three.</span>
                    </div>
                </div>

                <div className="program-card strongman">
                    <div className="program-overlay"></div>

                    <div className="program-content">
                        <h3>Strongman</h3>
                        <span>Lift heavy. Build absolute strength.</span>
                    </div>
                </div>

                <div className="program-card hyrox">
                    <div className="program-overlay"></div>

                    <div className="program-content">
                        <h3>Hyrox</h3>
                        <span>Run. Lift. Endure.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Programs;