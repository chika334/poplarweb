import { BUY_TOKEN, BUYTOKEN_FAIL } from "../_action/type";

const initialState = {
  success: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case BUY_TOKEN:
      return {
        ...state,
        ...action.payload,
        success: true,
      };
    case BUYTOKEN_FAIL:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
}
