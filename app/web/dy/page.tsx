"use client";

import Link from "next/link";

const images = [
  "/dys2.png",
  "/dys3.png",
  "/dys4.png",
  "/dys5.png",
  "/dys6.png",
  "/dys7.png",
];

export default function DyslexiaProject() {
  return (
    <div className="design-layout">

      {/* SIDEBAR */}
      <aside className="design-sidebar">
        <Link href="/" className="logo">
          Ravipati Madhulika
        </Link>

        <p className="sidebar-title">Full Stack Projects</p>

        <ul className="sidebar-list">
          <li><Link href="/web/neuxa">Neuxa</Link></li>
          <li><Link href="/web/zestfindz">Zestfindz</Link></li>
          <li><Link href="/web/seller">Zestfindz Seller & Admin</Link></li>
          <li className="active">Dyslexia EmpowerHub</li>
          <li><Link href="/web/destination">Tourist Destinations</Link></li>
          <li><Link href="/web/flag">FeatureFlag</Link></li>
          <li><Link href="/web/serenesphere">SereneSphere</Link></li>
        </ul>

        <div className="sidebar-bottom">
          <Link href="/web" className="back-btn">← Back</Link>
        </div>
      </aside>

      {/* CONTENT */}
      <main className="project-content">

        <h1 className="project-title">Project Brief</h1>

        <p className="project-desc">
          Dyslexia EmpowerHub is an AI-powered learning platform designed to
          assist individuals with dyslexia through personalized learning,
          speech-based interaction, and adaptive feedback systems.

          <br /><br />

          The platform architecture was designed using a modular approach,
          improving scalability, maintainability, and performance.

          <br /><br />

          <b>Core Features:</b>
          <br />• Authentication and user tracking system  
          <br />• Learning, practice, and mock test pipelines  
          <br />• Text-to-Speech (TTS) and Speech-to-Text (STT) integration  
          <br />• Feedback engine for performance evaluation  
          <br />• Recommendation system for personalized learning paths  

          <br /><br />

          <b>AI & Intelligence Layer:</b>
          <br />• Adaptive learning recommendations based on user performance  
          <br />• Error pattern tracking for improved word mastery  
          <br />• Dynamic difficulty adjustment  

          <br /><br />

          <b>System Architecture:</b>
          <br />• Modular backend architecture  
          <br />• Database and static asset deployment completed  
          <br />• Backend automation and API optimization in progress  

          <br /><br />

          The project prioritizes performance, scalability, and accessibility,
          while balancing AI capabilities with cost-efficient deployment.
        </p>

        {/* HERO */}
        <div className="project-hero">
          <img src="/dys.png" alt="Dyslexia Platform" />
        </div>

        {/* IMAGES */}
        <div className="project-images">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`dys-${index}`} />
          ))}
        </div>

      </main>
    </div>
  );
}