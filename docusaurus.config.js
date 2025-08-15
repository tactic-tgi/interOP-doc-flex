// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'interOP',
  tagline: 'Écosystème pour les arts graphiques',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://interop-doc-flex.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Tactic-TGI', // Usually your GitHub org/user name.
  projectName: 'interOP-doc-flex', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          lastVersion: 'current',
          versions: {
            current: {
              banner: 'none',
              badge: false,
              path: '/',
            },
            '2.0.0': {
              banner: 'none',
              badge: false,
            },
          },
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'interOP',
        logo: {
          alt: 'logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Documentation',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/introduction',
              },
            ],
          },
          {
            title: 'Médias sociaux',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/Tactic-TGI-102807362102490/',
              },
              {
                label: 'LinkedIn',
                href: 'https://ca.linkedin.com/company/tactic-tgi',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/playlist?list=PLiPXYKkg5hK_pR6P41wTsqv-bqjMCRKsv',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} interOP - Tactic-TGI Inc., Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
