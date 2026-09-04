'use client';

import React, { useEffect, useRef } from 'react';

interface AdSenseBannerProps {
  refreshKey?: string | number;
  className?: string;
  isDark?: boolean;
  adSlot?: string;
  adFormat?: string;
}

export default function AdSenseBanner({ 
  className = "", 
  isDark = true,
  adSlot = "1234567890",
  adFormat = "auto"
}: AdSenseBannerProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushedRef = useRef(false);
  const [showFallback, setShowFallback] = React.useState(false);

  useEffect(() => {
    if (pushedRef.current) return;

    try {
      if (typeof window !== 'undefined') {
        const consent = localStorage.getItem('adityasec_cookie_consent');
        if (consent !== 'true') {
          // wait for consent via storage event
          const onStorage = (e: StorageEvent) => {
            if (e.key === 'adityasec_cookie_consent' && e.newValue === 'true') {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const adsbygoogle = (window as any).adsbygoogle || [];
              adsbygoogle.push({});
              pushedRef.current = true;
              window.removeEventListener('storage', onStorage);
              monitorSlot();
            }
          };
          window.addEventListener('storage', onStorage);
          return;
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const adsbygoogle = (window as any).adsbygoogle || [];
        adsbygoogle.push({});
        pushedRef.current = true;
        monitorSlot();
      }
    } catch (err) {
      console.debug("AdSense load notice:", err);
      // show fallback on error
      setTimeout(() => setShowFallback(true), 1500);
    }

    // monitor the ins for an iframe added by AdSense and fallback if none
    function monitorSlot() {
      try {
        const el = adRef.current as HTMLElement | null;
        if (!el) return;
        let checks = 0;
        const interval = setInterval(() => {
          checks++;
          // AdSense injects an iframe; check for it
          if (el.querySelector && el.querySelector('iframe')) {
            clearInterval(interval);
            setShowFallback(false);
            return;
          }
          if (checks > 6) { // ~3s
            clearInterval(interval);
            setShowFallback(true);
            return;
          }
        }, 500);
      } catch (e) {
        setShowFallback(true);
      }
    }
  }, []);

  return (
    <div className={`w-full my-6 font-sans ${className}`}>
      <div className={`relative rounded-2xl border p-4 overflow-hidden backdrop-blur-xl shadow-md transition-all ${
        isDark ? 'bg-slate-900/60 border-white/10 text-white' : 'bg-white/80 border-slate-200 text-slate-900'
      }`}>
        
        {/* Strictly Compliant Ad Label */}
        <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-3 pb-1 border-b border-white/10">
          <span>ADVERTISEMENT</span>
          <span className="text-[9px] text-slate-500 font-mono">AdityaSec Ethical Security Partner Network</span>
        </div>

        {/* AdSense Unit */}
        <div className="w-full flex justify-center items-center min-h-[90px] overflow-hidden rounded-xl bg-black/20">
          <ins
            ref={adRef}
            className="adsbygoogle w-full"
            style={{ display: 'block', textAlign: 'center' }}
            data-ad-client="ca-pub-6072468142870937"
            data-ad-slot={adSlot}
            data-ad-format={adFormat}
            data-full-width-responsive="true"
          />
        </div>
 
-        <div className="mt-2 text-center text-[9px] font-mono text-slate-400">
-          24/7 Managed SIEM, automated incident response, and purple team threat hunting.
-        </div>
+        <div className="mt-2 text-center text-[9px] font-mono text-slate-400">
+          24/7 Managed SIEM, automated incident response, and purple team threat hunting.
+        </div>
+
+        {showFallback && (
+          <div className="mt-3 p-3 rounded-lg bg-slate-800 text-slate-200 text-sm font-mono">
+            <strong>Sponsored</strong>
+            <div className="text-xs mt-1">Support from our partners helps keep tools free and educational content available.</div>
+          </div>
+        )}
       </div>
     </div>
   );
 }
      </div>
    </div>
  );
}
