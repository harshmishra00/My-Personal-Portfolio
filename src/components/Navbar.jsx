import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to animate navbar in on load
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-4 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
        }`}
    >
      <div className="flex items-center justify-between gap-6 px-1.5 py-1.5 bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">

        {/* Left Links */}
        <div className="hidden lg:flex items-center gap-1 pl-4">
          <NavLink href="#about" label="About" />
          <NavLink href="#work" label="Work" />
          <NavLink href="#achievements" label="Achievements" />
        </div>

        {/* Logo */}
        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center font-bold text-black text-xs">
          H
        </div>

        {/* Right Links */}
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

        {/* Mobile Menu Button */}
        <div className="lg:hidden pr-4 pl-2">
          <button className="text-white p-2 relative w-8 h-6 flex flex-col justify-center gap-1.5">
            <div className="w-6 h-0.5 bg-white transition-all"></div>
            <div className="w-4 h-0.5 bg-white transition-all self-end"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

// Helper component for animated links
const NavLink = ({ href, label }) => (
  <a href={href} className="group relative h-10 px-4 flex items-center overflow-hidden">
    <div className="relative flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
      <span className="text-[14px] font-medium text-white/70 h-10 flex items-center">{label}</span>
      <span className="text-[14px] font-medium text-white h-10 flex items-center absolute top-full">{label}</span>
    </div>
  </a>
);

export default Navbar;
