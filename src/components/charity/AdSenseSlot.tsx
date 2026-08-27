"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Heart, ExternalLink, ShieldCheck } from 'lucide-react';

interface AdSenseSlotProps {
  slotId?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  responsive?: boolean;
  className?: string;
  label?: string;
  isDark?: boolean;
}

export default function AdSenseSlot({
  slotId,
  format = "auto",
  responsive = true,
  className = "",
  label = "PHILANTHROPIC SPONSOR",
  isDark = true
}: AdSenseSlotProps) {
  const adRef = useRef<HTMLModElement | null>(null);
  const isLoadedRef = useRef(false);
  const [adStatus, setAdStatus] = useState<'loading' | 'filled' | 'unfilled'>('loading');

  useEffect(() => {
    if (typeof window === 'undefined' || isLoadedRef.current) return;

    try {
      if ((window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        isLoadedRef.current = true;
      }
    } catch (e) {
      setAdStatus('unfilled');
    }

    // Check after 2.5s if Google AdSense filled the ad or if it was blocked/unfilled
    const timer = setTimeout(() => {
      if (adRef.current) {
        const status = adRef.current.getAttribute('data-ad-status');
        const hasIframe = adRef.current.querySelector('iframe');
        if (status === 'filled' || hasIframe) {
          setAdStatus('filled');
        } else {
          setAdStatus('unfilled');
        }
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`w-full my-6 rounded-3xl border text-center p-4 sm:p-5 relative overflow-hidden transition-all ${
      isDark 
        ? 'bg-slate-900/70 border-slate-800/80 text-slate-400' 
        : 'bg-white border-slate-200 text-slate-600 shadow-sm'
    } ${className}`}>
      
      {/* Policy Label (Required by Google AdSense Policy) */}
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-400 pb-2.5 border-b border-slate-800/40">
        <span className="flex items-center gap-1 font-bold text-emerald-400">
          <span>🐾</span>
          <span>{label}</span>
        </span>
        <span className="opacity-80 text-[9px] sm:text-[10px]">100% Ad Revenue Funds Free Stray Animal Rice</span>
      </div>

      {/* AdSense Unit Container */}
      <div className="min-h-[100px] flex items-center justify-center pt-2 relative">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block", minHeight: "90px", width: "100%" }}
          data-ad-client="ca-pub-6072468142870937"
          {...(slotId ? { "data-ad-slot": slotId } : {})}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />

        {/* High-Trust Philanthropic Partner Banner displayed when AdSense is reviewing domain or unfilled */}
        {adStatus === 'unfilled' && (
          <div className="w-full py-4 px-3 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center text-xl shrink-0">
                🐕
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-bold font-title text-slate-200 flex items-center gap-1.5">
                  <span>Sponsor a Full Stray Dog Feeding Drive</span>
                  <span className="px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-mono border border-emerald-500/30">Patna, Bihar</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Corporate partners & donors fund 500+ warm meals per drive. Zero player fees, 100% verified field proof.
                </p>
              </div>
            </div>

            <Link
              href="/impact"
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-mono shrink-0 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>See Field Photos</span>
              <ExternalLink size={12} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
