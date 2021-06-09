import React from 'react'
import { Link, graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { useLastFM } from 'use-last-fm'
import Layout from '../components/Layout'
import Content from '../components/Content'
import Divider from '../components/Divider'

import styles from './styles/Index.module.scss'

const IndexPage = ({ location, data }) => {
  const lastFM = useLastFM('tdjsnelling', 'efb1c4959521f2452a8755f7ea6c9d9d')
  console.log(lastFM)

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
          <img
            className={styles.Memoji}
            src="/me.png"
            alt="Memoji of Tom Snelling"
          />
          <h1 className={styles.Hello}>
            Hi there! I’m <span className={styles.Name}>Tom Snelling</span>. I
            am a full-stack web developer from the UK.
          </h1>
          <div className={styles.Bio}>
            <p>
              I work with people like <span>you</span> to create professional,
              meaningful, and performant online experiences. I love to
              experiment with technologies like <span>Node</span> and{' '}
              <span>React</span> to build first-class sites and applications.
            </p>
            <p>
              Currently building stuff at{' '}
              <a href="https://northflank.com" target="_blank">
                Northflank
              </a>
              .
            </p>
          </div>
        </div>
        <div className={styles.ContentItems}>
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
          <h2 className={styles.ListTitle} id="projects">
            projects
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
        </div>
        <Divider />
        {lastFM.status === 'playing' && (
          <div className={styles.NowListening}>
            <div className={styles.Record}>
              <img
                src={lastFM.song.art}
                alt={`Cover art for ${lastFM.song.name} by ${lastFM.song.artist}`}
              />
            </div>
            <div>
              <p>now listening</p>
              <p>
                {lastFM.song.name}
              </p>
              <p>{lastFM.song.artist} &mdash; {lastFM.song.album}</p>
            </div>
          </div>
        )}
        <p className={styles.WorkTogether}>
          Want to get in touch? You can email me at{' '}
          <a
            href="mailto:hello@tdjs.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            hello@tdjs.tech
          </a>{' '}
          or message me via Twitter at{' '}
          <OutboundLink
            href="https://twitter.com/tdjsnelling"
            target="_blank"
            rel="noopener noreferrer"
          >
            @tdjsnelling
          </OutboundLink>
          .
        </p>
        <p className={styles.WorkTogether}>
          You can also check out more work over at{' '}
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
          <a href="/key.asc.txt" target="_blank" rel="noopener noreferrer">
            pgp public key
          </a>
          <a rel="me" href="https://merveilles.town/@tdjs" />
        </p>
      </Content>
    </Layout>
  )
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
