module.exports = {
  siteMetadata: {
    title: `Magnetic Campaign Site`,
    siteUrl: `https://tdjs.tech`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tdjs.tech`,
        short_name: `tdjs.tech`,
        start_url: `/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `essays`,
        path: `${__dirname}/src/projects/`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingID: 'UA-87488863-1',
        respectDNT: true
      }
    },
    `gatsby-plugin-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
}
