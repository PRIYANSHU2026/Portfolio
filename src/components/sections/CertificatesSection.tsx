"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: Date;
  category: "research" | "industry" | "course" | "open-source" | "conference" | "hackathon";
  link?: string;
  credentialId?: string;
  skills?: string[];
}

const certificates: Certificate[] = [
  // Original certificates
  {
    id: 1,
    title: "DRDO Research Trainee Certificate",
    organization: "Defence Research & Development Organisation (DRDO) - Microwave Tube Research & Development Centre (MTRDC)",
    date: new Date("2024-03-01"),
    category: "research",
    link: "https://drive.google.com/file/d/1cTZf2HS019iNCufF1_0nB-oBawH8C5-8/view?usp=sharing",
  },
  {
    id: 2,
    title: "Machine Learning Researcher Certificate",
    organization: "Unboxing Community",
    date: new Date("2024-02-01"),
    category: "industry",
    link: "https://www.linkedin.com/in/priyanshu-tiwari-305661258/overlay/experience/2522761870/multiple-media-viewer/?profileId=ACoAAD909nUB0H4YYjJ5Iqpr1X1HYCVWfQ6zcw4&treasuryMediaId=1736858841298",
  },
  {
    id: 3,
    title: "Transformer-Based Text Summarization for News Articles",
    organization: "DRDO - Centre for AI and Robotics",
    date: new Date("2024-01-15"),
    category: "research",
    link: "https://drive.google.com/file/d/1Y2KsjH-HX0VBLNLXs9DoQ4lcv_WYq1sA/view?usp=sharing",
  },
  {
    id: 4,
    title: "Girl Script Summer of Code 2024 - Top Performer",
    organization: "Girl Script Foundation",
    date: new Date("2024-03-15"),
    category: "open-source",
    link: "https://drive.google.com/file/d/13ix6QD0hwtphMZ_q_0xBQyyFf3MnomJ-/view?usp=sharing",
    credentialId: "GSSoC2024_OST100C_403EF768",
    skills: ["Data Analysis", "Deep Learning", "Machine Learning", "Neural Networks", "Financial Analysis"],
  },

  // Additional certificates
  {
    id: 5,
    title: "Optimizing FAANG Stock Forecasting",
    organization: "IEEE 5th International Conference on Artificial Intelligence and Data Engineering - NMAM Institute of Technology",
    date: new Date("2025-02-01"),
    category: "conference",
    skills: ["Research Skills", "Paper Presentation"],
  },
  {
    id: 6,
    title: "Enhancing Fare Prediction Accuracy in Ride Hailing",
    organization: "IEEE 5th International Conference on Artificial Intelligence and Data Engineering - NMAM Institute of Technology",
    date: new Date("2025-02-01"),
    category: "conference",
    skills: ["Research Skills", "Paper Presentation"],
  },
  {
    id: 7,
    title: "CSEAI24 Conference Participation",
    organization: "2nd International Conference on Computing for Science, Engineering, and Artificial Intelligence - California State University",
    date: new Date("2025-01-01"),
    category: "conference",
    skills: ["Research Skills"],
  },
  {
    id: 8,
    title: "Finalist of Neural Nexus Hackathon",
    organization: "Unstop",
    date: new Date("2024-12-01"),
    category: "hackathon",
    credentialId: "0d8ac775-3546-466e-911a-787755816f75",
  },
  {
    id: 9,
    title: "Artificial Intelligence in Reshaping Business Landscape",
    organization: "REVA Business School - REVA University",
    date: new Date("2024-12-01"),
    category: "conference",
    skills: ["Research Skills", "Paper Presentation", "Deep Learning", "Data Analysis"],
  },
  {
    id: 10,
    title: "Argonyx'24 Hackathon Participant",
    organization: "RV University",
    date: new Date("2024-11-01"),
    category: "hackathon",
  },
  {
    id: 11,
    title: "TensorFlow Developer Certificate",
    organization: "TensorFlow User Group (TFUG)",
    date: new Date("2024-10-01"),
    category: "industry",
    skills: ["Deep Learning", "TensorFlow", "Image Segmentation", "Image Recognition", "Object Detection"],
  },
  {
    id: 12,
    title: "Postman API Fundamentals Student Expert",
    organization: "Postman",
    date: new Date("2024-07-01"),
    category: "course",
  },
  {
    id: 13,
    title: "Advance Your Skills in Deep Learning and Neural Networks",
    organization: "LinkedIn",
    date: new Date("2023-10-01"),
    category: "course",
    link: "https://drive.google.com/file/d/advance-your-skills-in-deep-learning-and-neural-networks",
  },
  {
    id: 14,
    title: "Learning Relational Databases",
    organization: "LinkedIn",
    date: new Date("2024-05-01"),
    category: "course",
    skills: ["Relational Databases"],
  },
  {
    id: 15,
    title: "Foundations of Cybersecurity",
    organization: "Google",
    date: new Date("2024-03-01"),
    category: "course",
    skills: ["Cybersecurity"],
  },
  {
    id: 16,
    title: "Leveraging Cloud-Based Machine Learning on Azure",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 17,
    title: "AI Workshop: Build a Neural Network with PyTorch Lightning",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 18,
    title: "Problem Solving (Intermediate)",
    organization: "HackerRank",
    date: new Date("2024-06-01"),
    category: "course",
  },
  {
    id: 19,
    title: "AI Workshop: Hands-on with GANs Using Dense Neural Network",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 20,
    title: "AI Workshop: Hands-on with GANs with Deep Convolutional Networks",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 21,
    title: "Artificial Intelligence Foundations: Neural Networks",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 22,
    title: "Deep Learning: Getting Started",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 23,
    title: "Deep Learning Model Optimization and Tuning",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 24,
    title: "Introduction to Generative Adversarial Networks (GANs)",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 25,
    title: "Learning AI with GitHub Copilot",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 26,
    title: "Recurrent Neural Networks",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 27,
    title: "Training Neural Networks in Python",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
];

export function CertificatesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Category colors mapping
  const categoryColors = {
    research: "bg-purple-500/10 text-purple-400",
    industry: "bg-blue-500/10 text-blue-400",
    course: "bg-green-500/10 text-green-400",
    "open-source": "bg-yellow-500/10 text-yellow-400",
    conference: "bg-red-500/10 text-red-400",
    hackathon: "bg-pink-500/10 text-pink-400",
  };

  return (
    <section id="certificates" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
          >
            Certificates & Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-300 max-w-3xl mx-auto"
          >
            Documentation of my journey through courses, internships, conferences, and achievements.
          </motion.p>
        </div>

        <Tabs defaultValue="all" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="industry">Industry</TabsTrigger>
            <TabsTrigger value="course">Courses</TabsTrigger>
            <TabsTrigger value="open-source">Open Source</TabsTrigger>
            <TabsTrigger value="conference">Conferences</TabsTrigger>
            <TabsTrigger value="hackathon">Hackathons</TabsTrigger>
          </TabsList>

          {/* All Certificates */}
          <TabsContent value="all">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certificates.map((certificate) => (
                <motion.div
                  key={certificate.id}
                  variants={itemVariants}
                  className="bg-slate-900/60 border border-slate-800 rounded-lg p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
                >
                  <div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${categoryColors[certificate.category]}`}>
                      {certificate.category.replace("-", " ").charAt(0).toUpperCase() +
                        certificate.category.replace("-", " ").slice(1)}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-slate-100">
                      {certificate.title}
                    </h3>
                    <p className="text-slate-300 mb-1">{certificate.organization}</p>
                    <p className="text-slate-400 text-sm mb-3">{formatDate(certificate.date)}</p>

                    {certificate.credentialId && (
                      <p className="text-xs text-slate-500 mb-2">
                        Credential ID: {certificate.credentialId}
                      </p>
                    )}

                    {certificate.skills && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {certificate.skills.map((skill, index) => (
                          <span key={index} className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {certificate.link && (
                    <div className="mt-4">
                      <Button asChild variant="outline" size="sm">
                        <Link href={certificate.link} target="_blank">
                          View <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Filtered Certificates */}
          {["research", "industry", "course", "open-source", "conference", "hackathon"].map((category) => (
            <TabsContent key={category} value={category}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {certificates
                  .filter((certificate) => certificate.category === category)
                  .map((certificate) => (
                    <motion.div
                      key={certificate.id}
                      variants={itemVariants}
                      className="bg-slate-900/60 border border-slate-800 rounded-lg p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
                    >
                      <div>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${categoryColors[certificate.category]}`}>
                          {certificate.category.replace("-", " ").charAt(0).toUpperCase() +
                            certificate.category.replace("-", " ").slice(1)}
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-slate-100">
                          {certificate.title}
                        </h3>
                        <p className="text-slate-300 mb-1">{certificate.organization}</p>
                        <p className="text-slate-400 text-sm mb-3">{formatDate(certificate.date)}</p>

                        {certificate.credentialId && (
                          <p className="text-xs text-slate-500 mb-2">
                            Credential ID: {certificate.credentialId}
                          </p>
                        )}

                        {certificate.skills && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {certificate.skills.map((skill, index) => (
                              <span key={index} className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      {certificate.link && (
                        <div className="mt-4">
                          <Button asChild variant="outline" size="sm">
                            <Link href={certificate.link} target="_blank">
                              View <ExternalLink className="ml-2 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      )}
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}