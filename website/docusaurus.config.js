import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Nikhila Jain',
  tagline: 'Technical Writer',
  favicon: 'img/nikhilaJainFavicon.jpg',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'jnikhila', 
  projectName: 'docusaurus-multiple-sidebars', 
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/jnikhila/docusaurus-multiple-sidebars',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/nikhilaJainFavicon.jpg',
      navbar: {
        title: 'Nikhila Jain',
        logo: {
          alt: 'Nikhila Jain Logo',
          src: 'img/nikhilaJainFavicon.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'gettingStartedSidebar',
            position: 'left',
            label: 'Getting Started',
          },
          {
            type: 'docSidebar',
            sidebarId: 'deploySidebar',
            position: 'left',
            label: 'Deploy',
          },
          {
            type: 'docSidebar',
            sidebarId: 'writeCodeSidebar',
            position: 'left',
            label: 'Write Code',
          },
          {
            href: 'https://github.com/jnikhila/docusaurus-multiple-sidebars',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nikhila Jain, Technical Writer.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
