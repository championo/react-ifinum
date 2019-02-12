import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { NotFound } from './NotFound/NotFound'
import { editInvoice } from '../redux/actions/actions'
import ListErrors from './ListErrors/ListErrors'
import { Section } from './Section/Section'
import { getErrors } from '../utils'
import { EditableForm } from './EditableForm/EditableForm';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: '',
      invoiceDate: '',
      supplyDate: '',
      comment: '',
      invoice: null,
      errors: []
    };
  }

 componentDidMount() {
    
    let findedInvoice = this.props.invoices.find(x => x.id === this.props.match.params.id);

    if (findedInvoice !== undefined) {
     
      this.setState({ number: findedInvoice.number,
                      invoiceDate: findedInvoice.date_due,
                      supplyDate: findedInvoice.date_supply,
                      comment: findedInvoice.comment
      });
      this.setState({ invoice: findedInvoice });
    }
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

    if (!errors.length)
    {
        const editedInvoice = {
          id: this.state.invoice.id,
          number: parseInt(this.state.number),
          date_due: this.state.invoiceDate,
          date_supply: this.state.supplyDate,
          comment: this.state.comment
        };
        console.log(editedInvoice);
        this.props.onSubmit(editedInvoice);

        this.context.router.history.push(`/`);
    }
  }

  render() {

    if (this.state.invoice === null)
      return <NotFound/>;

    return (
      <Section>
        { (this.state.errors.length > 0) && <ListErrors {...this.state.errors} /> }
        <EditableForm {...this.state.invoice}
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}/>
      </Section>
    );
  }

  static contextTypes = {
    router: PropTypes.object
  }
}

const mapStateToProps = state => {
  return {
    invoices: state.invoices
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: invoice => { 
      dispatch(editInvoice(invoice));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);