"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ContactForm } from "./ContactForm";
import Link from "next/link";
import { Linkedin, Github, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-300 max-w-3xl mx-auto"
          >
            Have a project in mind or want to discuss collaboration opportunities? Feel free to reach out!
          </motion.p>
        </div>

        <div
          ref={ref}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6 text-slate-100">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-400 mt-1 mr-3" />
                  <div>
                    <h4 className="text-slate-200 font-medium">Email</h4>
                    <Link
                      href="mailto:techarena955@gmail.com"
                      className="text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      techarena955@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-400 mt-1 mr-3" />
                  <div>
                    <h4 className="text-slate-200 font-medium">Location</h4>
                    <p className="text-slate-300">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-100">Social Profiles</h3>
              <p className="text-slate-300 mb-4">Connect with me on LinkedIn and GitHub</p>

              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/in/priyanshu-tiwari-305661258/"
                  target="_blank"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://github.com/PRIYANSHU2026"
                  target="_blank"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-900/60 border border-slate-800 rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold mb-6 text-slate-100">Send Me a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
