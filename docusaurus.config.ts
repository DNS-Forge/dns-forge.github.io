import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DNS Forge Documentation',
  tagline: 'Automated Browser Extension Reference Wiki',
  favicon: 'img/favicon.ico',

  url: 'https://dns-forge.github.io',
  baseUrl: '/',

  organizationName: 'DNS-Forge',
  projectName: 'dns-forge.github.io',
  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/DNS-Forge/dns-forge.github.io/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [],

  themeConfig: {
    navbar: {
      title: 'DNS Forge Wiki',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'wikiSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/DNS-Forge/firefox-addon',
          label: 'GitHub Extension Root',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} DNS Forge Portal. Built automatically with Docusaurus 3.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
