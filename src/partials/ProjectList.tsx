import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Holly Handy Hub"
        description="The ultimate platform for DIY enthusiasts and professional handymen. Whether you're tackling a project or seeking expert advice, HandyHub connects you with a supportive community ready to help."
        link="/"
        img={{
          src: '/assets/images/hhh-project-icon.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            {/* <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags> */}
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.PINK}>CSS</Tags>
            <Tags color={ColorTags.SKY}>React Js</Tags>
            <Tags color={ColorTags.GREEN}>SupaBase</Tags>
          </>
        }
      />
      <Project
        name="FORKIFY — Modern Recipe App "
        description="A modern web application designed for cooking enthusiasts, providing access to over 1,000,000 recipes from around the world. It features an intuitive interface for searching, viewing, and saving recipes, as well as the ability to upload and manage personal recipes. The app leverages the Forkify API to deliver rich content and supports bookmarking favorite recipes for easy access."
        link="/"
        img={{ src: '/assets/images/forkify-project-icon.png', alt: 'Project Forkify' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>Blog</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Project 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
