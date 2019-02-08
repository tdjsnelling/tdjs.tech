import React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Layout from '../components/Layout'
import Content from '../components/Content'
import Perlin from '../components/Perlin'

import styles from './styles/Index.module.styl'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Content>
      <div className={styles.NoiseField}>
        <Perlin />
      </div>
      <h1 className={styles.Heading}>tom snelling</h1>
      <p className={styles.HomeCopy}>I am a full-stack web developer from the UK.</p>
      <p className={styles.HomeCopy}>I currently work as a placement front-end developer for Clock, and study computer science at Loughborough University.</p>
      <ul className={styles.Links}>
        <li><Link to="/projects">projects</Link></li>
        <li><OutboundLink href="https://twitter.com/tdjsnelling" target="_blank">twitter</OutboundLink></li>
        <li><OutboundLink href="https://github.com/tdjsnelling" target="_blank">github</OutboundLink></li>
      </ul>
      <p className={styles.HomeCopy}>want to work together? I am available for freelance web projects, or bespoke automation tools / bots. please send an email to <a href="mailto:tom@snelling.xyz" target="_blank">tom@snelling.xyz</a>.</p>
      <p className={classnames(styles.HomeCopy, styles.Copy)}>&copy; {(new Date()).getFullYear()} &bull; <a href="/keybase.txt">pgp</a></p>
    </Content>
  </Layout>
)

export default IndexPage
