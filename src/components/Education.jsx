import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';

import bitsNetworking from '../assets/certificates_webp/bits_networking.webp';
import hacktoberfest from '../assets/certificates_webp/hacktoberfest.webp';
import nptel from '../assets/certificates_webp/nptel.webp';
import tcpIp from '../assets/certificates_webp/tcp_ip.webp';
import oracle1 from '../assets/certificates_webp/oracle1.png';
import oracle2 from '../assets/certificates_webp/oracle2.png';

// Certificates
const certificateData = [
  {
    id: 1,
    name: "Oracle Cloud Infrastructure 2025 Data Foundations",
    issuer: "Oracle",
    image: oracle1
  },
  {
    id: 2,
    name: "Oracle Cloud Infrastructure 2025 AI Foundations",
    issuer: "Oracle",
    image: oracle2
  },
  {
    id: 3,
    name: "Bits and Bytes of Computer Networking",
    issuer: "Google / Coursera",
    image: bitsNetworking
  },
  {
    id: 4,
    name: "Hacktoberfest Tree",
    issuer: "DigitalOcean / Intel",
    image: hacktoberfest
  },
  {
    id: 5,
    name: "Cloud Computing",
    issuer: "NPTEL / IIT Kharagpur",
    image: nptel
  },
  {
    id: 6,
    name: "TCP/IP Advanced Topics",
    issuer: "Coursera",
    image: tcpIp
  }
];

const Education = () => {
  return (
    <section className="py-32 bg-white text-[#0f0f0f] overflow-hidden">
      <div className="container px-6 md:px-12 mx-auto">

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-[clamp(2.2rem,8vw,64px)] uppercase leading-[0.9] tracking-tighter mb-6">
            Education <br />
            <span className="text-[#999999]">& Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 max-w-6xl mx-auto">

          {/* ================= EDUCATION ================= */}
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
                className="group relative pl-12 border-l-2 border-[#0f0f0f]/10 hover:border-[#22C55E] transition-colors duration-300"
              >
                
                {/* 🔥 LOGO ON TIMELINE */}
                <div className="absolute -left-6 top-1 w-12 h-12 rounded-full overflow-hidden border-2 border-neutral-100 shadow-md bg-white">
                  <img 
                    src={edu.logo} 
                    alt={edu.subtitle}
                    className="w-full h-full object-contain p-1"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-[#22C55E] font-sans">
                    {edu.year}
                  </span>

                  <h4 className="text-xl md:text-2xl font-display uppercase leading-tight">
                    {edu.title}
                  </h4>

                  <p className="text-lg text-[#666666]">
                    {edu.subtitle}
                  </p>

                  <p className="text-sm text-[#999999] mt-1 font-medium">
                    {edu.grade}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

          {/* ================= CERTIFICATES ================= */}
          <div className="space-y-12">
            <h3 className="text-2xl font-sans font-medium uppercase tracking-widest text-[#999999] mb-8 border-b border-[#0f0f0f]/10 pb-4">
              Certificates
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certificateData.map((cert) => (
                <div 
                  key={cert.id}
                  className="w-full aspect-[4/3] bg-[#f5f5f5] border border-[#0f0f0f]/10 rounded-xl flex items-center justify-center overflow-hidden relative group hover:border-[#0f0f0f]/30 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <img 
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <h4 className="text-white font-display text-lg uppercase leading-tight mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-white/70 text-xs font-sans uppercase tracking-wider">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;