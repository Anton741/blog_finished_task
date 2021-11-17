import { useState, useEffect } from 'react';
import TextField from '../components/form/textField';
import api from '../api/index'
import { siparatePage } from '../utils/seperatePage';
import Pagination from '../components/pagination';
import SearchPost from '../components/articlesWrappers/searchPost';
import Header from '../components/header';

const Search = () => {
  const [inputValue, setInputValue] = useState({ search: ''});
  const [tags, setTags] = useState();
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState();
  const pageSize = 5;
  useEffect(function () {
    api.tags.fetchAll().then((data) => {
      setTags(data);
    });
    api.articles.fetchAll().then((data) => {
      setArticles(data);
    });
  }, []);
  function handleChange(target) {
    setInputValue((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
    setSelectedTags([])
  }
  function handleSort(item) {
    const indexTag = selectedTags.indexOf(item)
    if (indexTag !== -1) {
      selectedTags.splice(indexTag  , 1);
      setSelectedTags(prev => [...prev])
      console.log(selectedTags);
    }else{
      setSelectedTags((prev) => [...prev, item]);
      setCurrentPage(1);
      setInputValue({ search: '' });
    }
    
  }
  function handleChangePage(page) {
    setCurrentPage(page);
  }

  if(articles){
    const filtretedArticles =inputValue.search ? (articles.filter(article => {
      return article['title'].toLowerCase().indexOf(inputValue.search.toLowerCase()) !== -1}))
      : selectedTags.length !== 0
      ? articles.filter((article) => {
          return article['tags'].some((articlTag) =>
            selectedTags.includes(articlTag.name)
          );
        })
      : articles;
    const siparatedArticles = siparatePage(
      filtretedArticles,
      pageSize,
      currentPage
    );
  if (tags){
  return (
    <>
    <Header/>
    <section className="search">
      <div className="search__container">
        <div className="search__block">
          <div class="search__line">
            <TextField
              value={inputValue.search}
              fieldName={'search'}
              onHandleChange={handleChange}
              classes="search__input"
              placeholder={'Search'}
            />
            <div className="search__icon"></div>
          </div>
          <div className="search__tags">
            {Object.keys(tags).map((tag) => (
              <div className={selectedTags.includes(tag)? 'tag search__tag search__tag-active': 'tag search__tag'}
                onClick={() => handleSort(tag)}>
                #{tag}
              </div>
            ))}
          </div>
        </div>
        <div className="search__result">
          <div className="search__cards">
            {siparatedArticles.length > 0 ? 
            siparatedArticles.map((article) => {
                return <SearchPost article={article} />;
              })
            : <h1>Not founding</h1>}
          </div>
          <Pagination
            pageSize={pageSize}
            itemCount={filtretedArticles.length}
            onChangePage={handleChangePage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </section>
    </>
  );
  }}
  return <h1>Loading...</h1>
};
export default Search;
