"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Trophy, HelpCircle, Volume2, X } from 'lucide-react';
import { Language, getTranslation } from './i18n';

interface KarmaMascotCompanionProps {
  score: number;
  streak: number;
  isAnswered: boolean;
  isCorrect: boolean;
  lang: Language;
  isDark: boolean;
}

const MASCOT_MESSAGES_EN = [
  "Woof! Every question you answer feeds my furry street friends! 🐾",
  "Yum! The rice bowl is filling up nicely! 🥣",
  "You're doing amazing! Kids and grown-ups are true superheroes here! ⭐",
  "Did you know? Street dogs remember friendly faces forever! 🐶",
  "10 more grains added! Keep up the great streak! 🔥"
];

const MASCOT_MESSAGES_HI = [
  "भौंक! आपका हर सही उत्तर मेरे सड़क के बेसहारा दोस्तों का पेट भरता है! 🐾",
  "वाह! भोजन का कटोरा भर रहा है! 🥣",
  "शाबाश! बच्चे और बड़े सभी हमारे असली सुपरहीरो हैं! ⭐",
  "क्या आप जानते हैं? गली के कुत्ते प्यार करने वाले इंसानों को हमेशा याद रखते हैं! 🐶",
  "10 दाने और जुड़ गए! अद्भुत स्ट्रीक जारी रखें! 🔥"
];

export default function KarmaMascotCompanion({
  score,
  streak,
  isAnswered,
  isCorrect,
  lang,
  isDark,
}: KarmaMascotCompanionProps) {
  const [msgIndex, setMsgIndex] = useState(0);
  const [isWiggle, setIsWiggle] = useState(false);
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  const messages = lang === 'hi' ? MASCOT_MESSAGES_HI : MASCOT_MESSAGES_EN;

  const handleMascotClick = () => {
    setIsWiggle(true);
    setMsgIndex((prev) => (prev + 1) % messages.length);
    setTimeout(() => setIsWiggle(false), 500);
  };

  return (
    <div className="space-y-3">
      {/* 🐾 Karma Mascot Companion Card */}
      <div
        className={`p-4 sm:p-5 rounded-3xl border transition-all relative overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-br from-amber-500/10 via-slate-900/90 to-slate-950 border-amber-500/30 shadow-lg' 
            : 'bg-gradient-to-br from-amber-50 via-white to-orange-50 border-amber-300 shadow-md'
        }`}
      >
        {/* Top Gold Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500" />

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Clickable Mascot Pup Avatar */}
            <motion.button
              onClick={handleMascotClick}
              animate={isWiggle || (isAnswered && isCorrect) ? { rotate: [0, -12, 12, -12, 12, 0], scale: [1, 1.15, 1] } : {}}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-400/20 border-2 border-amber-400/50 flex items-center justify-center text-3xl shadow-md cursor-pointer shrink-0 hover:bg-amber-400/30"
              title="Click me for a friendly tip!"
            >
              🐕
            </motion.button>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="text-xs sm:text-sm font-extrabold font-title text-amber-400 flex items-center gap-1 truncate">
                  <span>Karma the Pup</span>
                </h4>
                <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 shrink-0">
                  {lang === 'hi' ? 'मार्गदर्शक' : 'Mascot'}
                </span>
              </div>
              <p className={`text-xs font-medium leading-tight mt-0.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {isAnswered 
                  ? (isCorrect ? (lang === 'hi' ? '🎉 भौंक! +10 दाने कटोरे में गए!' : '🎉 Woof! +10 grains added to the bowl!') : (lang === 'hi' ? 'कोई बात नहीं! अगला प्रश्न हल करें! 🐾' : 'Good try! You can do the next one! 🐾'))
                  : messages[msgIndex]}
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowHowItWorks(!showHowItWorks)}
            className={`px-2.5 py-1.5 rounded-xl border text-[11px] font-mono font-bold flex items-center gap-1 transition-colors cursor-pointer shrink-0 ${
              showHowItWorks
                ? 'bg-amber-500 text-slate-950 border-amber-400'
                : isDark ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white' : 'bg-white border-slate-300 text-slate-700'
            }`}
          >
            <HelpCircle size={13} />
            <span className="hidden sm:inline">{lang === 'hi' ? 'कैसे काम करता है?' : 'How It Works'}</span>
          </button>
        </div>

        {/* 🌟 3-Step Simple Visual Explainer for Kids & Adults */}
        <AnimatePresence>
          {showHowItWorks && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-3 border-t border-amber-500/20 overflow-hidden space-y-2"
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 font-mono">
                {lang === 'hi' ? 'आसान 3 कदम — बच्चों और बड़ों सभी के लिए:' : 'Easy 3 Steps — For Kids & Adults Alike:'}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                {/* Step 1 */}
                <div className={`p-2.5 rounded-2xl border ${isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-white border-amber-200'}`}>
                  <div className="text-lg mb-0.5">🧠 1</div>
                  <div className="font-bold text-slate-200">
                    {lang === 'hi' ? 'मज़ेदार क्विज़ खेलें' : 'Answer Fun Trivia'}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {lang === 'hi' ? 'पशु, अंतरिक्ष, विज्ञान या गणित!' : 'Pick dogs, space, science, or math!'}
                  </div>
                </div>

                {/* Step 2 */}
                <div className={`p-2.5 rounded-2xl border ${isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-white border-amber-200'}`}>
                  <div className="text-lg mb-0.5">🥣 2</div>
                  <div className="font-bold text-amber-300">
                    {lang === 'hi' ? 'अनाज इकट्ठा करें' : 'Fill Food Bowls'}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {lang === 'hi' ? 'हर सही उत्तर = 10 असली दाने।' : 'Each correct answer = 10 grains.'}
                  </div>
                </div>

                {/* Step 3 */}
                <div className={`p-2.5 rounded-2xl border ${isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-white border-amber-200'}`}>
                  <div className="text-lg mb-0.5">🐶 3</div>
                  <div className="font-bold text-emerald-400">
                    {lang === 'hi' ? 'कुत्तों को भोजन मिलता है' : 'Dogs Get Fed'}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {lang === 'hi' ? 'पटना में 100% सत्यापित भोजन।' : 'Delivered to hungry rescue animals.'}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
