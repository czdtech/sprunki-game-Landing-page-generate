import { defineCollection, z } from 'astro:content';

const meta = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.string(),
    author: z.string(),
    favicon: z.string()
  })
});

const navigation = defineCollection({
  type: 'data',
  schema: z.object({
    logo: z.string(),
    items: z.array(z.object({
      name: z.string(),
      link: z.string()
    }))
  })
});

// ... 其他集合定义

export const collections = {
  meta,
  navigation,
  // ... 其他集合
}; 