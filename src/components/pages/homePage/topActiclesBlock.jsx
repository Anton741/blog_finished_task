import MediumCard from '../../articlesWrappers/mediumCard'


const TopArticlesBlock = ({articles}) => {
  const sameSizeArticle = articles.slice(0,4)
  return (
    <section className="top__articles">
      <div className="articles-top__raw">
        {sameSizeArticle.map((article) => {
          return (
            <div className="articles-top__column">
              <MediumCard article={article} />
            </div>
          );
        })}
        <div className="articles-top__column articles-top__column-big ">
          <MediumCard article = {articles.slice(-1)[0]}/>
        </div>
      </div>
    </section>
  );
};
export default TopArticlesBlock;
