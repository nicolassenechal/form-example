import React from 'react';

import styles from './Intro.module.css';

export default class Intro extends React.Component {
    render () {
      return (
          <header className={styles.container}>
              <h2 className={styles.label}>Sharing your experience is invaluable to us.</h2>
              <p>We’d love to hear more about your role. By sharing your role description on SEEK, you’re helping others make better career choices. Your review will remain anonymous, unless you choose to enter your name below.</p>
          </header>
      );
  }
};
