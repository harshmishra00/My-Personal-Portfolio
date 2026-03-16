import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Animate progress from 0 to 100 over ~1.8s
    let start = null;
    const duration = 1800;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(step);
      } else {
        // Brief pause then exit
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 700);
        }, 200);
      }
    };

    requestAnimationFrame(step);
  }, [onComplete]);

  const letters = 'HARSH MISHRA'.split('');

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[999] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Letters */}
          <div className="flex gap-[0.04em] overflow-hidden mb-10">
            {letters.map((l, i) =>
              l === ' ' ? (
                <span key={i} className="w-[0.5em]" />
              ) : (
                <motion.span
                  key={i}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.055,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-display text-[10vw] md:text-[8vw] uppercase text-white leading-none tracking-tighter select-none"
                >
                  {l}
                </motion.span>
              )
            )}
          </div>

          {/* Progress bar */}
          <div className="w-[240px] md:w-[320px] h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-white"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          {/* Counter */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ delay: 0.4 }}
            className="mt-5 text-white font-sans text-xs tracking-[0.25em] tabular-nums"
          >
            {String(progress).padStart(3, '0')}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
