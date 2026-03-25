import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "greg siraudin's blog",
  tagline: 'mostly game design stuff',
  organizationName: 'gregsiraudin',
  projectName: 'gregsiraudin.github.io',
  url: 'https://gregsiraudin.github.io',
  baseUrl: '/',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'gregoire siraudin',
      logo: {
        alt: 'logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/portfolio', label: 'Portfolio', position: 'left' },
        { to: '/misc', label: 'Misc', position: 'left' },
        //{ to: '/timeliner', label: 'Timeliner', position: 'left' },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Contact',
          items: [
            {
              label: 'Email',
              href: 'mailto:gregoire.siraudin@gmail.com',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/scinema_x',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/gregoire-siraudin/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Resume',
              href: '/files/GregoireSiraudinResume.pdf',
              target: '_blank',
            },
            {
              label: 'SoundCloud',
              href: 'https://soundcloud.com/altio92130',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Grégoire Siraudin`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: [
            './src/css/custom.scss',
            './src/css/ToggleSwitch.scss',
            './src/css/TimelineViewer.scss',
            './src/css/ContentDistribution.scss',
            './src/css/Combinatorics.scss',
            './src/css/Rules.scss',
            './src/css/Dolly.scss',
            './src/css/Timeliner.scss',
          ],
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    'docusaurus-plugin-sass',
    require.resolve('./plugins/timeliner-plugin'),
  ],
};
