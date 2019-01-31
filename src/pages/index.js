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
      <p className={styles.HomeCopy}>I am a full-stack JavaScript developer from the UK.</p>
      <p className={styles.HomeCopy}>I started and co-own Check Me Out, currently work as a placement front-end developer for Clock, and study computer science at Loughborough University.</p>
      <ul className={styles.Links}>
        <li><Link to="/projects">projects</Link></li>
        <li><OutboundLink href="https://twitter.com/tdjsnelling" target="_blank">twitter</OutboundLink></li>
        <li><OutboundLink href="https://github.com/tdjsnelling" target="_blank">github</OutboundLink></li>
        <li><a href="mailto:hello@tdjs.tech">email</a></li>
      </ul>
      <p className={styles.HomeCopy}><a href="/keybase.txt">here</a> you can view the verification of this website and find my PGP fingerprint.</p>
      <p className={classnames(styles.HomeCopy, styles.Copy)}>&copy; {(new Date()).getFullYear()}</p>
    </Content>
  </Layout>
)

export default IndexPage
