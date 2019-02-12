import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Section } from './Section/Section'
import ListErrors from './ListErrors/ListErrors'
import { CREATE_INVOICE } from '../redux/actions/actionTypes'
import { getErrors } from '../utils'
import { EditableForm } from './EditableForm/EditableForm';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        number: '',
        invoiceDate: '',
        supplyDate: '',
        comment: '',
        errors: []
    };
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();

    let errors = getErrors(this.state.number, this.state.invoiceDate, this.state.supplyDate);
    this.setState({ errors: errors });

    if (errors.length === 0)
    {
      const newInvoice = {
          number: parseInt(this.state.number),
          date_due: this.state.invoiceDate,
          date_supply: this.state.supplyDate,
          comment: this.state.comment,
      };
      
      this.props.onSubmit(newInvoice);
      this.context.router.history.push(`/`);
    }
  }

  render() {
    return (
      <Section>
        { (this.state.errors.length > 0) && <ListErrors {...this.state.errors} /> }
        <EditableForm number={this.state.number} 
                      invoiceDate={this.state.invoiceDate} 
                      supplyDate={this.state.supplyDate} 
                      comment={this.state.comment}
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}/>
      </Section>
    );
  }

  static contextTypes = {
    router: PropTypes.object
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: invoice =>
    dispatch({ type: CREATE_INVOICE, invoice })
});

export default connect(null, mapDispatchToProps)(Create);