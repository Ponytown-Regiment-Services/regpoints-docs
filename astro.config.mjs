// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import Icons from 'unplugin-icons/vite'
import starlightThemeRapide from 'starlight-theme-rapide'

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            plugins: [starlightThemeRapide()],
            title: 'Regpoints Docs',
            // social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        { label: 'Introduction', slug: 'guides/introduction' },
                        { label: 'Getting Started', slug: 'guides/getting-started' },
                        { label: 'Manage Regiment', slug: 'guides/manage-regiment' },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
                {
                    label: 'Others',
                    items: [
                        { label: 'Changelog', slug: 'changelog' },
                    ],
                }
            ],
        }),
    ],

    vite: {
        plugins: [Icons({ compiler: 'astro' })],
    },

    adapter: vercel(),
});