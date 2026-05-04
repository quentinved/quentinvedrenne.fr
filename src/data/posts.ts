export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: 'whisper-architecture',
    title: 'Why I built Whisper',
    description:
      'I wanted to learn four things: the Rust web stack, building a real CLI in Rust, publishing a Rust binary to npm, and how open source actually works end-to-end. Whisper became the project that touched all four. Here is the architecture, the CLI choices, the npm publish pipeline, and the OSS scaffolding.',
    date: '2026-04-18',
    readingTime: '8 min read',
    tags: ['Rust', 'Axum', 'CLI', 'npm', 'Open Source'],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
