import "./Sidebar.css";
import SidebarHeader from "./SidebarHeader";
import SidebarNavigation from "./SidebarNavigation";
import SidebarSocial from "./SidebarSocial";

function Sidebar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-top">
          {/* Existing Header Content */}
          <SidebarHeader
            name="Abdulgafar Ridwan"
            title="Full-stack Developer"
            description="I build responsive, user-friendly web applications and digital experiences with React, JavaScript, and modern web technologies."
          />

          {/* CTA Buttons from Hero */}
          <div className="sidebar-cta">
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

          {/* Existing Navigation */}
          <SidebarNavigation />
        </div>

        {/* Existing Social Links */}
        <SidebarSocial />
      </div>
    </div>
  );
}

export default Sidebar;
