import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Layout from '../components/Layout'
import Content from '../components/Content'

import styles from './styles/Index.module.styl'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Content>
      <img
        className={styles.ProfilePhoto}
        src="https://pbs.twimg.com/profile_images/875435865534869504/73SZbGR5_400x400.jpg"
        alt="profile photo"
      />
      <h1 className={styles.Heading}>tom snelling</h1>
      <p>I am a full-stack web developer from the UK.</p>
      <p>
        I currently work as a placement front-end developer for Clock, and study
        computer science at Loughborough University.
      </p>
      <ul className={styles.Links}>
        <li>
          <Link to="/experience">experience</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <OutboundLink href="https://github.com/tdjsnelling" target="_blank">
            github
          </OutboundLink>
        </li>
      </ul>
      <p>want to work together? </p>
      <p>
        I am available for freelance web projects. please contact me on{' '}
        <OutboundLink href="https://twitter.com/tdjsnelling" target="_blank">
          twitter
        </OutboundLink>{' '}
        or send an email to{' '}
        <a href="mailto:tom@snelling.xyz" target="_blank">
          tom@snelling.xyz
        </a>
        .
      </p>
      <p className={styles.Footer}>
        &copy; {new Date().getFullYear()} &bull; <a href="/keybase.txt">pgp</a>
      </p>
    </Content>
  </Layout>
)

export default IndexPage
