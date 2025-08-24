import "./Skills.css";

function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React", icon: "⚛️" },
        { name: "Responsive Design", icon: "📱" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "🚀" },
        { name: "SQLite", icon: "🗃️" },
        { name: "RESTful APIs", icon: "🔗" },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git/GitHub", icon: "📚" },
        { name: "VS Code", icon: "💻" },
        { name: "Arduino", icon: "🔧" },
        { name: "C++", icon: "⚙️" },
        { name: "Problem Solving", icon: "🧩" },
      ],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="section-content">
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
