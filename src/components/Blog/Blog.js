import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Blog extends Component {
  constructor(props) {
      super(props)
      document.title = 'Blog';
  }

  render() {
    return (
      <main>
        <h2>..also work in progress :-)</h2>
        <p>More stuff coming soon...</p>
      </main>
    )
  }
}
