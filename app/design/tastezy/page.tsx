"use client";

import Link from "next/link";

const images = [
  "/taste1.png",
  "/taste2.png",
  "/taste3.png",
  "/taste4.png",
];

export default function TastezyProject() {
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
          <li className="active">Tastezy E-commerce</li>
          <li className="/design/neuxa">Neuxa official website</li>
        </ul>

        <div className="sidebar-bottom">
          <Link href="/" className="back-btn">← Back</Link>
        </div>
      </aside>

      {/* ===== CONTENT ===== */}
      <main className="project-content">

        <h1 className="project-title">Project Brief</h1>

        <p className="project-desc">
          Tastezy is an e-commerce mobile application designed to support and
          promote local sellers from Andhra Pradesh by bringing authentic homemade
          products to a wider audience.

          <br /><br />

          The platform focuses on:
          <br />• Selling traditional homemade items like pickles, podi, and snacks  
          <br />• Empowering local vendors and small-scale businesses  
          <br />• Providing users with access to authentic regional products  

          <br /><br />

          The design emphasizes trust, simplicity, and cultural connection,
          ensuring users can easily browse, discover, and purchase products
          while supporting local communities.
        </p>

        {/* HERO IMAGE */}
        <div className="project-hero">
          <img src="/taste1.png" alt="Tastezy App" />
        </div>

        {/* ===== IMAGES ===== */}
        <div className="project-images">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`taste-${index}`} />
          ))}
        </div>

      </main>
    </div>
  );
}