// import photo from '../assets/mainPage/Mask.png';
import SocialNetworks from '../../Footer/socialNetworks';
const Author = ({data}) => {
  console.log(data.authorPhoto);
  return (
    <div className="about-author">
      <div className="about-author__title">about author</div>
      <div className="author__raw">
        <div className="about-author__column">
          <div className="author__photo">
            <img src={data.authorPhoto.default} alt="account" />
          </div>
        </div>
        <div className="about-author__column">
          <div className="about-author__body author">
            <div className="author__name">{data.name}</div>
            <div className="author__information">{data.about}</div>
            <div className="author__contacts">
              <div className="author-contacts__title">View on:</div>
              <div className="author-contacts__links">
                <SocialNetworks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Author;
