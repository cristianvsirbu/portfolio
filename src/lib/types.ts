export interface Technology {
  name: string;
  icon: string;
  category: 'main' | 'additional';
}

export interface Project {
  name: string;
  description: string;
  icon: string;
  isEmpty?: boolean;
  site?: string;
  repo?: string;
}

export interface Job {
  company: string;
  position: string;
  location: string;
  period: string;
  isActual?: boolean;
  highlights: {
    title: string;
    content: string;
  }[];
}

export interface Section {
  id: string;
  name: string;
  component: React.FC;
  isSpecial?: boolean;
}

export type ThemeColor = {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  id: string;
};
