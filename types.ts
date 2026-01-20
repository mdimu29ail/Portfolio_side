
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveLink: string;
  clientRepo: string;
  serverRepo: string;
  keyContributions: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  suffix: string;
}
