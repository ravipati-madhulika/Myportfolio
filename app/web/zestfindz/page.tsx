"use client";

import Link from "next/link";

const images = [
  "/zest1.png",
  "/zest2.png",
  "/zest3.png",
  "/zest4.png",
  "/zest5.png"
];

export default function ZestfindzProject() {
  return (
    <div className="design-layout">

      {/* ===== SIDEBAR ===== */}
      <aside className="design-sidebar">
        <Link href="/" className="logo">
          Ravipati Madhulika
        </Link>

        <p className="sidebar-title">Full Stack Projects</p>

        <ul className="sidebar-list">
          <li><Link href="/web/neuxa">Neuxa</Link></li>
          <li className="active">Zestfindz</li>
          <li><Link href="/web/seller">Zestfindz Seller & Admin</Link></li>
          <li><Link href="/web/dy">Dyslexia EmpowerHub</Link></li>
          <li><Link href="/web/destination">Tourist Destinations</Link></li>
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
          href="https://zestfindz.com/" 
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
          Zestfindz is a full stack e-commerce platform designed to connect users
          with curated products through a seamless and scalable shopping experience.

          <br /><br />

          The platform includes:
          <br />• User-friendly product browsing and search  
          <br />• Secure authentication and user accounts  
          <br />• Shopping cart and checkout flow  
          <br />• Product categorization and filtering  
          <br />• Responsive UI for smooth cross-device experience  

          <br /><br />

          The system focuses on performance, scalability, and intuitive user
          experience, ensuring efficient product discovery and interaction.

          <br /><br />

          Built using modern full stack technologies, the platform integrates
          frontend, backend, APIs, and database systems to deliver a complete
          production-ready solution.
        </p>

        {/* HERO IMAGE */}
        <div className="project-hero">
          <img src="/zestfindz.png" alt="Zestfindz" />
        </div>

        {/* IMAGES */}
        <div className="project-images">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`zest-${index}`} />
          ))}
        </div>

      </main>
    </div>
  );
}