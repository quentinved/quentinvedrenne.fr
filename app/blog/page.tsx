import Link from 'next/link';
import type { Metadata } from 'next';
import { posts } from '@/data/posts';

export const metadata: Metadata = {
  title: 'Writing — Quentin Vedrenne',
  description:
    'Engineering write-ups by Quentin Vedrenne — Rust, cloud architecture, and open-source.',
};

const dateFmt = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

export default function BlogIndex() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          Writing
        </h1>
        <p className="mt-4 text-text-secondary text-base md:text-lg leading-relaxed max-w-xl">
          Notes on systems I&apos;ve built — mostly Rust, cloud, and the trade-offs
          behind them.
        </p>
      </header>

      <ul className="space-y-10">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block border-b border-surface/5 pb-10"
            >
              <div className="flex items-center gap-3 text-xs text-text-secondary/60 mb-2">
                <time dateTime={post.date}>{dateFmt.format(new Date(post.date))}</time>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="text-2xl font-semibold text-foreground group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 text-text-secondary leading-relaxed">
                {post.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs rounded-full bg-surface/5 border border-surface/10 text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
