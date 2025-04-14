"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Publication {
  id: number;
  title: string;
  conference: string;
  year: number;
  link?: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Optimizing FAANG Stock Forecasting — The Power of Feature Engineering and LSTM in Financial Analysis",
    conference: "IEEE 5th International Conference on Artificial Intelligence and Data Engineering",
    year: 2024,
    link: "#",
  },
  {
    id: 2,
    title: "Enhancing Fare Prediction Accuracy in Ride-Hailing Through Neural Networks and Data Simulation",
    conference: "IEEE 5th International Conference on Artificial Intelligence and Data Engineering",
    year: 2024,
    link: "#",
  },
  {
    id: 3,
    title: "GIS-Based Urban Traffic Simulation Using Mesa Framework",
    conference: "Springer 2nd International Conference on Computing Science and Artificial Intelligence",
    year: 2024,
    link: "#",
  },
  {
    id: 4,
    title: "Dynamic Stability Classification in Smart Grids Using Feedforward Neural Networks",
    conference: "Springer IEI Journal (Q3) - International Conference on Sustainable Technology",
    year: 2024,
    link: "#",
  },
];

export function PublicationsSection() {
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

  return (
    <section id="publications" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
          >
            Selected Publications
          </motion.h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-6"
        >
          {publications.map((publication) => (
            <motion.div
              key={publication.id}
              variants={itemVariants}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2 text-slate-100">
                {publication.title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-slate-300">{publication.conference}</p>
                  <p className="text-slate-400">{publication.year}</p>
                </div>
                {publication.link && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={publication.link} target="_blank">
                      View Paper
                    </Link>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
