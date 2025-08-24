import "./MainContent.css";

function MainContent() {
  const experiences = [
    {
      period: "2020 – Present",
      title: "Self-Taught Frontend Developer",
      company: "Freelance / Personal Projects",
      link: "https://github.com/DreadTheMystery",
      description:
        "Built and maintained several personal and freelance projects including an anime streaming platform, a clothing e-commerce shop with admin panel, and small business websites.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "SQLite"],
    },
    {
      period: "2024",
      title: "Team Project Developer",
      company: "ALX Software Engineering Program",
      link: "https://www.alxafrica.com/",
      description:
        "Collaborated with a team on a full-stack web application project, implementing both front-end and back-end features using version control and modern development practices.",
      technologies: ["React", "Node.js", "Express", "SQLite", "Git"],
    },
    {
      period: "2021",
      title: "Website Developer",
      company: "Laptop Repair Shop Project",
      link: "#",
      description:
        "Developed a website for a local laptop repair shop, improving online presence and helping the business attract more customers.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];
  

  const projects = [
    {
      title: "Anime Streaming Platform",
      link: "https://github.com/DreadTheMystery/manga-site",
      image: "/images/anime-site.png",
      description:
        "A web app where users can browse and watch anime. Built with React for the frontend and Express + SQLite for the backend, including a video player and download feature.",
      technologies: ["React", "Node.js", "Express", "SQLite", "CSS"],
    },
    {
      title: "E-Commerce Clothing Shop",
      link: "https://github.com/DreadTheMystery/Nafeskey-Shop",
      image: "/images/shop.png",
      description:
        "An online shop for clothes with product management, shopping cart, and WhatsApp checkout. Features an admin panel to add, edit, and remove products.",
      technologies: ["JavaScript", "Express", "SQLite", "CSS"],
    },
    {
      title: "Cardiology Website",
      link: "#",
      image: "/images/cardiology-site.png",
      description:
        "Developed a professional cardiology website to showcase medical services, contact information, and patient resources, improving digital presence for the clinic.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Laptop Repair Shop Website",
      link: "#",
      image: "/images/laptop-repair.png",
      description:
        "A business website built for a laptop repair shop, providing service details, contact form, and improved online presence.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Automatic Poultry Feeder (Hardware Project)",
      link: "#",
      image: "/images/poultry-feeder.png",
      description:
        "Designed and built an automatic poultry feeder using Arduino Mega 2560, DS3231 RTC, servo motor, and LCD. Includes scheduling and control system.",
      technologies: ["Arduino", "C++", "Electronics"],
    },
  ];
  
  return (
    <div className="main-content">
      <div className="content-wrapper">
        <section id="about" className="section">
          <h2 className="sr-only">About</h2>
          <div className="section-content">
            <p>
              Hi, I’m <strong>Abdulgafar Ridwan</strong>, a self-taught{" "}
              <strong>Fullstack Developer</strong> with experience in{" "}
              <strong>HTML, CSS, JavaScript, React, and Node.js</strong>. I
              enjoy building modern, user-friendly websites and applications
              that are both visually appealing and functional.
            </p>
            <p>
              My journey in tech started in 2020, and since then I’ve worked on
              a variety of projects — from small business websites like a{" "}
              <em>laptop repair shop site </em>
              to larger projects such as an <em>anime streaming platform</em>
              and an <em>e-commerce clothing shop</em> with admin management.
            </p>
            <p>
              I am passionate about <strong>full-stack development</strong> and
              currently improving my skills by working on projects that use
              modern backend technologies (Express, SQLite) and frontend
              frameworks like React. I also have an interest in{" "}
              <strong>AI development</strong> and plan to integrate intelligent
              features into future projects.
            </p>
            <p>
              Outside of coding, I enjoy learning new technologies, exploring
              design ideas, and working on creative personal projects that
              challenge me to grow as a developer.
            </p>
          </div>
        </section>

        <section id="experience" className="section">
          <h2 className="section-title">Experience</h2>
          <div className="section-content">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-period">{exp.period}</div>
                <div className="experience-details">
                  <h3 className="experience-title">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exp.title} at {exp.company}
                      <span className="external-link-icon">↗</span>
                    </a>
                  </h3>
                  <p className="experience-description">{exp.description}</p>
                  <div className="experience-tech">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="resume-link">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View Full Résumé
                <span className="external-link-icon">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <div className="section-content">
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-details">
                  <h3 className="project-title">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                      <span className="external-link-icon">↗</span>
                    </a>
                  </h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="archive-link">
              <a href="/archive" target="_blank" rel="noopener noreferrer">
                View Full Project Archive
                <span className="external-link-icon">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-content">
            <div className="contact-content">
              <p className="contact-description">
                I'm always interested in new opportunities and collaborations.
                Whether you have a project in mind, want to discuss potential
                work, or just want to say hello, I'd love to hear from you.
              </p>

              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>
            Designed and coded by <strong>Abdulgafar Ridwan</strong>. Built with{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>{" "}
            and styled with{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSS
            </a>
            . Developed in{" "}
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visual Studio Code
            </a>{" "}
            and deployed with{" "}
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
            . All rights reserved © {new Date().getFullYear()}.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default MainContent;
