import React from 'react';
import PropTypes from 'prop-types';

import styles from './notify.scss';

export const Notify = ({ visible, type, message, onClose }) => {
 
  if(!visible)
    return null;

  const types = ['info', 'success', 'warning', 'error'];
  let t = type.toString().trim().toLowerCase();

  return (
    <div className={ types.includes(t) ? `${styles[t]}` : styles.default }  >
      <div className={ styles.content }>
        <div className={ styles.message }>{ message }</div>
        <span className={ styles.close } onClick={ onClose }></span>
      </div>
    </div>
  );
}

Notify.propTypes = {
  visible: PropTypes.bool.isRequired,
  type: PropTypes.string,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

Notify.defaultProps = {
  message: ''
}