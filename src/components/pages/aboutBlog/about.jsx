
import FullScreen from '../../fullScrin'
// import Footer from '../components/Footer/footer'
import Imag1 from '../../../assets/aboutPage/Picture.png';
import Imag2 from '../../../assets/aboutPage/Rectangle 7.png';
import Imag3 from '../../../assets/aboutPage/Rectangle 11.png';
import Imag4 from '../../../assets/aboutPage/Rectangle 12.png';
import Imag5 from '../../../assets/aboutPage/Rectangle 13.png';

const About = () => {
  return (
    <div className="about__page">
      <FullScreen />
      <div className="container">
        <div className="about__content">
          <div className="about__raw">
            <div className="about__column">
              <div className="about__text">
                <div className="about__title">
                  We tell stories that drives the heart.
                </div>
                <div className="about__description">
                  Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor
                  nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit
                  culpa qui minim pariatur et officia elit id. Tempor cupidatat
                  veniam esse ad veniam dolore excepteur tempor dolor
                  consectetur ut id.
                </div>
              </div>
            </div>
            <div className="about__column">
              <div className="about__image">
                <img src={Imag1} alt="" />
              </div>
            </div>
          </div>
          <div className="about__raw">
            <div className="about__column about__column-absolute">
              <div className="image-top">
                <img src={Imag2} alt="" />
              </div>
              <div className="about__text">
                <div className="about__title">
                  We tell the news that makes the most impact.
                </div>
                <div className="about__description">
                  Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor
                  nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit
                  culpa qui minim pariatur et officia elit id. Tempor cupidatat
                  veniam esse ad veniam dolore excepteur tempor dolor
                  consectetur ut id.
                </div>
              </div>
            </div>
          </div>
          <div className="about__raw">
            <div className="about__column about__text-long">
              <div className="about__text ">
                <div className="about__title">
                  We share the little moments that shows we’re alive.
                </div>
                <div className="about__description">
                  Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor
                  nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit
                  culpa qui minim pariatur et officia elit id. Tempor cupidatat
                  veniam esse ad veniam dolore excepteur tempor dolor
                  consectetur ut id.
                </div>
              </div>
            </div>
          </div>
          <div className="about__image-block">
            <img src={Imag3} alt="" />
            <img src={Imag4} alt="" />
            <img src={Imag5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;