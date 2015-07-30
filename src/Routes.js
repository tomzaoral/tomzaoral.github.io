import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';
import Layout from './components/Layout/Layout';
import Blog from './components/Blog/Blog';
import Portfolio from './components/Portfolio/Portfolio';

const history = process.env.NODE_ENV === 'production' ?
  new HashHistory() :
  new BrowserHistory();

export default (
  <Router history={history}>
    <Route path="/" component={Layout}>
      <Route path="portfolio" component={Portfolio} />
      <Route path="blog" component={Blog} />
      <Redirect from="/:anything" to="/" />
    </Route>
  </Router>
)
