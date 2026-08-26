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
import ThreeDArtBackground from '@/components/3d/ThreeDArtBackground';
import KarmaMascotCompanion from './KarmaMascotCompanion';
import TrustAndVerificationBadge from './TrustAndVerificationBadge';
import AdSenseSlot from './AdSenseSlot';
import { resolveContextualQuestionImage } from './topicImageResolver';

// Initialize Supabase client
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xkhgccximcrsdpdlskys.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhraGdjY3hpbWNyc2RwZGxza3lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2NjQ0OTksImV4cCI6MjA5OTI0MDQ5OX0.R9t0QNG0voJPyxhZkXO2hQtD4_Gr2xdnGyI8AlTOk5g';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

interface DifficultyLevelConfig {
  id: Difficulty;
  icon: string;
  labelKey: string;
  tagEn: string;
  tagHi: string;
  activeDark: string;
  activeLight: string;
  badgeBg: string;
  badgeBorder: string;
  textColor: string;
}

const DIFFICULTY_CONFIG: DifficultyLevelConfig[] = [
  {
    id: 'beginner',
    icon: '🌱',
    labelKey: 'easy',
    tagEn: 'Relaxed',
    tagHi: 'सरल',
    activeDark: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/80 shadow-[0_0_16px_rgba(16,185,129,0.35)]',
    activeLight: 'bg-emerald-600 text-white border-emerald-600 shadow-md',
    badgeBg: 'bg-emerald-500/15',
    badgeBorder: 'border-emerald-500/30',
    textColor: 'text-emerald-400'
  },
  {
    id: 'intermediate',
    icon: '⚡',
    labelKey: 'medium',
    tagEn: 'Standard',
    tagHi: 'मध्यम',
    activeDark: 'bg-amber-500/20 text-amber-300 border-amber-400/80 shadow-[0_0_16px_rgba(245,158,11,0.35)]',
    activeLight: 'bg-amber-500 text-white border-amber-600 shadow-md',
    badgeBg: 'bg-amber-500/15',
    badgeBorder: 'border-amber-500/30',
    textColor: 'text-amber-400'
  },
  {
    id: 'advanced',
    icon: '🔥',
    labelKey: 'hard',
    tagEn: 'Expert',
    tagHi: 'कठिन',
    activeDark: 'bg-rose-500/20 text-rose-300 border-rose-400/80 shadow-[0_0_16px_rgba(244,63,94,0.35)]',
    activeLight: 'bg-rose-600 text-white border-rose-600 shadow-md',
    badgeBg: 'bg-rose-500/15',
    badgeBorder: 'border-rose-500/30',
    textColor: 'text-rose-400'
  }
];

interface CategoryConfig {
  id: CategoryKey | 'random' | 'custom-ai';
  icon: string;
  titles: Partial<Record<Language, string>>;
  subtitles: Partial<Record<Language, string>>;
  tagEn?: string;
  tagHi?: string;
  goldSpecial?: boolean;
}

