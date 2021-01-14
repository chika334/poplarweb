import axios from "axios";
import { returnErrors } from "./errorAction";
import { tokenConfig } from "./userAction";
import {
  TRANSACTION_LOADING,
  TRANSACTION_LOADED,
  TRANSACTION_ERROR,
} from "./type";

export const getTransactions = () => (dispatch, getState) => {
  dispatch({ type: TRANSACTION_LOADING });
  axios
    .get(
      `${process.env.REACT_APP_API}/fastpayr/api/v1/paymentrequest/latest`,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: TRANSACTION_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: TRANSACTION_ERROR,
      });
    });
};