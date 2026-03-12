import DottedBackground from "@/components/DottedBackground";
import Hero from "@/components/Hero";
import type React from "react";
import type { JSX } from "react";
use client    export default function Home(): JSX.Element { return (      <main style={{ position: "relative", minHeight: "100vh" }}>      <DottedBackground />
      <Hero />
    </main>
  );
}
import { useEffect, useState } from "react";
    setIsClient(true);
  }, []);
  return isClient ? (
    <main style={{ position: "relative", minHeight: "100vh" }}>
      <DottedBackground />
      <Hero />
    </main>
  ) : null;
}