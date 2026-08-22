"use client";
import React from "react";

export default function Global3DBackground() {
  return (
    <div
      aria-hidden="true"
      id="global-3d-bg"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Hardware-accelerated ambient cyber radial glow */}
      <div 
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.4) 0%, rgba(6,182,212,0.1) 50%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform"
        }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(16,185,129,0.1) 50%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform"
        }}
      />
    </div>
  );
}
