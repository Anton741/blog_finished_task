import { useState, useEffect } from "react"; 
import { Link, useHistory } from "react-router-dom";
import SocialNetworks from './Footer/socialNetworks'
import logo from '../assets/mainPage/logo.png';

const Header = () => {
  const [burger, setBurger] = useState(false);
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = burger ? 'hidden' : 'auto';
  }, [burger]);
  const history = useHistory()
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div
            className={burger ? 'burger burger-active' : 'burger'}
            onClick={() => setBurger(!burger)}
          >
            <span></span>
          </div>
          <div className="header__logo">
            <img src={logo} alt="logo" srcset="" />
          </div>
          <nav
            className={
              burger ? 'header__menu-active header__menu' : 'header__menu'
            }
          >
            <ul
              className={
                burger ? 'header__list header__list-active' : 'header__list'
              }
            >
              <li className="item__list">
                <Link to="/" className="header__link" onClick = {() => setBurger(false)}>
                  Home{' '}
                </Link>
              </li>
              <li className="item__list">
                <Link to="/about" className="header__link" onClick = {() => setBurger(false)}>
                  About{' '}
                </Link>
              </li>
              <li className="item__list">
                <Link to="/search" className="header__link search__text" onClick = {() => setBurger(false)}>
                  Search{' '}
                </Link>
              </li>
            </ul>
            <div
              className={
                burger ? 'header__input-active header__input' : 'header__input'
              }
            >
              {/* <input type="text" className="search__input " /> */}
              <div
                className="search__icon"
                onClick={() => history.push('/search')}
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6613 29.9034C24.4054 29.9034 29.8726 24.4052 29.8726 17.6227C29.8726 10.8403 24.4054 5.34204 17.6613 5.34204C10.9172 5.34204 5.45007 10.8403 5.45007 17.6227C5.45007 24.4052 10.9172 29.9034 17.6613 29.9034Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M32.9254 32.9738L26.2855 26.2961"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="header__networks">
              <SocialNetworks />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;