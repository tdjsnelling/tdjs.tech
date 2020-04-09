import React from 'react'
import { Helmet } from 'react-helmet'
import classnames from 'classnames'

import styles from './Layout.module.scss'

class Layout extends React.Component {
  constructor() {
    super()
    this.state = {
      prefersDark: false,
    }
  }

  componentDidMount() {
    const match = window.matchMedia('(prefers-color-scheme:dark)')
    const detectTheme = () => {
      console.log(match)
      if (match.matches) {
        this.setState({ prefersDark: true })
      }
    }
    match.addListener(detectTheme)
    detectTheme()
  }

  render() {
    const { children, location, light, transition } = this.props
    const { prefersDark } = this.state
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
          <meta
            property="og:title"
            content="Tom Snelling — Full-stack web developer"
          />
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
          {prefersDark ? (
            <link
              rel="icon"
              media="(prefers-color-scheme:dark)"
              href="favicon-light.png?v=1"
              type="image/png"
            />
          ) : (
            <link
              rel="icon"
              media="(prefers-color-scheme:light)"
              href="favicon.png?v=1"
              type="image/png"
            />
          )}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700|Sen:400,700"
          />
        </Helmet>
        {children}
      </div>
    )
  }
}

export default Layout
