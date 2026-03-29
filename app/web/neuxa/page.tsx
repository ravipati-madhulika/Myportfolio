"use client";

import Link from "next/link";

const images = [
  "/neu2.png",
  "/neu3.png",
  "/neu4.png",
];

export default function NeuxaWebProject() {
  return (
    <div className="design-layout">

      {/* ===== SIDEBAR ===== */}
      <aside className="design-sidebar">
        <Link href="/" className="logo">
          Ravipati Madhulika
        </Link>

        <p className="sidebar-title">Full Stack Projects</p>

        <ul className="sidebar-list">
          <li><Link href="active">Neuxa</Link></li>
          <li><Link href="/web/zestfindz">Zestfindz</Link></li>
          <li><Link href="/web/seller">Zestfindz Seller & Admin</Link></li>
          <li><Link href="/web/dy">Dyslexia EmpowerHub</Link></li>
          <li className="destination">Tourist Destinations</li>
          <li><Link href="/web/flag">FeatureFlag</Link></li>
          <li><Link href="/web/serenesphere">SereneSphere</Link></li>
        </ul>

        <div className="sidebar-bottom">
          <Link href="/web" className="back-btn">← Back</Link>
        </div>
      </aside>

      {/* ===== CONTENT ===== */}
      <main className="project-content">
      <div className="project-topbar">
        <a 
          href="https://www.neuxaglobal.com/" 
          target="_blank" 
          className="connect-btn"
        >
          Live link →
        </a>

        {/* CURVED ARROW */}
        <svg className="connect-arrow" viewBox="0 0 200 100">
          <path 
            d="M10 80 Q 120 10 190 40" 
            stroke="black" 
            fill="transparent" 
            strokeWidth="2"
            strokeDasharray="5 5"
          />
        </svg>
      </div>
        <h1 className="project-title">Project Brief</h1>

        <p className="project-desc">
          Neuxa is a live full stack company website developed to showcase services,
          manage user interactions, and provide a scalable digital presence.

          <br /><br />

          The platform includes:
          <br />• Services and packages display for clients  
          <br />• Blog system for publishing content  
          <br />• Internship application flow  
          <br />• Reviews and testimonials section  
          <br />• Team showcase  

          <br /><br />

          Additionally, the system includes a fully functional Admin Panel
          that allows management of services, blogs, users, and content dynamically.

          <br /><br />

          The project focuses on scalability, structured architecture, and
          real-world usability, ensuring smooth interaction for both users
          and administrators.
        </p>

        {/* HERO IMAGE */}
        <div className="project-hero">
          <img src="/neu1.png" alt="Neuxa Website" />
        </div>

        {/* STACKED IMAGES */}
        <div className="project-images">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`neuxa-${index}`} />
          ))}
        </div>

      </main>
    </div>
  );
}