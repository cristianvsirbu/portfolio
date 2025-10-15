import Home from '@/components/Home';
import { getCurrentYear } from './utils';
import { Job, Project, Section, Technology } from '@/lib/types';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/cristianvsirbu/';
export const GITHUB_URL = 'https://github.com/cristianvsirbu';
export const PROFILE_PIC = '/images/profile.webp';
export const EMAIL = 'cristiansirbudev@gmail.com';
export const LOCATION = 'Bucharest, Romania';
export const PROGRAMMING_YEARS = getCurrentYear() - 2018;
export const PROFESSIONAL_YEARS = getCurrentYear() - 2021;

export const TECHNOLOGIES: Technology[] = [
  // Main technologies
  {
    name: 'TypeScript',
    icon: '/icons/technologies/main/ts.webp',
    category: 'main',
  },
  {
    name: 'React',
    icon: '/icons/technologies/main/react.webp',
    category: 'main',
  },
  {
    name: 'Next.js',
    icon: '/icons/technologies/main/next.webp',
    category: 'main',
  },
  {
    name: 'Tailwind CSS',
    icon: '/icons/technologies/main/tailwind.webp',
    category: 'main',
  },
  { name: 'Git', icon: '/icons/technologies/main/git.webp', category: 'main' },

  // Additional technologies
  {
    name: 'Node.js',
    icon: '/icons/technologies/additional/node.webp',
    category: 'additional',
  },
  {
    name: 'Redux',
    icon: '/icons/technologies/additional/redux.webp',
    category: 'additional',
  },
  {
    name: 'Vite',
    icon: '/icons/technologies/additional/vite.webp',
    category: 'additional',
  },
  {
    name: 'Express',
    icon: '/icons/technologies/additional/express.webp',
    category: 'additional',
  },
  {
    name: 'Sass',
    icon: '/icons/technologies/additional/sass.webp',
    category: 'additional',
  },
  {
    name: 'Three.js',
    icon: '/icons/technologies/additional/threejs.webp',
    category: 'additional',
  },
  {
    name: 'GitHub',
    icon: '/icons/technologies/additional/github.webp',
    category: 'additional',
  },
  {
    name: 'npm',
    icon: '/icons/technologies/additional/npm.webp',
    category: 'additional',
  },
  {
    name: 'Yarn',
    icon: '/icons/technologies/additional/yarn.webp',
    category: 'additional',
  },
  {
    name: 'Figma',
    icon: '/icons/technologies/additional/figma.webp',
    category: 'additional',
  },
  {
    name: 'Adobe Illustrator',
    icon: '/icons/technologies/additional/illustrator.webp',
    category: 'additional',
  },
  {
    name: 'Adobe Photoshop',
    icon: '/icons/technologies/additional/photoshop.webp',
    category: 'additional',
  },
  {
    name: 'ClickUp',
    icon: '/icons/technologies/additional/clickup.webp',
    category: 'additional',
  },
  {
    name: 'Linear',
    icon: '/icons/technologies/additional/linear.webp',
    category: 'additional',
  },
  {
    name: 'Slack',
    icon: '/icons/technologies/additional/slack.webp',
    category: 'additional',
  },
  {
    name: 'Supabase',
    icon: '/icons/technologies/additional/supabase.webp',
    category: 'additional',
  },
  {
    name: 'React Flow',
    icon: '/icons/technologies/additional/react_flow.webp',
    category: 'additional',
  },
  {
    name: 'Sentry',
    icon: '/icons/technologies/additional/sentry.webp',
    category: 'additional',
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'Project Mars',
    description:
      'Project Mars is a frontend app for exploring the Martian landscape. It uses React, React Router, Recharts, and Three.js for a responsive, visual experience, with Vite for fast builds. Data is scraped from NASA via Puppeteer in a Node.js + Express.js backend. A Vercel serverless branch also delivers this data through a serverless function. Styled with Tailwind CSS, it features custom assets from Figma/Illustrator and optimized 3D models via Draco3D.',
    icon: '/icons/projects/mars.webp',
    site: 'https://project-mars-serverless.vercel.app',
    repo: 'https://github.com/cristianvsirbu/project-mars',
  },
  {
    name: 'Bluestar Bank',
    description:
      'Designed and developed Bluestar Bank, a fully  responsive, single-page banking application. Showcasing expertise in  HTML, CSS, Tailwind CSS, JavaScript, React, and Vite, this app features  an intuitive UI, smooth animations, and real-time exchange rate updates, delivering a seamless banking experience.',
    icon: '/icons/projects/bluestar.webp',
    site: 'https://bluestar-bank.netlify.app',
    repo: 'https://github.com/cristianvsirbu/bank-app',
  },
  {
    name: 'Password Generator',
    description:
      'A straightforward password generator that uses JavaScript, HTML, and CSS. Users can create strong, adaptable passwords with this tool by selecting their preferred length and character set. Combining a variety of capital, lowercase, numeric, and special characters guarantees increased security. The design is accessible on all devices due to its responsiveness and ease of use',
    icon: '/icons/projects/passgen.webp',
    site: 'https://passgen-cs.netlify.app',
    repo: 'https://github.com/cristianvsirbu/password-generator',
  },
  {
    name: 'Auth System',
    description:
      'A comprehensive authentication system built with React 19 and TypeScript, providing multiple authentication methods in a responsive and user-friendly interface. Features email verification with 6-digit PIN, anonymous access with 16-digit codes, and Google OAuth. Includes smart input detection, form validation, toast notifications, and protected routes with localStorage persistence. Built with Vite 6, Tailwind CSS 4, and includes comprehensive testing with Vitest and Playwright.',
    icon: '/icons/projects/auth_system.webp',
    site: '',
    repo: 'https://github.com/cristianvsirbu/auth-system',
  },
  {
    name: 'More to come...',
    isEmpty: true,
    description: 'Coming soon-ish. Probably epic.',
    icon: '/icons/projects/empty_project.webp',
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
export const RECOMMENDATIONS = [
  {
    text: "Cristian is a standout frontend engineer with a rare blend of creativity and technical precision. His keen eye for design and UX elevates his work, ensuring interfaces are not just functional but intuitive and polished. Whether working with React, Next.js, or TailwindCSS, Cristian tackles challenges with a methodical approach, consistently improving his solutions through feedback and iteration.\n\nWhat sets Cristian apart is his growth mindset - he absorbs new concepts quickly and applies them with care. His code reflects thoughtfulness and scalability, and his collaborative attitude makes him a valuable team player. I've seen him transform complex problems into elegant solutions, and his dedication to craftsmanship is evident in every project.\n\nWithout hesitation, I'd recommend Cristian for any frontend role. He's the kind of developer who not only meets expectations but raises the bar for those around him.",
    relationship:
      "Alain was senior to Cristian but didn't manage Cristian directly",
    name: 'Alain Denzler',
    occupation:
      'Founder @ getitAI | AI-First Entrepreneur | Reimagining Commerce for the Age of AI | Exited SaaS Founder',
    profile_url: 'https://www.linkedin.com/in/alaindenzler/',
  },
  {
    text: "I was one of the founders of getitAI while Cristian was a frontend developer there. What always struck me about him was his ability to communicate clearly, understand feedback, and take action. He was always a pleasure to work with, and during our time working together, I saw tremendous growth in his technical ability and attention to detail. While it can at times be difficult for a non-technical PM to work with a developer, that wasn't the case here. Cristian was always willing to spend extra time clarifying an ask that I did not communicate clearly, and would proactively approach me with his own suggestions.\n\nI highly recommend working with Cristian if given the opportunity. I know I would do so again.",
    relationship:
      "Michael was senior to Cristian but didn't manage Cristian directly",
    name: 'Michael Greenberg',
    occupation:
      'Entrepreneur in Residence @ Press On Ventures | Consulting on AI Workflow Optimizations | ex-Google, Meta, Samsung',
    profile_url: 'https://www.linkedin.com/in/michael-c-greenberg/',
  },
  {
    text: 'Cristian has an eye for design and UX. He made tremendous progress in his ability to tackle hard problems in programming. I can without a doubt recommend Cristian for any frontend engineering job in the world.',
    relationship: 'Patrick managed Cristian directly',
    name: 'Patrick Lauber',
    occupation:
      'I Build Full-Full-Stack Systems | Front to Back, Data to AI | Creator of django-cms',
    profile_url: 'https://www.linkedin.com/in/patricklauber/',
  },
  {
    text: "I had the pleasure of working with Cristian Sîrbu and was impressed by both his attentiveness and the steady progress he made as a Junior Frontend Engineer. During our time together, Cristian worked with technologies like Next.js, React, and CSS, and he consistently demonstrated a solid understanding of the tools and concepts required to build modern, responsive user interfaces.\n\nCristian approached each task with care and focus, delivering good results and showing a clear eagerness to grow. He was quick to grasp new concepts and always open to feedback, applying it thoughtfully to improve the quality and maintainability of his code. His work was reliable and steadily improved over time, reflecting both curiosity and commitment.\n\nCristian's technical foundation, coupled with his positive attitude and growth mindset, make him a strong addition to any frontend team. I'm confident he'll continue to evolve and bring increasing value wherever he contributes.",
    relationship: 'Lio managed Cristian directly',
    name: 'Lio Mendonca',
    occupation: 'Founder | experienced fullstack developer',
    profile_url: 'https://www.linkedin.com/in/lio-mendonca/',
  },
];
