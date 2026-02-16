import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Fixed background with darker blue/sky gradient orbs + dot grid */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: [
              'radial-gradient(ellipse 80% 60% at 10% 20%, rgba(37,99,235,0.12), transparent)',
              'radial-gradient(ellipse 60% 80% at 90% 60%, rgba(2,132,199,0.10), transparent)',
              'radial-gradient(ellipse 70% 50% at 40% 90%, rgba(37,99,235,0.06), transparent)',
            ].join(', '),
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <Navbar />
      <Hero />
      <Portfolio />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
