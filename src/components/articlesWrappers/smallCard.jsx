import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import dateFormatation from '../../utils/dateFormat';
import api from '../../api/index';

const SmallCard = ({ article }) => {
  const history = useHistory()
  const [author, setAuthor] = useState();
  useEffect(function () {
    api.authors.getById(article.author_id).then((data) => {
      setAuthor(data);
    });
  }, []);
  return (
    // <div className="card-small">
    <div className="card__content-small small-card card-hover" onClick = {() => history.push(`/articles/${article._id}`)}>
      <img src={article.imgPath.default} alt="" className="small-card__image card__image" />
      <div className="small-card__description">
        <div className="small-card__description-wrap">
          <div className="small-card__tags">
            <p className="tag">{article.tags[0].name}</p>
          </div>
          <h2 className="small-card__title">{article.title}</h2>
          <p className="small-card__published">
            <i>
              {author ? author.name : ''} - {dateFormatation(article.created_at)}
            </i>
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default SmallCard;
