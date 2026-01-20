import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    badge: z.string().optional(),
    heroTitle: z.string().optional(),
    heroSubtitle: z.string().optional(),
    primaryCTA: z.object({
      text: z.string(),
      href: z.string(),
    }).optional(),
    secondaryCTA: z.object({
      text: z.string(),
      href: z.string(),
    }).optional(),
    features: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
    })).optional(),
    stats: z.array(z.object({
      number: z.string(),
      label: z.string(),
    })).optional(),
  }),
});

export const collections = {
  'pages': pagesCollection,
};
