"use client";

import { useEffect, useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function Hero(): JSX.Element {
  const finalText = "RAVIPATI MADHULIKA";
  const [display, setDisplay] = useState(Array(finalText.length).fill(""));
  const [done, setDone] = useState(false);
  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    finalText.split("").forEach((char, index) => {
      if (char === " ") {
        setDisplay((prev) => {
          const newArr = [...prev];
          newArr[index] = " ";
          return newArr;
        });
        return;
      }

      let count = 0;

      const interval = setInterval(() => {
        count++;

        setDisplay((prev) => {
          const newArr = [...prev];

          if (count > 10) {
            newArr[index] = char;
            clearInterval(interval);
            // check if all letters are done
          if (index === finalText.length - 1) {
              setDone(true);
            }
          } else {
            newArr[index] =
              letters[Math.floor(Math.random() * letters.length)];
          }

          return newArr;
        });
      }, 70);

      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-left">
      <h1 className={`hero-title ${done ? "active" : ""}`}>
        {display.join("")}
      </h1>
      </div>
      <div className="hero-right">
        <img src="/hero.png" alt="hero" />
      </div>
    </section>
  );
}