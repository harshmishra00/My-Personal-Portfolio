import React from 'react';
import { motion } from 'framer-motion';

/* ─── Tech Icon SVGs ─────────────────────────────────────── */
const icons = {
  React: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
      <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  ),
  NodeJS: (
    <svg viewBox="0 0 24 24" fill="#3C873A" className="w-7 h-7">
      <path d="M11.998 2l-8.5 4.91v9.18L11.998 21.09l8.502-4.91V6.91L11.998 2zm0 1.16l7.362 4.25v8.18l-7.362 4.25-7.36-4.25V7.41l7.36-4.25z"/>
      <path d="M11.998 6.5c-3.04 0-5.498 2.46-5.498 5.5s2.458 5.5 5.498 5.5 5.502-2.46 5.502-5.5-2.462-5.5-5.502-5.5zm0 9.5c-2.206 0-4-1.794-4-4s1.794-4 4-4 4.002 1.794 4.002 4-1.796 4-4.002 4z"/>
    </svg>
  ),
  Express: (
    <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
      <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c-.022-.235-.08-.464-.139-.826zm1.186-.068h9.08c-.065-3.865-2.867-6.536-8.56-5.848-.81.158-1.583.567-2.182 1.208a4.972 4.972 0 00-1.339 3.162l3.001 1.478z"/>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#47A248" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.297.823-.618 1.216-.979 3.034-2.768 4.995-7.318 3.076-10.396z"/>
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#4479A1" d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.32-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.182-.165zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41l-1.588 4.41H2.15l-1.588-4.41a44.742 44.742 0 00-.27 4.41H.006c.05-1.593.2-2.665.43-3.218l1.353-4.145h1.09l1.465 4.145c.09.27.18.603.26.96h.014c.05-.267.14-.6.26-.96l1.41-4.145h1.09c.23.553.38 1.625.43 3.218l-.027.04z"/>
      <path fill="#4479A1" d="M9.415 18.695H8.22v-5.19c.474-.046.956-.07 1.464-.07.874 0 1.51.16 1.908.48.4.32.6.8.6 1.442 0 .64-.2 1.133-.6 1.48-.4.347-1 .52-1.8.52-.2 0-.4-.013-.587-.053l.21-2.6zm0-1.063c.12.027.247.04.38.04.56 0 .84-.253.84-.76 0-.507-.22-.76-.66-.76a2.5 2.5 0 00-.56.06v1.42z"/>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
      <path d="M6.8 20.5l1.56-.94c.3.53.57.98 1.23.98.63 0 1.02-.25 1.02-.94V12.7h1.93v6.93c0 1.54-.9 2.25-2.22 2.25-1.19 0-1.88-.62-2.23-1.38zM14.5 20.3l1.56-.9c.41.67.94 1.16 1.88 1.16.79 0 1.29-.39 1.29-.94 0-.65-.52-.88-1.39-1.26l-.48-.2c-1.38-.59-2.3-1.33-2.3-2.89 0-1.44 1.1-2.53 2.8-2.53 1.22 0 2.1.42 2.72 1.53l-1.49.96c-.33-.59-.69-.82-1.23-.82-.56 0-.92.35-.92.82 0 .57.36.8 1.19 1.15l.48.21c1.62.69 2.54 1.4 2.54 2.99 0 1.71-1.35 2.67-3.15 2.67-1.76 0-2.9-.84-3.46-1.95z"/>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <rect width="24" height="24" rx="3" fill="#3178C6"/>
      <path fill="white" d="M13.2 12.4h2.6v.8h-1.8v3.8h-.8v-4.6zm-2.4.8H9v-.8h4v.8h-1.4v3.8h-.8v-3.8z"/>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#3776AB" d="M11.914 0C5.79 0 6.169 2.656 6.169 2.656l.007 2.752h5.844v.826H3.89S0 5.789 0 12.003c0 6.213 3.436 5.99 3.436 5.99h2.05v-2.883s-.111-3.436 3.38-3.436h5.827s3.269.053 3.269-3.155V3.297S18.469 0 11.914 0zm-3.24 1.876a1.061 1.061 0 110 2.123 1.061 1.061 0 010-2.123z"/>
      <path fill="#FFD343" d="M12.086 24c6.124 0 5.745-2.656 5.745-2.656l-.007-2.752h-5.844v-.826h8.13S24 18.211 24 12c0-6.214-3.436-5.99-3.436-5.99h-2.05v2.882s.111 3.437-3.38 3.437H9.307S6.038 12.276 6.038 15.485v5.218S5.531 24 12.086 24zm3.24-1.876a1.061 1.061 0 110-2.123 1.061 1.061 0 010 2.123z"/>
    </svg>
  ),
  CPlusPlus: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#00599C" d="M10.5 15.97l.41 2.44c-.26.14-.68.27-1.24.39-.57.13-1.24.19-2.01.19-2.21-.04-3.87-.7-4.98-1.96C1.56 15.77 1 14.16 1 12.21c.05-2.31.72-4.08 2-5.32C4.32 5.64 5.96 5 7.9 5c.75 0 1.41.08 1.98.24s1 .37 1.3.62l-.51 2.52-.37-.28c-.34-.24-.71-.42-1.12-.56-.42-.13-.82-.2-1.22-.2-1.23 0-2.21.49-2.95 1.47-.74.98-1.11 2.27-1.11 3.86 0 1.56.34 2.79 1.03 3.7.68.91 1.61 1.36 2.78 1.36.38 0 .74-.04 1.08-.13.34-.09.62-.22.84-.38l.37-.31zM12 10h2V8h1.5v2H17v1.5h-1.5v2H14v-2h-2V10zm6 0h2V8h1.5v2H23v1.5h-1.5v2H20v-2h-2V10z"/>
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#ED8B00" d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 .001-8.216 2.051-4.292 6.573"/>
      <path fill="#007396" d="M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627"/>
      <path fill="#ED8B00" d="M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0 .001.553.457 3.393.639"/>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
    </svg>
  ),
  Linux: (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#FCC624">
      <path d="M12.504 0c-.155 0-.315.008-.474.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.09-2.296 2.975-2.479 5.049-.105 1.189.08 2.373.745 3.403 1.05 1.606 2.813 2.495 5.054 2.495 5.505.04 7.595-2.7 7.595-5.995 0-3.298-2.095-5.993-6.22-5.993z"/>
      <path fill="#000" d="M9.574 5.174c.106.097.192.18.338.185.173.003.376-.158.376-.422 0-.27-.206-.416-.42-.416a.417.417 0 00-.294.654zM14.3 5.396c.155.036.27-.028.338-.118.04-.053.056-.118.056-.185 0-.174-.116-.373-.368-.373-.226 0-.39.153-.39.39 0 .184.13.276.364.286zM6.802 16.97c-.432.338-.74.742-.808 1.104.02.098.064.188.127.256.127.132.34.2.624.2h.014c.27 0 .534-.064.77-.158.024 0 .038-.01.056-.014.062-.03.118-.07.17-.118-.02-.113-.028-.24-.028-.36 0-.312.055-.643.16-.96-.23.006-.454.026-.602.05l-.483 0z"/>
    </svg>
  ),
  Vite: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#646CFF" d="M21.128 4.832L13.018.205a2 2 0 00-2.036 0L2.872 4.832a2 2 0 00-1.014 1.75v9.254a2 2 0 001.014 1.75l8.11 4.627a2 2 0 002.036 0l8.11-4.627a2 2 0 001.014-1.75V6.582a2 2 0 00-1.014-1.75z"/>
      <path fill="#FFBD2F" d="M13 8l-5 8.5 1.5-4.5L7 11l5-1 1-2z"/>
      <path fill="white" d="M14.5 7L10 16l2-5.5-2.5-1L14.5 7z"/>
    </svg>
  ),
  TailwindCSS: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#06B6D4" d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/>
    </svg>
  ),
  REST: (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="3" stroke="#E97627" strokeWidth="1.5"/>
      <path d="M7 12h10M12 7v10" stroke="#E97627" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  DSA: (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
      <path d="M3 19l7-7 4 4 7-9" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="10" cy="12" r="1.2" fill="#22C55E"/>
      <circle cx="14" cy="16" r="1.2" fill="#22C55E"/>
      <circle cx="3" cy="19" r="1.2" fill="#22C55E"/>
    </svg>
  ),
  OOP: (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
      <rect x="2" y="2" width="9" height="9" rx="2" stroke="#A78BFA" strokeWidth="1.5"/>
      <rect x="13" y="2" width="9" height="9" rx="2" stroke="#A78BFA" strokeWidth="1.5"/>
      <rect x="2" y="13" width="9" height="9" rx="2" stroke="#A78BFA" strokeWidth="1.5"/>
      <rect x="13" y="13" width="9" height="9" rx="2" stroke="#A78BFA" strokeWidth="1.5"/>
    </svg>
  ),
};

