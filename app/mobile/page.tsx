"use client";

import Link from "next/link";

const projects = [
  {
    title: "Zestfindz Mobile App",
    subtitle: "E-commerce Mobile Experience",
    image: "/mobile5.png",
    link: "/mobile/zestfindz",
  },
];

export default function MobilePage() {
  return (
    <div className="design-layout">

      {/* ===== SIDEBAR ===== */}
      <aside className="design-sidebar">
        <Link href="/" className="logo">
          Ravipati Madhulika
        </Link>

        <p className="sidebar-heading">Mobile Projects</p>

        <ul className="sidebar-list">
          <li className="active">
            <Link href="/mobile/zestfindz">Zestfindz Mobile App</Link>
          </li>
        </ul>

        <div className="sidebar-bottom">
          <Link href="/" className="back-btn">← Back</Link>
        </div>
      </aside>

      {/* ===== CONTENT ===== */}
      <main className="design-content">

        {/* 👇 centered single card */}
        <div className="mobile-single">
          {projects.map((item, index) => (
            <Link href={item.link} key={index} className="design-card">
              
              <img src={item.image} alt={item.title} />

              <div className="design-overlay">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>

            </Link>
          ))}
        </div>

      </main>
    </div>
  );
}