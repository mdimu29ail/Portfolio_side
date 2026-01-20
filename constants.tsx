
import { Project, Skill, Experience, Service, Testimonial, FAQ, ProcessStep, BlogPost, Stat } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'pet-adoption',
    title: 'Animalia Protocol',
    description: 'A high-performance rescue nexus leveraging real-time synchronization and intuitive matching algorithms to streamline pet adoptions globally.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1200',
    tech: ['React', 'Firebase', 'Node.js', 'Tailwind CSS', 'Redux'],
    liveLink: '#',
    clientRepo: '#',
    serverRepo: '#',
    keyContributions: [
      'Architected real-time database schema.',
      'Optimized image delivery for low-bandwidth environments.',
      'Engineered multi-tier auth system.'
    ]
  },
  {
    id: 'spice-slice',
    title: 'Gastronomia V3',
    description: 'Elevating culinary commerce through a frictionless digital interface, featuring rapid-order processing and immersive visual menus.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Framer'],
    liveLink: '#',
    clientRepo: '#',
    serverRepo: '#',
    keyContributions: [
      'Integrated Stripe Terminal for unified payments.',
      'Reduced checkout friction by 40%.',
      'Developed server-side rendered dynamic menus.'
    ]
  },
  {
    id: 'hobby-group',
    title: 'Nexus Intelligence',
    description: 'A collective intelligence platform for hobbyists, enabling decentralized group management and secure activity coordination.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200',
    tech: ['MERN Stack', 'WebSockets', 'AWS S3', 'Zustand'],
    liveLink: '#',
    clientRepo: '#',
    serverRepo: '#',
    keyContributions: [
      'Implemented WebSockets for live group chat.',
      'Designed responsive dashboard architecture.',
      'Built custom notification engine.'
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp1',
    company: 'FinTech Solutions',
    role: 'Lead Frontend Architect',
    period: '2023 - Present',
    description: 'Spearheading the transition to micro-frontends and optimizing Core Web Vitals for high-traffic financial dashboards.',
    highlights: ['Reduced bundle size by 35%', 'Implemented atomic design system']
  },
  {
    id: 'exp2',
    company: 'Creative Digital Lab',
    role: 'Full Stack Developer',
    period: '2021 - 2023',
    description: 'Engineered robust MERN stack applications for enterprise clients, focusing on scalable logic and real-time data flow.',
    highlights: ['Built 15+ production apps', 'Integrated AWS cloud infrastructure']
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Engineering',
    items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Redux', 'Zustand']
  },
  {
    category: 'Infrastucture',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Firebase']
  },
  {
    category: 'Strategy',
    items: ['Git', 'CI/CD', 'Vercel', 'Figma', 'Linux', 'Unit Testing', 'System Design']
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Enterprise Architecture',
    description: 'Designing and deploying high-availability MERN ecosystems optimized for global scale and bulletproof security.',
    icon: 'code'
  },
  {
    id: 's2',
    title: 'Kinetic UI/UX Design',
    description: 'Crafting immersive digital narratives through high-fidelity interfaces and performance-driven motion design.',
    icon: 'layout'
  },
  {
    id: 's3',
    title: 'Backend Scalability',
    description: 'Engineering robust API infrastructures and database logic capable of handling millions of concurrent operations.',
    icon: 'database'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Johnson',
    role: 'CTO at FinTechly',
    content: "Imamul's architectural precision is unparalleled. He transformed our complex requirements into a fluid, sub-second latency platform.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't2',
    name: 'Marcus Chen',
    role: 'Lead Designer at EcoStream',
    content: "The level of polish Imamul brings to kinetic interactions is world-class. He doesn't just code; he creates digital experiences.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&?q=80&w=200'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { id: 'p1', title: 'Intelligence', description: 'In-depth analysis of technical constraints and user behavior patterns.', icon: 'search' },
  { id: 'p2', title: 'Blueprint', description: 'Architecting system logic, database schemas, and low-latency workflows.', icon: 'pen-tool' },
  { id: 'p3', title: 'Execution', description: 'Iterative development cycles focusing on clean code and atomic components.', icon: 'code' },
  { id: 'p4', title: 'Deployment', description: 'Rigorous optimization, stress testing, and global cloud distribution.', icon: 'check-circle' }
];

export const BLOG_POSTS: BlogPost[] = [
  { id: 'b1', title: 'The Future of Kinetic Typography', date: 'Jan 2025', category: 'Design', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800' },
  { id: 'b2', title: 'Scaling MERN for Enterprise', date: 'Dec 2024', category: 'Engineering', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' },
  { id: 'b3', title: 'Atomic Design in React v19', date: 'Nov 2024', category: 'DevOps', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800' }
];

export const STATS: Stat[] = [
  { id: 'st1', label: 'Global Launches', value: '25', suffix: '+' },
  { id: 'st2', label: 'Uptime Reliability', value: '99', suffix: '%' },
  { id: 'st3', label: 'Code Cycles', value: '800', suffix: '' },
  { id: 'st4', label: 'Performance Rank', value: '1', suffix: 'st' }
];

export const FAQS: FAQ[] = [
  {
    id: 'f1',
    question: 'Technical stack preference?',
    answer: 'I specialize in TypeScript, Next.js, and Node.js ecosystems, emphasizing type-safety and sub-second performance for high-load environments.'
  },
  {
    id: 'f2',
    question: 'Post-launch philosophy?',
    answer: 'Deployment is just the beginning. I provide proactive maintenance and iterative performance tuning for all critical systems.'
  },
  {
    id: 'f3',
    question: 'Collaboration process?',
    answer: 'I work with a remote-first mindset, utilizing agile methodologies to ensure transparent communication and rapid delivery cycles.'
  }
];
