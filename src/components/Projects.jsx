import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Projects = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <section id="work" className="w-full bg-[#fcfcfc] text-[#0f0f0f] relative pt-[12vh] pb-[10vh]">

      {/* Section heading */}
      <div className="container px-6 md:px-12 mx-auto mb-10 md:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold tracking-[0.2em] text-[#888] uppercase mb-4"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.85] tracking-tighter uppercase text-[#0f0f0f]"
        >
          Projects
        </motion.h2>
      </div>

      {/* Mobile: standard stacked cards with new UI */}
      {!isDesktop && (
        <div className="md:hidden flex flex-col gap-10 px-4">
          {projects.map((project, index) => (
            <MobileProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      )}

      {/* Desktop: Advanced sticky scroll stack */}
      {isDesktop && (
        <div className="hidden md:block relative w-full h-full pb-[20vh]">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} total={projects.length} />
          ))}
        </div>
      )}
    </section>
  );
};

/* ── Mobile card ──────────────────────────────────── */
const MobileProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="rounded-[32px] border border-[#e5e5e5] bg-white overflow-hidden shadow-xl"
  >
    {/* Image */}
    <div className="relative w-full h-[240px] overflow-hidden group">
      {project.image ? (
        <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      ) : (
        <div className={`w-full h-full ${project.imageColor || 'bg-black/5'} flex items-center justify-center`}>
          <span className="text-black/20 font-display text-3xl uppercase tracking-widest">{project.title}</span>
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-8 space-y-5">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 bg-[#f5f5f5] text-[#666] text-[10px] font-bold uppercase tracking-widest">
        <span>{project.year}</span>
        <span className="w-1 h-1 rounded-full bg-black/20" />
        <span>{project.category}</span>
      </div>
      <h2 className="text-4xl font-display font-medium text-[#0f0f0f] leading-[0.95] tracking-tight">{project.title}</h2>
      <p className="text-[#666] text-sm leading-relaxed font-sans">{project.description}</p>

      {project.techStack && (
        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech, i) => (
            <span key={i} className="px-3 py-1.5 bg-[#f9f9f9] border border-[#e5e5e5] rounded-full text-[#444] text-[11px] font-semibold tracking-wide">
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-3 pt-4">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-full bg-[#0f0f0f] text-white text-sm font-semibold transition-all active:scale-95 shadow-md">
            Live Site
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-full border border-[#0f0f0f]/20 bg-white text-[#0f0f0f] text-sm font-semibold transition-all active:scale-95">
            GitHub
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

/* ── Desktop sticky card ──────────────────────────── */
const ProjectCard = ({ project, index, total }) => {
  const cardRef = useRef(null);

  // Track scroll per card container (which is 100vh tall).
  // When this container hits top, scrollYProgress is 0.
  // When this container scrolls out (100vh later), scrollYProgress is 1.
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start']
  });

  const isLast = index === total - 1;

  // Smoothly scale the card down as the NEXT card scrolls over it
  const targetScale = isLast ? 1 : 1 - ((total - index) * 0.04);
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  // Hardware-accelerated opacity overlay instead of expensive CSS blur filter
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, isLast ? 0 : 0.4]);

  // Stagger exact top offset so they look like a cascading deck of cards
  const topOffset = `calc(5vh + ${index * 35}px)`;

  return (
    // The wrapper creates scroll distance per card without hiding elements behind it
    <div
      ref={cardRef}
      className="h-[100vh] w-full flex items-start justify-center sticky top-0 pointer-events-none"
    >
      <motion.div
        style={{
          top: topOffset,
          scale,
          willChange: "transform",
          boxShadow: "0 -20px 80px -20px rgba(0,0,0,0.1), 0 30px 60px -15px rgba(0,0,0,0.1)"
        }}
        className="absolute w-[92vw] max-w-[1250px] h-[75vh] md:h-[80vh] rounded-[48px] p-8 md:p-14 origin-top border border-neutral-200/60 bg-white overflow-hidden pointer-events-auto transition-all"
      >
        {/* Dynamic Dark Overlay for depth instead of brightness/blur */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-neutral-950 z-20 pointer-events-none rounded-[48px]"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-white via-neutral-50/80 to-neutral-100/60 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row h-full gap-10 md:gap-14">

          {/* Left: Text Content & Tech */}
          <div className="md:w-5/12 flex flex-col justify-between py-6">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/10 bg-[#f9f9f9] text-[#666] text-xs font-bold uppercase tracking-widest shadow-sm">
                <span>{project.year}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
                <span>{project.category}</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-[#0f0f0f] leading-[0.95] tracking-tight">
                {project.title}
              </h2>

              <p className="text-[#555555] text-lg lg:text-xl leading-relaxed font-sans max-w-sm">
                {project.description}
              </p>

              {project.techStack && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3.5 py-1.5 bg-white border border-black/10 rounded-full text-[#444] text-[13px] font-semibold tracking-wide shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 md:mt-0 flex gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="flex flex-1 md:flex-none items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0f0f0f] text-white text-sm md:text-base font-semibold transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 active:scale-95 group">
                  Live Site
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="flex flex-1 md:flex-none items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-[#e5e5e5] text-[#0f0f0f] text-sm md:text-base font-semibold transition-all hover:-translate-y-1 hover:shadow-lg hover:border-black/20 active:scale-95 group">
                  GitHub
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              )}
            </div>
          </div>

          {/* Right: Awesome Image Display */}
          <div className="relative flex-1 w-full h-full rounded-[24px] overflow-hidden border border-black/10 shadow-inner group">
            {project.image ? (
              <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            ) : (
              <div className={`w-full h-full ${project.imageColor || 'bg-black/5'} flex items-center justify-center transition-transform duration-1000 group-hover:scale-110`}>
                <span className="text-black/10 font-display text-5xl uppercase tracking-widest">{project.title}</span>
              </div>
            )}
            {/* Elegant overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
