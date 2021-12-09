import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import dateFormatation from '../../utils/dateFormat';
import api from '../../api/index';

const SliderArticles = ({ article }) => {
  const history = useHistory()
  const [author, setAuthor] = useState();
  useEffect(function () {
    api.authors.getById(article.author_id).then((data) => {
      setAuthor(data);
    });
  }, []);
  return (
    <div
      className="slider__card"
      onClick={() => history.push(`/articles/${article._id}`)}
    >
      <div className="slider__raw">
        <div className="slider__column">
          <img
            src={article.imgPath.default}
            alt=""
            className="medium-card__image card__image"
          />
        </div>
        <div className="slider__column">
          <div className="slider__content">
            <h2 className="slider__title">{article.title}</h2>
            <div className="slider__text">{article.content}</div>
            <p className="slider__published">
              <i>
                {author ? author.name : ''} -{' '}
                {dateFormatation(article.created_at)}
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderArticles;
