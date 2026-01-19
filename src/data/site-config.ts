export const siteConfig = {
  // Site information
  name: 'AVID TECH USA',
  title: 'AVID TECH USA | Web Design & Development for Small Businesses',
  description: 'Professional web design and development services for small businesses in Georgia. We build fast, modern websites that help you get more leads and grow your business.',
  url: 'https://avidtechusa.com',

  // Contact info
  email: 'hello@avidtechusa.com',
  phone: '(404) 555-0123',

  // Location (primary)
  location: {
    city: 'Atlanta',
    state: 'Georgia',
    stateAbbr: 'GA',
    country: 'United States',
  },

  // Social links
  social: {
    github: 'https://github.com/workoholyguy',
    linkedin: 'https://www.linkedin.com/in/omar-madjitov-6b3a33234/',
    twitter: '',
  },

  // Navigation
  navigation: {
    main: [
      { label: 'Services', href: '/services' },
      { label: 'Work', href: '/work' },
      { label: 'Process', href: '/process' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    footer: {
      services: [
        { label: 'Website Design & Build', href: '/services/website-design' },
        { label: 'Website Redesign', href: '/services/website-redesign' },
        { label: 'Landing Pages', href: '/services/landing-pages' },
        { label: 'Maintenance & Care', href: '/services/maintenance-care' },
        { label: 'Local SEO Setup', href: '/services/local-seo' },
      ],
      company: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Process', href: '/process' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Contact', href: '/contact' },
      ],
      legal: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
  },

  // SEO defaults
  seo: {
    defaultOgImage: '/assets/images/og-default.png',
    twitterHandle: '@avidtechusa',
  },

  // Services list (for dropdowns and references)
  services: [
    { slug: 'website-design', name: 'Website Design & Build' },
    { slug: 'website-redesign', name: 'Website Redesign' },
    { slug: 'landing-pages', name: 'Landing Pages' },
    { slug: 'maintenance-care', name: 'Maintenance & Care Plans' },
    { slug: 'local-seo', name: 'Local SEO Setup' },
    { slug: 'speed-technical-seo', name: 'Speed & Technical SEO' },
    { slug: 'shopify-customization', name: 'Shopify Customization' },
    { slug: 'brand-starter-kit', name: 'Brand Starter Kit' },
    { slug: 'analytics-tracking', name: 'Analytics & Tracking Setup' },
  ],

  // Budget ranges for contact form
  budgetRanges: [
    { value: 'under-2500', label: 'Under $2,500' },
    { value: '2500-5000', label: '$2,500 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000-25000', label: '$10,000 - $25,000' },
    { value: '25000-plus', label: '$25,000+' },
    { value: 'not-sure', label: 'Not sure yet' },
  ],

  // Timeline options for contact form
  timelineOptions: [
    { value: 'asap', label: 'As soon as possible' },
    { value: '1-2-weeks', label: '1-2 weeks' },
    { value: '1-month', label: 'Within a month' },
    { value: '2-3-months', label: '2-3 months' },
    { value: 'flexible', label: 'Flexible / Not sure' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
