"use client";

import Link from "next/link";

const images = [
  "/flag1.png",
  "/flag2.png",
  "/flag3.png",
  "/flag4.png",
];

export default function FeatureFlagProject() {
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
          <li className="active">FeatureFlag</li>
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
          FeatureFlag is a backend-driven feature toggle system designed to
          enable controlled feature releases in production environments without
          requiring redeployment.

          <br /><br />

          The system allows developers to dynamically enable or disable features
          for specific users, environments, or percentages of traffic.

          <br /><br />

          <b>Core Features:</b>
          <br />• Toggle features ON/OFF in real-time  
          <br />• Environment-based control (dev, staging, production)  
          <br />• User-specific feature targeting  
          <br />• Gradual rollout using percentage-based release  
          <br />• API-driven integration with applications  

          <br /><br />

          <b>System Capabilities:</b>
          <br />• Centralized feature management dashboard  
          <br />• Reduced deployment risk through controlled releases  
          <br />• A/B testing support for feature experimentation  
          <br />• Faster debugging by disabling faulty features instantly  

          <br /><br />

          The system is designed to improve development workflows by allowing
          teams to decouple feature deployment from feature release, ensuring
          safer and more flexible production environments.(--ONGOING PROJECT--)
        </p>

        {/* HERO 
        <div className="project-hero">
          <img src="/flag1.png" alt="FeatureFlag System" />
        </div>
        */}
        {/* IMAGES 
        <div className="project-images">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`flag-${index}`} />
          ))}
        </div>
       */}
      </main>
    </div>
  );
}