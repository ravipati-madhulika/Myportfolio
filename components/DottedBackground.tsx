"use client";

import { useCallback, useEffect, useRef } from "react";

const DOT_RADIUS = 1;
const DOT_COLOR = "#000000";
const MOVE_SPEED = 0.4;
const SPACING = 28;

interface Dot {
  x: number;
  y: number;
  phaseX: number;
  phaseY: number;
}

function createDots(canvas: HTMLCanvasElement): Dot[] {
  const cols = Math.ceil(canvas.width / SPACING) + 2;
  const rows = Math.ceil(canvas.height / SPACING) + 2;
  const dots: Dot[] = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      dots.push({
        x: col * SPACING,
        y: row * SPACING,
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
      });
    }
  }
  return dots;
}

function drawDot(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number
): void {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

export default function DottedBackground(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animationRef = useRef<number>(0);
  const timeRef = useRef(0);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(dpr, dpr);
    ctxRef.current = ctx;
    dotsRef.current = createDots(canvas);
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);

    const canvas = canvasRef.current;
    if (!canvas) return () => window.removeEventListener("resize", resize);

    const ctx = canvas.getContext("2d");
    if (!ctx) return () => window.removeEventListener("resize", resize);

    ctxRef.current = ctx;

    function tick(): void {
      const context = ctxRef.current;
      if (!context) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      timeRef.current += 0.08;

      context.clearRect(0, 0, w, h);

      context.fillStyle = DOT_COLOR;
      const t = timeRef.current * MOVE_SPEED;

      for (const dot of dotsRef.current) {
        const x =
          dot.x +
          Math.sin(dot.phaseX + t) * 6 +
          Math.sin((dot.y + t * 40) * 0.01) * 4;

        const y =
          dot.y +
          Math.cos(dot.phaseY + t * 0.7) * 6 +
          Math.cos((dot.x + t * 40) * 0.01) * 4;
        drawDot(context, x, y, DOT_RADIUS);
      }

      animationRef.current = requestAnimationFrame(tick);
    }

    tick();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [resize]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
        zIndex:0,
      }}
    />
  );
}
