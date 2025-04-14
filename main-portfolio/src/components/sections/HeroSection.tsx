"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { Github, Linkedin, Mail, ExternalLink, Sparkles } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Memoized Components for better performance
const StatusBadge = () => (
  <div className="inline-block animate-pulse lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
          <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
          AI & ML Researcher
        </span>
      </div>
    </div>
  </div>
);

const SocialLink = ({ icon: Icon, link, label }: { icon: React.ElementType; link: string; label: string }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <button className="group relative p-3">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </button>
  </a>
);

// Constants
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["Medical Imaging", "Mechanical Engineering", "Financial Analytics", "Electrical Systems"];

const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/PRIYANSHU2026", label: "GitHub" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/priyanshu-tiwari-ml/", label: "LinkedIn" },
  { icon: Mail, link: "mailto:priyanshutiwari112@gmail.com", label: "Email" }
];

export function HeroSection() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  // Typing effect
  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping, isTyping]);

  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden min-h-screen flex items-center">
      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="max-w-2xl text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="space-y-4 sm:space-y-6">
              <StatusBadge />

              <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
                <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                  <span className="relative inline-block">
                    <span className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 blur-2xl opacity-20"></span>
                    <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                      Priyanshu
                    </span>
                  </span>
                  <br />
                  <span className="relative inline-block mt-2">
                    <span className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 blur-2xl opacity-20"></span>
                    <span className="relative bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Tiwari
                    </span>
                  </span>
                </h1>
              </div>

              {/* Typing Effect */}
              <div className="h-8 flex items-center" data-aos="fade-up" data-aos-delay="800">
                <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                  {text}
                </span>
                <span className="w-[3px] h-6 bg-gradient-to-t from-indigo-600 to-purple-600 ml-1 animate-pulse"></span>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
                data-aos="fade-up"
                data-aos-delay="1000">
                A multifaceted AI/ML enthusiast and researcher with a deep passion for developing cutting-edge AI solutions across diverse domains.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="1200">
                <Button asChild className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-300">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <span className="relative z-10">Discover My Work</span>
                    <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </Link>
                </Button>
                <Button asChild className="group relative overflow-hidden border border-indigo-600/50 hover:border-indigo-600 text-white px-6 py-2 rounded-lg transition-all duration-300">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Contact Me</span>
                    <span className="absolute inset-0 bg-indigo-600/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="hidden sm:flex gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="1400">
                {SOCIAL_LINKS.map((social, index) => (
                  <SocialLink key={index} {...social} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 h-auto lg:h-[600px] xl:h-[650px] relative flex items-center justify-center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            data-aos="fade-left"
            data-aos-delay="600"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full opacity-90">
              <div className={`absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${
                isHovering ? "opacity-50 scale-105" : "opacity-20 scale-100"
              }`}>
              </div>

              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-xl bg-slate-800 flex items-center justify-center relative">
                <Image
                  src="/images/profile.jpeg"
                  alt="Priyanshu Tiwari"
                  fill
                  className="object-cover rounded-full"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
                <div className="absolute inset-0 rounded-full shadow-inner border border-indigo-400/20"></div>
              </div>

              <div className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                isHovering ? "opacity-50" : "opacity-20"
              }`}>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 ${
                  isHovering ? "scale-110" : "scale-100"
                }`}>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto mt-24 px-4">
        <div className="p-6 bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl">
          <h2 className="text-xl font-semibold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
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
