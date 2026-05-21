import { useState } from "react";
import { motion } from "motion/react";
import { 
  BookOpen, 
  CheckSquare, 
  HelpCircle, 
  Layers, 
  Copy, 
  Check, 
  CornerDownRight,
  Sparkles
} from "lucide-react";
import { StudyResult } from "../types";

interface ResultSectionProps {
  result: StudyResult;
}

export default function ResultSection({ result }: ResultSectionProps) {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(0);

  const copyToClipboard = (sectionKey: string, textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedSection(sectionKey);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  // Prepare full markdown-like string of the sections for overall copying if needed
  const getFullExplanationText = () => {
    return `### SIMPLE EXPLANATION\n\n${result.simpleExplanation}`;
  };

  const getFullRevisionText = () => {
    return `### REVISION NOTES\n\n${result.revisionNotes.map(n => `• ${n}`).join("\n")}`;
  };

  const getFullQuestionsText = () => {
    return `### REVIEW QUESTIONS\n\n${result.importantQuestions.map((q, idx) => `Q${idx + 1}: ${q.question}\nA: ${q.answer}`).join("\n\n")}`;
  };

  const getFullConceptsText = () => {
    return `### KEY CONCEPTS\n\n${result.keyConcepts.map(c => `${c.concept}: ${c.definition}`).join("\n")}`;
  };

  // Animation constants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 15 
      } 
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-8 w-full max-w-5xl mx-auto"
      id="study-results-container"
    >
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#C6A769]/10 text-[#C6A769] border border-[#C6A769]/20">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h2 className="text-[21px] font-normal italic font-serif tracking-tight text-theme-text-primary">Synthesized Insights</h2>
            <p className="text-xs text-theme-text-secondary/80">Review your customized educational resources below</p>
          </div>
        </div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-[#8FBFC9] px-2.5 py-1 bg-[#8FBFC9]/10 rounded-full border border-[#8FBFC9]/25">
          Engineered by Gemini
        </div>
      </div>

      {/* 1. SIMPLE EXPLANATION CARD (Full Width, Editorial Text) */}
      <motion.div 
        variants={itemVariants}
        className="glass-panel-gold rounded-2xl p-6 md:p-8 relative overflow-hidden group shadow-2xl transition-all duration-300 hover:border-[#C6A769]/30"
        id="explanation-card"
      >
        {/* Soft elegant top indicator glow */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C6A769]/40 to-transparent" />
        
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-md bg-[#C6A769]/10 text-[#C6A769] border border-[#C6A769]/20">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="text-[11px] sm:text-xs md:text-sm font-extrabold tracking-[0.18em] sm:tracking-[0.25em] text-[#C6A769] uppercase font-['Verdana'] italic">
              Narrative Explanation
            </h3>
          </div>
          
          <button
            onClick={() => copyToClipboard("explanation", getFullExplanationText())}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-theme-text-secondary hover:text-theme-text-primary hover:bg-white/10 transition-all duration-200"
            title="Copy Simple Explanation"
          >
            {copiedSection === "explanation" ? (
              <Check className="w-4 h-4 text-[#C6A769]" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="font-['Verdana'] font-normal text-[15px] leading-[35.5px] text-theme-text-primary/95 selection:bg-[#C6A769]/20">
            "{result.simpleExplanation}"
          </p>
        </div>
      </motion.div>

      {/* Grid for core elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* 2. REVISION NOTES CARD */}
        <motion.div 
          variants={itemVariants}
          className="glass-panel rounded-2xl p-6 relative overflow-hidden group shadow-xl hover:border-theme-text-primary/10 transition-all duration-300"
          id="revision-notes-card"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-md bg-[#8FBFC9]/10 text-[#8FBFC9] border border-[#8FBFC9]/20">
                <CheckSquare className="w-4 h-4" />
              </div>
              <h3 className="text-[11px] sm:text-xs md:text-sm font-extrabold tracking-[0.18em] sm:tracking-[0.25em] text-[#8FBFC9] uppercase font-sans italic">
                Revision Playbook
              </h3>
            </div>
            
            <button
              onClick={() => copyToClipboard("revision", getFullRevisionText())}
              className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-theme-text-secondary hover:text-theme-text-primary hover:bg-white/10 transition-all duration-200"
              title="Copy Revision Guide"
            >
              {copiedSection === "revision" ? (
                <Check className="w-4 h-4 text-[#8FBFC9]" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          <ul className="space-y-4">
            {result.revisionNotes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-3 group/item">
                <span className="mt-1.5 text-[#C6A769] flex-shrink-0">
                  <CornerDownRight className="w-3.5 h-3.5 opacity-65 group-hover/item:translate-x-0.5 transition-transform" />
                </span>
                <p className="text-sm text-theme-text-primary/90 leading-relaxed font-light tracking-wide font-sans">
                  {note}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 3. KEY CONCEPTS GLOSSARY */}
        <motion.div 
          variants={itemVariants}
          className="glass-panel rounded-2xl p-6 relative overflow-hidden group shadow-xl hover:border-theme-text-primary/10 transition-all duration-300"
          id="key-concepts-card"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-md bg-[#5C8A73]/10 text-[#5C8A73] border border-[#5C8A73]/20">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-[11px] sm:text-xs md:text-sm font-extrabold tracking-[0.18em] sm:tracking-[0.25em] text-[#5C8A73] uppercase font-sans italic">
                Core Principles
              </h3>
            </div>
            
            <button
              onClick={() => copyToClipboard("concepts", getFullConceptsText())}
              className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-theme-text-secondary hover:text-theme-text-primary hover:bg-white/10 transition-all duration-200"
              title="Copy Key Terminology"
            >
              {copiedSection === "concepts" ? (
                <Check className="w-4 h-4 text-[#5C8A73]" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          <div className="space-y-4">
            {result.keyConcepts.map((item, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#5C8A73]/20 hover:bg-white/[0.04] transition-all duration-300 group/concept"
              >
                <h4 className="text-xs font-semibold font-mono tracking-wider text-[#C6A769] mb-1 group-hover/concept:text-theme-text-primary transition-colors">
                  {item.concept}
                </h4>
                <p className="text-xs text-theme-text-secondary leading-relaxed font-light font-sans">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 4. IMPORTANT QUESTIONS (Interactive Accordion Details) */}
      <motion.div 
        variants={itemVariants}
        className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden group shadow-xl hover:border-theme-text-primary/10 transition-all duration-300"
        id="scientific-qa-card"
      >
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-md bg-[#C6A769]/10 text-[#C6A769] border border-[#C6A769]/20">
              <HelpCircle className="w-4 h-4" />
            </div>
            <h3 className="text-[11px] sm:text-xs md:text-sm font-extrabold tracking-[0.18em] sm:tracking-[0.25em] text-[#C6A769] uppercase font-sans">
              Critical Review Q&amp;A
            </h3>
          </div>
          
          <button
            onClick={() => copyToClipboard("questions", getFullQuestionsText())}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-theme-text-secondary hover:text-theme-text-primary hover:bg-white/10 transition-all duration-200"
            title="Copy Review Questions"
          >
            {copiedSection === "questions" ? (
              <Check className="w-4 h-4 text-[#C6A769]" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        <div className="space-y-3">
          {result.importantQuestions.map((qa, idx) => {
            const isOpen = activeQuestion === idx;
            return (
              <div 
                key={idx}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen 
                    ? "bg-white/[0.03] border-white/10 shadow-lg" 
                    : "bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.01]"
                }`}
              >
                <button
                  onClick={() => setActiveQuestion(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A769]/50 rounded-xl"
                >
                  <span className="text-sm font-medium pr-4 select-none text-theme-text-primary group-hover:text-theme-text-primary tracking-wide">
                    {qa.question}
                  </span>
                  <span className="text-xs font-mono text-[#8FBFC9] ml-auto flex-shrink-0">
                    {isOpen ? "[ Collapse ]" : "[ Reveal ]"}
                  </span>
                </button>
                
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-white/5">
                    <p className="text-xs text-theme-text-secondary leading-relaxed font-light mt-2 selection:bg-[#C6A769]/20">
                      {qa.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
