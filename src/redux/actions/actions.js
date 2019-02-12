import * as types from './actionTypes';

export function createInvoice(invoice) {
  return {
    type: types.CREATE_INVOICE,
    invoice
  };
}

export function editInvoice(invoice) {
  return {
    type: types.EDIT_INVOICE,
    invoice
  };
}

export function deleteInvoice(id) {
  return {
    type: types.DELETE_INVOICE,
    id
  };
}

export function deleteSelectedInvoices() {
  return {
    type: types.DELETE_SELECTED_INVOICES
  };
}

export function deleteAll() {
  return {
    type: types.DELETE_ALL_INVOICES
  };
}

export function getInvoices() {
  return {
    type: types.GET_INVOICES
  };
}

export function clearSearchString() {
  return {
    type: types.CLEAR_SEARCH_STRING
  };
}

export function changeSearchString(inputText) {
  return {
    type: types.CHANGE_SEARCH_STRING,
    inputText
  };
}

export function hideNotify() {
  return {
    type: types.HIDE_NOTIFY
  };
}

export function showNotify(messageType, messageText) {
  return {
    type: types.SHOW_NOTIFY,
    messageType,
    messageText
  };
}