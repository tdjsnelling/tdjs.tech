import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Content from '../components/Content'

import styles from './styles/404.module.scss'

class NotFoundPage extends React.PureComponent {
  render() {
    const { location } = this.props
    return (
      <Layout location={location}>
        <Content>
          <h1 className={styles.Heading}>Error 404</h1>
          <p className={styles.Text}>
            That page or resource could not be found. Why don't you head back{' '}
            <Link to="/" className={styles.Back}>
              home
            </Link>
            ?
          </p>
        </Content>
      </Layout>
    )
  }
}

export default NotFoundPage
