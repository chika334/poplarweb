import axios from "axios";
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_FAIL,
  LOGIN_FAIL,
  COUNTRYID_LOADING,
  COUNTRYID_LOADED,
  EDITPROFILE_FAIL,
  EDITPROFILE,
} from "./type.js";
import { returnErrors } from "./errorAction.js";

export const getCountryId = () => (dispatch, getState) => {
  dispatch({ type: COUNTRYID_LOADING });
  axios
    .get(
      `${process.env.REACT_APP_API}/fastpayr/api/v1/serviceprovider/1/3`,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: COUNTRYID_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

export const getUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios
    .get(
      `${process.env.REACT_APP_API}/fastpayr/api/v1/account`,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

export const signup = (user) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(
      `${process.env.REACT_APP_API}/fastpayr/api/v1/account/pp/register`,
      user,
      config
    )
    .then((res) =>
      dispatch({
        type: REGISTER_USER,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

export const EditProfile = (user) => (dispatch, getState) => {
  axios
    .put(
      `${process.env.REACT_APP_API}/fastpayr/api/v1/account/2`,
      user,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: EDITPROFILE,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "EDITPROFILE_FAIL")
      );
      dispatch({
        type: EDITPROFILE_FAIL,
      });
    });
};

export const signin = (user) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(
      `${process.env.REACT_APP_API}/fastpayr/api/v1/account/login`,
      user,
      config
    )
    .then((res) =>
      dispatch({
        type: LOGIN_USER,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const tokenConfig = (getState) => {
  // Get token from localstorage
  const token = getState().authUser.token;

  // set Header
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // if token, add to header
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
};
