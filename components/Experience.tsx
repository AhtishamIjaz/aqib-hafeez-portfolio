import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '../types';
import { Briefcase, Calendar, ExternalLink, MapPin } from 'lucide-react';

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Junior DevOps Engineer",
    company: "Quiddity Pakistan",
    companyUrl: "https://www.quiddity.com.pk/",
    period: "January 2025 – Present",
    workMode: "Onsite",
    description: [
      "Designed and deployed production AWS infrastructure (VPC, EC2, EKS, MSK, ALB, Route53) using Terraform reducing manual provisioning time.",
      "Developed end-to-end CI/CD pipelines with GitHub Actions, Docker, and HashiCorp Vault automating deployments and enforcing secrets management.",
      "Containerized applications using Docker and configured NGINX as a reverse proxy and load balancer, improving resilience and scalability.",
      "Implemented monitoring with Prometheus, Loki, and Grafana dashboards for production workloads.",
      "Managed DNS (BIND), firewall rules, and security policies for production environments."
    ]
  },
  {
    id: 2,
    role: "Junior DevOps Engineer",
    company: "Software Development Hub",
    companyUrl: "https://www.linkedin.com/company/software-development-hub/",
    period: "June 2024 – December 2024",
    workMode: "Remote/Hybrid",
    description: [
      "Deployed a large-scale monolithic PHP application on Apache servers, managing server configuration and virtual hosts across staging and production.",
      "Provisioned and managed AWS infrastructure including EC2 instances, Application Load Balancer (ALB), Security Groups, and IAM roles.",
      "Built and maintained GitHub Actions CI/CD pipelines to automate build and deployment workflows, accelerating release cycles.",
      "Ensured secure and highly available hosting for production workloads through optimized security policies and load balancing."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-slate-900">
          Professional <span className="text-accent">Journey</span>
        </h2>

        <div className="relative border-l border-slate-200 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(6,182,212,0.4)]"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                     {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-medium mt-1 text-sm sm:text-base">
                    <Briefcase className="w-4 h-4" />
                    {exp.companyUrl ? (
                      <a 
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-accent transition-colors flex items-center gap-1 group"
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <span>{exp.company}</span>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
                  {/* Date Pill */}
                  <div className="flex items-center gap-2 text-slate-500 text-xs sm:text-sm font-mono bg-slate-100 px-3 py-1 rounded-full border border-slate-200 w-fit">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    {exp.period}
                  </div>
                  
                  {/* Work Mode Pill */}
                  {exp.workMode && (
                    <div className={`flex items-center gap-1.5 text-xs sm:text-sm font-mono px-3 py-1 rounded-full border w-fit ${
                      exp.workMode === 'Remote' 
                        ? 'bg-blue-50 text-blue-600 border-blue-200' 
                        : 'bg-emerald-50 text-emerald-600 border-emerald-200'
                    }`}>
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      {exp.workMode}
                    </div>
                  )}
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-accent mt-1.5 min-w-[5px]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;