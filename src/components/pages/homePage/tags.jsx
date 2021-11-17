
const Tags = ({tags , filterByTags}) => {
  console.log(tags);
  return (
    <div className="tags__block">
      <h2 className="tags__title left-block__titles">Tags</h2>
      <div className="tags__wrap">
        {Object.keys(tags).map((tag) => {
          return (
            <div className="tag__body">
              <p className="tag" onClick={() => filterByTags(tags[tag].name)}>
                {tags[tag].name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Tags;