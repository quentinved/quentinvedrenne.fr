import { SkillElement } from './types';

const skillsElements: SkillElement[] = [
  // Languages
  { id: 1, name: 'Rust', src: '/rust.png', category: 'language', invert: true },
  { id: 2, name: 'Go', src: '/go.png', category: 'language' },
  { id: 3, name: 'TypeScript', src: '/ts.png', category: 'language' },
  { id: 4, name: 'C', src: '/c.png', category: 'language' },
  { id: 5, name: 'C++', src: '/cpp.png', category: 'language' },
  { id: 19, name: 'Python', src: '/python.svg', category: 'language' },
  // Frameworks & runtimes (kept under 'language' to match existing schema)
  { id: 6, name: 'React', src: '/react.png', category: 'language' },
  { id: 7, name: 'Next.js', src: '/next.png', category: 'language', invert: true },
  { id: 8, name: 'Node.js', src: '/node.png', category: 'language' },
  { id: 9, name: 'Tailwind CSS', src: '/tailwind.svg', category: 'language' },
  // Databases
  { id: 10, name: 'PostgreSQL', src: '/postgres.svg', category: 'database' },
  { id: 11, name: 'DynamoDB', src: '/dynamodb.svg', category: 'database' },
  // Cloud
  { id: 12, name: 'AWS', src: '/aws.png', category: 'cloud' },
  { id: 13, name: 'GCP', src: '/gcp.png', category: 'cloud' },
  // DevOps
  { id: 14, name: 'Kubernetes', src: '/kube.png', category: 'devops' },
  { id: 15, name: 'Docker', src: '/dock.png', category: 'devops' },
  { id: 16, name: 'Terraform', src: '/terraform.svg', category: 'devops' },
  { id: 17, name: 'GitHub Actions', src: '/github.png', category: 'devops', invert: true },
  { id: 18, name: 'Linux', src: '/linux.svg', category: 'devops' },
];

export default skillsElements;
