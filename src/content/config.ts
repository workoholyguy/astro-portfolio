import { defineCollection, z } from 'astro:content';

// Services Collection
const servicesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    shortDescription: z.string(),
    heroDescription: z.string(),
    icon: z.string(),
    deliverables: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    whoItsFor: z.array(z.string()),
    process: z.array(
      z.object({
        step: z.number(),
        title: z.string(),
        description: z.string(),
      })
    ),
    pricingRange: z.object({
      from: z.number(),
      to: z.number().optional(),
      unit: z.enum(['project', 'month', 'page']),
    }),
    relatedServices: z.array(z.string()),
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    order: z.number().default(0),
  }),
});

// Projects Collection
const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    client: z.string().optional(),
    description: z.string(),
    shortDescription: z.string(),
    url: z.string().url().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    thumbnail: z.string(),
    tags: z.array(z.string()),
    category: z.enum(['web-app', 'website', 'ecommerce', 'landing-page']),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    deliverables: z.array(z.string()).optional(),
    results: z.string().optional(),
  }),
});

// Blog Collection
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  services: servicesCollection,
  projects: projectsCollection,
  blog: blogCollection,
};
