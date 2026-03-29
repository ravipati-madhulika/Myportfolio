"use client";

import Link from "next/link";

const images = [
  "/neuxa2.png",
  "/neuxa3.png",
  "/neuxa4.png",
];

export default function NeuxaProject() {
  return (
    <div className="design-layout">

      {/* ===== SIDEBAR ===== */}
      <aside className="design-sidebar">
        <Link href="/" className="logo">
          Ravipati Madhulika
        </Link>

        <p className="sidebar-title">UI/UX Design Work</p>

        <ul className="sidebar-list">
          <li><Link href="/design/maitri">Maitri Global Education</Link></li>
          <li><Link href="/design/peace">Peace App</Link></li>
          <li><Link href="/design/tastezy">Tastezy E-commerce</Link></li>
          <li className="active">Neuxa Website</li>
        </ul>

        <div className="sidebar-bottom">
          <Link href="/" className="back-btn">← Back</Link>
        </div>
      </aside>

      {/* ===== CONTENT ===== */}
      <main className="project-content">

        <h1 className="project-title">Project Brief</h1>

        <p className="project-desc">
          Neuxa is a live company website designed to showcase services,
          engage users, and streamline business operations through a structured
          and scalable digital platform.

          <br /><br />

          The platform includes:
          <br />• Services section highlighting company offerings  
          <br />• Packages and pricing plans for users  
          <br />• Blog system for content and updates  
          <br />• Internship opportunities and application flow  
          <br />• Reviews and testimonials from previous clients  
          <br />• Team section showcasing company members  

          <br /><br />

          In addition, the system also includes an Admin Panel (not part of Figma)
          to manage content, services, blogs, and user interactions efficiently.

          <br /><br />

          The design focuses on clarity, professionalism, and scalability,
          ensuring a seamless experience for both users and administrators
          while maintaining a strong brand presence.
        </p>

        {/* HERO IMAGE */}
        <div className="project-hero">
          <img src="/neuxa1.png" alt="Neuxa Website" />
        </div>

        {/* ===== IMAGES ===== */}
        <div className="project-images">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`neuxa-${index}`} />
          ))}
        </div>

      </main>
    </div>
  );
}