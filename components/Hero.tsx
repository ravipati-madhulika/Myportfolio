"use client";

export default function Hero(): JSX.Element {
  return (
    <section
      className="hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
      }}
    >
      <h1
        className="hero-title"
        style={{
          margin: 0,
          fontSize: "clamp(1.25rem, 4vw, 2rem)",
          fontWeight: 400,
          color: "#000",
          textAlign: "center",
          letterSpacing: "0.02em",
          imageRendering: "crisp-edges",
        }}
      >
        RAVIPATI MADHULIKA
      </h1>
    </section>
  );
}
