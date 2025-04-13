"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Priyanshu Tiwari. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="/"
              className="text-sm text-slate-400 hover:text-white"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm text-slate-400 hover:text-white"
            >
              About
            </Link>
            <Link
              href="#research"
              className="text-sm text-slate-400 hover:text-white"
            >
              Research
            </Link>
            <Link
              href="#projects"
              className="text-sm text-slate-400 hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm text-slate-400 hover:text-white"
            >
              Contact
            </Link>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="https://www.linkedin.com/in/priyanshu-tiwari-305661258/"
              target="_blank"
              className="text-slate-400 hover:text-blue-400"
            >
              <FaLinkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/PRIYANSHU2026"
              target="_blank"
              className="text-slate-400 hover:text-white"
            >
              <FaGithub className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
