import {
  SiArduino,
  SiBootstrap,
  SiCss3,
  SiDjango,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJupyter,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiYoutube,
  SiNodedotjs,
  SiSap,
  SiAngular,
  SiDotnet,
} from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { StaticImageData } from 'next/image';
import handSanitizerImage from '../../public/images/handsanitizer.webp';
import pepsiImage from '../../public/images/pepsi-corporate.webp';
import stockImage from '../../public/images/stocks-portfolio.webp';
import voucherImage from '../../public/images/voucher_management.webp';

export type Tproject = {
  id: number;
  image: StaticImageData;
  projectTitle: string;
  projectDesc: string;
  stack: {
    Icon: typeof SiBootstrap;
    tooltipText: string;
    url?: string;
  }[];
  links: {
    Icon: typeof SiBootstrap;
    tooltipText: 'YouTube' | 'GitHub' | 'Website';
    url: string;
  }[];
};

const voucherManagementCard: Tproject = {
  id: 0,
  image: voucherImage,
  projectTitle: 'Salery Hero',
  projectDesc:
    'Salary Hero helps employers facilitate financial outcomes for their employees. ​We advance their financial health so they can advance their life.',
  stack: [
    { Icon: SiNodedotjs, tooltipText: 'Node' },
    { Icon: SiTypescript, tooltipText: 'TypeScript' },
    { Icon: SiSap, tooltipText: 'SAP' },
    // { Icon: SiTailwindcss, tooltipText: 'Tailwind CSS' },
    // { Icon: SiFramer, tooltipText: 'Framer Motion' },
  ],
  links: [
    {
      Icon: SiGithub,
      tooltipText: 'GitHub',
      url: 'https://github.com/muhammadullah1',
    },
    {
      Icon: FaExternalLinkAlt,
      tooltipText: 'Website',
      url: 'https://www.salary-hero.com',
    },
  ],
};

const stockProjectCard: Tproject = {
  id: 1,
  image: stockImage,
  projectTitle: 'Worklics',
  projectDesc:
    'Worklics empowers your human capital ; Leaves Tracking. Apply, approve or take leaves, maintain records and manage quota ; Manage Employees. Manage employees.',
  stack: [
    { Icon: SiNodedotjs, tooltipText: 'Node' },
    { Icon: SiAngular, tooltipText: 'Angular' },
    { Icon: SiHtml5, tooltipText: 'HTML' },
    { Icon: SiCss3, tooltipText: 'CSS' },
    { Icon: SiJavascript, tooltipText: 'JavaScript' },
    { Icon: SiBootstrap, tooltipText: 'Bootstrap' },
    { Icon: SiPostgresql, tooltipText: 'PostgreSQL' },
  ],
  links: [
    {
      Icon: SiGithub,
      tooltipText: 'GitHub',
      url: 'https://github.com/muhammadullah1',
    },
    // {
    //   Icon: SiYoutube,
    //   tooltipText: 'YouTube',
    //   url: 'https://youtu.be/T_cgG668pf4',
    // },
    {
      Icon: FaExternalLinkAlt,
      tooltipText: 'Website',
      url: 'https://play.google.com/store/apps/details?id=com.dxyfer.worklics1',
    },
  ],
};

const ioTProjectCard: Tproject = {
  id: 2,
  image: handSanitizerImage,
  projectTitle: 'IoT Hand Sanitizer',
  projectDesc:
    'A hand sanitizer product that incorporates data analytics and simple machine learning techniques to forecast certain data points, such as the number of times the sanitizer dispenser needs to be used before it runs out.',
  stack: [
    { Icon: SiDotnet, tooltipText: 'DotNet' },
    { Icon: SiNodedotjs, tooltipText: 'Node' },
    { Icon: SiReact, tooltipText: 'React' },
  ],
  links: [
    {
      Icon: SiGithub,
      tooltipText: 'GitHub',
      url: 'https://github.com/muhammadullah1',
    },
    // {
    //   Icon: SiYoutube,
    //   tooltipText: 'YouTube',
    //   url: 'https://elmsanad.sa/',
    // },
    {
      Icon: FaExternalLinkAlt,
      tooltipText: 'Website',
      url: 'https://elmsanad.sa/',
  },
  ],
};

const pepsiProjectCard: Tproject = {
  id: 3,
  image: pepsiImage,
  projectTitle: 'Pepsi corporate SPA',
  projectDesc:
    'Creating a new React-based single-page application from the beginning, in order to gain familiarity with various tools, including Typescript, React Router, framer motion, and the vitest unit testing framework.',
  stack: [
    { Icon: SiReact, tooltipText: 'React' },
    { Icon: SiTypescript, tooltipText: 'TypeScript' },
    { Icon: SiVite, tooltipText: 'Vite & Vitest' },
    { Icon: SiFramer, tooltipText: 'Framer Motion' },
  ],
  links: [
    {
      Icon: SiGithub,
      tooltipText: 'GitHub',
      // url: 'https://github.com/skycaptainess/fp-mini-project',
      url: 'https://github.com/muhammadullah1',
    },
  ],
};

export const projectCards: Tproject[] = [
  voucherManagementCard,
  stockProjectCard,
  ioTProjectCard,
  pepsiProjectCard,
];