/* ─── Tech stacks grouped by category ───────────────────── */
const techCategories = [
  {
    label: 'Frontend',
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/20',
    dot: 'bg-blue-400',
    techs: [
      { name: 'React', icon: icons.React },
      { name: 'JavaScript', icon: icons.JavaScript },
      { name: 'TypeScript', icon: icons.TypeScript },
      { name: 'TailwindCSS', icon: icons.TailwindCSS },
      { name: 'Vite', icon: icons.Vite },
    ],
  },
  {
    label: 'Backend',
    color: 'from-green-500/20 to-emerald-500/10',
    border: 'border-green-500/20',
    dot: 'bg-green-400',
    techs: [
      { name: 'Node.js', icon: icons.NodeJS },
      { name: 'Express', icon: icons.Express },
      { name: 'REST APIs', icon: icons.REST },
      { name: 'Python', icon: icons.Python },
    ],
  },
  {
    label: 'Databases & DevOps',
    color: 'from-orange-500/20 to-amber-500/10',
    border: 'border-orange-500/20',
    dot: 'bg-orange-400',
    techs: [
      { name: 'MongoDB', icon: icons.MongoDB },
      { name: 'MySQL', icon: icons.MySQL },
      { name: 'Git', icon: icons.Git },
      { name: 'Linux', icon: icons.Linux },
    ],
  },
  {
    label: 'Languages & CS',
    color: 'from-purple-500/20 to-violet-500/10',
    border: 'border-purple-500/20',
    dot: 'bg-purple-400',
    techs: [
      { name: 'C++', icon: icons.CPlusPlus },
      { name: 'Java', icon: icons.Java },
      { name: 'DSA', icon: icons.DSA },
      { name: 'OOP', icon: icons.OOP },
    ],
  },
];

