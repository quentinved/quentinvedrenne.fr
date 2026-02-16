'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import GlassCard from '@/components/GlassCard';
import skillsElements from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Skills
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillsElements.map((skill, index) => (
            <AnimatedSection key={skill.id} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(37,99,235,0.15)' }}
                transition={{ duration: 0.2 }}
              >
                <GlassCard className="p-6 flex flex-col items-center gap-4 cursor-default group">
                  <div className="relative w-16 h-16">
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      fill
                      className={`object-contain ${skill.invert ? 'invert' : ''}`}
                    />
                  </div>
                  <p className="text-sm text-text-secondary group-hover:text-white transition-colors duration-200">
                    {skill.name}
                  </p>
                </GlassCard>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
