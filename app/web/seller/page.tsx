"use client";

import Link from "next/link";

const images = [
  "/seller1.png",
  "/seller2.png",
  "/seller3.png",
  "/seller4.png",
  "/seller5.png",
  "/seller6.png",
  "/seller7.png",
  "/seller8.png",

];

export default function SellerAdminProject() {
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
          <li className="active">Zestfindz Seller & Admin</li>
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

        {/* 🔥 TOP BUTTON */}
        <div className="project-topbar">
          <a 
            href="https://seller.zestfindz.com/" 
            className="connect-btn"
          >
            seller →
          </a>
          <a 
            href="https://admin.zestfindz.com/" 
            className="connect-btn"
          >
            admin →
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
          The Zestfindz Seller & Admin System is a full stack dashboard designed
          to manage the entire e-commerce lifecycle, including seller onboarding,
          product management, order processing, and platform administration.

          <br /><br />

          <b>Seller Dashboard Features:</b>
          <br />• Seller onboarding and profile management  
          <br />• Product listing (single & bulk upload)  
          <br />• Inventory and stock management  
          <br />• Coupon and discount creation  
          <br />• Order management and tracking  
          <br />• Payment tracking and earnings dashboard  

          <br /><br />

          <b>Admin Panel Features:</b>
          <br />• Approval of seller listings before going live  
          <br />• Managing users, sellers, and products  
          <br />• Customer support and issue resolution  
          <br />• Content and platform-level control  
          <br />• Monitoring orders, transactions, and activity  

          <br /><br />

          The system ensures smooth coordination between sellers and customers,
          where product listings are verified by admins before being reflected
          on the main platform.

          <br /><br />

          Built as a scalable full stack solution, this dashboard integrates
          real-time data handling, secure authentication, and efficient workflow
          management for both sellers and administrators.
        </p>

        {/* HERO */}
        <div className="project-hero">
          <img src="/seller.png" alt="Seller Dashboard" />
        </div>

        {/* IMAGES */}
        <div className="project-images">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`seller-${index}`} />
          ))}
        </div>

      </main>
    </div>
  );
}