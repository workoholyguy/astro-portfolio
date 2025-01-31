import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Omar,</GradientText> the Founder of <GradientText>Avid Tech Usa !</GradientText> 👋
        </>
      }
      description={
        <>
        Avid Tech USA empowers local businesses by bridging the gap between ideas and technology. We specialize in crafting stunning, <a className="text-cyan-400 hover:underline" href="/">
        SEO-friendly
          </a>{' '} websites that enhance online presence, ensuring businesses stand out in the digital landscape. <a className="text-cyan-400 hover:underline" href="/">
          From concept to launch,
          </a>{' '} we turn visions into functional, high-performing websites.{' '}
        </>
      }
      avatar={
        <img
          className="h-64 w-64"
          src="../../public/assets/images/Profile Image.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/workoholyguy">
            <HeroSocial
              src="../../public/assets/images/github_2.png"
              alt="GitHub icon"
            />
          </a>
          
          <a href="https://www.linkedin.com/in/omar-madjitov-6b3a33234/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="mailto:omadjitov1@icloud.com">
            <HeroSocial
              src="../../public/assets/images/mail-icon.png"
              alt="email-icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
