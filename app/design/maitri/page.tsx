"use client";

import Link from "next/link";

const images = [
  "/branding.png",
  "/colors.png",
  "/excel.png",
  "/font.png",
  "/landing.png",
  "/logo.png",
  "/maitricrm.png",
  "/prototype.png",
  "/scholarship.png",
  "/wireframing.png",
];

export default function MaitriProject() {
  return (
    <div className="design-layout">

      {/* ===== SIDEBAR ===== */}
      <aside className="design-sidebar">
      <Link href="/" className="logo">
        Ravipati Madhulika
        </Link>

        <p className="sidebar-title">UI/UX Design Work</p>

        <ul className="sidebar-list">
          <li className="active">Maitri Global Education</li>
          <li><Link href="#">Peace App</Link></li>
          <li><Link href="#">Tastezy E-commerce</Link></li>
          <li><Link href="#">Neuxa Official website</Link></li>
        </ul>

        <div className="sidebar-bottom">
          <Link href="/" className="back-btn">← Back</Link>
        </div>
      </aside>

      {/* ===== RIGHT CONTENT ===== */}
      <main className="project-content">

        <h1 className="project-title">Project Brief</h1>

        <p className="project-desc">
          Maitri Global Education is an official website and CRM/CMS system
          designed to streamline educational services and internal operations.
          I contributed across UI/UX design, wireframing, prototyping, and
          building scalable design systems.

          <br /><br />

          The platform includes:
          <br />• Official Website for students and global reach  
          <br />• CRM System for managing leads and communication  
          <br />• CMS Dashboard for content and admin control  

          <br /><br />

          The design focuses on clarity, usability, and efficient workflows,
          ensuring a seamless experience for both users and administrators.
        </p>

        {/* HERO */}
        <div className="project-hero">
          <img src="/maitricrm.png" alt="Maitri CRM" />
        </div>

        {/* ===== ORIGINAL SIZE IMAGES (NO GRID) ===== */}
        <div className="project-images">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`img-${index}`} />
          ))}
        </div>

      </main>
    </div>
  );
}