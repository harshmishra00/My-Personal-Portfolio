import React from 'react';
import { motion } from 'framer-motion';

/* ─── Tech Icon Visuals ─────────────────────────────────────── */
const icons = {
  NextJS: (
    <img src="https://skillicons.dev/icons?i=nextjs" className="w-full h-full object-contain" alt="NextJS" loading="lazy" />
  ),
  Docker: (
    <img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/3fb2cdf6-8920-462e-87a4-95af376418aa" className="w-full h-full object-contain" alt="Docker" loading="lazy" />
  ),
  PostgreSQL: (
    <img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/29fd6286-4e7b-4d6c-818f-c4765d5e39a9" className="w-full h-full object-contain" alt="PostgreSQL" loading="lazy" />
  ),
  AWS: (
    <img src="https://skillicons.dev/icons?i=aws" className="w-full h-full object-contain" alt="AWS" loading="lazy" />
  ),
  React: (
    <img src="https://user-images.githubusercontent.com/74038190/212257467-871d32b7-e401-42e8-a166-fcfd7baa4c6b.gif" className="w-full h-full object-contain" alt="React" loading="lazy" />
  ),
  NodeJS: (
    <img src="https://user-images.githubusercontent.com/74038190/212257465-7ce8d493-cac5-494e-982a-5a9deb852c4b.gif" className="w-full h-full object-contain" alt="NodeJS" loading="lazy" />
  ),
  Express: (
    <img src="https://user-images.githubusercontent.com/74038190/212257463-4d082cb4-7483-4eaf-bc25-6dde2628aabd.gif" className="w-full h-full object-contain" alt="Express" loading="lazy" />
  ),
  MongoDB: (
    <img src="https://user-images.githubusercontent.com/74038190/212257460-738ff738-247f-4445-a718-cdd0ca76e2db.gif" className="w-full h-full object-contain" alt="MongoDB" loading="lazy" />
  ),
  MySQL: (
    <img src="https://skillicons.dev/icons?i=mysql" className="w-full h-full object-contain" alt="MySQL" loading="lazy" />
  ),
  JavaScript: (
    <img src="https://user-images.githubusercontent.com/74038190/212257468-1e9a91f1-b626-4baa-b15d-5c385dfa7ed2.gif" className="w-full h-full object-contain" alt="JavaScript" loading="lazy" />
  ),
  TypeScript: (
    <img src="https://skillicons.dev/icons?i=ts" className="w-full h-full object-contain" alt="TypeScript" loading="lazy" />
  ),
  Python: (
    <img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/398b19b1-9aae-4c1f-8bc0-d172a2c08d68" className="w-full h-full object-contain" alt="Python" loading="lazy" />
  ),
  Git: (
    <img src="https://user-images.githubusercontent.com/74038190/212281756-450d3ffa-9335-4b98-a965-db8a18fee927.gif" className="w-full h-full object-contain" alt="Git" loading="lazy" />
  ),
  Linux: (
    <img src="https://skillicons.dev/icons?i=linux" className="w-full h-full object-contain" alt="Linux" loading="lazy" />
  ),
  TailwindCSS: (
    <img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/1a797f46-efe4-41e6-9e75-5303e1bbcbfa" className="w-full h-full object-contain" alt="TailwindCSS" loading="lazy" />
  ),
  Vite: (
    <img src="https://skillicons.dev/icons?i=vite" className="w-full h-full object-contain" alt="Vite" loading="lazy" />
  ),
  CPlusPlus: (
    <img src="https://skillicons.dev/icons?i=cpp" className="w-full h-full object-contain" alt="CPlusPlus" loading="lazy" />
  ),
  Java: (
    <img src="https://skillicons.dev/icons?i=java" className="w-full h-full object-contain" alt="Java" loading="lazy" />
  ),
  Figma: (
    <img src="https://skillicons.dev/icons?i=figma" className="w-full h-full object-contain" alt="Figma" loading="lazy" />
  ),
  HTML: (
    <img src="https://user-images.githubusercontent.com/74038190/212257454-16e3712e-945a-4ca2-b238-408ad0bf87e6.gif" className="w-full h-full object-contain" alt="HTML" loading="lazy" />
  ),
  CSS: (
    <img src="https://user-images.githubusercontent.com/74038190/212257472-08e52665-c503-4bd9-aa20-f5a4dae769b5.gif" className="w-full h-full object-contain" alt="CSS" loading="lazy" />
  ),
  GitHub: (
    <img src="https://user-images.githubusercontent.com/74038190/212280805-9bcb336b-8c55-46a8-abf8-ff286ab55472.gif" className="w-full h-full object-contain" alt="GitHub" loading="lazy" />
  ),
  Postman: (
    <img src="https://skillicons.dev/icons?i=postman" className="w-full h-full object-contain" alt="Postman" loading="lazy" />
  )
};

const categories = [
  {
    name: 'Frontend',
    description: 'Building elegant, high-performance interfaces.',
    tools: [
      { name: 'React', icon: icons.React },
      { name: 'Next.js', icon: icons.NextJS },
      { name: 'TypeScript', icon: icons.TypeScript },
      { name: 'JavaScript', icon: icons.JavaScript },
      { name: 'Tailwind CSS', icon: icons.TailwindCSS },
      { name: 'Vite', icon: icons.Vite },
      { name: 'HTML', icon: icons.HTML },
      { name: 'CSS', icon: icons.CSS },
    ]
  },
  {
    name: 'Backend',
    description: 'Developing scalable APIs and server logic.',
    tools: [
      { name: 'Node.js', icon: icons.NodeJS },
      { name: 'Express', icon: icons.Express },
      { name: 'Python', icon: icons.Python },
      { name: 'Java', icon: icons.Java },
      { name: 'C++', icon: icons.CPlusPlus },
      { name: 'Postman', icon: icons.Postman },
    ]
  },
  {
    name: 'Databases & Ops',
    description: 'Managing data and deployment pipelines.',
    tools: [
      { name: 'PostgreSQL', icon: icons.PostgreSQL },
      { name: 'MongoDB', icon: icons.MongoDB },
      { name: 'MySQL', icon: icons.MySQL },
      { name: 'Docker', icon: icons.Docker },
      { name: 'AWS', icon: icons.AWS },
    ]
  },
  {
    name: 'Tooling',
    description: 'Essential environment and product tools.',
    tools: [
      { name: 'Git', icon: icons.Git },
      { name: 'GitHub', icon: icons.GitHub },
      { name: 'Linux', icon: icons.Linux },
      { name: 'Figma', icon: icons.Figma },
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-[#0f0f0f] text-white py-24 md:py-32 font-sans relative overflow-hidden transition-colors duration-700">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-28"
        >
          <p className="text-[12px] font-bold tracking-[0.2em] text-[#999999] uppercase mb-4">
            Core Competencies
          </p>
          <h2 className="font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.85] tracking-tighter uppercase text-white">
            Tools I <br /> Build With
          </h2>
        </motion.div>

        {/* Accordion / Table Layout */}
        <div className="w-full border-t border-white/10">
          {categories.map((category, idx) => (
             <motion.div 
               key={category.name}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1, duration: 0.6 }}
               className="group flex flex-col lg:flex-row py-12 md:py-16 border-b border-white/10 hover:bg-white/5 transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 cursor-pointer"
             >
                {/* Category Identity */}
                <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex flex-col justify-center">
                   <h3 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter text-white mb-2 lg:mb-4">
                     {category.name}
                   </h3>
                   <p className="text-[#888] text-sm md:text-base font-medium max-w-sm lg:group-hover:text-[#ccc] transition-colors duration-500">
                     {category.description}
                   </p>
                </div>

                {/* Tech List */}
                <div className="w-full lg:w-2/3 flex flex-wrap content-center gap-x-6 gap-y-6 md:gap-x-12 md:gap-y-8">
                    {category.tools.map((tool, tIdx) => {
                      const isSpinning = ['React', 'Docker', 'Vite', 'Next.js'].includes(tool.name);
                      return (
                        <div key={tool.name} className="flex items-center gap-3">
                           <motion.span 
                             className="w-8 h-8 md:w-10 md:h-10 opacity-100 grayscale-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500"
                             animate={isSpinning ? {
                               rotate: 360
                             } : {
                               y: [0, -8, 0]
                             }}
                             transition={{
                               duration: isSpinning ? 10 : 3,
                               repeat: Infinity,
                               ease: "easeInOut",
                               delay: tIdx * 0.2
                             }}
                           >
                             <div className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
                               {tool.icon}
                             </div>
                           </motion.span>
                           <span className="font-display text-2xl md:text-3xl uppercase tracking-tight text-white/90 transition-colors duration-700">
                             {tool.name}
                           </span>
                        </div>
                      );
                    })}
                </div>
             </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
