import React, { Component } from 'react';
import { Link } from 'react-router';
import './Header.less';
import photo from './photo.jpg';
import Fa from '../_helpers/Fa/Fa';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">

          <div className="profile">
            <div className="profile__wrapper">
              <img className="profile__photo" src={photo} width="125" height="125" alt="Tomas Zaoral - profil photo" />
              <ul className="profile__social">
                <li className="profile__social-link">
                  <a href="https://cz.linkedin.com/pub/tomas-zaoral/47/144/8b4" target="_blank"><Fa class="linkedin fa-lg" title="LinkedIn profile" /></a>
                </li>
                <li className="profile__social-link">
                  <a href="https://twitter.com/tomzaoral" target="_blank"><Fa class="twitter fa-lg" title="Twitter account" /></a>
                </li>
                <li className="profile__social-link">
                  <a href="https://github.com/tomzaoral" target="_blank"><Fa class="github fa-lg" title="Github account" /></a>
                </li>
              </ul>
            </div>
            <h1 className="profile__name">Tomas Zaoral</h1>
            <p className="profile__description">Web developer and programmer with passion for modern technologies</p>
          </div>

          <nav className="nav">
            <ul className="menu">
              <li className="menu-link"><Link to="/">About</Link></li>
              <li className="menu-link"><Link to="/portfolio">Portfolio</Link></li>
              <li className="menu-link"><Link to="/blog">Blog</Link></li>
            </ul>
          </nav>

        </div>
      </header>
    )
  }
}


// TODO: goaly pro tento rok - open source community
