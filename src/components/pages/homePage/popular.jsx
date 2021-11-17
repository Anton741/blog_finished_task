import SmallCard from '../../articlesWrappers/smallCard';


const Popular = ({articles}) => {
  return (
    <section className="popular-posts">
      <h2 className="popular-posts__title left-block__titles">Popular posts</h2>
      <div className="popular-posts__raw">
        {articles.map((article) => {
          return (
            <div className="popular-posts__column">
              <SmallCard article = {article} />
            </div>
          )
        })}
      </div>
    </section>
  );
};
export default Popular;
