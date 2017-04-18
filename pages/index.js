import React from 'react'
import Header from '../components/Header';
import RoleForm from '../components/RoleForm';
import Intro from '../components/Intro';

import styles from './index.module.css';

const onSubmit = (values) => {
    console.log('submit', values)
}

export default class Index extends React.Component {

  render () {
    return (
      <div className={styles.container}>
          <Header />
          <section className={styles.section}>
              <Intro />
              <RoleForm onSubmit={onSubmit}/>
          </section>
      </div>
    )
  }
}
