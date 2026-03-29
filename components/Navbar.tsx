"use client";

import { Home, User, GraduationCap, Briefcase, Code, Folder } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { icon: <Home />, label: "Home", id: "hero" },
    { icon: <User />, label: "About", id: "About" },
    { icon: <GraduationCap />, label: "Study", id: "study" },
    { icon: <Briefcase />, label: "Experience", id: "experience" },
    { icon: <Code />, label: "Skills", id: "skills" },
    { icon: <Folder />, label: "Projects", id: "projects" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar">
      {navItems.map((item, i) => (
        <div key={i} className="nav-item" onClick={() => scrollTo(item.id)}>
          <div className="nav-icon">{item.icon}</div>
          <span className="nav-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}