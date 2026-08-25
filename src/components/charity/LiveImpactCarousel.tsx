"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShieldCheck, MapPin, Calendar, Activity, ChevronLeft, ChevronRight, Pause, Play, Sparkles, AlertCircle, Award, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Language } from './i18n';

interface LiveImpactCarouselProps {
  lang: Language;
  isDark: boolean;
  onOpenSuggestion?: () => void;
}

interface RescueRecord {
  src: string;
  titleEn: string;
  titleHi: string;
  location: string;
  date: string;
  tagEn: string;
  tagHi: string;
  tagColor: string;
  category: 'rescue' | 'feeding' | 'medical' | 'puppy';
  storyEn: string;
  storyHi: string;
  urgencyEn: string;
  urgencyHi: string;
  patientName?: string;
}

const RESCUE_RECORDS: RescueRecord[] = [
  {
    src: '/impact/dog-feed-14.jpeg',
    titleEn: 'Sunset Rice Bowl & Wounded Paw First-Aid',
    titleHi: 'संध्याकालीन आहार एवं घायल पैर का प्राथमिक उपचार',
    location: 'Rajbansi Nagar Alley, Patna Division, Bihar',
    date: '23 Aug 2026 • 05:46 PM IST',
    tagEn: '🩹 Medical First-Aid & Dinner',
    tagHi: '🩹 दवा व भोजन सेवा',
    tagColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    category: 'medical',
    patientName: 'Sheru (Community Dog)',
    urgencyEn: 'Treated swollen limp paw with antiseptic spray & fed high-protein warm egg rice.',
    urgencyHi: 'सूजे हुए पैर पर एंटीसेप्टिक स्प्रे किया गया और प्रोटीन युक्त गर्म चावल-अंडा खिलाया गया।',
    storyEn: 'Found limping near the alley drain after a scooter graze. Cleaned the abrasion, applied Betadine ointment, and served 2 full bowls of digestible warm rice so he could rest safely for the night.',
    storyHi: 'गली के पास पैर में चोट के कारण लंगड़ाते हुए पाया गया। घाव को साफ कर बीटाडीन लगाई गई और 2 कटोरे ताजा चावल खिलाए गए ताकि वह रात में सुरक्षित सो सके।'
  },
  {
    src: '/impact/dog-feed-13.jpeg',
    titleEn: 'Shivering Monsoon Litter Nutrition',
    titleHi: 'बारिश में भीगे 4 नन्हे पिल्लों का पोषण',
    location: 'Market Hub Corridor, Patna, Bihar',
    date: '23 Aug 2026 • 05:01 PM IST',
    tagEn: '🍼 Newborn Puppy Care',
    tagHi: '🍼 नन्हे पिल्लों की देखरेख',
    tagColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    category: 'puppy',
    patientName: '4 Newborn Pups & Mother Gauri',
    urgencyEn: 'Heavy rain flooded their curb shelter; supplied warm broth and cardboard bedding.',
    urgencyHi: 'भारी बारिश से नाली का पानी भर गया था; सूखा गत्ता व गर्म दलिया दिया गया।',
    storyEn: 'Four tiny 3-week-old street puppies were shivering under a damp tea stall tarp. We provided high-calorie boiled rice and egg mash to the lactating mother, replenishing her milk so all four pups could nurse and survive.',
    storyHi: 'चाय की दुकान के नीचे 3 हफ्ते के 4 पिल्ले ठंड से कांप रहे थे। दूध पिलाने वाली मां को पौष्टिक आहार दिया गया जिससे चारों पिल्लों को पर्याप्त दूध और सुरक्षा मिल सकी।'
  },
  {
    src: '/impact/dog-feed-12.jpeg',
    titleEn: 'Trauma Recovery: Malnourished Senior Stray',
    titleHi: 'अत्यधिक कुपोषण से उबरता बुजुर्ग श्वान',
    location: 'Railway Colony Perimeter, Patna, Bihar',
    date: '22 Aug 2026 • 07:13 PM IST',
    tagEn: '❤️ Malnutrition Rehabilitation',
    tagHi: '❤️ कुपोषण सुधार मिशन',
    tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    category: 'rescue',
    patientName: 'Bruno (Senior Street Companion)',
    urgencyEn: 'Severely emaciated from food scarcity; gaining strength through consistent daily feeding.',
    urgencyHi: 'अत्यधिक कमजोर और भूखा; अब नियमित आहार से स्वस्थ हो रहा है।',
    storyEn: 'Bruno had become skin and bones after being chased away by dominant packs. We set up an isolated quiet feeding bowl with soft turmeric rice and calcium-rich bone broth. Today, his ribs are no longer protruding and he wags happily.',
    storyHi: 'दूसरे कुत्तों के डर से ब्रूनो कई दिनों से भूखा था। उसे अलग शांत जगह पर हल्दी वाला चावल व शोरबा दिया गया। अब वह तेजी से स्वस्थ हो रहा है।'
  },
  {
    src: '/impact/dog-feed-11.jpeg',
    titleEn: 'Late Night Alley Hunger Patrol',
    titleHi: 'देर रात गली-मोहल्लों में भूख मिटाने की मुहिम',
    location: 'Egg Stall Hub, Patna, Bihar',
    date: '21 Aug 2026 • 07:47 PM IST',
    tagEn: '🍲 Zero-Hunger Night Drive',
    tagHi: '🍲 रात्रि अन्नदान सेवा',
    tagColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    category: 'feeding',
    patientName: 'Pack of 6 Alley Companions',
    urgencyEn: 'Market shops closed early; prevented desperate trash scavenging with fresh meals.',
    urgencyHi: 'दुकानें बंद होने के कारण भोजन नहीं था; ताजा खाना देकर कचरा खाने से बचाया।',
    storyEn: 'Street dogs often suffer gastrointestinal punctures from eating plastic and sharp bones in garbage bins. Our midnight meal route delivers fresh, safe, soft food directly to their resting corners.',
    storyHi: 'कचरे में प्लास्टिक और नुकीली हड्डियां खाने से कुत्तों के पेट में घाव हो जाते हैं। हमारा रात्रि गश्ती दल उन्हें सीधे सुरक्षित ताजा भोजन परोसता है।'
  },
  {
    src: '/impact/dog-feed-10.jpeg',
    titleEn: 'Community Guard Dog Care & Dehydration Relief',
    titleHi: 'चौराहे के रक्षक श्वानों को जल व भोजन सेवा',
    location: 'Rajbansi Nagar Main Crossing, Patna',
    date: '21 Aug 2026 • 06:50 PM IST',
    tagEn: '💧 Clean Water & Meals',
    tagHi: '💧 स्वच्छ जल एवं अन्न',
    tagColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    category: 'feeding',
    patientName: 'Kalu & Tiger',
    urgencyEn: 'Installed clean earthenware water bowls alongside nutrient-rich dinner.',
    urgencyHi: 'भोजन के साथ मिट्टी के कुल्हड़ में ताजा ठंडा पानी रखा गया।',
    storyEn: 'Extreme summer heat in Patna frequently causes organ failure in street dogs due to lack of clean water. We install freshwater bowls at 12 street corners refilled every evening.',
    storyHi: 'पटना की भीषण गर्मी में पानी न मिलने से बेसहारा कुत्ते बीमार पड़ जाते हैं। हम हर शाम 12 प्रमुख चौराहों पर स्वच्छ जल के पात्र भरते हैं।'
  },
  {
    src: '/impact/dog-feed-9.jpeg',
    titleEn: 'Late Night Wounded Stray Check & Recovery',
    titleHi: 'घायल श्वान की देर रात देखरेख व भोजन',
    location: 'Patna Alley Spot, Bihar',
    date: '20 Aug 2026 • 08:46 PM IST',
    tagEn: '🩹 Wound Check & Healing',
    tagHi: '🩹 घाव की जांच व सेवा',
    tagColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    category: 'medical',
    patientName: 'Chulbul',
    urgencyEn: 'Inspected neck scratch from barbed wire; applied fly-repellent antiseptic paste.',
    urgencyHi: 'तार से लगे घाव पर मक्खी-रोधी मरहम लगाया गया।',
    storyEn: 'In humid monsoon weather, open wounds quickly attract maggots. By catching minor injuries within 24 hours and keeping the dog nourished, we prevent life-threatening infections.',
    storyHi: 'बरसात के मौसम में खुले घाव में कीड़े पड़ने का भारी खतरा रहता है। समय पर दवा और पौष्टिक भोजन मिलने से गंभीर संक्रमण से बचाव हुआ।'
  }
];

