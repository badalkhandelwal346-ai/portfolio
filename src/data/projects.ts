export type ProjectTier = 'primary' | 'secondary' | 'tertiary';

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tier: ProjectTier;
  technologies?: string[];
  imageSrc?: string;
  liveUrl?: string;
  caseStudyUrl?: string; // For future implementation
}

export const projectsData: Project[] = [
  {
    id: 'policylens',
    number: '01',
    title: 'PolicyLens AI',
    category: 'PRODUCT / AI',
    description: 'Turning fragmented government policies into information people can actually use.',
    tier: 'primary',
    caseStudyUrl: '/work/policylens',
    technologies: ['Next.js', 'React', 'TypeScript', 'Google Gemini'],
  },
  {
    id: 'reelsinsight',
    number: '02',
    title: 'Reels Insight AI',
    category: 'DATA / PRODUCT',
    description: 'Using data to understand when content is most likely to be seen.',
    tier: 'secondary',
    technologies: ['Python', 'Pandas', 'React'],
  },
  {
    id: 'dormcare',
    number: '03',
    title: 'DormCare',
    category: 'PRODUCT / FRONTEND',
    description: 'Helping students book cleaning and report maintenance without the usual hassle.',
    tier: 'secondary',
    liveUrl: 'https://dorm-care2.vercel.app/',
    caseStudyUrl: '/work/dormcare',
    technologies: ['React'],
  },
  {
    id: 'gympulse',
    number: '04',
    title: 'GymPulse',
    category: 'PRODUCT',
    description: 'Product concept exploring fitness and user experience.',
    tier: 'tertiary',
  },
  {
    id: 'trademill',
    number: '05',
    title: 'TradeMill',
    category: 'PRODUCT',
    description: 'Product concept exploring financial tools and experience.',
    tier: 'tertiary',
  }
];
