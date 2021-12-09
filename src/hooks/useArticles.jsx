import React, {useState, useEffect, useContext} from "react"
import api from "../api"

const ArticlesContext = React.createContext()

export function useArticles(){
  return useContext(ArticlesContext)
}

export const ArticlesProvider = ({children}) => {
  const [articles, setArticles] = useState();
  const [tags, setTags] = useState();
  async function getData(){
    const dataArticles = await api.articles.fetchAll()
    const dataTags = await api.tags.fetchAll();
    setArticles(dataArticles);
    setTags(dataTags)
  }
  useEffect(() => getData(), [])
  return (
    <ArticlesContext.Provider value = {{articles, setArticles, tags, setTags}}>
      {children}
    </ArticlesContext.Provider>
  )
}