import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Layout from '../components/Layout'
import Content from '../components/Content'

import styles from './styles/Index.module.scss'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Content>
      <img
        className={styles.ProfilePhoto}
        src="https://pbs.twimg.com/profile_images/875435865534869504/73SZbGR5_400x400.jpg"
        alt="profile photo"
      />
      <h1 className={styles.Heading}>Tom Snelling</h1>
      <p>
        <strong className={styles.Hi}>Hi there!</strong> I'm Tom, and I am a
        full-stack web developer from the UK. I am a lover of JavaScript,
        advocate of digital privacy and free speech, and a passionate
        entrepreneur.
      </p>
      <p>
        I'm currently working as a front-end developer for{' '}
        <a href="https://clock.co.uk" target="_blank" rel="noopener noreferrer">
          Clock
        </a>
        , and studying computer science at Loughborough University.
      </p>
      <ul className={styles.Links}>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <OutboundLink
            href="https://github.com/tdjsnelling"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </OutboundLink>
        </li>
      </ul>
      <p>
        Want to work together? I'd love to! Please contact me on{' '}
        <OutboundLink
          href="https://twitter.com/tdjsnelling"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </OutboundLink>{' '}
        or send an email to{' '}
        <a
          href="mailto:tom@snelling.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          tom@snelling.xyz
        </a>
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
          pgp
        </a>
      </p>
    </Content>
  </Layout>
)

export default IndexPage
