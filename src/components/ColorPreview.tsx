'use client';

import Image from 'next/image';

const colorSchemes = [
  {
    name: '1. Teal / Cyan',
    gradient: 'from-teal-500 to-cyan-500',
    accent: 'border-teal-500/20',
    bg: [
      'radial-gradient(ellipse 80% 60% at 10% 20%, rgba(20,184,166,0.15), transparent)',
      'radial-gradient(ellipse 60% 80% at 90% 60%, rgba(6,182,212,0.12), transparent)',
    ],
  },
  {
    name: '2. Amber / Orange',
    gradient: 'from-amber-500 to-red-500',
    accent: 'border-amber-500/20',
    bg: [
      'radial-gradient(ellipse 80% 60% at 10% 20%, rgba(245,158,11,0.15), transparent)',
      'radial-gradient(ellipse 60% 80% at 90% 60%, rgba(239,68,68,0.12), transparent)',
    ],
  },
  {
    name: '3. Emerald / Lime',
    gradient: 'from-emerald-500 to-lime-500',
    accent: 'border-emerald-500/20',
    bg: [
      'radial-gradient(ellipse 80% 60% at 10% 20%, rgba(16,185,129,0.15), transparent)',
      'radial-gradient(ellipse 60% 80% at 90% 60%, rgba(132,204,22,0.12), transparent)',
    ],
  },
  {
    name: '4. Monochrome White',
    gradient: 'from-white/80 to-white/40',
    accent: 'border-white/15',
    bg: [
      'radial-gradient(ellipse 80% 60% at 10% 20%, rgba(255,255,255,0.06), transparent)',
      'radial-gradient(ellipse 60% 80% at 90% 60%, rgba(255,255,255,0.04), transparent)',
    ],
  },
  {
    name: '5. Blue / Sky',
    gradient: 'from-blue-500 to-sky-400',
    accent: 'border-blue-500/20',
    bg: [
      'radial-gradient(ellipse 80% 60% at 10% 20%, rgba(59,130,246,0.15), transparent)',
      'radial-gradient(ellipse 60% 80% at 90% 60%, rgba(56,189,248,0.12), transparent)',
    ],
  },
];

export default function ColorPreview() {
  return (
    <div>
      {colorSchemes.map((scheme) => (
        <section key={scheme.name} className="min-h-screen flex items-center py-32 px-6 relative">
          {/* Background for this section */}
          <div
            className="absolute inset-0 -z-10"
            style={{ background: scheme.bg.join(', ') }}
          />

          <div className="max-w-6xl mx-auto w-full">
            {/* Label */}
            <p className="text-xs text-text-secondary/50 uppercase tracking-widest mb-10 font-mono">
              {scheme.name}
            </p>

            <div className="grid md:grid-cols-[1fr_280px] gap-16 md:gap-20 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                  Quentin
                  <br />
                  Vedrenne
                </h1>

                <div className="mt-6 flex items-center gap-4">
                  <div className={`h-px w-12 bg-gradient-to-r ${scheme.gradient}`} />
                  <p className="text-lg text-text-secondary/80">
                    Software Engineer - Project Manager
                  </p>
                </div>

                <p className="mt-8 text-text-secondary text-base md:text-lg leading-relaxed max-w-xl">
                  I&apos;m a dynamic Software Engineer with a passion for solving
                  complex problems and fostering collaborative environments. With a
                  solid background in full-stack development, cloud technologies,
                  and project management, I thrive in settings where I can
                  contribute to meaningful solutions and continuous learning.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {['Rust', 'AWS', 'React', 'TypeScript', 'Kubernetes'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs text-text-secondary/70 border border-white/8 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-white/10">
                    <Image
                      src="/pp.jpeg"
                      alt="Quentin Vedrenne"
                      width={256}
                      height={256}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className={`absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl border ${scheme.accent} -z-10`} />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
