import { ProjectDetails } from '../types';

export const projectDetailsData: Record<string, ProjectDetails> = {
  "aws-infra": {
    id: "aws-infra",
    tagline: "Industrial-grade AWS infrastructure automation with Terraform.",
    overview: [
      "This project focuses on the end-to-end automation of production AWS environments. By using Terraform, I eliminated the need for manual console intervention, ensuring that the infrastructure is repeatable, version-controlled, and consistent across environments.",
      "The architecture includes a secure VPC, managed Kubernetes (EKS), relational databases (RDS), and message streaming (MSK)."
    ],
    architectureUrl: "",
    howItWorks: [
      "Terraform modules are defined for core components like Networking, Compute, and Databases.",
      "A remote backend with S3 and DynamoDB is used for state management and locking.",
      "CI/CD pipelines trigger infrastructure updates on every pull request.",
      "AWS IAM policies are strictly enforced using the principle of least privilege."
    ],
    techStack: [
      { name: "Terraform", reason: "Standard for Infrastructure as Code (IaC) to manage multi-cloud resources." },
      { name: "AWS EKS", reason: "Managed Kubernetes service for scaling containerized applications." },
      { name: "AWS MSK", reason: "Managed Kafka service for handling real-time data streams." },
      { name: "GitHub Actions", reason: "Automates the Terraform plan and apply workflows." }
    ],
    features: [
      { title: "Modular Architecture", description: "Reusable Terraform modules for quick environment setup." },
      { title: "State Management", description: "Secure remote state storage with versioning and locking." },
      { title: "Automated Scaling", description: "Configured AWS Auto Scaling groups and EKS node groups." }
    ],
    challenges: [
      {
        problem: "Managing complex dependencies between networking and compute resources.",
        solution: "Implemented strict module outputs and data source lookups to ensure correct ordering of resource creation."
      }
    ]
  }
};
