import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'data',
    schema: z.object({
        lang: z.enum(['es', 'en']),
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        cover: z.string(),
        technologies: z.array(z.string()),
        contributions: z.array(z.string()),
        images: z.array(z.string()),
        projectLink: z.string().url().optional(),
        nameButton: z.string().optional(),
    }),
});

export const collections = { projects };