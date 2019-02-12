import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { store } from '../redux/store/store'
import { ConfirmDeleteDialog } from './ConfirmDeleteDialog/ConfirmDeleteDialog'
import { deleteAll, showNotify } from '../redux/actions/actions'
import { Section } from './Section/Section'
import styles from '../assets/styles/main.scss'

class DeleteAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };
  }

  handleOpenDialog = e => {
    this.setState({ isShow: true });
  }

  handleCloseDialog = e => {
    // Зыкрываем диалоговое окно
    this.setState({ isShow: false });
    // Перенаправляем пользователя на главную страницу
    this.context.router.history.push(`/`);
  }

  deleteInvoices = () => {
    this.props.callDelete();
    this.context.router.history.push(`/`);
  }

  render() {
    return (
      <Section title="Are you sure you want to delete all invoices?">
        <button onClick={this.handleOpenDialog} className={styles.buttonDelete}>Delete</button>
        <Link to='/' className={styles.buttonCancel}>Back to list</Link>
        <ConfirmDeleteDialog isVisible={this.state.isShow} onSubmit={this.deleteInvoices} onClose={this.handleCloseDialog} />
      </Section>
    );
  } 
  
  static contextTypes = {
    router: PropTypes.object
  }
}

const mapDispatchToProps = (dispatch) => {
   
    return {
        callDelete: () => { 
            dispatch(deleteAll());
           setTimeout(() => {
                if (!store.getState().invoices.length) {
                  dispatch(showNotify('success', `All invoices was successfully deleted`));
                } 
                else {
                  dispatch(showNotify('warning', `Invoices cannot delete. Please try again later`));
                }
            }, 200);
        }
    }
};

export default connect(null, mapDispatchToProps)(DeleteAll);