const CATEGORIES: CategoryConfig[] = [
  {
    id: 'animals',
    icon: '🐾',
    titles: {
      en: 'Animals & Rescue', hi: 'पशु संरक्षण', es: 'Animales y Rescate', fr: 'Animaux & Secours', de: 'Tiere & Rettung',
      bn: 'প্রাণী ও উদ্ধার', ta: 'விலங்குகள் நலன்', te: 'జంతు సంరక్షణ', ja: '動物＆レスキュー', ar: 'الحيوانات والإنقاذ'
    },
    subtitles: {
      en: 'Canine welfare & wildlife', hi: 'श्वान सेवा व जीव विज्ञान', es: 'Bienestar canino y fauna', fr: 'Protection canine & faune', de: 'Hundewohl & Tierwelt',
      bn: 'পথপশু ও বন্যপ্রাণী', ta: 'நாய் பராமரிப்பு', te: 'శునక సేవ & వన్యప్రాణులు', ja: '保護犬と野生動物', ar: 'رعاية الكلاب والحياة البرية'
    },
    tagEn: '🐾 Welfare',
    tagHi: '🐾 सेवा'
  },
  {
    id: 'cybersecurity',
    icon: '🛡️',
    titles: {
      en: 'Cybersecurity', hi: 'साइबर सुरक्षा', es: 'Ciberseguridad', fr: 'Cybersécurité', de: 'Cybersicherheit',
      bn: 'সাইবার নিরাপত্তা', ta: 'சைபர் பாதுகாப்பு', te: 'సైబర్ భద్రత', ja: 'サイバーセキュリティ', ar: 'الأمن السيبراني'
    },
    subtitles: {
      en: 'Ethical hacking & defense', hi: 'नेटवर्क व सुरक्षा', es: 'Hacking ético y defensa', fr: 'Piratage éthique & défense', de: 'Ethisches Hacken & Abwehr',
      bn: 'হ্যাকিং ও নেটওয়ার্ক', ta: 'பாதுகாப்பு & நெட்வொர்க்', te: 'నెట్‌వర్క్ & రక్షణ', ja: 'ハッキングと防御', ar: 'القرصنة الأخلاقية والدفاع'
    },
    tagEn: '🔐 SecOps',
    tagHi: '🔐 सुरक्षा'
  },
  {
    id: 'space',
    icon: '🚀',
    titles: {
      en: 'Space & Cosmos', hi: 'अंतरिक्ष', es: 'Espacio y Cosmos', fr: 'Espace & Cosmos', de: 'Raumfahrt & Kosmos',
      bn: 'মহাকাশ ও বিশ্ব', ta: 'விண்வெளி', te: 'అంతరిక్షం', ja: '宇宙と天体', ar: 'الفضاء والكون'
    },
    subtitles: {
      en: 'Astronomy & universe', hi: 'खगोलिकी व ब्रह्मांड', es: 'Astronomía y universo', fr: 'Astronomie & univers', de: 'Astronomie & Universum',
      bn: 'জ্যোতির্বিদ্যা ও কসমস', ta: 'வானியல் & பிரபஞ்சம்', te: 'ఖగోళ శాస్త్రం', ja: '天文学と宇宙論', ar: 'علم الفلك والكون'
    },
    tagEn: '🪐 Cosmos',
    tagHi: '🪐 अंतरिक्ष'
  },
  {
    id: 'science',
    icon: '🔬',
    titles: {
      en: 'Natural Science', hi: 'विज्ञान', es: 'Ciencias Naturales', fr: 'Sciences Naturelles', de: 'Naturwissenschaft',
      bn: 'প্রাকৃতিক বিজ্ঞান', ta: 'இயற்கை அறிவியல்', te: 'సైన్స్', ja: '自然科学', ar: 'العلوم الطبيعية'
    },
    subtitles: {
      en: 'Physics & biology', hi: 'भौतिकी व रसायन', es: 'Física y biología', fr: 'Physique & biologie', de: 'Physik & Biologie',
      bn: 'পদার্থ ও রসায়ন', ta: 'இயற்பியல் & உயிரியல்', te: 'భౌతిక & జీవశాస్త్రం', ja: '物理と生物学', ar: 'الفيزياء والأحياء'
    },
    tagEn: '🧪 Science',
    tagHi: '🧪 विज्ञान'
  },
  {
    id: 'math',
    icon: '🧮',
    titles: {
      en: 'Mathematics', hi: 'गणित', es: 'Matemáticas', fr: 'Mathématiques', de: 'Mathematik',
      bn: 'গণিত', ta: 'கணிதம்', te: 'గణితం', ja: '数学と論理', ar: 'الرياضيات'
    },
    subtitles: {
      en: 'Logic & number theory', hi: 'तर्क व अंकगणित', es: 'Lógica y números', fr: 'Logique & nombres', de: 'Logik & Zahlentheorie',
      bn: 'যুক্তি ও সংখ্যাতত্ত্ব', ta: 'தர்க்கம் & எண்கள்', te: 'లాజిక్ & సంఖ్యలు', ja: '数論と幾何学', ar: 'المنطق ونظرية الأعداد'
    },
    tagEn: '📐 Logic',
    tagHi: '📐 तर्क'
  },
  {
    id: 'geography',
    icon: '🌍',
    titles: {
      en: 'Geography', hi: 'भूगोल', es: 'Geografía', fr: 'Géographie', de: 'Geographie',
      bn: 'ভূগোল', ta: 'புவியியல்', te: 'భూగోళశాస్త్రం', ja: '世界地理', ar: 'الجغرافيا'
    },
    subtitles: {
      en: 'World maps & capitals', hi: 'विश्व राजधानियाँ व सागर', es: 'Mapas y capitales', fr: 'Cartes & capitales', de: 'Weltkarten & Hauptstädte',
      bn: 'বিশ্ব মানচিত্র ও রাজধানী', ta: 'நாடுகள் & தலைநகரங்கள்', te: 'ప్రపంచ పటాలు', ja: '世界の首都と海', ar: 'خرائط وعواصم العالم'
    },
    tagEn: '🗺️ Atlas',
    tagHi: '🗺️ मानचित्र'
  },
  {
    id: 'vocab',
    icon: '📖',
    titles: {
      en: 'Vocabulary', hi: 'शब्दावली', es: 'Vocabulario', fr: 'Vocabulaire', de: 'Wortschatz',
      bn: 'শব্দভাণ্ডার', ta: 'சொற்களஞ்சியம்', te: 'పదజాలం', ja: '語彙と文学', ar: 'المفردات اللغوية'
    },
    subtitles: {
      en: 'Linguistics & words', hi: 'शब्द शक्ति व अर्थ', es: 'Lingüística y palabras', fr: 'Linguistique & mots', de: 'Linguistik & Sprache',
      bn: 'ভাষা ও ব্যুৎপত্তি', ta: 'மொழி & சொற்கள்', te: 'భాషాశాస్త్రం', ja: '言語学と言葉', ar: 'علم اللغة والمعاني'
    },
    tagEn: '📚 Words',
    tagHi: '📚 शब्द'
  },
  {
    id: 'gk',
    icon: '💡',
    titles: {
      en: 'General Knowledge', hi: 'सामान्य ज्ञान', es: 'Cultura General', fr: 'Culture Générale', de: 'Allgemeinwissen',
      bn: 'সাধারণ জ্ঞান', ta: 'பொது அறிவு', te: 'సాధారణ జ్ఞానం', ja: '一般教養', ar: 'المعلومات العامة'
    },
    subtitles: {
      en: 'History & discoveries', hi: 'इतिहास व आविष्कार', es: 'Historia y descubrimientos', fr: 'Histoire & découvertes', de: 'Geschichte & Entdeckungen',
      bn: 'ইতিহাস ও আবিষ্কার', ta: 'வரலாறு & கண்டுபிடிப்புகள்', te: 'చరిత్ర & ఆవిష్కరణలు', ja: '歴史的発見と偉人', ar: 'التاريخ والاكتشافات'
    },
    tagEn: '🏆 Trivia',
    tagHi: '🏆 ज्ञान'
  },
  {
    id: 'random',
    icon: '🎲',
    titles: {
      en: 'Random Mix', hi: 'रैंडम मिक्स', es: 'Mezcla Aleatoria', fr: 'Mélange Aléatoire', de: 'Zufallsmischung',
      bn: 'মিশ্র কুইজ', ta: 'கலவை வினாடி வினா', te: 'యాదృచ్ఛిక మిశ్రమం', ja: 'ランダムミックス', ar: 'خليط عشوائي'
    },
    subtitles: {
      en: 'All topics shuffled', hi: 'सभी विषयों का मिश्रण', es: 'Todos los temas', fr: 'Tous les sujets', de: 'Alle Themen gemischt',
      bn: 'সকল বিষয়ের সমন্বয়', ta: 'அனைத்து தலைப்புகளும்', te: 'అన్ని అంశాలు', ja: '全ジャンルから出題', ar: 'جميع المواضيع مدمجة'
    },
    tagEn: '✨ Shuffle',
    tagHi: '✨ मिश्रण'
  },
  {
    id: 'custom-ai',
    icon: '🤖',
    titles: {
      en: 'AI Custom Quiz', hi: 'AI कस्टम क्विज़', es: 'Quiz de IA Personalizado', fr: 'Quiz IA Personnalisé', de: 'Individuelles KI-Quiz',
      bn: 'AI কাস্টম কুইজ', ta: 'AI தனிப்பயன் வினாடி வினா', te: 'AI అనుకూల క్విజ్', ja: 'AIカスタムクイズ', ar: 'اختبار مخصص بالذكاء الاصطناعي'
    },
    subtitles: {
      en: 'Any topic of curiosity', hi: 'मनपसंद विषय जनरेटर', es: 'Cualquier tema de interés', fr: 'Tout sujet au choix', de: 'Jedes beliebige Thema',
      bn: 'যে কোনো পছন্দের বিষয়', ta: 'விருப்பமான தலைப்பு', te: 'ఏదైనా ఆసక్తికర అంశం', ja: '興味のあるトピックを自由に', ar: 'أي موضوع حسب رغبتك'
    },
    tagEn: '⚡ Gemini',
    tagHi: '⚡ AI'
  },
];

