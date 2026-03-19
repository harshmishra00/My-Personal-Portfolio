import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

const STATS = [
  { value: '5+', label: 'Projects' },
  { value: '400+', label: 'DSA' },
  { value: '2026', label: 'Lead' },
];

const Hero = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-background">

      {/* ═══════════════════════════════════════════════════
          MOBILE LAYOUT  (hidden on md and above)
      ═══════════════════════════════════════════════════ */}
      {!isDesktop && (
        <div className="md:hidden flex flex-col min-h-screen px-6 pt-28 pb-10">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 self-start bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
            </span>
            <span className="text-white/60 text-xs font-medium tracking-wide">Available for work</span>
          </motion.div>

          {/* Name — takes up most of screen */}
          <div className="flex-1 flex flex-col justify-center">

            {/* Faint "Hello I'm" label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-white text-xs uppercase tracking-[0.3em] font-medium mb-4"
            >
              Hello, I'm
            </motion.p>

            {/* Giant name */}
            <div className="overflow-hidden mb-1">
              <motion.span
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block font-display text-[22vw] leading-[0.85] tracking-tighter uppercase text-white"
              >
                Harsh
              </motion.span>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.span
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="block font-display text-[22vw] leading-[0.85] tracking-tighter uppercase"
                style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.4)', color: 'transparent' }}
              >
                Mishra
              </motion.span>
            </div>

            {/* Role line */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-white/45 text-sm font-medium mb-6 border-l border-white/15 pl-4"
            >
              Full-Stack Developer · MERN · React · Node.js
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center gap-6 mb-10"
            >
              {STATS.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display text-2xl text-white leading-none tracking-tighter">{s.value}</span>
                  <span className="text-white/25 text-[10px] uppercase tracking-widest mt-0.5 font-medium">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* CTAs — pinned to bottom */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col gap-3"
          >
            <a
              href="#work"
              className="w-full text-center bg-white text-black py-4 rounded-2xl text-base font-bold active:scale-95 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              View My Work →
            </a>
            <a
              href="mailto:harshschoollife@gmail.com"
              className="w-full text-center border border-white/10 bg-white/5 text-white/80 py-4 rounded-2xl text-base font-semibold active:scale-95 transition-transform"
            >
              Let's Connect
            </a>
          </motion.div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════
          DESKTOP LAYOUT  (hidden on mobile)
      ═══════════════════════════════════════════════════ */}
      {isDesktop && (
        <div className="hidden md:flex flex-col items-center justify-center min-h-screen pt-24 pb-16">

          {/* Background Text */}
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="font-display text-[12vw] leading-none bg-gradient-to-b from-white to-[#0F0F0F] bg-clip-text text-transparent whitespace-nowrap mb-[32rem] text-center"
            >
              Hello, I'm
            </motion.span>
          </div>

          {/* Main Title */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-[60%] select-none pointer-events-none flex flex-col items-center justify-center z-20">
            <motion.h1
              initial={{ opacity: 0, y: 60, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
              className="hero-title text-white font-display tracking-tighter uppercase flex flex-col items-center text-center leading-[0.9] text-[12vw]"
            >
              <span>Harsh</span>
              <span>Mishra</span>
            </motion.h1>
          </div>

          {/* Spacer */}
          <div className="relative w-full max-w-[1200px] h-[600px]" />

          {/* Subtext and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative flex flex-col items-center max-w-[640px] text-center px-6 gap-8"
          >
            <h5 className="text-[#999999] text-base lg:text-lg font-medium leading-relaxed">
              Full-Stack Developer experienced in building scalable, responsive applications using MERN, React and Node.js.
            </h5>

            <div className="flex items-center gap-4">
              <a href="#work" className="group flex items-center gap-2.5 bg-white text-black px-8 py-3.5 rounded-full text-base font-bold hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.12)]">
                View My Work
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="mailto:harshschoollife@gmail.com" className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-8 py-3.5 rounded-full text-base font-semibold text-white/80 transition-all duration-300 hover:bg-white/10 hover:scale-105">
                Let's Connect
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="flex items-center gap-10 pt-2"
            >
              {STATS.map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="font-display text-2xl text-white leading-none tracking-tighter">{s.value}</span>
                  <span className="text-white/30 text-[11px] uppercase tracking-widest mt-1 font-medium">{s.label}</span>
                </div>
              ))}
            </motion.div>

            <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-5 py-2 rounded-full backdrop-blur-sm">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
              </div>
              <span className="text-white/60 text-xs font-medium tracking-wide">Available for work</span>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;
