import React from 'react'
import { Helmet } from 'react-helmet'

import './Layout.styl'

class Layout extends React.Component {
  render () {
    const { children } = this.props
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Tom Snelling</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.min.js" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu:400,700|Source+Code+Pro:400,700" />
        </Helmet>
        {children}
      </React.Fragment>
    )
  }
}

export default Layout
