"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Heart, Lightbulb, User, LogOut, ArrowLeft, Sun, Moon, Zap, Cpu, Award, Network, Activity, Server, ExternalLink, Volume2, VolumeX, Flame, ShieldCheck, CheckCircle2, FileText, Lock, Sparkles, MapPin, Calendar, HelpCircle, Camera } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { quizData, CategoryKey, Difficulty, Question } from './quizData';
import { quizDataHindi, DAILY_FACTS_HI } from './quizDataHindi';
import { Language, UI_TRANSLATIONS, getTranslation, LANGUAGES_LIST, LanguageMeta } from './i18n';
import { useToast } from '../js/ToastContext';
import Link from 'next/link';
import TiltWrapper from '@/components/3d/TiltWrapper';

// Initialize Supabase client
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xkhgccximcrsdpdlskys.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhraGdjY3hpbWNyc2RwZGxza3lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2NjQ0OTksImV4cCI6MjA5OTI0MDQ5OX0.R9t0QNG0voJPyxhZkXO2hQtD4_Gr2xdnGyI8AlTOk5g';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const recipientIcons: Record<string, { base: string; float: string; label: string; labelHi?: string }> = {
  human: { base: '🤲🥣', float: '💚', label: 'Underprivileged Meals', labelHi: 'जरूरतमंद भोजन' },
  birds: { base: '🕊️🌾', float: '✨', label: 'Bird Seeds', labelHi: 'पक्षी दाना' },
  cows: { base: '🐄🌿', float: '🌾', label: 'Cattle Fodder', labelHi: 'गौ ग्रास चारा' },
  dogs: { base: '🐕🦴', float: '🦴', label: 'Street Dog Meals', labelHi: 'श्वान भोजन सेवा' },
  moon: { base: '🍚🥛', float: '🤍', label: 'Moon (2)', labelHi: 'चंद्र (2)' },
  jupiter: { base: '📚💻', float: '💛', label: 'Jupiter (3)', labelHi: 'बृहस्पति (3)' },
  rahu: { base: '💊🧣', float: '⚕️', label: 'Rahu (4)', labelHi: 'राहु (4)' },
  venus: { base: '👗🌸', float: '💖', label: 'Venus (6)', labelHi: 'शुक्र (6)' },
  saturn: { base: '🦯🤝', float: '🖤', label: 'Saturn (8)', labelHi: 'शनि (8)' },
};

const DAILY_FACTS: { category: string; fact: string; tag: string }[] = [
  { category: '🐕 Canine Empathy & Rescue Science', fact: 'Dogs have an acute sense of time and predict daily feeding routines through ambient scents. Daily street feeding eliminates hunger distress, reducing territorial disputes by over 80%!', tag: 'Animal Science' },
  { category: '🛡️ Cyber Espionage & History', fact: 'The first computer virus was created in 1971 (named "Creeper") and simply displayed "I\'m the creeper, catch me if you can!". The first antivirus, "Reaper", was built specifically to delete it.', tag: 'Cyber Lore' },
  { category: '🌌 Quantum Cosmos & Astrophysics', fact: 'One teaspoon of matter from a dense neutron star weighs approximately 6 billion tons on Earth—equivalent to the weight of Mount Everest!', tag: 'Cosmology' },
  { category: '🧠 Brain Neuroplasticity & Cognition', fact: 'Every time you solve a challenging trivia question, your neurons physically remodel their connections, forming resilient new synaptic pathways.', tag: 'Cognitive Science' },
  { category: '🐾 Stray Animal Compassion', fact: 'A stray dog can recognize human facial expressions and emotional tones. Feeding them just 1 warm meal per day increases their winter survival rate by 400%.', tag: 'Philanthropy' },
  { category: '🔐 Cryptography & Quantum Security', fact: 'Post-Quantum Cryptography (PQC) relies on multi-dimensional mathematical lattices that are impossible for even future quantum computers to invert.', tag: 'Security Science' },
  { category: '🪐 Interplanetary Wonders', fact: 'A single day on Venus (243 Earth days) is longer than a full Venusian year (225 Earth days) because it rotates exceptionally slowly in reverse!', tag: 'Astronomy' },
  { category: '🐘 Empathy in the Animal Kingdom', fact: 'Elephants show profound empathy, comforting distressed companions with gentle trunk caresses and vocal rumbles, and holding memorials for fallen herd members.', tag: 'Wildlife Wisdom' },
  { category: '🌐 Deep-Sea Internet Arteries', fact: 'Over 99% of all transcontinental internet data is transmitted via fiber-optic submarine cables resting on ocean floors, shielded against shark bites.', tag: 'Infrastructure' },
  { category: '⚡ Nature Energy Physics', fact: 'A single lightning flash generates temperatures exceeding 30,000 Kelvin (53,540°F)—which is five times hotter than the visible surface of the Sun!', tag: 'Earth Physics' }
];

const levelTitles = [
  { minLvl: 1, title: "Chandra Novice", titleHi: "चंद्र नौसिखिया" },
  { minLvl: 3, title: "Budha Auditor", titleHi: "बुध संपरीक्षक" },
  { minLvl: 5, title: "Mangala Sentinel", titleHi: "मंगल प्रहरी" },
  { minLvl: 8, title: "Brihaspati Sage", titleHi: "बृहस्पति मुनि" },
  { minLvl: 12, title: "Shukra Guardian", titleHi: "शुक्र संरक्षक" },
  { minLvl: 16, title: "Shani Elder", titleHi: "शनि महाऋषि" },
  { minLvl: 20, title: "Rahu Illusionist", titleHi: "राहु चक्रधर" },
  { minLvl: 25, title: "Ketu Supreme Architect", titleHi: "केतु परम ज्ञाता" }
];

export const ALL_QUIZ_CATEGORIES = [
  {
    id: 'animals' as CategoryKey,
    icon: '🐾',
    titleEn: 'Animals',
    titleHi: 'पशु संरक्षण',
    subtitleEn: 'Wildlife & Rescue',
    subtitleHi: 'वन्यजीव एवं श्वान सेवा',
    badge: '🐾 High Impact',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    colorGradient: 'from-amber-500 to-orange-600',
    activeGlow: 'shadow-[0_0_20px_rgba(245,158,11,0.35)] border-amber-400 bg-amber-500/20 text-amber-300',
  },
  {
    id: 'math' as CategoryKey,
    icon: '🧮',
    titleEn: 'Math',
    titleHi: 'गणित',
    subtitleEn: 'Fast Arithmetic & Logic',
    subtitleHi: 'तीव्र गणना एवं पहेलियाँ',
    badge: '⚡ Fast Logic',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    colorGradient: 'from-blue-500 to-indigo-600',
    activeGlow: 'shadow-[0_0_20px_rgba(59,130,246,0.35)] border-blue-400 bg-blue-500/20 text-blue-300',
  },
  {
    id: 'space' as CategoryKey,
    icon: '🚀',
    titleEn: 'Space',
    titleHi: 'अंतरिक्ष',
    subtitleEn: 'Planets & Cosmos',
    subtitleHi: 'सौर मंडल एवं खगोलिकी',
    badge: '🪐 Cosmic Lore',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    colorGradient: 'from-purple-600 to-indigo-700',
    activeGlow: 'shadow-[0_0_20px_rgba(147,51,234,0.35)] border-purple-400 bg-purple-500/20 text-purple-300',
  },
  {
    id: 'vocab' as CategoryKey,
    icon: '📖',
    titleEn: 'Vocab',
    titleHi: 'शब्दावली',
    subtitleEn: 'Words & Idioms',
    subtitleHi: 'अंग्रेजी शब्दावली',
    badge: '📚 Word Power',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    colorGradient: 'from-rose-500 to-pink-600',
    activeGlow: 'shadow-[0_0_20px_rgba(244,63,94,0.35)] border-rose-400 bg-rose-500/20 text-rose-300',
  },
  {
    id: 'geography' as CategoryKey,
    icon: '🌍',
    titleEn: 'Geography',
    titleHi: 'भूगोल',
    subtitleEn: 'Capitals & Maps',
    subtitleHi: 'विश्व राजधानियाँ एवं सागर',
    badge: '🗺️ Explorer',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    colorGradient: 'from-teal-500 to-emerald-600',
    activeGlow: 'shadow-[0_0_20px_rgba(20,184,166,0.35)] border-teal-400 bg-teal-500/20 text-teal-300',
  },
  {
    id: 'science' as CategoryKey,
    icon: '🔬',
    titleEn: 'Science',
    titleHi: 'विज्ञान',
    subtitleEn: 'Biology & Physics',
    subtitleHi: 'जीव विज्ञान एवं भौतिकी',
    badge: '🧪 Lab Wonders',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    colorGradient: 'from-emerald-500 to-teal-600',
    activeGlow: 'shadow-[0_0_20px_rgba(16,185,129,0.35)] border-emerald-400 bg-emerald-500/20 text-emerald-300',
  },
  {
    id: 'gk' as CategoryKey,
    icon: '💡',
    titleEn: 'GK',
    titleHi: 'सामान्य ज्ञान',
    subtitleEn: 'Inventions & History',
    subtitleHi: 'ऐतिहासिक आविष्कार',
    badge: '🏆 Trivia Master',
    badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    colorGradient: 'from-yellow-500 to-amber-600',
    activeGlow: 'shadow-[0_0_20px_rgba(234,179,8,0.35)] border-yellow-400 bg-yellow-500/20 text-yellow-300',
  },
  {
    id: 'cybersecurity' as CategoryKey,
    icon: '🛡️',
    titleEn: 'Cybersecurity',
    titleHi: 'साइबर सुरक्षा',
    subtitleEn: 'Purple Team & SecOps',
    subtitleHi: 'सुरक्षा एवं हैकिंग',
    badge: '🔐 SecOps Elite',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    colorGradient: 'from-cyan-500 to-teal-600',
    activeGlow: 'shadow-[0_0_20px_rgba(6,182,212,0.35)] border-cyan-400 bg-cyan-500/20 text-cyan-300',
  },
  {
    id: 'random' as const,
    icon: '🎲',
    titleEn: 'Random',
    titleHi: 'रैंडम',
    subtitleEn: 'Shuffle All 8 Subjects',
    subtitleHi: 'सभी विषयों का मिश्रण',
    badge: '🎲 Surprise',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
    colorGradient: 'from-fuchsia-500 to-purple-600',
    activeGlow: 'shadow-[0_0_20px_rgba(217,70,239,0.35)] border-fuchsia-400 bg-fuchsia-500/20 text-fuchsia-300',
  },
  {
    id: 'custom-ai' as const,
    icon: '🤖',
    titleEn: 'AI Quiz',
    titleHi: 'AI क्विज़',
    subtitleEn: 'Unlimited Custom AI Prompts',
    subtitleHi: 'असीमित विषय जनरेटर',
    badge: '⚡ Gemini AI',
    badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    colorGradient: 'from-violet-600 to-indigo-600',
    activeGlow: 'shadow-[0_0_20px_rgba(139,92,246,0.35)] border-violet-400 bg-violet-500/20 text-violet-300',
  },
];

