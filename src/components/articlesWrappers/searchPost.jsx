import {useHistory} from "react-router"
import { useEffect, useState } from 'react';
import api from '../../api/index';
import dateFormatation from '../../utils/dateFormat';


const SearchPost = ({article}) => {
  const [author, setAuthor] = useState();
  useEffect(function () {
    api.authors.getById(article.author_id).then((data) => {
      setAuthor(data);
    });
  }, []);
  const history = useHistory()
  return (
    <div className="card-search" onClick = {() => history.push(`/articles/${article._id}`)}>
      <div className="card__content-search search-card">
        <img src={article.imgPath.default} alt="" className="search-card__image" />
        <div className="search-card__description">
          <div className="search-card__description-wrap">
            <h2 className="search-card__title title">{article.title}</h2>
            <p className="search-card__published">
                <i>{author ? author.name : ''} - {dateFormatation(article.created_at)}</i>
              </p>
            {article.content && <p className = "search-card__text">{article.content}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchPost;