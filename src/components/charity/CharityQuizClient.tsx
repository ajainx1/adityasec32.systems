"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, LogOut, Sun, Moon, Volume2, VolumeX, Lightbulb, Share2, 
  Award, Heart, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, 
  Globe, Flame, ExternalLink, HelpCircle, MessageSquarePlus, RefreshCw,
  Compass, Lock, Zap, BookOpen, Atom, Calculator, MapPin, Mic, MicOff
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
      en: 'Instant AI Topic Quiz', hi: 'कस्टम AI टॉपिक क्विज़', es: 'Quiz de IA Personalizado', fr: 'Quiz IA Personnalisé', de: 'Individuelles KI-Quiz',
      bn: 'AI কাস্টম টপিক কুইজ', ta: 'AI தனிப்பயன் வினாடி வினா', te: 'AI కస్టమ్ టాపిక్ క్విజ్', ja: 'AIトピッククイズ', ar: 'اختبار الذكاء الاصطناعي الفوري'
    },
    subtitles: {
      en: 'Type any topic & play instantly', hi: 'मनपसंद विषय पर तुरंत खेलें', es: 'Juega cualquier tema al instante', fr: 'Jouez sur n\'importe quel sujet', de: 'Jedes Thema sofort spielen',
      bn: 'যে কোনো পছন্দের বিষয় খেলুন', ta: 'விருப்பமான தலைப்பில் விளையாடுங்கள்', te: 'మీకు ఇష్టమైన అంశంపై ఆడండి', ja: 'お好きなテーマですぐ挑戦', ar: 'اكتب أي موضوع والعب فوراً'
    },
    tagEn: '✨ AI STUDIO',
    tagHi: '✨ AI स्टूडियो'
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
  },
  {
    labelEn: "🎯 Competitive Exams & Aspirants",
    labelHi: "🎯 प्रतियोगी परीक्षाएं और सरकारी नौकरी",
    icon: "🎯",
    topics: [
      { topic: "BPSC Prelims Bihar Special GK & Current Affairs", topicHi: "BPSC प्रीलिम्स और बिहार स्पेशल GK", icon: "🏛️" },
      { topic: "UPSC Civil Services Indian Polity & Constitution", topicHi: "UPSC भारतीय राजव्यवस्था व संविधान", icon: "📜" },
      { topic: "SSC CGL & Railway RRB General Awareness", topicHi: "SSC CGL और रेलवे सामान्य अध्ययन", icon: "🚆" },
      { topic: "Bihar Police Daroga SI General Knowledge", topicHi: "बिहार दरोगा SI परीक्षा तैयारी", icon: "👮" },
      { topic: "Software Engineering, DSA & System Design", topicHi: "सॉफ्टवेयर इंजीनियरिंग और कोडिंग", icon: "💻" },
      { topic: "NEET Biology, Human Physiology & Genetics", topicHi: "NEET बायोलॉजी और मानव शरीर रचना", icon: "🩺" }
    ]
  }
];

export interface CompetitiveExamCard {
  id: string;
  titleEn: string;
  titleHi: string;
  badgeEn: string;
  badgeHi: string;
  icon: string;
  gradient: string;
  borderColor: string;
  descEn: string;
  descHi: string;
  syllabusTopic: string;
  tags: string[];
}

