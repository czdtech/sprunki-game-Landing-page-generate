import { defineCollection, z } from 'astro:content';

// 定义各个配置的集合
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

const hero = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    cta_button: z.object({
      text: z.string(),
      link: z.string()
    })
  })
});

const gameSection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    iframe: z.object({
      src: z.string(),
      width: z.string(),
      height: z.string(),
      allow: z.string(),
      loading: z.string()
    }),
    customStyles: z.object({
      wrapper: z.string(),
      title: z.string(),
      description: z.string()
    })
  })
});

const footer = defineCollection({
  type: 'data',
  schema: z.object({
    copyright_text: z.string(),
    social_links: z.array(z.object({
      platform: z.string(),
      link: z.string()
    }))
  })
});

// 导出集合配置
export const collections = {
  'navigation': navigation,
  'meta': meta,
  'hero': hero,
  'gameSection': gameSection,
  'footer': footer
};