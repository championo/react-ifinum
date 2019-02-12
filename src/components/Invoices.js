import React from 'react'
import { Actions } from './Actions'
import Table from './Table/Table'
import { Section } from './Section/Section'
import { connect } from 'react-redux'
import { Notify } from './Notify/Notify';
import { hideNotify } from '../redux/actions/actions';

 class Invoices extends React.Component {

  render() {
      
    const { type, text, visible } = this.props.notify;

    return (
      <div>
        <Notify visible={visible} type={type} message={text} onClose={this.props.callHideNotify} />
        <Actions invoices={ this.props.invoices } />
        <Section title="Invoices">
          <Table invoices={ (this.props.filterResults && this.props.filterText !== '') ? this.props.filterResults : this.props.invoices } />
        </Section> 
      </div>
    );
  } 
}

const mapStateToProps = state => {
  return {
    invoices: state.invoices,
    filterText: state.filterText,
    filterResults: state.filterResults,
    notify: state.notify
  };
}

const mapDispatchToProps = dispatch => {
  return {
    callHideNotify: () => {
      dispatch(hideNotify());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Invoices)