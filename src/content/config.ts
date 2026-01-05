import { defineCollection, z } from 'astro:content';

const portfolioCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        heroImage: z.object({
            src: z.string(),
            alt: z.string(),
        }).optional(),
        heroVideo: z.object({
            src: z.string(),
        }).optional(),
        category: z.string().optional(),
        metrics: z.array(z.object({
            value: z.string(),
            label: z.string(),
            color: z.string().optional(),
        })).optional(),
        // Campos para a lista (card)
        cardTitle: z.string().optional(), // Caso queira um título diferente no card
        cardDescription: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    'portfolio': portfolioCollection,
};