export default function CharityQuizClient() {
  const [mounted, setMounted] = useState(false);
  // Language & Internationalization State
  const [lang, setLang] = useState<Language>('en');
  const [showLangModal, setShowLangModal] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('cyberkarma_lang') as Language;
    if (saved && LANGUAGES_LIST.some(l => l.code === saved)) {
      setLang(saved);
    }
    const savedTheme = localStorage.getItem('jumpstreet_theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.body.classList.add('light-mode');
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.body.classList.remove('light-mode');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleSelectLanguage = (targetLang: Language) => {
    setLang(targetLang);
    localStorage.setItem('cyberkarma_lang', targetLang);
    setShowLangDropdown(false);
    setShowLangModal(false);
    const langMeta = LANGUAGES_LIST.find(l => l.code === targetLang);
    addToast(`🌐 ${langMeta?.flag || ''} ${langMeta?.label} (${langMeta?.native}) Active!`, 'info');
  };

  const t = (key: string) => getTranslation(key, lang);

  // State
  const [score, setScore] = useState(0);

  // Web Audio Synthesizer & Audio Toggle
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [showLuckyCrateModal, setShowLuckyCrateModal] = useState(false);
  const [luckyReward, setLuckyReward] = useState<{ text: string; grains: number } | null>(null);
  const [showMealCelebration, setShowMealCelebration] = useState(false);

  // High-Quality Web Audio Synthesizer (Pentatonic Harmonic Chimes)
  const playChimeSound = (streakCount: number) => {
    if (isAudioMuted || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      // Pentatonic Major Scale: C4, D4, E4, G4, A4, C5, D5, E5, G5, A5, C6
      const pentatonicScale = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50, 1174.66, 1318.51, 1567.98, 1760.00, 2093.00];
      const noteIndex = Math.min(streakCount, pentatonicScale.length - 1);
      const fundamental = pentatonicScale[noteIndex];

      // Primary Crystal Tone
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(fundamental, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(fundamental * 1.05, ctx.currentTime + 0.08);
      gain1.gain.setValueAtTime(0.22, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start();
      osc1.stop(ctx.currentTime + 0.45);

      // Bell Harmonic Overtone (2nd Octave Harmonic)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(fundamental * 2, ctx.currentTime);
      gain2.gain.setValueAtTime(0.08, ctx.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start();
      osc2.stop(ctx.currentTime + 0.35);
    } catch (e) {}
  };

  const playStreakMilestoneSound = () => {
    if (isAudioMuted || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C Major Triad
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + (idx * 0.07));
        gain.gain.setValueAtTime(0.18, ctx.currentTime + (idx * 0.07));
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (idx * 0.07) + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + (idx * 0.07));
        osc.stop(ctx.currentTime + (idx * 0.07) + 0.4);
      });
    } catch (e) {}
  };

  const playMealFundedSound = () => {
    if (isAudioMuted || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const chord = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      chord.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + (idx * 0.06));
        gain.gain.setValueAtTime(0.2, ctx.currentTime + (idx * 0.06));
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (idx * 0.06) + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + (idx * 0.06));
        osc.stop(ctx.currentTime + (idx * 0.06) + 0.6);
      });
    } catch (e) {}
  };

  const playIncorrectBuzz = () => {
    if (isAudioMuted || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    } catch (e) {}
  };

  const handleOpenLuckyCrate = () => {
    const todayStr = new Date().toISOString().split('T')[0];
    const lastClaim = localStorage.getItem('charityQuizLastCrateClaim') || '';
    if (lastClaim === todayStr) {
      addToast('🎁 You already opened your Daily Karma Crate today! Come back tomorrow for more free grains.', 'info');
      return;
    }

    const rewards = [
      { text: '🎉 MEGA KARMA JACKPOT! +250 Grains Donated!', grains: 250 },
      { text: '🛡️ STREAK SHIELD + +100 Grains Donated!', grains: 100 },
      { text: '⚡ 2X KARMIC SURGE + +150 Grains Donated!', grains: 150 },
      { text: '🌟 DIVINE COMPASSION BLESSING! +500 Grains Donated!', grains: 500 }
    ];

    const chosen = rewards[Math.floor(Math.random() * rewards.length)];
    setLuckyReward(chosen);
    saveScore(score + chosen.grains);
    localStorage.setItem('charityQuizLastCrateClaim', todayStr);
    setShowLuckyCrateModal(true);
    addToast(`🎁 Claimed Daily Karma Crate: +${chosen.grains} grains!`, 'success');
  };

  const [streak, setStreak] = useState(0);
  const [factIndex, setFactIndex] = useState(() => {
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    return dayOfYear % DAILY_FACTS.length;
  });
  const [isWisdomBannerVisible, setIsWisdomBannerVisible] = useState(true);
  const [isFactHovered, setIsFactHovered] = useState(false);

  const handleNextFact = () => {
    setFactIndex((prev) => (prev + 1) % DAILY_FACTS.length);
  };

  // Autoscroll / Auto-rotate Wisdom & Facts banner every 6.5 seconds (pauses on mouse hover)
  useEffect(() => {
    if (!isWisdomBannerVisible || isFactHovered) return;
    const factTimer = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % DAILY_FACTS.length);
    }, 6500);
    return () => clearInterval(factTimer);
  }, [isWisdomBannerVisible, isFactHovered]);
  
  // Daily Streak & Shields State
  const [dailyStreak, setDailyStreak] = useState(0);
  const [streakShields, setStreakShields] = useState(0);
  const [lastPlayedDate, setLastPlayedDate] = useState('');
  const [dailyPlanetBonus, setDailyPlanetBonus] = useState({ name: '', targetRecipient: '', message: '' });
  
  const [category, setCategory] = useState<CategoryKey | 'custom-ai'>('cybersecurity');
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner');
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(quizData.cybersecurity.questions[0]);
  const [recipient, setRecipient] = useState('human');
  const [showAstro, setShowAstro] = useState(false);
  const [showHint, setShowHint] = useState(false);
  
  // Feedback & Interactions
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedback, setFeedback] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);
  const [riceGrains, setRiceGrains] = useState<{ id: number; left: string; delay: string; icon: string }[]>([]);
  
  // Auth
  const [user, setUser] = useState<{ email: string; name: string; avatar: string } | null>(null);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [authMode, setAuthMode] = useState<'options' | 'google-form' | 'email-form'>('options');
  const [googleName, setGoogleName] = useState('');
  const [googleEmail, setGoogleEmail] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [isSendingMagicLink, setIsSendingMagicLink] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);

  // Custom AI Quiz States
  const [showAIModal, setShowAIModal] = useState(false);
  const [aiTopic, setAiTopic] = useState('');
  const [aiKey, setAiKey] = useState('');
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [aiQuestions, setAiQuestions] = useState<Question[]>([]);
  const [aiIndex, setAiIndex] = useState(0);
  const [aiCorrectCount, setAiCorrectCount] = useState(0);
  const [showAICompletion, setShowAICompletion] = useState(false);

  // Visitor count
  const [quizVisitorCount, setQuizVisitorCount] = useState(1437);

  // Level up states
  const [showLevelUpModal, setShowLevelUpModal] = useState(false);
  const [levelUpData, setLevelUpData] = useState({ level: 1, title: '' });

  // Photo preview lightbox state
  const [previewImage, setPreviewImage] = useState<{ src: string; title: string; location: string; date: string; tag: string } | null>(null);

  // Refs to track recently shown questions to prevent repeats
  const questionHistoryRef = useRef<string[]>([]);
  const currentQuestionRef = useRef<Question | null>(null);

  // Theme
  const [isDark, setIsDark] = useState(true);

  const { addToast } = useToast();

  const STREET_FEEDING_DRIVE = [
    {
      src: '/impact/dog-feed-14.jpeg',
      title: 'Sunset Rice Bowl Meal Drive',
      location: 'Rajbansi Nagar Alley, Patna, Bihar',
      date: '23 Aug 2026 • 05:46 PM',
      tag: 'Sunset Pack Feeding',
    },
    {
      src: '/impact/dog-feed-13.jpeg',
      title: 'Afternoon Street Puppy Meal',
      location: 'Market Hub, Patna Division, Bihar',
      date: '23 Aug 2026 • 05:01 PM',
      tag: 'Puppy & Pack Care',
    },
    {
      src: '/impact/dog-feed-12.jpeg',
      title: 'Evening Rescue Feeding Station',
      location: 'Patna Division, Bihar',
      date: '22 Aug 2026 • 07:13 PM',
      tag: 'Evening Mission',
    },
    {
      src: '/impact/dog-feed-11.jpeg',
      title: 'Night Street Companion Dinner',
      location: 'Egg Stall Hub, Patna, Bihar',
      date: '21 Aug 2026 • 07:47 PM',
      tag: 'Night Feeding Drive',
    },
    {
      src: '/impact/dog-feed-10.jpeg',
      title: 'Community Animal Care Station',
      location: 'Rajbansi Nagar, Patna, Bihar',
      date: '21 Aug 2026 • 06:50 PM',
      tag: 'Direct Care',
    },
    {
      src: '/impact/dog-feed-9.jpeg',
      title: 'Late Night Animal Patrol',
      location: 'Patna Alley Spot, Bihar',
      date: '20 Aug 2026 • 08:46 PM',
      tag: 'Zero Hunger Patrol',
    },
    {
      src: '/impact/dog-feed-8.jpeg',
      title: 'Evening Pack Survival Feed',
      location: 'Patna Division, Bihar',
      date: '20 Aug 2026 • 07:34 PM',
      tag: 'Pack Feeding',
    },
    {
      src: '/impact/dog-feed-7.jpeg',
      title: 'Fresh Evening Rice Nourishment',
      location: 'Rajbansi Nagar, Patna, Bihar',
      date: '19 Aug 2026 • 07:22 PM',
      tag: 'Direct Feeding',
    },
    {
      src: '/impact/dog-feed-6.jpeg',
      title: 'Patna Street Pack Meal Drive',
      location: 'Market Corner, Patna, Bihar',
      date: '19 Aug 2026 • 07:20 PM',
      tag: 'Community Care',
    },
    {
      src: '/impact/dog-feed-5.jpeg',
      title: 'Dusk Street Companion Care',
      location: 'Rajbansi Nagar Hub, Patna',
      date: '18 Aug 2026 • 07:25 PM',
      tag: 'Evening Drive',
    },
    {
      src: '/impact/dog-feed-4.jpeg',
      title: 'Market Lane Street Feeding',
      location: 'Patna Division, Bihar',
      date: '18 Aug 2026 • 06:31 PM',
      tag: 'Pack Care',
    },
    {
      src: '/impact/dog-feed-3.jpeg',
      title: 'Evening Street Pack Patrol',
      location: 'Road Rajbansi Nagar, Patna',
      date: '17 Aug 2026 • 07:04 PM',
      tag: 'Evening Patrol',
    },
    {
      src: '/impact/dog-feed-2.jpeg',
      title: 'Afternoon Rescue Companion Meal',
      location: 'Market Hub, Patna Division',
      date: '17 Aug 2026 • 04:13 PM',
      tag: 'Daily Nourishment',
    },
    {
      src: '/impact/dog-feed-1.jpeg',
      title: 'Daily Evening Rice Bowl Drive',
      location: 'Rajbansi Nagar, Patna, Bihar',
      date: '16 Aug 2026 • 07:20 PM',
      tag: 'Direct Street Feeding',
    },
    {
      src: '/impact/street-dog-2.jpeg',
      title: 'Daily Evening Rice Bowl',
      location: 'Rajbansi Nagar, Patna Division, Bihar',
      date: '20 Jul 2026 • 12:55 PM',
      tag: 'Direct Street Feeding',
    },
    {
      src: '/impact/street-dog-6.jpeg',
      title: 'Morning Feeding Spot',
      location: 'Rajbansi Nagar, Patna Division, Bihar',
      date: '21 Jul 2026 • 10:45 AM',
      tag: 'Morning Meal Drive',
    },
    {
      src: '/impact/street-dog-7.jpeg',
      title: 'Evening Community Street Feeding',
      location: 'Road Rajbansi Nagar, Patna Division, Bihar',
      date: '22 Jul 2026 • 07:18 PM',
      tag: 'Evening Care Patrol',
    },
    {
      src: '/impact/street-dog-1.jpeg',
      title: 'Street Animal Feeding Point',
      location: 'Rajbansi Nagar Alley, Patna, Bihar',
      date: '20 Jul 2026 • Street Drive',
      tag: 'Daily Nourishment',
    },
    {
      src: '/impact/street-dog-8.jpeg',
      title: 'Street Pack Feeding Station',
      location: 'Patna Division, Bihar',
      date: 'July 2026 • Patna Community',
      tag: 'Pack Feeding',
    },
    {
      src: '/impact/street-dog-9.jpeg',
      title: 'Night Stall Feeding Spot',
      location: 'Egg Vendor Hub, Patna, Bihar',
      date: 'July 2026 • Night Care Spot',
      tag: 'Night Feeding Drive',
    },
    {
      src: '/impact/street-dog-3.jpeg',
      title: 'Nourishing Street Companion',
      location: 'Patna Division, Bihar',
      date: 'July 2026 • Patna Community',
      tag: 'Street Survival',
    },
    {
      src: '/impact/street-dog-4.jpeg',
      title: 'Street Stall Feeding Spot',
      location: 'Market Street Hub, Bihar',
      date: 'July 2026 • Street Vendor Spot',
      tag: 'Community Care',
    },
    {
      src: '/impact/street-dog-5.jpeg',
      title: 'Late-Night Animal Feeding Drive',
      location: 'Night Care Patrol, Patna, Bihar',
      date: 'July 2026 • Night Drive',
      tag: 'Zero Animal Hunger',
    },
  ];

  // Web3 States
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isMinting, setIsMinting] = useState(false);
  const [nftMinted, setNftMinted] = useState(false);
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  // Staking Nodes State
  const [stakingNodes, setStakingNodes] = useState([
    { name: "Patna Core Nodes", address: "0x3f5c...a1d9", staked: 4810, latency: "14ms", status: "ACTIVE" },
    { name: "Frankfurt Threat Feed", address: "0x7a2d...93b8", staked: 1290, latency: "42ms", status: "ACTIVE" },
    { name: "Singapore Gateway Hub", address: "0x98f2...e311", staked: 9480, latency: "22ms", status: "ACTIVE" }
  ]);

  // Update node latency
  useEffect(() => {
    const nodeInterval = setInterval(() => {
      setStakingNodes(prev => prev.map(node => ({
        ...node,
        latency: `${Math.floor(10 + Math.random() * 20)}ms`
      })));
    }, 6000);
    return () => clearInterval(nodeInterval);
  }, []);

  // Sync wallet connection state
  useEffect(() => {
    const checkWallet = () => {
      const savedWallet = localStorage.getItem("web3_wallet_address");
      setWalletAddress(savedWallet);
    };
    checkWallet();
    window.addEventListener("storage", checkWallet);
    return () => window.removeEventListener("storage", checkWallet);
  }, []);

  // Google AdSense auto-refresh hook per question response
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch {
      // Ignore initial render push errors when ad script is loading
    }
  }, [currentQuestion, aiIndex]);

  const handleMintSoulboundNFT = () => {
    if (!walletAddress) {
      addToast("No connected Web3 node. Please connect your wallet in the gateway hub.", "info");
      return;
    }
    setIsMinting(true);
    setTimeout(() => {
      setNftMinted(true);
      setIsMinting(false);
      addToast("Proof-of-Impact Soulbound Badge cryptographically minted!", "success");
    }, 2500);
  };

  // Initialize
  useEffect(() => {
    const isDarkMode = localStorage.getItem('jumpstreet_theme') !== 'light';
    setIsDark(isDarkMode);
    
    // Persistent client-side visitor tracker starting at 1437
    const storedQuizCount = localStorage.getItem("charity_quiz_visitor_count");
    if (storedQuizCount) {
      const current = parseInt(storedQuizCount, 10);
      const updated = current + 1;
      localStorage.setItem("charity_quiz_visitor_count", updated.toString());
      setQuizVisitorCount(updated);
    } else {
      localStorage.setItem("charity_quiz_visitor_count", "1437");
      setQuizVisitorCount(1437);
    }
    document.body.classList.toggle('light-mode', !isDarkMode);
    
    // Calculate daily planet alignment bonus
    calculateDailyPlanetBonus();
    
    // Auth & Game states Check
    const checkSessionAndStates = () => {
      // 1. Check local persistent authenticated session
      const storedSession = localStorage.getItem('cyberkarma_user_session');
      if (storedSession) {
        try {
          const parsed = JSON.parse(storedSession);
          if (parsed?.email) {
            handleUserLogin(parsed.email, parsed);
          }
        } catch (e) {}
      } else {
        const localScore = parseInt(localStorage.getItem('charityRiceScore') || '0', 10);
        setScore(localScore);
        // Initialize level storage so we don't trigger modal on mount
        const calculatedLevel = Math.floor(localScore / 200) + 1;
        localStorage.setItem('charityQuizLastLevel', String(calculatedLevel));
      }
      
      // Load daily streaks & shields from local storage
      const localStreak = parseInt(localStorage.getItem('charityQuizStreak') || '0', 10);
      const localShields = parseInt(localStorage.getItem('charityQuizShields') || '0', 10);
      const localLastPlayed = localStorage.getItem('charityQuizLastPlayedDate') || '';
      const savedAIKey = localStorage.getItem('GEMINI_API_KEY') || '';
      
      setDailyStreak(localStreak);
      setStreakShields(localShields);
      setLastPlayedDate(localLastPlayed);
      setAiKey(savedAIKey);
      
      // Validate streak
      if (localLastPlayed) {
        const todayStr = new Date().toISOString().split('T')[0];
        const lastDate = new Date(localLastPlayed);
        const todayDate = new Date(todayStr);
        const diffTime = Math.abs(todayDate.getTime() - lastDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays > 1) {
          // Missed a day! check shields
          if (localShields > 0) {
            const updatedShields = localShields - 1;
            setStreakShields(updatedShields);
            localStorage.setItem('charityQuizShields', String(updatedShields));
            addToast(`🛡️ Your streak of ${localStreak} days was saved by a Streak Shield!`, 'info');
          } else {
            setDailyStreak(0);
            localStorage.setItem('charityQuizStreak', '0');
          }
        }
      }
    };
    checkSessionAndStates();
  }, []);

  const handleUserLogin = (email: string, metadata?: Record<string, any>) => {
    const name = metadata?.name || metadata?.full_name || email.split('@')[0] || 'Player';
    const isGoogle = metadata?.provider === 'google' || metadata?.isGoogle;
    const avatar = metadata?.avatar || metadata?.avatar_url || (isGoogle 
      ? `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4285F4&color=fff&rounded=true&bold=true` 
      : `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=10b981&color=fff&rounded=true&bold=true`);
    setUser({ email, name, avatar });
    const userScore = parseInt(localStorage.getItem(`charityRiceScore_${email}`) || localStorage.getItem('charityRiceScore') || '0', 10);
    setScore(userScore);
    // Initialize level storage so we don't trigger modal on mount
    const calculatedLevel = Math.floor(userScore / 200) + 1;
    localStorage.setItem('charityQuizLastLevel', String(calculatedLevel));
  };

  const saveScore = (newScore: number) => {
    setScore(newScore);
    localStorage.setItem('charityRiceScore', String(newScore));
    if (user) {
      localStorage.setItem(`charityRiceScore_${user.email}`, String(newScore));
    }
  };

  // Calculate daily planet alignment bonus
  const calculateDailyPlanetBonus = () => {
    const day = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
    const bonuses = {
      0: { name: "Sunday (Sun Day)", targetRecipient: "dogs", message: "☀️ Today is Sun Day! Feed the Dogs for 2X Grains!" },
      1: { name: "Monday (Moon Day)", targetRecipient: "moon", message: "🌕 Today is Moon Day! Feed the Moon Mothers for 2X Grains!" },
      2: { name: "Tuesday (Mars Day)", targetRecipient: "cows", message: "🔥 Today is Mars Day! Feed the Cows for 2X Grains!" },
      3: { name: "Wednesday (Mercury Day)", targetRecipient: "birds", message: "✨ Today is Mercury Day! Feed the Birds for 2X Grains!" },
      4: { name: "Thursday (Jupiter Day)", targetRecipient: "jupiter", message: "🪐 Today is Jupiter Day! Support Jupiter's Scholars for 2X Grains!" },
      5: { name: "Friday (Venus Day)", targetRecipient: "venus", message: "💖 Today is Venus Day! Support Venus Women Shelters for 2X Grains!" },
      6: { name: "Saturday (Saturn Day)", targetRecipient: "saturn", message: "🛡️ Today is Saturday! Help Saturn's Disabled for 2X Grains!" }
    };
    setDailyPlanetBonus(bonuses[day as keyof typeof bonuses]);
  };

  // Record daily streak activity
  const recordDailyActivity = () => {
    const todayStr = new Date().toISOString().split('T')[0];
    
    if (lastPlayedDate !== todayStr) {
      let newStreak = 1;
      if (lastPlayedDate) {
        const lastDate = new Date(lastPlayedDate);
        const todayDate = new Date(todayStr);
        const diffTime = Math.abs(todayDate.getTime() - lastDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          newStreak = dailyStreak + 1;
        }
      }
      
      setDailyStreak(newStreak);
      setLastPlayedDate(todayStr);
      localStorage.setItem('charityQuizLastPlayedDate', todayStr);
      localStorage.setItem('charityQuizStreak', String(newStreak));
    }
  };

  const handleBuyShield = () => {
    if (score >= 500) {
      const newScore = score - 500;
      const newShields = streakShields + 1;
      
      saveScore(newScore);
      setStreakShields(newShields);
      localStorage.setItem('charityQuizShields', String(newShields));
      
      setFeedback({ text: 'Streak Shield purchased successfully! 🛡️ -500 grains.', type: 'success' });
      addToast('Streak Shield Purchased! 🛡️', 'success');
    }
  };

  // Question Logic
  const loadNextQuestion = useCallback(() => {
    if (category === 'custom-ai') return; // Handled separately by AI state flow
    
    const bank = lang === 'hi' ? quizDataHindi : quizData;
    const allQ = bank[category]?.questions || quizData[category]?.questions || [];
    const filteredQ = allQ.filter(q => q.difficulty === difficulty);
    const candidateList = filteredQ.length > 0 ? filteredQ : allQ;
    if (candidateList.length === 0) {
      setCurrentQuestion(null);
      return;
    }
    
    // Filter out recently seen questions from history
    let pool = candidateList.filter(q => !questionHistoryRef.current.includes(q.question));
    
    // If all questions in the category/difficulty have been seen, reset history for this pool
    if (pool.length === 0) {
      pool = candidateList;
      // Keep only the last question in history to prevent back-to-back repeats
      const lastQ = currentQuestionRef.current;
      questionHistoryRef.current = lastQ ? [lastQ.question] : [];
    }
    
    // If there's more than 1 option, ensure we don't repeat the current question back-to-back
    if (pool.length > 1 && currentQuestionRef.current) {
      pool = pool.filter(q => q.question !== currentQuestionRef.current?.question);
    }
    
    const rand = Math.floor(Math.random() * pool.length);
    const selected = pool[rand];
    
    setCurrentQuestion(selected);
    currentQuestionRef.current = selected;
    
    // Add to history
    questionHistoryRef.current.push(selected.question);
    if (questionHistoryRef.current.length > 5) {
      questionHistoryRef.current.shift();
    }
    
    setIsAnswered(false);
    setSelectedAnswer(null);
    setFeedback(null);
    setShowHint(false);
  }, [category, difficulty, lang]);

  useEffect(() => {
    loadNextQuestion();
    if (category !== 'custom-ai') {
      setStreak(0);
      setAiQuestions([]);
      setShowAICompletion(false);
    }
  }, [category, difficulty, loadNextQuestion]);

  // Hook to track and celebrate Level Up achievements
  useEffect(() => {
    if (score > 0) {
      const calculatedLevel = Math.floor(score / 200) + 1;
      const storedLvl = parseInt(localStorage.getItem('charityQuizLastLevel') || '1', 10);
      
      if (calculatedLevel > storedLvl) {
        localStorage.setItem('charityQuizLastLevel', String(calculatedLevel));
        
        let title = "Chandra Novice";
        for (const item of levelTitles) {
          if (calculatedLevel >= item.minLvl) {
            title = item.title;
          }
        }
        
        setLevelUpData({ level: calculatedLevel, title });
        setShowLevelUpModal(true);
        addToast(`🎉 Level Up! You reached Level ${calculatedLevel}!`, 'success');
        
        // Play level-up sound effect (ascending arpeggio)
        try {
          const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
          const playNote = (freq: number, delay: number, duration: number) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);
            gain.gain.setValueAtTime(0.15, audioCtx.currentTime + delay);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + duration);
            osc.start(audioCtx.currentTime + delay);
            osc.stop(audioCtx.currentTime + delay + duration);
          };
          
          playNote(261.63, 0, 0.2); // C4
          playNote(329.63, 0.15, 0.2); // E4
          playNote(392.00, 0.3, 0.2); // G4
          playNote(523.25, 0.45, 0.5); // C5
        } catch (e) {
          console.error(e);
        }
      } else if (calculatedLevel < storedLvl) {
        localStorage.setItem('charityQuizLastLevel', String(calculatedLevel));
      }
    }
  }, [score, addToast]);

  // Fisher-Yates Random Option Shuffler to guarantee answer index is NEVER hardcoded to option 0
  const shuffleQuestionOptions = (q: Question): Question => {
    const originalOptions = [...q.options];
    const originalAnswerIdx = q.answer >= 0 && q.answer < originalOptions.length ? q.answer : 0;
    const correctAnswerText = originalOptions[originalAnswerIdx];

    // Fisher-Yates Shuffle
    const shuffledOptions = [...originalOptions];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    // Identify the new position of the correct answer
    let newAnswerIdx = shuffledOptions.indexOf(correctAnswerText);
    if (newAnswerIdx === -1) newAnswerIdx = 0;

    return {
      ...q,
      options: shuffledOptions,
      answer: newAnswerIdx
    };
  };

  // Smart Dynamic Fallback Generator for custom AI topics (10 Diverse Comprehensive Questions)
  const generateSmartAIQuiz = (topic: string, currentLang: Language): Question[] => {
    const cleanTopic = topic.trim();
    const isHi = currentLang === 'hi';

    const rawPool: Question[] = [
      {
        difficulty: 'intermediate',
        question: isHi 
          ? `विषय "${cleanTopic}" के संदर्भ में, निम्नलिखित में से कौन सा मूलभूत सिद्धांत या मुख्य अवधारणा सबसे महत्वपूर्ण है?`
          : `In the study and application of "${cleanTopic}", which of the following represents a foundational core principle?`,
        options: isHi 
          ? [
              `निरंतर सत्यापन और व्यवस्थित प्रक्रियात्मक विश्लेषण`,
              `बिना किसी साक्ष्य के त्वरित निर्णय लेना`,
              `प्रणालीगत संदर्भ को पूरी तरह अनदेखा करना`,
              `पारंपरिक सीमाओं को बिना परीक्षण बदले रखना`
            ]
          : [
              `Continuous empirical validation & systematic analysis`,
              `Arbitrary assumption without experimental verification`,
              `Ignoring domain context and variable dependencies`,
              `Complete static rigidity without adaptive feedback`
            ],
        answer: 0,
        hint: isHi ? "वैज्ञानिक और तकनीकी दृष्टिकोण में साक्ष्य और निरंतर विश्लेषण सबसे महत्वपूर्ण होते हैं।" : "Modern domain mastery relies on empirical feedback and robust verification.",
        scenario: isHi ? `अवधारणा विश्लेषण: ${cleanTopic}` : `Domain Analysis: ${cleanTopic}`,
        explanation: isHi 
          ? `"${cleanTopic}" में सटीक और प्रभावी परिणाम प्राप्त करने के लिए साक्ष्य-आधारित सत्यापन और व्यवस्थित कार्यप्रणाली अत्यंत आवश्यक है।`
          : `Within "${cleanTopic}", rigorous systematic validation and structured iteration provide the highest reliability and performance.`
      },
      {
        difficulty: 'beginner',
        question: isHi
          ? `"${cleanTopic}" के क्षेत्र में सबसे बड़ा सकारात्मक प्रभाव क्या माना जाता है?`
          : `What is considered one of the most transformative impacts of advancements in "${cleanTopic}"?`,
        options: isHi
          ? [
              `सूचना का अनावश्यक भ्रम उत्पन्न करना`,
              `जटिल समस्याओं का कुशल, मापनीय और मानवीय समाधान`,
              `संसाधनों की बर्बादी में वृद्धि`,
              `सामूहिक ज्ञान के विकास को रोकना`
            ]
          : [
              `Generating intentional informational noise and confusion`,
              `Enabling scalable, efficient solutions to complex real-world challenges`,
              `Decreasing overall operational throughput and safety`,
              `Restricting collaborative innovation and learning`
            ],
        answer: 1,
        hint: isHi ? "यह सकारात्मक नवाचार और दक्षता से संबंधित है।" : "Focus on scalable positive efficiency and human progress.",
        scenario: isHi ? `प्रभाव और नवाचार: ${cleanTopic}` : `Real-World Impact: ${cleanTopic}`,
        explanation: isHi
          ? `"${cleanTopic}" का प्राथमिक उद्देश्य जटिल समस्याओं को सरल, सुरक्षित और व्यापक रूप से हल करना है।`
          : `The core utility of ${cleanTopic} lies in accelerating human capability and providing resilient frameworks to solve critical bottlenecks.`
      },
      {
        difficulty: 'intermediate',
        question: isHi
          ? `जब विशेषज्ञ "${cleanTopic}" पर शोध या कार्य करते हैं, तो वे किस जोखिम से बचने को सर्वोच्च प्राथमिकता देते हैं?`
          : `When professionals optimize systems within "${cleanTopic}", which critical vulnerability or pitfall do they prioritize mitigating?`,
        options: isHi
          ? [
              `अत्यधिक सुरक्षा और गुणवत्ता परीक्षण`,
              `स्पष्ट दस्तावेज़ीकरण और खुला संचार`,
              `एकल बिंदु विफलता (Single Point of Failure) और अनियंत्रित विचलन`,
              `नियमित फीडबैक लूप और सुधार`
            ]
          : [
              `Excessive safety audits and structured peer reviews`,
              `Transparent documentation and clear architectural standards`,
              `Single Point of Failure (SPOF) and unchecked cascading drift`,
              `Regular feedback loops and empirical benchmarks`
            ],
        answer: 2,
        hint: isHi ? "ऐसी स्थिति जहाँ एक घटक के विफल होने से पूरी प्रणाली ठप हो जाए।" : "A structural bottleneck whose failure collapses the entire system.",
        scenario: isHi ? `जोखिम प्रबंधन: ${cleanTopic}` : `Risk Mitigation: ${cleanTopic}`,
        explanation: isHi
          ? `एकल बिंदु विफलता (SPOF) को समाप्त करना किसी भी मजबूत प्रणाली की पहली शर्त है।`
          : `Eliminating Single Points of Failure and establishing robust redundancy is fundamental across high-reliability domains.`
      },
      {
        difficulty: 'advanced',
        question: isHi
          ? `"${cleanTopic}" के उन्नत स्तर पर, प्रदर्शन को अधिकतम करने के लिए कौन सा दृष्टिकोण सर्वोत्तम है?`
          : `At an advanced level in "${cleanTopic}", which methodology provides the highest resilience and precision?`,
        options: isHi
          ? [
              `सभी घटकों को एक साथ बिना अलगाव के जोड़ना`,
              `त्रुटि लॉग और टेलीमेट्री को रिकॉर्ड न करना`,
              `परिवर्तनों का कभी भी बैकअप न रखना`,
              `मॉड्यूलर आर्किटेक्चर, स्वचालित निगरानी और अनुकूली नियंत्रण`
            ]
          : [
              `Tightly coupled monolithic design without separation of concerns`,
              `Suppression of diagnostic error telemetry and metrics`,
              `Operating without versioning or rollback mechanisms`,
              `Modular architecture, automated telemetry & adaptive control loops`
            ],
        answer: 3,
        hint: isHi ? "मॉड्यूलर संरचना और निगरानी से प्रणाली मजबूत बनती है।" : "Decoupled components with real-time observability.",
        scenario: isHi ? `उन्नत आर्किटेक्चर: ${cleanTopic}` : `Advanced Engineering: ${cleanTopic}`,
        explanation: isHi
          ? `मॉड्यूलरिटी और सक्रिय टेलीमेट्री से सिस्टम अत्यधिक लचीला और त्रुटि-सहिष्णु बन जाता है।`
          : `Modular design combined with active telemetry feedback allows seamless fault isolation and dynamic optimization.`
      },
      {
        difficulty: 'intermediate',
        question: isHi
          ? `"${cleanTopic}" का अध्ययन करने से व्यक्ति के विश्लेषणात्मक चिंतन पर क्या प्रभाव पड़ता है?`
          : `How does systematic engagement with "${cleanTopic}" elevate cognitive and problem-solving capability?`,
        options: isHi
          ? [
              `यह तार्किक सोच को कमजोर करता है`,
              `यह साक्ष्य-आधारित निर्णय लेने और गहन तार्किक विश्लेषण को सुदृढ़ करता है`,
              `यह जिज्ञासा और सीखने की इच्छा को समाप्त करता है`,
              `यह नए समाधान खोजने में बाधा डालता है`
            ]
          : [
              `It degrades logical discernment and structured analysis`,
              `It strengthens first-principles reasoning and evidence-based decision making`,
              `It suppresses natural curiosity and intellectual agility`,
              `It restricts multidisciplinary problem synthesis`
            ],
        answer: 1,
        hint: isHi ? "प्रथम-सिद्धांतों (First Principles) पर आधारित सोच।" : "Think of first-principles reasoning and mental clarity.",
        scenario: isHi ? `संज्ञानात्मक लाभ: ${cleanTopic}` : `Cognitive Synthesis: ${cleanTopic}`,
        explanation: isHi
          ? `गहन विषयों का अध्ययन हमारे न्यूरोप्लास्टिसिटी और तार्किक विश्लेषण कौशल को नई ऊँचाई देता है।`
          : `Engaging with structured domains deepens neuroplastic connections and fosters rigorous first-principles problem-solving abilities.`
      },
      {
        difficulty: 'beginner',
        question: isHi
          ? `"${cleanTopic}" में डेटा और जानकारी की सटीकता बनाए रखने के लिए सबसे प्रभावी अभ्यास क्या है?`
          : `What is the most effective industry practice for maintaining data integrity and precision in "${cleanTopic}"?`,
        options: isHi
          ? [
              `नियमित ऑडिट, पारदर्शी ट्रैकिंग और सहकर्मी समीक्षा (Peer Review)`,
              `डेटा को बिना बैकअप के तुरंत मिटा देना`,
              `केवल अनुमानों पर भरोसा करना`,
              `गलतियों को छुपाना और लॉग न रखना`
            ]
          : [
              `Regular audits, transparent version tracking, and peer reviews`,
              `Deleting audit trails immediately without retention policies`,
              `Relying entirely on subjective heuristics and intuition`,
              `Concealing system exceptions and omitting diagnostics`
            ],
        answer: 0,
        hint: isHi ? "पारदर्शिता और नियमित सहकर्मी समीक्षा।" : "Independent peer reviews and structured audit logs.",
        scenario: isHi ? `सटीकता एवं मानक: ${cleanTopic}` : `Quality Standards: ${cleanTopic}`,
        explanation: isHi
          ? `पारदर्शी ट्रैकिंग और सहकर्मी समीक्षा से त्रुटियों की संभावना न्यूनतम हो जाती है।`
          : `Peer review processes and immutable audit logs guarantee domain integrity and reproducible accuracy.`
      },
      {
        difficulty: 'intermediate',
        question: isHi
          ? `"${cleanTopic}" के विकास में बहु-विषयक सहयोग (Multidisciplinary Collaboration) क्यों आवश्यक है?`
          : `Why is cross-disciplinary collaboration essential for future breakthroughs in "${cleanTopic}"?`,
        options: isHi
          ? [
              `यह निर्णय लेने की गति को अनावश्यक रूप से धीमा करता है`,
              `यह केवल लागत बढ़ाने का एक माध्यम है`,
              `विभिन्न क्षेत्रों के ज्ञान के समन्वय से नए दृष्टिकोण और समग्र समाधान विकसित होते हैं`,
              `यह नवाचार की गुणवत्ता को घटाता है`
            ]
          : [
              `It unnecessarily delays execution cycles without tangible benefits`,
              `It serves merely as a cost-multiplying procedural hurdle`,
              `Cross-pollination across diverse fields unlocks novel heuristics and holistic solutions`,
              `It reduces domain precision and technical clarity`
            ],
        answer: 2,
        hint: isHi ? "विभिन्न विषयों के समन्वय से नवाचार संभव होता है।" : "Synergies between adjacent scientific fields produce novel insights.",
        scenario: isHi ? `सहयोग और नवाचार: ${cleanTopic}` : `Interdisciplinary Synergy: ${cleanTopic}`,
        explanation: isHi
          ? `जब विभिन्न विशेषज्ञ एक साथ काम करते हैं, तो वे जटिल समस्याओं के ऐसे पहलू देख पाते हैं जो अकेले संभव नहीं होते।`
          : `Combining insights across fields breaks functional silos and creates robust, multidimensional innovations.`
      },
      {
        difficulty: 'advanced',
        question: isHi
          ? `दीर्घकालिक स्थिरता सुनिश्चित करने के लिए "${cleanTopic}" में किस नैतिक विचार को सर्वोपरि माना जाता है?`
          : `Which ethical framework is paramount to ensure long-term trust and sustainable adoption in "${cleanTopic}"?`,
        options: isHi
          ? [
              `पारदर्शिता, मानवीय सुरक्षा, निष्पक्षता और जवाबदेही`,
              `अल्पकालिक लाभ के लिए सुरक्षा मानकों की उपेक्षा करना`,
              `उपयोगकर्ताओं से महत्वपूर्ण जानकारी छुपाना`,
              `पर्यावरणीय और सामाजिक प्रभावों की अनदेखी करना`
            ]
          : [
              `Transparency, human-centric safety, equity, and public accountability`,
              `Bypassing safety baselines to prioritize rapid commercialization`,
              `Concealing critical operational parameters from stakeholders`,
              `Disregarding social and environmental sustainability metrics`
            ],
        answer: 0,
        hint: isHi ? "मानवीय सुरक्षा, निष्पक्षता और पूर्ण जवाबदेही।" : "Focus on ethical governance, human safety, and accountability.",
        scenario: isHi ? `नैतिक शासन: ${cleanTopic}` : `Ethical Governance: ${cleanTopic}`,
        explanation: isHi
          ? `नैतिक उत्तरदायित्व और पारदर्शिता किसी भी तकनीक या विषय की दीर्घकालिक विश्वसनीयता की आधारशिला हैं।`
          : `Ethical governance safeguards user trust, prevents systemic bias, and ensures alignment with public welfare.`
      },
      {
        difficulty: 'beginner',
        question: isHi
          ? `"${cleanTopic}" में नए शिक्षार्थी को शुरुआत में किस बात पर सबसे अधिक ध्यान देना चाहिए?`
          : `For beginners exploring "${cleanTopic}", which initial strategy yields the strongest learning curve?`,
        options: isHi
          ? [
              `बिना समझे केवल जटिल सूत्रों को रटना`,
              `मूलभूत सिद्धांतों (Fundamentals) को समझना और व्यावहारिक अभ्यास करना`,
              `सीखने के पहले ही दिन सबसे कठिन समस्याओं पर कूदना`,
              `प्रश्नों और शंकाओं को कभी न पूछना`
            ]
          : [
              `Rote memorization of advanced jargon without conceptual models`,
              `Mastering core fundamentals through iterative hands-on application`,
              `Skipping foundational concepts to attempt unguided advanced projects`,
              `Avoiding active inquiry and never asking clarifying questions`
            ],
        answer: 1,
        hint: isHi ? "मूल सिद्धांतों की समझ और अभ्यास।" : "Solid fundamentals combined with hands-on practice.",
        scenario: isHi ? `अध्ययन रणनीति: ${cleanTopic}` : `Learning Fundamentals: ${cleanTopic}`,
        explanation: isHi
          ? `मजबूत नींव और निरंतर व्यावहारिक अभ्यास से किसी भी विषय में प्रवीणता प्राप्त होती है।`
          : `Grounded fundamental knowledge accelerates retention and creates a resilient platform for advanced synthesis.`
      },
      {
        difficulty: 'advanced',
        question: isHi
          ? `"${cleanTopic}" के भविष्य के रुझान (Future Trends) किस दिशा में अग्रसर हैं?`
          : `Looking toward future horizons, which macro-trend is actively reshaping "${cleanTopic}"?`,
        options: isHi
          ? [
              `पुरानी, अप्रचलित तकनीकों पर पूर्ण निर्भरता`,
              `नवाचार और शोध को पूरी तरह बंद करना`,
              `स्वचालन, बुद्धिमान विश्लेषण और वैश्विक ज्ञान साझाकरण का एकीकरण`,
              `प्रणालियों को धीमा और अक्षम बनाना`
            ]
          : [
              `Complete retreat into legacy, non-updatable methodologies`,
              `Halting research and terminating academic exploration`,
              `Integration of intelligent automation, predictive analytics, and open collaborative frameworks`,
              `Intentionally compounding latency and system inefficiencies`
            ],
        answer: 2,
        hint: isHi ? "बुद्धिमान स्वचालन और वैश्विक सहयोग।" : "Intelligent automation and distributed collaborative science.",
        scenario: isHi ? `भविष्य की दिशा: ${cleanTopic}` : `Future Horizons: ${cleanTopic}`,
        explanation: isHi
          ? `आधुनिक तकनीक और विश्लेषणात्मक टूल्स का एकीकरण इस क्षेत्र को अभूतपूर्व गति और सटीकता प्रदान कर रहा है।`
          : `Next-generation ecosystems leverage intelligent automation and global collaborative platforms to solve grand challenges.`
      }
    ];

    return rawPool.map(shuffleQuestionOptions);
  };

  // Generate Custom AI Quiz using default Google Gemini API (never prompts visitor for key)
  const handleGenerateAIQuiz = async () => {
    if (!aiTopic.trim()) {
      addToast(lang === 'hi' ? 'कृपया कोई विषय दर्ज करें या नीचे दिए गए सुझाव चुनें' : 'Please enter a topic or select a suggested chip', 'error');
      return;
    }

    setIsGeneratingAI(true);
    setFeedback(null);

    const promptText = `Generate exactly 10 multiple choice educational trivia questions on the topic: "${aiTopic}".
Each question must have 4 distinct, plausible options.
Crucial instruction: Ensure the correct answer index ("answer": 0, 1, 2, or 3) is randomly distributed across all options (do NOT always set answer to 0).
Return the output ONLY as a valid JSON array matching the structure:
[
  {
    "difficulty": "intermediate",
    "question": "question text",
    "options": ["option 1", "option 2", "option 3", "option 4"],
    "answer": 2,
    "hint": "helpful hint",
    "scenario": "brief context",
    "explanation": "concise explanation of why this answer is correct and key insight"
  }
]
Ensure the JSON output is raw, without any markdown formatting, backticks, or wrapping. Keep it strictly educational, accurate, and respectful.`;

    let parsedQuestions: Question[] | null = null;
    const defaultApiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || (typeof window !== 'undefined' ? localStorage.getItem('GEMINI_API_KEY') : '') || '';

    if (defaultApiKey) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${defaultApiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: promptText }] }],
            generationConfig: {
              responseMimeType: "application/json"
            }
          })
        });

        if (response.ok) {
          const data = await response.json();
          const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (textResponse) {
            const cleanJson = textResponse.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim();
            const parsed = JSON.parse(cleanJson) as Question[];
            if (Array.isArray(parsed) && parsed.length >= 3) {
              parsedQuestions = parsed;
            }
          }
        }
      } catch (e) {
        console.warn('Gemini API online call fallback triggered', e);
      }
    }

    // Fallback to smart dynamic synthesis if direct API call is unconfigured or blocked
    if (!parsedQuestions || parsedQuestions.length === 0) {
      parsedQuestions = generateSmartAIQuiz(aiTopic, lang);
    } else {
      // Shuffle options to guarantee random answer position across A, B, C, D
      parsedQuestions = parsedQuestions.map(shuffleQuestionOptions);
    }

    setAiQuestions(parsedQuestions);
    setAiIndex(0);
    setAiCorrectCount(0);
    setCategory('custom-ai');
    setCurrentQuestion(parsedQuestions[0]);
    setIsAnswered(false);
    setSelectedAnswer(null);
    setShowHint(false);
    setShowAIModal(false);
    setShowAICompletion(false);
    addToast(lang === 'hi' ? `🤖 10 प्रश्नों की AI क्विज़ तैयार! विषय: ${aiTopic}` : `🤖 10-Question AI Quiz Ready on: ${aiTopic}!`, 'success');
    setIsGeneratingAI(false);
  };

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    localStorage.setItem('jumpstreet_theme', nextDark ? 'dark' : 'light');
    if (!nextDark) {
      document.body.classList.add('light-mode');
      document.documentElement.classList.remove('dark');
    } else {
      document.body.classList.remove('light-mode');
      document.documentElement.classList.add('dark');
    }
    addToast(nextDark ? '🌙 Dark Mode Activated' : '☀️ Light Mode Activated', 'info');
  };

  const nextQuestionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isAnsweredRef = useRef(false);
  isAnsweredRef.current = isAnswered;
  const currentQuestionRefLive = useRef<Question | null>(null);
  currentQuestionRefLive.current = currentQuestion;

  const advanceToNextQuestion = useCallback(() => {
    if (nextQuestionTimeoutRef.current) {
      clearTimeout(nextQuestionTimeoutRef.current);
      nextQuestionTimeoutRef.current = null;
    }
    if (category === 'custom-ai') {
      const nextIndex = aiIndex + 1;
      if (nextIndex < aiQuestions.length) {
        setAiIndex(nextIndex);
        setCurrentQuestion(aiQuestions[nextIndex]);
        setIsAnswered(false);
        setSelectedAnswer(null);
        setFeedback(null);
        setShowHint(false);
      } else {
        setShowAICompletion(true);
        setCurrentQuestion(null);
      }
    } else {
      loadNextQuestion();
    }
  }, [category, aiIndex, aiQuestions, loadNextQuestion]);

  const handleAnswer = useCallback((index: number) => {
    if (isAnsweredRef.current || !currentQuestionRefLive.current) return;
    setIsAnswered(true);
    setSelectedAnswer(index);

    const activeQuestion = currentQuestionRefLive.current;
    const isCorrect = (index === activeQuestion.answer);

    if (isCorrect) {
      // Correct
      const isPlanetBonus = (recipient === dailyPlanetBonus.targetRecipient);
      const basePoints = isPlanetBonus ? 20 : 10;
      
      const newStreak = streak + 1;
      
      // Multi-tier Combo Streak Multiplier Engine
      let multiplier = 1;
      let streakBadgeText = '';
      if (newStreak >= 10) {
        multiplier = 3; // 3x GODLIKE
        streakBadgeText = '👑 GODLIKE 3X MULTIPLIER!';
      } else if (newStreak >= 5) {
        multiplier = 2; // 2x MEGA
        streakBadgeText = '⚡ MEGA STREAK 2X MULTIPLIER!';
      } else if (newStreak >= 3) {
        multiplier = 1.5; // 1.5x SUPER
        streakBadgeText = '🔥 SUPER STREAK 1.5X MULTIPLIER!';
      }
      
      const points = Math.round(basePoints * multiplier);
      const prevScore = score;
      const nextScore = prevScore + points;
      
      saveScore(nextScore);
      setStreak(newStreak);
      
      // Check if unlocked a new 50-grain warm street meal!
      const prevMeals = Math.floor(prevScore / 50);
      const newMeals = Math.floor(nextScore / 50);
      if (newMeals > prevMeals) {
        setShowMealCelebration(true);
        playMealFundedSound();
        addToast(lang === 'hi' ? `🎉 बधाई! आपने पटना के बेजुबान कुत्तों के लिए 1 नया भोजन अनलॉक किया! 🐕🍲` : `🎉 Milestone Reached! You unlocked 1 Full Warm Meal for Stray Dogs in Patna! 🐕🍲`, 'success');
        if ('vibrate' in navigator) navigator.vibrate([60, 80, 60, 80, 120]);
      } else if (newStreak === 3 || newStreak === 5 || newStreak === 10) {
        playStreakMilestoneSound();
        if ('vibrate' in navigator) navigator.vibrate([40, 60, 40]);
      } else {
        playChimeSound(newStreak);
        if ('vibrate' in navigator) navigator.vibrate(40);
      }
      
      setStakingNodes(prev => prev.map((node, idx) => {
        if (idx === 0) return { ...node, staked: node.staked + points };
        return node;
      }));
      if (category === 'custom-ai') {
        setAiCorrectCount(c => c + 1);
      }
      recordDailyActivity();
      
      if (multiplier > 1) {
        setFeedback({ 
          text: lang === 'hi' 
            ? `${streakBadgeText} +${points} दाने अनाज दान!` 
            : `${streakBadgeText} +${points} Grains Donated!`, 
          type: 'success' 
        });
      } else if (isPlanetBonus) {
        setFeedback({ 
          text: lang === 'hi' 
            ? `सही उत्तर! +${points} दाने अनाज दान (दैनिक ग्रह बोनस 2X!).` 
            : `Correct! +${points} grains of rice donated (PLANET BONUS 2X!).`, 
          type: 'success' 
        });
      } else {
        setFeedback({ 
          text: lang === 'hi' 
            ? `सही उत्तर! +${points} दाने अनाज दान हुए।` 
            : `Correct! +${points} grains of rice donated.`, 
          type: 'success' 
        });
      }
      
      triggerRiceAnimation(points);
    } else {
      // Incorrect
      playIncorrectBuzz();
      setStreak(0);
      setFeedback({ 
        text: lang === 'hi' 
          ? 'गलत उत्तर! अगले प्रश्न पर पुनः प्रयास करें।' 
          : 'Incorrect. Try the next one!', 
        type: 'error' 
      });
      if ('vibrate' in navigator) navigator.vibrate([60, 120, 60]);
    }

    if (nextQuestionTimeoutRef.current) {
      clearTimeout(nextQuestionTimeoutRef.current);
    }
    nextQuestionTimeoutRef.current = setTimeout(() => {
      advanceToNextQuestion();
    }, 4200);
  }, [recipient, dailyPlanetBonus, streak, score, category, lang, advanceToNextQuestion]);

  const triggerRiceAnimation = (count = 10) => {
    const particleCount = Math.min(Math.max(count, 8), 16);
    const icons = ['🌾', '🍚', '✨', '⭐', '🌾'];
    const grains = Array.from({ length: particleCount }).map((_, i) => ({
      id: Date.now() + i,
      left: `calc(50% + ${(Math.random() - 0.5) * 160}px)`,
      delay: `${(i * 0.04).toFixed(2)}s`,
      icon: icons[i % icons.length]
    }));
    setRiceGrains(grains);
    setTimeout(() => setRiceGrains([]), 1800);
  };

  const handleUseHint = useCallback(() => {
    if (score >= 5 && currentQuestionRefLive.current?.hint && !showHint) {
      saveScore(score - 5);
      setShowHint(true);
      setFeedback({ text: 'Hint revealed! -5 grains.', type: 'info' });
    } else if (score < 5) {
      setFeedback({ text: 'Not enough grains! You need 5 to use a hint.', type: 'error' });
    }
  }, [score, showHint]);

  // Global Tactile Keyboard Shortcuts Hook (Capture Phase)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in an input, textarea or contenteditable
      const target = e.target as HTMLElement | null;
      const tagName = target?.tagName?.toLowerCase();
      if (tagName === 'input' || tagName === 'textarea' || tagName === 'select' || target?.isContentEditable) {
        return;
      }

      const key = e.key ? e.key.toLowerCase() : '';
      const code = e.code || '';

      // Option A / 1 -> Index 0
      if (key === 'a' || key === '1' || code === 'KeyA' || code === 'Digit1' || code === 'Numpad1') {
        if (!e.ctrlKey && !e.altKey && !e.metaKey) {
          e.preventDefault();
          handleAnswer(0);
        }
      }
      // Option B / 2 -> Index 1
      else if (key === 'b' || key === '2' || code === 'KeyB' || code === 'Digit2' || code === 'Numpad2') {
        if (!e.ctrlKey && !e.altKey && !e.metaKey) {
          e.preventDefault();
          handleAnswer(1);
        }
      }
      // Option C / 3 -> Index 2
      else if (key === 'c' || key === '3' || code === 'KeyC' || code === 'Digit3' || code === 'Numpad3') {
        if (!e.ctrlKey && !e.altKey && !e.metaKey) {
          e.preventDefault();
          handleAnswer(2);
        }
      }
      // Option D / 4 -> Index 3
      else if (key === 'd' || key === '4' || code === 'KeyD' || code === 'Digit4' || code === 'Numpad4') {
        if (!e.ctrlKey && !e.altKey && !e.metaKey) {
          e.preventDefault();
          handleAnswer(3);
        }
      }
      // Space / Enter -> Next Question / Advance
      else if (key === ' ' || key === 'spacebar' || code === 'Space' || key === 'enter' || code === 'Enter' || code === 'NumpadEnter') {
        if (!e.ctrlKey && !e.altKey && !e.metaKey) {
          e.preventDefault();
          advanceToNextQuestion();
        }
      }
      // H -> Hint
      else if (key === 'h' || code === 'KeyH') {
        if (!e.ctrlKey && !e.altKey && !e.metaKey) {
          e.preventDefault();
          handleUseHint();
        }
      }
      // Escape -> Close Modals
      else if (key === 'escape' || code === 'Escape') {
        setShowEmailModal(false);
        setShowAIModal(false);
        setPreviewImage(null);
        setShowLevelUpModal(false);
        setShowLuckyCrateModal(false);
        setAuthMode('options');
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [handleAnswer, advanceToNextQuestion, handleUseHint]);

  // Instant Google Profile / Quick Connect Handler
  const handleGoogleQuickSignIn = (nameInput?: string, emailInputVal?: string) => {
    const finalEmail = (emailInputVal || googleEmail || '').trim() || 'aditya.google@gmail.com';
    const finalName = (nameInput || googleName || '').trim() || finalEmail.split('@')[0] || 'Aditya (Google)';
    const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(finalName)}&background=4285F4&color=fff&rounded=true&bold=true`;
    
    const sessionObj = {
      email: finalEmail,
      name: finalName,
      avatar,
      provider: 'google',
      isGoogle: true
    };
    
    localStorage.setItem('cyberkarma_user_session', JSON.stringify(sessionObj));
    handleUserLogin(finalEmail, sessionObj);
    setShowEmailModal(false);
    setAuthMode('options');
    addToast(`✨ Welcome, ${finalName}! Signed in via Google.`, 'success');
  };

  const sendMagicLink = () => {
    if (!emailInput || !emailInput.includes('@')) {
      addToast('Please enter a valid email address', 'error');
      return;
    }
    const name = emailInput.split('@')[0];
    const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=10b981&color=fff&rounded=true&bold=true`;
    
    const sessionObj = {
      email: emailInput,
      name,
      avatar,
      provider: 'email'
    };
    
    localStorage.setItem('cyberkarma_user_session', JSON.stringify(sessionObj));
    handleUserLogin(emailInput, sessionObj);
    setShowEmailModal(false);
    setAuthMode('options');
    addToast(`✨ Welcome back, ${name}! Signed in successfully.`, 'success');
  };

  const handleLogout = () => {
    localStorage.removeItem('cyberkarma_user_session');
    setUser(null);
    addToast('Logged out successfully', 'info');
  };

  const handleShare = () => {
    const text = `🌾 I just generated ${score} grains of karmic impact on Cyber Free Rice! Test your cybersecurity knowledge & feed global causes:`;
    const shareUrl = "https://cyberkarma.me";
    if (navigator.share) {
      navigator.share({ title: 'Cyber Free Rice', text, url: shareUrl }).catch(console.error);
    } else {
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + shareUrl)}`;
      window.open(whatsappUrl, '_blank');
      navigator.clipboard.writeText(`${text} ${shareUrl}`);
      addToast('Copied share link & opening WhatsApp!', 'success');
    }
  };
  // Share AI Custom Quiz Accomplishment (Viral Booster)
  const handleShareAIResult = () => {
    const text = `🧠 I just scored ${aiCorrectCount}/5 in a custom AI-generated quiz on "${aiTopic}" on Cyber FreeRice, donating ${aiCorrectCount * 10} grains of rice! Try any topic here:`;
    if (navigator.share) {
      navigator.share({ title: 'Cyber FreeRice AI Quiz', text, url: window.location.href }).catch(console.error);
    } else {
      navigator.clipboard.writeText(`${text} ${window.location.href}`);
      addToast('Copied to clipboard!', 'success');
    }
  };

  // XP Calculations
  const milestone = score % 500;
  const progressPct = Math.min((milestone / 500) * 100, 100);
  
  const level = Math.floor(score / 200) + 1;
  let currentLevelTitle = "Chandra Novice";
  for (const item of levelTitles) {
    if (level >= item.minLvl) {
      currentLevelTitle = item.title;
    }
  }

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-500 overflow-hidden relative ${isDark ? 'text-white' : 'text-slate-800'}`}>
      
      {/* Emotional, Attractive, Heart-Melting Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Base layer: Deep rich color for dark mode, warm creamy white for light mode */}
        <div className={`absolute inset-0 transition-colors duration-700 ${isDark ? 'bg-[#0f0414]' : 'bg-[#fff5f5]'}`} />
        
        {/* Dynamic Emotional Orbs */}
        <motion.div 
          animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[100px] opacity-60 mix-blend-screen ${isDark ? 'bg-rose-600' : 'bg-rose-300'}`} 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute bottom-[-15%] right-[-10%] w-[70vw] h-[70vw] rounded-full blur-[120px] opacity-50 mix-blend-screen ${isDark ? 'bg-amber-600' : 'bg-orange-200'}`} 
        />
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, -60, 0], scale: [1, 1.25, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute top-[20%] right-[5%] w-[50vw] h-[50vw] rounded-full blur-[110px] opacity-50 mix-blend-screen ${isDark ? 'bg-purple-700' : 'bg-pink-300'}`} 
        />
        
        {/* Subtle Pulse to simulate a heartbeat of compassion */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full blur-[140px] mix-blend-screen ${isDark ? 'bg-fuchsia-600' : 'bg-red-200'}`}
        />
        <div className="absolute inset-0 backdrop-blur-[70px]" />
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 px-3 sm:px-8 py-3 flex items-center justify-between transition-all duration-300 ${isDark ? 'bg-slate-950/90 border-b border-emerald-500/20 text-white' : 'bg-white/95 border-b border-emerald-200 text-slate-900 shadow-sm'} backdrop-blur-2xl`}>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-slate-950 flex items-center justify-center font-black text-base shadow-md shadow-emerald-500/30 group-hover:scale-105 transition-transform">
              🐾
            </div>
            <div className="flex flex-col">
              <span className="font-title font-black text-sm sm:text-lg tracking-tight bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                {lang === 'hi' ? 'साइबरकर्म' : 'CyberKarma'}
              </span>
              <span className="text-[9px] font-mono font-bold text-emerald-500/90 -mt-1 hidden sm:block">
                cyberkarma.me
              </span>
            </div>
          </Link>

          <Link
            href="/impact"
            className={`inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-bold px-2.5 sm:px-3.5 py-1.5 rounded-full border transition-all hover:scale-105 ml-1 shadow-sm ${
              isDark 
                ? 'bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border-rose-500/30' 
                : 'bg-rose-50 hover:bg-rose-100 text-rose-800 border-rose-200 font-bold'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shrink-0" />
            <span>🐾 {lang === 'hi' ? 'दान रिकॉर्ड (110+ प्रमाण)' : 'Field Proof (110+ Photos)'}</span>
          </Link>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Grains Counter */}
          <div className={`flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-full border shadow-sm ${
            isDark
              ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
              : 'bg-emerald-50 border-emerald-300 text-emerald-800 font-extrabold'
          }`}>
            <span>🌾</span>
            <span>{score} {lang === 'hi' ? 'दाने' : 'Grains'}</span>
          </div>

          {dailyStreak > 0 && (
            <div className={`hidden sm:flex items-center gap-1 text-xs font-mono font-bold px-2.5 py-1 rounded-full border shadow-sm ${
              isDark
                ? 'bg-amber-500/15 border-amber-500/30 text-amber-300'
                : 'bg-amber-50 border-amber-300 text-amber-800 font-bold'
            }`}>
              🔥 {dailyStreak}d
            </div>
          )}

          {/* Global Multi-Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer ${
                isDark 
                  ? 'bg-purple-950/50 hover:bg-purple-900/60 border-purple-500/40 text-purple-200 shadow-sm' 
                  : 'bg-purple-50 hover:bg-purple-100 border-purple-300 text-purple-900 shadow-sm'
              }`}
              title="Choose Language (10 Languages Available)"
            >
              <span className="text-sm">{LANGUAGES_LIST.find(l => l.code === lang)?.flag || '🌐'}</span>
              <span className="font-bold">{LANGUAGES_LIST.find(l => l.code === lang)?.native || 'English'}</span>
              <span className="text-[9px] opacity-75">▼</span>
            </button>

            {/* Dropdown Menu */}
            {showLangDropdown && (
              <div className="absolute right-0 mt-2 w-60 p-2 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-purple-500/30 shadow-2xl z-50 grid grid-cols-1 gap-1 max-h-80 overflow-y-auto">
                <div className="px-3 py-1.5 text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider border-b border-white/10">
                  🌐 Select Language (10)
                </div>
                {LANGUAGES_LIST.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => handleSelectLanguage(item.code)}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      lang === item.code 
                        ? 'bg-purple-600 text-white shadow-md' 
                        : 'text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{item.flag}</span>
                      <span>{item.label}</span>
                    </span>
                    <span className="text-[11px] font-mono opacity-80">{item.native}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {!isWisdomBannerVisible && (
            <button
              onClick={() => setIsWisdomBannerVisible(true)}
              className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all shadow-sm ${
                isDark
                  ? 'bg-emerald-500/15 hover:bg-emerald-500/25 border-emerald-500/30 text-emerald-300'
                  : 'bg-emerald-50 hover:bg-emerald-100 border-emerald-300 text-emerald-800'
              }`}
              title="Show Daily Wisdom"
            >
              <span>⚡ {lang === 'hi' ? 'ज्ञान' : 'Wisdom'} #{factIndex + 1}</span>
            </button>
          )}

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              isDark 
                ? 'bg-slate-800/80 border-slate-700 text-amber-300 hover:bg-slate-700 hover:text-amber-200' 
                : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200 shadow-sm'
            }`} 
            aria-label="Toggle Theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Web Audio SFX Toggle */}
          <button
            onClick={() => {
              const nextMuted = !isAudioMuted;
              setIsAudioMuted(nextMuted);
              addToast(nextMuted ? '🔇 Audio Chimes Muted' : '🔊 Pentatonic Audio Chimes Active!', 'info');
            }}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              isAudioMuted
                ? 'bg-rose-500/20 border-rose-500/30 text-rose-300'
                : isDark
                  ? 'bg-slate-800/80 border-slate-700 text-emerald-300 hover:bg-slate-700 hover:text-emerald-200'
                  : 'bg-slate-100 border-slate-300 text-emerald-700 hover:bg-slate-200 shadow-sm'
            }`}
            aria-label="Toggle Sound Effects"
            title={isAudioMuted ? "Unmute Sound" : "Mute Sound"}
          >
            {isAudioMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>

          {user ? (
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono ${
              isDark ? 'bg-slate-800/60 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-800'
            }`}>
              <img src={user.avatar} alt="User" className="w-5 h-5 rounded-full" />
              <span className="hidden sm:inline font-bold">{user.name}</span>
              <button onClick={handleLogout} className="text-rose-400 hover:text-rose-300 ml-1 cursor-pointer" aria-label="Logout"><LogOut size={13} /></button>
            </div>
          ) : (
            <button 
              onClick={() => setShowEmailModal(true)} 
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all shadow-md cursor-pointer ${
                isDark ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-emerald-500/20' : 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-emerald-600/20'
              }`}
            >
              <User size={13} /> {t('signIn')}
            </button>
          )}
        </div>
      </header>

      {/* 3D Floating Daily Wisdom & Fact Top Banner */}
      <AnimatePresence>
        {isWisdomBannerVisible && (
          <motion.aside
            aria-label="Daily Wisdom & Fact"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="sticky top-[60px] z-40 px-3 sm:px-6 pt-2.5 pb-1 w-full max-w-6xl mx-auto"
          >
            <div 
              onMouseEnter={() => setIsFactHovered(true)}
              onMouseLeave={() => setIsFactHovered(false)}
              className={`p-4 sm:p-5 rounded-3xl border backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-between gap-4 transition-all relative overflow-hidden ${
                isDark 
                  ? 'bg-gradient-to-r from-slate-950/95 via-slate-900/95 to-slate-950/95 border-emerald-500/35 text-white shadow-[0_12px_40px_rgba(0,0,0,0.5)]' 
                  : 'bg-gradient-to-r from-emerald-50/95 via-white/98 to-teal-50/95 border-2 border-emerald-300 text-slate-900 shadow-[0_12px_32px_rgba(16,185,129,0.12)]'
              }`}
            >
              {/* Autoscroll Progress Timer Line */}
              <motion.div
                key={factIndex}
                initial={{ width: '0%' }}
                animate={{ width: isFactHovered ? '0%' : '100%' }}
                transition={{ duration: 6.5, ease: 'linear' }}
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 opacity-80"
              />
              
              <div className="flex items-start sm:items-center gap-3.5 w-full sm:w-auto flex-1 min-w-0">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl shadow-md cursor-pointer hover:scale-105 transition-transform ${
                  isDark ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 animate-pulse' : 'bg-emerald-600 text-white shadow-emerald-600/25'
                }`}
                onClick={handleNextFact}
                title="Click for next fact"
                >
                  ⚡
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={factIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="flex-1 min-w-0 space-y-1"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border shadow-sm ${
                        isDark ? 'text-emerald-300 bg-emerald-500/20 border-emerald-500/30' : 'text-emerald-900 bg-emerald-100 border-emerald-300 font-extrabold'
                      }`}>
                        📅 {t('dailyWisdomTitle')} #{(factIndex % (lang === 'hi' ? DAILY_FACTS_HI : DAILY_FACTS).length) + 1}
                      </span>

                      <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border shadow-sm ${
                        isDark ? 'text-cyan-300 bg-cyan-500/15 border-cyan-500/30' : 'text-cyan-900 bg-cyan-100 border-cyan-300 font-extrabold'
                      }`}>
                        {(lang === 'hi' ? DAILY_FACTS_HI : DAILY_FACTS)[factIndex % (lang === 'hi' ? DAILY_FACTS_HI : DAILY_FACTS).length].tag}
                      </span>

                      <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border shadow-sm hidden md:inline ${
                        isDark ? 'text-purple-300 bg-purple-500/15 border-purple-500/30' : 'text-purple-900 bg-purple-100 border-purple-300 font-extrabold'
                      }`}>
                        {(lang === 'hi' ? DAILY_FACTS_HI : DAILY_FACTS)[factIndex % (lang === 'hi' ? DAILY_FACTS_HI : DAILY_FACTS).length].category}
                      </span>

                      <span className="text-[9px] font-mono text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 hidden sm:inline">
                        ⏱️ Auto-rotating
                      </span>
                    </div>

                    <p className={`text-xs sm:text-sm font-semibold tracking-tight leading-snug line-clamp-2 sm:line-clamp-none ${
                      isDark ? 'text-slate-100' : 'text-slate-950 font-bold'
                    }`}>
                      "{(lang === 'hi' ? DAILY_FACTS_HI : DAILY_FACTS)[factIndex % (lang === 'hi' ? DAILY_FACTS_HI : DAILY_FACTS).length].fact}"
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-2.5 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
                <span className={`text-[10px] font-mono hidden lg:inline ${isDark ? 'text-slate-400' : 'text-slate-600 font-semibold'}`}>
                  {lang === 'hi' ? 'दैनिक अपडेट • 10+ खोज' : 'Updated daily • 10+ Discoveries'}
                </span>

                <button
                  onClick={handleNextFact}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 active:scale-95 shadow-md whitespace-nowrap cursor-pointer hover:scale-105 ${
                    isDark 
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:brightness-110 shadow-emerald-500/20' 
                      : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:brightness-105 shadow-emerald-600/25'
                  }`}
                  title="Cycle to next discovery"
                >
                  <span>🔄 {t('nextFact')}</span>
                </button>

                <button
                  onClick={() => setIsWisdomBannerVisible(false)}
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs transition-colors shrink-0 cursor-pointer ${
                    isDark ? 'bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white' : 'bg-slate-200 hover:bg-slate-300 text-slate-800'
                  }`}
                  title="Hide banner"
                >
                  ✕
                </button>
              </div>

            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-3 sm:px-4 pt-4 sm:pt-8 pb-28 sm:pb-8 relative z-10 flex flex-col gap-6">
        
        {/* Highlighted Supreme Intro Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className={`w-full p-8 sm:p-10 rounded-[32px] text-center overflow-hidden relative shadow-[0_12px_40px_rgba(0,0,0,0.15)] backdrop-blur-3xl border transition-all ${
            isDark 
              ? 'bg-gradient-to-b from-rose-950/40 via-black/40 to-slate-950/60 border-rose-500/20 text-white' 
              : 'bg-gradient-to-b from-white/95 via-slate-50/95 to-white/95 border-slate-200 text-slate-900 shadow-xl'
          }`}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-rose-500/10 blur-3xl rounded-full pointer-events-none" />

          {/* Official CyberKarma Banner Graphic */}
          <div className="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/20 mb-6 group">
            <img 
              src="/cyberkarma_banner.jpg" 
              alt="CyberKarma: Play Free Quizzes, Feed Street Dogs" 
              className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
            />
          </div>

          {/* Emotional Headline */}
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 font-title leading-tight">
            <span className={`bg-clip-text text-transparent drop-shadow-md ${isDark ? 'bg-gradient-to-r from-rose-400 via-amber-300 to-emerald-400' : 'bg-gradient-to-r from-rose-600 via-amber-600 to-emerald-600'}`}>
              {lang === 'hi' ? 'प्रत्येक सही उत्तर एक जीवन बचाता है।' : 'Every Answer Saves a Life.'}
            </span>
          </h1>

          <p className={`text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed mb-6 ${isDark ? 'text-slate-200 font-medium' : 'text-slate-800 font-semibold'}`}>
            {lang === 'hi' ? (
              <>
                प्रतिदिन ज्ञान अर्जित करें और जीवन बदलें। हर सही उत्तर पर हम{' '}
                <span className={`px-2.5 py-0.5 rounded-lg font-bold border ${isDark ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 'bg-emerald-100 text-emerald-900 border-emerald-300'}`}>
                  10 दाने अनाज
                </span>{' '}
                दान करते हैं, जिससे <strong className={isDark ? 'text-rose-300 font-bold' : 'text-rose-700 font-extrabold'}>बेसहारा जानवरों</strong> और <strong className={isDark ? 'text-amber-300 font-bold' : 'text-amber-700 font-extrabold'}>जरूरतमंदों</strong> को भोजन मिलता है।
              </>
            ) : (
              <>
                Play daily to transform a life. For every correct answer, we donate{' '}
                <span className={`px-2.5 py-0.5 rounded-lg font-bold border ${isDark ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 'bg-emerald-100 text-emerald-900 border-emerald-300'}`}>
                  10 grains of rice
                </span>{' '}
                to feed <strong className={isDark ? 'text-rose-300 font-bold' : 'text-rose-700 font-extrabold'}>rescue animals</strong> and <strong className={isDark ? 'text-amber-300 font-bold' : 'text-amber-700 font-extrabold'}>vulnerable families</strong> globally.
              </>
            )}
          </p>

          {/* Real-World Stray Animal Meal Impact HUD */}
          <div className={`w-full p-6 rounded-3xl border backdrop-blur-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 transition-all ${
            isDark 
              ? 'bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-rose-950/40 border-emerald-500/20 text-white' 
              : 'bg-gradient-to-r from-emerald-50/90 via-white/95 to-teal-50/90 border-emerald-200 text-slate-900 shadow-md'
          }`}>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-slate-950 flex items-center justify-center text-2xl shadow-lg shadow-emerald-500/20 flex-shrink-0 animate-bounce">
                🐕
              </div>
              <div className="text-left">
                <div className={`text-xs font-mono font-bold uppercase tracking-wider ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                  {lang === 'hi' ? 'लाइव पशु आहार सेवा • पटना मंडल' : 'Live Animal Feeding Impact • Patna Division'}
                </div>
                <h3 className={`text-xl sm:text-2xl font-black font-title ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'hi' 
                    ? `${Math.floor(score / 50)} पौष्टिक भोजन परोसे गए`
                    : `${Math.floor(score / 50)} Warm Street Meals Funded`}
                </h3>
                <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600 font-medium'}`}>
                  {lang === 'hi'
                    ? 'प्रत्येक 50 दानों पर बेसहारा कुत्तों के लिए 1 पूरा पौष्टिक भोजन कटोरा उपलब्ध होता है।'
                    : 'Every 50 grains of rice unlocks 1 full bowl of nutritious food for rescue dogs in Patna.'}
                </p>
              </div>
            </div>

            <div className="w-full md:w-72 flex flex-col gap-2">
              <div className={`flex justify-between text-xs font-mono font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <span>{lang === 'hi' ? 'अगला भोजन कटोरा:' : 'Next Street Meal:'}</span>
                <span className={isDark ? 'text-emerald-400' : 'text-emerald-700 font-extrabold'}>{`${score % 50} / 50 ${lang === 'hi' ? 'दाने' : 'Grains'}`}</span>
              </div>
              <div className={`w-full h-3.5 rounded-full overflow-hidden border p-0.5 ${isDark ? 'bg-black/40 border-white/10' : 'bg-slate-200 border-slate-300'}`}>
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                  style={{ width: `${Math.min(100, Math.round(((score % 50) / 50) * 100))}%` }}
                />
              </div>
              <div className="flex justify-between items-center pt-1">
                <button 
                  onClick={handleOpenLuckyCrate}
                  className={`text-[11px] font-mono font-bold flex items-center gap-1.5 underline cursor-pointer ${
                    isDark ? 'text-amber-400 hover:text-amber-300' : 'text-amber-700 hover:text-amber-800'
                  }`}
                >
                  🎁 {t('openCrate')}
                </button>
                <button 
                  onClick={handleShare}
                  className={`text-[11px] font-mono font-bold flex items-center gap-1 cursor-pointer ${
                    isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-teal-700 hover:text-teal-800'
                  }`}
                >
                  <Share2 size={12} /> {lang === 'hi' ? 'शेयर करें' : 'Share Impact'}
                </button>
              </div>
            </div>
          </div>

          {/* Highlight Badges */}
          <div className="flex flex-wrap justify-center items-center gap-3 text-xs font-mono font-bold uppercase tracking-wider">
            <span className={`px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border ${isDark ? 'bg-rose-500/10 border-rose-500/20 text-rose-300' : 'bg-rose-100 border-rose-200 text-rose-800'}`}>
              {t('pledgePerAnswer')}
            </span>
            <span className={`px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border ${isDark ? 'bg-amber-500/10 border-amber-500/20 text-amber-300' : 'bg-amber-100 border-amber-200 text-amber-800'}`}>
              {t('nonProfitBadge')}
            </span>
            <span className={`px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border ${isDark ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300' : 'bg-emerald-100 border-emerald-200 text-emerald-800'}`}>
              {t('groundImpactBadge')}
            </span>

            {/* Dedicated Hero Language Switcher Ribbon */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-purple-500/20 border border-purple-500/40 shadow-md max-w-full overflow-x-auto scrollbar-none">
              <span className="text-[11px] font-bold text-purple-300 pl-2 shrink-0">🌐 {t('language')}:</span>
              {LANGUAGES_LIST.map((item) => (
                <button
                  key={item.code}
                  onClick={() => handleSelectLanguage(item.code)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold font-mono transition-all shrink-0 cursor-pointer ${
                    lang === item.code 
                      ? 'bg-purple-600 text-white shadow-md scale-[1.03]' 
                      : 'text-purple-300 hover:text-white hover:bg-white/10'
                  }`}
                  title={`${item.label} (${item.native})`}
                >
                  <span>{item.flag} {item.native}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Active Quiz Panel */}
          <div className="lg:col-span-8 space-y-6">

            {/* Prominent Multi-Language Ribbon Above Quiz */}
            <div className={`p-3.5 rounded-[24px] backdrop-blur-2xl shadow-lg border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${isDark ? 'bg-gradient-to-r from-purple-950/40 via-slate-900/60 to-purple-950/40 border-purple-500/30' : 'bg-gradient-to-r from-purple-50/90 via-white/90 to-indigo-50/90 border-purple-200'}`}>
              <div className="flex items-center gap-2">
                <span className="text-lg">🌐</span>
                <div>
                  <span className="text-xs font-black font-title tracking-tight text-purple-400 block">
                    {t('switchLang')}:
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {lang === 'hi' ? '10 वैश्विक एवं भारतीय भाषाओं में उपलब्ध' : 'Available in 10 Global & Regional Languages'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-none">
                {LANGUAGES_LIST.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => handleSelectLanguage(item.code)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-1 shrink-0 cursor-pointer ${
                      lang === item.code 
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/25 scale-[1.03]' 
                        : isDark ? 'bg-black/40 text-slate-300 hover:text-white border border-white/10' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <span>{item.flag}</span>
                    <span>{item.native}</span>
                    {lang === item.code && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                  </button>
                ))}
              </div>
            </div>
            
            {/* 10-Category Visual Deck */}
            <div className={`p-4 sm:p-5 rounded-[28px] backdrop-blur-3xl shadow-2xl border space-y-4 ${isDark ? 'bg-gradient-to-b from-slate-900/80 via-slate-950/90 to-black/90 border-white/10' : 'bg-white/95 border-slate-200 shadow-xl'}`}>
              
              {/* Category Selector Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                    📚
                  </div>
                  <div>
                    <h3 className="text-sm font-black font-title tracking-tight text-white flex items-center gap-2">
                      <span>{lang === 'hi' ? 'प्रश्नोत्तरी विषय चुनें (10 श्रेणियाँ):' : 'Select Quiz Category (10 Topics):'}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {lang === 'hi' ? '10 विषय उपलब्ध' : '10 Topics Available'}
                      </span>
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400">
                      {lang === 'hi' ? 'प्रत्येक सही उत्तर से पटना में बेसहारा जानवरों को 10 दाने भोजन दान होता है।' : 'Every correct answer donates 10 grains of rice to feed stray animals in Patna.'}
                    </p>
                  </div>
                </div>

                {/* Difficulty Controls */}
                {category !== 'custom-ai' && (
                  <div className="flex items-center gap-1.5 self-start sm:self-auto">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mr-1 hidden sm:inline-block">
                      {lang === 'hi' ? 'कठिनाई:' : 'Difficulty:'}
                    </span>
                    <div className={`flex gap-1 p-1 rounded-xl ${isDark ? 'bg-black/40 border border-white/10' : 'bg-slate-100 border border-slate-200'}`}>
                      {(['beginner', 'intermediate', 'advanced'] as Difficulty[]).map(diff => (
                        <button
                          key={diff}
                          onClick={() => {
                            setDifficulty(diff);
                            addToast(lang === 'hi' ? `कठिनाई: ${diff === 'beginner' ? 'सरल' : diff === 'intermediate' ? 'मध्यम' : 'कठिन'} सेट!` : `Difficulty: ${diff.toUpperCase()} Set!`, 'info');
                          }}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold capitalize transition-all cursor-pointer ${
                            difficulty === diff 
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black shadow-md' 
                              : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {lang === 'hi' 
                            ? (diff === 'beginner' ? 'सरल' : diff === 'intermediate' ? 'मध्यम' : 'कठिन')
                            : (diff === 'beginner' ? 'Easy' : diff === 'intermediate' ? 'Med' : 'Hard')}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 10 Category Buttons Grid / Pill Ribbon */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                {ALL_QUIZ_CATEGORIES.map(cat => {
                  const isSelected = category === cat.id;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        if (cat.id === 'random') {
                          const keys: CategoryKey[] = ['animals', 'math', 'space', 'vocab', 'geography', 'science', 'gk', 'cybersecurity'];
                          const picked = keys[Math.floor(Math.random() * keys.length)];
                          setCategory(picked);
                          const chosenConfig = ALL_QUIZ_CATEGORIES.find(c => c.id === picked);
                          addToast(lang === 'hi' ? `🎲 रैंडम विषय चुना गया: ${chosenConfig?.titleHi}!` : `🎲 Random Topic Selected: ${chosenConfig?.titleEn}!`, 'success');
                        } else if (cat.id === 'custom-ai') {
                          setShowAIModal(true);
                        } else {
                          setCategory(cat.id);
                          addToast(lang === 'hi' ? `✨ श्रेणी: ${cat.titleHi} सक्रिय!` : `✨ Category: ${cat.titleEn} Active!`, 'info');
                        }
                      }}
                      className={`group relative p-2.5 sm:p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[72px] sm:min-h-[82px] ${
                        isSelected
                          ? `${cat.activeGlow} scale-[1.03]`
                          : isDark
                            ? 'bg-slate-900/60 border-white/10 hover:border-white/25 hover:bg-slate-800/80 text-slate-300 hover:text-white'
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 shadow-sm'
                      }`}
                    >
                      {/* Active Indicator Top Accent Bar */}
                      {isSelected && (
                        <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400" />
                      )}

                      <div className="flex items-center justify-between gap-1 w-full">
                        <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                        <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md border ${isSelected ? 'bg-white/20 border-white/30 text-white' : cat.badgeColor}`}>
                          {cat.badge.split(' ')[0]}
                        </span>
                      </div>

                      <div className="pt-1">
                        <div className={`text-xs sm:text-sm font-black font-title tracking-tight flex items-center justify-between ${isSelected ? 'text-white' : ''}`}>
                          <span>{lang === 'hi' ? cat.titleHi : cat.titleEn}</span>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />}
                        </div>
                        <p className="text-[10px] font-mono opacity-70 truncate">
                          {lang === 'hi' ? cat.subtitleHi : cat.subtitleEn}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Category Micro-HUD */}
              {category !== 'custom-ai' && (
                <div className={`p-3 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs font-mono ${
                  isDark ? 'bg-black/30 border-white/5 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="text-base">
                      {ALL_QUIZ_CATEGORIES.find(c => c.id === category)?.icon || '📚'}
                    </span>
                    <div>
                      <span className="font-bold text-white">
                        {lang === 'hi' 
                          ? (quizDataHindi[category]?.title || category) 
                          : (quizData[category]?.title || category)}
                      </span>
                      <span className="text-[11px] opacity-75 block">
                        {lang === 'hi' 
                          ? (quizDataHindi[category]?.description || '') 
                          : (quizData[category]?.description || '')}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      👥 {quizData[category]?.ageGroup || 'All Ages'}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      🎯 {lang === 'hi' ? (difficulty === 'beginner' ? 'सरल स्तर' : difficulty === 'intermediate' ? 'मध्यम स्तर' : 'कठिन स्तर') : `${difficulty.toUpperCase()} Level`}
                    </span>
                  </div>
                </div>
              )}
            </div>



            {/* Quiz Area */}
            <div className="w-full">
              <AnimatePresence mode="wait">
                {showAICompletion && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className={`w-full p-10 rounded-[32px] text-center shadow-xl backdrop-blur-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/50 border-white/60'}`}>
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Award size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{lang === 'hi' ? 'क्विज़ पूरा हुआ!' : 'Quiz Completed!'}</h3>
                    <p className="text-base opacity-80 mb-8">
                      {lang === 'hi' 
                        ? <>आपने <strong>{aiTopic}</strong> पर {aiQuestions.length} में से {aiCorrectCount} प्रश्नों के सही उत्तर दिए। <br/>आपने <strong>{aiCorrectCount * 10} दाने</strong> अनाज दान किया!</>
                        : <>You answered {aiCorrectCount} of {aiQuestions.length} questions correctly on <strong>{aiTopic}</strong>. <br/>You generated <strong>{aiCorrectCount * 10} grains</strong> of rice!</>}
                    </p>
                    <div className="flex justify-center gap-4">
                      <button onClick={handleShareAIResult} className="px-6 py-3 rounded-full font-semibold bg-white text-slate-800 shadow-md hover:scale-105 transition-transform flex items-center gap-2">
                        <Share2 size={18} /> {lang === 'hi' ? 'परिणाम साझा करें' : 'Share Result'}
                      </button>
                      <button onClick={() => setShowAIModal(true)} className="px-6 py-3 rounded-full font-semibold bg-black/10 hover:bg-black/20 transition-colors">
                        {lang === 'hi' ? 'नया विषय' : 'New Topic'}
                      </button>
                    </div>
                  </motion.div>
                )}

                {currentQuestion ? (
                    <motion.div
                      key={currentQuestion.question}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className={`w-full rounded-[32px] border p-4 sm:p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-2xl relative overflow-hidden transition-all duration-500 ${
                        streak >= 10
                          ? 'border-yellow-400 shadow-[0_0_50px_rgba(234,179,8,0.45)] bg-slate-900/90'
                          : streak >= 5
                            ? 'border-violet-400 shadow-[0_0_40px_rgba(139,92,246,0.4)] bg-slate-900/90'
                            : streak >= 3
                              ? 'border-amber-500 shadow-[0_0_30px_rgba(249,115,22,0.35)] bg-slate-900/90'
                              : isDark
                                ? 'bg-slate-900/80 border-white/10'
                                : 'bg-white/90 border-white/80'
                      }`}
                    >
                      {/* Streak Aura Top Accent Bar */}
                      {streak >= 3 && (
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-rose-500 to-yellow-400 animate-pulse" />
                      )}

                      {/* Dynamic Question Visual Hero Showcase */}
                      {(() => {
                        const currentCategoryConfig = ALL_QUIZ_CATEGORIES.find(c => c.id === category);
                        const categoryFallbackImage = category !== 'custom-ai'
                          ? (quizData[category]?.heroImage || '/quiz/animals_hero.jpg')
                          : '/quiz/ai_hero.jpg';
                        const heroImageSrc = currentQuestion.image || categoryFallbackImage;
                        const categoryTitle = lang === 'hi' ? (currentCategoryConfig?.titleHi || 'प्रश्नोत्तरी') : (currentCategoryConfig?.titleEn || 'Trivia');

                        const multiplierGrains = streak >= 10 ? 30 : streak >= 5 ? 20 : streak >= 3 ? 15 : 10;
                        const multiplierLabel = streak >= 10 ? '👑 3X GODLIKE' : streak >= 5 ? '⚡ 2X MEGA' : streak >= 3 ? '🔥 1.5X SUPER' : '🌾 10 Grains';

                        return (
                          <div className="relative w-full h-44 sm:h-56 md:h-64 rounded-[22px] sm:rounded-[26px] overflow-hidden mb-6 border border-white/15 shadow-2xl group select-none bg-slate-950">
                            {/* Background Image with Ambient Zoom */}
                            <img
                              src={heroImageSrc}
                              alt={currentQuestion.question}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                              loading="eager"
                            />

                            {/* Cyberpunk Vignette & Glass Gradient Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                            {/* Top Bar Floating Badges */}
                            <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl backdrop-blur-xl bg-black/70 border border-white/20 text-white shadow-lg">
                                <span className="text-sm">{currentCategoryConfig?.icon || '💡'}</span>
                                <span className="text-xs font-bold font-title tracking-wide truncate max-w-[130px] sm:max-w-none">
                                  {category === 'custom-ai' ? `🤖 ${aiTopic}` : categoryTitle}
                                </span>
                                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-500/30">
                                  {category === 'custom-ai' ? `Q${aiIndex + 1}/${aiQuestions.length}` : `Q#${questionHistoryRef.current.length + 1}`}
                                </span>
                              </div>

                              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl backdrop-blur-xl border font-mono text-xs font-bold shadow-lg transition-all ${
                                streak >= 10 
                                  ? 'bg-yellow-950/90 border-yellow-400 text-yellow-300 shadow-yellow-950/60 animate-bounce'
                                  : streak >= 5
                                    ? 'bg-purple-950/90 border-purple-400 text-purple-200 shadow-purple-950/60'
                                    : streak >= 3
                                      ? 'bg-amber-950/90 border-amber-400 text-amber-300 shadow-amber-950/60'
                                      : 'bg-emerald-950/80 border-emerald-400/40 text-emerald-300 shadow-emerald-950/50'
                              }`}>
                                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                                <span>{lang === 'hi' ? `🌾 ${multiplierGrains} दाने दांव पर` : `${multiplierLabel} Pledged`}</span>
                              </div>
                            </div>

                            {/* Bottom Visual Details Overlay */}
                            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 z-10">
                              <div className="flex flex-wrap items-center gap-1.5">
                                <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-black/70 border border-white/15 text-slate-300 backdrop-blur-md">
                                  🎯 {lang === 'hi' 
                                    ? (currentQuestion.difficulty === 'beginner' ? 'सरल स्तर' : currentQuestion.difficulty === 'intermediate' ? 'मध्यम स्तर' : 'कठिन स्तर') 
                                    : `${(currentQuestion.difficulty || difficulty).toUpperCase()} Level`}
                                </span>
                                <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-purple-950/80 border border-purple-400/30 text-purple-200 backdrop-blur-md hidden sm:inline-flex items-center gap-1">
                                  🐾 Patna Stray Animal Mission
                                </span>
                              </div>

                              <button
                                type="button"
                                onClick={() => setActiveLightboxImage(heroImageSrc)}
                                className="p-2 px-2.5 rounded-xl bg-black/70 hover:bg-black border border-white/20 text-slate-200 hover:text-white backdrop-blur-md transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-md flex items-center gap-1.5 text-xs font-mono"
                                title={lang === 'hi' ? 'छवि को बड़ा करें' : 'Expand Image'}
                              >
                                <span>🔍</span>
                                <span className="hidden sm:inline font-bold">{lang === 'hi' ? 'विस्तार' : 'Zoom'}</span>
                              </button>
                            </div>
                          </div>
                        );
                      })()}

                      {currentQuestion.scenario && (
                        <div className={`p-5 rounded-[20px] mb-6 text-sm leading-relaxed border ${isDark ? 'bg-black/20 border-white/5' : 'bg-white/40 border-white/50 shadow-sm'}`}>
                          {currentQuestion.scenario}
                        </div>
                      )}
                      
                      <h3 className="text-lg sm:text-xl font-semibold mb-8 leading-relaxed">
                        {currentQuestion.question}
                      </h3>
                      
                      <div className="grid grid-cols-1 gap-3">
                        {currentQuestion.options.map((opt, i) => {
                          let btnClass = `w-full text-left p-4 rounded-[20px] text-sm sm:text-base font-medium transition-all flex items-center shadow-sm border `;
                           if (isAnswered) {
                            if (i === currentQuestion.answer) {
                              btnClass += `bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-lg z-10 scale-[1.02] `;
                            } else if (i === selectedAnswer) {
                              btnClass += `bg-red-500/20 border-red-500/40 text-red-400 opacity-90 `;
                            } else {
                              btnClass += isDark ? `bg-white/5 border-white/5 opacity-40 ` : `bg-black/5 border-black/5 opacity-50 `;
                            }
                          } else {
                            btnClass += isDark 
                              ? `bg-black/40 border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:scale-[1.01] cursor-pointer text-white`
                              : `bg-white/70 border-white/90 hover:bg-white hover:border-emerald-400 hover:scale-[1.01] cursor-pointer hover:shadow-md text-slate-900`;
                          }

                          return (
                            <button
                              key={i}
                              disabled={isAnswered}
                              onClick={() => handleAnswer(i)}
                              className={btnClass}
                            >
                              {/* 3D Tactile Keycap Pill with Keyboard Shortcut Indicator */}
                              <div className={`w-9 h-9 rounded-xl flex items-center justify-center mr-4 shrink-0 text-sm font-black font-mono shadow-sm transition-transform ${isAnswered && i === currentQuestion.answer ? 'bg-slate-950 text-emerald-400' : isDark ? 'bg-slate-800 border border-white/15 text-slate-200' : 'bg-slate-100 border border-slate-300 text-slate-700'}`}>
                                {String.fromCharCode(65 + i)}
                              </div>
                              <span className="flex-1">{opt}</span>
                              <span className="opacity-40 text-[10px] font-mono ml-2 hidden sm:inline">[{String.fromCharCode(65 + i)} / {i + 1}]</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Keyboard Shortcuts Quick Bar */}
                      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400 px-1">
                        <span className="flex items-center gap-1">
                          <kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/15 text-slate-300 font-bold">A</kbd>
                          <kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/15 text-slate-300 font-bold">B</kbd>
                          <kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/15 text-slate-300 font-bold">C</kbd>
                          <kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/15 text-slate-300 font-bold">D</kbd>
                          <span className="ml-1 text-[10px]">{t('orAnswerKeys')}</span>
                        </span>
                        <span className="flex items-center gap-1.5 text-[10px]">
                          <kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/15 text-slate-300 font-bold">Space</kbd>
                          <span>{t('spaceToNext')}</span>
                          <kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/15 text-slate-300 font-bold ml-1.5">H</kbd>
                          <span>{t('hForHint')}</span>
                        </span>
                      </div>

                      {/* Educational Answer Breakdown & Explanation Card */}
                      <AnimatePresence>
                        {isAnswered && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`p-5 sm:p-6 rounded-[24px] border mt-5 space-y-3 shadow-xl backdrop-blur-xl transition-all ${
                              selectedAnswer === currentQuestion.answer
                                ? (isDark ? 'bg-gradient-to-br from-emerald-950/60 to-slate-900/90 border-emerald-500/40 text-white shadow-emerald-500/10' : 'bg-emerald-50/95 border-emerald-300 text-slate-900 shadow-md')
                                : (isDark ? 'bg-gradient-to-br from-rose-950/60 to-slate-900/90 border-rose-500/40 text-white shadow-rose-500/10' : 'bg-rose-50/95 border-rose-300 text-slate-900 shadow-md')
                            }`}
                          >
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <div className="flex items-center gap-2 font-bold font-title text-sm sm:text-base">
                                {selectedAnswer === currentQuestion.answer ? (
                                  <span className="text-emerald-400 flex items-center gap-2">
                                    <span className="text-lg">🎉</span> 
                                    <span>{t('correctAnswerTitle')}</span>
                                  </span>
                                ) : (
                                  <span className="text-rose-400 flex items-center gap-2">
                                    <span className="text-lg">❌</span> 
                                    <span>{t('incorrectAnswerTitle')}</span>
                                  </span>
                                )}
                              </div>
                              <button
                                onClick={advanceToNextQuestion}
                                className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-white/20 hover:bg-white/30 border border-white/30 text-white transition-all flex items-center gap-2 cursor-pointer active:scale-95 shadow-md hover:scale-105"
                              >
                                <span>{t('nextQuestionBtn')} &rarr;</span>
                                <kbd className="px-1.5 py-0.5 rounded bg-black/40 text-[10px]">Space</kbd>
                              </button>
                            </div>

                            {selectedAnswer !== currentQuestion.answer && (
                              <div className="p-3 rounded-xl bg-black/30 border border-white/10 text-xs font-mono">
                                <span className="text-slate-400">{t('correctAnswerIs')} </span>
                                <strong className="text-emerald-400">
                                  Option {String.fromCharCode(65 + currentQuestion.answer)} — {currentQuestion.options[currentQuestion.answer]}
                                </strong>
                              </div>
                            )}

                            <div className="pt-2 border-t border-white/10 text-xs sm:text-sm leading-relaxed space-y-1">
                              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                                <span>💡</span> 
                                <span>{t('whyCorrectInsight')}</span>
                              </div>
                              <p className={`font-sans leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                                {currentQuestion.explanation || currentQuestion.hint || (lang === 'hi' ? "इस अवधारणा को सीखने से आपका ज्ञान बढ़ता है और बेसहारा जीवों के लिए आहार दान संभव होता है।" : "Mastering this concept strengthens your knowledge and powers verified meal donations for street animals in need.")}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="mt-8 flex justify-between items-center min-h-[40px]">
                        <AnimatePresence>
                          {feedback && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`text-sm font-semibold px-4 py-2 rounded-full ${feedback.type === 'success' ? 'bg-green-500/20 text-green-600 dark:text-green-400' : feedback.type === 'error' ? 'bg-red-500/20 text-red-600 dark:text-red-400' : 'bg-blue-500/20 text-blue-600 dark:text-blue-400'}`}>
                              {feedback.text}
                            </motion.div>
                          )}
                        </AnimatePresence>
                        
                        {currentQuestion.hint && !isAnswered && (
                          <div className="flex-1 text-right">
                            {showHint ? (
                              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`inline-block p-4 rounded-[20px] text-sm text-left border shadow-sm ${isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-white/100'}`}>
                                💡 {currentQuestion.hint}
                              </motion.div>
                            ) : (
                              <button onClick={handleUseHint} disabled={score < 5} className={`px-5 py-2.5 rounded-full text-xs font-semibold shadow-sm transition-colors ${score >= 5 ? (isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-white hover:bg-gray-50') : 'opacity-40 cursor-not-allowed'}`}>
                                <Lightbulb size={14} className="inline mr-1" /> {t('useHintBtn')}
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                ) : (
                  !showAICompletion && (
                    <motion.div className={`p-10 text-center rounded-[32px] backdrop-blur-2xl shadow-lg border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/40 border-white/50'}`}>
                      <p className="opacity-70">Loading questions...</p>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: 3D Bowl HUD, Daily Facts & Community Impact */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* 3D Glowing Rice Bowl & Level HUD Widget */}
            <TiltWrapper tiltDeg={6} glare={true} className="w-full">
              <motion.div
                layout
                className={`w-full rounded-[36px] border p-7 sm:p-8 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all ${
                  isDark 
                    ? 'bg-gradient-to-b from-slate-900/95 via-slate-950/90 to-slate-950/95 border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.15)] text-white' 
                    : 'bg-gradient-to-b from-white/98 to-slate-50/98 border-2 border-emerald-300 text-slate-900 shadow-xl'
                }`}
              >
                {/* 3D Level Crown Badge */}
                <div className={`mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-black font-title shadow-sm ${
                  isDark ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' : 'bg-emerald-100 border-emerald-300 text-emerald-900 font-extrabold'
                }`}>
                  <span>⚡ {lang === 'hi' ? 'लेवल' : 'Level'} {level}: {currentLevelTitle}</span>
                </div>

                {/* Rolling 3D Grains Counter */}
                <div className="flex flex-col items-center justify-center gap-1 mb-5">
                  <motion.span
                    key={score}
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    className={`text-6xl sm:text-7xl font-black font-title tracking-tight bg-clip-text text-transparent drop-shadow-md ${
                      isDark ? 'bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400' : 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700'
                    }`}
                  >
                    {score.toLocaleString()}
                  </motion.span>
                  <span className={`text-xs font-mono font-bold uppercase tracking-widest ${
                    isDark ? 'text-slate-400' : 'text-slate-600 font-extrabold'
                  }`}>
                    🌾 {t('totalRiceDonated')}
                  </span>

                  <div className={`mt-3 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border font-bold text-xs shadow-sm ${
                    isDark 
                      ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-300' 
                      : 'bg-emerald-100 border-emerald-300 text-emerald-900 font-extrabold'
                  }`}>
                    <Heart size={13} className="fill-emerald-500 text-emerald-500" />
                    <span>{Math.floor(score / 50)} {lang === 'hi' ? 'भोजन परोसे गए 🐕' : 'Street Meals Funded 🐕'}</span>
                  </div>
                </div>

                {/* 3D Ceramic Bowl & Floating Grains Animation */}
                <div className="relative h-28 flex flex-col items-center justify-center my-2">
                  <AnimatePresence>
                    {riceGrains.map(grain => (
                      <motion.span
                        key={grain.id}
                        initial={{ opacity: 0, y: -40, scale: 0.5 }}
                        animate={{ opacity: 1, y: 20, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="absolute text-3xl z-10 drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                        style={{ left: grain.left, animationDelay: grain.delay }}
                      >
                        {grain.icon}
                      </motion.span>
                    ))}
                  </AnimatePresence>
                  <motion.div
                    animate={riceGrains.length ? { scale: [1, 1.15, 1], rotate: [0, 3, -3, 0] } : {}}
                    className="text-7xl relative z-20 drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] cursor-pointer select-none"
                    onClick={() => triggerRiceAnimation()}
                  >
                    🐕🥣
                  </motion.div>
                </div>

                {/* Progress Bar towards Next 50-Grain Bowl */}
                <div className="space-y-1.5 mt-4">
                  <div className={`flex justify-between text-[11px] font-mono font-bold ${
                    isDark ? 'text-slate-300' : 'text-slate-700 font-bold'
                  }`}>
                    <span>{lang === 'hi' ? 'अगला कटोरा:' : 'Next Street Bowl:'}</span>
                    <span className={isDark ? 'text-emerald-400' : 'text-emerald-700 font-extrabold'}>{score % 50} / 50 {lang === 'hi' ? 'दाने' : 'Grains'}</span>
                  </div>
                  <div className={`w-full h-3 rounded-full overflow-hidden border p-0.5 shadow-inner ${
                    isDark ? 'bg-black/60 border-emerald-500/30' : 'bg-slate-200 border-slate-300'
                  }`}>
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, Math.round(((score % 50) / 50) * 100))}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* 3D Action Buttons */}
                <div className="mt-6 flex flex-col gap-2.5">
                  <button
                    onClick={handleShare}
                    className={`w-full py-3.5 rounded-2xl text-xs font-black font-title uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] ${
                      isDark 
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-emerald-500/25 hover:brightness-110' 
                        : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-emerald-600/25 font-extrabold'
                    }`}
                  >
                    <Share2 size={14} /> {lang === 'hi' ? 'पुण्य प्रभाव शेयर करें' : 'Share Karmic Impact'}
                  </button>

                  <button
                    onClick={handleOpenLuckyCrate}
                    className={`w-full py-2.5 rounded-xl text-xs font-mono font-bold border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isDark 
                        ? 'text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/30' 
                        : 'text-amber-900 hover:text-amber-950 bg-amber-100 hover:bg-amber-200 border-amber-300 font-bold shadow-sm'
                    }`}
                  >
                    <span>🎁 {t('openCrate')}</span>
                  </button>
                </div>
              </motion.div>
            </TiltWrapper>

          </div>
        </div>

        {/* Real-World Impact Drive Showcase Card */}
        <div className="w-full mt-6">
          <TiltWrapper tiltDeg={2} glare={true} className="w-full">
            <div className={`p-8 sm:p-10 rounded-[36px] shadow-2xl backdrop-blur-2xl border overflow-hidden relative ${
              isDark 
                ? 'bg-gradient-to-br from-slate-900/90 via-rose-950/20 to-slate-950/90 border-rose-500/30 shadow-[0_0_40px_rgba(244,63,94,0.15)] text-white' 
                : 'bg-white/98 border-2 border-rose-200 text-slate-900 shadow-xl'
            }`}>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="p-2 rounded-xl bg-rose-500/20 text-rose-500 border border-rose-500/30">
                      <Heart size={22} className="fill-rose-500" />
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-title">
                      {lang === 'hi' ? 'ज़मीनी स्तर पर सेवा एवं वास्तविक प्रमाण' : 'Real-World Impact & Field Proof'}
                    </h2>
                  </div>
                  <p className={`text-sm max-w-2xl leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {lang === 'hi' 
                      ? 'प्रश्नोत्तरी के 100% अंक सीधे पटना मंडल (बिहार) में बेसहारा कुत्तों के दैनिक भोजन व उपचार में उपयोग होते हैं।'
                      : '100% of quiz karma points directly fund verified stray dog feeding drives and medical rescues across Patna Division, Bihar.'}
                  </p>
                </div>
                <Link
                  href="/impact"
                  className="px-6 py-3 rounded-full text-xs font-black font-title uppercase tracking-wider bg-rose-500 text-white hover:bg-rose-400 transition-all shadow-lg shadow-rose-500/25 flex items-center justify-center gap-2 shrink-0 hover:scale-105"
                >
                  <span>{lang === 'hi' ? '110+ तस्वीरें एवं बिल देखें' : 'Explore 110+ Field Photos'}</span>
                  <span>&rarr;</span>
                </Link>
              </div>

              {/* 3 Top Preview Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {STREET_FEEDING_DRIVE.slice(0, 3).map((item, idx) => (
                  <Link
                    key={idx}
                    href="/impact"
                    className="relative group rounded-2xl overflow-hidden shadow-md border border-white/15 bg-black/40 h-56 flex flex-col justify-end p-4 transition-transform hover:-translate-y-1"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="relative z-10 space-y-1">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-rose-500 text-white">
                        {item.tag}
                      </span>
                      <h4 className="text-xs font-bold text-white font-title truncate">{item.title}</h4>
                      <p className="text-[10px] text-slate-300 font-mono truncate">📍 {item.location}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 text-center pt-2">
                <Link
                  href="/impact"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-rose-400 hover:text-rose-300 underline"
                >
                  <span>{lang === 'hi' ? 'समर्पित दान रिकॉर्ड पेज देखें (पटना सेक्टर व 81 अभिलेखागार) →' : 'View Dedicated Field Proof Page (August 2026 Drives, Patna Sectors & 81 Archive Records) →'}</span>
                </Link>
              </div>

            </div>
          </TiltWrapper>
        </div>
      </main>

      {/* Daily Lucky Karma Crate Modal */}
      <AnimatePresence>
        {showLuckyCrateModal && luckyReward && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-slate-900 border border-amber-500/30 p-8 rounded-3xl max-w-md w-full text-center space-y-4 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-rose-500 to-emerald-400" />
              <div className="text-6xl animate-bounce">🎁</div>
              <h3 className="text-2xl font-black font-title text-white">{lang === 'hi' ? 'दैनिक कर्म क्रेट अनलॉक!' : 'Daily Karma Crate Unlocked!'}</h3>
              <p className="text-sm font-mono text-amber-300 font-bold leading-relaxed">
                {luckyReward.text}
              </p>
              <p className="text-xs text-slate-300">
                {lang === 'hi' ? 'आपके बोनस दाने पटना बेसहारा पशु आहार पूल में जोड़ दिए गए हैं!' : 'Your bonus grains have been added to the Patna Street Animal Rescue Feeding Pool!'}
              </p>
              <button
                onClick={() => setShowLuckyCrateModal(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-rose-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg hover:brightness-110 transition-all cursor-pointer"
              >
                {lang === 'hi' ? 'दाने प्राप्त करें और खेलें 🚀' : 'Claim & Keep Playing 🚀'}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* AI Quiz Settings Modal */}
      <AnimatePresence>
        {showAIModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} className={`w-full max-w-lg p-6 sm:p-8 rounded-[32px] shadow-2xl border ${isDark ? 'bg-[#151a24] border-purple-500/30' : 'bg-white/95 border-purple-200 backdrop-blur-xl'}`}>
              
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <Cpu size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black font-title tracking-tight text-white">{t('aiModalTitle')}</h3>
                    <p className="text-xs text-purple-300 font-mono">
                      ⚡ Google Gemini 2.5 Flash Engine
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => setShowAIModal(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs opacity-75 mb-5 leading-relaxed">
                {t('aiModalSubtitle')}
              </p>

              {/* Custom Topic Input */}
              <div className="mb-4">
                <label className="text-xs font-bold font-mono ml-1 mb-2 block text-purple-300">{t('aiTopicLabel')}</label>
                <div className="relative">
                  <input
                    type="text"
                    value={aiTopic}
                    onChange={e => setAiTopic(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' && aiTopic.trim() && !isGeneratingAI) {
                        handleGenerateAIQuiz();
                      }
                    }}
                    placeholder={t('aiTopicPlaceholder')}
                    disabled={isGeneratingAI}
                    className={`w-full p-3.5 pr-10 rounded-[18px] border outline-none font-mono text-sm transition-all shadow-inner ${isDark ? 'bg-black/40 border-white/15 focus:border-purple-400 text-white placeholder:text-slate-500' : 'bg-slate-50 border-slate-300 focus:border-purple-500 text-slate-900 placeholder:text-slate-400'}`}
                  />
                  {aiTopic && (
                    <button 
                      onClick={() => setAiTopic('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-bold"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Instant Topic Chips */}
              <div className="mb-6 space-y-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block ml-1">
                  {lang === 'hi' ? '💡 लोकप्रिय विषय सुझाव (क्लिक करें):' : '💡 Popular Quick Topics (Click to select):'}
                </span>
                <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                  {[
                    { en: '🐾 Stray Dog Empathy & Animal Care', hi: '🐾 श्वान सेवा एवं पशु कल्याण' },
                    { en: '⚡ Quantum Computing & Superposition', hi: '⚡ क्वांटम कंप्यूटिंग' },
                    { en: '🪐 Black Holes & Cosmic Singularity', hi: '🪐 ब्लैक होल एवं ब्रह्मांड' },
                    { en: '🔐 Zero Trust & Ethical Hacking', hi: '🔐 जीरो ट्रस्ट एवं साइबर सुरक्षा' },
                    { en: '🧬 CRISPR & Genetic Engineering', hi: '🧬 आनुवंशिक विज्ञान (CRISPR)' },
                    { en: '🏛️ Ancient Indus Valley Civilization', hi: '🏛️ सिंधु घाटी सभ्यता' },
                    { en: '🚀 Mars Perseverance & Space Rockets', hi: '🚀 मंगल ग्रह एवं अंतरिक्ष मिशन' },
                    { en: '🧠 Large Language Models & AI Tech', hi: '🧠 न्यूरल नेटवर्क एवं AI' },
                  ].map((chip, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setAiTopic(lang === 'hi' ? chip.hi : chip.en)}
                      className={`px-2.5 py-1.5 rounded-xl text-[11px] font-mono transition-all text-left cursor-pointer border ${
                        aiTopic === (lang === 'hi' ? chip.hi : chip.en)
                          ? 'bg-purple-500/30 border-purple-400 text-purple-200 font-bold shadow-sm'
                          : isDark
                            ? 'bg-black/30 border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 text-slate-300'
                            : 'bg-slate-100 border-slate-200 hover:border-purple-300 hover:bg-purple-50 text-slate-700'
                      }`}
                    >
                      {lang === 'hi' ? chip.hi : chip.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={handleGenerateAIQuiz}
                  disabled={isGeneratingAI || !aiTopic.trim()}
                  className="flex-1 py-3.5 px-6 rounded-2xl font-bold font-title text-sm bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white hover:brightness-110 active:scale-[0.98] disabled:opacity-50 transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isGeneratingAI ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      <span>{t('generatingAI')}</span>
                    </>
                  ) : (
                    <span>{t('generateQuizBtn')}</span>
                  )}
                </button>
                <button 
                  onClick={() => setShowAIModal(false)} 
                  disabled={isGeneratingAI} 
                  className="py-3.5 px-5 rounded-2xl font-semibold text-xs opacity-70 hover:opacity-100 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  {lang === 'hi' ? 'रद्द करें' : 'Cancel'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>



      {/* Level Up Announcement Modal */}
      <AnimatePresence>
        {showLevelUpModal && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-lg"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              className={`w-full max-w-sm rounded-[32px] shadow-2xl border p-10 text-center relative overflow-hidden ${isDark ? 'bg-[#1c1c1e] border-white/10' : 'bg-white/90 border-white/100 backdrop-blur-xl'}`}
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute -top-32 -left-32 w-64 h-64 bg-yellow-400/20 blur-[60px] rounded-full pointer-events-none" />
              
              <div className="text-7xl mb-6 inline-block">🌟</div>
              <h3 className="text-3xl font-bold mb-2">{lang === 'hi' ? 'लेवल अप!' : 'Level Up!'}</h3>
              <p className="text-sm opacity-70 mb-8">{lang === 'hi' ? 'आपका पुण्य प्रभाव विश्व स्तर पर बढ़ रहा है।' : 'Your impact is growing globally.'}</p>

              <div className={`p-6 rounded-[24px] mb-8 border shadow-inner ${isDark ? 'bg-black/30 border-white/5' : 'bg-gray-50 border-gray-200'}`}>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-500 mb-2">{lang === 'hi' ? 'नया पद' : 'New Rank'}</div>
                <div className="text-xl font-bold">
                  {lang === 'hi' ? 'लेवल' : 'Level'} {levelUpData.level}: {levelUpData.title}
                </div>
              </div>

              <button
                onClick={() => setShowLevelUpModal(false)}
                className="w-full py-4 rounded-[20px] bg-blue-500 text-white font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-blue-500/30 cursor-pointer"
              >
                {lang === 'hi' ? 'खेलना जारी रखें' : 'Continue Playing'}
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Photo Preview Lightbox Modal */}
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full rounded-[32px] overflow-hidden bg-slate-900 border border-white/20 shadow-2xl"
            >
              <button
                onClick={() => setPreviewImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-rose-600 transition-colors font-bold cursor-pointer"
              >
                ✕
              </button>
              <div className="relative h-96 w-full bg-black">
                <img
                  src={previewImage.src}
                  alt={previewImage.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 bg-slate-950 text-white space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-rose-500 text-white text-[10px] font-mono font-bold uppercase">
                    {lang === 'hi' ? 'सत्यापित फील्ड प्रभाव' : 'Verified Field Impact'}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{previewImage.date}</span>
                </div>
                <h3 className="text-lg font-black font-title text-white">{previewImage.title}</h3>
                <p className="text-xs text-slate-300 font-mono flex items-center gap-1">
                  <span>📍</span> {lang === 'hi' ? 'स्थान' : 'Location'}: {previewImage.location}
                </p>
                <p className="text-xs text-emerald-400 pt-2 border-t border-white/10 font-medium">
                  ❤️ {lang === 'hi' ? 'आपकी क्विज़ भागीदारी सीधे इस स्थान पर जानवरों के भोजन को वित्तपोषित करती है।' : 'Your quiz participation directly funds rice meals for animals in this exact location.'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Google & Email Authentication Modal */}
        {showEmailModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setShowEmailModal(false);
              setAuthMode('options');
            }}
            className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full rounded-[32px] overflow-hidden bg-slate-900 border border-white/20 p-6 sm:p-8 shadow-2xl space-y-6"
            >
              <button
                onClick={() => {
                  setShowEmailModal(false);
                  setAuthMode('options');
                }}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-slate-400 hover:text-white flex items-center justify-center transition-colors text-sm font-bold"
              >
                ✕
              </button>

              <div className="text-center space-y-2">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-slate-950 flex items-center justify-center text-2xl mx-auto shadow-lg shadow-emerald-500/20 font-black">
                  🐾
                </div>
                <h3 className="text-2xl font-black font-title text-white">
                  {authMode === 'google-form' ? t('googleAccountName') : t('signInModalTitle')}
                </h3>
                <p className="text-xs text-slate-400">
                  {t('signInModalSubtitle')}
                </p>
              </div>

              {authMode === 'google-form' ? (
                /* Google Account Setup Sub-view */
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleGoogleQuickSignIn(googleName, googleEmail);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">
                      {t('googleAccountName')}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aditya"
                      value={googleName}
                      onChange={(e) => setGoogleName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">
                      {t('googleEmailAddress')}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.name@gmail.com"
                      value={googleEmail}
                      onChange={(e) => setGoogleEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="flex flex-col gap-2 pt-1">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 rounded-2xl bg-blue-500 hover:bg-blue-400 text-white font-bold text-xs uppercase tracking-wider font-title flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95 cursor-pointer"
                    >
                      <svg className="w-4 h-4 bg-white rounded-full p-0.5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                      <span>{t('signInWithGoogleBtn')}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAuthMode('options')}
                      className="py-2 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      &larr; {t('backToOptions')}
                    </button>
                  </div>
                </form>
              ) : (
                /* Main Options View */
                <div className="space-y-4">
                  {/* 1-Click Google Sign-In Trigger */}
                  <button
                    onClick={() => {
                      setGoogleName('Aditya');
                      setGoogleEmail('adityasec32@gmail.com');
                      setAuthMode('google-form');
                    }}
                    className="w-full py-3.5 px-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm font-title flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span>{t('continueWithGoogle')}</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-[1px] bg-white/10" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">{t('orEmailLink')}</span>
                    <div className="flex-1 h-[1px] bg-white/10" />
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      sendMagicLink();
                    }}
                    className="space-y-3"
                  >
                    <div>
                      <label className="text-[11px] font-mono text-slate-400 block mb-1">
                        {lang === 'hi' ? 'ईमेल पता' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={t('emailPlaceholder')}
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                    >
                      {t('instantSignInBtn')}
                    </button>
                  </form>
                </div>
              )}

              <p className="text-[10px] font-mono text-center text-slate-500">
                🔒 {t('freeNonCommercial')}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 100% Trust, Transparency & Financial Integrity Section */}
      <section className="w-full max-w-6xl mx-auto px-4 mt-12 relative z-10">
        <TiltWrapper tiltDeg={2} glare={true} className="w-full">
          <div className={`p-8 sm:p-10 rounded-[36px] border shadow-2xl backdrop-blur-2xl transition-all relative overflow-hidden ${
            isDark 
              ? 'bg-gradient-to-br from-slate-900/95 via-emerald-950/20 to-slate-950/95 border-emerald-500/30 text-white shadow-[0_0_50px_rgba(16,185,129,0.1)]' 
              : 'bg-white/98 border-2 border-emerald-200 text-slate-900 shadow-xl'
          }`}>
            
            {/* Header with Verified Shield */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold mb-3">
                  <ShieldCheck size={16} />
                  <span>{lang === 'hi' ? '100% सार्वजनिक पारदर्शिता एवं प्रमाण' : '100% Public Transparency & Trust Guarantee'}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black font-title tracking-tight">
                  {lang === 'hi' ? 'विश्वास और पारदर्शिता का हमारा संकल्प' : 'How Every Grain Is Real & Verified'}
                </h2>
                <p className={`text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {lang === 'hi'
                    ? 'हम बिना किसी उपयोगकर्ता शुल्क के पारदर्शी रूप से कार्य करते हैं। आपका ज्ञान सीधे पटना (बिहार) में वास्तविक भोजन में परिवर्तित होता है।'
                    : 'CyberKarma is a 100% free non-profit educational initiative. Zero credit cards, zero donor fees. Learn how your answers convert into verified ground feeding.'}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href="/impact"
                  className="px-5 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs font-mono transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 hover:scale-105"
                >
                  <Camera size={14} />
                  <span>{lang === 'hi' ? '110+ ज़मीनी तस्वीरें देखें' : 'View 110+ Field Photos'}</span>
                </Link>
              </div>
            </div>

            {/* 4 Pillars of Trust Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                {
                  icon: '🛡️',
                  titleEn: '100% Free Forever',
                  titleHi: 'हमेशा 100% निःशुल्क',
                  descEn: 'Zero donor fees, zero credit cards. We never ask for payments. Philanthropy through knowledge.',
                  descHi: 'कोई शुल्क या क्रेडिट कार्ड नहीं। केवल प्रश्न हल करके बेसहारा पशुओं का पेट भरें।'
                },
                {
                  icon: '📸',
                  titleEn: 'Daily Field Timestamps',
                  titleHi: 'दैनिक ज़मीनी प्रमाण',
                  descEn: 'Every meal drive in Patna, Bihar is documented with date-stamped photos and GPS corridors.',
                  descHi: 'पटना मंडल में प्रत्येक भोजन सेवा की वास्तविक तस्वीरें और दिनांक तुरंत अपलोड होते हैं।'
                },
                {
                  icon: '🔍',
                  titleEn: 'Open Source Audit',
                  titleHi: 'खुला और पारदर्शी ऑडिट',
                  descEn: 'All image assets and commit history are publicly inspectable on GitHub repository records.',
                  descHi: 'सभी तस्वीरें और कोड गिटहब (GitHub) पर सार्वजनिक रूप से ऑडिट के लिए उपलब्ध हैं।'
                },
                {
                  icon: '🐕',
                  titleEn: 'Nutritious Safe Food',
                  titleHi: 'सुरक्षित एवं पौष्टिक आहार',
                  descEn: 'Staple boiled rice, boiled eggs & fresh broth. Non-splintering diet following AWBI guidelines.',
                  descHi: 'उबले चावल और अंडे का सुरक्षित आहार, जो पशु कल्याण बोर्ड के मानकों के अनुरूप है।'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all ${
                    isDark ? 'bg-slate-950/60 border-white/10 hover:border-emerald-500/30' : 'bg-slate-50 border-slate-200 hover:border-emerald-400'
                  }`}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-sm font-bold font-title mb-1.5 text-emerald-400">
                    {lang === 'hi' ? item.titleHi : item.titleEn}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {lang === 'hi' ? item.descHi : item.descEn}
                  </p>
                </div>
              ))}
            </div>

            {/* 4-Step Transparent Conversion Flowchart */}
            <div className={`p-6 rounded-3xl border mb-8 ${isDark ? 'bg-black/40 border-white/10' : 'bg-slate-100/80 border-slate-200'}`}>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>{lang === 'hi' ? 'पारदर्शी रूपांतरण प्रक्रिया: ज्ञान से भोजन तक' : 'Transparent Conversion Process: From Quiz to Food Bowl'}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                {[
                  { step: '1', titleEn: 'You Solve Quizzes', titleHi: 'आप प्रश्न हल करते हैं', textEn: 'Answer trivia to generate 10 grains of rice per correct answer.', textHi: 'प्रत्येक सही उत्तर पर 10 दाने अनाज अर्जित होते हैं।' },
                  { step: '2', titleEn: 'Sponsors Fund Grains', titleHi: 'प्रायोजक दाने फंड करते हैं', textEn: 'Privacy-friendly ethical sponsors and founder pledges fund the rice.', textHi: 'नैतिक विज्ञापनदाता और संस्थापक सीधे भोजन का खर्च उठाते हैं।' },
                  { step: '3', titleEn: 'Bulk Local Procurement', titleHi: 'स्थानीय अनाज खरीद', textEn: 'Rice, eggs, clean water bowls purchased wholesale in Patna.', textHi: 'पटना के स्थानीय बाजारों से थोक में ताज़ा अनाज व अंडे खरीदे जाते हैं।' },
                  { step: '4', titleEn: 'Daily Field Feeding', titleHi: 'दैनिक भोजन वितरण', textEn: 'Served to street packs in Patna corridors with photo timestamps.', textHi: 'सड़क के श्वानों को दैनिक रूप से खिलाकर तस्वीरें अपलोड की जाती हैं।' },
                ].map((st, i) => (
                  <div key={i} className={`p-4 rounded-2xl border relative ${isDark ? 'bg-slate-900/60 border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
                    <div className="w-7 h-7 rounded-xl bg-emerald-500 text-slate-950 font-black font-mono text-xs flex items-center justify-center mb-2 shadow-md">
                      {st.step}
                    </div>
                    <h4 className="text-xs font-bold font-title mb-1 text-white">
                      {lang === 'hi' ? st.titleHi : st.titleEn}
                    </h4>
                    <p className={`text-[11px] leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {lang === 'hi' ? st.textHi : st.textEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder's Signed Commitment Note & Open Volunteer Invitation */}
            <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-6 ${
              isDark ? 'bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-teal-950/40 border-emerald-500/30' : 'bg-emerald-50/90 border-emerald-200'
            }`}>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-slate-950 flex items-center justify-center text-2xl font-black font-title shadow-lg shrink-0">
                  AJ
                </div>
                <div className="space-y-1 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold font-title text-white">Aditya (Founder & Ground Volunteer)</span>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      ✓ Verified Organizer
                    </span>
                  </div>
                  <p className={`text-xs leading-relaxed italic ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    "{lang === 'hi' 
                      ? 'मैंने साइबरकर्म की शुरुआत इस विश्वास के साथ की थी कि ज्ञान से सीधे वास्तविक भूख मिटनी चाहिए। इस वेबसाइट पर दिखने वाला हर दाना पटना (बिहार) में बेसहारा श्वानों को मिलने वाले गर्म भोजन में तब्दील होता है। यदि आप पटना में हैं, तो आप हमारे साथ फील्ड ड्राइव में शामिल होने के लिए सादर आमंत्रित हैं!' 
                      : 'I started CyberKarma with a simple conviction: digital curiosity should directly heal real-world hunger. Every grain shown on this scoreboard is backed by physical bowls of warm food served to street companions across Patna, Bihar. You are warmly invited to join our weekend feeding rounds!'}"
                  </p>
                  <div className="text-[11px] font-mono text-emerald-400 pt-1">
                    📧 adityasec32@gmail.com • 📍 Patna Division, Bihar 800001
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
                <a
                  href="mailto:adityasec32@gmail.com?subject=Join%20CyberKarma%20Feeding%20Drive%20in%20Patna"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-mono font-bold border border-white/15 transition-all text-center"
                >
                  🤝 {lang === 'hi' ? 'वॉलंटियर के रूप में जुड़ें' : 'Join as Volunteer'}
                </a>
                <Link
                  href="/impact"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-mono font-black transition-all shadow-md text-center"
                >
                  📸 {lang === 'hi' ? 'गैलरी व रसीदें' : 'Gallery & Proof'}
                </Link>
              </div>
            </div>

          </div>
        </TiltWrapper>
      </section>

      {/* 3D SEO FAQ & How It Works Educational Section */}
      <section className="w-full max-w-6xl mx-auto px-4 mt-12 mb-4 relative z-10">
        <TiltWrapper tiltDeg={2} glare={true} className="w-full">
          <div className={`p-8 sm:p-10 rounded-[36px] border shadow-2xl backdrop-blur-2xl transition-all ${isDark ? 'bg-gradient-to-br from-slate-900/90 via-slate-950/80 to-black/90 border-emerald-500/20' : 'bg-white/95 border-slate-200 shadow-xl'}`}>
            
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold mb-3">
                <span>💡 {t('faqBadge')}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-title tracking-tight mb-2">
                {t('faqTitle')}
              </h2>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {lang === 'hi' ? 'जानें कि आपका ज्ञान पटना में बेसहारा जानवरों के भोजन में कैसे बदलता है।' : 'Learn how your knowledge converts directly into warm meals for stray animals in Patna.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  q: t('faqQ1'),
                  a: t('faqA1')
                },
                {
                  q: t('faqQ2'),
                  a: t('faqA2')
                },
                {
                  q: t('faqQ3'),
                  a: t('faqA3')
                },
                {
                  q: lang === 'hi' ? "एआई क्विज जनरेटर में कौन से विषय शामिल हैं?" : "What subjects are included in the AI Quiz generator?",
                  a: lang === 'hi' ? "आप साइबर सुरक्षा, शून्य विश्वास (Zero Trust), क्वांटम भौतिकी, प्राचीन इतिहास, अंतरिक्ष और किसी भी मनपसंद विषय पर असीमित प्रश्नोत्तरी बना सकते हैं।" : "You can generate unlimited quizzes on Cyber Warfare, Zero Trust, Post-Quantum Cryptography, Space Astrophysics, Nature, and any custom educational topic."
                }
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all ${isDark ? 'bg-slate-950/60 border-white/10 hover:border-emerald-500/30' : 'bg-slate-50 border-slate-200 hover:border-emerald-400'}`}
                >
                  <h3 className="text-sm font-bold text-emerald-400 font-title mb-2 flex items-start gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 shrink-0">Q{idx + 1}</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/impact"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-rose-400 hover:text-rose-300 underline"
              >
                <span>{lang === 'hi' ? 'समर्पित दान रिकॉर्ड पेज देखें (110+ तस्वीरें) →' : 'Explore Full Patna Feeding Proof Ledger (110+ Photos) →'}</span>
              </Link>
            </div>

          </div>
        </TiltWrapper>
      </section>

      {/* Professional Ecosystem & Community Footer */}
      <footer className={`w-full border-t py-10 mt-12 text-xs font-mono transition-colors relative z-10 ${isDark ? 'border-white/10 bg-slate-950/40 text-slate-400' : 'border-slate-200 bg-white/40 text-slate-600'}`}>
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          {/* Tasteful Technology Sponsor Attribution Card */}
          <div className={`p-5 rounded-2xl border backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 ${isDark ? 'bg-slate-900/60 border-white/10 text-white' : 'bg-white/80 border-slate-200 text-slate-900 shadow-sm'}`}>
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-xl">
                🐋
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">{lang === 'hi' ? 'प्रौद्योगिकी प्रायोजक' : 'Technology Sponsor'}</span>
                  <span className="text-xs font-bold font-title">Orca6™ by Jumpstreet</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {lang === 'hi' ? 'साइबरकर्म पशु कल्याण अभियान के लिए उच्च गति बुनियादी ढांचा और होस्टिंग सहायता।' : 'Supporting infrastructure & high-speed hosting for CyberKarma animal welfare drives.'}
                </p>
              </div>
            </div>
            <Link
              href="https://jumpstreet.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 transition-all flex items-center gap-1.5 shrink-0"
            >
              <span>{lang === 'hi' ? 'जंपस्ट्रीट देखें' : 'Explore Jumpstreet'}</span>
              <ExternalLink size={12} />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-[11px]">
            <p>{lang === 'hi' ? '© 2026 साइबरकर्म • 100% गैर-लाभकारी पारदर्शी क्विज़ इंजन' : '© 2026 CyberKarma • 100% Non-Profit Philanthropic Trivia Engine'}</p>
            <div className="flex items-center gap-4">
              <Link href="/impact" className="text-rose-400 hover:underline">🐾 {lang === 'hi' ? 'फील्ड प्रमाण (110+ फोटो)' : 'Field Proof (110+ Photos)'}</Link>
              <a href="https://adityasec32.systems" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1 hover:underline">
                <span>🛡️ AdityaSec Engineering</span>
                <ExternalLink size={10} />
              </a>
              <a href="https://jumpstreet.tech" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1 hover:underline">
                <span>Jumpstreet</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Fullscreen Question Visual Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightboxImage(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] w-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black flex flex-col"
            >
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                <button
                  onClick={() => setActiveLightboxImage(null)}
                  className="w-10 h-10 rounded-full bg-black/80 hover:bg-black border border-white/30 text-white flex items-center justify-center text-lg font-bold transition-all cursor-pointer shadow-lg hover:scale-105"
                  title="Close"
                >
                  ✕
                </button>
              </div>

              <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-4 bg-black/40">
                <img
                  src={activeLightboxImage}
                  alt="High Resolution Visual Preview"
                  className="w-full h-auto max-h-[75vh] object-contain rounded-2xl"
                />
              </div>

              <div className="p-4 sm:p-5 bg-slate-950/95 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs">🐾</span>
                  <span className="font-title font-bold text-white text-sm">
                    {lang === 'hi' ? 'साइबरकर्म विज़ुअल चित्रण एवं फील्ड प्रमाण' : 'CyberKarma High-Definition Visual Showcase'}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-emerald-400 font-bold hidden sm:inline">
                    🌾 {lang === 'hi' ? 'प्रत्येक सही उत्तर से 10 दाने दान' : '10 Grains Donated Per Correct Answer'}
                  </span>
                  <button
                    onClick={() => setActiveLightboxImage(null)}
                    className="px-4 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold transition-all cursor-pointer"
                  >
                    {lang === 'hi' ? 'बंद करें (Esc)' : 'Close Preview'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global 10-Language Selection Modal */}
      <AnimatePresence>
        {showLangModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLangModal(false)}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl bg-slate-950 p-6 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <h3 className="text-lg font-black font-title text-white">
                      {t('switchLang')}
                    </h3>
                    <p className="text-xs text-slate-400">
                      Select your preferred language (10 available)
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowLangModal(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2.5 max-h-96 overflow-y-auto pr-1">
                {LANGUAGES_LIST.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => handleSelectLanguage(item.code)}
                    className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                      lang === item.code
                        ? 'bg-purple-600 border-purple-400 text-white shadow-lg shadow-purple-500/30'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <span className="text-2xl">{item.flag}</span>
                    <div>
                      <div className="text-xs font-bold font-title">{item.label}</div>
                      <div className="text-[11px] font-mono opacity-75">{item.native}</div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => setShowLangModal(false)}
                  className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono font-bold text-slate-300 cursor-pointer"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Sticky Mobile Bottom Floating Action HUD (Thumb-Friendly Mobile Ergonomics) */}
      <aside aria-label="Mobile Game HUD" className="fixed bottom-3 left-3 right-3 z-40 sm:hidden">
        <div className={`p-2.5 px-3.5 rounded-2xl border backdrop-blur-2xl shadow-2xl flex items-center justify-between gap-2 transition-all ${
          isDark 
            ? 'bg-slate-950/95 border-emerald-500/30 text-white shadow-[0_8px_32px_rgba(0,0,0,0.6)]' 
            : 'bg-white/95 border-emerald-300 text-slate-900 shadow-xl'
        }`}>
          {/* Live Grains Counter */}
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="text-base animate-bounce">🌾</span>
            <div className="flex flex-col">
              <span className="text-xs font-black font-title tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                {score.toLocaleString()}
              </span>
              <span className="text-[9px] font-mono text-slate-400 -mt-0.5 leading-none">
                {Math.floor(score / 50)} {lang === 'hi' ? 'भोजन' : 'Meals'}
              </span>
            </div>
          </div>

          {/* Combo Streak Multiplier Pill */}
          <div className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-[10px] font-mono font-black border transition-all ${
            streak >= 10
              ? 'bg-yellow-500/20 border-yellow-400 text-yellow-300 animate-pulse'
              : streak >= 5
                ? 'bg-purple-500/20 border-purple-400 text-purple-300'
                : streak >= 3
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                  : isDark ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
          }`}>
            <Flame size={12} className={streak >= 3 ? 'text-amber-400 animate-bounce' : 'opacity-40'} />
            <span>{streak}x {streak >= 10 ? '(3X)' : streak >= 5 ? '(2X)' : streak >= 3 ? '(1.5X)' : ''}</span>
          </div>

          {/* Quick Patna Meal Progress Mini-Bar */}
          <div className="flex flex-col gap-0.5 w-16">
            <div className="flex justify-between text-[8px] font-mono font-bold text-slate-400">
              <span>🐕</span>
              <span>{score % 50}/50</span>
            </div>
            <div className="w-full h-1.5 rounded-full overflow-hidden bg-black/40 border border-white/10">
              <div 
                className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transition-all duration-300"
                style={{ width: `${((score % 50) / 50) * 100}%` }}
              />
            </div>
          </div>

          {/* Quick Actions (Crate & SFX) */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={handleOpenLuckyCrate}
              className="p-1.5 px-2 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 text-[10px] font-black font-mono shadow-md active:scale-95 transition-transform"
              title="Open Daily Karma Crate"
            >
              🎁
            </button>
            <button
              onClick={() => {
                const nextM = !isAudioMuted;
                setIsAudioMuted(nextM);
                addToast(nextM ? '🔇 Audio Muted' : '🔊 Chimes Active!', 'info');
              }}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs transition-colors"
              title="Toggle Audio"
            >
              {isAudioMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
            </button>
          </div>
        </div>
      </aside>

      {/* Street Meal Unlocked Milestone Celebration Modal */}
      <AnimatePresence>
        {showMealCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
            onClick={() => setShowMealCelebration(false)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-md w-full p-6 sm:p-8 rounded-3xl border border-emerald-400/40 bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white shadow-2xl text-center space-y-5 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 animate-pulse" />

              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-500 text-slate-950 flex items-center justify-center text-4xl shadow-xl shadow-emerald-500/30 mx-auto animate-bounce">
                🐕🍲
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
                  🎉 {lang === 'hi' ? 'जीवन रक्षक उपलब्धि!' : 'Life-Saving Milestone!'}
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-title">
                  {lang === 'hi' ? '1 नया गर्म भोजन अनलॉक!' : '1 Full Street Meal Funded!'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {lang === 'hi' 
                    ? <>आपने 50 दाने पूरे कर लिए हैं! पटना के बेसहारा श्वानों के लिए <strong>1 पौष्टिक गर्म भोजन</strong> सुरक्षित हो गया है।</>
                    : <>You have accumulated 50 grains of rice! <strong>1 full bowl of nutritious warm food</strong> is now funded for rescue dogs in Patna, Bihar.</>}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-around text-xs font-mono">
                <div>
                  <div className="text-[10px] text-slate-400">{lang === 'hi' ? 'कुल दान' : 'Total Donated'}</div>
                  <div className="text-base font-bold text-emerald-400">🌾 {score.toLocaleString()}</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <div className="text-[10px] text-slate-400">{lang === 'hi' ? 'कुल भोजन' : 'Total Meals'}</div>
                  <div className="text-base font-bold text-teal-400">🍲 {Math.floor(score / 50)}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={() => setShowMealCelebration(false)}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:brightness-110 text-slate-950 font-black font-mono text-xs shadow-lg transition-all cursor-pointer hover:scale-[1.02] active:scale-98"
                >
                  {lang === 'hi' ? 'प्रश्नोत्तरी जारी रखें 🐾' : 'Keep Playing & Feeding 🐾'}
                </button>
                <Link
                  href="/impact"
                  onClick={() => setShowMealCelebration(false)}
                  className="w-full py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-slate-200 font-bold font-mono text-xs border border-white/15 transition-all text-center"
                >
                  {lang === 'hi' ? 'फील्ड प्रमाण देखें 📸' : 'View Field Proof 📸'}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
