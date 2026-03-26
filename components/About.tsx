"use client";

import { useEffect, useState } from "react";

const items = [
  {
    number: "01",
    title: "UI/UX",
    desc: "Designing intuitive interfaces.",
    img: "/uiux.jpeg",
  },
  {
    number: "02",
    title: "WEB DEV",
    desc: "Building scalable web apps.",
    img: "/webdev.jpeg",
  },
  {
    number: "03",
    title: "MOBILE",
    desc: "Creating mobile experiences.",
    img: "/Mobileapp.jpeg",
  },
];

export default function About() {
  const [active, setActive] = useState(0);
  const angleStep = 90;

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about">

      {/* LEFT ARC WITH IMAGES */}
      <div className="arc">
  <div
    className="arc-rotate"
    style={{
      transform: `rotate(-${active * angleStep}deg)`
    }}
  >
    {items.map((item, index) => (
      <div
        key={index}
        className={`arc-item ${index === active ? "active" : ""}`}
        style={{
          transform: `rotate(${index * angleStep}deg) translate(320px)`
        }}
      >
        <img src={item.img} alt="" />
      </div>
    ))}
  </div>
</div>

      {/* CENTER TEXT */}
      <div className="center-content">
        <h2>ABOUT ME</h2>
        <p>
          I design intuitive interfaces and build scalable applications.
          Focused on seamless digital experiences.
        </p>
      </div>

      {/* ACTIVE ROLE */}
      <div className="active-role">
        <h1>{items[active].number}</h1>
        <div>
          <h3>{items[active].title}</h3>
          <p>{items[active].desc}</p>
        </div>
      </div>

    </section>
  );
}