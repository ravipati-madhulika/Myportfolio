"use client";

import Link from "next/link";

const images = [
  "/dest1.png",
  "/dest2.png",
  "/dest3.png",
  "/dest4.png",
  "/dest5.png",
  "/dest6.png",
];

export default function TourismProject() {
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
          <li><Link href="/web/zestfindz">Zestfindz</Link></li>
          <li><Link href="/web/seller">Zestfindz Seller & Admin</Link></li>
          <li><Link href="/web/dy">Dyslexia EmpowerHub</Link></li>
          <li className="active">Tourist Destinations</li>
          <li><Link href="/web/flag">FeatureFlag</Link></li>
          <li><Link href="/web/serenesphere">SereneSphere</Link></li>
        </ul>

        <div className="sidebar-bottom">
          <Link href="/web" className="back-btn">← Back</Link>
        </div>
      </aside>

      {/* ===== CONTENT ===== */}
      <main className="project-content">

        {/* 🔥 TOP BUTTON */}
        <div className="project-topbar">
          <a href="#" className="connect-btn">
            View Project →
          </a>

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
          This project was developed as part of the Smart India Hackathon under
          the theme <b>“Exploring Indian Culture and Heritage”</b>. It focuses on
          discovering and promoting hidden gem destinations across India.

          <br /><br />

          The platform helps users explore lesser-known places with rich cultural
          and heritage value, providing detailed insights for better travel planning.

          <br /><br />

          <b>Key Features:</b>
          <br />• Interactive India map with state-based navigation  
          <br />• Hidden gems for each state with detailed descriptions  
          <br />• Best time to visit, timings, and temperature insights  
          <br />• User reviews and ratings for each destination  
          <br />• Map integration for location tracking  

          <br /><br />

          <b>Community & Interaction:</b>
          <br />• Users can upload and share new hidden destinations  
          <br />• Dynamic feed of recently added places  
          <br />• Image gallery for visual exploration  

          <br /><br />

          <b>Smart Features:</b>
          <br />• Chatbot for travel and hotel recommendations  
          <br />• Personalized exploration experience  

          <br /><br />

          The system was built using <b>React, Flask, Python, and MySQL</b>,
          integrating frontend interactivity with backend data management to
          deliver a scalable and engaging travel platform.
        </p>

        {/* HERO IMAGE */}
        <div className="project-hero">
          <img src="/tourist.png" alt="Tourism Project" />
        </div>

        {/* IMAGES */}
        <div className="project-images">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`tour-${index}`} />
          ))}
        </div>

      </main>
    </div>
  );
}