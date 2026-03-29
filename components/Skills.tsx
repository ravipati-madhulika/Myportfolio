"use client";

type CSSVars = React.CSSProperties & {
  "--x": string;
  "--y": string;
  "--delay": string;
};

const skillsData = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
        { name: "REST API", icon: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      ],
    },
    {
      title: "UI/UX",
      skills: [
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Canva", icon: "https://cdn.simpleicons.org/canva" },
        { name: "Spline", icon: "https://seeklogo.com/images/S/spline-logo-9B4F8BEE1D-seeklogo.com.png" },
        { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
        { name: "Wireframing", icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png" },
        { name: "Prototyping", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png" },
      ],
    },
  ];

export default function Skills() {
  return (
    <section className="skills">
      <h2 className="skills-title">Technical Skills</h2>

      <div className="skills-row">
        {skillsData.map((folder, i) => (
          <div className={`folder ${folder.title === "UI/UX" ? "uiux-folder" : ""}`} key={i}>
            
            <img src="/folder.png" className="folder-img" />

            <p className="folder-name">{folder.title}</p>

            <div className="skills-pop">
              {folder.skills.map((skill, index) => {
                
                // ✅ DEFINE x and y here
              

                const total = folder.skills.length;

// full semicircle
const angleStart = -Math.PI + 0.3;
const angleEnd = -0.3;


// 🔥 dynamic radius based on count
const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

const baseRadius = isMobile ? 45 : 65;
const radius = Math.min(baseRadius + total * 4, isMobile ? 90 : 130);
// better spacing
const spreadFactor = isMobile ? 1.4 : 1.2; // 🔥 increase spacing
const angleStep =
  total > 1
    ? ((angleEnd - angleStart) / (total - 1)) * spreadFactor
    : 0;
    const rowOffset = index % 2 === 0 ? 0 : (isMobile ? 10 : 15);
const angle = angleStart + index * angleStep;

// clean positions (no weird random shifts)
let x = Math.cos(angle) * radius;
let y = Math.sin(angle) * radius - (isMobile ? 40 : 60);
                return (
                  <div
                    key={index}
                    className="skill-item"
                    style={{
                      "--x": `${x}px`,
                      "--y": `${y}px`,
                      "--delay": `${index * 0.08}s`,
                    } as CSSVars}
                  >
                    <img src={skill.icon} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}