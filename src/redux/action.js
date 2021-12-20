import { LOAD_ARTICLES, LOAD_AUTHORS, LOAD_TAGS, SING_UP } from "./type";
import api from "../api"
import axios from 'axios'

export function getArticlies (){
  return async dispatch => {
      const dataArticles = await api.articles.fetchAll()
      dispatch(
        {
            type:LOAD_ARTICLES,
            data: dataArticles
        }
      )
  }
}

export function getAuthors (){
  return async dispatch => {
      const dataArticles = await api.authors.fetchAll()
      dispatch(
        {
            type:LOAD_AUTHORS,
            data: dataArticles
        }
      )
  }
}

export function getTags (){
  return async dispatch => {
      const dataArticles = await api.tags.fetchAll()
      dispatch(
        {
            type:LOAD_TAGS,
            data: dataArticles
        }
      )
  }
}
export function singUp({ email, password, ...rest }){
  const key = 'AIzaSyAa64pssetA0pXYpqCb8BNGb9IBwQExGtA'
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
  return async dispatch => {
  let current_user = {}
    try{
      const { data } = await axios.post(url, { email, password, returnSecureToken: true });
      const TOKEN_KEY = "jwt-token";
      const REFRESH_KEY = "jwt-refresh-token";
      const EXPIRE_KEY = "jwt-expire";
      localStorage.setItem(TOKEN_KEY, data.idToken);
      localStorage.setItem(REFRESH_KEY, data.refreshToken);
      localStorage.setItem(EXPIRE_KEY, data.expiresIn);
      const new_user = {_id: data.localId, email, ...rest}
      current_user = await (await axios.put('https://nuntium-40b00-default-rtdb.firebaseio.com/authors/' + new_user._id+ ".json", new_user)).data
      // payload.current_user = current_user
      // payload.error = null
    }
    catch(error){
      const {code, message} = error.response.data.error
      if (code === 400){
        if (message === 'EMAIL_EXISTS'){
        const errorObject = {email: "The email alredy exists"}
        throw errorObject
        }
      }
      // console.log('code -', code);
      // console.log('message-', message);
    }
    dispatch({
            type:SING_UP,
            current_user: current_user
        }
    )
  }
  
}