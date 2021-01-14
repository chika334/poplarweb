import axios from 'axios'
import {returnErrors} from './errorAction'
import { tokenConfig } from './userAction'
import { WALLET_ERROR, WALLET_LOADED, WALLET_LOADING } from './type'
import { FUND_WALLET, FUND_WALLET_FAIL, DEBITWALLET_FAIL, DEBIT_WALLET } from './type'

export const wallets = () => (dispatch, getState) => {
  dispatch({ type: WALLET_LOADING })
  axios.get(`${process.env.REACT_APP_API}/fastpayr/api/v1/sender/wallet/transactions`, tokenConfig(getState))
    .then((res) => 
      dispatch({
        type: WALLET_LOADED,
        payload: res.data
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: WALLET_ERROR
      })
    })
}

// fund wallet
export const fundWallets = (fundWallet) => (dispatch, getState) => {
  axios.post(`${process.env.REACT_APP_API}/fastpayr/api/v1/sender/wallet/fund`, fundWallet, tokenConfig(getState))
    .then(res => 
      dispatch({
        type: FUND_WALLET,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'FUND_WALLET_FAIL'))
      dispatch({
        type: FUND_WALLET_FAIL
      })
    })
}

// debit wallet
export const debitWallets = (debitWallet) => (dispatch, getState) => {
  axios.post(`${process.env.REACT_APP_API}/fastpayr/api/v1/sender/wallet/debit`, debitWallet, tokenConfig(getState))
    .then(res => 
      dispatch({
        type: DEBIT_WALLET,
        payload: res.data
      })  
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'DEBITWALLET_FAIL'))
      dispatch({
        type: DEBITWALLET_FAIL
      })
    })
}