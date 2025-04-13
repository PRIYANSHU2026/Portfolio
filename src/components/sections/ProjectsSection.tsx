"use client";

import { useRef } from "react";
import { motion, useInView, useMotionTemplate, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

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
    github: "https://github.com/PRIYANSHU2026/APPLICATION-OF-AI-STIR-FRICTION-WELDING-.git",
  },
  {
    id: 7,
    title: "Hedging of Financial Derivatives",
    description:
      "Open Source project with 200+ implementations based on machine learning and deep learning in financial analytics, stock prediction, and real estate prediction, including web applications.",
    image: "/images/projects/Finance.jpg",
    tags: [
      { name: "Financial ML", color: "bg-green-500" },
      { name: "Stock Prediction", color: "bg-blue-500" },
      { name: "Web Apps", color: "bg-purple-500" },
      { name: "Open Source", color: "bg-yellow-500" },
    ],
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
    github: "https://github.com/PRIYANSHU2026/Transformer-Summarization.git",
  },
   {
    id: 8,
    title: "Transformer-Based Text Summarization",
    description:
      "Research project at DRDO-MTRDC focused on the development and enhancement of high-frequency amplifiers by integrating Deep Learning techniques for performance optimization. Additionally, collaborated on a research paper under the esteemed guidance of Dr. Anurag Srivastava, Scientist 'F' and Deputy Director of the Cathode Department at MTRDC, contributing to advancements in defense-grade amplifier technology.",
    image: "/images/projects/20220302113914_210418-Figure-1.webp",
    tags: [
      { name: "Python", color: "bg-blue-500" },
      { name: "Deep Learning", color: "bg-purple-500" },
      { name: "FNN", color: "bg-green-500" },
      { name: "Research", color: "bg-red-500" },
    ],
    github: "https://github.com/PRIYANSHU2026/Transformer-Summarization.git",
  },
];

// Card component with 3D hover effect
function ProjectCard({ project }: { project: Project }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const rotateX = useMotionTemplate`calc(${mouseY} / 20 - 15deg)`;
  const rotateY = useMotionTemplate`calc((${mouseX} - 100) / 20deg)`;
  const translateZ = useMotionTemplate`perspective(1000px)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="h-full"
      style={{
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        className="relative h-full rounded-xl bg-slate-800/60 border border-slate-700 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group"
        style={{
          transform: `${translateZ} rotateX(${rotateX}) rotateY(${rotateY})`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glowing gradient background effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 blur-xl" />
        </div>

        {/* Floating sparkle effects */}
        <div className="absolute top-1/3 right-10 w-2 h-2 rounded-full bg-blue-400/70 animate-ping hidden group-hover:block" />
        <div className="absolute bottom-1/3 left-10 w-1 h-1 rounded-full bg-purple-400/70 animate-ping hidden group-hover:block animation-delay-700" />

        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="p-6 flex-grow">
          <motion.h3
            className="text-xl font-semibold mb-2 text-slate-100"
            style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            className="text-slate-300 mb-4"
            style={{ transformStyle: "preserve-3d", transform: "translateZ(25px)" }}
          >
            {project.description}
          </motion.p>

          <div className="flex flex-wrap gap-2 mt-4" style={{ transformStyle: "preserve-3d", transform: "translateZ(15px)" }}>
            {project.tags.map((tag) => (
              <span
                key={`${project.id}-${tag.name}`}
                className={`${tag.color} bg-opacity-20 text-xs px-2.5 py-0.5 rounded-full text-white border border-opacity-20 ${tag.color.replace('bg-', 'border-')}`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex gap-3" style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}>
          <Button asChild variant="outline" size="sm" className="bg-slate-900/50 border-slate-700">
            <Link href={project.github} target="_blank">
              <FaGithub className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>

          {project.demo && project.demo !== "#" && (
            <Button asChild size="sm">
              <Link href={project.demo} target="_blank">
                Demo
              </Link>
            </Button>
          )}

          <Button asChild variant="ghost" size="sm" className="ml-auto text-blue-400 hover:text-blue-300">
            <Link href={project.demo && project.demo !== "#" ? project.demo : project.github} target="_blank">
              View Project
            </Link>
          </Button>
        </CardFooter>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-slate-900 overflow-hidden">
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

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}