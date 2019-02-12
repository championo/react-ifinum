import React from 'react'
import PropTypes from 'prop-types'
import styles from './section.scss'

export const Section = props => {
  return (
    <div className={styles.section}>
      { props.title ? <h2 className={styles.title}>{props.title}</h2> : null } 
      {props.children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string
};

Section.defaultProps = {
  title: ''
};