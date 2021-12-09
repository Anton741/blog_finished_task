import SmallCard from '../../articlesWrappers/smallCard';


const Popular = ({articles, authors}) => {
  return (
    <section className="popular-posts">
      <h2 className="popular-posts__title left-block__titles">Popular posts</h2>
      <div className="popular-posts__raw">
        {articles.map((article) => {
          const author = authors.filter((author) => author._id === article.author_id)[0];
          return (
            
            <div className="popular-posts__column">
              <SmallCard article = {article} author = {author} />
            </div>
          )
        })}
      </div>
    </section>
  );
};
export default Popular;
