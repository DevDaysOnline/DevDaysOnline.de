// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'dev-days-online',
  siteUrl: 'https://www.dev-days-online.de',
  titleTemplate: `%s - dev-days-online`,
  metadata: {
    year: 2021
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
        route: '/blog/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/speakers/*.md',
        typeName: 'Speaker',
        route: '/speaker/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/session/**/*.md',
        typeName: 'Session',
        route: '/session/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/sponsor/**/*.md',
        typeName: 'Sponsor'
      }
    }
  ]
}
