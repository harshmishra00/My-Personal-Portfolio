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
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300 group shadow-2xl"
                  >
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

                {/* Empty Space for the other side */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
