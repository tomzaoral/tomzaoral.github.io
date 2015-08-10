import React, { Component } from 'react';
import './Portfolio.less';
import emilymoda from './emilymoda.jpg';

export default class Portfolio extends Component {
  constructor(props) {
      super(props)
      document.title = 'Portfolio';
  }

  render() {
    return (
      <main>
        <div className="portfolio">
          <div className="container">
            <h1 className="portfolio__heading">Portfolio</h1>
            <p className="portfolio__subheading">A selection of the most recent projects I’ve been working on as a freelancer.</p>

            <div className="row portfolio__item">
              <div className="col-lg-5">
                <h2 className="portfolio__title">Emily-móda boutique</h2>
                <p className="portfolio__content">
                  A local boutique specialising in selling fashion clothes for women. I was responsible for UI design, front-end & back-end development.
                </p>
                <a className="btn portfolio__btn portfolio__btn--ghost" href="http://emily-moda.cz/" target="_blank">See it online</a>
              </div>
              <div className="col-lg-7 text-center hidden-xs">
                <img className="portfolio__img" src={emilymoda} />
              </div>
            </div>

          </div>
        </div>
      </main>
    )
  }
}
