import React from 'react';
import PropTypes from 'prop-types';
import styles from './confirmDeleteDialog.scss'

export class  ConfirmDeleteDialog extends React.Component {
  
  // Подписываемся на события
  componentWillMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }
  
  // Отписываемся от событий
  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }
    
  // Если была отжата клавиша Esc - то закрываем диалог
  handleKeyUp = e => {
    e.preventDefault();
    if (e.which === 27) {
      this.props.onClose();
    }
  }

  // Если щелчок по фону диалога - то закрываем диалог
  handleOutsideClick = e => {
    // Используем includes, т.к. стиль CSS modules получится примерно таким - confirmDeleteDialog__backside___3Mepu
    if (e.target.className.includes('backside')) {
      e.preventDefault();
      this.props.onClose();
    }
  }

  render() {
    
    if(!this.props.isVisible)
      return null;

    return (
      <div className={styles.backside}>
        <div className={styles.box}>
          <span className={styles.close} onClick={this.props.onClose} title="Close (Esc)"></span>
          <header className={styles.header}>
            <h2>Warning!</h2>
          </header>
          <div className={styles.content}>
              <p>This will permanently delete your invoices.</p>
              <p><strong className={styles.importantText}>We will be unable to restore</strong> your invoices is deleted.</p>
          </div>
          <footer className={styles.footer}>
            <form onSubmit={this.props.onSubmit}>
              <input type="submit" value="Yes, Delete" className={styles.buttonDelete} />
              <input type="button" value="Cancel" onClick={this.props.onClose} className={styles.buttonCancel} />
            </form>
          </footer>
          </div>
      </div>
    )
  }
};

ConfirmDeleteDialog.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};