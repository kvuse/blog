/* eslint-disable import/no-unresolved */
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://kvuse.github.io',
  base: '/blog',
  integrations: [
    starlight({
      title: '学而习之',
      favicon: '/images/favicon.svg',
      lastUpdated: true,
      logo: {
        src: './src/assets/logo.svg',
        // replacesTitle: true,
      },
      customCss: ['./src/styles/global.scss'],
      social: {
        github: 'https://github.com/kvuse/docs',
      },
      sidebar: [
        { label: '开始', link: '/guides' },
        { label: '框架', autogenerate: { directory: 'framework' } },
        { label: '插件', autogenerate: { directory: 'plugins' } },
        { label: '组件', autogenerate: { directory: 'components' } },
        { label: '其他', autogenerate: { directory: 'others' } },
      ],
    }),
  ],
});
