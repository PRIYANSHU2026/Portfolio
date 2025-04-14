"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, MessagesSquare, Cpu } from "lucide-react";

const researchAreas = [
  {
    id: 1,
    title: "Deep Learning Applications",
    description:
      "Developing novel architectures for computer vision tasks with a focus on efficiency and accuracy.",
    icon: BrainCircuit,
  },
  {
    id: 2,
    title: "Natural Language Processing",
    description:
      "Investigating transformer-based models for contextual understanding and semantic analysis.",
    icon: MessagesSquare,
  },
  {
    id: 3,
    title: "Reinforcement Learning",
    description:
      "Exploring multi-agent systems and policy optimization techniques for complex environments.",
    icon: Cpu,
  },
];

export function ResearchSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="research" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
          >
            Research Focus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-300 max-w-3xl mx-auto"
          >
            My research explores the frontiers of artificial intelligence and machine learning,
            with a focus on practical applications and theoretical advancements.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {researchAreas.map((area) => (
            <motion.div key={area.id} variants={itemVariants}>
              <Card className="bg-slate-900/80 border-slate-800 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <area.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-100">
                    {area.title}
                  </h3>
                  <p className="text-slate-300">{area.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
