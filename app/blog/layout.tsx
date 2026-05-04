import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen relative">
      {/* Same fixed background as the home page */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-page-glow" />
        <div className="absolute inset-0 bg-dot-grid" />
      </div>

      {/* Simple top bar */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-surface/8">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-foreground transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Quentin Vedrenne
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {children}
    </main>
  );
}
