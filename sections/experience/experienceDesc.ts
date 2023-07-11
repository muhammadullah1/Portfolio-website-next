type experienceDescription<T> = {
  date: T;
  title: T;
  company: T;
  companyURL: T;
  pointers: T[];
}[];

const foodpandaPointers = [
  'CodeNinja is a technology consultant specializing in digital services custom-built for business needs. From e-commerce stores to enterprise software. CodeNinja hassuccessfully delivered more than 250 projects across the globe.',
];

const siaecPointers = [
  'JMM Technologies is a start-up turned technology company with extensive years of experience delivering digital solutions. As a fast-growing tech firm, we help diverse businesses and organizations. Our expertise in innovative, state-of-the-art digital services accelerates business growth and enhances customer impact.',
];

export const experiences: experienceDescription<string> = [
  {
    date: 'Mar 2023 - Present',
    title: 'MERN Stack Developer',
    company: 'JMM Technologies',
    companyURL: 'https://jmm.ltd',
    pointers: foodpandaPointers,
  },
  {
    date: 'Mar 2022 - Mar 2023',
    title: 'Associate Software Engineer',
    company: 'CodeNinja',// Software Company',
    companyURL: 'https://www.codeninja.pk',
    pointers: siaecPointers,
  },
];
