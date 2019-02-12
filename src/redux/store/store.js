import { createStore } from 'redux'

import reducer from '../reducers/reducer'
import { initialState } from './initialState' 

// Создание хранилища на основе reducer и начального состояния
// Параметр window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() необходим для работы браузерного плагина Redux DevTools
// Подробнее по ссылке https://github.com/zalmoxisus/redux-devtools-extension
export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());