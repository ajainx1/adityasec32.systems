"use client";

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Mail, Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  const [isCyberKarma, setIsCyberKarma] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const host = window.location.hostname.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (host.includes('cyberkarma') || host.includes('freerice') || path.includes('charity-quiz')) {
        setIsCyberKarma(true);
      }
    }
  }, []);

  if (isCyberKarma) {
    return (
      <footer className="w-full border-t border-emerald-500/20 bg-slate-950 text-slate-400 py-12 px-6 font-sans relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2 text-white font-title font-black text-xl tracking-tight">
              <span className="p-1.5 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 text-slate-950 text-xs font-mono font-bold">🐾</span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">CyberKarma</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              Gamified Cybersecurity & Trivia platform converting correct answers into verified meals for stray dogs & shelter animals in Patna, Bihar.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <Heart size={14} className="fill-emerald-400/20 text-emerald-400" />
              <span>100% Free & Impact-Driven</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-200">Initiative</h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#top" className="hover:text-emerald-400 transition-colors">Play Trivia & Feed</a></li>
              <li><a href="#live-feeding" className="hover:text-emerald-400 transition-colors">Live Feeding Drive</a></li>
              <li><a href="#daily-bonus" className="hover:text-emerald-400 transition-colors">Daily Karma Rewards</a></li>
              <li><a href="https://adityasec32.systems" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">About Creator (AdityaSec) <ExternalLink size={11} /></a></li>
            </ul>
          </div>

          {/* Ecosystem Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-200">Ecosystem</h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="https://cyberkarma.me" className="hover:text-emerald-400 transition-colors">CyberKarma Free Rice</a></li>
              <li><a href="https://adityasec32.systems" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">AdityaSec Cybersecurity</a></li>
              <li><a href="https://jumpstreet.tech" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">JumpStreet Tech (Partner)</a></li>
            </ul>
          </div>

          {/* Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-200">Legal & Ethics</h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="https://cyberkarma.me/privacy/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="https://cyberkarma.me/terms/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li><a href="mailto:adityasec32@gmail.com" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><Mail size={12} /> adityasec32@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4">
          <span>© {new Date().getFullYear()} CyberKarma by Aditya Jain. Empowering knowledge, saving lives.</span>
          <div className="flex items-center gap-4">
            <a href="https://cyberkarma.me/privacy/" className="hover:underline">Privacy</a>
            <a href="https://cyberkarma.me/terms/" className="hover:underline">Terms</a>
            <a href="mailto:adityasec32@gmail.com" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 text-slate-400 py-12 px-6 font-sans relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Brand Column */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-2 text-white font-title font-black text-xl tracking-tight">
            <span className="p-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-mono font-bold">AJ</span>
            <span>Aditya Jain SecOps</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-mono">
            4+ Years Enterprise SecOps, SentinelOne/EDR SME, Wazuh SIEM, Purple Teaming, Threat Hunting, and Incident Response.
          </p>
          <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono">
            <ShieldCheck size={14} className="fill-cyan-400/20" />
            <span>NIC / CNI Defense Engineer</span>
          </div>
        </div>

        {/* Competencies */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-200">Competencies</h4>
          <ul className="space-y-2 text-xs font-mono">
            <li><a href="#projects" className="hover:text-emerald-400 transition-colors">CNI Defense &amp; Telemetry</a></li>
            <li><a href="#writeups" className="hover:text-emerald-400 transition-colors">Technical Write-Ups</a></li>
            <li><a href="#experience" className="hover:text-emerald-400 transition-colors">Enterprise History (NIC &amp; DAE)</a></li>
            <li><a href="#about" className="hover:text-emerald-400 transition-colors">Certifications &amp; Degrees</a></li>
          </ul>
        </div>

        {/* Ecosystem Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-200">Ecosystem</h4>
          <ul className="space-y-2 text-xs font-mono">
            <li><a href="https://adityasec32.systems" className="hover:text-emerald-400 transition-colors">adityasec32.systems</a></li>
            <li><a href="https://cyberkarma.me" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">CyberKarma (Free Rice)</a></li>
            <li><a href="https://jumpstreet.tech" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">JumpStreet Quant Platform</a></li>
          </ul>
        </div>

        {/* Compliance */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-200">Legal &amp; Security</h4>
          <ul className="space-y-2 text-xs font-mono">
            <li><a href="/.well-known/security.txt" className="hover:text-emerald-400 transition-colors">security.txt Policy</a></li>
            <li><a href="https://cyberkarma.me/privacy/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
            <li><a href="https://cyberkarma.me/terms/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
            <li><a href="mailto:contact@adityasec32.systems" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><Mail size={12} /> contact@adityasec32.systems</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4">
        <span>© {new Date().getFullYear()} Aditya Jain. All rights reserved. Cybersecurity Engineer &amp; NGFW Architect.</span>
        <div className="flex items-center gap-4">
          <a href="/.well-known/security.txt" className="hover:underline text-emerald-400">Security Disclosure</a>
          <a href="https://cyberkarma.me/privacy/" className="hover:underline">Privacy</a>
          <a href="mailto:contact@adityasec32.systems" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
