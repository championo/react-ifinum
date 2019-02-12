import React from 'react'
import { Link } from 'react-router-dom'
import styles from './editableForm.scss'

export const EditableForm = props => {
   
  const { number, date_due, date_supply, comment, handleChange, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.verticalGroup}>
        <label htmlFor="number">Number:</label>
        <input name="number" type="text" defaultValue={number} onChange={handleChange} placeholder="Enter number" autoFocus />
      </div>
      <div className={styles.verticalGroup}>
        <label htmlFor="invoiceDate">Invoice Date:</label>
        <input name="invoiceDate" type="text" defaultValue={date_due} onChange={handleChange} placeholder="Select date" />
      </div>
      <div className={styles.verticalGroup}>
        <label htmlFor="supplyDate">Supply Date:</label>
        <input name="supplyDate" type="text" defaultValue={date_supply} onChange={handleChange} placeholder="Select date" />
      </div>
      <div className={styles.verticalGroup}>
        <label htmlFor="comment">Comment:</label>
        <textarea name="comment" rows="2" defaultValue={comment} onChange={handleChange}></textarea>
      </div>
      <input type="submit" className={styles.buttonEdit} value="Save" />
      <Link to='/' className={ styles.buttonCancel }>Back to list</Link>
    </form>
  );
}