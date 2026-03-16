import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '5+', label: 'Projects' },
  { value: '400+', label: 'DSA Problems' },
  { value: '2026', label: 'Campus Lead' },
];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background pt-24 pb-16">

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="font-display text-[10vw] md:text-[12vw] leading-none bg-gradient-to-b from-white to-[#0F0F0F] bg-clip-text text-transparent whitespace-nowrap mb-[32rem]"
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
      <div className="relative w-full max-w-[1200px] h-[500px] md:h-[600px]" />

      {/* Subtext and CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative mt-16 flex flex-col items-center max-w-[640px] text-center px-6 gap-8"
      >
        <h5 className="relative z-0 text-[#999999] text-base md:text-lg font-medium leading-relaxed">
          Full-Stack Developer experienced in building scalable, responsive applications using MERN, React and Node.js.
        </h5>

        {/* CTAs */}
        <div className="relative z-30 flex flex-col sm:flex-row items-center gap-4">
          <a href="#work" className="group flex items-center gap-2.5 bg-white text-black px-8 py-3.5 rounded-full text-base font-bold hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.12)]">
            View My Work
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="mailto:harshschoollife@gmail.com" className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-8 py-3.5 rounded-full text-base font-semibold text-white/80 transition-all duration-300 hover:bg-white/10 hover:scale-105">
            Let's Connect
          </a>
        </div>

        {/* Stats */}
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

        {/* Available badge */}
        <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-5 py-2 rounded-full backdrop-blur-sm">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
          </div>
          <span className="text-white/60 text-xs font-medium tracking-wide">Available for work</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
