import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content from '../components/Content'

import styles from './styles/ListPage.module.styl'

class ExperiencePage extends React.PureComponent {
  render() {
    const { data, location } = this.props
    const projects = data.allMarkdownRemark.edges.filter(x =>
      x.node.fields.slug.includes('/experience/')
    )
    return (
      <Layout location={location}>
        <Helmet>
          <title>Experience — Tom Snelling</title>
          <meta property="og:title" content="Experience — Tom Snelling" />
        </Helmet>
        <Content>
          <Link to="/" className={styles.Back}>
            &larr; back
          </Link>
          <h1 className={styles.Heading}>experience</h1>
          <p className={styles.Blurb}>
            Listed below are some examples of professional experience. These
            could be employment, side businesses or freelance projects.
          </p>
          <ul className={styles.List}>
            {projects.map((project, i) => (
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

export default ExperiencePage
