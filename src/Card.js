import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    return (
      <div className="article-card">
        <span className="title">{this.props.article.title}</span>
        <span className="author">{this.props.article.author}</span>
        <span className="excerpt">{this.props.article.excerpt}</span>
      </div>
    );
  }
}
Card.PropTypes = {
  article: PropTypes.object.isRequired,
};

export default Card;
