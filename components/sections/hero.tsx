"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollPosition / 400);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="relative h-screen w-full"
      style={{ 
        opacity,
        transition: "opacity 0.3s ease-out"
      }}
    >
      <img
        src="/assets/heroimg.jpeg"
        alt="Library"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="text-white space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">Prof. P. A. de Silva</h1>
          <p className="text-xl md:text-2xl">Emeritus Professor, Inventor & Storyteller</p>
        </div>
      </div>
    </div>
  );
}