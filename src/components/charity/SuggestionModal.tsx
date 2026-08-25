"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Star, CheckCircle2, MessageSquarePlus, Lightbulb, MapPin, Heart, Globe, Bug, Handshake } from 'lucide-react';
import { Language, getTranslation } from './i18n';
import { logSecurityEvent } from '../TelegramVisitorLogger';

interface SuggestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onRewardGrains?: (amount: number) => void;
  addToast: (msg: string, type: 'success' | 'error' | 'info') => void;
}

type SuggestionCategory = 'quiz' | 'feeding' | 'feature' | 'language' | 'bug' | 'csr';

export default function SuggestionModal({
  isOpen,
  onClose,
  lang,
  onRewardGrains,
  addToast,
}: SuggestionModalProps) {
  const [category, setCategory] = useState<SuggestionCategory>('quiz');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = (key: string) => getTranslation(key, lang);

  const categories: { id: SuggestionCategory; icon: string; labelEn: string; labelHi: string; desc: string }[] = [
    { id: 'quiz', icon: '💡', labelEn: 'Quiz Topic / Question', labelHi: 'क्विज़ विषय / प्रश्न विचार', desc: 'Suggest a trivia question or topic' },
    { id: 'feeding', icon: '🐾', labelEn: 'Animal Feeding Drive', labelHi: 'पशु भोजन / बचाव स्थल', desc: 'Share dog pack locations in Patna' },
    { id: 'feature', icon: '⚡', labelEn: 'New Feature Idea', labelHi: 'नई सुविधा का विचार', desc: 'Game modes, streaks or mechanics' },
    { id: 'language', icon: '🌐', labelEn: 'Translation / Language', labelHi: 'भाषा एवं अनुवाद', desc: 'Request your regional language' },
    { id: 'bug', icon: '🐛', labelEn: 'Bug Report / UI Polish', labelHi: 'बग रिपोर्ट / सुधार', desc: 'Report any glitches or typos' },
    { id: 'csr', icon: '🤝', labelEn: 'Sponsorship / CSR', labelHi: 'प्रायोजन एवं साझेदारी', desc: 'Partner to fund animal meals' },
  ];

  const quickIdeas = [
    { icon: '🐾', textEn: 'Feeding spot near Patna Junction & Rajbansi Nagar', textHi: 'पटना जंक्शन एवं राजबंशी नगर के पास श्वान भोजन स्थल' },
    { icon: '💡', textEn: 'Add Ancient Indian History & Philosophy category', textHi: 'प्राचीन भारतीय इतिहास एवं दर्शनशास्त्र श्रेणी जोड़ें' },
    { icon: '🌐', textEn: 'Add Marathi and Gujarati language support', textHi: 'मराठी और गुजराती भाषा का समर्थन जोड़ें' },
    { icon: '🎮', textEn: 'Add a 60-second rapid-fire karma challenge mode', textHi: '60-सेकंड की रैपिड-फायर कर्म चुनौती जोड़ें' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim()) {
      addToast(lang === 'hi' ? 'कृपया अपना सुझाव दर्ज करें' : 'Please enter your suggestion or idea', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        category,
        name: name.trim() || 'Anonymous Contributor',
        email: email.trim() || 'Not Provided',
        suggestion: suggestion.trim(),
        rating,
        lang,
        submittedAt: new Date().toISOString(),
      };

      // 1. Save to LocalStorage
      const savedSuggestions = JSON.parse(localStorage.getItem('cyberkarma_suggestions') || '[]');
      savedSuggestions.unshift(payload);
      localStorage.setItem('cyberkarma_suggestions', JSON.stringify(savedSuggestions.slice(0, 50)));

      // 2. Dispatch Live Telemetry Notification to Founder Telegram Bot
      await logSecurityEvent('COMMUNITY_SUGGESTION', {
        Category: category.toUpperCase(),
        Contributor: name.trim() || 'Anonymous',
        Email: email.trim() || 'N/A',
        Rating: rating + ' / 5 ⭐',
        Suggestion: suggestion.trim(),
        Language: lang,
      });

      // 3. Award +25 Grains Karma Bonus
      if (onRewardGrains) {
        onRewardGrains(25);
      }

      setIsSubmitted(true);
      addToast(lang === 'hi' ? '🎉 सुझाव दर्ज हुआ! +25 दाने अन्नदान बोनस मिला!' : '🎉 Suggestion submitted! +25 Grains Karma Bonus awarded!', 'success');
    } catch (err) {
      console.error(err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSuggestion('');
    setName('');
    setEmail('');
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[220] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-2xl overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
            className="relative max-w-2xl w-full my-auto rounded-[32px] overflow-hidden border border-emerald-500/40 shadow-[0_0_80px_rgba(16,185,129,0.3)] bg-gradient-to-b from-slate-900/98 via-slate-950/98 to-black text-white p-6 sm:p-8 space-y-5"
          >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/3 w-72 h-72 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl pointer-events-none translate-y-1/2" />
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 animate-pulse" />

            {/* Header */}
            <div className="relative z-10 flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                  💡
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-widest bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {t('suggestionsWelcome') || 'Suggestions Welcome'}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 animate-pulse">
                      🎁 +25 Grains Bonus
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black font-title tracking-tight text-white mt-1">
                    {t('suggestionsModalTitle') || 'Community Suggestions & Feedback'}
                  </h2>
                  <p className="text-xs text-slate-300 font-mono">
                    {t('suggestionsModalSubtitle') || 'Help shape CyberKarma! Suggest new trivia topics, animal feeding locations, feature ideas, or report UI bugs.'}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center text-base font-bold transition-all cursor-pointer hover:scale-105 shrink-0"
                title="Close"
              >
                ✕
              </button>
            </div>

            {/* Success State */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 py-8 text-center space-y-5"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-4xl shadow-xl shadow-emerald-500/30 mx-auto animate-bounce">
                  🎉
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-2xl font-black font-title text-emerald-400">
                    {t('suggestionSuccessTitle') || '🎉 Suggestion Received!'}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {t('suggestionSuccessDesc') || 'Thank you for contributing! Your idea has been sent directly to founder Aditya Jain (adityasec32@gmail.com).'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 max-w-sm mx-auto text-xs font-mono text-emerald-300 font-bold flex items-center justify-center gap-2">
                  <Sparkles size={16} />
                  <span>{t('suggestionBonus') || '+25 Grains Karma Bonus Awarded!'}</span>
                </div>

                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black font-mono text-xs shadow-lg transition-all cursor-pointer hover:scale-105"
                  >
                    {lang === 'hi' ? 'प्रश्नोत्तरी जारी रखें 🐾' : 'Back to Quiz 🐾'}
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold font-mono text-xs transition-all cursor-pointer"
                  >
                    {lang === 'hi' ? 'एक और सुझाव भेजें' : 'Send Another Idea'}
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Submission Form */
              <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                {/* Category Picker Chips */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <span>1. {t('suggestionCategory') || 'Category'}:</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {categories.map(cat => (
                      <button
                        type="button"
                        key={cat.id}
                        onClick={() => setCategory(cat.id)}
                        className={`p-2 rounded-xl border text-left transition-all flex items-center gap-2 cursor-pointer ${
                          category === cat.id
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-md'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <span className="text-lg shrink-0">{cat.icon}</span>
                        <div className="min-w-0">
                          <div className="text-[11px] font-bold truncate">
                            {lang === 'hi' ? cat.labelHi : cat.labelEn}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Fill Idea Chips */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                    <span>💡 Quick Inspiration (Tap to Fill):</span>
                  </div>
                  <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                    {quickIdeas.map((qi, i) => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => setSuggestion(lang === 'hi' ? qi.textHi : qi.textEn)}
                        className="px-2.5 py-1 rounded-lg bg-black/40 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/30 text-[10px] font-mono text-slate-300 hover:text-purple-300 transition-all shrink-0 cursor-pointer"
                      >
                        {qi.icon} {lang === 'hi' ? qi.textHi : qi.textEn}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Textarea for Suggestion */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-mono font-bold text-slate-300">
                    <label htmlFor="suggestionInput">
                      2. {t('suggestionText') || 'Your Suggestion or Idea'}: <span className="text-emerald-400">*</span>
                    </label>
                    <span className="text-[10px] text-slate-400">{suggestion.length} / 1000</span>
                  </div>
                  <textarea
                    id="suggestionInput"
                    rows={3}
                    maxLength={1000}
                    value={suggestion}
                    onChange={e => setSuggestion(e.target.value)}
                    placeholder={t('suggestionPlaceholder') || 'Share your idea, a new trivia question, or a street animal feeding spot in Patna...'}
                    required
                    className="w-full p-3.5 rounded-2xl bg-black/60 border border-white/15 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30 text-xs font-mono text-white placeholder:text-slate-500 outline-none transition-all resize-none shadow-inner"
                  />
                </div>

                {/* Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor="suggestionName" className="text-[11px] font-mono text-slate-400">
                      {t('suggestionName') || 'Your Name / Nickname (Optional)'}
                    </label>
                    <input
                      id="suggestionName"
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="e.g. Alex / Patna Volunteer"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 focus:border-emerald-400 text-xs font-mono text-white placeholder:text-slate-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="suggestionEmail" className="text-[11px] font-mono text-slate-400">
                      {t('suggestionEmail') || 'Email (Optional, for replies)'}
                    </label>
                    <input
                      id="suggestionEmail"
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 focus:border-emerald-400 text-xs font-mono text-white placeholder:text-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Rating Bar */}
                <div className="flex items-center justify-between p-2.5 px-4 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-xs font-mono text-slate-300">
                    {lang === 'hi' ? 'मंच अनुभव रेटिंग:' : 'Platform Experience:'}
                  </span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className={`text-lg transition-transform hover:scale-125 cursor-pointer ${
                          star <= rating ? 'text-amber-400' : 'text-slate-600'
                        }`}
                        title={star + ' Star'}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || !suggestion.trim()}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hover:brightness-110 disabled:opacity-50 text-slate-950 font-black font-title text-xs tracking-wide shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02] active:scale-98"
                  >
                    <Send size={15} />
                    <span>{isSubmitting ? (t('submittingSuggestion') || 'Submitting...') : (t('submitSuggestion') || 'Submit Suggestion & Earn +25 Grains 🚀')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-slate-300 font-bold font-mono text-xs transition-colors cursor-pointer"
                  >
                    {lang === 'hi' ? 'रद्द करें' : 'Cancel'}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
