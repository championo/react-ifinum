import React from 'react'
import {  withRouter } from 'react-router';
import { getBasePath, capitalize } from '../../utils'
import styles from './header.scss'

class Header extends React.Component {

  render() {

    let baseUrl = getBasePath(this.props.location.pathname);

    return (
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span>{ ( baseUrl == null) ? 'Invoices' : capitalize(baseUrl.toString()) }</span>
        </h1>
      </div>
    );
  }
}

export default withRouter(Header);