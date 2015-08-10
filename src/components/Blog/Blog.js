import React, { Component } from 'react';
import { Link } from 'react-router';
import posts from './../../../posts.json';
import './Blog.less';
import moment from 'moment';

export default class Blog extends Component {
  constructor(props) {
      super(props)
      document.title = 'Blog';
  }

  render() {
    let postsLi = posts.map(function(post) {
      let url = 'blog/' + post.path;
      return <li key={url} className="blog__post"><Link className="blog__link" to={url}>{post.title}</Link><p className="blog__date">{moment(post.date).format('LL')}</p></li>;
    });

    if (postsLi.length === 0) {
      postsLi = 'No article yet.';
    }

    return (
      <main>
        <div className="blog">
          <div className="container">
            <h1 className="blog__heading">Articles</h1>
            <ul className="blog__posts list-unstyled">
              {postsLi}
            </ul>
          </div>
        </div>
      </main>
    )
  }
}
