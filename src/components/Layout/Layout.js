import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';

export default class Layout extends Component {
  constructor(props) {
      super(props)
  }

  render() {

    return (
      <div>
        <Header />

        {/* this will be either <Home> or <About> */}
        {this.props.children || <About />}

        <Footer />
      </div>
    )
  }
}
