"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Global3DBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    let activeEffect: any = null;
    let isCancelled = false;

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const existing = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement;
        if (existing) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => resolve(); // continue even on error
        document.head.appendChild(script);
      });
    };

    const startVanta = async () => {
      // 1. Ensure Three.js is loaded
      if (!(window as any).THREE) {
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
      }
      // 2. Ensure Vanta.NET is loaded
      if (!(window as any).VANTA?.NET) {
        await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js");
      }

      if (isCancelled) return;

      const tryInit = () => {
        const VANTA = (window as any).VANTA;
        if (VANTA && VANTA.NET && vantaRef.current && !activeEffect) {
          try {
            activeEffect = VANTA.NET({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0x10b981,
              backgroundColor: 0x020617,
              points: 12.0,
              maxDistance: 22.0,
              spacing: 18.0,
              showDots: true,
            });
            setVantaEffect(activeEffect);
          } catch (err) {
            console.warn("Vanta 3D WebGL background init:", err);
          }
        }
      };

      tryInit();
      // Safety retry after brief paint delay
      setTimeout(tryInit, 250);
    };

    startVanta();

    return () => {
      isCancelled = true;
      if (activeEffect) {
        try {
          activeEffect.destroy();
        } catch (e) {}
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      id="global-3d-bg"
      className="fixed inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-1000"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
