"use client";

import React, { useEffect, useRef } from "react";

interface ThreeDArtBackgroundProps {
  isDark?: boolean;
}

export default function ThreeDArtBackground({ isDark = true }: ThreeDArtBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // 3D Particles / Constellation Starfield setup in Editorial Mocha, Platinum & Lavender
    const PARTICLE_COUNT = 48;
    interface Node3D {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      vx: number;
      vy: number;
      vz: number;
      radius: number;
      color: string;
    }

    // High-Fashion Editorial Palette: Pale Lavender (#E6E0F0), Platinum Silver (#E5E4E2), and Mocha Accents
    const colors = isDark 
      ? ["#E6E0F0", "#E5E4E2", "#dcd6ea", "#cbbddf", "#8b6a52"] 
      : ["#6F4E37", "#8A6448", "#5A3A28", "#A38671", "#3B251A"];

    const nodes: Node3D[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * width * 1.5;
      const y = (Math.random() - 0.5) * height * 1.5;
      const z = Math.random() * 800 + 100;
      nodes.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        vz: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 2.2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.05;
      targetMouseY = (e.clientY - height / 2) * 0.05;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const fov = 400; // 3D Camera Field of View
    let angle = 0;

    const render = () => {
      angle += 0.0012;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Project and draw 3D nodes
      const projectedNodes: { x: number; y: number; scale: number; node: Node3D }[] = [];

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.z += n.vz;

        // Wrap around 3D boundaries
        if (n.x < -width) n.x = width;
        if (n.x > width) n.x = -width;
        if (n.y < -height) n.y = height;
        if (n.y > height) n.y = -height;
        if (n.z < 50) n.z = 900;
        if (n.z > 900) n.z = 50;

        // 3D rotation around Y and X axis
        const cosY = Math.cos(angle * 0.5);
        const sinY = Math.sin(angle * 0.5);
        const rotX = n.x * cosY - n.z * sinY + mouseX;
        const rotZ = n.z * cosY + n.x * sinY;
        const rotY = n.y + mouseY;

        if (rotZ + fov > 10) {
          const scale = fov / (fov + rotZ);
          const projX = rotX * scale + width / 2;
          const projY = rotY * scale + height / 2;

          projectedNodes.push({ x: projX, y: projY, scale, node: n });

          // Draw node glow with Pale Lavender & Platinum radiance
          const alpha = Math.min(1, Math.max(0.18, (scale - 0.2) * 1.3));
          ctx.save();
          ctx.beginPath();
          ctx.arc(projX, projY, n.radius * scale * 1.6, 0, Math.PI * 2);
          ctx.fillStyle = n.color;
          ctx.globalAlpha = isDark ? alpha * 0.75 : alpha * 0.55;
          ctx.shadowColor = n.color;
          ctx.shadowBlur = 14 * scale;
          ctx.fill();
          ctx.restore();
        }
      }

      // Draw connecting lines between nearby 3D nodes
      ctx.lineWidth = isDark ? 0.75 : 0.6;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p1 = projectedNodes[i];
          const p2 = projectedNodes[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 135) {
            const lineAlpha = (1 - dist / 135) * 0.28 * ((p1.scale + p2.scale) / 2);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark ? "#E6E0F0" : "#6F4E37";
            ctx.globalAlpha = lineAlpha;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDark]);

  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 1. Volumetric 3D Color Glows — Rich Mocha Brown & Pale Lavender Atmosphere */}
      <div 
        className={`absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[140px] transition-opacity duration-1000 ${
          isDark ? "bg-[#6F4E37]/35" : "bg-[#E6E0F0]/50"
        }`}
        style={{ animation: "float-slow 22s ease-in-out infinite alternate" }}
      />
      <div 
        className={`absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full blur-[130px] transition-opacity duration-1000 ${
          isDark ? "bg-[#E6E0F0]/15" : "bg-[#6F4E37]/15"
        }`}
        style={{ animation: "float-slow 28s ease-in-out infinite alternate-reverse" }}
      />
      <div 
        className={`absolute -bottom-32 left-1/3 w-[650px] h-[650px] rounded-full blur-[140px] transition-opacity duration-1000 ${
          isDark ? "bg-[#4A2E1F]/50" : "bg-[#E5E4E2]/40"
        }`}
        style={{ animation: "float-slow 26s ease-in-out 3s infinite alternate" }}
      />

      {/* 2. Interactive 3D Constellation Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-85" 
      />

      {/* 3. 3D Perspective Ground Grid with Lavender Shimmer */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[45vh] pointer-events-none opacity-20"
        style={{
          perspective: "600px",
          overflow: "hidden"
        }}
      >
        <div 
          className="w-[200%] -left-[50%] h-[100%] absolute bottom-0"
          style={{
            backgroundImage: isDark
              ? "linear-gradient(rgba(230, 224, 240, 0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(111, 78, 55, 0.4) 1px, transparent 1px)"
              : "linear-gradient(rgba(111, 78, 55, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(229, 228, 226, 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            transform: "rotateX(72deg) translateZ(0)",
            transformOrigin: "bottom center",
            maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
            WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)"
          }}
        />
      </div>

      {/* 4. Deep Mocha Vignette / Falloff Overlay */}
      <div 
        className={`absolute inset-0 pointer-events-none ${
          isDark 
            ? "bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(46,28,19,0.85)_80%)]" 
            : "bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(245,244,242,0.75)_80%)]"
        }`} 
      />
    </div>
  );
}
