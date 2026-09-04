'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function WelcomeBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const shown = localStorage.getItem('adityasec_welcome_shown');
      if (!shown) setShow(true);
    } catch (e) {
      setShow(true);
    }
  }, []);

  const dismiss = () => {
    try { localStorage.setItem('adityasec_welcome_shown', 'true'); } catch (e) {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-3xl w-full px-4">
      <div className="bg-emerald-900/95 text-white rounded-2xl p-4 shadow-lg font-sans glass-panel">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="text-sm font-bold">Welcome to Aditya Jain — Cybersecurity & Impact</h3>
            <p className="text-xs text-emerald-200 mt-1">Explore engineering case studies, demos, and our impact ledger. Need help? <Link href="/contact"><a className="underline">Contact</a></Link>.</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={dismiss} className="text-xs font-mono bg-emerald-500 text-slate-900 px-3 py-1 rounded-lg">Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  );
}
