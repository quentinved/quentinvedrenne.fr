'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import GlassCard from '@/components/GlassCard';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            About Me
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <GlassCard className="p-8 md:p-12">
            <div className="grid md:grid-cols-[250px_1fr] gap-10 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-52 h-52 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.2)]">
                    <Image
                      src="/pp.jpeg"
                      alt="Quentin Vedrenne"
                      width={208}
                      height={208}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Hi, my name is Quentin Vedrenne! I&apos;m a dynamic Software Engineer
                  with a passion for solving complex problems and fostering collaborative
                  environments. My journey in tech is driven by a relentless pursuit of
                  innovation, excellence, and impactful teamwork. With a solid background
                  in full-stack development, cloud technologies, and project management,
                  I thrive in settings where I can contribute to meaningful solutions and
                  continuous learning.
                </p>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
