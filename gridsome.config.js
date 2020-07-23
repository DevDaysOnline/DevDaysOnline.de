// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const remark = {
  externalLinksRel: [],
  lazyLoadImages: false
}
module.exports = {
  siteName: 'dev-days-online',
  siteUrl: 'https://www.dev-days-online.de',
  titleTemplate: `%s - dev-days-online`,
  metadata: {
    year: 2020,
    currentIssue: 2009
  },
  templates: {
    BlogPost: '/blog/:slug',
    Session: '/session/:slug',
    Speaker: '/speaker/:slug'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'BlogPost',
        route: '/blog/:slug',
        remark
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/speakers/*.md',
        typeName: 'Speaker',
        route: '/speakers/:slug',
        remark
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/session/**/*.md',
        typeName: 'Session',
        route: '/sessions/:issue/:slug',
        remark
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/sponsor/**/*.md',
        typeName: 'Sponsor',
        remark
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      /* These are the default options. You don't need to set any options to get going.
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    }
  ]
}
