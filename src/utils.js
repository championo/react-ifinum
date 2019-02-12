// Проверяет на соотвествие формату номера - только цифры, от 3 до 6 символов
export const isNumberFormat = number => {
  const regExp = new RegExp('^[0-9]{3,6}$');
  return regExp.test(number);
}

// Проверяет на соотвествие формату дате - dd.mm.yyyy
export const isDateFormat = date => {
  const regExp = new RegExp('^[0-9]{2}.[0-9]{2}.[0-9]{4}$');
  return regExp.test(date);
}

// Проверяет поля и возвращает список ошибок
export const getErrors = (number, invoiceDate, supplyDate) => {
  let errors = [];

  if (number.toString().length === 0)
    errors.push('Number cannot be empty');
  else if (!isNumberFormat(number))
    errors.push('The number must be between 3 and 6 characters. Can only contain numbers');

  if (invoiceDate.toString().length === 0)
    errors.push('Invoice date cannot be empty');
  else if (!isDateFormat(invoiceDate))
    errors.push('Invalid invoice date format. Please enter the date in the format "dd.mm.yyyy"');

  if (supplyDate.toString().length === 0)
    errors.push('Supply date cannot be empty');
  else if (!isDateFormat(supplyDate))
    errors.push('Invalid supply date format. Please enter the date in the format "dd.mm.yyyy"');

  return errors;
};

export const getBasePath = uri => {
  const regex = /\w+/;
  return uri.match(regex);
}

// Возвращает строку с начальной буквой в верхнем регистре
export const capitalize = text => {

  if (typeof text !== 'string') 
    return '';

  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Формирование id в формате xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx при помощи модуля "uuid"
export const getGuid = () => {
  const uuidv3 = require('uuid/v4');
  return uuidv3();
}

// Формирование hex-id в формате prefix + 16 символов при помощи модуля "uniqid"
export const getHexId = () => {
  const prefix = '5ac1f09a';
  let uniqid = require('uniqid');
  return uniqid(prefix);
}

export const getCreationDate = () => {
  // Форматируем дату в соответствии с русским языком (для 'ru-RU' формат даты dd.MM.yyyy)
  let formatter = new Intl.DateTimeFormat('ru-RU');
  return formatter.format(Date.parse(Date()));
}