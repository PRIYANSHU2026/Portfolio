"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, Code2 } from "lucide-react";

interface ProjectTag {
  name: string;
  color: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: ProjectTag[];
  technologies?: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Bone Loss Detection on X-Ray Teeth",
    description:
      "Research project with Krishnadevaraya College of Dental Sciences & Hospital to detect bone loss in dental X-rays using deep learning algorithms.",
    image: "/images/projects/bone-loss-detection.png",
    tags: [
      { name: "Medical AI", color: "bg-red-500" },
      { name: "Computer Vision", color: "bg-blue-500" },
      { name: "Deep Learning", color: "bg-purple-500" },
      { name: "Healthcare", color: "bg-green-500" },
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "scikit-learn", "Keras"],
    github: "https://github.com/PRIYANSHU2026/DENTAL-X-RAY.git",
  },
  {
    id: 2,
    title: "Combinational Health Model",
    description:
      "Multi-disease prediction model developed under the guidance of Dr. Soumya Pati that combines multiple biomarkers for comprehensive health assessment.",
    image: "/images/projects/health-model.png",
    tags: [
      { name: "Machine Learning", color: "bg-blue-500" },
      { name: "Healthcare", color: "bg-green-500" },
      { name: "Predictive Models", color: "bg-yellow-500" },
      { name: "Data Science", color: "bg-purple-500" },
    ],
    technologies: ["Python", "scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    github: "https://github.com/PRIYANSHU2026/combinational-health-model.git",
  },
  {
    id: 3,
    title: "GIS-Based Urban Traffic Simulation",
    description:
      "Simulated urban traffic congestion using the Mesa agent-based modeling framework and OSMnx for road network extraction, modeling real-world Bangalore traffic scenarios.",
    image: "/images/projects/gis-traffic-simulation.jpg",
    tags: [
      { name: "Agent-based Modeling", color: "bg-orange-500" },
      { name: "GIS", color: "bg-blue-500" },
      { name: "Mesa Framework", color: "bg-green-500" },
      { name: "Traffic Simulation", color: "bg-yellow-500" },
    ],
    technologies: ["Python", "Mesa", "OSMnx", "NetworkX", "Matplotlib", "GeoPandas"],
    github: "https://github.com/PRIYANSHU2026/Traffic-Congetion-.git",
  },
  {
    id: 4,
    title: "CBCT 3D Visualization Software",
    description:
      "Advanced visualization tool for Cone Beam Computed Tomography (CBCT) dental scans with 3D mesh rendering capabilities.",
    image: "/images/projects/cbct-visualizer.png",
    tags: [
      { name: "3D Visualization", color: "bg-blue-500" },
      { name: "Medical Imaging", color: "bg-red-500" },
      { name: "CBCT", color: "bg-purple-500" },
      { name: "Python", color: "bg-yellow-500" },
    ],
    technologies: ["Python", "VTK", "PyQt5", "SimpleITK", "NumPy", "Matplotlib"],
    github: "https://github.com/PRIYANSHU2026/3D-dental-impantation-project.git",
  },
  {
    id: 5,
    title: "Plant Disease Detection",
    description:
      "Collaborated on a PhD thesis and publication with Associate Professor Vijay Lakshmi to identify plant diseases from leaf images using computer vision.",
    image: "/images/projects/plant-disease-detection.jpg",
    tags: [
      { name: "Agriculture", color: "bg-green-500" },
      { name: "Computer Vision", color: "bg-blue-500" },
      { name: "CNN", color: "bg-purple-500" },
      { name: "Disease Detection", color: "bg-red-500" },
    ],
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas"],
    github: "https://github.com/PRIYANSHU2026/Project-AIML.git",
  },
  {
    id: 6,
    title: "AI in Friction Stir Welding",
    description:
      "Utilized an Artificial Neural Network (ANN) model to predict laboratory test outcomes with an accuracy of 88% for friction stir welding applications.",
    image: "/images/projects/ai-friction-stir-welding.png",
    tags: [
      { name: "ANN", color: "bg-purple-500" },
      { name: "Material Science", color: "bg-blue-500" },
      { name: "Manufacturing", color: "bg-orange-500" },
      { name: "Predictive Modeling", color: "bg-yellow-500" },
    ],
    technologies: ["Python", "TensorFlow", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/PRIYANSHU2026/APPLICATION-OF-AI-STIR-FRICTION-WELDING-.git",
  },
  {
    id: 7,
    title: "Hedging of Financial Derivatives",
    description:
      "Open Source project with 200+ implementations based on machine learning and deep learning in financial analytics, stock prediction, and real estate prediction.",
    image: "/images/projects/Finance.jpg",
    tags: [
      { name: "Financial ML", color: "bg-green-500" },
      { name: "Stock Prediction", color: "bg-blue-500" },
      { name: "Web Apps", color: "bg-purple-500" },
      { name: "Open Source", color: "bg-yellow-500" },
    ],
    technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "Flask", "React"],
    github: "https://github.com/PRIYANSHU2026/Hedging-of-Financial-Derivatives.git",
  },
  {
    id: 8,
    title: "Transformer-Based Text Summarization",
    description:
      "Research project at DRDO-CAIR focusing on abstractive text summarization of news articles using transformer architectures.",
    image: "/images/projects/maxresdefault.jpg",
    tags: [
      { name: "NLP", color: "bg-blue-500" },
      { name: "Transformers", color: "bg-purple-500" },
      { name: "Text Summarization", color: "bg-green-500" },
      { name: "Research", color: "bg-red-500" },
    ],
    technologies: ["Python", "PyTorch", "Transformers", "BERT", "ROUGE", "BLEU", "Hugging Face"],
    github: "https://github.com/PRIYANSHU2026/Transformer-Summarization.git",
  },
  {
    id: 9,
    title: "High-Frequency Amplifier Optimization",
    description:
      "Research project at DRDO-MTRDC focused on the development and enhancement of high-frequency amplifiers by integrating Deep Learning techniques for performance optimization.",
    image: "/images/projects/20220302113914_210418-Figure-1.webp",
    tags: [
      { name: "Python", color: "bg-blue-500" },
      { name: "Deep Learning", color: "bg-purple-500" },
      { name: "FNN", color: "bg-green-500" },
      { name: "Research", color: "bg-red-500" },
    ],
    technologies: ["Python", "TensorFlow", "Keras", "NumPy", "SciPy", "Matplotlib"],
    github: "https://github.com/PRIYANSHU2026/Transformer-Summarization.git",
  },
];

