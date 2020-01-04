import React from 'react'
import { Helmet } from 'react-helmet'
import classnames from 'classnames'

import styles from './Layout.module.scss'

class Layout extends React.Component {
  render() {
    const { children, location, light, transition } = this.props
    return (
      <div
        className={classnames(
          styles.Layout,
          light && styles.light,
          transition && styles.transition
        )}
      >
        <Helmet htmlAttributes={{ lang: 'en' }}>
          <meta charSet="utf-8" />
          <title>Tom Snelling — Full-stack web developer</title>
          <meta name="author" content="Tom Snelling" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Tom Snelling — Full-stack web developer" />
          <meta
            name="description"
            content="Full-stack web developer from the UK. Computer science at Loughborough University."
          />
          <meta
            property="og:description"
            content="Full-stack web developer from the UK. Computer science at Loughborough University."
          />
          <meta property="og:site_name" content="Tom Snelling" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={location.href} />
          <meta property="og:image" content={location.origin + '/meta.png'} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="Tom Snelling" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700"
          />
        </Helmet>
        {children}
      </div>
    )
  }
}

export default Layout
