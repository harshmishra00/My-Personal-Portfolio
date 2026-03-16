import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="work" className="w-full bg-white text-[#0f0f0f] relative pt-[12vh] pb-[6vh]">

      {/* Section heading */}
      <div className="container px-6 md:px-12 mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-[12px] font-medium tracking-[0.2em] text-[#666666] uppercase mb-4"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tighter uppercase text-[#0f0f0f]"
        >
          Projects
        </motion.h2>
      </div>

      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} total={projects.length} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, total }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const blurValue = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const filter = useMotionTemplate`blur(${blurValue}px)`;
  const topOffset = `calc(-5% + ${index * 25}px)`;

  return (
    <div ref={cardRef} className="h-screen flex items-center justify-center sticky top-0 perspective-1000 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ top: topOffset, scale, filter }}
        className="relative flex flex-col w-[95vw] max-w-[1400px] h-[80vh] rounded-[32px] p-8 md:p-14 origin-top border border-[#e5e5e5] bg-[#f5f5f5] shadow-2xl overflow-hidden"
      >
        <div className="relative z-10 flex flex-col md:flex-row h-full gap-10 md:gap-16">
          <div className="md:w-[35%] flex flex-col justify-between py-4">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#999999] text-sm font-bold uppercase tracking-widest">
                <span>{project.year}</span>
                <span>•</span>
                <span>{project.category}</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-[#0f0f0f] leading-[0.95]">
                {project.title}
              </h2>
              <p className="text-[#555555] text-lg md:text-xl leading-relaxed font-sans max-w-md">
                {project.description}
              </p>
              
              {project.techStack && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-white border border-[#e5e5e5] rounded-full text-[#555] text-xs font-medium tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-8 md:mt-0 flex flex-wrap gap-4">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#0f0f0f] text-white text-lg font-semibold hover:bg-[#222] transition-all hover:scale-105 active:scale-95">
                Live Demo
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-full border border-[#0f0f0f]/20 text-[#0f0f0f] text-lg font-semibold hover:bg-[#0f0f0f]/5 transition-all hover:scale-105 active:scale-95">
                GitHub
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>

          <div className="relative flex-1 w-full h-full rounded-[20px] overflow-hidden border border-[#e5e5e5] shadow-inner flex items-center justify-center">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className={`w-full h-full ${project.imageColor} flex items-center justify-center`}>
                <span className="text-white/20 font-display text-4xl uppercase tracking-widest">{project.title}</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
