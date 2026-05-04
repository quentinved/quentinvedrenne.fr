import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPost, posts } from '@/data/posts';
import WhisperArchitecture from '@/content/posts/whisper-architecture';

const renderers: Record<string, () => JSX.Element> = {
  'whisper-architecture': WhisperArchitecture,
};

const dateFmt = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Quentin Vedrenne`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  const Renderer = renderers[params.slug];
  if (!post || !Renderer) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-xs text-text-secondary/60 hover:text-foreground transition-colors mb-10"
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        All posts
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-3 text-xs text-text-secondary/60 mb-3">
          <time dateTime={post.date}>{dateFmt.format(new Date(post.date))}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
          {post.title}
        </h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs rounded-full bg-surface/5 border border-surface/10 text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose-post">
        <Renderer />
      </div>
    </article>
  );
}
