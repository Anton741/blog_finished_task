import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import api from '../api/index'

const ArticlePagination = ({currentArticleId}) => {
    const [articles, setArticles] = useState()
    const history = useHistory();
  useEffect(function(){
    api.articles.fetchAll().then((data) => {
      setArticles(data);
    })}, [])
if (articles) {
  const indexCurrentArrticle = articles.findIndex(article => article._id === currentArticleId)
    const nextArticle =  indexCurrentArrticle === articles.length -1  ? articles[0] : articles[indexCurrentArrticle + 1]; 
    const previousArticle = indexCurrentArrticle === 0 ? articles[articles.length - 1] : articles[indexCurrentArrticle - 1]; 
    return (
      <>
        <div className="article__pagination">
          <div
            className="article__arrows"
            onClick={() => history.push(`/articles/${previousArticle._id}`)}
          >
            <div className="article__arrows-prev"></div>
            <div className="article__pagination-title">
              Go back: <b>{previousArticle.title}</b>
            </div>
          </div>
          <div
            className="article__arrows"
            onClick={() => history.push(`/articles/${nextArticle._id}`)}
          >
            <div className="article__pagination-title">
              Next up: <b>{nextArticle.title}</b>
            </div>
            <div className="article__arrows-next"></div>
          </div>
        </div>
      </>
    );
}
return <></>

}
export default ArticlePagination;