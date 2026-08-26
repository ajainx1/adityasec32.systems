"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, CheckCircle2, Lock, HeartHandshake, 
  ExternalLink, Eye, Award, FileCheck, HelpCircle, Mail, MapPin
} from 'lucide-react';
import { Language } from './i18n';
import Link from 'next/link';

interface TrustAndVerificationBadgeProps {
  lang: Language;
  isDark: boolean;
}

export default function TrustAndVerificationBadge({ lang, isDark }: TrustAndVerificationBadgeProps) {
  const [showTrustModal, setShowTrustModal] = useState(false);

  return (
    <>
      {/* Compact Trust & Verification Card in Right Column */}
      <div className={`p-4 sm:p-5 rounded-3xl border space-y-3.5 transition-all relative overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-br from-emerald-950/20 via-slate-900/90 to-slate-950 border-emerald-500/30 shadow-lg' 
          : 'bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/50 border-emerald-300 shadow-sm'
      }`}>
        {/* Top Emerald Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm border border-emerald-500/30">
              <ShieldCheck size={16} />
            </span>
            <div>
              <h4 className="text-xs font-extrabold font-title uppercase tracking-wider text-emerald-400">
                {lang === 'hi' ? '100% सत्यापित व पारदर्शी' : 'Trust & Verification'}
              </h4>
              <span className="text-[10px] font-mono text-slate-400">
                {lang === 'hi' ? 'पटना, बिहार • 110+ फ़ोटो प्रमाण' : 'Patna, Bihar • Verified Impact'}
              </span>
            </div>
          </div>

          <button
            onClick={() => setShowTrustModal(true)}
            className="text-[11px] font-mono text-emerald-400 hover:underline cursor-pointer flex items-center gap-1 font-bold"
          >
            <span>{lang === 'hi' ? 'प्रमाण देखें' : 'View Proof'}</span>
            <ExternalLink size={11} />
          </button>
        </div>

        {/* 4 Trust Highlights */}
        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
          <div className={`p-2 rounded-xl border flex items-center gap-1.5 ${
            isDark ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-white border-emerald-100 text-slate-700'
          }`}>
            <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
            <span className="truncate">{lang === 'hi' ? '100% निःशुल्क सेवा' : '100% Free Forever'}</span>
          </div>

          <div className={`p-2 rounded-xl border flex items-center gap-1.5 ${
            isDark ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-white border-emerald-100 text-slate-700'
          }`}>
            <Lock size={13} className="text-emerald-400 shrink-0" />
            <span className="truncate">{lang === 'hi' ? 'शून्य ट्रैकिंग / सुरक्षित' : 'Zero Data Tracking'}</span>
          </div>

          <div className={`p-2 rounded-xl border flex items-center gap-1.5 ${
            isDark ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-white border-emerald-100 text-slate-700'
          }`}>
            <FileCheck size={13} className="text-emerald-400 shrink-0" />
            <span className="truncate">{lang === 'hi' ? 'जमीनी फ़ोटो लॉग' : 'Photo Proof Log'}</span>
          </div>

          <div className={`p-2 rounded-xl border flex items-center gap-1.5 ${
            isDark ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-white border-emerald-100 text-slate-700'
          }`}>
            <HeartHandshake size={13} className="text-emerald-400 shrink-0" />
            <span className="truncate">{lang === 'hi' ? 'प्रायोजक पोषित' : 'Sponsor Backed'}</span>
          </div>
        </div>

        {/* Founder Guarantee Line */}
        <div className={`pt-2 border-t text-[10px] flex items-center justify-between ${
          isDark ? 'border-slate-800/60 text-slate-400' : 'border-emerald-100 text-slate-500'
        }`}>
          <span>Led by Aditya Jain (adityasec32)</span>
          <span className="text-emerald-400 font-bold">4.96/5 ⭐ TrustScore</span>
        </div>
      </div>

      {/* Trust & Transparency Modal */}
      <AnimatePresence>
        {showTrustModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowTrustModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className={`relative max-w-lg w-full my-auto rounded-3xl border p-6 sm:p-8 space-y-5 shadow-2xl ${
                isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 rounded-t-3xl" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl border border-emerald-500/30">
                    🛡️
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-title">
                      {lang === 'hi' ? 'साइबरकर्म विश्वास एवं पारदर्शिता गारंटी' : 'CyberKarma Trust & Transparency'}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {lang === 'hi' ? 'प्रत्येक सही उत्तर से भोजन तक का प्रमाणित सफर' : 'How clicks turn into real food in Patna, Bihar'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowTrustModal(false)}
                  className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center text-sm font-bold transition-all cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* 4 Pillars Breakdown */}
              <div className="space-y-3 text-xs leading-relaxed">
                <div className={`p-3.5 rounded-2xl border space-y-1 ${
                  isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-emerald-50/50 border-emerald-200'
                }`}>
                  <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <span>1. 📸 100% Real Ground Photo Proof</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    We maintain an open public record with over 110 geotagged photographs from feeding and medical drives across Patna Division, Bihar.
                  </p>
                </div>

                <div className={`p-3.5 rounded-2xl border space-y-1 ${
                  isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-emerald-50/50 border-emerald-200'
                }`}>
                  <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <span>2. 💰 100% Free & Sponsor-Funded</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    Players never pay a penny. Donations are financed through privacy-safe educational sponsorships, corporate CSR allocations, and founder commitments.
                  </p>
                </div>

                <div className={`p-3.5 rounded-2xl border space-y-1 ${
                  isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-emerald-50/50 border-emerald-200'
                }`}>
                  <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <span>3. 🔒 Privacy-First • Zero Data Harvesting</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    Zero invasive tracking. No selling of user emails. No spam. You can play as a guest with 1 click without even creating an account.
                  </p>
                </div>

                <div className={`p-3.5 rounded-2xl border space-y-1 ${
                  isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-emerald-50/50 border-emerald-200'
                }`}>
                  <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <span>4. 👤 Direct Founder Accountability</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    Created and personally overseen by Aditya Vardhan Jain (Cybersecurity Engineer). Contact directly at <strong>adityasec32@gmail.com</strong> anytime.
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="/impact"
                  onClick={() => setShowTrustModal(false)}
                  className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm text-center"
                >
                  <span>Explore 110+ Ground Field Photos →</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
