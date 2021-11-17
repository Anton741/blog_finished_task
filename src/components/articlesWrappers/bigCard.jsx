import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import api from '../../api/index';
import dateFormatation from '../../utils/dateFormat';


const BigCard = ({ article }) => {
  const history = useHistory()
  const [author, setAuthor] = useState();
  useEffect(function () {
    api.authors.getById(article.author_id).then((data) => {
      setAuthor(data);
    });
  }, []);
  const tags = article.tags.length > 4 ? article.tags.slice(0, 4) : article.tags
  return (
    <div className="card__content-big " onClick = {() => history.push(`/articles/${article._id}`)}>
      <div className="big-card card-hover">
        <img src={article.imgPath.default} alt="" className="big-card__image card__image" />
        <div className="big-card__description">
          <div className="big-card__description-wrap">
            <div className="medium-card__tags">
              {tags.map((tag) => {
                return <p className="tag" key = {tag._id}>{tag.name}</p>
              })}
            </div>
            <h2 className="big-card__title">{article.title}</h2>
            <p className="big-card__published">
              <i>
                {author ? author.name : ''} - {dateFormatation(article.created_at)}
              </i>
            </p>
            <p className="big-card__text">{article.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
