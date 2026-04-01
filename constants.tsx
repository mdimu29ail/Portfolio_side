import {
  Project,
  Skill,
  Experience,
  Service,
  Testimonial,
  FAQ,
  ProcessStep,
  BlogPost,
  Stat,
} from './types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Pet Adoption', // Refined Title
    subtitle: 'Pet Adoption & Rescue Ecosystem',
    description:
      'A sophisticated MERN-based bridge connecting rescue animals with forever homes. Engineered with real-time adoption status tracking, secure multi-role access control, and a fluid interface for seamless user interactions.',
    image: 'https://i.ibb.co.com/bMGT9QtZ/Pet-adoption.jpg',
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'Supabase',
      'Stripe',
      'Tailwind',
      'JWT',
      'Framer Motion',
    ],
    link: 'https://adopt-pet-client.vercel.app',
    github: 'https://github.com/mdimu29ail/adopt_pet_client',
    githubServer: 'https://github.com/mdimu29ail/adopt_pet_server',
  },

  {
    id: '02',
    title: 'The Spice Slice',
    subtitle: 'Modern Restaurant & Food Ordering Platform',
    description:
      'A dynamic full-stack restaurant platform enabling users to explore menus, place orders, and track deliveries in real time. Built with secure authentication, role-based admin control, and a responsive UI for smooth customer experience.',
    image: 'https://i.ibb.co.com/Y45JytQh/Restaurean.jpg',
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'Supabase',
      'Tailwind',
      'JWT',
      'Stripe',
    ],
    link: 'https://the-spice-slice-clicent.vercel.app',
    github: 'https://github.com/mdimu29ail/The-Spice-Slice-clicent',
    githubServer: 'https://github.com/mdimu29ail/The-Spice-Slice-server',
  },
  {
    id: '03',
    title: 'MVP Learning',
    subtitle: 'Enterprise Learning Infrastructure',
    description:
      'Developed a high-performance educational platform designed to streamline knowledge transfer. Features include personalized progress dashboards, interactive modules, and a scalable backend optimized for rapid content delivery.',
    image: 'https://i.ibb.co.com/PvWcSh9T/Learning.jpg',
    tech: [
      'Next.js',
      'Node.js',
      'Express.js',
      'Supabase',
      'Tailwind',
      'JWT',
      'Framer Motion',
    ],
    link: 'https://learning-marktplace.vercel.app',
    github: 'https://github.com/mdimu29ail/learning_marktplace',
  },
  // {
  //   id: '04',
  //   title: 'SwiftShip',
  //   subtitle: 'Real-time Logistics Engine',
  //   description:
  //     'An end-to-end logistics solution focused on sub-second data synchronization. Implemented real-time package monitoring, optimized route management, and an enterprise-grade control panel for operational efficiency.',
  //   image:
  //     'https://i.ibb.co.com/PscWzg4f/Gemini-Generated-Image-y5en9my5en9my5en.png',
  //   tech: [
  //     'React',
  //     'Node.js',
  //     'MongoDB',
  //     'Socket.io',
  //     'Tailwind',
  //     'JWT',
  //     'Framer Motion',
  //   ],
  //   link: 'https://your-parcel-link.com',
  //   github: 'https://github.com/your-parcel-repo',
  // },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp1',
    company: 'FinTech Solutions',
    role: 'Lead Frontend Architect',
    period: '2023 - Present',
    description:
      'Spearheading the transition to micro-frontends and optimizing Core Web Vitals for high-traffic financial dashboards, focusing on performance and accessibility.',
    highlights: [
      'Reduced initial bundle load time by 35%',
      'Architected a modular atomic design system for cross-team use',
    ],
  },
  {
    id: 'exp2',
    company: 'Creative Digital Lab',
    role: 'Full Stack Developer',
    period: '2021 - 2023',
    description:
      'Engineered robust MERN stack applications for enterprise clients, focusing on scalable business logic and real-time data synchronization.',
    highlights: [
      'Successfully deployed 15+ production-ready web applications',
      'Integrated AWS cloud infrastructure for secure data storage',
    ],
  },
];

export const SKILLS: Skill[] = [
  {
    category: 'Engineering',
    items: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'GSAP Animations',
    ],
  },
  {
    category: 'Infrastructure',
    items: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'Supabase',
      'Firebase Auth',
      'RESTful APIs',
    ],
  },
  {
    category: 'Strategy & Tools',
    items: [
      'Git/GitHub',
      'CI/CD Pipelines',
      'Vercel Deployment',
      'System Design',
      'Unit Testing',
      'Linux/Bash',
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Enterprise Architecture',
    description:
      'Designing and deploying high-availability MERN ecosystems optimized for global scale, performance, and bulletproof security.',
    icon: 'code',
  },
  {
    id: 's2',
    title: 'Kinetic UI/UX Design',
    description:
      'Crafting immersive digital narratives through high-fidelity interfaces and performance-driven motion design that increases user engagement.',
    icon: 'layout',
  },
  {
    id: 's3',
    title: 'Backend Scalability',
    description:
      'Engineering robust API infrastructures and database logic capable of handling millions of concurrent operations with zero downtime.',
    icon: 'database',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Johnson',
    role: 'CTO at FinTechly',
    content:
      "Imamul's architectural precision is unparalleled. He transformed our complex requirements into a fluid, sub-second latency platform that our users love.",
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 't2',
    name: 'Marcus Chen',
    role: 'Lead Product Designer',
    content:
      "The level of polish Imamul brings to kinetic interactions is world-class. He doesn't just write code; he crafts digital experiences with extreme attention to detail.",
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'p1',
    title: 'Intelligence',
    description:
      'Analyzing technical constraints and user behavior patterns to build a solid foundation.',
    icon: 'search',
  },
  {
    id: 'p2',
    title: 'Blueprint',
    description:
      'Architecting system logic, database schemas, and high-performance workflows.',
    icon: 'pen-tool',
  },
  {
    id: 'p3',
    title: 'Execution',
    description:
      'Iterative development focusing on clean code, type safety, and atomic components.',
    icon: 'code',
  },
  {
    id: 'p4',
    title: 'Deployment',
    description:
      'Rigorous optimization, stress testing, and seamless global cloud distribution.',
    icon: 'check-circle',
  },
];

export const STATS: Stat[] = [
  { id: 'st1', label: 'Global Launches', value: '25', suffix: '+' },
  { id: 'st2', label: 'Uptime Reliability', value: '99', suffix: '%' },
  { id: 'st3', label: 'Code Commits', value: '1200', suffix: '+' }, // More meaningful than "cycles"
  { id: 'st4', label: 'Lighthouse Score', value: '100', suffix: '' },
];

export const FAQS: FAQ[] = [
  {
    id: 'f1',
    question: 'Technical stack preference?',
    answer:
      'I specialize in the TypeScript, Next.js, and Node.js ecosystems. I prioritize type-safety, scalability, and sub-second performance for high-load environments.',
  },
  {
    id: 'f2',
    question: 'What is your post-launch support philosophy?',
    answer:
      'Deployment is just the beginning. I provide proactive maintenance, performance monitoring, and iterative tuning to ensure the system remains future-proof.',
  },
  {
    id: 'f3',
    question: 'How do you handle remote collaboration?',
    answer:
      'I work with a remote-first mindset, utilizing Agile methodologies, transparent communication via Slack/Jira, and rapid delivery cycles.',
  },
];
