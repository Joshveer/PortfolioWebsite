import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/Joshveer',
  linkedin: 'https://www.linkedin.com/in/joshveer-grewal/',
  mail: 'mailto:joshveergrewal@gmail.com',
  instagram: 'https://www.instagram.com/joshveergrewal/',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'High School Student',
    institution: 'Northville High School',
  },
  {
    title: 'Dual Enrolled Student',
    institution: 'Schoolcraft College',
  },
  {
    title: 'Dual Enrolled Student',
    institution: 'Wasthenaw Community College',
  }
]

export const EXPERIENCE = [
  {
    company: 'Kohandel\'s Lab @ University of Waterloo',
    location: 'Waterloo, Ontario, Canada - Virtual',
    position: 'Programmer, Researcher, Co-Author',
    start: 'Feb 2024',
    link: 'https://uwaterloo.ca/kohandel-lab/',
    end: 'Nov 2024',
    tasks: [
      'Expected arXiv and SISC publication in Nov 2024. ',
      'I applied Buckingham π Theorem & SymbolicGPT to reduce time & data needed to find unknown functions in ODEs/PDEs.',
    ],
  },
  {
    company: 'H.O.P.E. Lab @ University of Michigan',
    location: 'Ann Arbor, Michigan, USA - Hybrid',
    position: 'Student Fellow',
    link: 'https://media.dent.umich.edu/labs/hope/',
    start: 'Jul 2024',
    end: 'Aug 2024',
    tasks: [
      '1 of 3 applicants selected. ',
      'Worked under Dr. DaSilva on noninvasive craniofacial pain treatments using tDCS, fMRI, & fNIRS. Wrote a literature review on Mathematical Oncology (available on LinkedIn).',
    ],
  },
  {
    company: 'Harvard University & MIT',
    link: 'https://arxiv.org/abs/2407.02673',
    location: 'Massachusetts, United States - Remote',
    position: 'Co-Researcher & Co-Author',
    start: 'Jul 2023',
    end: 'Jul 2024',
    tasks: [
      'arXiv publication on July 2nd, 2024 (linked).',
      'Worked in a team of 3 alongside Dr. Ponce (Harvard) & Dr. Arslan (MIT) to expand upon DreamDiffusion technology by connecting latent spaces with StableDiffusion & updating OOS codebase on Google Colab.',
    ],
  }
]
