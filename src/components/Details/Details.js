import React from 'react'
import { connect } from 'react-redux'
import { InvoiceInfo }from './InvoiceInfo/InvoiceInfo'
import { NotFound } from '../NotFound/NotFound'

class Details extends React.Component {

  render() {
    let findedInvoice = this.props.invoices.find(x => x.id === this.props.match.params.id);

    if (findedInvoice === undefined)
      return <NotFound/>;

    return (
      <InvoiceInfo {...findedInvoice} />
    );
  } 
}

const mapStateToProps = state => {
  return {
    invoices: state.invoices
  };
}

export default connect(mapStateToProps)(Details);