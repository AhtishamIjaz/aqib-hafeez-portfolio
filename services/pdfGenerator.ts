import { jsPDF } from "jspdf";

export const generatePDF = () => {
  const doc = new jsPDF();
  const pageHeight = doc.internal.pageSize.height;
  const contentWidth = 170;
  const leftMargin = 20;
  let y = 20;

  const checkPageBreak = (heightNeeded: number) => {
    if (y + heightNeeded > pageHeight - 20) {
      doc.addPage();
      y = 20;
    }
  };

  const addHeading = (text: string) => {
    checkPageBreak(15);
    y += 5;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(6, 182, 212); // Primary color
    doc.text(text.toUpperCase(), leftMargin, y);
    y += 2;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(leftMargin, y, leftMargin + contentWidth, y);
    doc.setTextColor(0, 0, 0); // Reset color
    y += 6;
  };

  const addSubHeading = (text: string, rightText?: string) => {
    checkPageBreak(8);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(text, leftMargin, y);
    if (rightText) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(rightText, leftMargin + contentWidth, y, { align: "right" });
      doc.setTextColor(0, 0, 0);
    }
    y += 5;
  };

  const addBody = (text: string, indent = 0, fontSize = 10) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, contentWidth - indent);
    const height = lines.length * (fontSize * 0.45);
    checkPageBreak(height);
    doc.text(lines, leftMargin + indent, y);
    y += height + 2;
  };

  const addBullet = (text: string) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const lines = doc.splitTextToSize(text, contentWidth - 5);
    const height = lines.length * 4.5;
    checkPageBreak(height);
    doc.text("•", leftMargin, y);
    doc.text(lines, leftMargin + 5, y);
    y += height + 2;
  };

  // --- HEADER ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text("Aqib Hafeez", 105, y, { align: "center" });
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Islamabad, Pakistan | +92 349 9476288", 105, y, { align: "center" });
  y += 5;
  doc.text("aqibhafeez422@gmail.com | linkedin.com/in/aqib-hafeez", 105, y, { align: "center" });
  y += 5;
  doc.text("github.com/aqib-hafeez", 105, y, { align: "center" });
  y += 10;

  // --- SUMMARY ---
  addHeading("Summary");
  addBody("DevOps Engineer with 1.5+ years of hands-on experience in designing and managing CI/CD pipelines, containerization, and cloud infrastructure. Skilled in Docker, Kubernetes, GitHub Actions, AWS, and Azure DevOps, with a strong focus on automation, scalability, and system reliability.");

  // --- EDUCATION ---
  addHeading("Education");
  addSubHeading("Bachelor of Science in Computer Science", "Jan 2021 - Dec 2024");
  addBody("Abasyn University | Islamabad, Pakistan");
  
  // --- EXPERIENCE ---
  addHeading("Work Experience");
  
  addSubHeading("Junior DevOps Engineer", "Jan 2025 - Present");
  addBody("Quiddity Pakistan | Onsite", 0, 10);
  y += 2;
  addBullet("Designed and deployed production AWS infrastructure (VPC, EC2, EKS, MSK, ALB, Route53) using Terraform.");
  addBullet("Developed end-to-end CI/CD pipelines with GitHub Actions, Docker, and HashiCorp Vault.");
  addBullet("Containerized applications using Docker and configured NGINX as a reverse proxy.");
  addBullet("Implemented monitoring with Prometheus, Loki, and Grafana dashboards.");

  addSubHeading("Junior DevOps Engineer", "Jun 2024 - Dec 2024");
  addBody("Software Development Hub | Remote/Hybrid", 0, 10);
  y += 2;
  addBullet("Deployed a large-scale monolithic PHP application on Apache servers.");
  addBullet("Provisioned and managed AWS infrastructure including EC2, ALB, and IAM roles.");
  addBullet("Built and maintained GitHub Actions CI/CD pipelines to automate release cycles.");

  // --- PROJECTS ---
  addHeading("Projects");

  addSubHeading("AWS Infra Automation with Terraform");
  addBody("Automated provisioning of production-grade AWS infrastructure using Terraform modules, eliminating manual console setup entirely.");
  
  addSubHeading("CI/CD Pipeline for Node.js App");
  addBody("Implemented fully automated CI/CD using GitHub Actions, Docker, and GHCR for seamless build-test-deploy lifecycles.");

  addSubHeading("ReadWithUs");
  addBody("Managed production infrastructure for a UK-based online tutoring platform using Docker Compose and AWS ALB with SSL/TLS.");

  // --- SKILLS ---
  addHeading("Technical Skills");
  
  addSubHeading("Infrastructure & CI/CD");
  addBody("Terraform, Docker, Kubernetes, GitHub Actions, Azure DevOps, Jenkins, Bash Scripting.");
  
  y += 2;
  addSubHeading("Cloud & Security");
  addBody("AWS (EC2, S3, Lambda, VPC, EKS), Azure (VMs, Blob Storage, VNet), HashiCorp Vault, SonarQube, Trivy, GitLeaks.");

  y += 2;
  addSubHeading("Monitoring & Networking");
  addBody("Prometheus, Grafana, Loki, ELK Stack, DNS, Firewalls, Load Balancing (ALB, NGINX).");

  // --- CERTIFICATIONS ---
  addHeading("Certifications");
  addBullet("Certified Kubernetes Administrator (CKA) | KodeKloud");
  addBullet("Terraform Associate | KodeKloud");
  addBullet("AWS Certified Solutions Architect – Associate | Udemy");
  addBullet("AWS Cloud Practitioner | AWS");
  addBullet("GitHub Actions Certification | KodeKloud");

  doc.save("Aqib_Hafeez_CV.pdf");
};
