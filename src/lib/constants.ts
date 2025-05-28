import Home from '@/components/Home';
import { getCurrentYear } from './utils';
import { Job, Project, Section, Technology } from '@/lib/types';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/cristianvsirbu/';
export const GITHUB_URL = 'https://github.com/cristianvsirbu';
export const PROFILE_PIC = '/images/profile.png';
export const EMAIL = 'cristiansirbudev@gmail.com';
export const LOCATION = 'Bucharest, Romania';
export const PROGRAMMING_YEARS = getCurrentYear() - 2018;
export const PROFESSIONAL_YEARS = getCurrentYear() - 2021;

export const TECHNOLOGIES: Technology[] = [
  // Main technologies
  {
    name: 'TypeScript',
    icon: '/icons/technologies/main/ts.png',
    category: 'main',
  },
  {
    name: 'React',
    icon: '/icons/technologies/main/react.png',
    category: 'main',
  },
  {
    name: 'Next.js',
    icon: '/icons/technologies/main/next.png',
    category: 'main',
  },
  {
    name: 'Tailwind CSS',
    icon: '/icons/technologies/main/tailwind.png',
    category: 'main',
  },
  { name: 'Git', icon: '/icons/technologies/main/git.png', category: 'main' },

  // Additional technologies
  {
    name: 'Node.js',
    icon: '/icons/technologies/additional/node.png',
    category: 'additional',
  },
  {
    name: 'Redux',
    icon: '/icons/technologies/additional/redux.png',
    category: 'additional',
  },
  {
    name: 'Vite',
    icon: '/icons/technologies/additional/vite.png',
    category: 'additional',
  },
  {
    name: 'Express',
    icon: '/icons/technologies/additional/express.png',
    category: 'additional',
  },
  {
    name: 'Sass',
    icon: '/icons/technologies/additional/sass.png',
    category: 'additional',
  },
  {
    name: 'Three.js',
    icon: '/icons/technologies/additional/threejs.png',
    category: 'additional',
  },
  {
    name: 'GitHub',
    icon: '/icons/technologies/additional/github.png',
    category: 'additional',
  },
  {
    name: 'npm',
    icon: '/icons/technologies/additional/npm.png',
    category: 'additional',
  },
  {
    name: 'Yarn',
    icon: '/icons/technologies/additional/yarn.png',
    category: 'additional',
  },
  {
    name: 'Figma',
    icon: '/icons/technologies/additional/figma.png',
    category: 'additional',
  },
  {
    name: 'Adobe Illustrator',
    icon: '/icons/technologies/additional/illustrator.png',
    category: 'additional',
  },
  {
    name: 'Adobe Photoshop',
    icon: '/icons/technologies/additional/photoshop.png',
    category: 'additional',
  },
  {
    name: 'ClickUp',
    icon: '/icons/technologies/additional/clickup.png',
    category: 'additional',
  },
  {
    name: 'Linear',
    icon: '/icons/technologies/additional/linear.png',
    category: 'additional',
  },
  {
    name: 'Slack',
    icon: '/icons/technologies/additional/slack.png',
    category: 'additional',
  },
  {
    name: 'Supabase',
    icon: '/icons/technologies/additional/supabase.png',
    category: 'additional',
  },
  {
    name: 'React Flow',
    icon: '/icons/technologies/additional/react_flow.png',
    category: 'additional',
  },
  {
    name: 'Sentry',
    icon: '/icons/technologies/additional/sentry.png',
    category: 'additional',
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'Project Mars',
    description:
      'Project Mars is a frontend app for exploring the Martian landscape. It uses React, React Router, Recharts, and Three.js for a responsive, visual experience, with Vite for fast builds. Data is scraped from NASA via Puppeteer in a Node.js + Express.js backend. A Vercel serverless branch also delivers this data through a serverless function. Styled with Tailwind CSS, it features custom assets from Figma/Illustrator and optimized 3D models via Draco3D.',
    icon: '/icons/projects/mars.png',
    site: 'https://project-mars-serverless.vercel.app',
    repo: 'https://github.com/cristianvsirbu/project-mars',
  },
  {
    name: 'Bluestar Bank',
    description:
      'Designed and developed Bluestar Bank, a fully  responsive, single-page banking application. Showcasing expertise in  HTML, CSS, Tailwind CSS, JavaScript, React, and Vite, this app features  an intuitive UI, smooth animations, and real-time exchange rate updates, delivering a seamless banking experience.',
    icon: '/icons/projects/bluestar.png',
    site: 'https://bluestar-bank.netlify.app',
    repo: 'https://github.com/cristianvsirbu/bank-app',
  },
  {
    name: 'Password Generator',
    description:
      'A straightforward password generator that uses JavaScript, HTML, and CSS. Users can create strong, adaptable passwords with this tool by selecting their preferred length and character set. Combining a variety of capital, lowercase, numeric, and special characters guarantees increased security. The design is accessible on all devices due to its responsiveness and ease of use',
    icon: '/icons/projects/passgen.png',
    site: 'https://passgen-cs.netlify.app',
    repo: 'https://github.com/cristianvsirbu/password-generator',
  },
  {
    name: 'More to come...',
    isEmpty: true,
    description: 'Coming soon-ish. Probably epic.',
    icon: '/icons/projects/empty_project.png',
  },
];

export const JOBS: Job[] = [
  {
    company: 'getitAI',
    position: 'Frontend Developer',
    location: 'San Francisco, California',
    period: 'August 2023 - Present',
    isActual: true,
    highlights: [
      {
        title: 'AI Interface Development & Performance Optimization',
        content:
          'Led frontend development for an AI sales platform, building responsive interfaces with DaisyUI/Tailwind and implementing real-time features using Supabase. Optimized performance through Fetch API integration, lazy loading, and render optimization while creating dynamic animation systems for user interactions.',
      },
      {
        title: 'Complex Feature Implementation',
        content:
          'Designed and developed core components including a scalable notification system with real-time syncing and a Zustand powered Flow Generator with advanced features like undo/redo, drag-and-drop nodes, and MDX markdown editing. Collaborated cross-functionally to transform Figma designs into production-ready features using Git based workflows.',
      },
    ],
  },
  {
    company: 'Freelance',
    position: 'Frontend Developer',
    location: 'European Economic Area',
    period: 'March 2021 - August 2023',
    highlights: [
      {
        title: 'Frontend Development & Technical Expertise',
        content:
          'I’ve built responsive web applications using React, Tailwind, and modern JavaScript. My experience spans from creating interactive SPAs with real-time data to optimizing WordPress sites and refactoring legacy jQuery code, always focusing on performance and  maintainability.',
      },
      {
        title: 'Collaborative Solutions Delivery',
        content:
          'I’ve collaborated with designers and backend developers to deliver seamless solutions, ensuring pixel-perfect designs and smooth user experiences. My work includes integrating REST APIs, implementing authentication systems, and optimizing applications for performance and accessibility.',
      },
    ],
  },
];

export const SECTIONS: Section[] = [
  {
    id: 'home',
    name: 'Home',
    component: Home,
    isSpecial: true,
  },
  {
    id: 'about',
    name: 'About',
    component: About,
  },
  {
    id: 'experience',
    name: 'Experience',
    component: Experience,
  },
  {
    id: 'projects',
    name: 'Projects',
    component: Projects,
  },
  {
    id: 'contact',
    name: 'Contact',
    component: Contact,
  },
];
