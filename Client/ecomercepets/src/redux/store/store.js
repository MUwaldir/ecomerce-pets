// import {thunk }from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/reducers.js';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
