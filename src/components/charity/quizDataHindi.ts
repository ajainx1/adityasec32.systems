import { CategoryData, CategoryKey } from './quizData';
import { quizData } from './quizData';

export const DAILY_FACTS_HI: { category: string; fact: string; tag: string }[] = [
  { category: "⚡ प्रकृति ऊर्जा", fact: "बिजली की एक अकेली चमक 30,000 केल्विन से अधिक तापमान पैदा करती है!", tag: "भौतिकी" },
  { category: "🌌 अंतरिक्ष", fact: "ISS पर अंतरिक्ष यात्री हर 6 महीने में पृथ्वी वालों से 0.005 सेकंड कम उम्र के होते हैं।", tag: "सापेक्षता" },
  { category: "🐾 पशु जीव विज्ञान", fact: "ऑक्टोपस के तीन दिल, नीला रक्त और नौ दिमाग होते हैं।", tag: "समुद्री विज्ञान" },
  { category: "🐕 श्वान सेवा", fact: "गली के कुत्ते इंसानी चेहरे के भावों को पहचान सकते हैं।", tag: "पशु व्यवहार" }
];

export const quizDataHindi: Record<CategoryKey, CategoryData> = quizData;
