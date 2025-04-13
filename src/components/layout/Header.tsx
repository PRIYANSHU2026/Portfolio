"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link as ScrollLink } from "react-scroll";

const navigation = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Research", href: "research" },
  { name: "Publications", href: "publications" },
  { name: "Projects", href: "projects" },
  { name: "Certificates", href: "certificates" },
  { name: "Contact", href: "contact" },
];

export function Header() {
  const isScrolled = useScrollAnimation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 backdrop-blur transition-colors duration-300",
        isScrolled
          ? "bg-slate-900/90 border-b border-slate-800"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
              Priyanshu Tiwari
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-7">
          {navigation.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.href}
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="text-sm font-medium text-slate-200 hover:text-white cursor-pointer"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild>
            <Link href="/images/PRIYANSHU_TIWARI.pdf" target="_blank" download>
              Download CV
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-900 px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                  Priyanshu Tiwari
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-800">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <ScrollLink
                      key={item.name}
                      to={item.href}
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                      className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-white cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </ScrollLink>
                  ))}
                </div>
                <div className="py-6">
                  <Button asChild className="w-full">
                    <Link href="/images/PRIYANSHU_TIWARI.pdf" target="_blank" download>
                      Download CV
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
