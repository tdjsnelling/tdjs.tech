import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Layout from '../components/Layout'
import Content from '../components/Content'

import styles from './Project.module.styl'

class ProjectTemplate extends React.PureComponent {
  render () {
    const { data, location } = this.props
    const project = data.markdownRemark
    return (
      <Layout location={location}>
        <Helmet>
          <title>{`${project.frontmatter.title} — Projects — Tom Snelling`}</title>
          <meta property="og:title" content={`${project.frontmatter.title} — Projects — Tom Snelling`} />
          <meta name="description" content={project.frontmatter.summary} />
          <meta property="og:description" content={project.frontmatter.summary} />
        </Helmet>
        <Content>
          <Link to="/projects" className={styles.Back}>&larr; back</Link>
          <h1 className={styles.Title}>{project.frontmatter.title}</h1>
          <p className={styles.Summary}>{project.frontmatter.summary}</p>
          <div className={styles.Body} dangerouslySetInnerHTML={{ __html: project.html }} />
          <OutboundLink href={project.frontmatter.link} target="_blank" className={styles.ProjectLink}>{project.frontmatter.link} &rarr;</OutboundLink>
        </Content>
      </Layout>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        summary
        link
      }
    }
  }
`

export default ProjectTemplate
