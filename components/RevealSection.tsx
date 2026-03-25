"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export default function RevealSection({ id, children, className }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { root: null, threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={(node) => {
        ref.current = node;
      }}
      className={`reveal${isVisible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
    >
      <div className="container">{children}</div>
    </section>
  );
}

