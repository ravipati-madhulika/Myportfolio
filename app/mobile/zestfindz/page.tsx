"use client";

import Link from "next/link";

const images = [
  "/mobile1.png",
  "/mobile2.png",
  "/mobile3.png",
  "/mobile4.png",
];

export default function MobileZestfindzProject() {
  return (
    <div className="design-layout">

      {/* ===== SIDEBAR ===== */}
      <aside className="design-sidebar">
        <Link href="/" className="logo">
          Ravipati Madhulika
        </Link>

        <p className="sidebar-title">Mobile Projects</p>

        <ul className="sidebar-list">
          <li className="active">Zestfindz Mobile App</li>
        </ul>

        <div className="sidebar-bottom">
          <Link href="/mobile" className="back-btn">← Back</Link>
        </div>
      </aside>

      {/* ===== CONTENT ===== */}
      <main className="project-content">

        <h1 className="project-title">Project Brief</h1>

        <p className="project-desc">
          The Zestfindz Mobile App is a cross-platform e-commerce application
          developed using React Native, focused on delivering a seamless and
          responsive shopping experience.

          <br /><br />

          The application was built by translating detailed Figma designs into
          pixel-perfect mobile screens, ensuring consistency with Material Design
          principles and modern UI standards.

          <br /><br />

          <b>UI Development & Implementation:</b>
          <br />• Converted Figma design system into reusable components  
          <br />• Built multiple screens including chat support, brand pages, festival pages  
          <br />• Implemented skeleton loaders for better UX during API calls  
          <br />• Designed modular and scalable component architecture  

          <br /><br />

          <b>Core Features Developed:</b>
          <br />• Chat support system with FAQs and real-time messaging UI  
          <br />• Product browsing with categories, filters, and search  
          <br />• Sub-category based navigation and product listings  
          <br />• Zestcoins reward system interface  
          <br />• Rating filter and sorting functionality  

          <br /><br />

          <b>Backend Integration & Architecture:</b>
          <br />• Integrated APIs using a custom fetch wrapper  
          <br />• Secure authentication using encrypted keychain storage  
          <br />• Offline-first approach using WatermelonDB  
          <br />• Efficient state management with database-driven UI updates  

          <br /><br />

          The project demonstrates strong expertise in mobile UI development,
          API integration, and scalable application architecture, with a focus
          on performance and real-world usability.
        </p>

        {/* IMAGES */}
        <div className="project-images">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`mobile-${index}`} />
          ))}
        </div>

      </main>
    </div>
  );
}