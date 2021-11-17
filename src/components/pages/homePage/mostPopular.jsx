import SmallCard from '../../articlesWrappers/smallCard';


const MostPopular = ({articles}) => {
  return (
    <section className="most__popular">
      <h2 className="popular__title">Most Popular</h2>
      <div className="popular__raw">
        {articles.map(article => {
          return(
          <div className="popular__column">
            <SmallCard article = {article}/>
          </div>)
      })}
      </div>
    </section>
  );
};
export default MostPopular;
