import { quizData, CategoryKey, CategoryData, Question } from './quizData';
import { quizDataHindi } from './quizDataHindi';
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
  if (lang === 'hi') {
    return quizDataHindi;
  }
  return quizData;
}
