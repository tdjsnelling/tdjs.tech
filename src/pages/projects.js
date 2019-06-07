import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content from '../components/Content'

import styles from './styles/ListPage.module.scss'

class ProjectsPage extends React.PureComponent {
  render() {
    const { data, location } = this.props
    const projects = data.allMarkdownRemark.edges.filter(x =>
      x.node.fields.slug.includes('/projects/')
    )
    return (
      <Layout location={location}>
        <Helmet>
          <title>Projects — Tom Snelling</title>
          <meta property="og:title" content="Projects — Tom Snelling" />
        </Helmet>
        <Content>
          <Link to="/" className={styles.Back}>
            &larr; home
          </Link>
          <h1 className={styles.Heading}>Projects</h1>
          <p className={styles.Blurb}>
            Listed below are some personal projects. Most (if not all) projects
            posted here will be open source software,{' '}
            <a
              href="https://github.com/tdjsnelling/tdjs.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              this site
            </a>{' '}
            included.
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

export default ProjectsPage