interface TopicCategory {
  labelEn: string;
  labelHi: string;
  icon: string;
  topics: { topic: string; topicHi?: string; icon: string }[];
}

const DEMOGRAPHIC_AI_TOPICS: TopicCategory[] = [
  {
    labelEn: "🎒 Kids & Students",
    labelHi: "🎒 बच्चों और छात्रों के लिए",
    icon: "🎒",
    topics: [
      { topic: "Dinosaurs & Prehistoric Giants", topicHi: "डायनासोर और जीवाश्म", icon: "🦖" },
      { topic: "Planets & Solar System Mysteries", topicHi: "सौरमंडल और ग्रह", icon: "🪐" },
      { topic: "Marvel & DC Superheroes", topicHi: "सुपरहीरो और कॉमिक्स", icon: "🦸" },
      { topic: "Minecraft & Gaming Lore", topicHi: "माइनक्राफ्ट और गेमिंग", icon: "🎮" },
      { topic: "Ancient Egyptian Pyramids & Pharaohs", topicHi: "प्राचीन मिस्र और पिरामिड", icon: "🏺" },
      { topic: "Animal Superpowers & Wildlife", topicHi: "जानवरों की अद्भुत शक्तियां", icon: "🦎" }
    ]
  },
  {
    labelEn: "🎮 Gaming, Anime & Movies",
    labelHi: "🎮 गेमिंग, एनीमे और सिनेमा",
    icon: "🎮",
    topics: [
      { topic: "Anime Legends (Dragon Ball, Naruto, One Piece)", topicHi: "प्रसिद्ध एनीमे", icon: "⚔️" },
      { topic: "Studio Ghibli & Anime Films", topicHi: "स्टूडियो घिबली", icon: "🍃" },
      { topic: "Star Wars & Sci-Fi Universes", topicHi: "स्टार वॉर्स और साई-फाई", icon: "🌌" },
      { topic: "History of Video Games & Consoles", topicHi: "वीडियो गेम का इतिहास", icon: "🕹️" },
      { topic: "Classic Rock & Music Legends", topicHi: "रॉक संगीत और गायक", icon: "🎸" }
    ]
  },
  {
    labelEn: "🔬 Science & Nature",
    labelHi: "🔬 विज्ञान और प्रकृति",
    icon: "🔬",
    topics: [
      { topic: "Human Brain, Memory & Neuroscience", topicHi: "मानव मस्तिष्क और याददाश्त", icon: "🧠" },
      { topic: "Quantum Computing & Physics", topicHi: "क्वांटम कंप्यूटिंग", icon: "⚛️" },
      { topic: "Deep Ocean & Marine Creatures", topicHi: "गहरे समुद्र के जीव", icon: "🌊" },
      { topic: "Veterinary First Aid & Dog Biology", topicHi: "पशु चिकित्सा और स्वास्थ्य", icon: "🩺" },
      { topic: "James Webb Telescope & Black Holes", topicHi: "जेम्स वेब और ब्लैक होल", icon: "🔭" }
    ]
  },
  {
    labelEn: "💻 Tech, Coding & Cyber",
    labelHi: "💻 तकनीक, कोडिंग और AI",
    icon: "💻",
    topics: [
      { topic: "Artificial Intelligence & Neural Networks", topicHi: "आर्टिफिशियल इंटेलिजेंस", icon: "🤖" },
      { topic: "Ethical Hacking & Cyber Defense", topicHi: "एथिकल हैकिंग", icon: "🛡️" },
      { topic: "SpaceX & Mars Colonization", topicHi: "मंगल ग्रह मिशन", icon: "🚀" },
      { topic: "History of the Internet & Cryptography", topicHi: "इंटरनेट का इतिहास", icon: "🌐" }
    ]
  },
  {
    labelEn: "🏛️ History & World Lore",
    labelHi: "🏛️ इतिहास और विश्व संस्कृति",
    icon: "🏛️",
    topics: [
      { topic: "Ancient Rome, Gladiators & Colosseum", topicHi: "प्राचीन रोम और ग्लेडिएटर", icon: "🏛️" },
      { topic: "Maurya Empire & Chanakya Wisdom", topicHi: "मौर्य साम्राज्य और चाणक्य", icon: "📜" },
      { topic: "Samurai & Feudal Japan", topicHi: "समुराई और जापान", icon: "🗡️" },
      { topic: "World War II Turning Points", topicHi: "द्वितीय विश्व युद्ध", icon: "🪖" },
      { topic: "Canine Psychology & Dog Empathy", topicHi: "श्वान मनोविज्ञान व प्रेम", icon: "🐕" }
    ]
  }
];

