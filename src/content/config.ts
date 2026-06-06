import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string(),
    imageAlt: z.string().default(''),
    category: z.string(),
    readingTime: z.number().default(5),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// Collection produits : PRÉVUE mais non affichée tant que ECOMMERCE_ENABLED = false
const products = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    price: z.number(),
    image: z.string(),
    affiliateUrl: z.string().url().optional(),
    category: z.string().optional(),
    inStock: z.boolean().default(false),
    draft: z.boolean().default(true),
  }),
});

export const collections = { blog, products };
