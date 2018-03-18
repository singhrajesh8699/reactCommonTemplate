import {Home_Page_Data} from '../constants/actionTypes';
import objectAssign from 'object-assign';

export default function homepageReducer(state = {
    data:''
}, action) {

  switch (action.type) {
    case Home_Page_Data:
      return objectAssign({}, state, {data: action.data});

    default:
      return state;
  }
}