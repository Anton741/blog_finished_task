import { SING_UP } from "./type";

const initialState = { }
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SING_UP:
      return {...state, current_user: action.current_user}
    default:
      return state
  }
}