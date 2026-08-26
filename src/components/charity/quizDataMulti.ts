import { quizData, CategoryKey, CategoryData, Question } from './quizData';
import { HINDI_QUESTIONS } from './quizDataHindiFull';
import { SPANISH_QUESTIONS } from './quizDataSpanishFull';
import { FRENCH_QUESTIONS } from './quizDataFrenchFull';
import { Language } from './i18n';

export function shuffleOptions(q: Question): Question {
  const options = [...q.options];
  const correctText = options[q.answer];
  
  // Fisher-Yates Shuffle
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  
  const newAnswerIndex = options.indexOf(correctText);
  return {
    ...q,
    options,
    answer: newAnswerIndex >= 0 ? newAnswerIndex : 0,
  };
}

export function getQuizDataForLanguage(lang: Language): Record<CategoryKey, CategoryData> {
  switch (lang) {
    case 'hi':
      return HINDI_QUESTIONS as unknown as Record<CategoryKey, CategoryData>;
    case 'es':
      return SPANISH_QUESTIONS as unknown as Record<CategoryKey, CategoryData>;
    case 'fr':
      return FRENCH_QUESTIONS as unknown as Record<CategoryKey, CategoryData>;
    default:
      return quizData;
  }
}
