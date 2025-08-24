import "./Hero.css";

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Abdulgafar Ridwan</span>
          </h1>
          <p className="hero-subtitle">
            Frontend Developer passionate about building modern, responsive web
            applications that solve real-world problems with clean, efficient
            code.
          </p>
          <div className="hero-cta">
            <button
              className="cta-button primary"
              onClick={() => scrollToSection("projects")}
            >
              📂 View My Work
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button secondary"
            >
              📄 Download CV
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar-placeholder">
            <span>AR</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
