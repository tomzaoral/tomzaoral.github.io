import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { history } from 'react-router/lib/HashHistory';
import Header from '../Header/Header';
import Home from '../Home/Home';

export default class Layout extends Component {
  constructor(props) {
      super(props)
  }

  render() {

    return (
      <div>
        <Header />

        {/* this will be either <Home> or <About> */}
        <div className="container">
          {this.props.children || <Home />}
        </div>
      </div>
    )
  }
}
