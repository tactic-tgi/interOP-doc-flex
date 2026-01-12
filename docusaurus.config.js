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
  customFields: {
    logo: 'https://tactic-tgi.com/wp-content/uploads/2025/05/interop_logo.svg',
  },
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
            '2.0': {
              banner: 'none',
              badge: false,
              path: '/2.0',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      metadata: [
        {
          name: 'algolia-site-verification',
          content: '3F7F3BFC89718CE7',
        },
      ],
      algolia: {
        appId: 'SLNZ985PPS',
        apiKey: '43af1c8f93cc114f5452bd169c4c8eac',
        indexName: 'interOP-flex',
        contextualSearch: true,
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
        searchParameters: {},
        searchPagePath: 'search',
        insights: false,
      },
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
  /*Bot IA, inconcluant pour le moment
  scripts: [
    {
      src: 'https://js.hs-scripts.com/8973259.js',
      id: 'hs-script-loader',
      async: true,
      defer: true,
    },
  ],
  */
};

export default config;
