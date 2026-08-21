"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Terminal, Shield, ShieldCheck, Lock, Unlock, AlertTriangle, CheckCircle2, XCircle, ArrowRight, RefreshCw, UserCheck, X, Download, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { logSecurityEvent } from "./TelegramVisitorLogger";

interface Question {
  id: number;
  category: string;
  difficulty: "HARD" | "EXPERT" | "ELITE";
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const QUESTION_BANK: Question[] = [
  {
    id: 1,
    category: "ACTIVE DIRECTORY & KERBEROS",
    difficulty: "EXPERT",
    question: "An adversary queries Active Directory for user accounts with registered Service Principal Names (SPNs) and requests TGS tickets to crack the hashes offline. What attack is this?",
    options: [
      "Golden Ticket Attack (T1558.001)",
      "Kerberoasting (T1558.003)",
      "AS-REP Roasting (T1558.004)",
      "DCSync Directory Replication"
    ],
    correct: 1,
    explanation: "Kerberoasting targets user accounts with SPNs to request RC4/AES encrypted Kerberos TGS tickets and extract crackable password hashes offline without administrative privileges."
  },
  {
    id: 2,
    category: "PACKET ANALYSIS & NETWORK DEFENSE",
    difficulty: "HARD",
    question: "You inspect a Wireshark capture of an evasive port scan. You observe packets containing TCP Flags FIN, PSH, and URG (0x029) sent to closed ports. What scan type is this?",
    options: [
      "TCP SYN Stealth Scan",
      "Xmas Tree Scan (RFC 793)",
      "TCP Null Scan (0x000)",
      "ACK Window Probe"
    ],
    correct: 1,
    explanation: "A TCP Xmas Scan sets FIN, PSH, and URG flags simultaneously. In accordance with RFC 793, closed ports respond with a RST frame, while open ports silently drop the unexpected packet combination."
  },
  {
    id: 3,
    category: "EDR TELEMETRY & MEMORY FORENSICS",
    difficulty: "EXPERT",
    question: "SentinelOne flags an unknown binary requesting PROCESS_VM_READ and PROCESS_DUP_HANDLE on lsass.exe followed by MiniDumpWriteDump. What is the immediate threat?",
    options: [
      "SAM Registry Hive Exfiltration",
      "LSASS Memory Dumping (Mimikatz / T1003.001)",
      "Pass-the-Hash NTLM Relay",
      "Shadow Copy NTDS.dit Deletion"
    ],
    correct: 1,
    explanation: "Direct memory reads against LSASS attempt to harvest active plain-text NTLM credentials, Kerberos tickets, and DPAPI master keys loaded in user sessions."
  },
  {
    id: 4,
    category: "SIEM DETECTION & INCIDENT RESPONSE",
    difficulty: "HARD",
    question: "In Wazuh SIEM logs, you detect w3wp.exe (IIS Worker Process) spawning powershell.exe -enc executing Base64 encoded payloads. What initial access vector is indicated?",
    options: [
      "Phishing Email Macro Execution",
      "Web Shell / Remote Code Execution (RCE)",
      "Kerberos Silver Ticket Forgery",
      "DLL Search Order Sideloading"
    ],
    correct: 1,
    explanation: "Web server processes (w3wp.exe, httpd, nginx) spawning interactive command shells like powershell.exe is a high-fidelity indicator of a web application exploit or dropped web shell."
  },
  {
    id: 5,
    category: "NGFW ARCHITECTURE & ZERO TRUST",
    difficulty: "ELITE",
    question: "When deploying Check Point or Palo Alto NGFW for deep visibility, what engine decrypts outbound client TLS 1.3 traffic to inspect payload heuristics before forwarding?",
    options: [
      "SSL/TLS Forward Proxy Decryption & App-ID Engine",
      "Dynamic PAT Overload Port Address Translation",
      "BGP Autonomous Route Reflector",
      "Split-Tunnel IPSec Virtual Adapter"
    ],
    correct: 0,
    explanation: "SSL Forward Proxy intercepts client TLS handshakes, dynamically presents a trusted enterprise sub-CA certificate, and exposes cleartext payload streams to DPI, Threat Prevention, and AV engines."
  },
  {
    id: 6,
    category: "LATERAL MOVEMENT & ENTERPRISE HARDENING",
    difficulty: "EXPERT",
    question: "An adversary uses Impacket-WMIExec and PsExec over SMB (TCP 445) and RPC (TCP 135) for lateral movement. Which architectural control permanently mitigates this across Tier 1?",
    options: [
      "Disabling Active Directory DNS",
      "Enforcing SMB Signing, Host Firewall RPC Restrictions & Tiered Admin Model",
      "Permitting all LAN traffic through the Perimeter Gateway",
      "Disabling Kerberos Pre-Authentication"
    ],
    correct: 1,
    explanation: "Enforcing SMB signing prevents NTLM relaying, while local firewall RPC filtering and Active Directory tiering (restricting Tier 0 Domain Admins from logging into Tier 1/2 systems) isolates lateral spread."
  }
];

interface ResumeSecurityChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ResumeSecurityChallengeModal({
  isOpen,
  onClose,
  onSuccess
}: ResumeSecurityChallengeModalProps) {
  // Pre-seed with the first 3 questions so it's NEVER empty on initial render
  const [questions, setQuestions] = useState<Question[]>(QUESTION_BANK.slice(0, 3));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [recruiterPass, setRecruiterPass] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [autoAdvanceTimer, setAutoAdvanceTimer] = useState<NodeJS.Timeout | null>(null);

  // Trigger download helper
  const triggerFileDownload = useCallback((method: string, finalScore: number) => {
    logSecurityEvent("RESUME_DOWNLOAD_UNLOCKED", {
      method: method,
      score: finalScore,
      timestamp: new Date().toISOString()
    });

    try {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.setAttribute("download", "Aditya_Jain_Cybersecurity_Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.location.href = "/resume.pdf";
    }

    onSuccess();
  }, [onSuccess]);

  // Shuffle questions when modal opens
  useEffect(() => {
    if (isOpen) {
      const shuffled = [...QUESTION_BANK].sort(() => 0.5 - Math.random()).slice(0, 3);
      setQuestions(shuffled);
      setCurrentIndex(0);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrect(false);
      setScore(0);
      setIsUnlocked(false);
      setRecruiterPass(false);
      setTimeLeft(60);

      logSecurityEvent("RESUME_CHALLENGE_OPENED", {
        timestamp: new Date().toISOString()
      });
    }
    return () => {
      if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
    };
  }, [isOpen]);

  // Timer countdown
  useEffect(() => {
    if (!isOpen || isAnswered || isUnlocked || recruiterPass) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsAnswered(true);
          setIsCorrect(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen, currentIndex, isAnswered, isUnlocked, recruiterPass]);

  // Handle Answer Selection
  const handleSelectOption = (idx: number) => {
    if (isAnswered || isUnlocked) return;

    setSelectedOption(idx);
    setIsAnswered(true);

    const currentQ = questions[currentIndex] || QUESTION_BANK[0];
    const correct = idx === currentQ.correct;
    setIsCorrect(correct);

    if (correct) {
      const newScore = score + 1;
      setScore(newScore);

      if (currentIndex === questions.length - 1) {
        // Last question solved!
        const timer = setTimeout(() => {
          setIsUnlocked(true);
          triggerFileDownload("TRIVIA_SOLVED", newScore);
        }, 1200);
        setAutoAdvanceTimer(timer);
      } else {
        // Auto advance to next question after 1.2s
        const timer = setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
          setSelectedOption(null);
          setIsAnswered(false);
          setIsCorrect(false);
          setTimeLeft(60);
        }, 1200);
        setAutoAdvanceTimer(timer);
      }
    }
  };

  // Keyboard shortcut support (A, B, C, D or 1, 2, 3, 4)
  useEffect(() => {
    if (!isOpen || isAnswered || isUnlocked) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      if (key === "A" || key === "1") handleSelectOption(0);
      else if (key === "B" || key === "2") handleSelectOption(1);
      else if (key === "C" || key === "3") handleSelectOption(2);
      else if (key === "D" || key === "4") handleSelectOption(3);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handleManualProceed = () => {
    if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrect(false);
      setTimeLeft(60);
    } else {
      setIsUnlocked(true);
      triggerFileDownload("TRIVIA_SOLVED", score);
    }
  };

  const handleRetryStage = () => {
    if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
    setIsAnswered(false);
    setSelectedOption(null);
    setIsCorrect(false);
    setTimeLeft(60);
  };

  const handleRecruiterBypass = () => {
    if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
    setRecruiterPass(true);
    setIsUnlocked(true);
    triggerFileDownload("RECRUITER_FAST_PASS", 3);
  };

  if (!isOpen) return null;

  const currentQ = questions[currentIndex] || QUESTION_BANK[0];
  const progressPercent = Math.round(((currentIndex + (isUnlocked ? 1 : 0)) / questions.length) * 100);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl font-sans animate-fade-in">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-black border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(16,185,129,0.25)] text-slate-100 relative overflow-hidden"
      >
        {/* Top Terminal Header */}
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono font-bold text-emerald-400 tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>SECOPS CLEARANCE GATEWAY // LEVEL 4</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold font-title text-white">
                Aditya Jain &mdash; Classified Resume Decryption
              </h2>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
            aria-label="Close Gateway"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Unlocked / Download State */}
        {isUnlocked ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 space-y-5"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              <Unlock className="w-10 h-10 animate-bounce" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black font-title text-emerald-400">
                CLEARANCE VERIFIED // SHA-256 DECRYPTED
              </h3>
              <p className="text-xs font-mono text-slate-300 max-w-md mx-auto leading-relaxed">
                {recruiterPass 
                  ? "Recruiter fast pass granted! Downloading Aditya's Executive Cybersecurity Engineer Resume (PDF)..."
                  : "All 3 SecOps challenges successfully solved! Downloading verified resume..."}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>SHA-256: 4a8b92c13e7f8902b5d41a9c77e063f8</span>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/resume.pdf"
                download="Aditya_Jain_Cybersecurity_Resume.pdf"
                className="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-mono font-bold text-xs hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/30 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Click here if download does not trigger</span>
              </a>
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-mono font-bold text-xs text-slate-300 transition-all cursor-pointer"
              >
                Close Gateway
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {/* Decryption Progress Bar & Timer */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 font-bold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>DECRYPTION STAGE {currentIndex + 1} OF {questions.length}</span>
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">⏱️ {timeLeft}s remaining</span>
                  <span className="text-slate-500">&bull;</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-[10px]">
                    {currentQ.difficulty}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2.5 rounded-full bg-slate-950 border border-emerald-500/30 overflow-hidden p-0.5 shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 shadow-md">
              <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                <Shield className="w-3 h-3" />
                <span>// {currentQ.category}</span>
              </div>
              <p className="text-sm sm:text-base font-bold text-white leading-relaxed font-title">
                {currentQ.question}
              </p>

              {/* Options */}
              <div className="space-y-2.5 pt-2">
                {currentQ.options.map((opt, idx) => {
                  let optStyle = "bg-slate-900/90 border-slate-800 text-slate-200 hover:border-emerald-500/60 hover:bg-slate-800";
                  
                  if (isAnswered) {
                    if (idx === currentQ.correct) {
                      optStyle = "bg-emerald-500/25 border-emerald-400 text-emerald-300 font-bold shadow-[0_0_20px_rgba(16,185,129,0.35)]";
                    } else if (idx === selectedOption) {
                      optStyle = "bg-rose-500/25 border-rose-500 text-rose-300 font-bold";
                    } else {
                      optStyle = "opacity-35 bg-slate-900 border-slate-800 text-slate-500";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm font-mono transition-all flex items-center justify-between gap-3 cursor-pointer ${optStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-lg bg-black/50 border border-white/15 flex items-center justify-center font-bold text-xs text-slate-300 shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {isAnswered && idx === currentQ.correct && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                      {isAnswered && idx === selectedOption && idx !== currentQ.correct && (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Answer Feedback & Explanation */}
            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl border text-xs leading-relaxed font-mono ${
                    isCorrect 
                      ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300" 
                      : "bg-rose-500/10 border-rose-500/40 text-rose-300"
                  }`}
                >
                  <div className="font-bold flex items-center gap-2 mb-1 text-sm">
                    {isCorrect ? (
                      <>
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>AUTHORIZATION ACCEPTED // ADVANCING...</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-4 h-4 text-rose-400" />
                        <span>CLEARANCE DENIED // INCORRECT SPECIFICATION</span>
                      </>
                    )}
                  </div>
                  <p className="text-slate-300 font-sans text-xs">{currentQ.explanation}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-800">
              {/* Recruiter 1-Click Fast Pass */}
              <button
                type="button"
                onClick={handleRecruiterBypass}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 px-3.5 py-2.5 rounded-xl border border-amber-500/30 transition-all cursor-pointer"
                title="Hiring Managers & HR Fast Track"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Recruiter / HR Fast Pass (Instant Download)</span>
              </button>

              {/* Proceed / Retry Buttons */}
              {isAnswered && (
                <div className="flex items-center gap-2">
                  {isCorrect ? (
                    <button
                      type="button"
                      onClick={handleManualProceed}
                      className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-mono font-bold text-xs hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-md shadow-emerald-500/25 cursor-pointer"
                    >
                      <span>{currentIndex < questions.length - 1 ? `Proceed to Stage ${currentIndex + 2}` : "Download Decrypted Resume"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleRetryStage}
                      className="px-5 py-2.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 hover:bg-rose-500/30 font-mono font-bold text-xs transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Retry Stage {currentIndex + 1}</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
