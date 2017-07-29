import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    return (
      <div>
        <span>{this.props.article.author}</span>
        <span>{this.props.article.excerpt}</span>
        <span>{this.props.article.id}</span>
        <span>{this.props.article.title}</span>
      </div>
    );
  }
}

Card.PropTypes = {
  article: PropTypes.object.isRequired,
};

export default Card;
