import { LOAD_ARTICLES, LOAD_AUTHORS, LOAD_TAGS } from "./type";

const initialState = {}
export const getDateReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return {...state, articles: action.data}
    case LOAD_AUTHORS:
      return {...state, authors: action.data}
    case LOAD_TAGS:
      return {...state, tags: action.data}
    default:
      return state
  }
}