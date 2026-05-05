import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Eye, Brain, Server } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-white">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* CHANGED: items-start to items-center. This perfectly centers the left column vertically! */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* === LEFT COLUMN === */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-3">
              About Me
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">
              Solving Real-World Problems with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Scalable Infrastructure & Automation
              </span>
            </h3>

            {/* Intro text */}
              I am a DevOps Engineer with over 1.5 years of experience in designing and managing robust CI/CD pipelines, containerization, and cloud infrastructure. I focus on optimizing deployment processes and building efficient, secure cloud environments.

            {/* Stats section (mt-auto removed, space controlled by mb-10 on the paragraph above) */}
            <div className="flex gap-12">
              <div>
                <span className="block text-4xl font-bold text-slate-900 mb-1">1.5+</span>
                <span className="text-sm font-medium text-slate-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-slate-900 mb-1">10+</span>
                <span className="text-sm font-medium text-slate-500">Projects Managed</span>
              </div>
            </div>
          </motion.div>

          {/* === RIGHT COLUMN: Expertise and Passion Cards === */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Expertise Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-secondary/70 group-hover:bg-secondary transition-colors duration-300"></div>
              <div className="pl-2">
                <strong className="text-slate-800 font-bold flex items-center gap-3 mb-3 text-lg">
                  <Server className="w-6 h-6 text-secondary" /> My Expertise
                </strong>
                <p className="leading-relaxed text-slate-600 text-sm sm:text-base">
                  I specialize in Infrastructure as Code (Terraform), Containerization (Docker, Kubernetes), and CI/CD automation. I have extensive experience with AWS and Azure cloud platforms, ensuring highly available and secure production environments.
                </p>
              </div>
            </div>

            {/* Passion Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-accent/70 group-hover:bg-accent transition-colors duration-300"></div>
              <div className="pl-2">
                <strong className="text-slate-800 font-bold flex items-center gap-3 mb-3 text-lg">
                  <Brain className="w-6 h-6 text-accent" /> My Passion
                </strong>
                <p className="leading-relaxed text-slate-600 text-sm sm:text-base">
                  I am passionate about automation and system reliability. I enjoy building efficient, secure cloud environments and optimizing deployment processes to accelerate release cycles while maintaining high code quality and security standards through DevSecOps.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;