import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onMqChange = (e) => { if (e.matches) setMenuOpen(false); };
    mq.addEventListener('change', onMqChange);
    return () => mq.removeEventListener('change', onMqChange);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#services', label: 'TechStack' },
    { href: '#footer', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`}
      >
        <div className="flex items-center justify-between gap-6 px-1.5 py-1.5 bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">

          {/* Left Links — desktop only */}
          <div className="hidden lg:flex items-center gap-1 pl-4">
            <NavLink href="#about" label="About" />
            <NavLink href="#work" label="Work" />
            <NavLink href="#achievements" label="Achievements" />
          </div>

          {/* Logo */}
          <div className="w-8 h-8 lg:w-6 lg:h-6 rounded-full bg-white flex items-center justify-center font-bold text-black text-xs ml-2 lg:ml-0">
            H
          </div>

          {/* Right Links — desktop only */}
          <div className="hidden lg:flex items-center gap-1 pr-1.5">
            <NavLink href="#services" label="TechStack" />
            <NavLink href="#footer" label="Contact" />
            <a
              href="/My-Cv-Updated (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-10 pl-6 pr-5 flex items-center overflow-hidden bg-white/5 border border-white/10 rounded-full"
            >
              <div className="relative flex items-center gap-2 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                <span className="text-[14px] font-medium text-white/90">Resume</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center gap-2 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 bg-white rounded-full">
                <span className="text-[14px] font-medium text-black">Resume</span>
              </div>
            </a>
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="lg:hidden pr-3 pl-1 flex flex-col justify-center gap-1.5 w-10 h-10"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-[99] bg-[#0f0f0f]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-[clamp(2rem,8vw,3.5rem)] uppercase text-white/80 hover:text-white tracking-tighter transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/My-Cv-Updated (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 px-8 py-3 bg-white text-black rounded-full font-bold text-base"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({ href, label }) => (
  <a href={href} className="group relative h-10 px-4 flex items-center overflow-hidden">
    <div className="relative flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
      <span className="text-[14px] font-medium text-white/70 h-10 flex items-center">{label}</span>
      <span className="text-[14px] font-medium text-white h-10 flex items-center absolute top-full">{label}</span>
    </div>
  </a>
);

export default Navbar;
