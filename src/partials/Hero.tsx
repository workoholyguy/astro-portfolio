import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

import Galaxy from '../components/Galaxy';

const Hero = () => (
  <Section>
    <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-slate-950 text-white shadow-2xl shadow-cyan-900/40">
      <Galaxy
        className="absolute inset-0"
        mouseRepulsion
        mouseInteraction
        density={1.5}
        glowIntensity={0.5}
        saturation={0.8}
        hueShift={240}
      />
      <div className="absolute inset-0 bg-slate-950/40" />

      <div className="relative z-10 w-full max-w-6xl px-4 py-12">
        <HeroAvatar
          title={
            <>
              Hi there, I'm <GradientText>Omar,</GradientText> the Founder of{' '}
              <GradientText>Avid Tech Usa !</GradientText> 👋
            </>
          }
          description={
            <>
              Avid Tech USA empowers local businesses by bridging the gap
              between ideas and technology. We specialize in crafting stunning,{' '}
              <a className="text-cyan-400 hover:underline" href="/">
                SEO-friendly
              </a>{' '}
              websites that enhance online presence, ensuring businesses stand
              out in the digital landscape.{' '}
              <a className="text-cyan-400 hover:underline" href="/">
                From concept to launch,
              </a>{' '}
              we turn visions into functional, high-performing websites.{' '}
            </>
          }
          avatar={
            <img
              className="h-64 w-64"
              src="/assets/images/Profile Image.png"
              alt="Avatar image"
              loading="lazy"
            />
          }
          socialButtons={
            <>
              <a href="https://github.com/workoholyguy">
                <HeroSocial
                  src="/assets/images/github_2.png"
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
                  src="/assets/images/mail-icon.png"
                  alt="email-icon"
                />
              </a>
            </>
          }
        />
      </div>
    </div>
  </Section>
);

export { Hero };
