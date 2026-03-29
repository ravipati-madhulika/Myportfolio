"use client";

import Link from "next/link";

const images = [
  "/serene1.png",
  "/serene2.png",
  "/serene3.png",
  "/serene4.png",
  "/serene5.png",
  "/serene6.png",
  "/serene7.png",
  "/serene8.png",
];

export default function SereneSphereProject() {
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
          <li><Link href="/web/dy">Dyslexia EmpowerHub</Link></li>
          <li><Link href="/web/destination">Tourist Destinations</Link></li>
          <li><Link href="/web/flag">FeatureFlag</Link></li>
          <li className="active">SereneSphere</li>
        </ul>

        <div className="sidebar-bottom">
          <Link href="/web" className="back-btn">← Back</Link>
        </div>
      </aside>

      {/* CONTENT */}
      <main className="project-content">

        <h1 className="project-title">Project Brief</h1>

        <p className="project-desc">
          SereneSphere is a mental wellness platform designed to promote
          relaxation, emotional balance, and mindfulness through interactive
          and engaging features.

          <br /><br />

          The platform includes:
          <br />• Meditation and mental wellness content  
          <br />• Pomodoro timer for productivity and focus  
          <br />• Personal journaling system (including anonymous posting)  
          <br />• Mini games designed for relaxation and stress relief  
          <br />• Music integration for calming and focus enhancement  

          <br /><br />

          The system focuses on improving mental clarity, reducing stress,
          and creating a safe digital space for users to express and manage
          their emotions.

          <br /><br />

          Built using <b>PHP, SQL, Three.js, HTML, and CSS</b>, the platform
          combines interactive UI elements with backend data handling to
          deliver a smooth and immersive user experience.
        </p>

        {/* HERO */}
        <div className="project-hero">
          <img src="/serene.png" alt="SereneSphere" />
        </div>

        {/* IMAGES */}
        <div className="project-images">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`serene-${index}`} />
          ))}
        </div>

      </main>
    </div>
  );
}