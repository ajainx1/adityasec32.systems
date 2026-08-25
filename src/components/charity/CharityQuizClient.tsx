"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, LogOut, Sun, Moon, Volume2, VolumeX, Lightbulb, Share2, 
  Award, Heart, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, 
  Globe, Flame, ExternalLink, HelpCircle, MessageSquarePlus, RefreshCw,
  Compass, Lock, Zap, BookOpen, Atom, Calculator, MapPin
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { quizData, CategoryKey, Difficulty, Question, CategoryData } from './quizData';
import { quizDataHindi, DAILY_FACTS_HI } from './quizDataHindi';
import { Language, LANGUAGES_LIST, getTranslation } from './i18n';
import { getQuizDataForLanguage, shuffleOptions } from './quizDataMulti';
import { useToast } from '../js/ToastContext';
import Link from 'next/link';
import TiltWrapper from '@/components/3d/TiltWrapper';
import SuggestionModal from './SuggestionModal';
import LiveImpactCarousel from './LiveImpactCarousel';
import WelcomeOnboardingModal from './WelcomeOnboardingModal';

// Initialize Supabase client
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xkhgccximcrsdpdlskys.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhraGdjY3hpbWNyc2RwZGxza3lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2NjQ0OTksImV4cCI6MjA5OTI0MDQ5OX0.R9t0QNG0voJPyxhZkXO2hQtD4_Gr2xdnGyI8AlTOk5g';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

interface CategoryConfig {
  id: CategoryKey | 'random' | 'custom-ai';
  icon: string;
  titleEn: string;
  titleHi: string;
  subtitleEn: string;
  subtitleHi: string;
}

const CATEGORIES: CategoryConfig[] = [
  { id: 'animals', icon: '🐾', titleEn: 'Animals & Rescue', titleHi: 'पशु संरक्षण', subtitleEn: 'Canine welfare & wildlife', subtitleHi: 'श्वान सेवा व जीव विज्ञान' },
  { id: 'cybersecurity', icon: '🛡️', titleEn: 'Cybersecurity', titleHi: 'साइबर सुरक्षा', subtitleEn: 'Ethical hacking & defense', subtitleHi: 'नेटवर्क व सुरक्षा' },
  { id: 'space', icon: '🚀', titleEn: 'Space & Cosmos', titleHi: 'अंतरिक्ष', subtitleEn: 'Astronomy & universe', subtitleHi: 'खगोलिकी व ब्रह्मांड' },
  { id: 'science', icon: '🔬', titleEn: 'Natural Science', titleHi: 'विज्ञान', subtitleEn: 'Physics & biology', subtitleHi: 'भौतिकी व रसायन' },
  { id: 'math', icon: '🧮', titleEn: 'Mathematics', titleHi: 'गणित', subtitleEn: 'Logic & number theory', subtitleHi: 'तर्क व अंकगणित' },
  { id: 'geography', icon: '🌍', titleEn: 'Geography', titleHi: 'भूगोल', subtitleEn: 'World maps & capitals', subtitleHi: 'विश्व राजधानियाँ व सागर' },
  { id: 'vocab', icon: '📖', titleEn: 'Vocabulary', titleHi: 'शब्दावली', subtitleEn: 'Linguistics & words', subtitleHi: 'शब्द शक्ति व अर्थ' },
  { id: 'gk', icon: '💡', titleEn: 'General Knowledge', titleHi: 'सामान्य ज्ञान', subtitleEn: 'History & discoveries', subtitleHi: 'इतिहास व आविष्कार' },
  { id: 'random', icon: '🎲', titleEn: 'Random Mix', titleHi: 'रैंडम मिक्स', subtitleEn: 'All topics shuffled', subtitleHi: 'सभी विषयों का मिश्रण' },
  { id: 'custom-ai', icon: '🤖', titleEn: 'AI Custom Quiz', titleHi: 'AI कस्टम क्विज़', subtitleEn: 'Any topic of curiosity', subtitleHi: 'मनपसंद विषय जनरेटर' },
];

const CURATED_AI_TOPICS = [
  { topic: 'Quantum Computing & Qubits', topicHi: 'क्वांटम कंप्यूटिंग', icon: '⚛️' },
  { topic: 'Ancient Rome & Gladiators', topicHi: 'प्राचीन रोम साम्राज्य', icon: '🏛️' },
  { topic: 'Neuroscience & Human Memory', topicHi: 'मस्तिष्क एवं याददाश्त', icon: '🧠' },
  { topic: 'Apollo Moon Missions', topicHi: 'अपोलो मून मिशन', icon: '🚀' },
  { topic: 'Canine Psychology & Empathy', topicHi: 'श्वान मनोविज्ञान', icon: '🐕' },
  { topic: 'World War II Turning Points', topicHi: 'द्वितीय विश्व युद्ध', icon: '⚔️' },
  { topic: 'Deep Ocean Bioluminescence', topicHi: 'गहरे समुद्र के जीव', icon: '🌊' },
  { topic: 'Renaissance Art & Inventions', topicHi: 'पुनर्जागरण काल के आविष्कार', icon: '🎨' },
];

