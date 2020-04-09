import React from 'react'
import { Link, graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Layout from '../components/Layout'
import Content from '../components/Content'
import Divider from '../components/Divider'

import styles from './styles/Index.module.scss'

class IndexPage extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      isMobile: false,
    }
    this.onBreakpointChange = this.onBreakpointChange.bind(this)
  }

  componentDidMount() {
    this.breakpoint = window.matchMedia('(max-width: 601px)')
    this.breakpoint.addListener(this.onBreakpointChange)
    this.setState({ isMobile: this.breakpoint.matches })
  }

  onBreakpointChange(e) {
    this.setState({ isMobile: e.matches })
  }

  render() {
    const { location, data } = this.props

    const portfolioItems = data.allMarkdownRemark.edges.filter((x) =>
      x.node.fields.slug.includes('/portfolio/')
    )

    const projectItems = data.allMarkdownRemark.edges.filter((x) =>
      x.node.fields.slug.includes('/projects/')
    )

    const blogItems = data.allMarkdownRemark.edges.filter((x) =>
      x.node.fields.slug.includes('/blog/')
    )
    blogItems.sort((x, y) => {
      if (x.node.frontmatter.date > y.node.frontmatter.date) return -1
      else if (x.node.frontmatter.date < y.node.frontmatter.date) return 1
      else return 0
    })

    return (
      <Layout location={location} light>
        <Content>
          <div className={styles.Panel}>
            <h1 className={styles.Wave}>👋</h1>
            <h1 className={styles.Hello}>
              Hi there! I’m <span className={styles.Name}>Tom</span>{' '}
              <span className={styles.Name}>Snelling</span>. I am a full-stack
              web developer from the UK.
            </h1>
            <div className={styles.Bio}>
              <p>
                I work with people like <span>you</span> to create professional,
                meaningful, and performant online experiences. I love to
                experiment with technologies like <span>Node</span> and{' '}
                <span>React</span> to build first-class sites and applications.
              </p>
            </div>
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
                <p className={styles.PostDate}>{item.node.frontmatter.date}</p>
                <Link to={item.node.fields.slug} state={{ fromHome: true }}>
                  {item.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
          <Divider />
          <p className={styles.WorkTogether}>
            Want to work together? I’d be delighted! Email me at{' '}
            <a
              href="mailto:hello@tdjs.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              hello@tdjs.tech
            </a>{' '}
            or message me on Twitter{' '}
            <OutboundLink
              href="https://twitter.com/tdjsnelling"
              target="_blank"
              rel="noopener noreferrer"
            >
              @tdjsnelling
            </OutboundLink>
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
            <a href="/keybase.txt" target="_blank" rel="noopener noreferrer">
              keybase proof
            </a>
            &nbsp;&bull;&nbsp;
            <a href="/key.asc.txt" target="_blank" rel="noopener noreferrer">
              pgp public key
            </a>
            <a rel="me" href="https://merveilles.town/@tdjs" />
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
            date
          }
        }
      }
    }
  }
`

export default IndexPage
