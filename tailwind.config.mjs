/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      // 主色调
      primary: {
        DEFAULT: '#6366f1',
        light: '#818cf8',
        dark: '#4f46e5',
      },
      // 次要色
      secondary: '#10b981',
      // 背景色系
      background: {
        DEFAULT: '#0a0a0a',
        dark: '#0a0a0a',
        light: '#1a1a1a',
      },
      // 文本色系
      text: {
        DEFAULT: '#ffffff',
        primary: '#ffffff',
        secondary: '#a3a3a3',
      },
      // 强调色系
      accent: {
        blue: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
        },
        green: '#34d399',
        yellow: '#fbbf24',
        red: '#ef4444',
      },
      // 卡片背景
      card: {
        DEFAULT: 'rgba(26, 26, 26, 0.8)',
        hover: 'rgba(26, 26, 26, 0.9)',
      },
      // 基础颜色
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
    },
    extend: {
      backgroundColor: {
        'card-default': 'rgba(26, 26, 26, 0.8)',
        'card-hover': 'rgba(26, 26, 26, 0.9)',
      },
    },
  },
  plugins: [],
} 