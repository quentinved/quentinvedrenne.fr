'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import GlassCard from '@/components/GlassCard';
import skillsElements from '@/data/skills';
import { SkillElement } from '@/data/types';

const CATEGORY_LABELS: Record<SkillElement['category'], string> = {
  language: 'Languages & Frameworks',
  database: 'Databases',
  cloud: 'Cloud',
  devops: 'DevOps',
};

const CATEGORY_ORDER: SkillElement['category'][] = ['language', 'database', 'cloud', 'devops'];

export default function Skills() {
  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    label: CATEGORY_LABELS[category],
    items: skillsElements.filter((s) => s.category === category),
  })).filter((g) => g.items.length > 0);

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Skills
          </h2>
        </AnimatedSection>

        <div className="space-y-14">
          {grouped.map((group, gIdx) => (
            <AnimatedSection key={group.category} delay={gIdx * 0.1}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">
                    {group.label}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-surface/10 to-transparent" />
                  <span className="text-xs text-text-secondary/40 tabular-nums">
                    {group.items.length}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                  {group.items.map((skill, idx) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.35, delay: idx * 0.04, ease: 'easeOut' }}
                      whileHover={{
                        scale: 1.04,
                        boxShadow: '0 0 30px rgba(37,99,235,0.15)',
                      }}
                    >
                      <GlassCard className="px-3 py-4 md:p-5 flex flex-col items-center gap-3 cursor-default group">
                        <div className="relative w-12 h-12 md:w-14 md:h-14">
                          <Image
                            src={skill.src}
                            alt={skill.name}
                            fill
                            className={`object-contain ${skill.invert ? 'dark:invert' : ''}`}
                          />
                        </div>
                        <p className="text-xs md:text-sm text-text-secondary group-hover:text-foreground transition-colors duration-200 text-center">
                          {skill.name}
                        </p>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
