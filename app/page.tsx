import MotionProvider from '@/components/MotionProvider';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <MotionProvider>
    <main className="min-h-screen relative">
      {/* Fixed background — radial blue glow + dot grid, both theme-aware via CSS vars */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-page-glow" />
        <div className="absolute inset-0 bg-dot-grid" />
      </div>

      <Navbar />
      <Hero />
      <Portfolio />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
    </MotionProvider>
  );
}
