"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    img: "/Mobileapp.jpeg",
    text: "Mobile App Developer",
  },
  {
    img: "/webdev.jpeg",
    text: "Full Stack Developer",
  },
  {
    img: "/uiux.jpeg",
    text: "UI/UX Designer",
  },
];

export default function About(): JSX.Element {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2500); // ⏱ change every 2.5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about">
    <div className="about-wrapper">

    {/* LEFT SIDE */}
    <div className="about-left">

      {/* HEADER */}
      <div className="about-header">
        <p className="about-tag">WHO I AM</p>
        <h2 className="about-title">About</h2>
      </div>

      {/* CAROUSEL UNDER HEADER */}
      <div className="about-carousel">
  <div className="carousel-3d">
    {slides.map((slide, i) => {
      const position = (i - index + slides.length) % slides.length;

      return (
        <div
          key={i}
          className={`carousel-card pos-${position}`}
        >
          <img src={slide.img} alt="" />
          {position === 0 && <p>{slide.text}</p>}
        </div>
      );
    })}
  </div>
</div>

    </div>

    {/* RIGHT SIDE (UNCHANGED) */}
    <div className="about-right">

      <h1 className="about-text">
        I’m a <span className="highlight">Software Engineer Student</span>{" "}
        with hands-on experience in{" "}
        <span className="highlight">Mobile App Development</span>,{" "}
        <span className="highlight">Full Stack Web Development</span>, and{" "}
        <span className="highlight">UI/UX Design</span>.
      </h1>

      <p className="about-desc">
        I’ve completed internships where I built scalable web platforms, 
        developed mobile applications independently, and designed intuitive 
        user experiences.
      </p>

    </div>

  </div>

</section>
  );
}