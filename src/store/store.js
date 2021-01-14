import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const { composeWithDevTools } = require('redux-devtools-extension');

const middleware = [
  thunk,
];

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware),
));

export default store;