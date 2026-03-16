import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Holopin = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <section id="holopin" className="bg-background py-[120px] relative overflow-hidden">
      {/* Faint background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-purple-700/10 blur-[100px] pointer-events-none" />

      <div className="container px-6 md:px-12 mx-auto max-w-[1100px] relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-[12px] font-medium tracking-[0.2em] text-[#999999] uppercase mb-3">Open Source</p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-tighter uppercase text-white">
              Holopin Board
            </h2>
          </div>
          <a
            href="https://holopin.io/@harshmishra00"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-shrink-0 flex items-center gap-2 border border-white/10 px-6 py-3 rounded-full text-sm font-semibold text-white/70 hover:bg-white/5 hover:border-white/20 transition-all hover:text-white"
          >
            View Full Board
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </motion.div>

        {/* Badge board */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden p-6 md:p-10"
        >
          {/* Loading skeleton */}
          {!imgLoaded && !imgError && (
            <div className="w-full h-[180px] bg-white/5 rounded-2xl animate-pulse flex items-center justify-center">
              <span className="text-white/20 text-sm font-medium">Loading badges…</span>
            </div>
          )}

          {/* Error fallback */}
          {imgError && (
            <div className="w-full py-16 flex flex-col items-center justify-center gap-4 text-center">
              <span className="text-5xl">🏅</span>
              <p className="text-white/40 text-sm">Badges board unavailable right now.</p>
              <a
                href="https://holopin.io/@harshmishra00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 underline text-sm hover:text-white transition-colors"
              >
                View on Holopin →
              </a>
            </div>
          )}

          {/* Actual board image */}
          <a href="https://holopin.io/@harshmishra00" target="_blank" rel="noopener noreferrer">
            <img
              src="https://holopin.me/harshmishra00"
              alt="@harshmishra00's Holopin badges board"
              className={`w-full rounded-xl transition-opacity duration-500 hover:opacity-90 ${imgLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
            />
          </a>
        </motion.div>

        {/* Sub note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="text-white/25 text-xs text-center mt-6 font-medium"
        >
          Badges earned through open-source contributions — Hacktoberfest, digital events & more.
        </motion.p>
      </div>
    </section>
  );
};

export default Holopin;
