import { defineCollection, z } from 'astro:content';

const objectivesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    icon: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number().default(0),
  }),
});

const statsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    number: z.number(),
    prefix: z.string().default(''),
    suffix: z.string().default(''),
    label: z.string(),
    sublabel: z.string(),
    order: z.number().default(0),
  }),
});

const homepageCollection = defineCollection({
  type: 'data',
  schema: z.object({
    section: z.enum(['hero', 'intro', 'joinCta']),
    title: z.string(),
    description: z.string(),
    buttonText: z.string().optional(),
    buttonHref: z.string().optional(),
  }),
});

const boardMemberCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    description: z.string(),
    image: z.string(),
    category: z.enum(['trustees', 'advisory']),
    order: z.number().default(0),
  }),
});

export const collections = {
  objectives: objectivesCollection,
  stats: statsCollection,
  homepage: homepageCollection,
  board: boardMemberCollection,
};
