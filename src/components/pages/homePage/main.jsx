import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticlies, getAuthors } from '../../../redux/action'
import MainBlock from './mainBlock'
import MostPopular from './mostPopular'
import Slider from './slider'


const Main = () => {
  const dispatch = useDispatch()
  useEffect(() => dispatch(getAuthors()), []);
  useEffect(() => dispatch(getArticlies()), []);
  const articles = useSelector(state => {
    return state.getDateReducer.articles;
  })
  const authors = useSelector((state) => {
    return state.getDateReducer.authors;
  });
  if(articles){
    const articlesFistBlock = articles.slice(0,5)
    const mostPopularArticles = articles.slice(2, 6);
  return (
    <section className="main container">
      <Slider articles={articlesFistBlock} />
      <MainBlock articles={articles} authors={authors} />
      <MostPopular articles={mostPopularArticles} authors={authors} />
    </section>
  );
}return <div className="loader"></div>
}

export default Main;