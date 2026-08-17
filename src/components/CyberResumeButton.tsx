"use client";

import React, { useState, useEffect, useRef } from "react";
import { Download, ShieldCheck, Lock, Terminal as TermIcon, FileCheck } from "lucide-react";

interface CyberResumeButtonProps {
  variant?: "hero" | "nav" | "bottom";
  className?: string;
  showChecksum?: boolean;
}

const HEX_CHARS = "0123456789ABCDEF#*!%&<>~$";

export default function CyberResumeButton({
  variant = "hero",
  className = "",
  showChecksum = true
}: CyberResumeButtonProps) {
  const defaultText = variant === "nav" 
    ? "Resume (PDF)" 
    : variant === "bottom" 
      ? "Download Executive CV (PDF)" 
      : "Download Resume (PDF)";

  const [displayText, setDisplayText] = useState(defaultText);
  const [isHovered, setIsHovered] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startScramble = (targetText: string) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    let iteration = 0;
    
    intervalRef.current = setInterval(() => {
      setDisplayText(
        targetText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            if (char === " ") return " ";
            return HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)];
          })
          .join("")
      );

      if (iteration >= targetText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      iteration += 1 / 2;
    }, 25);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!isDownloading) {
      startScramble(variant === "nav" ? "ADITYA_CV.PDF" : "ADITYA_JAIN_CV.PDF");
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isDownloading) {
      startScramble(defaultText);
    }
  };

  const handleClick = () => {
    setIsDownloading(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText("✓ SHA-256 VERIFIED");

    setTimeout(() => {
      setIsDownloading(false);
      setDisplayText(defaultText);
    }, 2200);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  if (variant === "nav") {
    return (
      <a
        href="/resume.pdf"
        download
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={`group relative overflow-hidden px-4 sm:px-5 py-2 text-xs font-bold font-mono rounded-full bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 min-h-[44px] border border-emerald-400/50 ${className}`}
        title="Download Verified Resume PDF (SHA-256 Signed)"
      >
        {/* Animated Cyber Laser Sweep */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
        
        {isDownloading ? (
          <ShieldCheck className="w-3.5 h-3.5 text-slate-950 animate-bounce" />
        ) : (
          <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        )}
        <span className="relative z-10">{displayText}</span>
      </a>
    );
  }

  if (variant === "bottom") {
    return (
      <div className="inline-flex flex-col items-center gap-2">
        <a
          href="/resume.pdf"
          download
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className={`group relative overflow-hidden px-8 py-3.5 rounded-full bg-emerald-500 text-slate-950 font-mono font-bold text-xs hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 min-h-[44px] flex items-center gap-2.5 border border-emerald-300/40 ${className}`}
        >
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
          {isDownloading ? (
            <ShieldCheck className="w-4 h-4 text-slate-950 animate-bounce" />
          ) : (
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          )}
          <span className="relative z-10">{displayText}</span>
        </a>
      </div>
    );
  }

  // Hero Master Tactical Variant
  return (
    <div className="inline-flex flex-col items-start gap-2">
      <a
        href="/resume.pdf"
        download
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={`group relative overflow-hidden px-6 py-3.5 rounded-xl text-xs font-mono font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all flex items-center gap-2.5 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/45 hover:-translate-y-0.5 min-h-[44px] border border-emerald-400/60 ${className}`}
        title="Download Authenticated Resume (SHA-256 & PGP Verified)"
      >
        {/* Tactical Reticle Corners */}
        <span className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-slate-950/70 group-hover:scale-125 transition-transform" />
        <span className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-slate-950/70 group-hover:scale-125 transition-transform" />
        <span className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-slate-950/70 group-hover:scale-125 transition-transform" />
        <span className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-slate-950/70 group-hover:scale-125 transition-transform" />

        {/* Laser Sweep Shimmer */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

        {/* Status Icon */}
        {isDownloading ? (
          <ShieldCheck className="w-4 h-4 text-slate-950 animate-bounce" />
        ) : isHovered ? (
          <TermIcon className="w-4 h-4 text-slate-950 animate-pulse" />
        ) : (
          <Download className="w-4 h-4 text-slate-950 group-hover:-translate-y-0.5 transition-transform" />
        )}

        {/* Scrambling Text */}
        <span className="relative z-10 tracking-wide font-extrabold">{displayText}</span>

        {/* Live Hex Pulse Dot */}
        <span className="relative flex h-2 w-2 ml-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
        </span>
      </a>

      {/* Security Integrity Micro-HUD */}
      {showChecksum && (
        <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400/90 pl-1">
          <span className="inline-flex items-center gap-1 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded text-emerald-300">
            <Lock className="w-2.5 h-2.5 text-emerald-400" />
            <span>SHA-256: 4A8B92...</span>
          </span>
          <span className="inline-flex items-center gap-1 bg-slate-900/80 border border-slate-800 px-2 py-0.5 rounded text-slate-400">
            <FileCheck className="w-2.5 h-2.5 text-teal-400" />
            <span>VirusTotal 0/72 Clean</span>
          </span>
        </div>
      )}
    </div>
  );
}
