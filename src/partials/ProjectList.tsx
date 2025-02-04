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
        link="https://holyhandyhub.netlify.app/"
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
        name="UltraSound Georgia"
        description="📍Designed and built a fully responsive website for a private ultrasound clinic, optimizing user experience and improving client engagement.
        📍Implemented SEO strategies and performance optimizations to enhance search engine visibility.
        📍Integrated email appointment scheduling and contact forms for client inquiries."
        link="https://www.ultrasoundgeorgia.com/"
        img={{
          src: '/assets/images/ultrasound-machine.png',
          alt: 'Project Ultrasound',
        }}
        category={
          <>
            <Tags color={ColorTags.ROSE}>Figma</Tags>
            <Tags color={ColorTags.VIOLET}>HTML</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.PINK}>CSS</Tags>
          </>
        }
      />
      <Project
        name="Black Friday Deals"
        description="📍 Designed and built a bin store website optimized for high-traffic seasonal sales.
📍 Integrated a user-friendly interface for browsing and purchasing discounted products.
📍 Implemented performance enhancements to ensure fast loading speeds during peak shopping periods.
📍 Designed a responsive layout for seamless shopping across desktop and mobile devices."
        link="https://www.blackfridaydealstores.com/"
        img={{
          src: '/assets/images/bfd-logo.png',
          alt: 'Project Black Friday',
        }}
        category={
          <>
            <Tags color={ColorTags.ROSE}>Figma</Tags>
            <Tags color={ColorTags.VIOLET}>HTML</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.PINK}>CSS</Tags>
          </>
        }
      />
      <Project
        name="FORKIFY — Modern Recipe App "
        description="A modern web application designed for cooking enthusiasts, providing access to over 1,000,000 recipes from around the world. It features an intuitive interface for searching, viewing, and saving recipes, as well as the ability to upload and manage personal recipes. The app leverages the Forkify API to deliver rich content and supports bookmarking favorite recipes for easy access."
        link="https://github.com/workoholyguy/forkify-javascript-static-app?tab=readme-ov-file"
        img={{
          src: '/assets/images/forkify-project-icon.png',
          alt: 'Project Forkify',
        }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>Vanilla JS</Tags>
            <Tags color={ColorTags.VIOLET}>HTML</Tags>
            <Tags color={ColorTags.PINK}>CSS</Tags>
            <Tags color={ColorTags.EMERALD}>Web App</Tags>
          </>
        }
      />
      <Project
        name="Fit Map Your Workouts on a Map"
        description="An interactive web app to log running and cycling activities with metrics and map visualizations, incorporating local storage for data persistence and a user-friendly dynamic interface."
        link="https://github.com/workoholyguy/Fit-Map-Your-Workouts-on-a-Mapp-Web-App--HTML---CSS---JavaScript-"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.ROSE}>Map API</Tags>
            <Tags color={ColorTags.YELLOW}>Vanilla JS</Tags>
            <Tags color={ColorTags.VIOLET}>HTML</Tags>
            <Tags color={ColorTags.PINK}>CSS</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
