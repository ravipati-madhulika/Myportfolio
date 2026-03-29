"use client";

import { useEffect, useState } from "react";
export default function Hero(): JSX.Element {
  const roles = ["DESIGNER", "DEVELOPER"];
  const [displayText, setDisplayText] = useState(roles[0]);
  const name = "Ravipati Madhulika";
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    let iterations = 0;

    const interval = setInterval(() => {
      setDisplayName((prev) =>
        name
          .split("")
          .map((letter, index) => {
            if (index < iterations) return name[index];
            return String.fromCharCode(65 + Math.random() * 26);
          })
          .join("")
      );

      iterations += 1 / 2;

      if (iterations >= name.length) {
        clearInterval(interval);
        setDisplayName(name);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const pupils = document.querySelectorAll(".pupil");
  
      pupils.forEach((pupil) => {
        const eye = pupil.parentElement!;
        const rect = eye.getBoundingClientRect();
  
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
  
        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
  
        const moveX = Math.cos(angle) * 5;
        const moveY = Math.sin(angle) * 5;
  
        (pupil as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
  
    window.addEventListener("mousemove", handleMove);
  
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
  useEffect(() => {
    let currentIndex = 0;
    let timeout: NodeJS.Timeout;

    const morphLoop = () => {
      const from = roles[currentIndex];
      const to = roles[(currentIndex + 1) % roles.length];

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

          currentIndex = (currentIndex + 1) % roles.length;

          // ✅ HOLD FINAL WORD FOR 2 SECONDS
          timeout = setTimeout(() => {
            morphLoop();
          }, 500);
        }
      }, 100); // keep this fast for smooth morph
    };

    morphLoop();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="hero">
      <div className="hero-socials">
        {/* GitHub */}
        <a href="https://github.com/ravipati-madhulika" target="_blank" rel="noopener noreferrer">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.25 1.84 1.25 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.3-1.23 3.3-1.23.66 1.64.25 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.63-2.8 5.66-5.48 5.96.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>

        {/* LeetCode */}
        <a href="https://leetcode.com/u/its_madhu_lika/" target="_blank" rel="noopener noreferrer">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.48 3.499a1 1 0 011.4 0l6.62 6.62a1 1 0 010 1.41l-6.62 6.62a1 1 0 01-1.4-1.41L18.3 12l-4.82-4.82a1 1 0 010-1.41z"/>
            <path d="M10.52 20.501a1 1 0 01-1.4 0l-6.62-6.62a1 1 0 010-1.41l6.62-6.62a1 1 0 011.4 1.41L5.7 12l4.82 4.82a1 1 0 010 1.41z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/rps-madhulika" target="_blank" rel="noopener noreferrer">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C19.9 7.65 22 9.3 22 13.2V20h-4v-6.1c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.58-2.33 3.21V20h-4V8z"/>
          </svg>
        </a>

        </div>
      <div className="hero-left">
      <h2 className="hero-name">{displayName}</h2>
        <h1 className="hero-main">
          <span className="uiux">UI/UX</span>
          <span className="role">{displayText}</span>
        </h1>

        <p className="hero-sub">
          Designer & Full Stack Developer.
        </p>
        <div className="resume-btn">
        <a href="/Ravipati_Madhulika.pdf" download>
          <span>RESUME</span>

          {/* eyes */}
          <div className="eyes">
            <div className="eye">
              <div className="pupil"></div>
            </div>
            <div className="eye">
              <div className="pupil"></div>
            </div>
          </div>
        </a>
      </div>
      </div>

      <div className="hero-right">
        <img src="/hero.png" alt="hero" />
      </div>
    </section>
  );
}