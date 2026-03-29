"use client";

import Link from "next/link";

const images = [
  "/peace1.png",
  "/peace2.png",
  "/peace3.png",
  "/peace4.png",
];

export default function PeaceProject() {
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
          <li className="active">Peace App</li>
          <li><Link href="#">Tastezy E-commerce</Link></li>
          <li><Link href="#">Neuxa Official website</Link></li>
        </ul>

        <div className="sidebar-bottom">
          <Link href="/" className="back-btn">← Back</Link>
        </div>
      </aside>

      {/* ===== CONTENT ===== */}
      <main className="project-content">

        <h1 className="project-title">Project Brief</h1>

        <p className="project-desc">
          Peace App is a mental health and wellness mobile application designed
          to help users improve emotional well-being and build mindfulness habits.
          The app focuses on creating a calming, supportive, and intuitive digital
          experience.

          <br /><br />

          The platform includes:
          <br />• Guided Meditation sessions for relaxation and stress relief  
          <br />• Book Reading section for self-growth and mental wellness  
          <br />• Articles on emotional awareness and mental health education  
          <br />• Emotion Tracking to help users understand their feelings  
          <br />• AI Chatbot for support and interaction  

          <br /><br />

          The design emphasizes simplicity, calm visuals, and user comfort,
          ensuring users feel safe, guided, and supported throughout their journey.
        </p>

        {/* HERO IMAGE */}
        <div className="project-hero">
          <img src="/peace1.png" alt="Peace App" />
        </div>

        {/* ===== IMAGES ===== */}
        <div className="project-images">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`peace-${index}`} />
          ))}
        </div>

      </main>
    </div>
  );
}