import React, { Component } from 'react';
import './Footer.less';
import Fa from '../_helpers/Fa/Fa';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__copyright">
            <Fa class="copyright" /> 2015 Tomas Zaoral
          </div>
          <div className="footer__code">
            <a href="https://github.com/tomzaoral/tomzaoral.github.io" target="_blank"><Fa class="code" /> with <Fa class="heart" /> in Czech Republic</a>
          </div>
        </div>
      </footer>
    )
  }
}
