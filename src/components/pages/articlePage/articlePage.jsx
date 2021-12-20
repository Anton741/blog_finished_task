import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import api from '../../../api/index';
import dateFormatation from '../../../utils/dateFormat';
import Author from './aboutAuthor';
import ArticlePagination from '../../articlePagination'
import Header from "../../header"

const ArticlePage = () => {
  const [article, setArticle] = useState();
  const [author, setAuthor] = useState();
  const params = useParams();
  const { articleId } = params;
  useEffect(function(){
    api.articles.getById(articleId).then((data) => {
      api.authors.getById(data.author_id).then((authorData) => {
      setAuthor(authorData);
    })
      setArticle(data);
    });
  }, [articleId])

  if(article){
  return (
    <>
    <Header/>
    <div className="article__page">
      <div className="article__container">
        <img src={article.imgPath.default} alt="article pic" className="article__img" />
        <div className="article__content">
          <div className="article__title">{article.title}</div>
          <div className="article__info">
            {author && author.name} - {dateFormatation(article.created_at)}
            <div className="articles__tag">
              {article.tags.map((tag) => ` #${tag.name}`)}
            </div>
          </div>
          <div className="article__text">{article.content}</div>
          {author && <Author data = {author} />}
        </div>
      </div>
      <ArticlePagination currentArticleId={articleId} />
    </div>
    </>
  );}
  return <div className="loader"></div>
};

export default ArticlePage;
