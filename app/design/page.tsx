"use client";

import Link from "next/link";

const projects = [
  {
    title: "Maitri Global Education",
    subtitle: "Official Website and crm,cms systems",
    image: "/maitricrm.png",
    link: "/design/maitri",
  },
  {
    title: "Peace App",
    subtitle: "Mental Wellness App",
    image: "/peace1.png",
    link: "/design/peace",
  },
  {
    title: "Tastezy E-commerce Website",
    subtitle: "Food Ordering App",
    image: "/taste1.png",
    link: "/design/tastezy",
  },
  {
    title: "Neuxa Website",
    subtitle: "Neuxa global official website",
    image: "/neuxa4.png",
    link: "/design/neuxa",
  },
];

export default function DesignPage() {
  return (
    <div className="design-layout">

      {/* 🔥 LEFT SIDEBAR */}
      <aside className="design-sidebar">
        <h2 className="logo">Ravipati Madhulika</h2>

        <p className="sidebar-heading">UI/UX Design Work</p>

        <div className="sidebar-bottom">
          <p>Contact</p>
        </div>
      </aside>

      {/* 👉 RIGHT CONTENT */}
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