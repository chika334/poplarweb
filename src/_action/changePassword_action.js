import axios from 'axios'
import { returnErrors } from './errorAction'
import { tokenConfig } from './userAction'
import {
  CHANGEPASSWORD_FAIL,
  CHANGEPASSWORD,
} from "./type.js";

export const changepassword = (user) => (dispatch, getState) => {
  axios.put(`${process.env.REACT_APP_API}/fastpayr/api/v1/account/changepassword`, user, tokenConfig(getState))
    .then(res => 
      dispatch({
        type: CHANGEPASSWORD,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "CHANGEPASSWORD_FAIL")
      );
      dispatch({
        type: CHANGEPASSWORD_FAIL
      })
    })
}