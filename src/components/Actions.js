import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search/Search'
import { Section } from './Section/Section'
import styles from '../assets/styles/main.scss'

export const Actions = () => {
  return (
    <Section title="Actions">
      <div className={ styles.groupHorizontal } >
        <Link to='/create' className={ styles.buttonAction } >Add new</Link>
        <Link to='/clear' className={ styles.buttonAction } >Delete all</Link>
        <Search />
      </div>
    </Section>
  );
}