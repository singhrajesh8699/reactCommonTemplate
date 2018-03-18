import axios from "axios";
import * as types from '../constants/actionTypes';
//import { error5xx,clearStateValue } from "../Helpers/helper";

export function validateLoginData(loginData) {
  return (dispatch) => {
    dispatch({type: types.LOGIN_DATA,payload: loginData, fetching: false});
  }
}


export function addFlashMessage(message){
    return (dispatch) =>{
      dispatch({
        type : types.Login_Response,
        payload : 'Please Login'
      })
    }
}


