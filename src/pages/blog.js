import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content from '../components/Content'

import styles from './styles/ListPage.module.scss'

class ProjectsPage extends React.PureComponent {
  render() {
    const { data, location } = this.props
    const blogPosts = data.allMarkdownRemark.edges.filter(x =>
      x.node.fields.slug.includes('/blog/')
    )
    return (
      <Layout location={location}>
        <Helmet>
          <title>Blog — Tom Snelling</title>
          <meta property="og:title" content="Blog — Tom Snelling" />
        </Helmet>
        <Content>
          <Link to="/" className={styles.Back}>
            &larr; home
          </Link>
          <h1 className={styles.Heading}>Blog</h1>
          <ul className={styles.List}>
            {blogPosts.map((project, i) => (
              <li key={i}>
                <Link to={project.node.fields.slug} className={styles.ItemLink}>
                  <p className={styles.ItemName}>
                    {project.node.frontmatter.title}
                  </p>
                  <p className={styles.ItemDate}>
                    {project.node.frontmatter.date}
                  </p>
                  <p className={styles.ItemDesc}>
                    {project.node.frontmatter.summary}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Content>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date
          }
        }
      }
    }
  }
`

export default ProjectsPage
