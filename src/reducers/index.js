import { combineReducers } from 'redux';
import homepage from './HomePage.js';
import login from './LoginReducer'
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  login,
  homepage,
  routing: routerReducer
});

export default rootReducer;