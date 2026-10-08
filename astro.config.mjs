// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.similynk.com',
  integrations: [
    starlight({
      title: 'Similynk',
      description: 'A quiet, private place for your family, your friends and the music you share.',
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
            { label: 'Music', slug: 'docs/music' },
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
      ],
    }),
  ],
});
