import React, { Component } from 'react';
import './About.less';

export default class About extends Component {
  constructor(props) {
      super(props)
      document.title = 'Tom Zaoral';
  }

  render() {
    return (
      <main>
        <p>Hello my name is Tom, I'm a 26 years old <strong>web developer</strong> from the Czech Republic.</p>
      </main>
    )
  }
}
