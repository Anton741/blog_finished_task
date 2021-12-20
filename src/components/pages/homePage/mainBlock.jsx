// import _  from 'lodash';
import { useState } from 'react';
import { useArticles } from '../../../hooks/useArticles';
import { useHistory } from 'react-router';
import Popular from './popular';
import Tags from './tags';
import SubscribeForm from '../../form/subscribeForm';
import BigCard from '../../articlesWrappers/bigCard';
import Pagination from '../../pagination';
import { siparatePage } from '../../../utils/seperatePage';
  

const MainBlock = ({ articles, authors }) => {
  const history = useHistory();
  const {tags} = useArticles()
  const [currentPage, setCurrentPage] = useState(1);
  // const [selectedTag, setSelectedTag] = useState()
  const pageSize = 5;
  const popularArticles = articles.slice(2, 5);
  function handleChangePage(page) {
    setCurrentPage(page);
  }
  // function handleSort(item){
  //   setSelectedTag(item)
  //   setCurrentPage(1)
  //   console.log(item);
  // }
  // const filtretedArticles = selectedTag
  //   ? articles.filter((article) => {
  //     return (article['tags'].some(articlTag => articlTag.name===selectedTag));
  //     })
  //   : articles;
  const siparatedArticles = siparatePage(articles , pageSize, currentPage)
  return (
    <div className="main__content">
      <div className="left__column">
        {siparatedArticles.length > 0 &&
          siparatedArticles.map((article) => {
            const author = authors.filter((author) => author._id === article.author_id)[0];
            return (
              <BigCard
                article={article}
                author = {author}
              />
            );
          })}
        {siparatedArticles.length === 0 && (<h1>There are not any articles according to such tags</h1>)}
        <Pagination
          pageSize={pageSize}
          itemCount={articles.length}
          onChangePage={handleChangePage}
          currentPage={currentPage}
        />
      </div>
      <div className="right-column">
        <Popular articles={popularArticles} authors = {authors} />
        {tags && <Tags tags={tags} filterByTags={(item) => history.push(`/search/${item}`)} />}
        <SubscribeForm
          blockTitle="Email newsletter"
          blockDescription="Sign up to receive email updates and to hear what's going on."
        />
      </div>
    </div>
  );
};

export default MainBlock;
