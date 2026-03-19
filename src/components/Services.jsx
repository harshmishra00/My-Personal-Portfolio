import React from 'react';
import { motion } from 'framer-motion';

/* ─── Tech Icon Visuals ─────────────────────────────────────── */
import {
  NextJSIcon,
  DockerIcon,
  PostgreSQLIcon,
  AWSIcon,
  ReactIcon,
  NodeJSIcon,
  ExpressIcon,
  MongoDBIcon,
  MySQLIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  PythonIcon,
  GitIcon,
  LinuxIcon,
  TailwindCSSIcon,
  ViteIcon,
  CPlusPlusIcon,
  JavaIcon,
  FigmaIcon,
  HTMLIcon,
  CSSIcon,
  GitHubIcon,
  PostmanIcon,
  CIcon,
  PHPIcon,
  ReduxIcon,
  FirebaseIcon,
  UbuntuIcon,
  BashIcon,
  VercelIcon
} from './TechIcons';

const icons = {
  NextJS: <NextJSIcon />,
  Docker: <DockerIcon />,
  PostgreSQL: <PostgreSQLIcon />,
  AWS: <AWSIcon />,
  React: <ReactIcon />,
  NodeJS: <NodeJSIcon />,
  Express: <ExpressIcon />,
  MongoDB: <MongoDBIcon />,
  MySQL: <MySQLIcon />,
  JavaScript: <JavaScriptIcon />,
  TypeScript: <TypeScriptIcon />,
  Python: <PythonIcon />,
  Git: <GitIcon />,
  Linux: <LinuxIcon />,
  TailwindCSS: <TailwindCSSIcon />,
  Vite: <ViteIcon />,
  CPlusPlus: <CPlusPlusIcon />,
  Java: <JavaIcon />,
  Figma: <FigmaIcon />,
  HTML: <HTMLIcon />,
  CSS: <CSSIcon />,
  GitHub: <GitHubIcon />,
  Postman: <PostmanIcon />,
  C: <CIcon />,
  PHP: <PHPIcon />,
  Redux: <ReduxIcon />,
  Firebase: <FirebaseIcon />,
  Ubuntu: <UbuntuIcon />,
  Bash: <BashIcon />,
  Vercel: <VercelIcon />
};

const categories = [
  {
    name: 'Frontend',
    description: 'Building elegant, high-performance interfaces.',
    tools: [
      { name: 'React', icon: icons.React },
      { name: 'Redux', icon: icons.Redux },
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
      { name: 'PHP', icon: icons.PHP },
      { name: 'Java', icon: icons.Java },
      { name: 'C++', icon: icons.CPlusPlus },
      { name: 'C', icon: icons.C },
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
      { name: 'Firebase', icon: icons.Firebase },
      { name: 'Docker', icon: icons.Docker },
      { name: 'AWS', icon: icons.AWS },
      { name: 'Vercel', icon: icons.Vercel },
    ]
  },
  {
    name: 'Tooling',
    description: 'Essential environment and product tools.',
    tools: [
      { name: 'Git', icon: icons.Git },
      { name: 'GitHub', icon: icons.GitHub },
      { name: 'Linux', icon: icons.Linux },
      { name: 'Ubuntu', icon: icons.Ubuntu },
      { name: 'Bash', icon: icons.Bash },
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
