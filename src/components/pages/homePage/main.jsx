import { useState, useEffect } from 'react'
import MainBlock from './mainBlock'
import TopArticlesBlock from './topActiclesBlock'
import MostPopular from './mostPopular'
import api from '../../../api/index'


const Main = () => {
  const [articles, setArticles] = useState()
  useEffect(function () {
    api.articles.fetchAll().then((data) => {
      setArticles(data);
    });
  }, []);

  if(articles){
    const articlesFistBlock = articles.slice(0,5)
    console.log(articlesFistBlock);
    const mostPopularArticles = articles.slice(2, 6);
  return (
    <section className="main container">
      <TopArticlesBlock articles={articlesFistBlock} />
      <MainBlock articles={articles} />
      <MostPopular articles={mostPopularArticles} />
    </section>
  );
}return <h1>Loading...</h1>
}

export default Main;