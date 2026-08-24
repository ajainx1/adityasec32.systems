"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowLeft, ExternalLink, ShieldCheck, MapPin, Calendar, Camera, Sparkles, Filter, CheckCircle2, ChevronRight, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import TiltWrapper from '@/components/3d/TiltWrapper';

interface ImpactRecord {
  src: string;
  title: string;
  location: string;
  date: string;
  tag: string;
  description?: string;
}

export default function ImpactPageClient() {
  const [activeTab, setActiveTab] = useState<'august' | 'core' | 'archive'>('august');
  const [previewImage, setPreviewImage] = useState<ImpactRecord | null>(null);
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState<'en' | 'hi'>('en');

  useEffect(() => {
    const savedTheme = localStorage.getItem('jumpstreet_theme');
    if (savedTheme === 'light') {
      setIsDark(false);
    }
    const savedLang = localStorage.getItem('cyberkarma_lang');
    if (savedLang === 'hi' || savedLang === 'en') {
      setLang(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'hi' : 'en';
    setLang(nextLang);
    localStorage.setItem('cyberkarma_lang', nextLang);
  };

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem('jumpstreet_theme', newDark ? 'dark' : 'light');
    document.body.classList.toggle('light-mode', !newDark);
  };

  // 1. August 2026 Latest Verified Drives (20 Records)
  const AUGUST_FEEDING_DRIVE: ImpactRecord[] = [
    { src: '/impact/aug-1.jpeg', title: 'Street Dog Feeding & Water Drive', location: 'Rajbansi Nagar, Patna', date: '01 Aug 2026 • 01:15 PM', tag: 'Direct Rescue', description: 'Fresh warm rice & broth served to local street dogs with clean hydration bowls.' },
    { src: '/impact/aug-2.jpeg', title: 'Rescue Pup Nutritious Meal Distribution', location: 'Boring Road, Patna', date: '02 Aug 2026 • 02:40 PM', tag: 'Puppy Rescue', description: 'High-protein recovery meal provided to an orphaned litter.' },
    { src: '/impact/aug-3.jpeg', title: 'Community Animal Care Initiative', location: 'Kankarbagh, Patna', date: '03 Aug 2026 • 12:20 PM', tag: 'Street Dogs', description: 'Pack meal distribution during midday heatwave.' },
    { src: '/impact/aug-4.jpeg', title: 'Fresh Food Serving for Injured Canine', location: 'Bailey Road, Patna', date: '04 Aug 2026 • 04:10 PM', tag: 'Recovery Care', description: 'Nutritious meal provided alongside antiseptic wound care.' },
    { src: '/impact/aug-5.jpeg', title: 'Evening Feeding Round & Health Check', location: 'Patliputra Colony, Patna', date: '05 Aug 2026 • 06:30 PM', tag: 'Night Patrol', description: 'Evening feeding run covering residential alleys.' },
    { src: '/impact/aug-6.jpeg', title: 'Stray Pack Nourishment Drive', location: 'Ashiana Nagar, Patna', date: '06 Aug 2026 • 01:45 PM', tag: 'Pack Feeding', description: 'Substantial multi-canine meal distribution.' },
    { src: '/impact/aug-7.jpeg', title: 'Monsoon Relief Food Bowl Distribution', location: 'Anisabad, Patna', date: '07 Aug 2026 • 03:00 PM', tag: 'Weather Care', description: 'Dry shelter feeding during severe rainfall.' },
    { src: '/impact/aug-8.jpeg', title: 'Senior Street Canine Special Diet', location: 'Danapur, Patna', date: '08 Aug 2026 • 11:30 AM', tag: 'Senior Care', description: 'Soft boiled rice and calcium-rich broth for older canine.' },
    { src: '/impact/aug-9.jpeg', title: 'Community Dog Health & Meal Drive', location: 'Raja Bazar, Patna', date: '09 Aug 2026 • 05:15 PM', tag: 'Health Check', description: 'Meal check with tick treatment inspection.' },
    { src: '/impact/aug-10.jpeg', title: 'Afternoon Feeding Drive in Commercial Zone', location: 'Exhibition Road, Patna', date: '10 Aug 2026 • 02:10 PM', tag: 'Urban Care', description: 'Direct food bowls delivered in busy market area.' },
    { src: '/impact/aug-11.jpeg', title: 'Direct Street Food Aid', location: 'Frazer Road, Patna', date: '11 Aug 2026 • 01:25 PM', tag: 'Daily Drive', description: 'Fresh warm meal bowl served to resting street dogs.' },
    { src: '/impact/aug-12.jpeg', title: 'Puppy Litter Emergency Nutrition', location: 'Gardanibagh, Patna', date: '12 Aug 2026 • 12:40 PM', tag: 'Litter Rescue', description: 'Specialized milk & rice supplement for newborn puppies.' },
    { src: '/impact/aug-13.jpeg', title: 'Residential Feeding Circuit', location: 'Shastri Nagar, Patna', date: '13 Aug 2026 • 04:50 PM', tag: 'Routine Feed', description: 'Neighborhood feeding run covering 6 local dogs.' },
    { src: '/impact/aug-14.jpeg', title: 'Midday Hot Meal Distribution', location: 'Kidwaipuri, Patna', date: '14 Aug 2026 • 02:00 PM', tag: 'Fresh Food', description: 'Freshly prepared boiled rice and vitamins.' },
    { src: '/impact/aug-15.jpeg', title: 'Independence Week Special Animal Feast', location: 'Gandhi Maidan, Patna', date: '15 Aug 2026 • 10:30 AM', tag: 'Special Drive', description: 'Celebratory mega feeding bowl served to 12 street canines.' },
    { src: '/impact/aug-16.jpeg', title: 'Wound Recovery High-Protein Feed', location: 'SK Puri, Patna', date: '16 Aug 2026 • 03:35 PM', tag: 'Medical Recovery', description: 'Post-treatment meal aiding rapid tissue healing.' },
    { src: '/impact/aug-17.jpeg', title: 'Early Morning Feeding Patrol', location: 'Buddha Colony, Patna', date: '17 Aug 2026 • 07:15 AM', tag: 'Morning Patrol', description: 'Dawn feeding round before street traffic picks up.' },
    { src: '/impact/aug-18.jpeg', title: 'Shelter-Border Animal Meal Aid', location: 'Digha, Patna', date: '17 Aug 2026 • 11:45 AM', tag: 'Boundary Care', description: 'Feeding drive along the Ganga river boundary zone.' },
    { src: '/impact/aug-20.jpeg', title: 'Active Emergency Animal Relief Drive', location: 'Patna Division, Bihar', date: '17 Aug 2026 • 03:00 PM', tag: 'Verified Impact', description: 'Real-time verified ground feeding funded by CyberKarma.' },
    { src: '/impact/dog-feed-1.jpeg', title: 'Daily Evening Rice Bowl Drive', location: 'Rajbansi Nagar, Patna', date: '16 Aug 2026 • 07:20 PM', tag: 'Evening Feed', description: 'Evening feeding run with fresh warm rice for local stray companions.' },
    { src: '/impact/dog-feed-2.jpeg', title: 'Afternoon Rescue Companion Meal', location: 'Market Hub, Patna Division', date: '17 Aug 2026 • 04:13 PM', tag: 'Afternoon Care', description: 'Freshly served afternoon nourishment for resting street dogs.' },
    { src: '/impact/dog-feed-3.jpeg', title: 'Evening Street Pack Patrol', location: 'Road Rajbansi Nagar, Patna', date: '17 Aug 2026 • 07:04 PM', tag: 'Pack Patrol', description: 'Group feeding patrol across residential street lanes.' },
    { src: '/impact/dog-feed-4.jpeg', title: 'Market Lane Street Feeding', location: 'Patna Division, Bihar', date: '18 Aug 2026 • 06:31 PM', tag: 'Market Drive', description: 'Wholesome rice & broth meal for street dog pack.' },
    { src: '/impact/dog-feed-5.jpeg', title: 'Dusk Street Companion Care', location: 'Rajbansi Nagar Hub, Patna', date: '18 Aug 2026 • 07:25 PM', tag: 'Dusk Care', description: 'Dusk feeding run with clean hydration.' },
    { src: '/impact/dog-feed-6.jpeg', title: 'Patna Street Pack Meal Drive', location: 'Market Corner, Patna', date: '19 Aug 2026 • 07:20 PM', tag: 'Pack Feeding', description: 'Community animal care run covering 8 stray canines.' },
    { src: '/impact/dog-feed-7.jpeg', title: 'Fresh Evening Rice Nourishment', location: 'Rajbansi Nagar, Patna', date: '19 Aug 2026 • 07:22 PM', tag: 'Daily Care', description: 'Direct food bowl service in quiet lane.' },
    { src: '/impact/dog-feed-8.jpeg', title: 'Evening Pack Survival Feed', location: 'Patna Division, Bihar', date: '20 Aug 2026 • 07:34 PM', tag: 'Pack Feed', description: 'Nutritious dinner bowl provided to street dogs.' },
    { src: '/impact/dog-feed-9.jpeg', title: 'Late Night Animal Patrol', location: 'Patna Alley Spot, Bihar', date: '20 Aug 2026 • 08:46 PM', tag: 'Night Patrol', description: 'Late-night round feeding vulnerable canine packs.' },
    { src: '/impact/dog-feed-10.jpeg', title: 'Community Animal Care Station', location: 'Rajbansi Nagar, Patna', date: '21 Aug 2026 • 06:50 PM', tag: 'Community Drive', description: 'Daily care station setup with rice & egg nourishment.' },
    { src: '/impact/dog-feed-11.jpeg', title: 'Night Street Companion Dinner', location: 'Egg Stall Hub, Patna', date: '21 Aug 2026 • 07:47 PM', tag: 'Night Dinner', description: 'Evening feeding round for shopfront companion dogs.' },
    { src: '/impact/dog-feed-12.jpeg', title: 'Evening Rescue Feeding Station', location: 'Patna Division, Bihar', date: '22 Aug 2026 • 07:13 PM', tag: 'Rescue Care', description: 'Nutritious meal bowl serving local pack.' },
    { src: '/impact/dog-feed-13.jpeg', title: 'Afternoon Street Puppy Meal', location: 'Market Hub, Patna', date: '23 Aug 2026 • 05:01 PM', tag: 'Puppy Care', description: 'High-energy puppy and street companion meal distribution.' },
    { src: '/impact/dog-feed-14.jpeg', title: 'Sunset Rice Bowl Meal Drive', location: 'Rajbansi Nagar Alley, Patna', date: '23 Aug 2026 • 05:46 PM', tag: 'Sunset Drive', description: 'Sunset verified animal feeding round funded by CyberKarma quiz players.' },
  ];

  // 2. Core Field Drives (9 High-Res Records)
  const STREET_FEEDING_DRIVE: ImpactRecord[] = [
    { src: '/impact/street-dog-1.jpeg', title: 'Morning Nutrition Round', location: 'Rajbansi Nagar, Patna', date: '19 Jul 2026 • 09:15 AM', tag: 'Direct Street Feeding', description: 'First morning meal serving 4 neighborhood dogs.' },
    { src: '/impact/street-dog-2.jpeg', title: 'Daily Evening Rice Bowl', location: 'Rajbansi Nagar, Patna', date: '20 Jul 2026 • 12:55 PM', tag: 'Direct Street Feeding', description: 'Nutritious cooked meal provided to street pack.' },
    { src: '/impact/street-dog-3.jpeg', title: 'Recovery Feeding for Injured Dog', location: 'Bailey Road, Patna', date: '21 Jul 2026 • 04:30 PM', tag: 'Medical Support', description: 'Special recovery care diet for injured street dog.' },
    { src: '/impact/street-dog-4.jpeg', title: 'Community Pack Meal Distribution', location: 'Kankarbagh, Patna', date: '22 Jul 2026 • 01:20 PM', tag: 'Direct Street Feeding', description: 'Wholesome rice & broth meal for street dog pack.' },
    { src: '/impact/street-dog-5.jpeg', title: 'Night Patrol Feeding Run', location: 'Boring Road, Patna', date: '23 Jul 2026 • 08:45 PM', tag: 'Direct Street Feeding', description: 'Late evening feeding round for vulnerable street dogs.' },
    { src: '/impact/street-dog-6.jpeg', title: 'Puppy Litter Emergency Meal', location: 'Patliputra Colony, Patna', date: '24 Jul 2026 • 11:10 AM', tag: 'Puppy Care', description: 'Nutritional support for mother and newborn puppies.' },
    { src: '/impact/street-dog-7.jpeg', title: 'Monsoon Shelter Feeding', location: 'Ashiana Nagar, Patna', date: '25 Jul 2026 • 03:00 PM', tag: 'Direct Street Feeding', description: 'Sheltered feeding during heavy monsoon rains.' },
    { src: '/impact/street-dog-8.jpeg', title: 'Senior Dog Gentle Diet', location: 'Danapur, Patna', date: '26 Jul 2026 • 05:15 PM', tag: 'Senior Care', description: 'Easily digestible meal for an elderly street canine.' },
    { src: '/impact/street-dog-9.jpeg', title: 'Weekend Community Feeding Drive', location: 'Rajbansi Nagar, Patna', date: '27 Jul 2026 • 02:00 PM', tag: 'Direct Street Feeding', description: 'Comprehensive neighborhood feeding round.' },
  ];

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${isDark ? 'bg-[#020617] text-slate-100' : 'bg-gradient-to-br from-slate-50 via-emerald-50/20 to-teal-50/30 text-slate-900'}`}>
      
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 ${isDark ? 'bg-emerald-500' : 'bg-emerald-300'}`} />
        <div className={`absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 ${isDark ? 'bg-rose-500' : 'bg-rose-300'}`} />
      </div>

      {/* Top Header */}
      <header className={`sticky top-0 z-40 w-full backdrop-blur-2xl border-b transition-colors ${isDark ? 'bg-slate-950/80 border-white/10' : 'bg-white/80 border-slate-200 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 font-bold text-xs font-mono transition-all hover:scale-105"
            >
              <ArrowLeft size={14} />
              <span>{lang === 'hi' ? '← क्विज पर वापस' : 'Back to Quiz'}</span>
            </Link>

            <div className="h-5 w-[1px] bg-white/20 hidden sm:block" />

            <div className="flex items-center gap-2">
              <span className="text-xl">🐕</span>
              <div>
                <h1 className="text-sm sm:text-base font-black font-title leading-tight">
                  {lang === 'hi' ? 'ज़मीनी दान रिकॉर्ड (Impact Ledger)' : 'Real-World Impact Ledger'}
                </h1>
                <p className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {lang === 'hi' ? 'पटना मंडल, बिहार • 110+ फील्ड फोटो व बिल' : 'Patna Division, Bihar • 110+ Field Proof Photos'}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/40 text-purple-300 transition-all shadow-md active:scale-95 cursor-pointer hover:scale-105"
              title={lang === 'en' ? "हिंदी में देखें" : "Switch to English"}
            >
              <span className="text-sm">🌐</span>
              <span>{lang === 'en' ? 'हिंदी' : 'English'}</span>
            </button>

            <a
              href="https://adityasec32.systems"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all hover:scale-105"
            >
              <span>🛡️ AdityaSec Audit</span>
              <ExternalLink size={12} />
            </a>

            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-700/80 transition-all text-slate-300" 
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <Link
              href="/"
              className="px-4 py-2 rounded-xl text-xs font-black font-title bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20 flex items-center gap-1.5"
            >
              <Sparkles size={14} />
              <span>{lang === 'hi' ? 'अभी भोजन कराएं' : 'Feed Dogs Now'}</span>
            </Link>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 relative z-10 space-y-8">

        {/* Hero Banner */}
        <TiltWrapper tiltDeg={3} glare={true} className="w-full">
          <div className={`p-8 sm:p-12 rounded-[36px] border shadow-2xl relative overflow-hidden text-center backdrop-blur-2xl ${isDark ? 'bg-gradient-to-b from-slate-900/90 via-slate-950/80 to-black/90 border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.15)]' : 'bg-gradient-to-b from-white/95 to-slate-50/95 border-emerald-200 shadow-xl'}`}>
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono font-bold text-xs mb-4 shadow-sm">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>{lang === 'hi' ? '100% पारदर्शी फील्ड प्रमाण रिकॉर्ड' : '100% TRANSPARENT FIELD PROOF LEDGER'}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-title tracking-tight mb-4">
              <span className="bg-gradient-to-r from-rose-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                {lang === 'hi' ? 'प्रत्येक सही उत्तर असली बेसहारा कुत्तों को भोजन कराता है।' : 'Every Answer Feeds Real Street Dogs.'}
              </span>
            </h2>

            <p className={`text-sm sm:text-base max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {lang === 'hi' 
                ? 'हम केवल डिजिटल दाने नहीं गिनते। साइबरकर्म पर अर्जित हर अंक सीधे पटना (बिहार) में बेसहारा पशुओं के ताजा पौष्टिक भोजन, स्वच्छ जल और प्राथमिक उपचार में काम आता है।'
                : "We don't just count digital grains. Every point scored on CyberKarma directly funds fresh, hot nutritious meals, clean water bowls, and urgent first-aid care for abandoned and vulnerable street animals across Patna, Bihar."}
            </p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mt-8">
              <div className={`p-4 rounded-2xl border text-center ${isDark ? 'bg-black/40 border-white/10' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
                <div className="text-2xl sm:text-3xl font-black font-title text-emerald-500">110+</div>
                <div className={`text-[11px] font-mono uppercase tracking-wider mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600 font-bold'}`}>{lang === 'hi' ? 'सत्यापित तस्वीरें' : 'Verified Photos'}</div>
              </div>
              <div className={`p-4 rounded-2xl border text-center ${isDark ? 'bg-black/40 border-white/10' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
                <div className="text-2xl sm:text-3xl font-black font-title text-rose-500">100%</div>
                <div className={`text-[11px] font-mono uppercase tracking-wider mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600 font-bold'}`}>{lang === 'hi' ? 'प्रत्यक्ष ज़मीनी सेवा' : 'Direct Field Ground'}</div>
              </div>
              <div className={`p-4 rounded-2xl border text-center ${isDark ? 'bg-black/40 border-white/10' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
                <div className="text-2xl sm:text-3xl font-black font-title text-amber-500">Patna</div>
                <div className={`text-[11px] font-mono uppercase tracking-wider mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600 font-bold'}`}>{lang === 'hi' ? 'सक्रिय मंडल (बिहार)' : 'Active Division'}</div>
              </div>
              <div className={`p-4 rounded-2xl border text-center ${isDark ? 'bg-black/40 border-white/10' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
                <div className="text-2xl sm:text-3xl font-black font-title text-cyan-500">0%</div>
                <div className={`text-[11px] font-mono uppercase tracking-wider mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600 font-bold'}`}>{lang === 'hi' ? 'शून्य प्रशासनिक खर्च' : 'Admin Overhead'}</div>
              </div>
            </div>

          </div>
        </TiltWrapper>

        {/* 3-Tab Filter Bar */}
        <div className={`flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl border max-w-2xl mx-auto ${isDark ? 'bg-black/40 border-white/10' : 'bg-slate-100 border-slate-300 shadow-sm'}`}>
          <button
            onClick={() => setActiveTab('august')}
            className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs font-black font-title transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'august' 
                ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-md shadow-emerald-500/25 scale-[1.02]' 
                : (isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-white')
            }`}
          >
            <span>{lang === 'hi' ? '🌟 अगस्त 2026 अभियान' : '🌟 August 2026 Drives'}</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-black/30 text-white font-mono">20</span>
          </button>

          <button
            onClick={() => setActiveTab('core')}
            className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs font-black font-title transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'core' 
                ? 'bg-gradient-to-r from-rose-500 to-amber-400 text-slate-950 shadow-md shadow-rose-500/25 scale-[1.02]' 
                : (isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-white')
            }`}
          >
            <span>{lang === 'hi' ? '🐾 मुख्य फील्ड ड्राइव' : '🐾 Core Field Drives'}</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-black/30 text-white font-mono">9</span>
          </button>

          <button
            onClick={() => setActiveTab('archive')}
            className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs font-black font-title transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'archive' 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-400 text-slate-950 shadow-md shadow-cyan-500/25 scale-[1.02]' 
                : (isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-white')
            }`}
          >
            <span>{lang === 'hi' ? '📷 समुदाय अभिलेखागार' : '📷 Community Archive'}</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-black/30 text-white font-mono">81</span>
          </button>
        </div>

        {/* Dynamic Gallery Content */}
        <div>
          {/* TAB 1: August 2026 Drives */}
          {activeTab === 'august' && (
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-sm font-black font-title flex items-center gap-2 text-emerald-400">
                  <span>🌟</span> August 2026 Latest Verified Drives (20 Records)
                </h3>
                <span className="text-xs font-mono text-slate-400">Direct Field Photos</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {AUGUST_FEEDING_DRIVE.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6, scale: 1.02 }}
                    onClick={() => setPreviewImage(item)}
                    className="relative group rounded-3xl overflow-hidden shadow-lg border border-white/15 cursor-pointer bg-slate-950 h-80 flex flex-col justify-end p-5 transition-all"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:from-black/95 transition-colors" />

                    <div className="relative z-10 space-y-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-emerald-500 text-slate-950 shadow-sm inline-block">
                        {item.tag}
                      </span>
                      <h4 className="text-sm font-bold text-white leading-snug font-title">{item.title}</h4>
                      <p className="text-xs text-slate-300 flex items-center gap-1 font-mono">
                        <MapPin size={12} className="text-emerald-400 shrink-0" /> {item.location}
                      </p>
                      <span className="text-[10px] text-slate-400 block font-mono">{item.date}</span>
                    </div>

                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart size={16} className="fill-rose-500 text-rose-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 2: Core Field Drives */}
          {activeTab === 'core' && (
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-sm font-black font-title flex items-center gap-2 text-rose-400">
                  <span>🐾</span> Core Field Feeding Drives (9 High-Res Field Records)
                </h3>
                <span className="text-xs font-mono text-slate-400">Patna Division</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {STREET_FEEDING_DRIVE.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6, scale: 1.02 }}
                    onClick={() => setPreviewImage(item)}
                    className="relative group rounded-3xl overflow-hidden shadow-lg border border-white/15 cursor-pointer bg-slate-950 h-88 flex flex-col justify-end p-5 transition-all"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:from-black/95 transition-colors" />

                    <div className="relative z-10 space-y-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-rose-500 text-white shadow-sm inline-block">
                        {item.tag}
                      </span>
                      <h4 className="text-sm font-bold text-white leading-snug font-title">{item.title}</h4>
                      <p className="text-xs text-slate-300 flex items-center gap-1 font-mono">
                        <MapPin size={12} className="text-rose-400 shrink-0" /> {item.location}
                      </p>
                      <span className="text-[10px] text-slate-400 block font-mono">{item.date}</span>
                    </div>

                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart size={16} className="fill-rose-500 text-rose-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 3: Community Archive */}
          {activeTab === 'archive' && (
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-sm font-black font-title flex items-center gap-2 text-cyan-400">
                  <span>📷</span> Global Community Impact Archive (81 Field Records)
                </h3>
                <span className="text-xs font-mono text-slate-400">Continuous Photo Feed</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {Array.from({ length: 81 }).map((_, i) => {
                  const record: ImpactRecord = {
                    src: `/impact/impact-${i + 1}.jpeg`,
                    title: `Community Impact Record #${i + 1}`,
                    location: 'Patna Division Feeding Circuit',
                    date: 'Verified Field Drive',
                    tag: 'Field Archive',
                    description: 'Community stray feeding meal verified and funded by player karma points.'
                  };

                  return (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setPreviewImage(record)}
                      className="relative rounded-2xl overflow-hidden shadow-sm border border-white/10 aspect-square cursor-pointer bg-slate-900 group"
                    >
                      <img
                        src={record.src}
                        alt={record.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                        <span className="text-[10px] font-mono text-white truncate">#{i + 1}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>

        {/* Action Callout */}
        <div className="p-8 rounded-[32px] bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/60 border border-emerald-500/30 text-center space-y-4">
          <h3 className="text-2xl font-black font-title text-white">
            {lang === 'hi' ? 'क्या आप इन बेसहारा जीवों के लिए और भोजन दान करना चाहते हैं?' : 'Want to fund more warm meals for these animals?'}
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            {lang === 'hi' 
              ? 'निःशुल्क क्विज खेलें। हर सही उत्तर पर 10 दाने असली अनाज दान होता है, जिससे पटना में बेसहारा कुत्तों को भोजन मिलता है।'
              : 'Play the free educational quiz. Every correct answer earns 10 grains of rice to feed another stray dog in Patna.'}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-black font-title uppercase tracking-wider bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 hover:brightness-110 transition-all shadow-lg shadow-emerald-500/25 cursor-pointer"
          >
            <span>{lang === 'hi' ? 'क्विज़ खेलें और भोजन कराएं →' : 'Play Quiz & Feed Animals →'}</span>
          </Link>
        </div>

      </main>

      {/* High-Res Image Lightbox Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="max-w-3xl w-full rounded-[32px] overflow-hidden border border-white/20 bg-slate-950 shadow-2xl relative"
            >
              <div className="relative aspect-video sm:aspect-[16/10] bg-black">
                <img
                  src={previewImage.src}
                  alt={previewImage.title}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setPreviewImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all text-sm font-mono cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500 text-slate-950">
                    {previewImage.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {previewImage.date}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-title text-white">
                  {previewImage.title}
                </h3>

                <p className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <MapPin size={14} /> {previewImage.location}
                </p>

                {previewImage.description && (
                  <p className="text-sm text-slate-300 leading-relaxed pt-2 border-t border-white/10">
                    {previewImage.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className={`w-full border-t py-8 mt-12 text-center text-xs font-mono transition-colors ${isDark ? 'border-white/10 text-slate-500' : 'border-slate-200 text-slate-600'}`}>
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>{lang === 'hi' ? '© 2026 साइबरकर्म • 100% गैर-लाभकारी पारदर्शी क्विज़ इंजन' : '© 2026 CyberKarma • 100% Non-Profit Philanthropic Trivia Engine'}</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-emerald-400 hover:underline">{lang === 'hi' ? 'क्विज़ खेलें' : 'Play Quiz'}</Link>
            <a href="https://adityasec32.systems" target="_blank" rel="noopener noreferrer" className="hover:underline">AdityaSec</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
