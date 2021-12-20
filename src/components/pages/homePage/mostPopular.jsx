import SmallCard from '../../articlesWrappers/smallCard';


const MostPopular = ({articles, authors}) => {
  return (
    <section className="most__popular">
      <h2 className="popular__title">Most Popular</h2>
      <div className="popular__raw">
        {articles.map(article => {
          const author = authors.filter((author) => author._id === article.author_id)[0];
          return (
            <div className="popular__column">
              <SmallCard article={article} author={author} />
            </div>
          );
      })}
      </div>
    </section>
  );
};
export default MostPopular;
