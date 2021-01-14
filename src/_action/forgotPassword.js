import axios from 'axios'
import { returnErrors } from './errorAction'
import { FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD } from './type'

export const forgotPassword = (details) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  axios.post(`${process.env.REACT_APP_API}/fastpayr/api/v1/account/reset/password`, details, config)
    .then((res) => 
      dispatch({
        type: FORGOT_PASSWORD,
        payload: res.data
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status, "FORGOT_PASSWORD_FAIL"))
      dispatch({
        type: FORGOT_PASSWORD_FAIL
      })
    })
}