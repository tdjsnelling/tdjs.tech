const createStylusLoader = require('./config/stylus-loader')
const { createFilePath } = require('gatsby-source-filesystem')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions
}) => {
  const isProd = !stage.includes(`develop`)
  const isSSR = stage.includes(`html`)

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.styl$/,
          use: [
            (isProd && !isSSR) ? MiniCssExtractPlugin.loader : require.resolve('universal-style-loader'),
            ...createStylusLoader()
          ]
        }
      ]
    }
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'projects' })
    createNodeField({
      node,
      name: 'slug',
      value: `/project${slug}`
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/project.js'),
        context: {
          slug: node.fields.slug
        }
      })
    })
  })
}
