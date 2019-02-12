import React from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../Section/Section'
import styles from './notFound.scss'

export const NotFound = () => {
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.errorCode}>
            <h1>404</h1>
        </div>
        <h2 className={styles.errorText}>Page not found</h2>
        <h3>We are sorry but the page you are looking for does not exist</h3>
        <p>Back to <Link to='/' className={styles.linkBack}>homepage</Link>?</p>
      </div>
    </Section>
  );
}