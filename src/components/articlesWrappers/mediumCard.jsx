import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import dateFormatation from '../../utils/dateFormat';
import api from '../../api/index';

const MediumCard = ({ article }) => {
  const history = useHistory()
  const [author, setAuthor] = useState();
  useEffect(function () {
    api.authors.getById(article.author_id).then((data) => {
      setAuthor(data);
    });
  }, []);
  return (
    <div className="card__content-medium medium-card card-hover" onClick = {() => history.push(`/articles/${article._id}`)}>
      <img src={article.imgPath.default} alt="" className="medium-card__image card__image" />
      <div className="medium-card__description">
        <div className="medium-card__description-wrap">
          <div className="medium-card__tags">
            <p className="tag">{article.tags[0].name}</p>
          </div>
          <p className="medium-card__published">
            <i>{author ? author.name : ''} - {dateFormatation(article.created_at)}</i>
          </p>
          <h2 className="medium-card__title">{article.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default MediumCard;
