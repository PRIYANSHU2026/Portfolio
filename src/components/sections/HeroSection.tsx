"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 pointer-events-none" />

      {/* Background stars/dots */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-repeat opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Priyanshu Tiwari
          </h1>
          <p className="text-xl mb-8 text-slate-300">
            A multifaceted AI/ML enthusiast and researcher with a deep passion for developing cutting-edge AI solutions across diverse domains, including Medical Imaging, Electrical Systems, Biotechnology, Financial Analytics, and Mechanical Engineering. Dedicated to driving impactful innovations through interdisciplinary research and real-world applications of Artificial Intelligence and Machine Learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-medium">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className="cursor-pointer"
              >
                Discover My Work
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-medium">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className="cursor-pointer"
              >
                Contact Me
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/images/profile.jpeg"
            alt="Priyanshu Tiwari"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      <div className="container mx-auto mt-24 px-4">
        <div className="p-6 bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl">
          <h2 className="text-xl font-semibold text-center mb-4 text-slate-100">
            AI & Machine Learning Researcher
          </h2>
          <p className="text-slate-300 text-center max-w-3xl mx-auto">
            Blending innovative research with practical implementations to build next-generation AI solutions that deliver tangible results.
          </p>
        </div>
      </div>
    </section>
  );
}
