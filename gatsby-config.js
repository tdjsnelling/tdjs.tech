module.exports = {
  siteMetadata: {
    title: `Magnetic Campaign Site`,
    siteUrl: `https://tdjs.tech`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tdjs.tech`,
        short_name: `tdjs.tech`,
        start_url: `/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `essays`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-87488863-1',
        head: true,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1400,
              linkImagesToOriginal: true,
              backgroundColor: '#fff',
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
