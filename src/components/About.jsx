import React from 'react';
import { motion } from 'framer-motion';
import heroPic from '../assets/hero.jpeg';

const About = () => {
  const words = "Full-Stack Developer focused on building scalable web applications using the MERN stack, React, and Node.js. I design and develop complete systems, from intuitive frontends to secure backend APIs with authentication, role-based access control, and database integration. I enjoy solving complex problems, contributing to open source, and turning ideas into reliable, user-focused products.".split(" ");

  return (
    <section id="about" className="relative w-full bg-background py-32 md:py-40 px-8 md:px-16 overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-16"
        >
          <p className="text-[12px] font-medium tracking-[0.2em] text-[#999999] uppercase mb-3">Who I Am</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-tighter uppercase text-white">About Me</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Photo – left side */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotate: -4 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="relative flex-shrink-0 w-[240px] h-[280px] md:w-[300px] md:h-[360px] lg:w-[340px] lg:h-[400px] cursor-pointer"
            style={{ transformOrigin: 'center bottom' }}
          >
            {/* Decorative backdrop card */}
            <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-white/5 translate-x-4 translate-y-4 -z-10" />
            {/* Glow */}
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/10 to-transparent blur-2xl scale-110 pointer-events-none -z-10" />
            {/* Photo */}
            <img
              src={heroPic}
              alt="Harsh Mishra"
              className="w-full h-full object-cover rounded-[28px] border border-white/10 shadow-2xl"
            />
          </motion.div>

          {/* Bio text – right side */}
          <div className="flex flex-col gap-0 items-start justify-center">
            <p className="text-white font-sans text-[20px] md:text-[26px] lg:text-[28px] leading-[1.45] font-normal tracking-tight flex flex-wrap gap-x-[0.3em]">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.12, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.35, delay: i * 0.035 }}
                  className="inline-block will-change-transform"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );

};

export default About;
