// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.similynk.com',
  integrations: [
    starlight({
      title: 'Similynk',
      description: 'Ship: your words, shipped to your “ships”. Muso: all your ad-free music, free.',
      logo: { src: './src/assets/logo.svg' },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/docs.css'],
      components: {
        SocialIcons: './src/components/DocsHeaderLinks.astro',
      },
      sidebar: [
        {
          label: 'Start',
          items: [
            { label: 'Getting started', slug: 'docs' },
            { label: 'Installing', slug: 'docs/installing' },
          ],
        },
        {
          label: 'People',
          items: [
            { label: 'Family', slug: 'docs/family' },
            { label: 'Circles', slug: 'docs/circles' },
            { label: 'Chats', slug: 'docs/chats' },
          ],
        },
        {
          label: 'Sharing',
          items: [
            { label: 'Posts', slug: 'docs/posts' },
            { label: 'Muso', slug: 'docs/muso' },
          ],
        },
        {
          label: 'You',
          items: [
            { label: 'Profile', slug: 'docs/profile' },
            { label: 'Settings', slug: 'docs/settings' },
            { label: 'Updates', slug: 'docs/updates' },
          ],
        },
        {
          label: 'About',
          items: [
            { label: 'Privacy policy', slug: 'docs/privacy' },
            { label: 'Delete your account', slug: 'docs/delete-account' },
          ],
        },
      ],
    }),
  ],
});