const ALL_CURATED_FLAT_TOPICS = DEMOGRAPHIC_AI_TOPICS.flatMap(c => c.topics);


/* ── Rotating Hero: "From Patna → to the World" (10 Languages) ── */
const ROTATING_LOCATIONS: Record<Language, { text: string; emoji: string }[]> = {
  en: [{ text: 'Patna.', emoji: '📍' }, { text: 'Bihar.', emoji: '🏛️' }, { text: 'India.', emoji: '🇮🇳' }, { text: 'the World.', emoji: '🌍' }],
  hi: [{ text: 'पटना।', emoji: '📍' }, { text: 'बिहार।', emoji: '🏛️' }, { text: 'भारत।', emoji: '🇮🇳' }, { text: 'विश्व।', emoji: '🌍' }],
  es: [{ text: 'Patna.', emoji: '📍' }, { text: 'Bihar.', emoji: '🏛️' }, { text: 'India.', emoji: '🇮🇳' }, { text: 'el Mundo.', emoji: '🌍' }],
  fr: [{ text: 'Patna.', emoji: '📍' }, { text: 'Bihar.', emoji: '🏛️' }, { text: "l'Inde.", emoji: '🇮🇳' }, { text: 'le Monde.', emoji: '🌍' }],
  de: [{ text: 'Patna.', emoji: '📍' }, { text: 'Bihar.', emoji: '🏛️' }, { text: 'Indien.', emoji: '🇮🇳' }, { text: 'die Welt.', emoji: '🌍' }],
  bn: [{ text: 'পাটনা।', emoji: '📍' }, { text: 'বিহার।', emoji: '🏛️' }, { text: 'ভারত।', emoji: '🇮🇳' }, { text: 'বিশ্ব।', emoji: '🌍' }],
  ta: [{ text: 'பாட்னா.', emoji: '📍' }, { text: 'பீகார்.', emoji: '🏛️' }, { text: 'இந்தியா.', emoji: '🇮🇳' }, { text: 'உலகம்.', emoji: '🌍' }],
  te: [{ text: 'పాట్నా.', emoji: '📍' }, { text: 'బీహార్.', emoji: '🏛️' }, { text: 'భారతదేశం.', emoji: '🇮🇳' }, { text: 'ప్రపంచం.', emoji: '🌍' }],
  ja: [{ text: 'パトナ。', emoji: '📍' }, { text: 'ビハール。', emoji: '🏛️' }, { text: 'インド。', emoji: '🇮🇳' }, { text: '世界へ。', emoji: '🌍' }],
  ar: [{ text: 'باتنا.', emoji: '📍' }, { text: 'بيهار.', emoji: '🏛️' }, { text: 'الهند.', emoji: '🇮🇳' }, { text: 'العالم.', emoji: '🌍' }]
};

