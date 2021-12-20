import { useState, useEffect } from "react";
import _ from "lodash"
import Table from "./table/table";
import api from '../api/index'
import { siparatePage } from '../utils/seperatePage';
import dateFormatation from "../utils/dateFormat";
import Pagination from './pagination';

const AdminArticlesTable = () => {
  const [articles, setArticles] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState({ iter: 'title', order: 'asc' });
  const pageSize = 6;
  useEffect(function(){
    api.articles.fetchAll().then(data => setArticles(data))
  }, [])

  function onDelete(article_id) {
    api.articles.remove(article_id)
    setArticles(articles.filter(article => article._id !== article_id))
  }

  function handleChangePage(page) {
      setCurrentPage(page);
    }
  const columns = {
    title: {
      name: "Article's title",
      iter: 'title',
    },
    create_at: {
      name: 'Published date',
      component: (article) => {
        return dateFormatation(article.created_at);
      },
      iter: 'created_at',
    },
    delete: {
      component: (article) => (
        <button
          className="btn btn-danger"
          onClick={() => onDelete(article._id)}
        >
          Delete
        </button>
      ),
    }
  };
  if (articles){
    const filterArticle = _.orderBy(articles, sortBy.iter, sortBy.order)
    const siparatedArticles = siparatePage(filterArticle, pageSize, currentPage);
  return (
    <>
      <Table
        onSort={setSortBy}
        currentSort={sortBy}
        columns={columns}
        data={siparatedArticles}
      />
      <Pagination
        pageSize={pageSize}
        itemCount={articles.length}
        onChangePage={handleChangePage}
        currentPage={currentPage}
      />
    </>
  );
  }
  return <h1>Loading...</h1>
}
 
export default AdminArticlesTable;