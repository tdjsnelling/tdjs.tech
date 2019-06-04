import React from 'react'
import { Helmet } from 'react-helmet'

import styles from './Layout.module.scss'

class Layout extends React.Component {
  render() {
    const { children, location } = this.props
    return (
      <div className={styles.Layout}>
        <Helmet htmlAttributes={{ lang: 'en' }}>
          <meta charSet="utf-8" />
          <title>Tom Snelling</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Tom Snelling" />
          <meta
            name="description"
            content="Full-stack JavaScript developer from the UK. Placement front-end developer for Clock. Computer science at Loughborough University."
          />
          <meta
            property="og:description"
            content="Full-stack JavaScript developer from the UK. Placement front-end developer for Clock. Computer science at Loughborough University."
          />
          <meta property="og:site_name" content="Tom Snelling" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={location.href} />
          <meta property="og:image" content={location.origin + '/meta.png'} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="Tom Snelling" />
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.min.js" /> */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Ubuntu:400,700|Source+Code+Pro:400,700"
          />
        </Helmet>
        {children}
      </div>
    )
  }
}

export default Layout
