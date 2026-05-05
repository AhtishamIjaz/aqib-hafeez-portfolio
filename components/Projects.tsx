import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { ExternalLink, Github, PlayCircle, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export const projects: Project[] = [
  {
    id: 1,
    title: "AWS Infra Automation with Terraform",
    description: "Automated end-to-end provisioning of production-grade AWS infrastructure (VPC, EC2, ALB, EKS, RDS, MSK) using Terraform modules, eliminating manual console setup entirely.",
    tags: ["Terraform", "AWS VPC", "EC2", "EKS", "RDS", "S3"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/aqib-hafeez",
    demoUrl: ""
  },
  {
    id: 2,
    title: "CI/CD Pipeline for Node.js App",
    description: "Designed and implemented a fully automated CI/CD pipeline using GitHub Actions triggering builds, automated tests, and Docker image pushes to GHCR.",
    tags: ["GitHub Actions", "Docker", "GHCR", "Node.js", "CI/CD"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/aqib-hafeez",
    demoUrl: ""
  },
  {
    id: 3,
    title: "CI/CD Pipeline for .NET App",
    description: "Built a fully automated CI/CD pipeline for a .NET application using GitHub Actions and Azure Container Registry (ACR), deploying directly to Azure App Service.",
    tags: ["GitHub Actions", "Docker", "ACR", "Azure App Service", ".NET"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/aqib-hafeez",
    demoUrl: ""
  },
  {
    id: 4,
    title: "ReadWithUs",
    description: "Deployed and managed production infrastructure for a live UK-based online tutoring platform using Docker Compose and AWS Application Load Balancer (ALB).",
    tags: ["Docker Compose", "AWS ALB", "ACM", "Apache", "Prometheus"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/aqib-hafeez",
    demoUrl: "https://readwithus.org.uk"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Featured <span className="text-secondary">Projects</span></h2>
            <p className="text-slate-600 max-w-xl text-sm sm:text-base">
              A showcase of my work in CI/CD automation, cloud infrastructure, and DevSecOps.
            </p>
          </div>
          <a href="https://github.com/aqib-hafeez" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium">
            View Github <Github className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] sm:text-xs font-mono px-2 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex gap-4 mt-auto pt-4 border-t border-slate-50 flex-wrap">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-primary transition-colors">
                      {project.demoUrl.includes("linkedin.com") ? (
                        <>
                          <PlayCircle className="w-4 h-4" /> Watch Demo
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </>
                      )}
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-primary transition-colors">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                  {project.slug && (
                    <Link to={`/project/${project.slug}`} className="flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors ml-auto">
                      <BookOpen className="w-4 h-4" /> Details
                    </Link>
                  )}
                  {!project.githubUrl && !project.demoUrl && !project.slug && (
                     <span className="text-sm text-slate-400 italic">Links coming soon</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 text-center md:hidden">
          <a href="https://github.com/aqib-hafeez" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium">
            View Github <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;