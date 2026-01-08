
import { Project, Skill, Experience, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'speedracer',
    title: 'SpeedRacer',
    description: 'A full-stack racing application utilizing Django MVT architecture; integrated a PostgreSQL backend to manage complex data model relationships. Features secure user authentication and a responsive interface focused on accessibility.',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800',
    tags: ['Django', 'Python', 'PostgreSQL', 'MVT'],
    link: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'TypeScript', level: 95, category: 'Frontend' },
  { name: 'React/Next.js', level: 92, category: 'Frontend' },
  { name: 'Python/Django', level: 90, category: 'Backend' },
  { name: 'Cloud Arch', level: 88, category: 'Cloud' },
  { name: 'AWS', level: 94, category: 'Cloud' },
  { name: 'PostgreSQL', level: 85, category: 'Backend' },
  { name: 'Flutter/Dart', level: 82, category: 'Frontend' },
  { name: 'EdTech/AST', level: 80, category: 'EdTech' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Google (via C-Suite Coach)',
    role: 'Code Next Curriculum Manager',
    period: 'April 2023 – Present',
    description: [
      'Strategic Planning: Curated the semesterly course catalog for 4 major regions by analyzing student interest metrics and industry relevance.',
      'Curriculum Development: Designed and delivered introductory-to-intermediate courses in Python, JavaScript, and Web Development.',
      'Technical QA: Directed technical audits of curriculum to ensure code accuracy and alignment with software engineering best practices.',
      'Continuous Improvement: Led weekly cross-regional syncs with instructional staff to drive iterative curriculum redesigns.'
    ]
  },
  {
    company: 'Google (via Adecco)',
    role: 'JavaScript Curriculum Developer',
    period: 'Oct 2022 – April 2023',
    description: [
      'Engineering & Migration: Migrated 30% of core design system components from React Native to Flutter, ensuring component parity.',
      'AST Analysis: Engineered JavaScript scripts to parse Abstract Syntax Trees (AST) using ESQuery for automated code feedback.',
      'Product Impact: Managed content for Google Grasshopper (8M+ users) and Google CS First; analyzed user performance data.',
      'Quality Assurance: Developed front-end components and led bi-weekly testing sessions ensuring 99.9% uptime.'
    ]
  },
  {
    company: 'Bloomberg LP',
    role: 'Black in Tech Lab Fellow',
    period: 'June 2022 – July 2022',
    description: [
      'Python Application: Built a Python-based financial analysis tool in an intensive Agile environment.',
      'Data Visualization: Engineered backend logic to analyze budget datasets and implemented data visualization features.',
      'Technical Strategy: Partnered with senior engineers to implement design system best practices and architectural discussions.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: 'New York City College of Technology',
    degree: 'B.Tech, Electrical Engineering',
    date: 'May 2019'
  },
  {
    institution: 'General Assembly',
    degree: 'Software Engineering Certification',
    date: 'June 2021'
  }
];

export const BIO = {
  name: "Prince Miller",
  title: "Curriculum Manager & Software Engineer",
  tagline: "Bridging the gap between technical excellence and educational impact.",
  summary: "Curriculum Manager at Google with a strong foundation in Full-Stack Engineering and Cloud Architecture. AWS Certified Solutions Architect specializing in EdTech, AST analysis, and scalable web solutions.",
  email: "princemiller.dev@gmail.com",
  location: "New York, NY",
  phone: "929-215-3634",
  linkedin: "linkedin.com/in/pmiller5254"
};
