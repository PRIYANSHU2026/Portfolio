"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface SkillItem {
  category: string;
  skills: string[];
}

const technicalSkills: SkillItem[] = [
  {
    category: "Programming",
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "R"],
  },
  {
    category: "ML/AI Focus",
    skills: [
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
      "Data Analysis",
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      "Git",
      "Docker",
      "Kubernetes",
      "AWS",
      "Google Cloud",
      "SQL",
      "NoSQL",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
  },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            About Me
          </h2>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-slate-300 text-lg mb-6">
              I'm an AI/ML Researcher with experience at DRDO and UBC, focusing on cutting-edge applications of
              artificial intelligence and machine learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">My Journey</h3>
              <div className="space-y-4 text-slate-300">
                <p>
                  My passion for artificial intelligence began during my undergraduate studies,
                  where I became fascinated with how machine learning could solve complex problems
                  across various domains.
                </p>
                <p>
                  As a research intern at DRDO and UBC, I've had the opportunity to work on
                  challenging projects that push the boundaries of what's possible with AI and ML
                  technologies.
                </p>
                <p>
                  I've presented my work at multiple international conferences including ICRAI,
                  CSEAI, AIDE, and ICST, sharing my findings with the global research community.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Technical Expertise</h3>
              <div className="space-y-6">
                {technicalSkills.map((skillItem) => (
                  <div key={skillItem.category}>
                    <h4 className="text-lg font-medium mb-2 text-slate-200">
                      {skillItem.category}
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {skillItem.skills.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center text-slate-300"
                        >
                          <span className="mr-2 text-blue-400">•</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education and Experience Tabs */}
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="education" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-slate-900/60 border border-slate-800">
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-slate-800 data-[state=active]:text-blue-400"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="data-[state=active]:bg-slate-800 data-[state=active]:text-blue-400"
                >
                  Experience
                </TabsTrigger>
              </TabsList>

              <TabsContent value="education" className="mt-6">
                <Card className="bg-slate-900/60 border border-slate-800">
                  <CardContent className="p-6 space-y-4">
                    <div className="border-l-2 border-blue-500 pl-4 space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-slate-200">Kendriya Vidyalaya</h3>
                        <p className="text-sm text-slate-300">PCMCS 10+2</p>
                        <p className="text-xs text-slate-400">2010 - 2022</p>
                        <p className="text-xs text-blue-400 mt-1">Grade: 1st class</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-slate-200">Sir M Visvesvaraya Institute of Technology</h3>
                        <p className="text-sm text-slate-300">Artificial Intelligence and Machine Learning (B.E)</p>
                        <p className="text-xs text-slate-400">2022 - 2026</p>
                        <p className="text-xs text-blue-400 mt-1">CGPA: 8.00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience" className="mt-6">
                <Card className="bg-slate-900/60 border border-slate-800">
                  <CardContent className="p-6 space-y-4">
                    <div className="border-l-2 border-blue-500 pl-4 space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-slate-200">Research Intern</h3>
                        <p className="text-sm text-blue-400">DRDO – Microwave Tube Research & Development Centre (MTRDC)</p>
                        <p className="text-xs text-slate-400">Nov 2024 – Dec 2024</p>
                        <p className="text-sm text-slate-300 mt-1">
                          Conducted research on machine learning applications for predicting and controlling the frequency of Traveling Wave Tubes using a Feedforward Neural Network (FNN).
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-slate-200">Machine Learning Researcher</h3>
                        <p className="text-sm text-blue-400">Unboxing Community</p>
                        <p className="text-xs text-slate-400">Sep 2024 – Nov 2024</p>
                        <p className="text-sm text-slate-300 mt-1">
                          Developed a recommendation system for an e-commerce platform using collaborative filtering and deep learning techniques.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-slate-200">Research Intern</h3>
                        <p className="text-sm text-blue-400">DRDO – Centre for Artificial Intelligence and Robotics (CAIR)</p>
                        <p className="text-xs text-slate-400">April 2024 – May 2024</p>
                        <p className="text-sm text-slate-300 mt-1">
                          Worked on NLP-based research focusing on 'Transformer-Based Text Summarization for News Articles.'
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </section>
  );
}