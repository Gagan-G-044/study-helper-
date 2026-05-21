import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

const PROGRESS_MESSAGES = [
  "Structuring curriculum insights...",
  "Synthesizing simple conceptual models...",
  "Isolating fundamental terminal vocabularies...",
  "Drafting critical mock test prompts...",
  "Polishing premium display structures..."
];

export default function Loader() {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % PROGRESS_MESSAGES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 max-w-md mx-auto text-center relative" id="generator-loader">
      {/* Cinematic Orbital Orbs */}
      <div className="relative w-28 h-28 mb-10 flex items-center justify-center">
        {/* Orbital Ring 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-dashed border-theme-accent-gold/25"
        />
        
        {/* Orbital Ring 2 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute inset-2 rounded-full border border-dotted border-theme-accent-cyan/25"
        />

        {/* Pulse Orb Center */}
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-16 h-16 rounded-full bg-gradient-to-tr from-theme-accent-gold/15 to-theme-accent-cyan/15 border border-border-subtle shadow-[0_0_30px_rgba(198,167,105,0.08)] flex items-center justify-center"
        >
          <Sparkles className="w-6 h-6 text-theme-accent-gold" />
        </motion.div>

        {/* Outer Orbit Sparkle Spot */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute w-2 h-2 rounded-full bg-theme-accent-cyan top-0 left-12 shadow-[0_0_10px_var(--accent-cyan)]"
        />
      </div>

      {/* Narrative Progress Text with Fade In/Out */}
      <div className="h-6 overflow-hidden relative w-full mb-3">
        <AnimatePresence mode="wait">
          <motion.p
            key={msgIndex}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="text-sm font-medium tracking-wide text-theme-text-primary/95"
          >
            {PROGRESS_MESSAGES[msgIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <p className="text-xs text-theme-text-secondary/60 font-light max-w-xs font-sans">
        Applying cognitive models and formatting structures to your provided resources.
      </p>
    </div>
  );
}
