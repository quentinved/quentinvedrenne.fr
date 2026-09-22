export interface TimelineDetail {
  id: number;
  title: string;
  task?: string[];
}

export interface TimelineElement {
  id: number;
  title: string;
  type: 'experience' | 'education';
  company_name: string;
  location: string;
  date: string;
  skills: string[];
  detail: TimelineDetail[];
  image?: string;
}

export interface SkillElement {
  id: number;
  name: string;
  src: string;
  category: 'language' | 'database' | 'cloud' | 'devops';
  invert?: boolean;
}

export interface PortfolioDetail {
  id: number;
  title: string;
  task?: string[];
}

export interface PortfolioElement {
  id: number;
  title: string;
  type: 'School' | 'Personal' | 'Professional';
  skills: string[];
  description: string;
  detail: PortfolioDetail[];
  img: string[];
  github?: string[];
  titleref?: string;
  // Set when the project is finished but not yet publicly reachable. The text is the
  // reason, shown on hover; the card renders a locked "Soon" badge instead of "Try it".
  comingSoon?: string;
  // Where the wait can be followed in public (an open PR, a store listing...).
  // Given one, the "Soon" badge becomes a link to it.
  comingSoonUrl?: string;
  comingSoonUrlLabel?: string;
  // Set to keep the project in the file but out of the site entirely (no card, no
  // skill filter, no counts).
  hidden?: boolean;
}
