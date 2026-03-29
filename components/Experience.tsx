"use client";

const experience = [
    {
      title: "UI/UX Design",
      company: "Maitri Global Education",
      duration: "Jun 2025 – Sep 2025",
      role: "UI/UX Design Intern",
      image: "/figma.png",
      logo: "/maitri.png", // 👈 ADD
      points: [
        "Designed official website UI",
        "Worked on CRM/CMS interfaces",
        "Translated Figma → frontend",
      ],
    },
    {
      title: "Web Development",
      company: "Neuxa Global",
      duration: "May 2025 – Oct 2025",
      role: "Full Stack Developer Intern",
      image: "/web.png",
      logo: "/neuxa.png", // 👈 ADD
      points: [
        "Built company website & dashboard",
        "Worked with Next.js, Node.js, MySQL",
        "Implemented APIs & authentication",
      ],
    },
    {
      title: "Mobile Development",
      company: "ZestFindz",
      duration: "Nov 2025 – Present",
      role: "Frontend Web & Mobile Developer",
      image: "/mobile.png",
      logo: "/zestfindz.png", // 👈 ADD
      points: [
        "Worked on seller, admin & customer websites",
        "Built mobile app using React Native",
        "Handled performance & UI",
        "Integrated APIs & production flow",
      ],
    },
  ];
export default function Experience() {
  return (
    <section className="experience">
      <div className="exp-header">
        <p className="exp-tag">EXPERIENCE</p>
        <h2 className="exp-title">What I’ve Worked On</h2>
        <p>--Hover or click to explore more--</p>
      </div>

      <div className="exp-container">
        {experience.map((item, index) => (
          <div
            key={index}
            className={`exp-item ${
                index % 2 === 0 ? "up" : "down"
              }`}
          >
            <div className="exp-card">

              {/* FLOATING IMAGE */}
              <div className="exp-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="exp-content">
                <h3>{item.role}</h3>
                <p className="duration">{item.duration}</p>

                <div className="exp-details">
                    {/* 👇 LOGO */}
                    <div className="company-logo">
                        <img src={item.logo} alt={item.company} />
                    </div>
                  <p className="company">{item.company}</p>

                  <ul>
                    {item.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}