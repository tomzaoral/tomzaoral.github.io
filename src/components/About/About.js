import React, { Component } from 'react';
import './About.less';
import Fa from '../_helpers/Fa/Fa';
import {Link} from 'react-router';

export default class About extends Component {
  constructor(props) {
      super(props)
      document.title = 'Tom Zaoral';
  }

  handleShowEasterEgg = (e) => {
    e.prevendDefault;
    Array.prototype.slice.call(document.querySelectorAll('[data-reactid]'))
    .forEach(function(element) {
      element.style.background = 'rgba(0,216,255,0.1)';
    });
  }

  render() {
    return (
      <main>
        <div className="about">
          <div className="container">

            <p className="about__hello">
              Hi there, I'm Tom. I am an enthusiastic <strong>Javascript developer</strong> from Czech Republic.
              I <a href="https://twitter.com/tomzaoral" target="_blank">tweet</a> and <a href="https://github.com/tomzaoral" target="_blank">share code</a> about latest web technologies.
            </p>

            <div className="about__wrapper">
              <div className="row">

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <h2 className="about__heading">More about me</h2>
                  <p className="about__text">
                    I enjoy turning complex problems into simple, beautiful and user friendly
                    applications. When I'm not coding or learning new stuff, you'll
                    find me in the gym or running.
                  </p>
                  <a href="https://twitter.com/tomzaoral" className="twitter-follow-button" data-show-count="false" data-size="large">Follow @tomzaoral</a>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <h2>&nbsp;</h2>
                  <p className="about__text">
                    Through my work in corporate area and startups, I have an experience
                    on various projects including corporate or custom tailored websites.
                    From time to time, I work on small <Link to="/portfolio">side projects</Link>.
                  </p>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <h2>&nbsp;</h2>
                  <p className="about__text">
                    The world of the web is a fast–paced and constantly evolving environment.
                    A truly great developer must stay up–to–date and be part of community.
                    That's where my goal has always been.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="contact">
          <div className="container">
            <h1 className="contact__heading">Let's talk</h1>
            <p className="contact__text">
              Do you have some interesting project? <span className='contact__text--strike'>I'm always up for new challenge,
              just drop me a message</span> I'm very busy but stil you can drop me a message 🐸
            </p>
            <a href="mailto:zaoraltomas@outlook.com?subject=Hello there!" className="contact__button contact__button--primary btn btn-primary">Say hello</a>
          </div>
        </div>

        <div className="about about--last-child">
          <div className="container">
            <p className="about__powered">
              Feel the power of <a href="#" onClick={this.handleShowEasterEgg}>ReactJS</a>
            </p>
          </div>
        </div>

      </main>
    )
  }
}
