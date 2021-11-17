import RecentPost from '../articlesWrappers/recentPost'

const PostsBlock = ({articles}) => {
  return (
    <div className="footer__posts posts">
      <h2 className="footer__titles">Recent posts</h2>
      <div className="posts-block__body">
        {articles.map((article) => {
          return <RecentPost article = {article}/>;
        })}
      </div>
    </div>
  );
}
export default PostsBlock;