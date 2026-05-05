import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';
import { 
  Database, Layout, Brain, Cpu, Layers, Terminal, 
  Code2, FileCode, Coffee, Github, Laptop, FileJson, 
  BarChart, PieChart, TableProperties, Bot, Sparkles, 
  MessageSquareText, Link, Workflow, FileText, Search,
  Users, Server, Activity, MessageSquare, HardDrive, UserCheck,
  Globe, Cloud, Settings, Boxes, ShieldCheck, Monitor
} from 'lucide-react';

const PythonIcon = () => <span className="font-mono font-bold text-yellow-500">PY</span>;
const TFIcon = () => <span className="font-mono font-bold text-orange-500">TF</span>;
const TSIcon = () => <span className="font-mono font-bold text-blue-500">TS</span>;

const skills: Skill[] = [
  // Infrastructure as Code & Containers
  { name: 'Terraform (IaC)', level: 95, category: 'Infrastructure & Containers', icon: <Boxes className="text-purple-600" /> },
  { name: 'Docker', level: 92, category: 'Infrastructure & Containers', icon: <Boxes className="text-blue-500" /> },
  { name: 'Kubernetes (EKS/AKS)', level: 85, category: 'Infrastructure & Containers', icon: <Activity className="text-indigo-600" /> },
  { name: 'Docker Compose', level: 90, category: 'Infrastructure & Containers', icon: <Layers className="text-cyan-600" /> },
  { name: 'Helm Charts', level: 80, category: 'Infrastructure & Containers', icon: <Settings className="text-blue-400" /> },

  // CI/CD & DevOps Tools
  { name: 'GitHub Actions', level: 95, category: 'CI/CD & Automation', icon: <Workflow className="text-green-600" /> },
  { name: 'Azure DevOps', level: 88, category: 'CI/CD & Automation', icon: <Cloud className="text-blue-600" /> },
  { name: 'Jenkins', level: 82, category: 'CI/CD & Automation', icon: <Settings className="text-red-500" /> },
  { name: 'Git & GitHub', level: 94, category: 'CI/CD & Automation', icon: <Github className="text-slate-800" /> },
  { name: 'Automation Workflows', level: 90, category: 'CI/CD & Automation', icon: <Activity className="text-emerald-600" /> },

  // Cloud Infrastructure (AWS)
  { name: 'AWS EC2 & VPC', level: 92, category: 'AWS Cloud Services', icon: <Cloud className="text-orange-500" /> },
  { name: 'AWS S3 & Lambda', level: 88, category: 'AWS Cloud Services', icon: <Cloud className="text-orange-400" /> },
  { name: 'AWS EKS & RDS', level: 85, category: 'AWS Cloud Services', icon: <Database className="text-blue-600" /> },
  { name: 'Route53 & ACM', level: 90, category: 'AWS Cloud Services', icon: <Globe className="text-indigo-500" /> },
  { name: 'IAM & Secrets Manager', level: 92, category: 'AWS Cloud Services', icon: <ShieldCheck className="text-purple-600" /> },

  // Azure Cloud Services
  { name: 'Azure VMs', level: 85, category: 'Azure Cloud Services', icon: <Monitor className="text-blue-500" /> },
  { name: 'Azure Blob Storage', level: 88, category: 'Azure Cloud Services', icon: <HardDrive className="text-blue-400" /> },
  { name: 'Azure SQL Database', level: 82, category: 'Azure Cloud Services', icon: <Database className="text-blue-600" /> },
  { name: 'Azure Container Instances', level: 85, category: 'Azure Cloud Services', icon: <Boxes className="text-sky-500" /> },
  { name: 'Azure Key Vault', level: 90, category: 'Azure Cloud Services', icon: <ShieldCheck className="text-teal-600" /> },

  // DevSecOps & Security
  { name: 'HashiCorp Vault', level: 88, category: 'DevSecOps & Security', icon: <ShieldCheck className="text-purple-600" /> },
  { name: 'SonarQube (SAST)', level: 85, category: 'DevSecOps & Security', icon: <Search className="text-blue-500" /> },
  { name: 'Trivy (Vulnerability Scanning)', level: 88, category: 'DevSecOps & Security', icon: <Activity className="text-red-500" /> },
  { name: 'GitLeaks (Secrets Detection)', level: 90, category: 'DevSecOps & Security', icon: <Search className="text-orange-500" /> },
  { name: 'Host Hardening (Lynis)', level: 82, category: 'DevSecOps & Security', icon: <ShieldCheck className="text-emerald-600" /> },

  // Monitoring & Networking
  { name: 'Prometheus & Grafana', level: 90, category: 'Monitoring & Networking', icon: <BarChart className="text-orange-500" /> },
  { name: 'Loki & ELK Stack', level: 85, category: 'Monitoring & Networking', icon: <Activity className="text-green-500" /> },
  { name: 'DNS & Firewalls', level: 88, category: 'Monitoring & Networking', icon: <Globe className="text-blue-600" /> },
  { name: 'Load Balancing (ALB/NGINX)', level: 92, category: 'Monitoring & Networking', icon: <Activity className="text-cyan-500" /> },
  { name: 'Bash Scripting', level: 95, category: 'Monitoring & Networking', icon: <Terminal className="text-slate-700" /> },
];


const Skills: React.FC = () => {
    const categories = ['Agentic AI & Systems', 'AI & Machine Learning', 'Data & Databases', 'Web & Backend', 'Cloud & DevOps', 'Programming & Tools'] as const;

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-slate-900">Technical <span className="text-primary">Expertise</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            A robust set of skills spanning advanced Agentic AI, Generative AI, Data Science, and Full Stack Development.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll with Snap | Desktop: Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-auto md:px-0">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="flex-shrink-0 w-[85%] sm:w-[380px] md:w-auto snap-center bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-lg hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full"

            >
              <h3 className="text-lg md:text-xl font-bold mb-6 text-slate-800 border-b border-slate-100 pb-2 flex items-center gap-2">
                {category}
              </h3>
              <div className="space-y-4 md:space-y-5">
                {skills.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <div className="flex items-center gap-2.5">
                         <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                           {skill.icon}
                         </div>
                         <span className="font-medium text-slate-700 text-sm">{skill.name}</span>
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                                                className={`h-full rounded-full ${
                          category === 'Agentic AI & Systems' ? 'bg-gradient-to-r from-violet-600 to-indigo-600' :
                          category === 'AI & Machine Learning' ? 'bg-gradient-to-r from-primary to-accent' :
                          category === 'Data & Databases' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                          category === 'Web & Backend' ? 'bg-gradient-to-r from-sky-400 to-blue-500' : 
                          category === 'Cloud & DevOps' ? 'bg-gradient-to-r from-orange-400 to-rose-500' : 
                          'bg-gradient-to-r from-slate-400 to-slate-600'
                        }`}

                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;