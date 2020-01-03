import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { DiscussionEmbed } from 'disqus-react'
import Layout from '../components/Layout'
import Content from '../components/Content'

import styles from './ContentPage.module.scss'

class ContentPage extends React.PureComponent {
  render() {
    const { data, location } = this.props
    const content = data.markdownRemark
    const type = content.fields.slug
    const isBlog = type.includes('/blog/')

    return (
      <Layout location={location} light>
        <Helmet>
          <title>{`${content.frontmatter.title} — Tom Snelling`}</title>
          <meta
            property="og:title"
            content={`${content.frontmatter.title} — Tom Snelling`}
          />
          <meta name="description" content={content.frontmatter.summary} />
          <meta
            property="og:description"
            content={content.frontmatter.summary}
          />
        </Helmet>
        <Content narrow>
          <Link to="/" className={styles.HomeLink}>tdjs.tech</Link>
          <h1 className={styles.Title}>{content.frontmatter.title}</h1>
          {isBlog && <p className={styles.Date}>Posted {content.frontmatter.date}</p>}
          <p className={styles.Summary}>{content.frontmatter.summary}</p>
          <div
            className={styles.Body}
            dangerouslySetInnerHTML={{ __html: content.html }}
          />
          {!!content.frontmatter.link && (
            <OutboundLink
              href={content.frontmatter.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ContentLink}
            >
              {content.frontmatter.link} &rarr;
            </OutboundLink>
          )}
          {isBlog && (
            <DiscussionEmbed
              shortname="tdjs-tech"
              config={{ url: location.href, title: content.frontmatter.title }}
            />
          )}
        </Content>
      </Layout>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        summary
        link
        date
      }
    }
  }
`

export default ContentPage
