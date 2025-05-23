// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Измените этот импорт
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;