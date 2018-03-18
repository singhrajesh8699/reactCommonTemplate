import {LOGIN_DATA,Login_Response} from '../constants/actionTypes';
import objectAssign from 'object-assign';

export default function reducer(state={
    data: null,
    message: ''
  }, action) {

  switch(action.type) {
    case LOGIN_DATA:
        return objectAssign({}, state, {data: action.payload});
    case Login_Response:
        return objectAssign({}, state, {message: action.payload});
    default:
        return state;
  }
}