import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/portfolioData';

const Achievements = () => {
  return (
    <section id="achievements" className="bg-background py-20 md:py-[160px] relative w-full overflow-hidden">
      <div className="container px-6 md:px-12 mx-auto max-w-[1200px]">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false }}
           transition={{ duration: 0.8 }}
           className="text-center mb-24 z-10 relative"
        >
          <p className="text-[12px] font-medium tracking-[0.2em] text-[#999999] uppercase mb-4">Milestones</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-tighter uppercase text-white">Achievements</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2"></div>

          {achievements.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={item.id} className={`relative flex flex-col md:flex-row items-center justify-between mb-20 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-white/50 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300 group shadow-2xl relative"
                  >
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-5 right-5 text-white/20 group-hover:text-amber-400 transition-colors duration-300"
                        aria-label={`Visit ${item.title}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    <span className="text-white/40 text-sm font-bold tracking-widest uppercase mb-3 block">
                      {item.year}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-2 group-hover:text-amber-400 transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>
                    <h4 className="text-white/60 text-sm uppercase tracking-wider mb-5">
                      {item.organization}
                    </h4>
                    <p className="text-white/50 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Achievement Image for the other side */}
                {item.image && (
                  <div className={`hidden md:flex w-[45%] items-center justify-center ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-white/10 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-48 h-48 object-cover rounded-2xl border border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                          />
                        </a>
                      ) : (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-48 h-48 object-cover rounded-2xl border border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </motion.div>
                  </div>
                )}
                {!item.image && <div className="hidden md:block w-[45%]"></div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
