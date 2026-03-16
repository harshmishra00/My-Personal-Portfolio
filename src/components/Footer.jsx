import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="footer-section w-full bg-[#f5f5f5] text-[#0f0f0f]">
      <div className="container mx-auto px-8 md:px-16 pt-[160px] pb-[120px] flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-[18px] md:text-[20px] font-sans mb-4 text-[#0f0f0f]/60 font-medium"
        >
          That's a wrap? Maybe not.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="font-display text-[72px] md:text-[120px] lg:text-[140px] leading-[0.85] mb-8 tracking-tighter uppercase font-black"
        >
          Great things start <br /> with 'Meet'! 😃
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="max-w-[700px] mb-12"
        >
          <p className="text-[20px] md:text-[24px] font-sans leading-relaxed font-medium">
            Open to 👁️ conversations, 🤝 collabs, 🧠 creative <br className="hidden md:block" />challenges, 🧩 puzzles-or just a friendly game of ♟️ Chess.<br />
            <span className="text-base mt-2 block font-bold">📞 +91-9452513474</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col items-center gap-8"
        >
          <a href="mailto:harshschoollife@gmail.com" className="group relative flex items-center justify-center bg-[#0f0f0f] text-white px-10 py-5 rounded-full text-[18px] font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span>Let's Meet</span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <div className="flex flex-col items-center gap-4">
            <span className="text-[14px] text-[#0f0f0f]/40 font-medium lowercase">or connect through..</span>
            <div className="flex items-center gap-6">
              <SocialLink href="https://linkedin.com/in/harshmishra06/" icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="mailto:harshschoollife@gmail.com" icon={<Mail className="w-5 h-5" />} />
              <SocialLink href="https://github.com/harshmishra00/" icon={<Github className="w-5 h-5" />} />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-8 md:px-16 pb-12">
        <div className="w-full h-[1px] bg-[#0f0f0f]/10 mb-10"></div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="order-3 md:order-1 flex-1">
            <p className="text-[14px] font-medium text-[#0f0f0f]/60">© Copyright 2026. Custom Coded by Harsh Mishra.</p>
          </div>
          <div className="order-1 md:order-2 flex-[2] text-center max-w-[500px] mx-auto">
            <p className="text-[14px] leading-relaxed font-medium text-[#0f0f0f]/80">
              Created with 🤯 curiosity ☕️ coffee ❤️ love, and 💻 way too many open tabs. Thanks for stopping by—don't forget to blink and drink (water ofc)!
            </p>
          </div>
          <div className="order-2 md:order-3 flex-1 flex justify-end w-full md:w-auto">
            <a href="#main" className="group flex items-center gap-2 text-[14px] font-bold uppercase tracking-tight hover:opacity-70 transition-opacity">
              Back to top
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 -rotate-90" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-white rounded-xl border border-black/5 shadow-sm hover:shadow-md transition-shadow"
  >
    {icon}
  </a>
);

export default Footer;
