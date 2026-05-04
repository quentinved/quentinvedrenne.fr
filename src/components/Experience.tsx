'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import SkillPill from '@/components/SkillPill';
import timelineElements from '@/data/timeline';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Experience
          </h2>
        </AnimatedSection>

        <div className="space-y-4">
          {timelineElements.map((item, index) => {
            const isExpanded = expandedId === item.id;

            return (
              <AnimatedSection key={item.id} delay={index * 0.05}>
                <div
                  className="group border border-surface/8 rounded-xl hover:border-surface/15 transition-colors duration-300 cursor-pointer"
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                >
                  {/* Header row */}
                  <div className="flex items-start gap-4 md:gap-6 p-5 md:p-6">
                    {/* Company image */}
                    {item.image && (
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-surface/10 shrink-0 mt-0.5 bg-white p-1.5">
                        <Image
                          src={item.image}
                          alt={item.company_name}
                          width={48}
                          height={48}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    )}

                    {/* Main content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-base md:text-lg font-semibold text-foreground leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-sm text-text-secondary mt-0.5">
                            {item.company_name}
                            <span className="text-text-secondary/40 mx-2">/</span>
                            <span className="text-text-secondary/60">{item.location}</span>
                          </p>
                          <p className="text-xs text-text-secondary/40 mt-1">
                            {item.date}
                          </p>
                        </div>

                        {/* Type badge + expand icon */}
                        <div className="flex items-center gap-3 shrink-0">
                          <span className={`hidden md:inline-block px-2.5 py-0.5 text-xs rounded-full border ${
                            item.type === 'experience'
                              ? 'text-blue-400/80 border-blue-400/20'
                              : 'text-sky-400/80 border-sky-400/20'
                          }`}>
                            {item.type === 'experience' ? 'Work' : 'Education'}
                          </span>
                          <motion.svg
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-text-secondary/40"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </motion.svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-6 pt-0">
                          <div className="border-t border-surface/5 pt-5">
                            <div className="flex flex-wrap gap-2 mb-5">
                              {item.skills.map((skill, i) => (
                                <SkillPill key={i} label={skill} />
                              ))}
                            </div>

                            {item.detail.length > 0 && (
                              <ul className="space-y-3">
                                {item.detail.map((d) => (
                                  <li key={d.id}>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                      <span className="text-blue-400 mr-2">&#8250;</span>
                                      {d.title}
                                    </p>
                                    {d.task && d.task.length > 0 && (
                                      <ul className="ml-5 mt-1.5 space-y-1.5">
                                        {d.task.map((t, ti) => (
                                          <li key={ti} className="text-sm text-text-secondary/70 leading-relaxed">
                                            - {t}
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
