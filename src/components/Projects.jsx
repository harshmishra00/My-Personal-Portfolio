import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { useMediaQuery } from '../hooks/useMediaQuery';

const CARD_OFFSET = 32; // px between stacked card tops
const SCALE_FACTOR = 0.055; // how much each buried card shrinks

const Projects = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <section id="work" className="w-full bg-background text-white relative pt-[12vh] pb-[10vh]">

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
          className="font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.85] tracking-tighter uppercase text-white"
        >
          Projects
        </motion.h2>
      </div>

      {/* Mobile */}
      {!isDesktop && (
        <div className="md:hidden flex flex-col gap-8 px-4">
          {projects.map((project, index) => (
            <MobileProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      )}

      {/* Desktop: sticky scroll stack */}
      {isDesktop && (
        <div className="hidden md:block relative w-full pb-[20vh]">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>
      )}
    </section>
  );
};

/* ── Mobile card ──────────────────────────────────── */
const MobileProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    className="rounded-[28px] border border-white/10 bg-[#1a1a1a] overflow-hidden"
    style={{ boxShadow: '0 8px 40px -8px rgba(0,0,0,0.6), 0 2px 8px -2px rgba(0,0,0,0.4)' }}
  >
    <div className="relative w-full h-[220px] overflow-hidden">
      {project.image ? (
        <img src={project.image} alt={project.title} loading="lazy" decoding="async"
          className="w-full h-full object-cover" />
      ) : (
        <div className={`w-full h-full ${project.imageColor || 'bg-black/5'} flex items-center justify-center`}>
          <span className="text-white/20 font-display text-3xl uppercase tracking-widest">{project.title}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
    </div>

    <div className="p-7 space-y-4">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-[10px] font-bold uppercase tracking-widest">
        <span>{project.year}</span>
        <span className="w-1 h-1 rounded-full bg-white/20" />
        <span>{project.category}</span>
      </div>
      <h2 className="text-3xl font-display font-medium text-white leading-[0.95] tracking-tight">{project.title}</h2>
      <p className="text-white/50 text-sm leading-relaxed font-sans">{project.description}</p>

      {project.techStack && <StackedTechBadges techs={project.techStack} compact />}

      <div className="flex gap-3 pt-2">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-white text-[#0f0f0f] text-sm font-semibold active:scale-95 shadow-md transition-transform">
            Live Site
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full border border-black/15 bg-white text-[#0f0f0f] text-sm font-semibold active:scale-95 transition-transform">
            GitHub
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

/* ── Stacked Tech Badge Deck ──────────────────────── */
const stackColors = [
  'bg-white/10 border-white/20 text-white/90',
  'bg-white/7 border-white/15 text-white/70',
  'bg-white/5 border-white/10 text-white/50',
];

const StackedTechBadges = ({ techs, compact = false }) => {
  const [hovered, setHovered] = useState(false);
  if (!techs || techs.length === 0) return null;

  return (
    <div
      className={`flex flex-wrap ${compact ? 'gap-3' : 'gap-4'} pt-2`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {techs.map((tech, i) => {
        const total = techs.length;
        const fanY = hovered ? i * (compact ? 4 : 6) : i * (compact ? 2 : 2.5);
        const fanRotate = hovered
          ? (i - (total - 1) / 2) * (compact ? 3 : 4)
          : (i - (total - 1) / 2) * 0.8;
        const fanScale = hovered ? 1 - i * 0.03 : 1 - i * 0.015;
        const fanZ = total - i;
        const delay = hovered ? i * 0.04 : (total - 1 - i) * 0.03;
        const bgClass = stackColors[Math.min(i, stackColors.length - 1)];

        return (
          <motion.span
            key={i}
            animate={{ y: -fanY, rotate: fanRotate, scale: fanScale, zIndex: fanZ }}
            transition={{ type: 'spring', stiffness: 320, damping: 22, delay }}
            style={{ position: 'relative', zIndex: fanZ }}
            className={`
              inline-block
              ${compact ? 'px-3 py-1.5 text-[11px]' : 'px-3.5 py-1.5 text-[13px]'}
              border rounded-full font-semibold tracking-wide
              cursor-default select-none
              ${i === 0 ? 'shadow-md' : 'shadow-sm'}
              ${bgClass}
              transition-shadow duration-300
              ${hovered && i === 0 ? 'shadow-lg shadow-black/15' : ''}
            `}
          >
            {tech}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ── Desktop sticky card ──────────────────────────── */
const ProjectCard = ({ project, index, total }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  });

  // Smooth the raw scroll value for buttery animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const isLast = index === total - 1;

  // --- Scroll-driven transforms ---

  // Scale: card shrinks as it gets buried; last card stays full size
  const scale = useTransform(
    smoothProgress,
    [0, 1],
    [1, isLast ? 1 : 1 - SCALE_FACTOR * (total - index)]
  );

  // Y: card slowly rises upward as it gets buried under next cards
  const translateY = useTransform(smoothProgress, [0, 1], [0, isLast ? 0 : -40]);

  // RotateX: subtle perspective tilt as card recedes — gives real depth
  const rotateX = useTransform(smoothProgress, [0, 1], [0, isLast ? 0 : 6]);

  // Darkness overlay: deepens as card is buried
  const overlayOpacity = useTransform(smoothProgress, [0, 1], [0, isLast ? 0 : 0.5]);

  // Blur overlay (simulated via opacity of a frosted layer) 
  const frostedOpacity = useTransform(smoothProgress, [0, 1], [0, isLast ? 0 : 0.15]);

  // Cards peek behind — each card sits a bit lower to show depth
  const topOffset = `calc(4vh + ${index * CARD_OFFSET}px)`;

  return (
    <div
      ref={cardRef}
      className="h-[100vh] w-full flex items-start justify-center sticky top-0 pointer-events-none"
      style={{ perspective: '1400px' }}
    >
      <motion.div
        style={{
          top: topOffset,
          scale,
          y: translateY,
          rotateX,
          transformOrigin: 'top center',
          willChange: 'transform',
          boxShadow:
            '0 -4px 24px -4px rgba(0,0,0,0.06), 0 32px 80px -16px rgba(0,0,0,0.14), 0 4px 8px rgba(0,0,0,0.04)',
        }}
        className="absolute w-[92vw] max-w-[1250px] h-[78vh] rounded-[44px] origin-top border border-white/10 bg-[#151515] overflow-hidden pointer-events-auto"
      >
        {/* Dark depth overlay — grows as card is buried */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-neutral-950 z-20 pointer-events-none rounded-[44px]"
        />

        {/* Frosted shimmer layer */}
        <motion.div
          style={{ opacity: frostedOpacity }}
          className="absolute inset-0 bg-white z-[21] pointer-events-none rounded-[44px] backdrop-blur-sm"
        />

        {/* Subtle gradient texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-transparent pointer-events-none z-0" />

        {/* Index counter */}
        <div className="absolute top-10 right-12 z-30 text-[11px] font-bold tracking-[0.2em] text-white/20 uppercase select-none">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row h-full gap-10 md:gap-12 p-10 md:p-14">

          {/* Left: Text */}
          <div className="md:w-[44%] flex flex-col justify-between py-2">
            <div className="space-y-5">

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-bold uppercase tracking-widest shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <span>{project.year}</span>
                <span className="w-1 h-1 rounded-full bg-white/15" />
                <span>{project.category}</span>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-display font-medium text-white leading-[0.9] tracking-tight">
                {project.title}
              </h2>

              <p className="text-white/50 text-base lg:text-lg leading-relaxed font-sans max-w-sm">
                {project.description}
              </p>

              {project.techStack && <StackedTechBadges techs={project.techStack} />}
            </div>

            {/* Buttons */}
            <div className="mt-8 md:mt-0 flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-[#0f0f0f] text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-white/10 active:scale-95 group"
                >
                  Live Site
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/5 border border-white/15 text-white text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:border-white/30 active:scale-95"
                >
                  GitHub
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Right: Image */}
          <div
            className="relative flex-1 h-full rounded-[28px] overflow-hidden border border-white/10"
            style={{ boxShadow: 'inset 0 2px 12px rgba(0,0,0,0.06)' }}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className={`w-full h-full ${project.imageColor || 'bg-black/5'} flex items-center justify-center`}>
                <span className="text-white/10 font-display text-5xl uppercase tracking-widest">{project.title}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