export const COMPETITIVE_EXAMS: CompetitiveExamCard[] = [
  {
    id: 'bpsc',
    titleEn: 'BPSC & Bihar Special GK',
    titleHi: 'BPSC व बिहार विशेष सामान्य ज्ञान',
    badgeEn: '#1 Bihar Ranker',
    badgeHi: '#1 बिहार रैंक',
    icon: '🏛️',
    gradient: 'from-amber-500/20 via-orange-500/10 to-amber-950/30',
    borderColor: 'border-amber-500/40 hover:border-amber-400',
    descEn: 'Bihar History, Geography, Budget & Economic Survey, Ancient Nalanda & Magadha.',
    descHi: 'बिहार का इतिहास, भूगोल, आर्थिक सर्वेक्षण, प्राचीन नालंदा व मगध साम्राज्य।',
    syllabusTopic: 'BPSC Prelims Bihar Special GK & Current Affairs',
    tags: ['Bihar GK', 'History', 'Polity', 'Eco Survey']
  },
  {
    id: 'upsc',
    titleEn: 'UPSC Civil Services (GS)',
    titleHi: 'UPSC सिविल सेवा (सामान्य अध्ययन)',
    badgeEn: 'IAS / IPS Target',
    badgeHi: 'IAS / IPS लक्ष्य',
    icon: '📜',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-blue-950/30',
    borderColor: 'border-blue-500/40 hover:border-blue-400',
    descEn: 'Indian Constitution, Modern History, Macroeconomics, Environment & Ecology.',
    descHi: 'भारतीय संविधान, आधुनिक इतिहास, अर्थशास्त्र और पर्यावरण एवं पारिस्थितिकी।',
    syllabusTopic: 'UPSC Civil Services Indian Polity & Constitution',
    tags: ['Polity', 'Modern History', 'Economy', 'Ecology']
  },
  {
    id: 'ssc',
    titleEn: 'SSC CGL & Railway RRB',
    titleHi: 'SSC CGL और रेलवे भर्ती (RRB)',
    badgeEn: 'Govt Job Track',
    badgeHi: 'सरकारी नौकरी',
    icon: '🚆',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-emerald-950/30',
    borderColor: 'border-emerald-500/40 hover:border-emerald-400',
    descEn: 'General Awareness, General Science, Static GK, History & Indian Geography.',
    descHi: 'सामान्य अध्ययन, सामान्य विज्ञान, स्टैटिक GK और भारत का भूगोल।',
    syllabusTopic: 'SSC CGL & Railway RRB General Awareness',
    tags: ['Static GK', 'Gen Science', 'Polity', 'History']
  },
  {
    id: 'tech',
    titleEn: 'Software & Tech Placements',
    titleHi: 'सॉफ्टवेयर इंजीनियरिंग व कोडिंग',
    badgeEn: 'FAANG / Campus #1',
    badgeHi: 'कैंपस प्लेसमेंट',
    icon: '💻',
    gradient: 'from-cyan-500/20 via-sky-500/10 to-cyan-950/30',
    borderColor: 'border-cyan-500/40 hover:border-cyan-400',
    descEn: 'Data Structures, Algorithms, System Design, Cybersecurity & Networks.',
    descHi: 'डेटा स्ट्रक्चर (DSA), सिस्टम डिज़ाइन, साइबर सुरक्षा और कंप्यूटर नेटवर्क्स।',
    syllabusTopic: 'Software Engineering, DSA & System Design',
    tags: ['DSA', 'System Design', 'Cyber', 'Networks']
  },
  {
    id: 'neet',
    titleEn: 'NEET & Medical Aspirants',
    titleHi: 'NEET व मेडिकल प्रवेश परीक्षा',
    badgeEn: 'MBBS Target',
    badgeHi: 'MBBS लक्ष्य',
    icon: '🩺',
    gradient: 'from-rose-500/20 via-pink-500/10 to-rose-950/30',
    borderColor: 'border-rose-500/40 hover:border-rose-400',
    descEn: 'Human Physiology, Genetics, Molecular Biology, Plant Kingdom & Organic Basics.',
    descHi: 'मानव शरीर क्रिया विज्ञान, आनुवंशिकी, कोशिका जीव विज्ञान व जैव रसायन।',
    syllabusTopic: 'NEET Biology, Human Physiology & Genetics',
    tags: ['Physiology', 'Genetics', 'Cell Bio', 'Zoology']
  },
  {
    id: 'daroga',
    titleEn: 'Bihar Police & Daroga SI',
    titleHi: 'बिहार पुलिस दरोगा SI परीक्षा',
    badgeEn: 'Bihar Police Track',
    badgeHi: 'बिहार पुलिस',
    icon: '👮',
    gradient: 'from-purple-500/20 via-violet-500/10 to-purple-950/30',
    borderColor: 'border-purple-500/40 hover:border-purple-400',
    descEn: 'Indian Constitution, Criminal Law basics, Bihar Police GK, Science & Reasoning.',
    descHi: 'भारतीय संविधान, कानून के बुनियादी नियम, बिहार पुलिस GK व सामान्य विज्ञान।',
    syllabusTopic: 'Bihar Police Daroga SI General Knowledge',
    tags: ['Constitution', 'Bihar GK', 'Law Basics', 'Science']
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

  // 🎙️ Professional AI Voice Host & Hearing State
  const [isVoiceMode, setIsVoiceMode] = useState<boolean>(false);
  const [voiceStatus, setVoiceStatus] = useState<'idle' | 'speaking' | 'listening' | 'replying'>('idle');
  const [voiceTranscript, setVoiceTranscript] = useState<string>('');
  const recognitionRef = useRef<any>(null);
  const isSpeakingRef = useRef<boolean>(false);

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

  // Safe Speech Synthesis with Natural Voice
  const speakText = useCallback((text: string, onEnd?: () => void) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      onEnd?.();
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.92;
    utterance.pitch = 1.0;
    utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-US';

    const voices = window.speechSynthesis.getVoices();
    const targetLang = lang === 'hi' ? 'hi' : 'en';
    const naturalVoice = voices.find(v => v.lang.startsWith(targetLang) && (v.name.includes('Natural') || v.name.includes('Premium') || v.name.includes('Google') || v.name.includes('Siri'))) || voices.find(v => v.lang.startsWith(targetLang));
    if (naturalVoice) utterance.voice = naturalVoice;

    utterance.onstart = () => {
      isSpeakingRef.current = true;
    };
    utterance.onend = () => {
      isSpeakingRef.current = false;
      onEnd?.();
    };
    utterance.onerror = () => {
      isSpeakingRef.current = false;
      onEnd?.();
    };

    window.speechSynthesis.speak(utterance);
  }, [lang]);

  // Stop all voice activity
  const stopVoiceAll = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch (e) {}
      recognitionRef.current = null;
    }
    setVoiceStatus('idle');
    setVoiceTranscript('');
    isSpeakingRef.current = false;
  }, []);

  // Forward ref pointers for recursive voice cycle
  const readQuestionOutLoudRef = useRef<(q: Question) => void>(() => {});
  const startListeningRef = useRef<(q: Question) => void>(() => {});
  const processVoiceCommandRef = useRef<(transcript: string, q: Question) => void>(() => {});

  // Open Microphone and Listen for Player's Voice Reply
  const startListening = useCallback((targetQuestion: Question) => {
    if (typeof window === 'undefined') return;
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRec) {
      setVoiceStatus('idle');
      return;
    }

    if (recognitionRef.current) {
      try { recognitionRef.current.abort(); } catch (e) {}
    }

    try {
      const rec = new SpeechRec();
      rec.lang = lang === 'hi' ? 'hi-IN' : 'en-US';
      rec.continuous = false;
      rec.interimResults = true;
      rec.maxAlternatives = 3;

      rec.onstart = () => {
        setVoiceStatus('listening');
      };

      rec.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript.toLowerCase().trim();
        setVoiceTranscript(transcript);

        if (event.results[0].isFinal) {
          rec.stop();
          processVoiceCommandRef.current(transcript, targetQuestion);
        }
      };

      rec.onerror = (event: any) => {
        if (event.error === 'not-allowed') {
          addToast(lang === 'hi' ? 'कृपया माइक्रोफ़ोन की अनुमति दें' : 'Please allow microphone access to use voice mode.', 'error');
          setIsVoiceMode(false);
          setVoiceStatus('idle');
        } else if (event.error !== 'no-speech') {
          setVoiceStatus('idle');
        }
      };

      rec.onend = () => {
        // Stay idle if finished
      };

      recognitionRef.current = rec;
      rec.start();
    } catch (err) {
      console.warn('Speech recognition start failed', err);
      setVoiceStatus('idle');
    }
  }, [lang, addToast]);

  startListeningRef.current = startListening;

  // Professional Voice Host: Read Question & Options Out Loud
  const readQuestionOutLoud = useCallback((q: Question) => {
    if (!q || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    setVoiceStatus('speaking');
    setVoiceTranscript('');

    const textToSpeak = lang === 'hi'
      ? `प्रश्न: ${q.question}। विकल्प ए: ${q.options[0]}। विकल्प बी: ${q.options[1]}। विकल्प सी: ${q.options[2]}। विकल्प डी: ${q.options[3]}। कृपया अपना उत्तर बोलें।`
      : `Question: ${q.question}. Option A: ${q.options[0]}. Option B: ${q.options[1]}. Option C: ${q.options[2]}. Option D: ${q.options[3]}. Your microphone is open. Please speak Option A, B, C, or D.`;

    speakText(textToSpeak, () => {
      startListeningRef.current(q);
    });
  }, [lang, speakText]);

  readQuestionOutLoudRef.current = readQuestionOutLoud;

  // Process Spoken Response
  const processVoiceCommand = useCallback((transcript: string, q: Question) => {
    const text = transcript.toLowerCase();

    // Check voice control commands
    if (text.includes('repeat') || text.includes('again') || text.includes('दोबारा') || text.includes('फिर से')) {
      readQuestionOutLoudRef.current(q);
      return;
    }
    if (text.includes('hint') || text.includes('संकेत') || text.includes('मदद')) {
      setShowHint(true);
      const hintSpeech = lang === 'hi'
        ? `संकेत है: ${q.hint || 'ध्यान से विकल्पों को पढ़ें'}। अब अपना उत्तर बोलें।`
        : `Here is your hint: ${q.hint || 'Review the core concepts carefully'}. What is your answer?`;
      speakText(hintSpeech, () => startListeningRef.current(q));
      return;
    }
    if (text.includes('skip') || text.includes('next') || text.includes('अगला')) {
      speakText(lang === 'hi' ? 'अगला प्रश्न लोड हो रहा है।' : 'Advancing to the next question.', () => advanceToNextQuestion());
      return;
    }

    // Match Option Letter or Number
    let chosenIdx = -1;
    if (/\b(option a|choice a|first option|option 1|number 1|\ba\b|one)\b/i.test(text)) chosenIdx = 0;
    else if (/\b(option b|choice b|second option|option 2|number 2|\bb\b|two)\b/i.test(text)) chosenIdx = 1;
    else if (/\b(option c|choice c|third option|option 3|number 3|\bc\b|three)\b/i.test(text)) chosenIdx = 2;
    else if (/\b(option d|choice d|fourth option|option 4|number 4|\bd\b|four)\b/i.test(text)) chosenIdx = 3;

    // Fuzzy matching on option contents if no letter mentioned
    if (chosenIdx === -1) {
      for (let i = 0; i < q.options.length; i++) {
        const optWords = q.options[i].toLowerCase().split(/\s+/).filter(w => w.length > 3);
        const matchCount = optWords.filter(w => text.includes(w)).length;
        if (matchCount >= 2 || (optWords.length === 1 && text.includes(optWords[0]))) {
          chosenIdx = i;
          break;
        }
      }
    }

    if (chosenIdx !== -1) {
      handleAnswer(chosenIdx);
      setVoiceStatus('replying');
      setIsTimerPaused(true);

      const letters = ['A', 'B', 'C', 'D'];
      const isCorrect = chosenIdx === q.answer;
      const explanation = q.explanation ? (q.explanation.length > 140 ? q.explanation.slice(0, 140) + '...' : q.explanation) : '';

      let replySpeech = '';
      if (lang === 'hi') {
        replySpeech = isCorrect
          ? `शानदार! विकल्प ${letters[chosenIdx]} बिल्कुल सही उत्तर है। दस दाने अन्नदान पटना के श्वानों के लिए जुड़ गए हैं। ${explanation}`
          : `माफ़ कीजिए, यह उत्तर गलत है। सही उत्तर था विकल्प ${letters[q.answer]}: ${q.options[q.answer]}। ${explanation}`;
      } else {
        replySpeech = isCorrect
          ? `Spot on! Option ${letters[chosenIdx]} is correct. Ten grains of rice have been credited to the Patna rescue drive. ${explanation}`
          : `That is incorrect. The correct answer was Option ${letters[q.answer]}: ${q.options[q.answer]}. ${explanation}`;
      }

      speakText(replySpeech, () => {
        setTimeout(() => {
          advanceToNextQuestion();
        }, 1200);
      });
    } else {
      const retrySpeech = lang === 'hi'
        ? `मुझे ${transcript} सुनाई दिया। कृपया विकल्प ए, बी, सी, या डी बोलें, या दोबारा सुनने के लिए 'रिपीट' कहें।`
        : `I heard "${transcript}". Please clearly say Option A, B, C, or D, or say "Repeat".`;
      speakText(retrySpeech, () => startListeningRef.current(q));
    }
  }, [lang, speakText, handleAnswer, advanceToNextQuestion]);

  processVoiceCommandRef.current = processVoiceCommand;

  // Toggle Voice Mode
  const toggleVoiceMode = () => {
    if (isVoiceMode) {
      stopVoiceAll();
      setIsVoiceMode(false);
      if (typeof window !== 'undefined') localStorage.setItem('cyberkarma_voice_mode', 'false');
      addToast(lang === 'hi' ? 'वॉयस मोड बंद कर दिया गया।' : 'Voice Mode disabled.', 'info');
    } else {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        addToast(lang === 'hi' ? 'आपका ब्राउज़र स्पीच का समर्थन नहीं करता।' : 'Your browser does not support Speech Synthesis.', 'error');
        return;
      }
      setIsVoiceMode(true);
      if (typeof window !== 'undefined') localStorage.setItem('cyberkarma_voice_mode', 'true');
      addToast(lang === 'hi' ? '🎙️ वॉयस मोड चालू! AI होस्ट प्रश्न पढ़ेगा और आपका उत्तर सुनेगा।' : '🎙️ Voice Mode Enabled! AI Host will speak questions and listen for your answer.', 'success');
      if (currentQuestion && !isAnswered) {
        readQuestionOutLoud(currentQuestion);
      }
    }
  };

  // Trigger voice read when question changes
  useEffect(() => {
    if (isVoiceMode && currentQuestion && !isAnswered) {
      const timer = setTimeout(() => {
        readQuestionOutLoud(currentQuestion);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentQuestion, isVoiceMode, isAnswered, readQuestionOutLoud]);

  // Clean up voice on unmount
  useEffect(() => {
    return () => {
      stopVoiceAll();
    };
  }, [stopVoiceAll]);

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
    const lower = clean.toLowerCase();

    // 1. BPSC & Bihar Special GK
    if (lower.includes('bpsc') || lower.includes('bihar special') || lower.includes('bihar gk')) {
      return [
        createQ('intermediate', 'Which ancient university in Bihar was founded during the Gupta Empire by Kumaragupta I?', 'Nalanda University', 'Vikramashila University', 'Odantapuri University', 'Taxila University', 'It was a premier global center for Buddhist learning in ancient Magadha.', 'Nalanda University was established in the 5th century CE by Gupta emperor Kumaragupta I and revived globally today.', 'BPSC Bihar GK'),
        createQ('beginner', 'Which perennial river is historically referred to as the "Sorrow of Bihar" due to its shifting course and annual floods?', 'Kosi River', 'Gandak River', 'Son River', 'Ghaghara River', 'This river originates in Tibet/Nepal and joins the Ganges near Kursela.', 'The Kosi river frequently shifts its course across North Bihar plains, causing severe floods.', 'BPSC Geography'),
        createQ('intermediate', 'Who was the legendary freedom fighter who led the 1857 Indian uprising from Jagdishpur, Bihar?', 'Veer Kunwar Singh', 'Babu Amar Singh', 'Pir Ali Khan', 'Hare Krishna Singh', 'He fought the British colonial forces at the age of nearly 80.', 'Veer Kunwar Singh of Jagdishpur (Bhojpur) delivered heroic defeats to British battalions in 1857.', 'BPSC History'),
        createQ('beginner', 'In which year was the province of Bihar separated from the Bengal Presidency?', '1912', '1905', '1936', '1947', 'It occurred following the Delhi Durbar proclamation by King George V.', 'Bihar and Orissa were carved out of Bengal Presidency on 22 March 1912 (celebrated as Bihar Diwas).', 'BPSC History'),
        createQ('intermediate', 'Which is the sole Tiger Reserve and National Park situated in the state of Bihar?', 'Valmiki National Park', 'Bhimbandh Wildlife Sanctuary', 'Gautam Buddha Sanctuary', 'Kaimur Wildlife Sanctuary', 'Located in the foothills of the Terai Himalayas in West Champaran district.', 'Valmiki National Park & Tiger Reserve in West Champaran is Bihar\'s only dedicated tiger sanctuary.', 'BPSC Environment')
      ];
    }

    // 2. UPSC Civil Services (GS)
    if (lower.includes('upsc') || lower.includes('polity') || lower.includes('civil services')) {
      return [
        createQ('intermediate', 'Under which Article of the Indian Constitution is the right to constitutional remedies guaranteed, hailed by Dr. Ambedkar as its "Heart and Soul"?', 'Article 32', 'Article 21', 'Article 19', 'Article 14', 'It empowers citizens to directly approach the Supreme Court for writ enforcement.', 'Article 32 provides the right to move the Supreme Court via writs (Habeas Corpus, Mandamus, Quo Warranto, etc.).', 'UPSC Polity'),
        createQ('intermediate', 'Which Constitutional Amendment Act added the Tenth Schedule (Anti-Defection Law) to the Indian Constitution?', '52nd Amendment Act, 1985', '42nd Amendment Act, 1976', '44th Amendment Act, 1978', '91st Amendment Act, 2003', 'Enacted under Rajiv Gandhi administration to curb political defections.', 'The 52nd Constitutional Amendment Act of 1985 introduced the 10th Schedule to disqualify defecting legislators.', 'UPSC Polity'),
        createQ('intermediate', 'Who acts as the ex-officio Chairperson of India’s Monetary Policy Committee (MPC)?', 'Governor of the Reserve Bank of India', 'Union Finance Minister', 'Chief Economic Adviser', 'NITI Aayog Vice-Chairperson', 'The statutory head of India\'s central bank leads the interest rate setting panel.', 'The RBI Governor chairs the six-member Monetary Policy Committee responsible for setting benchmark repo rates.', 'UPSC Economy'),
        createQ('beginner', 'The Ramsar Convention, an intergovernmental treaty for the conservation of wetlands, was signed in which country in 1971?', 'Iran', 'Switzerland', 'France', 'Egypt', 'Signed in a Caspian Sea coastal city.', 'The Ramsar Convention on Wetlands of International Importance was adopted in Ramsar, Iran in 1971.', 'UPSC Environment'),
        createQ('intermediate', 'Which historic legislative enactment introduced "Provincial Autonomy" and abolished dyarchy in the British Indian provinces?', 'Government of India Act 1935', 'Morley-Minto Reforms 1909', 'Montagu-Chelmsford Reforms 1919', 'Indian Councils Act 1892', 'This legislation served as the primary administrative blueprint for the Indian Constitution.', 'The Government of India Act 1935 granted autonomy to provinces and laid down federal structures.', 'UPSC History')
      ];
    }

    // 3. SSC CGL & Railways RRB
    if (lower.includes('ssc') || lower.includes('railway') || lower.includes('rrb') || lower.includes('general awareness')) {
      return [
        createQ('beginner', 'Which cellular organelle is famously known as the "powerhouse of the cell" for synthesizing ATP?', 'Mitochondria', 'Ribosome', 'Golgi Apparatus', 'Endoplasmic Reticulum', 'It performs aerobic cellular respiration.', 'Mitochondria convert nutrients into adenosine triphosphate (ATP), powering cellular metabolism.', 'SSC Science'),
        createQ('beginner', 'In which year took place the historic Battle of Plassey between Robert Clive and Nawab Siraj-ud-Daulah?', '1757', '1764', '1761', '1748', 'Fought in Bengal near the Bhagirathi River.', 'The Battle of Plassey on 23 June 1757 marked the start of formal British East India Company territorial rule.', 'SSC History'),
        createQ('beginner', 'What is the standard SI unit of electrical current?', 'Ampere', 'Volt', 'Ohm', 'Coulomb', 'Named after the French physicist André-Marie Ampère.', 'The Ampere (A) is the base SI unit measuring electric charge flow rate per second.', 'SSC Physics'),
        createQ('intermediate', 'Which is the highest peak in the ancient Aravalli mountain range in Rajasthan?', 'Guru Shikhar', 'Anamudi', 'Doda Betta', 'Dhupgarh', 'Located near the hill station of Mount Abu at 1,722 meters.', 'Guru Shikhar in Mount Abu is the summit peak of the Aravalli range.', 'SSC Geography'),
        createQ('intermediate', 'The Right to Education was made a Fundamental Right under Article 21A by which Constitutional Amendment?', '86th Amendment Act, 2002', '44th Amendment Act, 1978', '73rd Amendment Act, 1992', '93rd Amendment Act, 2005', 'Guarantees free and compulsory education for ages 6 to 14.', 'The 86th Amendment Act of 2002 inserted Article 21A, ensuring education as a fundamental citizen right.', 'SSC Polity')
      ];
    }

    // 4. Software Engineering & Tech
    if (lower.includes('software') || lower.includes('tech') || lower.includes('dsa') || lower.includes('coding')) {
      return [
        createQ('beginner', 'What is the worst-case time complexity of Binary Search on a sorted array of size n?', 'O(log n)', 'O(n)', 'O(n log n)', 'O(1)', 'With each step, the search space is divided in half.', 'Binary search eliminates half the remaining elements per iteration, giving logarithmic O(log n) time.', 'Tech DSA'),
        createQ('intermediate', 'In relational database ACID transactions, what does the "I" guarantee?', 'Isolation', 'Integrity', 'Immutability', 'Indexing', 'Concurrent transactions must not interfere with or see each other\'s intermediate state.', 'Isolation ensures transactions execute concurrently without dirty reads or phantom dependencies.', 'Tech Systems'),
        createQ('beginner', 'Which cryptographic protocol provides privacy and authentication for HTTPS internet traffic?', 'TLS (Transport Layer Security)', 'FTP', 'Telnet', 'SNMP', 'Replaced legacy SSL for web socket and browser security.', 'TLS encrypts web communications to prevent man-in-the-middle tampering and interception.', 'Tech Security'),
        createQ('intermediate', 'What is the primary architectural responsibility of an Operating System Kernel?', 'Mediating CPU scheduling, memory management, and hardware I/O', 'Rendering HTML web pages inside a browser', 'Formatting spreadsheet cells', 'Compiling JavaScript to bytecode', 'It is the core program that controls all physical computing resources.', 'The kernel bridges software applications with CPU, RAM, disk, and peripheral hardware.', 'Tech OS'),
        createQ('beginner', 'In RESTful API design, which HTTP status code confirms successful creation of a new server resource?', '201 Created', '200 OK', '204 No Content', '301 Moved Permanently', 'Follows a successful POST request creating an entity.', 'HTTP 201 Created indicates the request succeeded and resulted in a new resource creation.', 'Tech APIs')
      ];
    }

    // 5. NEET & Medical Aspirants
    if (lower.includes('neet') || lower.includes('medical') || lower.includes('biology') || lower.includes('physiology')) {
      return [
        createQ('beginner', 'Which human blood group is considered the universal red blood cell donor because it lacks A, B, and Rh antigens?', 'O negative (O-)', 'AB positive (AB+)', 'O positive (O+)', 'A negative (A-)', 'Can be safely transfused to recipients of any ABO or Rh type.', 'O- red cells carry neither A/B antigens nor the Rh factor, avoiding antibody agglutination.', 'NEET Biology'),
        createQ('intermediate', 'Which pancreatic peptide hormone facilitates cellular glucose uptake to reduce blood glycemic levels?', 'Insulin', 'Glucagon', 'Somatostatin', 'Epinephrine', 'Secreted by beta cells in the Islets of Langerhans.', 'Insulin stimulates liver, muscle, and adipose tissue to absorb glucose and synthesize glycogen.', 'NEET Physiology'),
        createQ('beginner', 'What is the microscopic structural and functional filtration unit of the mammalian kidney?', 'Nephron', 'Neuron', 'Alveolus', 'Hepatic Lobule', 'Each human kidney contains roughly 1 million of these filtering tubes.', 'The nephron filters blood plasma, regulates water/electrolytes, and excretes nitrogenous urea.', 'NEET Anatomy'),
        createQ('intermediate', 'Mendel\'s First Law, stating that the two alleles for each gene separate during gametogenesis, is known as:', 'Law of Segregation', 'Law of Independent Assortment', 'Law of Dominance', 'Law of Linkage', 'Explains why recessive traits can reappear in the F2 generation.', 'The Law of Segregation confirms each gamete receives only one allele from each parent pair.', 'NEET Genetics'),
        createQ('intermediate', 'Which primary enzyme catalyzes transcription of genetic information from DNA into messenger RNA?', 'RNA Polymerase', 'DNA Ligase', 'Topoisomerase', 'DNA Helicase', 'Binds to the promoter region to synthesize RNA transcripts.', 'RNA Polymerase reads the template DNA strand 3\' to 5\' and constructs pre-mRNA 5\' to 3\'.', 'NEET Molecular Bio')
      ];
    }

    // 6. Bihar Police & Daroga SI
    if (lower.includes('daroga') || lower.includes('police') || lower.includes('si')) {
      return [
        createQ('intermediate', 'Under Indian criminal procedure (CrPC / BNSS), within what maximum duration must an arrested individual be produced before a Magistrate?', '24 hours (excluding journey time)', '12 hours', '48 hours', '72 hours', 'A fundamental constitutional safeguard against arbitrary detention.', 'Article 22(2) and procedural criminal law mandate presentation before a magistrate within 24 hours.', 'Bihar Police Law'),
        createQ('beginner', 'Which ancient Magadha monarch transferred the imperial capital from Rajgir to Pataliputra (modern Patna)?', 'King Udayin', 'Bimbisara', 'Ajatashatru', 'Chandragupta Maurya', 'He was the son and successor of King Ajatashatru.', 'Udayin built a fort at the confluence of the Ganga and Son rivers, establishing Pataliputra as capital.', 'Bihar History'),
        createQ('beginner', 'Who served as the distinguished first Chief Minister (Premier) of Bihar?', 'Dr. Sri Krishna Sinha', 'Anugrah Narayan Sinha', 'Karpoori Thakur', 'Daroga Prasad Rai', 'Affectionately known as "Bihar Kesari".', 'Dr. Sri Krishna Sinha (Bihar Kesari) led the state government of Bihar from 1937 to 1961.', 'Bihar Administration'),
        createQ('intermediate', 'The historic Golghar monument in Patna was erected in 1786 following which catastrophic event?', 'The Great Bengal Famine of 1770', 'The Revolt of 1857', 'The 1934 Bihar Earthquake', 'The Anglo-Maratha Wars', 'Constructed by British authorities as a massive grain granary.', 'Golghar was engineered by Captain John Garstin to store grain reserves and avert future famine shortages.', 'Patna Heritage'),
        createQ('beginner', 'How many administrative divisions and revenue districts make up the state of Bihar?', '9 Divisions and 38 Districts', '7 Divisions and 35 Districts', '10 Divisions and 40 Districts', '8 Divisions and 37 Districts', 'Patna Division is the administrative seat for 6 central districts.', 'Bihar is administratively divided into 9 Commissionary Divisions containing 38 Districts.', 'Bihar Polity')
      ];
    }

    // Generic fallback for custom topics
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

            {/* Voice Mode Interactive Host Toggle */}
            <button
              onClick={toggleVoiceMode}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer ${
                isVoiceMode
                  ? 'bg-rose-500/20 border-rose-400 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.35)]'
                  : isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'
              }`}
              aria-label="Toggle Voice Host"
              title={isVoiceMode ? "Voice Mode ON: Questions are read out loud & Mic listens" : "Turn ON Voice Mode (Hands-Free Speech Quiz)"}
            >
              {isVoiceMode ? <Mic size={14} className="text-rose-400 animate-pulse" /> : <MicOff size={14} />}
              <span className="hidden sm:inline">
                {isVoiceMode 
                  ? (voiceStatus === 'listening' ? '🔴 Listening...' : voiceStatus === 'speaking' ? '🔊 Speaking...' : '🎙️ Voice ON') 
                  : (lang === 'hi' ? '🎙️ बोलकर खेलें' : '🎙️ Voice Mode')}
              </span>
            </button>

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

        {/* 🤖 ✨ AI STUDIO — Choose Your Own Topic Feature Console */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 sm:p-5 rounded-3xl border transition-all relative overflow-hidden shadow-lg ${
            isDark
              ? 'bg-gradient-to-br from-purple-950/60 via-slate-900/90 to-indigo-950/50 border-purple-500/40 shadow-[0_0_35px_rgba(168,85,247,0.18)]'
              : 'bg-gradient-to-br from-purple-50 via-white to-indigo-50/60 border-purple-200 shadow-md'
          }`}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative z-10">
            {/* Title & Tag Info */}
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center text-2xl shadow-md shadow-purple-500/30 shrink-0">
                🤖
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm flex items-center gap-1">
                    <span>✨</span>
                    <span>AI STUDIO</span>
                  </span>
                  <span className="text-[11px] font-mono text-purple-400 font-bold">
                    {lang === 'hi' ? 'अपना विषय खुद चुनें (Choose Your Own Topic)' : 'Choose Your Own Topic'}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black font-title tracking-tight flex items-center gap-2">
                  <span>{lang === 'hi' ? 'इंस्टेंट AI टॉपिक क्विज़' : 'Instant AI Topic Quiz'}</span>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 hidden sm:inline">
                    Gemini 2.5
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  {lang === 'hi' ? 'कोई भी विषय टाइप करें और तुरंत खेलें — डायनासोर, विज्ञान, वीडियो गेम, इतिहास...' : 'Type any topic & play instantly — Dinosaurs, Space, Anime, Cybersecurity, Cricket...'}
                </p>
              </div>
            </div>

            {/* Interactive Input Bar & Quick Action */}
            <div className="flex items-center gap-2 w-full lg:w-auto lg:min-w-[440px]">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={aiTopic}
                  onChange={e => setAiTopic(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleLaunchAIQuiz(aiTopic)}
                  placeholder={lang === 'hi' ? 'उदा. सुपरहीरो, ब्लैक होल, प्राचीन भारत...' : 'Type any topic (e.g. Cricket, AI, Anime, Dinosaurs)...'}
                  className={`w-full px-4 py-2.5 rounded-xl border text-xs font-mono outline-none transition-all ${
                    isDark
                      ? 'bg-slate-950/80 border-purple-500/30 focus:border-purple-400 text-white placeholder-slate-500'
                      : 'bg-white border-purple-200 focus:border-purple-500 text-slate-900 placeholder-slate-400 shadow-inner'
                  }`}
                />
              </div>

              {/* ⚡ Play Button */}
              <button
                type="button"
                onClick={() => handleLaunchAIQuiz(aiTopic)}
                disabled={isGeneratingAI}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-black font-title tracking-wide transition-all shadow-md shadow-purple-600/30 flex items-center gap-1.5 shrink-0 cursor-pointer active:scale-95 disabled:opacity-50"
              >
                {isGeneratingAI ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{lang === 'hi' ? 'बना रहे हैं...' : 'Generating...'}</span>
                  </>
                ) : (
                  <>
                    <span>⚡</span>
                    <span>{lang === 'hi' ? 'शुरू करें' : 'Play Now'}</span>
                  </>
                )}
              </button>

              {/* 🎲 Surprise / Browse Button */}
              <button
                type="button"
                onClick={() => setShowAIModal(true)}
                className={`px-3 py-2.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-1 shrink-0 transition-all cursor-pointer ${
                  isDark
                    ? 'bg-purple-950/40 hover:bg-purple-900/50 border-purple-500/30 text-purple-300'
                    : 'bg-purple-50 hover:bg-purple-100 border-purple-200 text-purple-700'
                }`}
                title={lang === 'hi' ? '30+ विषय देखें या रैंडम चुनें' : 'Browse 30+ curated topics or roll a random topic'}
              >
                <span>🎲</span>
                <span className="hidden sm:inline">{lang === 'hi' ? 'सभी 30+ विषय' : 'Browse 30+'}</span>
              </button>
            </div>
          </div>

          {/* Quick Pill Suggestions */}
          <div className="flex items-center gap-1.5 pt-3 overflow-x-auto scrollbar-thin relative z-10">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400/80 shrink-0">
              {lang === 'hi' ? 'ट्रेंडिंग विषय:' : 'Try instantly:'}
            </span>
            {[
              { labelEn: "🦖 Dinosaurs", labelHi: "🦖 डायनासोर", topic: "Dinosaurs & Prehistoric Giants" },
              { labelEn: "🧠 Human Brain", labelHi: "🧠 मस्तिष्क विज्ञान", topic: "Human Brain, Memory & Neuroscience" },
              { labelEn: "🪐 Solar System", labelHi: "🪐 सौरमंडल", topic: "Planets & Solar System Mysteries" },
              { labelEn: "🛡️ Cyber Defense", labelHi: "🛡️ साइबर सुरक्षा", topic: "Ethical Hacking & Cyber Defense" },
              { labelEn: "🎮 Gaming Lore", labelHi: "🎮 वीडियो गेम", topic: "Minecraft & Gaming Lore" },
              { labelEn: "🐕 Dog Psychology", labelHi: "🐕 श्वान मनोविज्ञान", topic: "Canine Psychology & Dog Empathy" },
              { labelEn: "🗡️ Feudal Japan", labelHi: "🗡️ समुराई इतिहास", topic: "Samurai & Feudal Japan" },
            ].map((pill, pIdx) => (
              <button
                key={pIdx}
                type="button"
                onClick={() => {
                  setAiTopic(pill.topic);
                  handleLaunchAIQuiz(pill.topic);
                }}
                className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold transition-all shrink-0 cursor-pointer border ${
                  isDark
                    ? 'bg-purple-900/30 hover:bg-purple-800/40 border-purple-500/25 text-purple-300 hover:text-white'
                    : 'bg-purple-100/70 hover:bg-purple-200 border-purple-200 text-purple-800'
                }`}
              >
                {lang === 'hi' ? pill.labelHi : pill.labelEn}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 🎯 Competitive Exam & Skill Mastery Hub */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className={`rounded-3xl border p-5 sm:p-6 space-y-5 relative overflow-hidden transition-all ${
            isDark
              ? 'bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950/90 border-yellow-500/25 shadow-[0_0_40px_rgba(234,179,8,0.08)]'
              : 'bg-gradient-to-br from-amber-50 via-white to-orange-50/60 border-amber-200 shadow-md'
          }`}
        >
          {/* Background ambient accent */}
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="flex items-center gap-3 relative z-10">
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-xl shadow-md shrink-0 ${
              isDark ? 'bg-gradient-to-br from-amber-500 to-orange-600 shadow-amber-500/30' : 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-orange-300/40'
            }`}>🎯</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-0.5">
                <span className={`text-[10px] font-mono font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${
                  isDark ? 'bg-amber-500/15 text-amber-300 border-amber-500/35' : 'bg-amber-100 text-amber-700 border-amber-300'
                }`}>🏆 Exam Hub</span>
                <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${
                  isDark ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-emerald-100 text-emerald-700 border-emerald-300'
                }`}>Patna | Worldwide 🌍</span>
              </div>
              <h2 className={`text-base sm:text-lg font-black font-title tracking-tight leading-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {lang === 'hi'
                  ? '🎯 प्रतियोगी परीक्षा तैयारी — #1 बनें, अंकों से जानवरों का खाना दान करें'
                  : '🎯 Prep for Competitive Exams & Level Up to #1 — Feed Rescue Animals in Patna'}
              </h2>
              <p className={`text-xs mt-0.5 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {lang === 'hi'
                  ? 'BPSC, UPSC, SSC, Tech या NEET — जो विषय आप चाहें उस पर इंस्टेंट MCQ खेलें। हर सही जवाब पटना के बेसहारा जानवरों को खाना खिलाता है।'
                  : 'Pick your syllabus — BPSC, UPSC, SSC, Tech, or NEET. Every correct MCQ feeds real rescue dogs in Patna, Bihar. 100% Free.'}
              </p>
            </div>
          </div>

          {/* Exam Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 relative z-10">
            {COMPETITIVE_EXAMS.map((exam) => (
              <motion.button
                key={exam.id}
                type="button"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setAiTopic(exam.syllabusTopic);
                  handleLaunchAIQuiz(exam.syllabusTopic);
                }}
                disabled={isGeneratingAI}
                className={`relative text-left p-3 sm:p-3.5 rounded-2xl border bg-gradient-to-br cursor-pointer transition-all overflow-hidden group disabled:opacity-60 ${exam.gradient} ${exam.borderColor} ${
                  isDark ? 'shadow-sm hover:shadow-md' : 'shadow-sm hover:shadow-md'
                }`}
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                <div className="flex items-start gap-2 mb-1.5">
                  <span className="text-xl">{exam.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className={`text-[10px] font-mono font-black px-1.5 py-0.5 rounded-md inline-block mb-0.5 ${
                      isDark ? 'bg-white/10 text-white/80' : 'bg-black/8 text-slate-700'
                    }`}>
                      {lang === 'hi' ? exam.badgeHi : exam.badgeEn}
                    </div>
                    <p className={`text-[11px] sm:text-xs font-black font-title leading-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {lang === 'hi' ? exam.titleHi : exam.titleEn}
                    </p>
                  </div>
                </div>

                <p className={`text-[10px] leading-snug mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {lang === 'hi' ? exam.descHi : exam.descEn}
                </p>

                <div className="flex flex-wrap gap-1">
                  {exam.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md ${
                      isDark ? 'bg-white/8 text-white/60' : 'bg-black/8 text-slate-600'
                    }`}>{tag}</span>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className={`flex items-center gap-1 mt-2 text-[10px] font-black font-title ${
                  isDark ? 'text-amber-400' : 'text-amber-600'
                }`}>
                  <span>⚡ {lang === 'hi' ? 'अभी खेलें' : 'Play Now'}</span>
                  <ArrowRight size={10} />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Patna Philanthropy Footer Note */}
          <div className={`flex items-center gap-2 text-[10px] font-mono rounded-xl px-3 py-2 relative z-10 ${
            isDark ? 'bg-emerald-500/8 text-emerald-400 border border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
          }`}>
            <span>🐾</span>
            <span>
              {lang === 'hi'
                ? '100% स्कोर पटना के बेसहारा जानवरों के लिए खाना और दवाएं खरीदने में जाता है — Worldwide donors स्वागत है!'
                : '100% of your scores fund real dog food & vet care across Patna. Players & donors welcomed from worldwide 🌍'}
            </span>
          </div>
        </motion.section>

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
                    cat.id === 'custom-ai'
                      ? isSelected
                        ? isDark
                          ? 'bg-gradient-to-br from-purple-500/25 via-indigo-500/15 to-slate-900 border-purple-400 text-purple-200 shadow-[0_0_25px_rgba(168,85,247,0.35)] font-bold'
                          : 'bg-gradient-to-br from-purple-50 via-white to-purple-50/80 border-purple-500 text-purple-950 shadow-md font-bold'
                        : isDark
                          ? 'bg-gradient-to-br from-purple-950/40 via-slate-900/90 to-slate-950 border-purple-500/40 text-purple-200 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]'
                          : 'bg-gradient-to-br from-purple-50/60 via-white to-indigo-50/40 border-purple-300 text-purple-950 hover:border-purple-400 shadow-sm'
                      : isSelected
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
                    <div className={`absolute top-0 left-0 right-0 h-1 ${
                      cat.id === 'custom-ai'
                        ? 'bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 shadow-[0_0_10px_rgba(168,85,247,0.6)]'
                        : 'bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 shadow-[0_0_10px_rgba(16,185,129,0.6)]'
                    }`} />
                  )}

                  <div className="flex items-center justify-between gap-1 w-full">
                    <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </span>
                    {cat.tagEn && (
                      <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full border ${
                        cat.id === 'custom-ai'
                          ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-purple-400/50 shadow-sm shadow-purple-500/30'
                          : isSelected
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40 shadow-sm'
                            : isDark ? 'bg-slate-800 text-slate-400 border-slate-700' : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}>
                        {lang === 'hi' ? (cat.tagHi || cat.tagEn) : cat.tagEn}
                      </span>
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className={`text-xs font-bold truncate ${
                      cat.id === 'custom-ai'
                        ? 'text-purple-300 font-extrabold'
                        : isSelected ? 'text-emerald-300 font-extrabold' : ''
                    }`}>
                      {(cat.titles[lang] || cat.titles['en'] || cat.id)}
                    </div>
                    <div className="text-[10px] opacity-75 truncate font-mono">
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

                  {/* Voice Mode Live Audio Indicator HUD */}
                  {isVoiceMode && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className={`p-3 rounded-2xl border flex items-center justify-between gap-3 text-xs font-mono transition-all ${
                        voiceStatus === 'listening'
                          ? 'bg-rose-500/15 border-rose-500/40 text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.25)]'
                          : voiceStatus === 'speaking'
                            ? 'bg-purple-500/15 border-purple-500/40 text-purple-300'
                            : voiceStatus === 'replying'
                              ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                              : 'bg-slate-950/60 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${voiceStatus === 'listening' ? 'bg-rose-500 animate-ping' : voiceStatus === 'speaking' ? 'bg-purple-400 animate-pulse' : 'bg-emerald-400'}`} />
                        <span className="font-bold shrink-0">
                          {voiceStatus === 'listening' && (lang === 'hi' ? '🎙️ आपकी आवाज़ सुन रहे हैं:' : '🎙️ Microphone Open (Speak Now):')}
                          {voiceStatus === 'speaking' && (lang === 'hi' ? '🔊 AI प्रश्न पढ़ रहा है:' : '🔊 AI Host Speaking:')}
                          {voiceStatus === 'replying' && (lang === 'hi' ? '✨ AI उत्तर की समीक्षा:' : '✨ Professional AI Confirmation:')}
                          {voiceStatus === 'idle' && (lang === 'hi' ? '🎙️ वॉयस मोड तैयार:' : '🎙️ Voice Host Ready:')}
                        </span>
                        <span className="truncate italic opacity-90">
                          {voiceTranscript 
                            ? `"${voiceTranscript}"` 
                            : voiceStatus === 'listening' 
                              ? (lang === 'hi' ? 'बोलें "विकल्प A", "B", "C", "D" या "रिपीट" / "हिंट"' : 'Say "Option A", "B", "C", "D" or "Repeat" / "Hint"') 
                              : ''}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => currentQuestion && readQuestionOutLoud(currentQuestion)}
                          className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[10px] font-bold cursor-pointer transition-colors"
                          title="Read question out loud again"
                        >
                          🔄 {lang === 'hi' ? 'दोबारा' : 'Repeat'}
                        </button>
                        <button
                          type="button"
                          onClick={() => currentQuestion && startListening(currentQuestion)}
                          className="px-2 py-1 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-[10px] font-bold cursor-pointer transition-colors"
                          title="Open microphone"
                        >
                          🎤 {lang === 'hi' ? 'माइक' : 'Listen'}
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Dynamic 0ms Zero-Lag Visual Banner with Thematic Vector Backdrop */}
                  {(() => {
                    const fallbackHero = category === 'custom-ai' ? '/quiz/ai_hero.jpg' : `/quiz/${category === 'random' ? 'animals' : category}_hero.jpg`;
                    const activeImage = resolveContextualQuestionImage(
                      currentQuestion.question,
                      currentQuestion.topicBadge,
                      category,
                      category === 'custom-ai' ? aiTopic : undefined,
                      currentQuestion.image
                    );
                    const categoryObj = CATEGORIES.find(c => c.id === category);
                    const topicTitle = currentQuestion.topicBadge || (categoryObj?.titles[lang] || categoryObj?.titles['en'] || '');
                    const topicIcon = categoryObj?.icon || '💡';

                    return (
                      <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden relative group border border-slate-800/80 shadow-md bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
                        {/* 0ms Instant Thematic Vector Canvas (Always visible immediately) */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/40">
                          <div className="text-4xl sm:text-5xl mb-2 opacity-85 group-hover:scale-110 transition-transform duration-300">
                            {topicIcon}
                          </div>
                          <span className="text-sm sm:text-base font-bold font-title text-slate-200 tracking-tight">
                            {topicTitle}
                          </span>
                          <span className="text-[11px] font-mono text-emerald-400 mt-1 font-semibold">
                            🌾 Feed Animals in Patna
                          </span>
                        </div>

                        {/* High-Res Visual Photo (Cross-fades over vector canvas when loaded) */}
                        <img
                          src={activeImage}
                          alt={topicTitle || 'Quiz Visual Illustration'}
                          className="w-full h-full object-cover absolute inset-0 z-10 transition-opacity duration-500 ease-out group-hover:scale-105"
                          loading="eager"
                          onError={(e) => {
                            const img = e.target as HTMLImageElement;
                            if (img.src !== fallbackHero && !img.src.endsWith(fallbackHero)) {
                              img.src = fallbackHero;
                            } else {
                              // If even local hero fails, cleanly hide img to show instant vector canvas
                              img.style.display = 'none';
                            }
                          }}
                        />

                        {/* Gradient Scrim */}
                        <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                        
                        {/* Overlay Topic Pills */}
                        <div className="absolute bottom-3 left-3 right-3 z-30 flex items-center justify-between pointer-events-none">
                          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-emerald-300 border border-emerald-500/30 shadow-sm flex items-center gap-1.5">
                            <span>{topicIcon}</span>
                            <span>{topicTitle}</span>
                          </span>
                          <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-amber-500/25 backdrop-blur-md text-amber-300 border border-amber-400/40 shadow-sm">
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
