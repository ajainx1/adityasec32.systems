"use client";
import React, { useEffect } from 'react';

interface RedirectClientProps {
  targetUrl: string;
  label?: string;
}

export default function RedirectClient({ targetUrl, label = "CyberKarma" }: RedirectClientProps) {
  useEffect(() => {
    // Instant client-side redirect
    if (typeof window !== 'undefined') {
      window.location.replace(targetUrl);
    }
  }, [targetUrl]);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <meta httpEquiv="refresh" content={`0; url=${targetUrl}`} />
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-3xl mb-6 animate-pulse">
        🐾
      </div>
      <h1 className="text-2xl sm:text-3xl font-black font-title mb-2 text-white">
        Redirecting to {label}...
      </h1>
      <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
        CyberKarma has its own dedicated charity portal at <strong className="text-emerald-400">cyberkarma.me</strong>.
      </p>
      <a
        href={targetUrl}
        className="px-6 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:brightness-110 shadow-lg transition-all"
      >
        Click here if not redirected automatically &rarr;
      </a>
    </div>
  );
}
