"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center py-32 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-[1fr_280px] gap-16 md:gap-20 items-center">
          {/* Left — text content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
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
                Software Engineer - Project Manager
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-text-secondary text-base md:text-lg leading-relaxed max-w-xl"
            >
              I&apos;m a dynamic Software Engineer with a passion for solving
              complex problems and fostering collaborative environments. With a
              solid background in full-stack development, cloud technologies,
              and project management, I thrive in settings where I can
              contribute to meaningful solutions and continuous learning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {["Rust", "AWS", "React", "TypeScript", "Kubernetes"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs text-text-secondary/70 border border-white/8 rounded-full"
                  >
                    {tech}
                  </span>
                ),
              )}
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
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-white/10">
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
