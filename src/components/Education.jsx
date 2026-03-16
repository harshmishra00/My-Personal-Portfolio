import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section className="py-32 bg-white text-[#0f0f0f] overflow-hidden">
      <div className="container px-6 md:px-12 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-[48px] md:text-[64px] uppercase leading-[0.9] tracking-tighter mb-6">
            Education <br /> <span className="text-[#999999]">& Certifications</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
          {/* Academic Background */}
          <div className="space-y-12">
            <h3 className="text-2xl font-sans font-medium uppercase tracking-widest text-[#999999] mb-8 border-b border-[#0f0f0f]/10 pb-4">
              Academic Background
            </h3>
            
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                className="group relative pl-8 border-l-2 border-[#0f0f0f]/10 hover:border-[#22C55E] transition-colors duration-300"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-[#22C55E] font-sans">{edu.year}</span>
                  <h4 className="text-xl md:text-2xl font-display uppercase leading-tight">{edu.title}</h4>
                  <p className="text-lg text-[#666666]">{edu.subtitle}</p>
                  <p className="text-sm text-[#999999] mt-1 font-medium">{edu.grade}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Certifications & Activities */}
          <div className="space-y-12">
            <h3 className="text-2xl font-sans font-medium uppercase tracking-widest text-[#999999] mb-8 border-b border-[#0f0f0f]/10 pb-4">
              Certifications & Activities
            </h3>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="mb-12"
            >
              <div className="bg-[#f5f5f5] p-8 rounded-[4px] border border-transparent hover:border-[#0f0f0f]/10 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-display uppercase">Prompt Engineering: ChatGPT, Gen AI & LLM</h4>
                  <span className="text-xs bg-[#0f0f0f] text-white px-2 py-1 rounded">Infosys</span>
                </div>
                <p className="text-[#666666] text-sm leading-relaxed mb-2">Certification showcasing prompt engineering proficiency.</p>
                <span className="text-xs text-[#999999] font-medium">Aug 2025</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <div className="bg-[#f5f5f5] p-8 rounded-[4px] border border-transparent hover:border-[#0f0f0f]/10 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-display uppercase">Cloud Computing</h4>
                  <span className="text-xs bg-[#0f0f0f] text-white px-2 py-1 rounded">NPTEL</span>
                </div>
                <p className="text-[#666666] text-sm leading-relaxed mb-2">Fundamental cloud computing concepts and applications.</p>
                <span className="text-xs text-[#999999] font-medium">Apr 2025</span>
              </div>
            </motion.div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
