// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog'
import Icons from 'unplugin-icons/vite'
import starlightThemeRapide from 'starlight-theme-rapide'

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            logo: {
                src: './src/assets/logo.svg',
            },
            plugins: [
                starlightThemeRapide(),
                starlightBlog({
                    authors: {
                        regpointsDevTeam: {
                            name: 'Regpoints Dev Team',
                            title: 'Your local developer team',
                            picture: 'https://cdn.discordapp.com/avatars/1301842493238808661/5ee37ac3c75edad335e2ebb49f9edee6.webp?size=1024',
                            url: 'https://regpoints.fr',
                        },
                    },
                })
            ],
            title: 'Regpoints Docs',
            // social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        { label: 'Introduction', slug: 'guides/introduction' },
                        { label: 'Getting Started', slug: 'guides/getting-started' },
                        { label: 'Manage Regiment', slug: 'guides/manage-regiment' },
                        {
                            label: 'Bot Management',
                            collapsed: true,
                            items: [
                                { label: 'Commands', slug: 'guides/bot_management/commands' },
                                { label: 'Enlistment', slug: 'guides/bot_management/enlisting' },
                            ],
                        },
                        {
                            label: 'Member Management',
                            collapsed: true,
                            items: [
                                { label: 'Members', slug: 'guides/member_management/members' },
                                { label: 'Aliases', slug: 'guides/member_management/aliases' },
                                { label: 'Staff', slug: 'guides/member_management/staff' },
                            ],
                        },
                        { label: 'Points', slug: 'guides/points' },
                        { label: 'Economy', slug: 'guides/economy' }
                    ],
                },
                /*{
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
                */
                {
                    label: 'Others',
                    items: [
                        { label: 'Changelog', slug: 'changelog' },

                    ],
                },
                {
                    label: 'Blog',
                    link: '/blog'
                },
            ],
        }),
    ],

    vite: {
        plugins: [Icons({ compiler: 'astro' })],
    },

    adapter: vercel(),
});