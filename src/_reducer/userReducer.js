import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_FAIL,
  LOGIN_FAIL,
  EDITPROFILE_FAIL,
  EDITPROFILE,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD
} from "../_action/type.js";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  user: null,
  msg: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case EDITPROFILE:
    case RESET_PASSWORD:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER_USER:
    case LOGIN_USER:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isAuthenticated: true,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_USER:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        user: null,
      };
    case RESET_PASSWORD_FAIL:
    case EDITPROFILE_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: null,
      };
    default:
      return state;
  }
}
