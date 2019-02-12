import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './table.scss';


export const Row = ({ invoice, deleteInvoice }) => {

  const { id, number, date_created, date_supply, comment } = invoice;
  //console.log(typeof(number));
  return (
    <tr>
      <td>
        {date_created}
      </td>
      <td>
        <Link to={`/details/${id}`} className={styles.linkDetails}>{number}</Link>
      </td>
      <td>
        {date_supply}
      </td>
      <td>
        {comment}
      </td>
      <td>
          <Link to={`/edit/${id}`} className={styles.buttonEdit}>Edit</Link>
          <button onClick={() => deleteInvoice(id)} className={styles.buttonDelete}>Delete</button>
      </td>
    </tr>
  );
}

Row.propTypes = {
  invoice: PropTypes.shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      date_created: PropTypes.string.isRequired,
      date_supply: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired
  }),
  deleteInvoice: PropTypes.func.isRequired
};

