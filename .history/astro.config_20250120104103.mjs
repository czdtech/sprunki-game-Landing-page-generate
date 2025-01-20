// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // 站点配置
  site: 'https://your-domain.com',
  
  // 集成配置
  integrations: [
    tailwind(),
  ],
  
  // 构建配置
  build: {
    assets: '_assets',
  },
  
  // 开发服务器配置
  server: {
    port: 3000,
    host: true
  }
});
