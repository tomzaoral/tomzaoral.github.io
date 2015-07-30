import React, { Component, PropTypes } from 'react';

export default class Fa extends Component {
  static propTypes = {
    class: PropTypes.string.isRequired,
    title: PropTypes.string
  }

  render() {
    let classes = ['fa', 'fa-' +  this.props.class].join(' ');
    return (
      <i className={classes} title={this.props.title} alt={this.props.title}></i>
    )
  }
}
