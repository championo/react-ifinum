import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import {Section} from '../../Section/Section'
import styles from './invoiceInfo.scss'

export const InvoiceInfo = (invoice) => {

  const { id, direction, number, date_created, date_due, date_supply, comment } = invoice;
  
  return (
    <Section title="Invoice information">
      <dl>
        <div className={styles.groupHorizontal}>
          <dt>Id:</dt>
          <dd>{id}</dd>
        </div>
        <div className={styles.groupHorizontal}>
          <dt>Direction:</dt>
          <dd>{direction}</dd>
        </div>
        <div className={styles.groupHorizontal}>
          <dt>Number:</dt>
          <dd>{number}</dd>
        </div>
        <div className={styles.groupHorizontal}>
          <dt>Date created:</dt>
          <dd>{date_created}</dd>
        </div>
        <div className={styles.groupHorizontal}>
          <dt>Date due:</dt>
          <dd>{date_due}</dd>
        </div>
        <div className={styles.groupHorizontal}>
          <dt>Date supply:</dt>
          <dd>{date_supply}</dd>
        </div>
        <div className={styles.groupHorizontal}>
          <dt>Comment:</dt>
          <dd>{comment}</dd>
        </div> 
      </dl>
      <Link to={`/edit/${id}`} className={ styles.buttonEdit } >Edit</Link>
      <Link to='/' className={ styles.buttonCancel } >Back to list</Link>
    </Section>
  );
}

InvoiceInfo.propTypes = {
    invoice: PropTypes.shape({
        id: PropTypes.string.isRequired,
        direction: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
        date_created: PropTypes.string.isRequired,
        date_due: PropTypes.string.isRequired,
        date_supply: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired
    })
};