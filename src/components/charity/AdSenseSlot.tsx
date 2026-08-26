"use client";

import React, { useEffect, useRef } from 'react';

interface AdSenseSlotProps {
  slotId?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  responsive?: boolean;
  className?: string;
  label?: string;
  isDark?: boolean;
}

export default function AdSenseSlot({
  slotId = "1234567890", // Standard placeholder or configured Ad Unit
  format = "auto",
  responsive = true,
  className = "",
  label = "SPONSORED PARTNER",
  isDark = true
}: AdSenseSlotProps) {
  const adRef = useRef<HTMLModElement | null>(null);
  const isLoadedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || isLoadedRef.current) return;

    try {
      if ((window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        isLoadedRef.current = true;
      }
    } catch (e) {
      // AdBlock or network prevention handled silently without console errors
    }
  }, []);

  return (
    <div className={`w-full my-4 rounded-2xl border text-center p-3 relative overflow-hidden transition-all ${
      isDark 
        ? 'bg-slate-950/60 border-slate-800/80 text-slate-400' 
        : 'bg-slate-50 border-slate-200 text-slate-600'
    } ${className}`}>
      {/* Subtle Policy Label (Required by Google AdSense Policy) */}
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-500 pb-2 border-b border-slate-800/40">
        <span>🐾 {label}</span>
        <span className="opacity-70">Funds Free Rice in Patna</span>
      </div>

      {/* AdSense Unit Container with CLS reservation */}
      <div className="min-h-[100px] flex items-center justify-center pt-2">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block", minHeight: "90px", width: "100%" }}
          data-ad-client="ca-pub-6072468142870937"
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      </div>
    </div>
  );
}
