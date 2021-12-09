import { LOAD_ARTICLES, LOAD_AUTHORS, LOAD_TAGS } from "./type";
import api from "../api"

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
  console.log('ljjkjkjllklkkl');
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
      const dataArticles = await api.authors.fetchAll()
      dispatch(
        {
            type:LOAD_TAGS,
            data: dataArticles
        }
      )
  }
}