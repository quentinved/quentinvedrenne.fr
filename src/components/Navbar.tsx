"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navigation";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Desktop — floating pill navbar (xl+ only; below xl uses the hamburger) */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden xl:block w-max max-w-[calc(100vw-2rem)]"
      >
        <div
          className={`inline-flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-background/80 backdrop-blur-xl border-surface/10 shadow-lg shadow-black/20"
              : "bg-surface/5 backdrop-blur-md border-surface/8"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 lg:px-4 py-1.5 text-sm rounded-full whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "text-foreground bg-surface/10"
                    : "text-text-secondary hover:text-foreground hover:bg-surface/8"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="https://docs.google.com/document/d/118u5fe-6Rp7wSy-epWLSSR7hGatJjZ2PGn4WXpVh3iY/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 lg:px-4 py-1.5 ml-1 text-sm text-foreground bg-surface/10 rounded-full hover:bg-surface/15 transition-all duration-200 whitespace-nowrap"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
          <ThemeToggle className="ml-1" />
        </div>
      </motion.nav>

      {/* Mobile — top bar (under md) */}
      <nav className="fixed top-0 w-full z-50 xl:hidden bg-background/80 backdrop-blur-lg border-b border-surface/5">
        <div className="flex items-center justify-between h-14 px-5">
          <a href="#" className="text-lg font-bold text-foreground">
            QV
          </a>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-text-secondary"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-text-secondary"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-text-secondary"
            />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 xl:hidden"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl transition-colors duration-200 ${
                    isActive
                      ? "text-foreground"
                      : "text-text-secondary hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="https://docs.google.com/document/d/118u5fe-6Rp7wSy-epWLSSR7hGatJjZ2PGn4WXpVh3iY/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface/10 text-lg text-foreground hover:bg-surface/15 transition-colors mt-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
