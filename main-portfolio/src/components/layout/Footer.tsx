"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SocialLinks from "@/components/ui/SocialLinks";
import { Github, Linkedin, Mail, ExternalLink, Code, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, link: "https://github.com/PRIYANSHU2026", label: "GitHub" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/priyanshu-tiwari-ml/", label: "LinkedIn" },
    { icon: Mail, link: "mailto:priyanshutiwari112@gmail.com", label: "Email" }
  ];

  return (
    <footer className="py-12 border-t border-slate-800/50 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/50 to-slate-950/90 pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Priyanshu Tiwari</h3>
              <p className="text-sm text-slate-400 max-w-xs">
                AI/ML Researcher with experience in cutting-edge applications of machine learning across diverse domains.
              </p>
              <SocialLinks links={socialLinks} className="flex gap-3 mt-4" iconSize={20} />
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Navigation</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Home</Link>
                <Link href="#about" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">About</Link>
                <Link href="#research" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Research</Link>
                <Link href="#projects" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Projects</Link>
                <Link href="#contact" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Contact</Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Research Areas</h3>
              <ul className="flex flex-col space-y-2">
                <li className="text-sm text-slate-400">Medical Imaging</li>
                <li className="text-sm text-slate-400">Financial Analytics</li>
                <li className="text-sm text-slate-400">Computer Vision</li>
                <li className="text-sm text-slate-400">Natural Language Processing</li>
                <li className="text-sm text-slate-400">Electrical Systems</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Contact</h3>
              <p className="text-sm text-slate-400">Feel free to reach out if you have any questions or would like to collaborate on a project.</p>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-indigo-400" />
                <a href="mailto:priyanshutiwari112@gmail.com" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                  priyanshutiwari112@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/30 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-slate-500 mb-4 sm:mb-0">
              © {currentYear} Priyanshu Tiwari. All rights reserved.
            </p>

            <div className="flex items-center space-x-2">
              <a
                href="/images/PRIYANSHU_TIWARI-3.pdf"
                target="_blank"
                download
                className="flex items-center text-sm text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <span>Resume</span>
                <ArrowUpRight className="ml-1 w-3 h-3" />
              </a>
              <span className="text-slate-700">•</span>
              <a
                href="https://www.linkedin.com/in/priyanshu-tiwari-ml/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="ml-1 w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
