import imagePath from '../assets/mainPage/logo.png'

const FullScreen = () => {
  return (
    <section className="full-screen">
      <div className="full-screen__body">
        <div className="full-screen__image">
          <img src={imagePath} alt="logo" />
        </div>
        <div className="full-screen__text">
          A publishing company that focuses on the essentials.
        </div>
      </div>
    </section>
  );
}
export default FullScreen;