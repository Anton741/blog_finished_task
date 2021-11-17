import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import dateFormatation from '../../utils/dateFormat';
import api from '../../api/index';

const RecentPost = ({ article }) => {
  const history = useHistory()
  const [author, setAuthor] = useState();
  console.log(article);
  useEffect(function () {
    api.authors.getById(article.author_id).then((data) => {
      setAuthor(data);
    });
  }, []);
  return (
    <div className="card-recent">
      <div className="card__content-recent recent-card" onClick = {() => history.push(`/articles/${article._id}`)}>
        <img src={article.imgPath.default} alt="" className="recent-card__image" />
        <div className="recent-card__description">
          <div className="recent-card__description-wrap">
            <h2 className="recent-card__title title">{article.title}</h2>
            <p className="recent-card__published">
              <i>
                {author ? author.name : ''} - {dateFormatation(article.created_at)}
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecentPost;
