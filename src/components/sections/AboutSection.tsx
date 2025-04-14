"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles, UserCheck } from "lucide-react";
import TechStack from "@/components/ui/TechStack";
import Image from "next/image";
import Link from "next/link";

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

// Memoized Components for better performance
const StatCard = ({ icon: Icon, color, value, label, description, animation }: {
  icon: React.ElementType;
  color: string;
  value: string | number;
  label: string;
  description: string;
  animation: string;
}) => (
  <div data-aos={animation} data-aos-duration={1300} className="relative group">
    <div className="relative z-10 bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
      <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>

      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <span
          className="text-4xl font-bold text-white"
          data-aos="fade-up-left"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-bottom"
        >
          {value}
        </span>
      </div>

      <div>
        <p
          className="text-sm uppercase tracking-wider text-gray-300 mb-2"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
        >
          {label}
        </p>
        <div className="flex items-center justify-between">
          <p
            className="text-xs text-gray-400"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            {description}
          </p>
          <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  </div>
);

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Stats data for display
  const statsData = [
    {
      icon: Code,
      color: "from-indigo-600 to-purple-600",
      value: "10+",
      label: "Projects",
      description: "AI & ML solutions developed",
      animation: "fade-right",
    },
    {
      icon: Award,
      color: "from-purple-600 to-indigo-600",
      value: "5+",
      label: "Publications",
      description: "Research papers published",
      animation: "fade-up",
    },
    {
      icon: Globe,
      color: "from-indigo-600 to-purple-600",
      value: "3",
      label: "Research Positions",
      description: "DRDO-CAIR, DRDO-MTRDC, UBC",
      animation: "fade-left",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl opacity-30"></div>

            <h2
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 relative z-10"
              data-aos="zoom-in-up"
              data-aos-duration="600"
            >
              About Me
            </h2>

            <p
              className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2 relative z-10"
              data-aos="zoom-in-up"
              data-aos-duration="800"
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
              AI Researcher and Machine Learning Engineer
              <Sparkles className="w-5 h-5 text-purple-400" />
            </p>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
            <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Hello, I'm
                </span>
                <span
                  className="block mt-2 text-gray-200"
                  data-aos="fade-right"
                  data-aos-duration="1300"
                >
                  Priyanshu Tiwari
                </span>
              </h2>

              <p
                className="text-base sm:text-lg text-gray-400 leading-relaxed"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                I'm an AI/ML Researcher with experience at DRDO and UBC, focusing on cutting-edge applications of
                artificial intelligence and machine learning. My research spans multiple domains, including Medical Imaging,
                Financial Analytics, NLP, and Electrical Systems.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
                <Link
                  href="/images/PRIYANSHU_TIWARI-3.pdf"
                  target="_blank"
                  download
                  className="w-full sm:w-auto"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-indigo-600/20">
                    <FileText className="w-5 h-5" /> Download CV
                  </button>
                </Link>

                <Link
                  href="#projects"
                  className="w-full sm:w-auto"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-purple-600/50 text-purple-600 font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 hover:bg-purple-600/10">
                    <Code className="w-5 h-5" /> View Projects
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2">
              <div
                className="relative group"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {/* Gradient backgrounds */}
                <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-purple-600 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-l from-purple-500 via-indigo-500 to-purple-600 rounded-full blur-2xl opacity-50" />
                </div>

                <div className="relative">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
                    <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />

                    {/* Overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />

                    <Image
                      src="/images/profile.jpeg"
                      alt="Priyanshu Tiwari"
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />

                    {/* Hover effects */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {statsData.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-900/60 border border-slate-800/70 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg hover:shadow-indigo-600/10 transition-all duration-300" data-aos="fade-right" data-aos-duration="1000">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">My Journey</h3>
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

            <div className="bg-slate-900/60 border border-slate-800/70 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg hover:shadow-indigo-600/10 transition-all duration-300" data-aos="fade-left" data-aos-duration="1000">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Technical Expertise</h3>
              <div className="space-y-6">
                {technicalSkills.map((skillItem) => (
                  <div key={skillItem.category}>
                    <h4 className="text-lg font-medium mb-2 text-slate-200">
                      {skillItem.category}
                    </h4>
                    <TechStack technologies={skillItem.skills} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education and Experience Tabs */}
          <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="1200">
            <Tabs defaultValue="education" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-slate-900/60 border border-slate-800/70 backdrop-blur-sm">
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-white"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-white"
                >
                  Experience
                </TabsTrigger>
              </TabsList>

              <TabsContent value="education" className="mt-6">
                <Card className="bg-slate-900/60 border border-slate-800/70 backdrop-blur-sm">
                  <CardContent className="p-6 space-y-4">
                    <div className="border-l-2 border-indigo-500 pl-4 space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-slate-200">Kendriya Vidyalaya</h3>
                        <p className="text-sm text-slate-300">PCMCS 10+2</p>
                        <p className="text-xs text-slate-400">2010 - 2022</p>
                        <p className="text-xs bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mt-1">Grade: 1st class</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-slate-200">Sir M Visvesvaraya Institute of Technology</h3>
                        <p className="text-sm text-slate-300">Artificial Intelligence and Machine Learning (B.E)</p>
                        <p className="text-xs text-slate-400">2022 - 2026</p>
                        <p className="text-xs bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mt-1">CGPA: 8.00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience" className="mt-6">
                <Card className="bg-slate-900/60 border border-slate-800/70 backdrop-blur-sm">
                  <CardContent className="p-6 space-y-4">
                    <div className="border-l-2 border-indigo-500 pl-4 space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-slate-200">Research Intern</h3>
                        <p className="text-sm bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">DRDO – Microwave Tube Research & Development Centre (MTRDC)</p>
                        <p className="text-xs text-slate-400">Nov 2024 – Dec 2024</p>
                        <p className="text-sm text-slate-300 mt-1">
                          Conducted research on machine learning applications for predicting and controlling the frequency of Traveling Wave Tubes using a Feedforward Neural Network (FNN).
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-slate-200">Machine Learning Researcher</h3>
                        <p className="text-sm bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Unboxing Community</p>
                        <p className="text-xs text-slate-400">Sep 2024 – Nov 2024</p>
                        <p className="text-sm text-slate-300 mt-1">
                          Developed a recommendation system for an e-commerce platform using collaborative filtering and deep learning techniques.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-slate-200">Research Intern</h3>
                        <p className="text-sm bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">DRDO – Centre for Artificial Intelligence and Robotics (CAIR)</p>
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

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slower {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
