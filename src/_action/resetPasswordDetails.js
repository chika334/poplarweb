import axios from 'axios'
import { returnErrors } from './errorAction'
import { RESET_PASSWORD_FAIL, RESET_PASSWORD } from './type'
import { tokenConfig } from './userAction'

export const resetPasswordDetail = (details) => (dispatch, getState) => {

  axios.post(`${process.env.REACT_APP_API}/fastpayr/api/v1/account/setup`, details, tokenConfig(getState))
    .then((res) => 
      dispatch({
        type: RESET_PASSWORD,
        payload: res.data
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status, "RESET_PASSWORD_FAIL"))
      dispatch({
        type: RESET_PASSWORD_FAIL
      })
    })
}