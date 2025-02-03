import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    {/* <FooterCopyright site_name={AppConfig.site_name} /> */}
    <hr />
    <p className="text-sm text-gray-200">
      {' '}
      &copy;Copyright 2020 by Avid Tech Usa. Built with ♥ by{' '}
      <a
        href="https://github.com/workoholyguy?tab=repositories"
        className="text-cyan-400 hover:underline"
      >
        Omar Madjitov
      </a>
      .
    </p>
  </Section>
);

export { Footer };
