"use client";

import { useEffect, useState } from "react";


export default function Hero(): JSX.Element {
  const roles = ["DESIGNER", "DEVELOPER"];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState(roles[0]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const morphText = (from: string, to: string) => {
      let step = 0;

      const max = Math.max(from.length, to.length);

      const interval = setInterval(() => {
        step++;

        const progress = step / max;

        const newText = to
          .split("")
          .map((char, i) => {
            if (i < progress * max) return char;
            return from[i] || "";
          })
          .join("");

        setDisplayText(newText);

        if (step >= max) {
          clearInterval(interval);

          timeout = setTimeout(() => {
            setIndex((prev) => (prev + 1) % roles.length);
          }, 1500);
        }
      }, 80);
    };

    morphText(roles[index], roles[(index + 1) % roles.length]);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-tag">MOBILE</p>
  
        <h1 className="hero-main">
          <span className="uiux">UI/UX</span>
          <span className="role">{displayText}</span>
        </h1>
  
        <p className="hero-sub">
          Design Engineer & Full Stack Developer.
        </p>
      </div>
  
      {/* 👇 ADD THIS BACK */}
      <div className="hero-right">
        <img src="/hero.png" alt="hero" />
      </div>
    </section>
  );
}