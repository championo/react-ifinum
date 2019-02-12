import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actions'
import styles from './search.scss'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.inputRef = React.createRef();
  }

  handleChange = e => {
    e.preventDefault();
    this.props.actions.changeSearchString(e.target.value);
  }

  handleClick = e => {
    this.props.actions.clearSearchString();
    this.inputRef.current.focus();
  }

    render() {
      return (
        <div className={ styles.textBox }>
          <input ref={this.inputRef} 
                  type="text" 
                  value={this.props.text} 
                  onChange={this.handleChange} 
                  placeholder="Search invoice by number here..." 
                  className={ styles.text } />
          <button onClick={this.handleClick} className={(this.props.text.length > 0 ? styles.clear : styles.none)}>&times;</button>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    text: state.filterText
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)