/* ── Rotating Hero: "From Patna → to the World" ── */
const ROTATING_LOCATIONS_EN = [
  { text: 'Patna.', emoji: '📍' },
  { text: 'Bihar.', emoji: '🏛️' },
  { text: 'India.', emoji: '🇮🇳' },
  { text: 'the World.', emoji: '🌍' },
];
const ROTATING_LOCATIONS_HI = [
  { text: 'पटना।', emoji: '📍' },
  { text: 'बिहार।', emoji: '🏛️' },
  { text: 'भारत।', emoji: '🇮🇳' },
  { text: 'विश्व।', emoji: '🌍' },
];

function RotatingHero({ lang, isDark }: { lang: Language; isDark: boolean }) {
  const [locIndex, setLocIndex] = useState(0);
  const locations = lang === 'hi' ? ROTATING_LOCATIONS_HI : ROTATING_LOCATIONS_EN;

  useEffect(() => {
    const timer = setInterval(() => {
      setLocIndex(prev => (prev + 1) % locations.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [locations.length]);

  const current = locations[locIndex];

  return (
    <section className="text-center max-w-2xl mx-auto space-y-3 py-2">
      <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-title leading-snug">
        {lang === 'hi' ? (
          <>
            प्रश्नों के उत्तर दें, जीवों को भोजन कराएं
            <br />
            <span className="inline-flex items-center gap-2">
              <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                —
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={locIndex}
                  initial={{ y: 20, opacity: 0, filter: 'blur(4px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -20, opacity: 0, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-flex items-center gap-1.5 bg-clip-text text-transparent ${
                    isDark 
                      ? 'bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400' 
                      : 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600'
                  }`}
                >
                  <span className="text-lg sm:text-2xl not-italic" style={{ WebkitTextFillColor: 'initial' }}>{current.emoji}</span>
                  {current.text}
                </motion.span>
              </AnimatePresence>
            </span>
          </>
        ) : (
          <>
            Play free trivia. Feed rescue dogs
            <br />
            <span className="inline-flex items-center gap-2">
              <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>in</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={locIndex}
                  initial={{ y: 20, opacity: 0, filter: 'blur(4px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -20, opacity: 0, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-flex items-center gap-1.5 bg-clip-text text-transparent ${
                    isDark 
                      ? 'bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400' 
                      : 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600'
                  }`}
                >
                  <span className="text-lg sm:text-2xl not-italic" style={{ WebkitTextFillColor: 'initial' }}>{current.emoji}</span>
                  {current.text}
                </motion.span>
              </AnimatePresence>
            </span>
          </>
        )}
      </h1>
      <p className={`text-sm leading-relaxed max-w-lg mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
        {lang === 'hi'
          ? 'प्रत्येक सही उत्तर पर 10 दाने अनाज दान होते हैं। 100% सत्यापित श्वान सेवा एवं प्राथमिक चिकित्सा।'
          : 'Every correct answer donates 10 grains of rice to fund nutritious meals and veterinary first-aid.'}
      </p>
    </section>
  );
}

export default function CharityQuizClient() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<Language>('en');
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // User Auth State
  const [user, setUser] = useState<{ email: string; name: string; avatar: string } | null>(null);

  // Quiz Gameplay State
  const [category, setCategory] = useState<CategoryKey | 'random' | 'custom-ai'>('animals');
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner');
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [dailyStreak, setDailyStreak] = useState(0);
  const [streakShields, setStreakShields] = useState(0);
  const [lastPlayedDate, setLastPlayedDate] = useState<string>('');
  const [feedback, setFeedback] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);
  const [showHint, setShowHint] = useState(false);

  // Modals & Dialogs
  const [showSuggestionModal, setShowSuggestionModal] = useState(false);
  const [showOnboardingModal, setShowOnboardingModal] = useState(false);
  const [showAIModal, setShowAIModal] = useState(false);
  const [showAICompletion, setShowAICompletion] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);

  // Custom AI Quiz Generator State
  const [aiTopic, setAiTopic] = useState('');
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [aiQuestions, setAiQuestions] = useState<Question[]>([]);
  const [aiIndex, setAiIndex] = useState(0);
  const [aiCorrectCount, setAiCorrectCount] = useState(0);

  // Question Memory Buffer to avoid repeats
  const questionHistoryRef = useRef<string[]>([]);
  const currentQuestionRef = useRef<Question | null>(null);

  const { addToast } = useToast();
  const t = (key: any) => getTranslation(lang, key);

  // Initialize from LocalStorage
  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('cyberkarma_lang') as Language;
    if (savedLang && LANGUAGES_LIST.some(l => l.code === savedLang)) {
      setLang(savedLang);
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

    const storedScore = parseInt(localStorage.getItem('charityRiceScore') || '0', 10);
    setScore(storedScore);
    const storedStreak = parseInt(localStorage.getItem('charityQuizStreak') || '0', 10);
    setDailyStreak(storedStreak);
    const storedShields = parseInt(localStorage.getItem('charityQuizShields') || '0', 10);
    setStreakShields(storedShields);

    const hasOnboarded = localStorage.getItem('cyberkarma_onboarded');
    if (!hasOnboarded) {
      setTimeout(() => setShowOnboardingModal(true), 600);
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.body.classList.remove('light-mode');
      document.documentElement.classList.add('dark');
      localStorage.setItem('jumpstreet_theme', 'dark');
    } else {
      document.body.classList.add('light-mode');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('jumpstreet_theme', 'light');
    }
  };

  const playChime = (isCorrect: boolean) => {
    if (isAudioMuted || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (isCorrect) {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.2); // G5
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      } else {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(311.13, ctx.currentTime); // Eb4
        osc.frequency.exponentialRampToValueAtTime(293.66, ctx.currentTime + 0.15); // D4
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      }
    } catch (e) {}
  };

  const saveScore = (newScore: number) => {
    setScore(newScore);
    localStorage.setItem('charityRiceScore', String(newScore));
    if (user?.email) {
      localStorage.setItem(`charityRiceScore_${user.email}`, String(newScore));
    }
  };

  const handleSelectLanguage = (targetLang: Language) => {
    setLang(targetLang);
    localStorage.setItem('cyberkarma_lang', targetLang);
    setShowLangDropdown(false);
    loadNextQuestionForCategory(category, targetLang);
  };

  const loadNextQuestionForCategory = useCallback((catKey: typeof category, currentLang: Language) => {
    if (catKey === 'custom-ai') return;

    let targetKey: CategoryKey = catKey === 'random' 
      ? (['animals', 'cybersecurity', 'space', 'science', 'math', 'geography', 'vocab', 'gk'][Math.floor(Math.random() * 8)] as CategoryKey)
      : (catKey as CategoryKey);

    const bank = getQuizDataForLanguage(currentLang);
    const allQ = bank[targetKey]?.questions || quizData[targetKey]?.questions || [];
    if (allQ.length === 0) return;

    const filteredQ = allQ.filter(q => q.difficulty === difficulty);
    let pool = filteredQ.filter(q => !questionHistoryRef.current.includes(q.question));

    if (pool.length === 0) {
      pool = allQ.filter(q => !questionHistoryRef.current.includes(q.question));
    }
    if (pool.length === 0) {
      pool = allQ;
      questionHistoryRef.current = [];
    }

    if (pool.length > 1 && currentQuestionRef.current) {
      pool = pool.filter(q => q.question !== currentQuestionRef.current?.question);
    }

    const selected = shuffleOptions(pool[Math.floor(Math.random() * pool.length)]);
    setCurrentQuestion(selected);
    currentQuestionRef.current = selected;

    questionHistoryRef.current.push(selected.question);
    if (questionHistoryRef.current.length > 50) {
      questionHistoryRef.current.shift();
    }

    setIsAnswered(false);
    setSelectedAnswer(null);
    setFeedback(null);
    setShowHint(false);
  }, [difficulty]);

  useEffect(() => {
    if (category !== 'custom-ai') {
      loadNextQuestionForCategory(category, lang);
    }
  }, [category, difficulty, lang, loadNextQuestionForCategory]);

  const handleAnswer = (index: number) => {
    if (isAnswered || !currentQuestion) return;

    setIsAnswered(true);
    setSelectedAnswer(index);

    const isCorrect = index === currentQuestion.answer;
    playChime(isCorrect);

    if (isCorrect) {
      const newScore = score + 10;
      saveScore(newScore);
      const newStreak = streak + 1;
      setStreak(newStreak);

      if (category === 'custom-ai') {
        setAiCorrectCount(prev => prev + 1);
      }

      setFeedback({
        text: lang === 'hi' ? '✓ सही उत्तर! +10 दाने दान किए गए।' : '✓ Correct! +10 grains donated.',
        type: 'success'
      });
    } else {
      setStreak(0);
      setFeedback({
        text: lang === 'hi' ? 'गलत उत्तर। सही विकल्प नीचे देखें।' : 'Incorrect. See the correct answer below.',
        type: 'error'
      });
    }
  };

  const advanceToNextQuestion = () => {
    if (category === 'custom-ai') {
      if (aiIndex + 1 < aiQuestions.length) {
        const nextIdx = aiIndex + 1;
        setAiIndex(nextIdx);
        setCurrentQuestion(aiQuestions[nextIdx]);
        setIsAnswered(false);
        setSelectedAnswer(null);
        setFeedback(null);
        setShowHint(false);
      } else {
        setShowAICompletion(true);
      }
    } else {
      loadNextQuestionForCategory(category, lang);
    }
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (!isAnswered && currentQuestion) {
        if (e.key === '1' || e.key === 'a' || e.key === 'A') handleAnswer(0);
        if (e.key === '2' || e.key === 'b' || e.key === 'B') handleAnswer(1);
        if (e.key === '3' || e.key === 'c' || e.key === 'C') handleAnswer(2);
        if (e.key === '4' || e.key === 'd' || e.key === 'D') handleAnswer(3);
        if (e.key === 'h' || e.key === 'H') setShowHint(true);
      } else if (isAnswered) {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          advanceToNextQuestion();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnswered, currentQuestion]);

  // Clean Fallback AI Quiz generator with realistic questions
  const generateCleanAIQuestions = (topicName: string): Question[] => {
    const clean = topicName.trim();
    return [
      createQ('beginner', `What fundamental principle or breakthrough defines "${clean}"?`, `Core theoretical insight and evidence-based observation`, `Unverified speculation without peer review`, `Complete reliance on obsolete legacy models`, `Arbitrary assumptions without experimental testing`, `Understanding the foundations of ${clean} creates actionable insight.`, `Disciplined empirical methodology forms the bedrock of advancements in ${clean}.`, 'Fundamentals'),
      createQ('intermediate', `In modern research and development, what is a primary challenge facing "${clean}"?`, `Scaling efficiency while maintaining rigor and integrity`, `Eliminating all peer review processes`, `Preventing any interdisciplinary collaboration`, `Halting technological modernization`, `Scale and precision require balanced systems.`, `Balancing performance, verification, and sustainable standards is critical when scaling ${clean}.`, 'Modern Challenges'),
      createQ('intermediate', `Which historical milestone or discovery fundamentally accelerated the trajectory of "${clean}"?`, `Rigorous empirical formulation and open publication of findings`, `Concealing technical documentation from researchers`, `Restricting education to single isolated institutions`, `Abandoning mathematical validation`, `Knowledge compounds through transparent publication.`, `Open scientific literature and reproducible benchmarks have consistently propelled breakthroughs in ${clean}.`, 'Milestones'),
      createQ('advanced', `How does cross-disciplinary synthesis with adjacent fields benefit the future of "${clean}"?`, `Unlocks novel problem-solving perspectives and hybrid innovations`, `Increases systemic errors without providing insights`, `Limits the scope of practical implementation`, `Slows progress by complicating definitions`, `Cross-pollination creates breakthrough ideas.`, `Integrating insights across scientific domains dismantles silos and yields robust solutions in ${clean}.`, 'Future Outlook'),
      createQ('beginner', `What best practice ensures accuracy and long-term trust when studying "${clean}"?`, `Continuous verification, transparent metrics, and peer review`, `Relying entirely on intuition without data`, `Deleting audit records immediately`, `Avoiding constructive criticism`, `Transparency guarantees credibility.`, `Reproducible benchmarks and peer feedback safeguard accuracy and trust across ${clean}.`, 'Best Practices')
    ];
  };

  function createQ(difficulty: Difficulty, question: string, correct: string, w1: string, w2: string, w3: string, hint: string, explanation: string, badge: string): Question {
    const options = [correct, w1, w2, w3];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return {
      difficulty,
      question,
      options,
      answer: options.indexOf(correct),
      hint,
      explanation,
      topicBadge: badge
    };
  }

  const handleLaunchAIQuiz = async (topicToUse?: string) => {
    const selectedTopic = (topicToUse || aiTopic).trim();
    if (!selectedTopic) {
      addToast(lang === 'hi' ? 'कृपया कोई विषय दर्ज करें' : 'Please enter a topic', 'error');
      return;
    }

    setIsGeneratingAI(true);
    setCategory('custom-ai');

    const promptText = `Generate 5 distinct, high-quality multiple choice trivia questions about "${selectedTopic}".
Return ONLY a valid JSON array of objects with keys: "question" (string), "options" (array of 4 distinct strings), "answer" (0-3 index of correct answer), "hint" (string), "explanation" (string).
Do NOT include markdown formatting or backticks.`;

    let generated: Question[] | null = null;
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || (typeof window !== 'undefined' ? localStorage.getItem('GEMINI_API_KEY') : '') || '';

    if (apiKey) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: promptText }] }],
            generationConfig: { responseMimeType: "application/json" }
          })
        });
        const data = await response.json();
        const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (rawText) {
          const parsed = JSON.parse(rawText);
          if (Array.isArray(parsed) && parsed.length > 0) {
            generated = parsed.map((item: any) => ({
              difficulty: 'intermediate',
              question: item.question,
              options: item.options,
              answer: typeof item.answer === 'number' ? item.answer : 0,
              hint: item.hint || 'Consider the core concepts of this subject.',
              explanation: item.explanation || 'Mastering this topic strengthens understanding.',
              topicBadge: selectedTopic
            }));
          }
        }
      } catch (err) {
        console.warn('AI API fallback engaged', err);
      }
    }

    if (!generated || generated.length === 0) {
      generated = generateCleanAIQuestions(selectedTopic);
    }

    setAiQuestions(generated);
    setAiIndex(0);
    setAiCorrectCount(0);
    setCurrentQuestion(generated[0]);
    setIsAnswered(false);
    setSelectedAnswer(null);
    setFeedback(null);
    setIsGeneratingAI(false);
    setShowAIModal(false);
    setShowAICompletion(false);
    addToast(lang === 'hi' ? `🤖 AI क्विज़ तैयार: ${selectedTopic}` : `🤖 AI Quiz Ready: ${selectedTopic}`, 'success');
  };

  const mealsFunded = Math.floor(score / 50);
  const progressToNextMeal = score % 50;

  if (!mounted) return null;

  return (
    <div className={`min-h-screen transition-colors duration-200 relative overflow-hidden ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* ── 3D Ambient Mesh Background ── */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Primary emerald orb — top-left drift */}
        <div 
          className={`absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] transition-opacity duration-1000 ${
            isDark ? 'bg-emerald-600/[0.07]' : 'bg-emerald-400/[0.08]'
          }`}
          style={{ animation: 'float-slow 25s ease-in-out infinite alternate' }}
        />
        {/* Cyan orb — center-right drift */}
        <div 
          className={`absolute top-1/3 -right-24 w-[420px] h-[420px] rounded-full blur-[110px] transition-opacity duration-1000 ${
            isDark ? 'bg-cyan-500/[0.05]' : 'bg-sky-400/[0.06]'
          }`}
          style={{ animation: 'float-slow 30s ease-in-out infinite alternate-reverse' }}
        />
        {/* Violet orb — bottom-left accent */}
        <div 
          className={`absolute -bottom-20 left-1/4 w-[380px] h-[380px] rounded-full blur-[100px] transition-opacity duration-1000 ${
            isDark ? 'bg-violet-600/[0.05]' : 'bg-purple-300/[0.06]'
          }`}
          style={{ animation: 'float-slow 22s ease-in-out 3s infinite alternate' }}
        />
        {/* Warm amber orb — bottom-right subtle warmth */}
        <div 
          className={`absolute bottom-1/4 -right-16 w-[300px] h-[300px] rounded-full blur-[90px] transition-opacity duration-1000 ${
            isDark ? 'bg-amber-500/[0.03]' : 'bg-orange-300/[0.04]'
          }`}
          style={{ animation: 'float-slow 28s ease-in-out 5s infinite alternate-reverse' }}
        />
        {/* Subtle grid overlay for 3D depth */}
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(2,6,23,0.8)_70%)]' 
            : 'bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(248,250,252,0.7)_70%)]'
        }`} />
      </div>

      {/* All page content sits above the ambient background */}
      <div className="relative z-10">
      
      {/* Sleek Minimalist Top Navigation */}
      <header className={`sticky top-0 z-40 px-4 sm:px-8 py-3.5 border-b backdrop-blur-xl transition-colors ${
        isDark ? 'bg-slate-950/80 border-slate-800/80 text-white' : 'bg-white/80 border-slate-200 text-slate-900'
      }`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo & Platform Name */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-sm transition-transform group-hover:scale-105">
              🐾
            </div>
            <div className="flex flex-col">
              <span className="font-title font-bold text-base tracking-tight flex items-center gap-1.5">
                <span>CyberKarma</span>
                <span className="text-[10px] font-mono font-medium px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Patna Rescue
                </span>
              </span>
            </div>
          </Link>

          {/* Center Stats Ribbon */}
          <div className="hidden sm:flex items-center gap-3 text-xs font-mono">
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${
              isDark ? 'bg-slate-900 border-slate-800 text-emerald-400' : 'bg-slate-100 border-slate-200 text-emerald-700 font-semibold'
            }`}>
              <span>🌾</span>
              <span><strong>{score.toLocaleString()}</strong> Grains</span>
            </div>

            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700 font-semibold'
            }`}>
              <span>🥣</span>
              <span><strong>{mealsFunded}</strong> Meals Funded</span>
            </div>

            {streak > 1 && (
              <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
                <Flame size={13} className="fill-amber-500" />
                <span>{streak} in a row</span>
              </div>
            )}
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            <Link
              href="/impact"
              className={`hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>Field Proof (110+)</span>
              <ExternalLink size={12} />
            </Link>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-mono font-medium border transition-colors cursor-pointer ${
                  isDark ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
                title="Change Language"
              >
                <Globe size={13} />
                <span className="uppercase">{lang}</span>
              </button>

              {showLangDropdown && (
                <div className={`absolute right-0 top-full mt-2 w-48 rounded-2xl border shadow-xl p-1.5 z-50 ${
                  isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  {LANGUAGES_LIST.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => handleSelectLanguage(item.code)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer ${
                        lang === item.code 
                          ? 'bg-emerald-600 text-white font-bold' 
                          : isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{item.flag}</span>
                        <span>{item.label}</span>
                      </span>
                      <span className="text-[11px] opacity-75 font-mono">{item.native}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sound Toggle */}
            <button
              onClick={() => setIsAudioMuted(!isAudioMuted)}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'
              }`}
              aria-label="Toggle Sound"
              title={isAudioMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isAudioMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            {/* User Account / Sign In */}
            {user ? (
              <div className="flex items-center gap-2 pl-1">
                <img src={user.avatar} alt="Avatar" className="w-6 h-6 rounded-full border border-emerald-500/40" />
                <button onClick={() => setUser(null)} className="text-slate-400 hover:text-rose-400 text-xs cursor-pointer"><LogOut size={13} /></button>
              </div>
            ) : (
              <button
                onClick={() => setShowOnboardingModal(true)}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-sm transition-colors cursor-pointer"
              >
                Sign In
              </button>
            )}

          </div>
        </div>
      </header>

      {/* Main Body Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        
        {/* Crisp Inspiring Header with Rotating Location */}
        <RotatingHero lang={lang} isDark={isDark} />

        {/* Clean Category Navigation Deck */}
        <section className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              {lang === 'hi' ? 'विषय चुनें:' : 'Select Category:'}
            </h2>

            {/* Difficulty Pills */}
            {category !== 'custom-ai' && (
              <div className={`inline-flex p-1 rounded-xl border text-xs font-mono ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
              }`}>
                {(['beginner', 'intermediate', 'advanced'] as Difficulty[]).map(d => (
                  <button
                    key={d}
                    onClick={() => setDifficulty(d)}
                    className={`px-2.5 py-1 rounded-lg capitalize transition-colors cursor-pointer ${
                      difficulty === d
                        ? 'bg-emerald-600 text-white font-bold shadow-sm'
                        : isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {d === 'beginner' ? 'Easy' : d === 'intermediate' ? 'Medium' : 'Hard'}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Category Tabs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {CATEGORIES.map(cat => {
              const isSelected = category === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    if (cat.id === 'custom-ai') {
                      setShowAIModal(true);
                    } else {
                      setCategory(cat.id);
                    }
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                    isSelected
                      ? 'bg-emerald-600/10 border-emerald-500 text-emerald-400 shadow-sm font-semibold'
                      : isDark
                        ? 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <span className="text-xl shrink-0">{cat.icon}</span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold truncate">
                      {lang === 'hi' ? cat.titleHi : cat.titleEn}
                    </div>
                    <div className="text-[10px] opacity-60 truncate font-mono">
                      {lang === 'hi' ? cat.subtitleHi : cat.subtitleEn}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Dynamic Main Workspace: Left Quiz Area + Right Impact Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Active Question Experience */}
          <div className="lg:col-span-8 space-y-6">
            
            {showAICompletion ? (
              <div className={`p-8 rounded-3xl border text-center space-y-4 ${
                isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mx-auto">
                  🎉
                </div>
                <h3 className="text-xl font-bold font-title">AI Quiz Completed</h3>
                <p className="text-sm text-slate-400 max-w-md mx-auto">
                  You answered {aiCorrectCount} of {aiQuestions.length} questions correctly on <strong>{aiTopic}</strong>, generating <strong>{aiCorrectCount * 10} grains</strong> of rice!
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <button
                    onClick={() => handleLaunchAIQuiz(aiTopic)}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors cursor-pointer"
                  >
                    Play 5 More on "{aiTopic}"
                  </button>
                  <button
                    onClick={() => setShowAIModal(true)}
                    className="px-5 py-2.5 rounded-xl border border-slate-700 hover:border-slate-600 text-slate-300 text-xs font-medium transition-colors cursor-pointer"
                  >
                    Choose New Topic
                  </button>
                </div>
              </div>
            ) : currentQuestion ? (
              <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 transition-all ${
                isDark ? 'bg-slate-900/90 border-slate-800/90 shadow-xl' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                
                {/* Question Metadata Header */}
                <div className="flex items-center justify-between gap-2 border-b pb-4 border-slate-800/40">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {currentQuestion.topicBadge || (category === 'custom-ai' ? aiTopic : CATEGORIES.find(c => c.id === category)?.titleEn)}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      • {currentQuestion.difficulty ? currentQuestion.difficulty.toUpperCase() : 'STANDARD'}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-emerald-400 font-medium">
                    +10 Grains
                  </div>
                </div>

                {/* Question Headline */}
                <h3 className="text-lg sm:text-xl font-bold font-title leading-relaxed">
                  {currentQuestion.question}
                </h3>

                {/* 4 Interactive Option Buttons */}
                <div className="grid grid-cols-1 gap-2.5">
                  {currentQuestion.options.map((option, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = isAnswered && idx === currentQuestion.answer;
                    const isWrong = isAnswered && isSelected && idx !== currentQuestion.answer;

                    let buttonStyle = isDark 
                      ? 'bg-slate-950/70 border-slate-800/80 text-slate-200 hover:border-slate-700 hover:bg-slate-950'
                      : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-100';

                    if (isAnswered) {
                      if (isCorrect) {
                        buttonStyle = 'bg-emerald-500/15 border-emerald-500 text-emerald-400 font-semibold';
                      } else if (isWrong) {
                        buttonStyle = 'bg-rose-500/15 border-rose-500/80 text-rose-300 line-through opacity-80';
                      } else {
                        buttonStyle = isDark ? 'bg-slate-950/40 border-slate-900 text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-400';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={isAnswered}
                        onClick={() => handleAnswer(idx)}
                        className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center gap-3.5 cursor-pointer ${buttonStyle}`}
                      >
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 border ${
                          isCorrect 
                            ? 'bg-emerald-500 text-slate-950 border-emerald-400' 
                            : isWrong 
                              ? 'bg-rose-500 text-white border-rose-400'
                              : isDark ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border-slate-300 text-slate-600'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="flex-1 text-sm font-medium">{option}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Card & Next Action */}
                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-5 rounded-2xl border space-y-3 ${
                      selectedAnswer === currentQuestion.answer 
                        ? isDark ? 'bg-emerald-950/30 border-emerald-800/40 text-slate-200' : 'bg-emerald-50 border-emerald-200 text-slate-800'
                        : isDark ? 'bg-rose-950/30 border-rose-800/40 text-slate-200' : 'bg-rose-50 border-rose-200 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-sm font-bold">
                        {selectedAnswer === currentQuestion.answer ? (
                          <span className="text-emerald-400 flex items-center gap-1.5">
                            <CheckCircle2 size={16} /> Correct Answer!
                          </span>
                        ) : (
                          <span className="text-rose-400">
                            Correct: Option {String.fromCharCode(65 + currentQuestion.answer)}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={advanceToNextQuestion}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                      >
                        <span>Next Question</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>

                    <p className="text-xs leading-relaxed opacity-90">
                      {currentQuestion.explanation || currentQuestion.hint}
                    </p>
                  </motion.div>
                )}

                {/* Hint Bar */}
                {!isAnswered && (
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
                    <span>Press A, B, C, D to answer</span>
                    {showHint ? (
                      <span className="text-amber-400">💡 {currentQuestion.hint}</span>
                    ) : (
                      <button
                        onClick={() => setShowHint(true)}
                        className="text-slate-400 hover:text-amber-400 underline cursor-pointer"
                      >
                        Show Hint
                      </button>
                    )}
                  </div>
                )}

              </div>
            ) : null}

          </div>

          {/* Right Column: Clean Impact & Welfare Overview */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Impact Summary Card */}
            <div className={`p-6 rounded-3xl border space-y-5 ${
              isDark ? 'bg-slate-900/80 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              
              <div className="flex items-center justify-between border-b pb-3 border-slate-800/40">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Your Impact
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  Patna, Bihar
                </span>
              </div>

              {/* Total Donated Numbers */}
              <div className="space-y-1">
                <div className="text-4xl font-extrabold font-title text-emerald-400">
                  {score.toLocaleString()}
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Grains of rice generated
                </div>
              </div>

              {/* Progress to Next Bowl */}
              <div className="space-y-2 pt-2 border-t border-slate-800/40">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Next Bowl Progress:</span>
                  <span className="font-bold">{progressToNextMeal} / 50 grains</span>
                </div>
                <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-100'}`}>
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, Math.round((progressToNextMeal / 50) * 100))}%` }}
                  />
                </div>
              </div>

              {/* Quick Link to Field Proof */}
              <div className="pt-2">
                <Link
                  href="/impact"
                  className={`w-full py-2.5 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-colors ${
                    isDark ? 'bg-slate-950 hover:bg-slate-800 border-slate-800 text-slate-200' : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  <span>View 110+ Field Photos</span>
                  <ExternalLink size={12} />
                </Link>
              </div>

              {/* Feedback Button */}
              <button
                onClick={() => setShowSuggestionModal(true)}
                className="w-full text-center text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer pt-1"
              >
                + Submit a Question or Suggestion
              </button>

            </div>

            {/* Daily Wisdom / Interesting Fact Card */}
            <div className={`p-5 rounded-3xl border space-y-2 text-xs leading-relaxed ${
              isDark ? 'bg-slate-900/50 border-slate-800/60 text-slate-300' : 'bg-white border-slate-200 text-slate-600'
            }`}>
              <div className="font-bold text-emerald-400 font-mono uppercase tracking-wider text-[10px]">
                💡 Rescue Fact
              </div>
              <p>
                Providing warm boiled rice with protein during monsoon prevents hypothermia and strengthens the immune barrier of street dogs against seasonal infections.
              </p>
            </div>

          </div>

        </div>

        {/* Live Impact Ground Proof Section */}
        <section className="pt-4 border-t border-slate-800/40 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold font-title">Real-World Impact & Field Drives</h2>
              <p className="text-xs text-slate-400">100% of quiz karma points fund street dog meals across Patna, Bihar.</p>
            </div>
            <Link href="/impact" className="text-xs font-mono text-emerald-400 hover:underline">
              Explore 110+ Field Photos &rarr;
            </Link>
          </div>

          <LiveImpactCarousel 
            lang={lang} 
            isDark={isDark} 
            onOpenSuggestion={() => setShowSuggestionModal(true)} 
          />
        </section>

      </main>

      {/* AI Quiz Generator Dialog */}
      <AnimatePresence>
        {showAIModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !isGeneratingAI && setShowAIModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className={`relative max-w-lg w-full rounded-3xl border p-6 sm:p-8 space-y-5 shadow-2xl ${
                isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🤖</span>
                  <h3 className="text-lg font-bold font-title">Generate Custom AI Quiz</h3>
                </div>
                <button
                  onClick={() => setShowAIModal(false)}
                  className="text-slate-400 hover:text-white text-sm cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-slate-400">
                Enter any topic of curiosity to generate five tailored trivia questions.
              </p>

              {/* Topic Input */}
              <div className="space-y-2">
                <input
                  type="text"
                  value={aiTopic}
                  onChange={e => setAiTopic(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleLaunchAIQuiz()}
                  placeholder="e.g. Quantum Physics, Roman Empire, Marine Biology..."
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-mono outline-none transition-colors ${
                    isDark ? 'bg-slate-950 border-slate-800 focus:border-emerald-500 text-white' : 'bg-slate-50 border-slate-200 focus:border-emerald-500'
                  }`}
                />
              </div>

              {/* Curated Suggestion Chips */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-slate-400">Suggested Topics:</span>
                <div className="flex flex-wrap gap-1.5">
                  {CURATED_AI_TOPICS.map(item => (
                    <button
                      key={item.topic}
                      onClick={() => {
                        setAiTopic(item.topic);
                        handleLaunchAIQuiz(item.topic);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono border transition-colors cursor-pointer flex items-center gap-1 ${
                        isDark ? 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300' : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.topic}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => handleLaunchAIQuiz()}
                  disabled={isGeneratingAI || !aiTopic.trim()}
                  className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-medium text-xs transition-colors cursor-pointer shadow-sm"
                >
                  {isGeneratingAI ? 'Generating Questions...' : 'Start Quiz →'}
                </button>
                <button
                  onClick={() => setShowAIModal(false)}
                  className="px-4 py-3 rounded-xl border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs font-medium cursor-pointer"
                >
                  Cancel
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Community Suggestions Modal */}
      <SuggestionModal
        isOpen={showSuggestionModal}
        onClose={() => setShowSuggestionModal(false)}
        lang={lang}
        onRewardGrains={(bonus) => {
          saveScore(score + bonus);
          addToast(`+${bonus} grains awarded for feedback!`, 'success');
        }}
        addToast={addToast}
      />

      {/* Welcome / Onboarding Modal */}
      <WelcomeOnboardingModal
        isOpen={showOnboardingModal}
        onClose={() => setShowOnboardingModal(false)}
        lang={lang}
        onSelectLanguage={handleSelectLanguage}
        onPlayAsGuest={() => {
          localStorage.setItem('cyberkarma_onboarded', 'true');
          const claimed = localStorage.getItem('cyberkarma_claimed_welcome');
          if (!claimed) {
            localStorage.setItem('cyberkarma_claimed_welcome', 'true');
            saveScore(score + 50);
            addToast('+50 Grains Welcome Bonus credited!', 'success');
          }
        }}
        onGoogleSignIn={async () => {
          localStorage.setItem('cyberkarma_onboarded', 'true');
          try {
            await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin } });
          } catch (e) {
            setUser({ email: 'player@gmail.com', name: 'Google Player', avatar: 'https://ui-avatars.com/api/?name=Player&background=10b981&color=fff' });
          }
        }}
        onEmailSignIn={(email, name) => {
          localStorage.setItem('cyberkarma_onboarded', 'true');
          setUser({ email, name, avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=10b981&color=fff` });
        }}
        isDark={isDark}
      />

      </div>{/* end z-10 content wrapper */}
    </div>
  );
}
