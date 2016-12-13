import React, { Component } from 'react';
import { Link } from 'react-router';
import './Header.less';
import photo from './photo.jpg';
import Fa from '../_helpers/Fa/Fa';

export default class Header extends Component {
  constructor(props) {
      super(props)
      window.addEventListener('scroll', this.onScroll, false);
  }

  state = {
    sticky: false
  }

  onScroll = (event) => {
      let header = React.findDOMNode(this);
      if (window.scrollY > (header.scrollHeight - 65)) {
        this.setState({
        sticky: true
        });
      } else {
        this.setState({
          sticky: false
        });
      }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  render() {
    let classString = "header";
    if (this.state.sticky) {
      classString += " sticky";
    }

    return (
      <header className={classString}>
        <div>
          <div className="container">
            <div className="profile">
              <div className="profile__wrapper">
                <img className="profile__photo" src={photo} width="125" height="125" alt="Tomas Zaoral - profil photo" />
                <ul className="profile__social">
                  <li className="profile__social-link">
                    <a href="http://cz.linkedin.com/in/tomzaoral" target="_blank"><Fa class="linkedin fa-lg" title="LinkedIn profile" /></a>
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
              <p className="profile__description">Javacript developer with passion for modern technologies</p>
            </div>

            <nav className="nav">
              <ul className="menu">
                <li className="menu__link"><Link to="/">About</Link></li>
                <li className="menu__link"><Link to="/portfolio">Portfolio</Link></li>
                {/* <li className="menu__link"><Link to="/blog">Blog</Link></li> */}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}
