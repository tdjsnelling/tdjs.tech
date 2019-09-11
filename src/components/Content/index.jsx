import React from 'react'
import classnames from 'classnames'

import styles from './Content.module.scss'

class Content extends React.PureComponent {
  render() {
    const { children, narrow } = this.props
    return (
      <div className={classnames(styles.Content, narrow && styles.narrow)}>
        {children}
      </div>
    )
  }
}

export default Content
