import React from 'react';
import { Router, Route, Link, Redirect, browserHistory } from 'react-router';
import Layout from './components/Layout/Layout';
import Blog from './components/Blog/Blog';
import Portfolio from './components/Portfolio/Portfolio';
import Post from './components/Post/Post';


export default (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <Route path="portfolio" component={Portfolio} />
      {/* <Route path="blog" component={Blog} />
      <Route path="blog/:title" component={Post} /> */}

      <Redirect from="/:anything" to="/" />
    </Route>
  </Router>
)
