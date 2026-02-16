'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import GlassCard from '@/components/GlassCard';
import SkillPill from '@/components/SkillPill';
import portfolioElements from '@/data/portfolio';
import { PortfolioElement } from '@/data/types';

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ProjectModal({ project, onClose }: { project: PortfolioElement; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <GlassCard className="p-0 overflow-hidden">
          {/* Header image */}
          <div className="relative h-56 md:h-72">
            <Image
              src={project.img[0]}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {project.titleref ? (
                    <a
                      href={project.titleref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 transition-colors"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <span className="text-xs text-text-secondary/60 uppercase tracking-wider">
                  {project.type} project
                </span>
              </div>
              <div className="flex gap-2 shrink-0">
                {project.github?.map((link, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  >
                    <GitHubIcon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.skills.filter(Boolean).map((skill, i) => (
                <SkillPill key={i} label={skill} />
              ))}
            </div>

            <p className="text-text-secondary leading-relaxed mb-6">
              {project.description}
            </p>

            {project.detail.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-3">
                  Details
                </h4>
                <ul className="space-y-3">
                  {project.detail.map((d) => (
                    <li key={d.id}>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        <span className="text-blue-400 mr-2">&#8250;</span>
                        {d.title}
                      </p>
                      {d.task && d.task.length > 0 && (
                        <ul className="ml-5 mt-1.5 space-y-1.5">
                          {d.task.map((t, ti) => (
                            <li key={ti} className="text-sm text-text-secondary/80 leading-relaxed">
                              - {t}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioElement | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

  return (
    <>
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              Portfolio
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioElements.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="h-full cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <GlassCard className="overflow-hidden group h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.img[0]}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-70 transition-opacity duration-[1200ms] group-hover:opacity-50" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-white">
                          {project.title}
                        </h3>
                        <div className="flex gap-2">
                          {project.github?.map((link, i) => (
                            <span
                              key={i}
                              className="text-white/40 group-hover:text-white/70 transition-colors duration-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(link, '_blank');
                              }}
                            >
                              <GitHubIcon size={18} />
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.skills.filter(Boolean).slice(0, 4).map((skill, i) => (
                          <SkillPill key={i} label={skill} />
                        ))}
                        {project.skills.filter(Boolean).length > 4 && (
                          <span className="px-2 py-0.5 text-xs rounded-full text-text-secondary/50">
                            +{project.skills.filter(Boolean).length - 4}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-text-secondary/70 line-clamp-2 flex-1">
                        {project.description}
                      </p>
                      <p className="text-xs text-blue-500/60 mt-3 group-hover:text-blue-500 transition-colors duration-300">
                        Click to view details
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
