import facebook from '../../assets/footer/facebook.svg';
import pinterst from '../../assets/footer/pinterest.svg';
import google from '../../assets/footer/google_plus.svg';
import inst from '../../assets/footer/instagram.svg';
import twitter from '../../assets/footer/twitter.svg';

let networks = {
  facebook: {
    img: facebook,
    url: 'https://ru-ru.facebook.com/',
  },
  google: {
    img: google,
    url: 'https://myaccount.google.com/',
  },
  pinterst: {
    img: pinterst,
    url: 'https://www.pinterest.ru/',
  },
  instagram: {
    img: inst,
    url: 'https://www.instagram.com/',
  },
  twitter: {
    img: twitter,
    url: 'https://twitter.com/',
  },
};

const SocialNetworks = () => {
  return (  
    <div className="networks">
      <div className="footer__social social">
        {Object.keys(networks).map(network => {
          return(
            <a href = {networks[network].url} className="social__item"><img src={networks[network].img}alt="social" /></a>
        )})}
      </div>
    </div>
);
}
export default SocialNetworks;