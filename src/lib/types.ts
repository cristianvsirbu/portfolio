export interface Technology {
  name: string;
  icon: string;
  category: 'main' | 'additional';
}

export interface Project {
  name: string;
  description: string;
  icon: string;
  site?: string;
  repo?: string;
}

export interface Job {
  company: string;
  position: string;
  location: string;
  period: string;
  actual?: boolean;
  highlights: {
    title: string;
    content: string;
  }[];
}
