import { useState, useEffect } from 'react';
import TextField from '../components/form/textField';
import { siparatePage } from '../utils/seperatePage';
import Pagination from '../components/pagination';
import SearchPost from '../components/articlesWrappers/searchPost';
import Header from '../components/header';
import { useDispatch, useSelector } from 'react-redux';
import { getArticlies, getTags } from '../redux/action';
import { useParams } from 'react-router';

const Search = () => {
  const {tag} = useParams()
  console.log(tag);
  const [inputValue, setInputValue] = useState({ search: ''});
  const [selectedTags, setSelectedTags] = useState(tag ? [tag] : []);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getArticlies()), []);
  useEffect(() => dispatch(getTags()), []);
  const articles = useSelector((state) => {
    return state.getDateReducer.articles;
  });
  const tags = useSelector((state) => {
    return state.getDateReducer.tags;
  });
  const pageSize = 5;
  
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
      :  selectedTags.length !== 0
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
  return <div className="loader"></div>
};
export default Search;
