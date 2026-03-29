"use client";

import Link from "next/link";

const projects = [
  {
    title: "Neuxa",
    subtitle: "Company Website & Admin Panel",
    image: "/neuxa4.png",
    link: "/web/neuxa",
  },
  {
    title: "Zestfindz",
    subtitle: "E-commerce platform :main website(for customers)",
    image: "/zestfindz.png",
    link: "/web/zestfindz",
  },
  {
    title: "Zestfindz Seller & Admin",
    subtitle: "Seller onboarding,listing,Dashboard & Management System",
    image: "/seller.png",
    link: "/web/seller",
  },
  {
    title: "Dyslexia EmpowerHub",
    subtitle: "Learning Platform",
    image: "/dys.png",
    link: "/web/dy",
  },
  {
    title: "Diverse Tourist Destinations",
    subtitle: "Travel Website",
    image: "/tourist.png",
    link: "/web/destination",
  },
  {
    title: "FeatureFlag",
    subtitle: "A system used by developers to control features in production”",
    image: "/flag.png",
    link: "/web/flag",
  },
  {
    title: "SereneSphere",
    subtitle: "Wellness Platform",
    image: "/serene.png",
    link: "/web/serenesphere",
  },
];

export default function WebPage() {
  return (
    <div className="design-layout">

      {/* ===== SIDEBAR ===== */}
      <aside className="design-sidebar">
        <Link href="/" className="logo">
          Ravipati Madhulika
        </Link>

        <p className="sidebar-heading">Full Stack Projects</p>

        <ul className="sidebar-list">
          {projects.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <div className="sidebar-bottom">
          <Link href="/" className="back-btn">← Back</Link>
        </div>
      </aside>

      {/* ===== CONTENT ===== */}
      <main className="design-content">
        <div className="design-grid">
          {projects.map((item, index) => (
            <Link href={item.link} key={index} className="design-card">
              
              <img src={item.image} alt={item.title} />

              <div className="design-overlay">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>

            </Link>
          ))}
        </div>
      </main>

    </div>
  );
}