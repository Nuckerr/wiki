module.exports = {
  title: 'nWiki',
  tagline: 'Official wiki for Nucker products',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Nuckerr', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'nWiki',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/nuckerr/wiki',
          label: 'GitHub',
          position: 'right',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitch',
              href: 'https://nckr.link/twitch',
            },
            {
              label: 'Discord',
              href: 'https://nckr.link/discord',
            },
            {
              label: 'Twitter',
              href: 'https://nckr.link/twitter',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/nuckerr/wiki',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} nWiki, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/nuckerr/wiki',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
