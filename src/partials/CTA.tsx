import { Section } from 'astro-boilerplate-components';

import { ContactForm } from '@/components/ContactForm';

const CTA = () => (
  <Section>
    {/* <Newsletter
      title={
        <>
          Subscribe to my <GradientText>Newsletters</GradientText>
        </>
      }
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero
          esse non molestias eos excepturi, inventore atque cupiditate."
    /> */}

    <ContactForm />
  </Section>
);

export { CTA };
