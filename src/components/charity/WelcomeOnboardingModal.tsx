"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, User, LogIn, CheckCircle2, ShieldCheck, Globe, Zap, ArrowRight, Mail } from 'lucide-react';
import { Language, LANGUAGES_LIST, getTranslation } from './i18n';

interface WelcomeOnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectLanguage: (lang: Language) => void;
  onPlayAsGuest: () => void;
  onGoogleSignIn: () => void;
  onEmailSignIn: (email: string, name: string) => void;
  isDark: boolean;
}

export default function WelcomeOnboardingModal({
  isOpen,
  onClose,
  lang,
  onSelectLanguage,
  onPlayAsGuest,
  onGoogleSignIn,
  onEmailSignIn,
  isDark,
}: WelcomeOnboardingModalProps) {
  const [activeTab, setActiveTab] = useState<'quick' | 'email'>('quick');
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = (key: any) => getTranslation(lang, key);

  if (!isOpen) return null;

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      const derivedName = nameInput.trim() || emailInput.split('@')[0];
      onEmailSignIn(emailInput.trim(), derivedName);
      setIsSubmitting(false);
      onClose();
    }, 400);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[250] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-2xl overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.92, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.92, y: 20, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={e => e.stopPropagation()}
          className={`relative max-w-lg w-full my-auto rounded-[36px] overflow-hidden border shadow-2xl p-6 sm:p-8 space-y-6 transition-all ${
            isDark 
              ? 'bg-gradient-to-b from-slate-900/98 via-slate-950/98 to-black text-white border-emerald-500/30 shadow-[0_0_60px_rgba(16,185,129,0.2)]' 
              : 'bg-white/98 text-slate-900 border-2 border-emerald-300 shadow-2xl'
          }`}
        >
          {/* Top Decorative Header Accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-500 animate-pulse" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-400 hover:text-white flex items-center justify-center text-sm font-bold transition-all cursor-pointer"
            aria-label="Close Modal"
          >
            ✕
          </button>

          {/* Brand & Welcome Hero with Mascot Banner */}
          <div className="text-center space-y-3 pt-1">
            <div className="w-full rounded-2xl overflow-hidden border border-emerald-500/30 shadow-xl group">
              <img 
                src="/cyberkarma_hero_mascot.png" 
                alt="CyberKarma Mascot: Play Free Quizzes, Feed Street Dogs"
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-300"
              />
            </div>
            
            <p className={`text-xs sm:text-sm font-medium max-w-sm mx-auto leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {lang === 'hi'
                ? 'निःशुल्क क्विज़ खेलें और पटना के बेसहारा कुत्तों के लिए 100% सत्यापित भोजन व उपचार दान करें।'
                : 'Play free family-friendly trivia to donate real bowls of rice and care for rescue dogs in Patna, Bihar.'}
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <span>🎁</span>
              <span>{lang === 'hi' ? '+50 दाने प्रारंभिक उपहार बोनस' : '+50 Grains Welcome Starter Gift'}</span>
            </div>
          </div>

          {/* Section 1: Choose Language */}
          <div className="space-y-2.5 pt-1">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Globe size={14} className="text-purple-400" />
              <span>{lang === 'hi' ? '1. अपनी पसंदीदा भाषा चुनें:' : '1. Select Your Language:'}</span>
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 max-h-36 overflow-y-auto pr-1 scrollbar-thin">
              {LANGUAGES_LIST.map((item) => (
                <button
                  key={item.code}
                  onClick={() => onSelectLanguage(item.code)}
                  className={`px-2.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 border cursor-pointer ${
                    lang === item.code
                      ? 'bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-500/30 scale-[1.02]'
                      : isDark
                        ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
                        : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
                  title={`${item.label} (${item.native})`}
                >
                  <span className="text-base">{item.flag}</span>
                  <span className="truncate">{item.native}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: Play Options */}
          <div className="space-y-3 pt-2 border-t border-white/10">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sparkles size={14} className="text-emerald-400" />
              <span>{lang === 'hi' ? '2. खेलने का तरीका चुनें:' : '2. Choose How to Play:'}</span>
            </label>

            {/* Option A: Play as Guest (Instant 1-Click - HIGH-IMPACT HIGHLIGHTED HERO) */}
            <div className="relative group">
              {/* Pulsing ambient neon glow behind button */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-70 group-hover:opacity-100 blur-md transition-all duration-300 animate-pulse" />
              
              <button
                onClick={() => {
                  onPlayAsGuest();
                  onClose();
                }}
                className="relative w-full p-4.5 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:from-emerald-300 hover:via-teal-200 hover:to-cyan-300 text-slate-950 font-black font-title text-sm tracking-wide ring-2 ring-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-between transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <div className="flex items-center gap-3.5 text-left">
                  <div className="w-11 h-11 rounded-xl bg-slate-950/20 border border-slate-950/20 flex items-center justify-center text-2xl shadow-inner shrink-0">
                    ⚡
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-[15px] text-slate-950">
                        {lang === 'hi' ? 'अतिथि के रूप में खेलें (तुरंत शुरू)' : 'Play as Guest (Instant Play)'}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-950 text-emerald-300 font-mono text-[9px] font-black uppercase tracking-wider border border-emerald-400/40">
                        {lang === 'hi' ? 'अनुशंसित' : 'RECOMMENDED'}
                      </span>
                    </div>
                    <div className="text-[11.5px] font-mono text-slate-900/90 font-bold mt-0.5">
                      {lang === 'hi' ? 'कोई खाता आवश्यक नहीं • ब्राउज़र में सुरक्षित' : 'No Signup Required • Saves to Browser'}
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-950/15 flex items-center justify-center group-hover:bg-slate-950/25 transition-colors">
                  <ArrowRight size={18} className="text-slate-950 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>

            {/* Distinct Divider with Highlighted Cloud Streaks Badge */}
            <div className="flex items-center gap-2 my-3">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-purple-500/60" />
              <div className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-400/40 text-purple-300 font-mono text-[10.5px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm shadow-purple-500/20">
                <span>☁️</span>
                <span>{lang === 'hi' ? 'या क्लाउड सिंक हेतु साइन इन करें' : 'Or Sign In For Cloud Streaks'}</span>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-purple-500/40 to-purple-500/60" />
            </div>

            {/* Option B: Continue with Google */}
            <button
              onClick={() => {
                onGoogleSignIn();
                onClose();
              }}
              className="w-full py-3.5 px-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider font-title flex items-center justify-center gap-3 transition-all border border-slate-200 shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>{lang === 'hi' ? 'Google से साइन इन करें' : 'Continue with Google'}</span>
            </button>

            {/* Option C: Email Magic Link Accordion */}
            {activeTab === 'quick' ? (
              <button
                onClick={() => setActiveTab('email')}
                className="w-full py-2.5 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Mail size={13} />
                <span>{lang === 'hi' ? 'ईमेल या अन्य खाते से लॉगिन करें' : 'Sign in with Email Address'}</span>
              </button>
            ) : (
              <form onSubmit={handleEmailSubmit} className="space-y-2.5 pt-1">
                <div>
                  <input
                    type="text"
                    placeholder={lang === 'hi' ? 'आपका नाम (उदा. आदित्य)' : 'Your Name (e.g. Alex)'}
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white placeholder:text-slate-500 text-xs font-mono focus:border-emerald-400 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder={lang === 'hi' ? 'आपका ईमेल पता' : 'your.email@example.com'}
                    value={emailInput}
                    onChange={e => setEmailInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white placeholder:text-slate-500 text-xs font-mono focus:border-emerald-400 focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                  >
                    {isSubmitting ? 'Signing In...' : (lang === 'hi' ? 'साइन इन करें' : 'Sign In')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('quick')}
                    className="px-3 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-slate-400 hover:text-white cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Privacy & Impact Assurance Footer */}
          <div className="pt-2 border-t border-white/10 text-center text-[10px] font-mono text-slate-400 flex items-center justify-center gap-1.5">
            <ShieldCheck size={12} className="text-emerald-400" />
            <span>100% Free & Transparent • Verified Stray Animal Care • Patna, Bihar</span>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
