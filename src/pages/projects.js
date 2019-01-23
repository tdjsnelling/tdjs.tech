import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content from '../components/Content'

import styles from './styles/Projects.module.styl'

class ProjectsPage extends React.PureComponent {
  render () {
    const { data } = this.props
    const projects = data.allMarkdownRemark.edges
    return (
      <Layout>
        <Content>
          <Link to="/" className={styles.Back}>&larr; back</Link>
          <h1 className={styles.Heading}>projects</h1>
          <p>Listed below are some personal projects. Through Clock, I have had the opportunity to work on websites for clients such as The Wall Street Journal, RIBA, and Contagious Communications.</p>
          <ul className={styles.Projects}>
            {projects.map((project, i) => (
              <li key={i}>
                <Link to={project.node.fields.slug}>
                  <p className={styles.ProjectName}>{project.node.frontmatter.title}</p>
                  <p className={styles.ProjectDesc}>{project.node.frontmatter.summary}</p>
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