function RotatingHero({ lang, isDark }: { lang: Language; isDark: boolean }) {
  const [locIndex, setLocIndex] = useState(0);
  const locations = ROTATING_LOCATIONS[lang] || ROTATING_LOCATIONS['en'];

  useEffect(() => {
    const timer = setInterval(() => {
      setLocIndex(prev => (prev + 1) % locations.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [locations.length]);

  const current = locations[locIndex] || locations[0];

  return (
    <section className="text-center max-w-2xl mx-auto space-y-3 py-2">
      <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-title leading-snug">
        <span>{getTranslation('heroTagline', lang)}</span>{" "}
        <span className="inline-flex items-center gap-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={locIndex + lang}
              initial={{ y: 16, opacity: 0, filter: 'blur(4px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -16, opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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
      </h1>
      <p className={`text-sm leading-relaxed max-w-lg mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
        {getTranslation('heroSubtext', lang)}
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

  // Animated Category Spotlight State
    // Floating Particle Burst State
  interface GrainParticle {
    id: number;
    x: number;
    y: number;
    emoji: string;
    text?: string;
  }
  const [particles, setParticles] = useState<GrainParticle[]>([]);

  const [spotlightIdx, setSpotlightIdx] = useState(0);

  // Auto-advance Countdown State (3-second timer)
  const [countdown, setCountdown] = useState<number>(3);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSpotlightIdx(prev => (prev + 1) % CATEGORIES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

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
      const newParticles: GrainParticle[] = [
        { id: Date.now() + 1, x: (Math.random() - 0.5) * 60, y: -45 - Math.random() * 35, emoji: '🌾', text: '+10 Grains!' },
        { id: Date.now() + 2, x: (Math.random() - 0.5) * 100, y: -65 - Math.random() * 25, emoji: '✨' },
        { id: Date.now() + 3, x: (Math.random() - 0.5) * 80, y: -55 - Math.random() * 25, emoji: '🥣' },
        { id: Date.now() + 4, x: (Math.random() - 0.5) * 110, y: -75 - Math.random() * 30, emoji: '🐾' }
      ];
      setParticles(newParticles);
      setTimeout(() => setParticles([]), 1300);

      const newScore = score + 10;
      saveScore(newScore);
      const newStreak = streak + 1;
      setStreak(newStreak);

      if (category === 'custom-ai') {
        setAiCorrectCount(prev => prev + 1);
      }

      setFeedback({
        text: getTranslation('correctAnswer', lang),
        type: 'success'
      });
    } else {
      setStreak(0);
      setFeedback({
        text: getTranslation('incorrectAnswer', lang),
        type: 'error'
      });
    }
  };

  const advanceToNextQuestion = useCallback(() => {
    if (autoAdvanceRef.current) {
      clearInterval(autoAdvanceRef.current);
    }
    setIsTimerPaused(false);
    setCountdown(3);

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
  }, [category, aiIndex, aiQuestions, lang, loadNextQuestionForCategory]);

  // Auto-advance Countdown Timer (3-second auto-advance on answer)
  useEffect(() => {
    if (isAnswered && !isTimerPaused) {
      setCountdown(3);
      const startTime = Date.now();
      const durationMs = 3000;

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, (durationMs - elapsed) / 1000);
        setCountdown(remaining);

        if (remaining <= 0) {
          clearInterval(interval);
          advanceToNextQuestion();
        }
      }, 50);

      autoAdvanceRef.current = interval;
      return () => clearInterval(interval);
    } else {
      if (autoAdvanceRef.current) {
        clearInterval(autoAdvanceRef.current);
      }
    }
  }, [isAnswered, isTimerPaused, advanceToNextQuestion]);

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

  function createQ(difficulty: Difficulty, question: string, correct: string, w1: string, w2: string, w3: string, hint: string, explanation: string, badge: string, image = '/quiz/ai_hero.jpg'): Question {
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
      topicBadge: badge,
      image
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
              topicBadge: selectedTopic,
              image: '/quiz/ai_hero.jpg'
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
      
      {/* ── High-Definition Interactive 3D Art Background ── */}
      <ThreeDArtBackground isDark={isDark} />

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
              <span><strong>{score.toLocaleString()}</strong> {getTranslation('grains', lang)}</span>
            </div>

            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700 font-semibold'
            }`}>
              <span>🥣</span>
              <span><strong>{mealsFunded}</strong> {getTranslation('meals', lang)}</span>
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
              >{getTranslation('signIn', lang)}</button>
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
              {getTranslation('selectCategory', lang)}
            </h2>

            {/* Interactive Segmented Difficulty Console */}
            {category !== 'custom-ai' && (
              <div className={`flex items-center p-1 rounded-2xl border shadow-inner transition-all ${
                isDark ? 'bg-slate-950/90 border-slate-800/90' : 'bg-slate-100 border-slate-200'
              }`}>
                {DIFFICULTY_CONFIG.map((diff) => {
                  const isSelected = difficulty === diff.id;
                  return (
                    <motion.button
                      key={diff.id}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => {
                        setDifficulty(diff.id);
                        playChime(true);
                      }}
                      className={`relative px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer border ${
                        isSelected
                          ? (isDark ? diff.activeDark : diff.activeLight)
                          : isDark
                            ? 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                            : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      }`}
                    >
                      <span className="text-sm shrink-0">{diff.icon}</span>
                      <span>{getTranslation(diff.labelKey, lang)}</span>
                      <span className={`hidden md:inline text-[9px] px-1 py-0.2 rounded font-sans font-semibold ${
                        isSelected ? 'bg-black/20 opacity-90' : 'opacity-50'
                      }`}>
                        {lang === 'hi' ? diff.tagHi : diff.tagEn}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Category Tabs Grid with Golden Highlights & Pop-Out Animation */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {CATEGORIES.map((cat, idx) => {
              const isSelected = category === cat.id;
              const isSpotlighted = spotlightIdx === idx && !isSelected;

              return (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  animate={
                    isSelected
                      ? { scale: 1.02, y: -2 }
                      : isSpotlighted
                        ? { scale: [1, 1.025, 1], transition: { duration: 1.8, repeat: Infinity } }
                        : { scale: 1, y: 0 }
                  }
                  onClick={() => {
                    if (cat.id === 'custom-ai') {
                      setShowAIModal(true);
                    } else {
                      setCategory(cat.id);
                    }
                  }}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2.5 relative overflow-hidden group ${
                    isSelected
                      ? isDark
                        ? 'bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-slate-900 border-emerald-400 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.3)] font-bold'
                        : 'bg-gradient-to-br from-emerald-50 via-white to-emerald-50/60 border-emerald-500 text-emerald-950 shadow-md font-bold'
                      : isDark
                        ? 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  {/* Top Accent Line for Selected Category */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                  )}

                  <div className="flex items-center justify-between gap-1 w-full">
                    <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </span>
                    {cat.tagEn && (
                      <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full border ${
                        isSelected
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40 shadow-sm'
                          : isDark ? 'bg-slate-800 text-slate-400 border-slate-700' : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}>
                        {lang === 'hi' ? (cat.tagHi || cat.tagEn) : cat.tagEn}
                      </span>
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className={`text-xs font-bold truncate ${
                      isSelected ? 'text-emerald-300 font-extrabold' : ''
                    }`}>
                      {(cat.titles[lang] || cat.titles['en'] || cat.id)}
                    </div>
                    <div className="text-[10px] opacity-70 truncate font-mono">
                      {(cat.subtitles[lang] || cat.subtitles['en'] || '')}
                    </div>
                  </div>
                </motion.button>
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
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion.question}
                  initial={{ opacity: 0, y: 14, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -14, scale: 0.99 }}
                  transition={{ duration: 0.3 }}
                  className={`p-6 sm:p-8 rounded-3xl border space-y-6 transition-all relative overflow-hidden ${
                    isDark ? 'bg-slate-900/90 border-slate-800/90 shadow-xl' : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  {/* Floating Grain Particle Burst Canvas */}
                  <AnimatePresence>
                    {particles.map((p) => (
                      <motion.div
                        key={p.id}
                        initial={{ opacity: 0, scale: 0.6, x: 0, y: 0 }}
                        animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1.25, 1], x: p.x, y: p.y }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-40 font-bold text-amber-300 drop-shadow-lg text-sm sm:text-base flex items-center gap-1.5"
                      >
                        <span className="text-xl sm:text-2xl animate-bounce">{p.emoji}</span>
                        {p.text && (
                          <span className="font-mono bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-400/60 shadow-xl text-xs sm:text-sm text-amber-300">
                            {p.text}
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Question Metadata Header */}
                  <div className="flex items-center justify-between gap-2 border-b pb-4 border-slate-800/40">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {currentQuestion.topicBadge || (category === 'custom-ai' ? aiTopic : (CATEGORIES.find(c => c.id === category)?.titles[lang] || CATEGORIES.find(c => c.id === category)?.titles['en'] || ''))}
                      </span>
                      {/* Thematic Difficulty Badge */}
                      {(() => {
                        const diffObj = DIFFICULTY_CONFIG.find(d => d.id === (currentQuestion.difficulty || difficulty)) || DIFFICULTY_CONFIG[0];
                        return (
                          <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-lg border flex items-center gap-1 ${diffObj.badgeBg} ${diffObj.badgeBorder} ${diffObj.textColor}`}>
                            <span>{diffObj.icon}</span>
                            <span>{getTranslation(diffObj.labelKey, lang).toUpperCase()}</span>
                          </span>
                        );
                      })()}
                    </div>

                    <div className="text-xs font-mono text-emerald-400 font-medium">
                      {getTranslation('grainsReward', lang)}
                    </div>
                  </div>

                  {/* Dynamic Contextual Question Visual Image Banner with 0ms Skeleton */}
                  {(() => {
                    const activeImage = resolveContextualQuestionImage(
                      currentQuestion.question,
                      currentQuestion.topicBadge,
                      category,
                      category === 'custom-ai' ? aiTopic : undefined,
                      currentQuestion.image
                    );
                    return (
                      <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden relative group border border-slate-800/80 shadow-md bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
                        {/* Instant Animated Gradient Skeleton Shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/30 via-slate-800/40 to-emerald-950/30 animate-pulse pointer-events-none" />
                        
                        <img
                          src={activeImage}
                          alt={currentQuestion.topicBadge || 'Quiz Visual Illustration'}
                          className="w-full h-full object-cover relative z-10 transition-all duration-700 ease-out group-hover:scale-105"
                          loading="eager"
                          fetchPriority="high"
                          decoding="async"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=640&q=70';
                          }}
                        />
                        <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                        
                        <div className="absolute bottom-3 left-3 right-3 z-30 flex items-center justify-between pointer-events-none">
                          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-emerald-300 border border-emerald-500/30 shadow-sm flex items-center gap-1.5">
                            <span>{CATEGORIES.find(c => c.id === category)?.icon || '💡'}</span>
                            <span>{currentQuestion.topicBadge || (CATEGORIES.find(c => c.id === category)?.titles[lang] || CATEGORIES.find(c => c.id === category)?.titles['en'] || '')}</span>
                          </span>
                          <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-amber-500/20 backdrop-blur-md text-amber-300 border border-amber-400/40 shadow-sm">
                            🌾 {getTranslation('grainsReward', lang)}
                          </span>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Question Headline */}
                  <h3 className="text-lg sm:text-xl font-bold font-title leading-relaxed">
                    {currentQuestion.question}
                  </h3>

                  {/* 4 Interactive Option Buttons with Physics */}
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
                          buttonStyle = 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-semibold shadow-[0_0_20px_rgba(16,185,129,0.35)]';
                        } else if (isWrong) {
                          buttonStyle = 'bg-rose-500/15 border-rose-500/80 text-rose-300 line-through opacity-80';
                        } else {
                          buttonStyle = isDark ? 'bg-slate-950/40 border-slate-900 text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-400';
                        }
                      }

                      return (
                        <motion.button
                          key={idx}
                          disabled={isAnswered}
                          onClick={() => handleAnswer(idx)}
                          whileHover={!isAnswered ? { scale: 1.015, x: 4 } : {}}
                          whileTap={!isAnswered ? { scale: 0.985 } : {}}
                          animate={isCorrect ? { scale: [1, 1.02, 1] } : {}}
                          transition={{ duration: 0.2 }}
                          className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center gap-3.5 cursor-pointer ${buttonStyle}`}
                        >
                          <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 border ${
                            isCorrect 
                              ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-sm' 
                              : isWrong 
                                ? 'bg-rose-500 text-white border-rose-400'
                                : isDark ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border-slate-300 text-slate-600'
                          }`}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="flex-1 text-sm font-medium">{option}</span>
                        </motion.button>
                      );
                    })}
                  </div>

                {/* Explanation Card & Auto-Advance Countdown Timer */}
                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-5 rounded-2xl border space-y-3 relative overflow-hidden ${
                      selectedAnswer === currentQuestion.answer 
                        ? isDark ? 'bg-emerald-950/30 border-emerald-800/40 text-slate-200' : 'bg-emerald-50 border-emerald-200 text-slate-800'
                        : isDark ? 'bg-rose-950/30 border-rose-800/40 text-slate-200' : 'bg-rose-50 border-rose-200 text-slate-800'
                    }`}
                  >
                    {/* Animated Countdown Progress Line at Top */}
                    {!isTimerPaused && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800/50 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 transition-all duration-75"
                          style={{ width: `${(countdown / 3) * 100}%` }}
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div className="flex items-center gap-2 text-sm font-bold">
                        {selectedAnswer === currentQuestion.answer ? (
                          <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                            <CheckCircle2 size={16} /> {getTranslation('correctAnswer', lang)}
                          </span>
                        ) : (
                          <span className="text-rose-400 font-bold">
                            {getTranslation('correctOptionIs', lang)} {String.fromCharCode(65 + currentQuestion.answer)}
                          </span>
                        )}
                      </div>

                      {/* Timing Countdown Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setIsTimerPaused(!isTimerPaused)}
                          className={`px-2.5 py-1.5 rounded-xl border text-[11px] font-mono flex items-center gap-1 transition-colors cursor-pointer ${
                            isTimerPaused
                              ? 'bg-amber-500/20 text-amber-300 border-amber-400/40 font-bold shadow-sm'
                              : isDark ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white' : 'bg-white border-slate-300 text-slate-600'
                          }`}
                          title={isTimerPaused ? "Resume auto-advance timer" : "Pause timer to read explanation"}
                        >
                          {isTimerPaused 
                            ? '▶️ ' + (lang === 'hi' ? 'चालू करें' : 'Resume') 
                            : `⏳ ${lang === 'hi' ? 'अगला' : 'Next in'} ${Math.ceil(countdown)}s`}
                        </button>

                        <button
                          onClick={advanceToNextQuestion}
                          className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                        >
                          <span>{lang === 'hi' ? 'अगला' : 'Next Now'}</span>
                          <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs leading-relaxed opacity-90 pt-1">
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

              </motion.div>
            </AnimatePresence>
          ) : null}

          </div>

          {/* Right Column: Clean Impact & Welfare Overview */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Friendly Interactive Mascot Companion & 3-Step Guide */}
            <KarmaMascotCompanion
              score={score}
              streak={streak}
              isAnswered={isAnswered}
              isCorrect={isAnswered && selectedAnswer === currentQuestion?.answer}
              lang={lang}
              isDark={isDark}
            />

            {/* 🌟 3D Gamified Philanthropic Impact Vault */}
            <div className={`p-6 rounded-3xl border space-y-5 relative overflow-hidden transition-all shadow-xl ${
              isDark 
                ? 'bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-950 border-slate-800/90' 
                : 'bg-gradient-to-br from-white via-slate-50/80 to-emerald-50/30 border-slate-200 shadow-md'
            }`}>
              
              {/* Top Vibrant Cyan-Emerald Accent Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400" />

              {/* Header with Live Beacon */}
              <div className="flex items-center justify-between border-b pb-3.5 border-slate-800/40">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                    {lang === 'hi' ? 'आपका व्यक्तिगत प्रभाव' : 'Your Live Impact'}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                  <MapPin size={11} />
                  <span>Patna, Bihar</span>
                </div>
              </div>

              {/* Dual Stat Split Grid (Grains Donated & Bowls Delivered) */}
              <div className="grid grid-cols-2 gap-3">
                {/* 🌾 Grains Stat Box */}
                <div className={`p-4 rounded-2xl border flex flex-col justify-between space-y-1 relative overflow-hidden ${
                  isDark ? 'bg-slate-950/80 border-slate-800/90' : 'bg-white border-emerald-100 shadow-sm'
                }`}>
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                    <span>{getTranslation('grains', lang)}</span>
                    <span className="text-base animate-bounce">🌾</span>
                  </div>
                  <div className="text-3xl font-extrabold font-title text-emerald-400 drop-shadow-sm">
                    {score.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">+10 / correct answer</span>
                </div>

                {/* 🥣 Meals Funded Stat Box */}
                <div className={`p-4 rounded-2xl border flex flex-col justify-between space-y-1 relative overflow-hidden ${
                  isDark ? 'bg-slate-950/80 border-slate-800/90' : 'bg-white border-amber-100 shadow-sm'
                }`}>
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                    <span>{getTranslation('meals', lang)}</span>
                    <span className="text-base animate-pulse">🥣</span>
                  </div>
                  <div className="text-3xl font-extrabold font-title text-amber-400 drop-shadow-sm">
                    {mealsFunded}
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">50 grains = 1 meal</span>
                </div>
              </div>

              {/* Interactive Bowl Progress Visualizer */}
              <div className={`p-4 rounded-2xl border space-y-3 ${
                isDark ? 'bg-slate-950/50 border-slate-800/60' : 'bg-emerald-50/40 border-emerald-100'
              }`}>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                    <span>🥣</span>
                    <span>{lang === 'hi' ? 'अगला कटोरा प्रगति:' : 'Next Meal Progress:'}</span>
                  </span>
                  <span className="font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {progressToNextMeal} / 50 grains ({Math.min(100, Math.round((progressToNextMeal / 50) * 100))}%)
                  </span>
                </div>

                {/* Shimmer Liquid Progress Bar */}
                <div className={`w-full h-3 rounded-full overflow-hidden relative ${isDark ? 'bg-slate-900 border border-slate-800' : 'bg-slate-200'}`}>
                  <motion.div 
                    className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 rounded-full relative overflow-hidden transition-all duration-300"
                    style={{ width: `${Math.min(100, Math.max(5, Math.round((progressToNextMeal / 50) * 100)))}%` }}
                  >
                    {/* Animated High-Voltage Shimmer Wave */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent animate-pulse" />
                  </motion.div>
                </div>

                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>🐕 {50 - progressToNextMeal} grains to deliver Bowl #{mealsFunded + 1}</span>
                  <span className="text-emerald-400 font-bold">100% Direct Impact</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-1">
                <Link
                  href="/impact"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 hover:from-emerald-500 to-teal-600 hover:to-teal-500 text-white text-xs font-bold font-title flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-900/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center"
                >
                  <span>{lang === 'hi' ? '110+ जमीनी फ़ोटो व GPS प्रमाण देखें →' : 'View 110+ Field Photos & GPS Logs →'}</span>
                  <ExternalLink size={13} />
                </Link>

                {/* Interactive Feedback & Suggestion Trigger */}
                <button
                  onClick={() => setShowSuggestionModal(true)}
                  className={`w-full py-2.5 rounded-xl border text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isDark 
                      ? 'bg-slate-950 hover:bg-slate-900 border-slate-800 text-slate-300 hover:text-emerald-400' 
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:text-emerald-600 shadow-sm'
                  }`}
                >
                  <span>💡</span>
                  <span>{getTranslation('giveFeedback', lang)}</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
                    +25 Grains
                  </span>
                </button>
              </div>

            </div>

            {/* Trust & Transparency Guarantee Card */}
            <TrustAndVerificationBadge lang={lang} isDark={isDark} />

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

        {/* Compliant AdSense Sponsor Slot */}
        <AdSenseSlot isDark={isDark} label="PHILANTHROPIC SPONSOR" />

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

      {/* Google Gemini AI Custom Quiz Generator Modal */}
      <AnimatePresence>
        {showAIModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !isGeneratingAI && setShowAIModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className={`relative max-w-xl w-full my-auto rounded-3xl border p-6 sm:p-7 space-y-4 shadow-2xl ${
                isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              {/* Header with Close */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl font-bold border border-purple-500/30 shadow-sm">
                    🤖
                  </span>
                  <div>
                    <h3 className="text-lg font-bold font-title flex items-center gap-2">
                      <span>{lang === 'hi' ? 'कस्टम AI क्विज़ जनरेटर' : 'Custom AI Quiz Generator'}</span>
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-400/30">
                        Gemini 2.5
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      {lang === 'hi'
                        ? 'अपनी पसंद का कोई भी विषय लिखें या नीचे दिए गए विभिन्न क्षेत्रों में से चुनें!'
                        : 'Play trivia on ANY topic you love — from Minecraft to Quantum Physics!'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowAIModal(false)}
                  className="w-8 h-8 rounded-full bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center text-sm font-bold transition-all cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Input & Surprise Me Bar */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={aiTopic}
                    onChange={e => setAiTopic(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleLaunchAIQuiz()}
                    placeholder={lang === 'hi' ? 'उदा. सुपरहीरो, ब्लैक होल, प्राचीन भारत, वीडियो गेम...' : 'Type any topic: e.g. Dinosaurs, Anime, Neuroscience, Minecraft...'}
                    className={`flex-1 px-4 py-3 rounded-xl border text-xs sm:text-sm font-mono outline-none transition-colors ${
                      isDark ? 'bg-slate-950 border-slate-800 focus:border-purple-500 text-white' : 'bg-slate-50 border-slate-200 focus:border-purple-500'
                    }`}
                  />

                  {/* 🎲 Surprise Me Button */}
                  <button
                    type="button"
                    onClick={() => {
                      const randomPick = ALL_CURATED_FLAT_TOPICS[Math.floor(Math.random() * ALL_CURATED_FLAT_TOPICS.length)];
                      const chosen = (lang === 'hi' && randomPick.topicHi) ? randomPick.topicHi : randomPick.topic;
                      setAiTopic(chosen);
                      handleLaunchAIQuiz(chosen);
                    }}
                    className="px-3.5 py-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                    title="Surprise me with a fun random topic!"
                  >
                    <span>🎲</span>
                    <span className="hidden sm:inline">{lang === 'hi' ? 'रैंडम टॉपिक' : 'Surprise Me'}</span>
                  </button>
                </div>
              </div>

              {/* Curated Demographic Categorized Tabs */}
              <div className="space-y-3 pt-1">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  {lang === 'hi' ? '💡 सभी उम्र और रुचियों के लिए लोकप्रिय विषय:' : '💡 Popular Topics for Every Background:'}
                </div>

                <div className="space-y-3 max-h-56 overflow-y-auto pr-1 scrollbar-thin">
                  {DEMOGRAPHIC_AI_TOPICS.map((group, gIdx) => (
                    <div key={gIdx} className="space-y-1.5">
                      <div className="text-[11px] font-bold text-slate-300 flex items-center gap-1">
                        <span>{group.icon}</span>
                        <span>{lang === 'hi' ? group.labelHi : group.labelEn}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {group.topics.map((item, tIdx) => {
                          const topicLabel = (lang === 'hi' && item.topicHi) ? item.topicHi : item.topic;
                          return (
                            <button
                              key={tIdx}
                              onClick={() => {
                                setAiTopic(topicLabel);
                                handleLaunchAIQuiz(topicLabel);
                              }}
                              className={`px-2.5 py-1 rounded-xl text-[11px] font-mono border transition-all flex items-center gap-1 cursor-pointer ${
                                isDark 
                                  ? 'bg-slate-950/80 border-slate-800 hover:border-purple-400/50 hover:bg-purple-500/10 text-slate-300' 
                                  : 'bg-slate-50 border-slate-200 hover:border-purple-300 hover:bg-purple-50 text-slate-700'
                              }`}
                            >
                              <span>{item.icon}</span>
                              <span>{topicLabel}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-800/40">
                <button
                  onClick={() => handleLaunchAIQuiz()}
                  disabled={isGeneratingAI || !aiTopic.trim()}
                  className="flex-1 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-purple-500/20"
                >
                  <span>{isGeneratingAI ? 'Generating with AI...' : (lang === 'hi' ? 'AI क्विज़ शुरू करें 🚀' : 'Generate & Play AI Quiz 🚀')}</span>
                </button>
                <button
                  onClick={() => setShowAIModal(false)}
                  className="px-4 py-3 rounded-xl border border-slate-800 hover:bg-slate-800 text-slate-400 text-xs font-medium cursor-pointer"
                >
                  {lang === 'hi' ? 'रद्द करें' : 'Cancel'}
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
