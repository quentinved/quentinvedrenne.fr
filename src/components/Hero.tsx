"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const RESUME_URL =
  "https://docs.google.com/document/d/118u5fe-6Rp7wSy-epWLSSR7hGatJjZ2PGn4WXpVh3iY/export?format=pdf";

const heroMetrics: { value: string; label: string }[] = [
  { value: "5+ yrs", label: "engineering experience" },
  { value: "3+ yrs", label: "Rust in production" },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center py-32 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-[1fr_280px] gap-16 md:gap-20 items-center">
          {/* Left — text content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight"
            >
              Quentin
              <br />
              Vedrenne
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 flex items-center gap-4"
            >
              <div className="h-px w-12 bg-gradient-to-r from-blue-600 to-sky-500" />
              <p className="text-lg text-text-secondary/80">
                Founding Engineer · Lead Developer · Cloud Architect
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-text-secondary text-base md:text-lg leading-relaxed max-w-xl"
            >
              I&apos;m Quentin a founding engineer at{" "}
              <span className="text-foreground">Edamame Technologies</span>. I
              build production systems in Rust and on the cloud, with a focus on
              developer tools, open-source software, and infrastructure
              that&apos;s robust, secure, scalable, and well-tested.
            </motion.p>

            {/* Featured open-source project callout */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              href="https://whisper.quentinvedrenne.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all"
            >
              <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase text-blue-700 bg-white">
                New
              </span>
              <span className="text-sm text-white/95">
                Try my new open-source project —{" "}
                <span className="font-semibold text-white">Whisper</span>
              </span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-white group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </motion.a>

            {/* Metrics strip — proof above the fold */}
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-md"
            >
              {heroMetrics.map((m) => (
                <div key={m.label} className="border-l border-blue-500/40 pl-3">
                  <dt className="text-lg sm:text-xl font-semibold text-foreground tabular-nums">
                    {m.value}
                  </dt>
                  <dd className="text-xs text-text-secondary/70 mt-0.5 leading-snug">
                    {m.label}
                  </dd>
                </div>
              ))}
            </motion.dl>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {["Rust", "AWS", "React", "TypeScript", "Kubernetes"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs text-text-secondary/70 border border-surface/8 rounded-full"
                  >
                    {tech}
                  </span>
                ),
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cta text-cta-foreground text-sm font-medium hover:bg-cta/90 transition-colors"
              >
                See my work
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface/5 text-foreground text-sm font-medium border border-surface/10 hover:bg-surface/10 hover:border-surface/20 transition-colors"
              >
                <svg
                  width="14"
                  height="14"
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
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-text-secondary text-sm font-medium hover:text-foreground transition-colors"
              >
                Get in touch
              </a>

              {/* Subtle separator before social icons */}
              <span className="hidden sm:block w-px h-6 bg-surface/15 mx-1" aria-hidden="true" />

              <a
                href="https://github.com/quentinved"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full text-foreground dark:text-foreground/60 dark:hover:text-foreground hover:bg-surface/10 transition-colors"
              >
                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/quentin-vedrenne/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full text-foreground dark:text-foreground/60 dark:hover:text-foreground hover:bg-surface/10 transition-colors"
              >
                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-surface/10">
                <Image
                  src="/pp.jpeg"
                  alt="Quentin Vedrenne"
                  width={256}
                  height={256}
                  priority
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Subtle accent corner */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl border border-blue-600/20 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
