import React from 'react'

import styles from './Content.module.scss'

class Content extends React.PureComponent {
  render() {
    const { children } = this.props
    return <div className={styles.Content}>{children}</div>
  }
}

export default Content
