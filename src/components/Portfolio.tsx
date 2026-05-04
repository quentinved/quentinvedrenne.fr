'use client';

import { useState, useEffect, useMemo } from 'react';
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

function CardImageCarousel({ images, alt, intervalMs = 3500 }: { images: string[]; alt: string; intervalMs?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  if (images.length <= 1) {
    return (
      <Image
        src={images[0]}
        alt={alt}
        fill
        className="object-cover transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:brightness-110"
      />
    );
  }

  return (
    <>
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`${alt} ${currentIndex + 1}`}
            fill
            className="object-cover transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:brightness-110"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 pointer-events-none">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${i === currentIndex ? 'bg-blue-400' : 'bg-blue-400/40'}`}
          />
        ))}
      </div>
    </>
  );
}

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length <= 1) {
    return (
      <Image src={images[0]} alt={alt} fill className="object-cover" />
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Image src={images[currentIndex]} alt={`${alt} ${currentIndex + 1}`} fill className="object-cover" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev - 1 + images.length) % images.length); }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev + 1) % images.length); }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
            className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-blue-400' : 'bg-blue-400/40'}`}
          />
        ))}
      </div>
    </>
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
        <div className="bg-background border border-surface/15 rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
          {/* Header image */}
          <div className="relative h-56 md:h-72">
            <ImageCarousel images={project.img} alt={project.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

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
                <h3 className="text-2xl font-bold text-foreground">
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
              <div className="flex items-center gap-2 shrink-0">
                {isLiveDemo(project.titleref) && (
                  <a
                    href={project.titleref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 h-8 px-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
                  >
                    Try it
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </a>
                )}
                {project.github?.map((link, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-surface/5 border border-surface/10 flex items-center justify-center text-foreground dark:text-foreground/60 dark:hover:text-foreground transition-colors"
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
                <h4 className="text-sm font-semibold text-foreground/70 uppercase tracking-wider mb-3">
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
        </div>
      </motion.div>
    </motion.div>
  );
}

const TOP_FILTER_COUNT = 12;

// True when titleref points to a live product worth linking to:
// - Not a code-host URL (GitHub / GitLab)
// - Not the current site itself (quentinvedrenne.com root) — visitors are already there.
//   Subdomains like whisper.quentinvedrenne.com still count as live demos.
function isLiveDemo(url?: string): url is string {
  if (!url) return false;
  if (/(?:github|gitlab)\.com/i.test(url)) return false;
  try {
    const host = new URL(url).hostname.toLowerCase();
    if (host === 'quentinvedrenne.com' || host === 'www.quentinvedrenne.com') return false;
  } catch {
    // Malformed URL — fall through and assume it's a demo
  }
  return true;
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioElement | null>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

  const topSkills = useMemo(() => {
    const counts = new Map<string, number>();
    for (const project of portfolioElements) {
      for (const skill of project.skills.filter(Boolean)) {
        counts.set(skill, (counts.get(skill) ?? 0) + 1);
      }
    }
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, TOP_FILTER_COUNT)
      .map(([skill]) => skill);
  }, []);

  const filteredProjects = useMemo(() => {
    if (!activeSkill) return portfolioElements;
    return portfolioElements.filter((p) => p.skills.includes(activeSkill));
  }, [activeSkill]);

  return (
    <>
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Portfolio
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <div className="flex flex-wrap items-center gap-2 mb-12">
              <FilterPill
                label="All"
                count={portfolioElements.length}
                active={activeSkill === null}
                onClick={() => setActiveSkill(null)}
              />
              {topSkills.map((skill) => {
                const count = portfolioElements.filter((p) => p.skills.includes(skill)).length;
                return (
                  <FilterPill
                    key={skill}
                    label={skill}
                    count={count}
                    active={activeSkill === skill}
                    onClick={() => setActiveSkill((prev) => (prev === skill ? null : skill))}
                  />
                );
              })}
            </div>
          </AnimatedSection>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="h-full cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <GlassCard className="overflow-hidden group h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <CardImageCarousel images={project.img} alt={project.title} intervalMs={3500 + index * 400} />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-25 dark:from-background dark:via-background/20 dark:opacity-70 transition-opacity duration-[1200ms] group-hover:opacity-15 dark:group-hover:opacity-50 pointer-events-none" />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-semibold text-foreground">
                            {project.title}
                          </h3>
                          <div className="flex gap-2">
                            {project.github?.map((link, i) => (
                              <span
                                key={i}
                                className="text-foreground dark:text-foreground/40 dark:group-hover:text-foreground transition-colors duration-300"
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
                            <span className="px-2 py-0.5 text-xs rounded-full text-text-secondary/80">
                              +{project.skills.filter(Boolean).length - 4}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-text-secondary line-clamp-2 flex-1">
                          {project.description}
                        </p>
                        <div className="mt-3 flex items-center justify-between gap-3">
                          <p className="text-xs text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-300">
                            Click to view details
                          </p>
                          {isLiveDemo(project.titleref) && (
                            <a
                              href={project.titleref}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 h-7 px-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
                            >
                              Try it
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M7 17L17 7M9 7h8v8" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-text-secondary/60 mt-8">
              No projects match this filter.
            </p>
          )}
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

function FilterPill({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 ${
        active
          ? 'bg-blue-500/20 border-blue-500/50 text-blue-300'
          : 'bg-surface/5 border-surface/10 text-text-secondary hover:border-surface/20 hover:text-foreground'
      }`}
    >
      <span>{label}</span>
      <span
        className={`text-[10px] tabular-nums transition-colors duration-300 ${
          active ? 'text-blue-300/70' : 'text-text-secondary/50 group-hover:text-text-secondary/70'
        }`}
      >
        {count}
      </span>
    </button>
  );
}
