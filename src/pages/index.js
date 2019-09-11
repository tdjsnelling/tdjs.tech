import React from 'react'
import { Link, graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Content from '../components/Content'

import styles from './styles/Index.module.scss'

class IndexPage extends React.PureComponent {
  render() {
    const { location, data } = this.props

    const portfolioItems = data.allMarkdownRemark.edges.filter(x =>
      x.node.fields.slug.includes('/portfolio/')
    )

    const projectItems = data.allMarkdownRemark.edges.filter(x =>
      x.node.fields.slug.includes('/projects/')
    )

    const blogItems = data.allMarkdownRemark.edges.filter(x =>
      x.node.fields.slug.includes('/blog/')
    )

    return (
      <Layout location={location}>
        <Helmet>
          <title>Tom Snelling — Full-stack web developer</title>
          <meta
            property="og:title"
            content="Tom Snelling — Full-stack web developer"
          />
        </Helmet>
        <Content>
          <div className={styles.Panel}>
            <h1 className={styles.Heading}>
              <span className={styles.Line}>
                Hi there! I’m <span className={styles.Name}>Tom Snelling</span>.{' '}
              </span>
              <span className={styles.Line}>I am a full-stack web </span>
              <span className={styles.Line}>developer from the UK. </span>
              <span className={styles.Line}>Also: lover of JavaScript, </span>
              <span className={styles.Line}>advocate of digital rights</span>
              <span className={styles.Line}>and open source, currently</span>
              <span className={styles.Line}>
                working at{' '}
                <OutboundLink
                  href="https://clock.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clock
                </OutboundLink>
                .
              </span>
            </h1>
            <p className={styles.Date}>{new Date().getFullYear()}</p>
            <p className={styles.ScrollDown}>scroll</p>
          </div>
          <h2 className={styles.ListTitle} id="portfolio">
            Portfolio
          </h2>
          <ul className={styles.ItemLinks}>
            {portfolioItems.map((item, i) => (
              <li key={i}>
                <Link to={item.node.fields.slug} state={{ fromHome: true }}>
                  {item.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className={styles.ListTitle} id="projects">
            Open source
          </h2>
          <ul className={styles.ItemLinks}>
            {projectItems.map((item, i) => (
              <li key={i}>
                <Link to={item.node.fields.slug} state={{ fromHome: true }}>
                  {item.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className={styles.ListTitle} id="blog">
            Blog
          </h2>
          <ul className={styles.ItemLinks}>
            {blogItems.map((item, i) => (
              <li key={i}>
                <Link to={item.node.fields.slug} state={{ fromHome: true }}>
                  {item.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className={styles.WorkTogether}>
            Want to work together? Send me an email at{' '}
            <a
              href="mailto:tom@snelling.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              tom@snelling.xyz
            </a>
            . You can check out more work over at{' '}
            <OutboundLink
              href="https://github.com/tdjsnelling"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </OutboundLink>
            .
          </p>
          <p className={styles.Footer}>
            &copy; {new Date().getFullYear()}
            &nbsp;/&nbsp;
            <a href="/keybase.txt" target="_blank" rel="noopener noreferrer">
              proof
            </a>
            &nbsp;/&nbsp;
            <a href="/key.asc.txt" target="_blank" rel="noopener noreferrer">
              pgp public key
            </a>
            <a rel="me" href="https://mastodon.social/@tdjsnelling" />
          </p>
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

export default IndexPage
