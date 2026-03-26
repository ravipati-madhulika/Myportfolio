"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let x = 0;
    let y = 0;

    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;

      x += (e.clientX - x) * 0.2;
      y += (e.clientY - y) * 0.2;

      cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <img
      ref={cursorRef}
      src="/clicks.png"
      alt="cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "32px",
        height: "32px",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-2px, -2px)",
        imageRendering: "pixelated", 
      }}
    />
  );
}