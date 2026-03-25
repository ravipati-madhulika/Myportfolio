"use client";

export default function Hero(): JSX.Element {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="kicker">Full Stack • Mobile • UI/UX</div>
        <h1 className="hero-title">RAVIPATI MADHULIKA</h1>
        <p className="hero-subtitle">
          I build end-to-end products: sleek interfaces, thoughtful experiences, and reliable
          systems—from React/Next.js web apps to React Native mobile.
        </p>

        <div className="hero-roles" aria-label="Roles">
          <span className="chip">Full Stack Developer</span>
          <span className="chip">Mobile Developer</span>
          <span className="chip">UI/UX Designer</span>
        </div>

        <div className="hero-links" aria-label="Quick links">
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>
          <a className="btn" href="#contact">
            Contact
          </a>
          <a className="btn" href="#skills">
            Skills
          </a>
        </div>
      </div>
    </section>
  );
}
