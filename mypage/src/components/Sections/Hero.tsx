'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Download, Cpu, Code2, Network, ChartNoAxesCombined } from 'lucide-react';



const Hero = () => {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container-responsive section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            <motion.p
              variants={fadeInUp}
              className="text-primary-700 font-semibold mb-4 flex items-center gap-2"
            >
              <span className="w-8 h-0.5 bg-primary-700"></span>
              Hello, I'm
            </motion.p>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              Kawuma <span className="text-primary-700">Latiif</span>
            </motion.h1>
            
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl text-gray-700 mb-6"
            >
              Electronics & Computer Engineer
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 mb-8 text-lg leading-relaxed"
            >
              I develop software, support reliable networks, and turn data into practical insights. My work spans smart energy, geospatial analysis, and applied machine learning.
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-primary flex items-center">
                View Projects
                <ChevronRight className="ml-2 size-5" />
              </a>
              <a
                href="/Kawuma_Latiif_CV.pdf"
                download="Kawuma_Latiif_CV.pdf"
                className="btn-secondary flex items-center"
              >
                <Download className="mr-2 size-5" />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="hero-panel relative w-full min-h-96 lg:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-12 flex flex-col justify-between">
              <div className="flex items-center justify-between text-blue-200 text-sm"><span>ENGINEERING WITH PURPOSE</span><Cpu size={28} /></div>
              <div className="py-10"><div aria-hidden="true" className="text-8xl sm:text-9xl font-bold tracking-tighter text-white">KL<span className="text-blue-300">.</span></div><p className="text-blue-100 mt-4 text-lg">Software. Networks. Data.</p></div>
              <div className="border-t border-white/20 pt-6 flex gap-6 text-blue-100"><Code2 aria-label="Software development"/><Network aria-label="Network engineering"/><ChartNoAxesCombined aria-label="Data analysis"/><span className="ml-auto text-sm">Kampala, Uganda</span></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;