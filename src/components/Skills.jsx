const skillGroups = {
  "Frontend": ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Framer Motion"],
  "Backend & DB": ["Firebase", "Node.js (Basic)","Express.js"],
  "Tools & Workflow": ["Git", "GitHub", "Vercel", "Figma",],
};

const Skills = () => {
  return (
    <section className="bg-dark text-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Skills & Tools</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {Object.entries(skillGroups).map(([category, skills], idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
              <ul className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <li
                    key={i}
                    className="bg-grayDark text-light px-4 py-2 rounded-full border border-primary text-sm hover:bg-primary hover:text-white transition"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
