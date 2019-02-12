import React from 'react';
import PropTypes from 'prop-types';
import styles from './listErrors.scss';

const ListErrors = (errors) => {

  if (errors) {
    return (
      <ul className={ styles.group }>
          { Object.keys(errors).map((index) => <li key={index} className={styles.errorText}>{ errors[index] }</li>) }
      </ul>
    );
  } else {
    return null;
  }
}

export default ListErrors;

ListErrors.propTypes = {
  errors: PropTypes.array
};