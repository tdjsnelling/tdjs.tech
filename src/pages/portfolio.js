import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content from '../components/Content'

import styles from './styles/ListPage.module.styl'

class ProjectsPage extends React.PureComponent {
  render() {
    const { data, location } = this.props
    const portfolio = data.allMarkdownRemark.edges.filter(x =>
      x.node.fields.slug.includes('/portfolio/')
    )
    return (
      <Layout location={location}>
        <Helmet>
          <title>Portfolio — Tom Snelling</title>
          <meta property="og:title" content="Work — Tom Snelling" />
        </Helmet>
        <Content>
          <Link to="/" className={styles.Back}>
            &larr; home
          </Link>
          <h1 className={styles.Heading}>Portfolio</h1>
          <p className={styles.Blurb}>
            Some examples of professional work I have completed. All projects
            are posted with permission of the client or employer.
          </p>
          <ul className={styles.List}>
            {portfolio.map((project, i) => (
              <li key={i}>
                <Link to={project.node.fields.slug} className={styles.ItemLink}>
                  <p className={styles.ItemName}>
                    {project.node.frontmatter.title}
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
    allMarkdownRemark(sort: { fields: [frontmatter___title] }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            summary
          }
        }
      }
    }
  }
`

export default ProjectsPage
