import {
  ColorTags,
  GradientText,
  Section,
  Tags,
} from 'astro-boilerplate-components';

type ProjectMeta = {
  name: string;
  description: string;
  link: string;
  img: {
    src: string;
    alt: string;
  };
  category: {
    color: keyof typeof ColorTags;
    label: string;
  }[];
};

const projects: ProjectMeta[] = [
  {
    name: 'The Job Ledger -- Fullstack Web App',
    description:
      'Job Ledger is a hiring intelligence dashboard that logs every job application, surfaces follow-up reminders, compares competing offers, and centralizes conversations so your pipeline stays transparent and actionable.',
    link: 'https://jobledger.app/',
    img: {
      src: '/assets/images/job-ledger-logo_1.png',
      alt: 'Job Ledger',
    },
    category: [
      { color: ColorTags.LIME, label: 'Express Js' },
      { color: ColorTags.PINK, label: 'Tailwind CSS' },
      { color: ColorTags.SKY, label: 'React Js' },
      { color: ColorTags.GREEN, label: 'PostgreSQL' },
    ],
  },

  {
    name: 'House Prices vs Crime & School Quality - Data Science / ML ',
    description:
      'Led the GSU study that merged NCES, APD, and Zillow data to clean 50k+ ZIP-code records, visualize correlations, and train RF/KNN/NN/logistic models plus spatial choropleths for crime, school quality, and housing prices.',
    link: 'https://github.com/workoholyguy/houses-schools-crimes',
    img: {
      src: '/assets/images/home_price_ml.png',
      alt: 'House Pricing Analysis',
    },
    category: [
      { color: ColorTags.SKY, label: 'GeoPandas' },
      { color: ColorTags.LIME, label: 'Random Forest' },
      { color: ColorTags.PINK, label: 'Spatial Analysis' },
      { color: ColorTags.ROSE, label: 'Regression' },
    ],
  },
  {
    name: '7Lines - Logistics Organization Web App',
    description:
      '7Lines is a minimalist Next.js starter engineered for speed, clarity, and rapid iteration. It strips development down to seven core files—routing, layout, UI scaffold, and typed API hooks—so new projects spin up instantly with clean architecture, zero noise, and auto-optimized performance.',
    link: 'https://github.com/workoholyguy/7lines', // or your deployment link
    img: {
      src: '../../public/assets/images/7linesinc_icon.png',
      alt: '7Lines Project',
    },
    category: [
      { color: ColorTags.LIME, label: 'Next.js' },
      { color: ColorTags.SKY, label: 'TypeScript' },
      { color: ColorTags.PINK, label: 'Tailwind CSS' },
      { color: ColorTags.EMERALD, label: 'Vercel' },
    ],
  },

  {
    name: 'Protein Clustering Machine Learning',
    description:
      'End-to-end CSC 6850 individual work implementing pure-NumPy EDA, missing-data pipelines, custom KNN, and gradient-descent neural nets plus reproducible exports for every dataset.',
    link: 'https://github.com/workoholyguy/machine-learning-clustering?tab=readme-ov-file#csc-6850--machine-learning',
    img: {
      src: '/assets/images/calculator_ml.png',
      alt: 'Machine Learning Project',
    },
    category: [
      { color: ColorTags.SKY, label: 'NumPy' },
      { color: ColorTags.LIME, label: 'Machine Learning' },
      { color: ColorTags.PINK, label: 'Data Engineering' },
      { color: ColorTags.EMERALD, label: 'Research' },
    ],
  },
  {
    name: 'Holly Handy Hub -- Fullstack Web Application',
    description:
      'Holly Handy Hub is a professional/maker community where home improvement ideas, proven techniques, and expert help converge, letting users crowdsource guidance or showcase finished projects with confidence.',
    link: 'https://holyhandyhub.netlify.app/',
    img: {
      src: '/assets/images/hhh-project-icon.png',
      alt: 'Project Web Design',
    },
    category: [
      { color: ColorTags.LIME, label: 'Web design' },
      { color: ColorTags.PINK, label: 'CSS' },
      { color: ColorTags.SKY, label: 'React Js' },
      { color: ColorTags.GREEN, label: 'SupaBase' },
    ],
  },
  {
    name: 'UltraSound Georgia',
    description:
      'Designed and developed a fully responsive site for UltraSound Georgia, combining performance and SEO enhancements with easy-to-use appointment scheduling and outreach forms to improve patient conversions.',
    link: 'https://www.ultrasoundgeorgia.com/',
    img: {
      src: '/assets/images/ultrasound-machine.png',
      alt: 'Project Ultrasound',
    },
    category: [
      { color: ColorTags.ROSE, label: 'Figma' },
      { color: ColorTags.VIOLET, label: 'HTML' },
      { color: ColorTags.YELLOW, label: 'JavaScript' },
      { color: ColorTags.PINK, label: 'CSS' },
    ],
  },
  {
    name: 'Black Friday Deals',
    description:
      'Crafted a high-velocity storefront for Black Friday Deals featuring a product-focused layout, streamlined checkout, and performance tuning to stay responsive during peak seasonal traffic.',
    link: 'https://www.blackfridaydealstores.com/',
    img: {
      src: '/assets/images/bfd-logo-bag-2.png',
      alt: 'Project Black Friday',
    },
    category: [
      { color: ColorTags.ROSE, label: 'Figma' },
      { color: ColorTags.VIOLET, label: 'HTML' },
      { color: ColorTags.YELLOW, label: 'JavaScript' },
      { color: ColorTags.PINK, label: 'CSS' },
    ],
  },
  {
    name: 'FORKIFY — Modern Recipe App ',
    description:
      'Forkify is a modern recipe experience built on the Forkify API, letting home cooks search from over a million recipes, save favorites, and upload their own menus through an intuitive, bookmark-friendly interface.',
    link: 'https://github.com/workoholyguy/forkify-javascript-static-app?tab=readme-ov-file',
    img: {
      src: '/assets/images/forkify-project-icon.png',
      alt: 'Project Forkify',
    },
    category: [
      { color: ColorTags.YELLOW, label: 'Vanilla JS' },
      { color: ColorTags.VIOLET, label: 'HTML' },
      { color: ColorTags.PINK, label: 'CSS' },
      { color: ColorTags.EMERALD, label: 'Web App' },
    ],
  },
  {
    name: 'Fit Map Your Workouts on a Map',
    description:
      'Fit Map logs running and cycling workouts with descriptive metrics and interactive map overlays, using local storage to persist personal routes and delivering a playful yet informative experience for every athlete.',
    link: 'https://github.com/workoholyguy/Fit-Map-Your-Workouts-on-a-Mapp-Web-App--HTML---CSS---JavaScript-',
    img: {
      src: '/assets/images/project-maps.png',
      alt: 'Project Maps',
    },
    category: [
      { color: ColorTags.ROSE, label: 'Map API' },
      { color: ColorTags.YELLOW, label: 'Vanilla JS' },
      { color: ColorTags.VIOLET, label: 'HTML' },
      { color: ColorTags.PINK, label: 'CSS' },
    ],
  },
];

const ProjectCard = ({ project }: { project: ProjectMeta }) => (
  <a
    className="flex w-full flex-col rounded-md bg-slate-800 p-3 transition hover:-translate-y-0.5 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 md:flex-row"
    href={project.link}
  >
    <div className="shrink-0">
      <img
        className="h-36 w-36 hover:translate-y-1"
        src={project.img.src}
        alt={project.img.alt}
        loading="lazy"
      />
    </div>

    <div>
      <div className="flex flex-col items-center gap-y-2 md:flex-row">
        <div className="text-xl font-semibold">{project.name}</div>

        <div className="ml-3 flex flex-wrap gap-2">
          {project.category.map((tag) => (
            <Tags key={`${project.name}-${tag.label}`} color={tag.color}>
              {tag.label}
            </Tags>
          ))}
        </div>
      </div>

      <p className="mt-3 whitespace-pre-line text-gray-400">
        {project.description}
      </p>
    </div>
  </a>
);

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  </Section>
);

export { ProjectList };
