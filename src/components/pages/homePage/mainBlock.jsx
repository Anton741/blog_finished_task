// import _  from 'lodash';
import { useState, useEffect } from 'react';
import Popular from './popular';
import Tags from './tags';
import SubscribeForm from '../../form/subscribeForm';
import BigCard from '../../articlesWrappers/bigCard';
import Pagination from '../../pagination';
import { siparatePage } from '../../../utils/seperatePage';
import api from '../../../api/index'
  

const MainBlock = ({ articles }) => {
  const [tags, setTags] = useState();
  useEffect(function () {
    api.tags.fetchAll().then((data) => {
      setTags(data);
    });
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState()
  const pageSize = 5;
  const popularArticles = articles.slice(2, 5);
  function handleChangePage(page) {
    setCurrentPage(page);
  }
  function handleSort(item){
    console.log(selectedTag);
    setSelectedTag(item)
    setCurrentPage(1)
  }
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
            return (
              <BigCard
                article={article}
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
        <Popular articles={popularArticles} />
        {tags && <Tags tags={tags} filterByTags={() => handleSort() } />}
        <SubscribeForm
          blockTitle="Email newsletter"
          blockDescription="Sign up to receive email updates and to hear what's going on."
        />
      </div>
    </div>
  );
};

export default MainBlock;