export default function LiveImpactCarousel({ lang, isDark, onOpenSuggestion }: LiveImpactCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeFilter, setActiveFilter] = useState<'all' | 'medical' | 'puppy' | 'feeding'>('all');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const filteredRecords = activeFilter === 'all' 
    ? RESCUE_RECORDS 
    : RESCUE_RECORDS.filter(r => r.category === activeFilter);

  const current = filteredRecords[currentIndex % filteredRecords.length] || RESCUE_RECORDS[0];

  useEffect(() => {
    if (!isPlaying) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % filteredRecords.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, filteredRecords.length]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + filteredRecords.length) % filteredRecords.length);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % filteredRecords.length);
  };

  return (
    <div className="w-full mt-8 relative z-10">
      <div className={`p-6 sm:p-10 rounded-[36px] shadow-2xl backdrop-blur-2xl border relative overflow-hidden transition-all ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900/95 via-rose-950/20 to-slate-950/95 border-rose-500/30 text-white shadow-[0_0_50px_rgba(244,63,94,0.15)]' 
          : 'bg-white/98 border-2 border-rose-200 text-slate-900 shadow-xl'
      }`}>
        
        {/* Ambient Warm Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="p-2 rounded-2xl bg-rose-500/20 text-rose-500 border border-rose-500/30 shadow-md">
                <Heart size={24} className="fill-rose-500 animate-pulse" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-widest bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                    {lang === 'hi' ? '🔴 लाइव ज़मीनी सेवा रिपोर्ट' : '🔴 LIVE FIELD RESCUE STREAM'}
                  </span>
                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                    {lang === 'hi' ? 'पटना मंडल, बिहार' : 'Patna Division, Bihar'}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-title mt-0.5">
                  {lang === 'hi' ? 'ज़मीनी स्तर पर सेवा एवं घायल पशु उपचार' : 'Real-World Impact, Injured Animal Care & Field Proof'}
                </h2>
              </div>
            </div>
            <p className={`text-xs sm:text-sm max-w-2xl leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {lang === 'hi' 
                ? 'आपके हर सही उत्तर से अर्जित दाने सीधे पटना की गलियों में घायल, भूखे व बेसहारा कुत्तों के लिए एंटीसेप्टिक मरहम, दवाएं और गर्म ताजा भोजन में परिवर्तित होते हैं।'
                : '100% of quiz karma points directly fund verified feeding drives, wound antiseptic dressings, and warm rescue meals for injured and starving street dogs across Patna, Bihar.'}
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              href="/impact"
              className="px-5 py-3 rounded-2xl text-xs font-black font-title uppercase tracking-wider bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white transition-all shadow-lg shadow-rose-500/30 flex items-center justify-center gap-2 hover:scale-105"
            >
              <span>{lang === 'hi' ? '110+ तस्वीरें एवं प्रमाण देखें' : 'Explore 110+ Field Photos'}</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-between gap-2 mb-6 flex-wrap relative z-10">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            {[
              { id: 'all', labelEn: '🔥 All Rescue Feeds', labelHi: '🔥 सभी सेवा राउंड' },
              { id: 'medical', labelEn: '🩹 Injured & First-Aid Care', labelHi: '🩹 घायल श्वान व दवा' },
              { id: 'puppy', labelEn: '🍼 Monsoon Litters & Pups', labelHi: '🍼 नन्हे पिल्लों की रक्षा' },
              { id: 'feeding', labelEn: '🍲 Night Meal Patrols', labelHi: '🍲 रात्रि अन्नदान' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id as any);
                  setCurrentIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                {lang === 'hi' ? tab.labelHi : tab.labelEn}
              </button>
            ))}
          </div>

          {/* Autoplay Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs transition-all flex items-center gap-1 font-mono cursor-pointer"
              title={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
            >
              {isPlaying ? <Pause size={12} /> : <Play size={12} />}
              <span className="text-[10px] hidden sm:inline">{isPlaying ? 'Auto-Rotating' : 'Paused'}</span>
            </button>
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer hover:scale-105"
              aria-label="Previous Photo"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer hover:scale-105"
              aria-label="Next Photo"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Live Active Showcase Deck (Hero Slide + Secondary Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 relative z-10 items-stretch">
          
          {/* Main Rotating Feature Stage (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.src}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black/60 min-h-[360px] sm:min-h-[420px] flex flex-col justify-end p-5 sm:p-7 group"
              >
                <img
                  src={current.src}
                  alt={lang === 'hi' ? current.titleHi : current.titleEn}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider border shadow-md backdrop-blur-md ${current.tagColor}`}>
                    {lang === 'hi' ? current.tagHi : current.tagEn}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-black/70 text-slate-300 border border-white/15 backdrop-blur-md flex items-center gap-1">
                    <Calendar size={11} className="text-emerald-400" />
                    <span>{current.date}</span>
                  </span>
                </div>

                {/* Bottom Story & Location Content */}
                <div className="relative z-10 space-y-2 mt-auto">
                  {current.patientName && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-rose-500/30 text-rose-200 border border-rose-400/40 text-[10px] font-mono font-bold">
                      <span>🐕 Patient:</span>
                      <span className="text-white">{current.patientName}</span>
                    </div>
                  )}

                  <h3 className="text-lg sm:text-2xl font-black text-white font-title leading-tight drop-shadow-md">
                    {lang === 'hi' ? current.titleHi : current.titleEn}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-rose-300 font-mono">
                    <MapPin size={13} className="shrink-0 text-rose-400" />
                    <span className="truncate">{current.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed drop-shadow bg-black/50 p-3 rounded-2xl border border-white/10 backdrop-blur-md">
                    "{lang === 'hi' ? current.storyHi : current.storyEn}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Position Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-3">
              {filteredRecords.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    (currentIndex % filteredRecords.length) === idx
                      ? 'w-8 bg-rose-500 shadow-md shadow-rose-500/50'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  title={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Compassionate Care & Rescue Mission Narrative (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Real Impact Highlights Box */}
            <div className="p-5 rounded-3xl bg-black/40 border border-white/10 space-y-3.5 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Activity size={14} className="text-rose-400 animate-pulse" />
                  <span>{lang === 'hi' ? 'दैनिक बचाव एवं उपचार रिकॉर्ड' : 'Daily Rescue & Care Protocol'}</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  ✓ 100% Verified
                </span>
              </div>

              {/* 3 Core Care Pillars */}
              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-3 p-2.5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-lg shrink-0">🩹</span>
                  <div>
                    <strong className="text-white font-title block">
                      {lang === 'hi' ? 'घाव व चोट प्राथमिक उपचार' : 'Wound Dressing & Antiseptic Care'}
                    </strong>
                    <span className="text-slate-300 text-[11px]">
                      {lang === 'hi' 
                        ? 'दुर्घटना में घायल श्वानों के कटे अंगों पर बीटाडीन, मक्खी-रोधी स्प्रे व ड्रेसिंग।'
                        : 'Immediate Betadine, maggot-prevention spray, and antiseptic bandages for road accident injuries.'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-lg shrink-0">🍲</span>
                  <div>
                    <strong className="text-white font-title block">
                      {lang === 'hi' ? 'गर्म पौष्टिक सुपाच्य आहार' : 'Nutrient-Dense Warm Rice Bowls'}
                    </strong>
                    <span className="text-slate-300 text-[11px]">
                      {lang === 'hi' 
                        ? 'उबले चावल, उबले अंडे और हल्दी युक्त शोरबा जो कमजोर पाचन को मजबूत करता है।'
                        : 'Freshly boiled rice, eggs, and gentle turmeric protein broth to rebuild depleted immune systems.'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-lg shrink-0">💧</span>
                  <div>
                    <strong className="text-white font-title block">
                      {lang === 'hi' ? 'स्वच्छ जल व ग्रीष्म राहत' : 'Clean Water Points & Heat Relief'}
                    </strong>
                    <span className="text-slate-300 text-[11px]">
                      {lang === 'hi' 
                        ? '12 प्रमुख स्थानों पर मिट्टी के कुल्हड़ों में नियमित ताजा जल आपूर्ति।'
                        : 'Refilling 12 large earthenware water stations across Patna alleys to prevent organ dehydration.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Live Thumbnails Preview Strip */}
            <div className="p-4 rounded-3xl bg-black/40 border border-white/10 space-y-2">
              <div className="text-[11px] font-mono font-bold text-slate-400 flex items-center justify-between">
                <span>{lang === 'hi' ? 'हालिया फील्ड तस्वीरें (क्लिक करें):' : 'Recent Photo Feeds (Tap to View):'}</span>
                <span className="text-rose-400 text-[10px]">6 Active Archive Feeds</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {RESCUE_RECORDS.slice(0, 3).map((rec, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative rounded-xl overflow-hidden border h-16 transition-all cursor-pointer group ${
                      (currentIndex % filteredRecords.length) === idx
                        ? 'border-rose-400 ring-2 ring-rose-500/40 scale-105 shadow-md'
                        : 'border-white/15 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={rec.src} alt={rec.titleEn} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                  </button>
                ))}
              </div>
            </div>

            {/* Community Report Location CTA */}
            {onOpenSuggestion && (
              <button
                onClick={onOpenSuggestion}
                className="w-full p-3 rounded-2xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <span>📍</span>
                <span>{lang === 'hi' ? 'पटना में किसी भूखे/घायल कुत्ते की लोकेशन बताएं (+25 दाने)' : 'Report an Injured or Hungry Dog Spot in Patna (+25 Grains)'}</span>
              </button>
            )}

          </div>

        </div>

        {/* Bottom Full Gallery Link */}
        <div className="mt-8 text-center pt-4 border-t border-white/10 relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/impact"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-rose-400 hover:text-rose-300 transition-colors group"
          >
            <span>{lang === 'hi' ? 'समर्पित दान रिकॉर्ड पेज देखें (पटना सेक्टर व 81 अभिलेखागार) →' : 'View Dedicated Field Proof Page (August 2026 Drives, Patna Sectors & 81 Archive Records) →'}</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
