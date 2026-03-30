import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Home from '@/components/Home';
import { Section } from './types';

 const SECTIONS: Section[] = [
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

export default SECTIONS;
