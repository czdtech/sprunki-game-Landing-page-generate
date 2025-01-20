import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

// 定义所有集合的模式
const collections = {
  config: defineCollection({
    type: 'data',
    schema: z.object({}).passthrough()
  })
};

// 导出集合配置
export const { config } = collections; 