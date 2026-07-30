import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, Globe, Lock } from 'lucide-react';

export default function Footer() {
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
            <li><a href="#skills" className="hover:text-cyan-400 transition-colors">EDR & SIEM Engineering</a></li>
            <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Enterprise History</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Offensive Automation</a></li>
            <li><a href="#certs" className="hover:text-cyan-400 transition-colors">Certifications & FCAC</a></li>
          </ul>
        </div>

        {/* Ecosystem Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-200">Ecosystem</h4>
          <ul className="space-y-2 text-xs font-mono">
            <li><a href="https://cyberkarma.me" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">CyberKarma Charity</a></li>
            <li><a href="https://jumpstreet.tech" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">JumpStreet Tech</a></li>
          </ul>
        </div>

        {/* Compliance */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-200">Legal & Privacy</h4>
          <ul className="space-y-2 text-xs font-mono">
            <li><a href="https://cyberkarma.me/privacy/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
            <li><a href="https://cyberkarma.me/terms/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
            <li><a href="mailto:contact@adityasec32.systems" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"><Mail size={12} /> contact@adityasec32.systems</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4">
        <span>© {new Date().getFullYear()} Aditya Jain. All rights reserved. SME Cybersecurity Engineer.</span>
        <div className="flex items-center gap-4">
          <a href="https://cyberkarma.me/privacy/" className="hover:underline">Privacy</a>
          <a href="https://cyberkarma.me/terms/" className="hover:underline">Terms</a>
          <a href="mailto:contact@adityasec32.systems" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
