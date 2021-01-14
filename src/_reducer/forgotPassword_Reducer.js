import { FORGOT_PASSWORD, FORGOT_PASSWORD_FAIL } from '../_action/type'

const initialState = {
  success: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FORGOT_PASSWORD:
      return {
        ...state,
        ...action.payload,
        success: true
      }
    case FORGOT_PASSWORD_FAIL: {
      return {
        ...state,
        success: false
      }
    }
    default:
      return state;
  }
}