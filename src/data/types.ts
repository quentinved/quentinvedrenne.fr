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
  type: 'School' | 'Personal';
  skills: string[];
  description: string;
  detail: PortfolioDetail[];
  img: string[];
  github?: string[];
  titleref?: string;
}
