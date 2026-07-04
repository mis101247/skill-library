import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const httpUrl = z.string().url().refine((value) => {
  const { protocol } = new URL(value);
  return protocol === 'http:' || protocol === 'https:';
}, 'URL must use http or https');

const skills = defineCollection({
  loader: glob({ base: './src/content/skills', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    entryType: z.enum(['full', 'catalog', 'storeCatalog', 'local']).default('full'),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    sourceRepo: z.string(),
    sourceRepoUrl: httpUrl,
    sourcePath: z.string(),
    sourceUrl: httpUrl,
    localPath: z.string(),
    license: z.string(),
    originalName: z.string(),
    originalDescription: z.string(),
    activation: z.string(),
    useCases: z.array(z.string()),
    workflow: z.array(z.string()),
    files: z.array(z.string()),
    cautions: z.array(z.string()).default([]),
    skillBody: z.string().default(''),
  }),
});

const guides = defineCollection({
  loader: glob({ base: './src/content/guides', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    difficulty: z.enum(['入門', '中階', '進階']).default('入門'),
    timeEstimate: z.string().default(''),
    featured: z.boolean().default(false),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    guideType: z.string().default('concept'),
    learningGoals: z.array(z.string()).default([]),
    prerequisites: z.array(z.string()).default([]),
    relatedSkills: z.array(z.string()).default([]),
  }),
});

export const collections = { skills, guides };