// Project card component
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="group h-full"
    >
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 group-hover:translate-y-[-4px]">
        {/* Image container with perfect square aspect ratio */}
        <div className="relative w-full pt-[100%] overflow-hidden">
          <div className="absolute inset-0 rounded-t-2xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Overlay content on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <h4 className="text-sm font-semibold text-slate-200 mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag) => (
                <span
                  key={`${project.id}-${tag.name}`}
                  className={`${tag.color} bg-opacity-30 text-xs px-2 py-0.5 rounded-full text-white border border-opacity-20 ${tag.color.replace('bg-', 'border-')}`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="text-lg font-semibold mb-2 text-slate-100 line-clamp-2">
            {project.title}
          </h3>

          <p className="text-slate-300 text-sm mb-4 line-clamp-3 flex-grow">
            {project.description}
          </p>

          <div className="flex gap-3 mt-auto">
            <Button asChild variant="outline" size="sm" className="bg-slate-950/50 border-slate-800 w-full">
              <Link href={project.github} target="_blank">
                <FaGithub className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>

            {project.demo && project.demo !== "#" ? (
              <Button asChild size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href={project.demo} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="projects" className="py-20 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
          >
            Projects & Applications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-300 max-w-3xl mx-auto"
          >
            Showcasing the practical applications of my research in artificial
            intelligence and machine learning.
          </motion.p>
        </div>

        <h2 className="text-2xl font-bold text-center mb-8 text-slate-100">My Projects</h2>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
