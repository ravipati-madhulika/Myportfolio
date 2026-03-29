"use client";

import Link from "next/link";

const projects = [
  {
    title: "UI/UX Design Projects",
    link: "design/",  
    color: "#c4b5fd",
    gif: "/figma.gif",
  },
  {
    title: "Full Stack Web Projects",
    link: "web/",     
    color: "#7dd3fc",
    gif: "/web.gif",
  },
  {
    title: "Mobile App Projects",
    link: "mobile/",  
    color: "#86efac",
    gif: "/mobile.gif",
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="projects-heading">PROJECTS</h2>

      <div className="cards-row">
        {projects.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={`card card-${index}`}
            style={{ backgroundColor: item.color }}
          >
            <img src={item.gif} className="card-gif" alt="" />

            <div className="card-content">
              <h3>{item.title}</h3>
              <p>Click to explore →</p>
            </div>
          </Link>
        ))}
      </div>

      <p className="projects-note">
        Click on the cards to explore more about my projects, including personal work and internship experiences showcased here.
      </p>
    </section>
  );
}