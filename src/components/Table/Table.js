import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { deleteInvoice, showNotify } from '../../redux/actions/actions'
import { Header } from './Header'
import { Row } from './Row'

import { isNull } from 'util';

const Table = ({ invoices, callDelete }) => {

  if (isNull(invoices) || !invoices.length) {
    return (
      <p>Sorry, no invoices</p>
    );
  }

  const tableItems = invoices.map((invoice) => <Row key={invoice.id} invoice={invoice} deleteInvoice={callDelete} />);

  return (
    <table>
      <Header />
      <tbody>
        {tableItems}
      </tbody>
    </table>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    callDelete: (id) => {
      // Получаем номер счета, который собираемся удалить (нужно для текста сообщения)
      const { number } = ownProps.invoices.find(x => x.id === id);
      // Удаляем счет
      dispatch(deleteInvoice(id));
      // Через 0.2 сек проверяем удалился ли счет и выдаем уведомление
      setTimeout(() => {
        if (!ownProps.invoices.includes(x => x.id === id)) {
          dispatch(showNotify('success', `Invoice #${number} was successfully deleted`));
        } 
        else {
          dispatch(showNotify('warning', `Invoice #${number} cannot delete. Please try again later`));
        }
      }, 200);
    }
  };
};

Table.propTypes = {
  invoices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      date_created: PropTypes.string.isRequired,
      date_supply: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired
    })
  )
};

Table.defaultProps = {
  invoices: []
};

export default connect(null, mapDispatchToProps)(Table);