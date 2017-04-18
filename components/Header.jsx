import React from 'react';

import styles from './Header.module.css';

export default class Header extends React.Component {
    render () {
      return (
          <header className={styles.container}>
              <h1 className={styles.title}>
                  <img src='https://static.companyreview.co/seek/img/1.0/seek-logo-positive.svg' />
                  <span className={styles.label}>role descriptions</span>
              </h1>
          </header>
      );
  }
};
