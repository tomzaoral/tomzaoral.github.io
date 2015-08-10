import React, { Component } from 'react';
import './Post.less';
import Fa from '../_helpers/Fa/Fa';
import posts from './../../../posts.json';
import moment from 'moment';

export default class Post extends Component {
  constructor(props) {
      super(props)
      this.post = posts.filter(item =>
        item.path === this.props.params.title
      );

      this.post = this.post[0];
      document.title = this.post.title;

      /* * * CONFIGURATION VARIABLES * * */
      var disqus_url = 'http://tomzaoral.com/blog/' + this.props.params.title;
      var disqus_title = this.post.title;
      var disqus_shortname = 'tomzaoral';
      /* * * DON'T EDIT BELOW THIS LINE * * */
      (function() {
          var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
          dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      })();
  }

  render() {
    let content = require('./../../../_posts/' + this.props.params.title + '.md');
    let githubUrl = 'https://github.com/tomzaoral/tomzaoral.github.io/tree/master/_posts/' + this.props.params.title + '.md';
    return (
      <main>
        <div className="post">
          <div className="post__header">
            <h1 className="post__heading">{this.post.title}</h1>
            <a className="post__edit" href={githubUrl}><Fa class="github" /> Edit this page on Github</a>
            <span className="post__date">{moment(this.post.date).format('LL')}</span>
          </div>
          <div className="post__content" dangerouslySetInnerHTML={{__html: content}} />
          <div className="post__share">
            <a href="https://twitter.com/share" className="twitter-share-button" data-via="tomzaoral" data-size="large">Tweet</a>
          </div>
          <div id="disqus_thread"></div>
        </div>
      </main>
    )
  }
}
