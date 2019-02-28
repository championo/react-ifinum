import * as types from '../actions/actionTypes'
import { getGuid, getHexId, getCreationDate } from '../../utils'

export default function(state = {}, action) {
  switch (action.type) {

    case types.CREATE_INVOICE:
        action.invoice.id = getHexId();
        action.invoice.direction = getGuid();
        action.invoice.date_created = getCreationDate(); 
        return Object.assign({}, state, { invoices: state.invoices.concat(action.invoice) });

    case types.EDIT_INVOICE:
      return Object.assign({}, state, { invoices: state.invoices.map(invoice => {
            if (invoice.id === action.invoice.id) {
                invoice.number = action.invoice.number;
                invoice.date_due = action.invoice.date_due;
                invoice.date_supply = action.invoice.date_supply;
                invoice.comment = action.invoice.comment;
              //  return invoice; зачем 2 return подряд?
            }
            return invoice;
          }
      )});

    case types.DELETE_INVOICE:
      return Object.assign({}, state, { invoices: state.invoices.filter((invoice) => invoice.id !== action.id) });

    case types.DELETE_ALL_INVOICES:
      return Object.assign({}, state, { invoices: [] });

    case types.GET_INVOICES:
      return Object.assign({}, state, { invoices: state.invoices });

    case types.CLEAR_SEARCH_STRING:
      return Object.assign({}, state, { filterText: '' });

    case types.CHANGE_SEARCH_STRING:
      let query = action.inputText.trim();
      return Object.assign({}, state, { filterText: action.inputText, filterResults: state.invoices.filter(x => x.number.toString().trim().includes(query))});

    case types.HIDE_NOTIFY:
      return Object.assign({}, state, { notify: { type: '', text: '', visible: false } } );

    case types.SHOW_NOTIFY:
      return Object.assign({}, state, { notify: { type: action.messageType, text: action.messageText, visible: true }});

    default:
      return state;
  }
}
