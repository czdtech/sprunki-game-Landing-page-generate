// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://fiddlebops.com', // 替换为你的实际网站域名
  // 构建优化配置
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  },
  
  integrations: [
    tailwind({
      // Tailwind 配置选项
      applyBaseStyles: true
    }),
    compress()  // 使用默认配置，避免类型错误
  ],

  // Vite 构建优化
  vite: {
    build: {
      cssCodeSplit: true,
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        output: {
          manualChunks: {
            // 将第三方库代码分割到单独的 chunk
            vendor: ['astro', 'tailwindcss']
          }
        }
      }
    },
    // 开发服务器配置
    server: {
      watch: {
        usePolling: true
      }
    }
  }
});