/* ─── Component ─────────────────────────────────────────── */
const Services = () => {
  return (
    <section id="services" className="bg-background py-[160px] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />

      <div className="container px-6 md:px-12 mx-auto max-w-[1300px] relative z-10">

        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="font-sans text-sm font-medium tracking-[0.2em] uppercase text-[#999999] mb-4"
          >
            Tech Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="font-display text-[48px] md:text-[72px] text-white uppercase leading-[0.9] tracking-tighter"
          >
            Tools I Build With
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="font-sans text-[18px] md:text-[20px] text-[#666] mt-4 max-w-lg"
          >
            From UI to API — a full end-to-end stack for crafting production-ready applications.
          </motion.p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-80px' }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className={`relative rounded-3xl border ${cat.border} bg-gradient-to-br ${cat.color} p-8 backdrop-blur-sm overflow-hidden group`}
            >
              {/* Category label */}
              <div className="flex items-center gap-2 mb-8">
                <span className={`w-2 h-2 rounded-full ${cat.dot}`} />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                  {cat.label}
                </span>
              </div>

              {/* Tech pills grid */}
              <div className="grid grid-cols-2 gap-3">
                {cat.techs.map((tech, ti) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: ci * 0.1 + ti * 0.07 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl px-4 py-3.5 transition-all duration-300 cursor-default"
                  >
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      {tech.icon}
                    </div>
                    <span className="text-white/80 font-sans text-sm font-semibold leading-tight">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
