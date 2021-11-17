import { useState, useEffect } from 'react';
import api from '../../api/index';
import SubscribeForm from '../form/subscribeForm';
import SocialNetwork from './socialNetworks';
import PostsBlock from './posts';
import logo from '../../assets/footer/Logo.png';

const Footer = () => {
  const [articles, setArticles] = useState();
  useEffect(function () {
    api.articles.fetchAll().then((data) => {
      setArticles(data);
    });
  }, []);
  return (
    <footer className="footer">
      <div className="footer__body">
        <div className="footer__top">
          <div className="container">
            <div className="footer__raw">
              <div className="footer__column">
                <div className="footer__logo logo">
                  <img src={logo} alt="logo" />
                </div>
                <div className="footer__description">
                  Short description about the company Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry.
                </div>
                <div className="footer__networks">
                  <SocialNetwork />
                </div>
              </div>
              <div className="footer__column">
                <PostsBlock articles={articles ? articles.slice(0,3) : []} />
              </div>
              <div className="footer__column">
                <div className="subscribe__block">
                  <h2 className="subscribe__title footer__titles">
                    Newsletter
                  </h2>
                  <SubscribeForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__author-right">
          <div className="container">
            <div className="author-right__text">
              @2019 Logwork. All Right Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
