import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experienceCollection = defineCollection({
  // Load directly from repo-level `cards/`.
  loader: glob({ pattern: 'card_ex*.md', base: './cards' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    dates: z.string(),
    pitch: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
    bullets: z.array(z.string()),
    aiContextMarkdown: z.string(),
  }),
});

const workSamplesCollection = defineCollection({
  loader: glob({ pattern: '**/*.(md|mdx)', base: './src/content/work-samples' }),
  schema: z.object({
    title: z.string(),
    type: z.string().optional(),
    tags: z.array(z.string()).optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  experience: experienceCollection,
  'work-samples': workSamplesCollection,
};
